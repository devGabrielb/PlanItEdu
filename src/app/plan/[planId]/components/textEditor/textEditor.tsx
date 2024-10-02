"use client";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import Theme from "./plugins/theme";
import ToolbarPlugin from "./plugins/toolbarPlugin";
import { ListItemNode, ListNode } from "@lexical/list";
import {
  $createLineBreakNode,
  $getRoot,
  $getSelection,
  $insertNodes,
  CLEAR_HISTORY_COMMAND,
  createEditor,
  EditorState,
  LexicalEditor,
} from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { SetInitialValuePlugin } from "./plugins/setInitialValuePlugin";
import { Field, Section } from "@/app/plan/models/plans";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const placeholder = "Enter some rich text...";

interface EditorProps {
  field: Field;
  setSection: (section: string) => void;
}

export default function TextEditor({ field, setSection }: EditorProps) {
  const editor = createEditor();
  const editorConfig = {
    editor,
    namespace: "ReactEditor",
    nodes: [ListNode, ListItemNode],
    // Handling of errors during update
    onError(error: Error) {
      throw error;
    },
    // The editor theme
    theme: Theme,
  };

  const handleEditorChange = (editor: LexicalEditor) => {
    editor.update(() => {
      // Gera o HTML do conteúdo atual do editor
      const htmlString = $generateHtmlFromNodes(editor);

      // Define o HTML gerado no estado
      setSection(htmlString);
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    editor: LexicalEditor
  ) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Impede o comportamento padrão se necessário
      editor.update(() => {
        // Insere uma nova linha no editor
        console.log("Enter key pressed");
        const lineBreakNode = $createLineBreakNode();

        const selection = $getSelection();
        selection?.insertNodes([lineBreakNode]);
      });
    }
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div
        className={`relative bg-gray-100 rounded-tl-lg rounded-tr-lg p-2 border`}
      >
        {field.type != "text" && <ToolbarPlugin />}
        <div className="relative mt-4">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                onKeyDown={(e) => {
                  handleKeyDown(e, editor);
                }}
                className="focus:outline-none"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="overflow-hidden absolute text-ellipsis top-1 left-1 text-sm select-none inline-block pointer-events-none text-gray-400">
                    {placeholder}
                  </div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <SetInitialValuePlugin initHtml={field.content} />
          <OnChangePlugin
            onChange={(_, editor) => handleEditorChange(editor)}
          />
        </div>
      </div>
    </LexicalComposer>
  );
}
