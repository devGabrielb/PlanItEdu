"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Home,
  Italic,
  List,
  Redo,
  Strikethrough,
  Underline,
  Undo,
} from "lucide-react";
import { mergeRegister } from "@lexical/utils";
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  insertList,
  INSERT_CHECK_LIST_COMMAND,
} from "@lexical/list";

import { $setBlocksType } from "@lexical/selection";

import { useCallback, useEffect, useRef, useState } from "react";

const LowPriority = 1;

function Divider() {
  return <div className="w-px h-6 bg-gray-300 mx-2" />;
}
const blockTypeToBlockName = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
};

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [blockType, setBlockType] =
    useState<keyof typeof blockTypeToBlockName>("paragraph");

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);
  const formatBlock = (type: keyof typeof blockTypeToBlockName) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (blockType !== type) {
          switch (type) {
            case "bullet":
              editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
              break;
            case "check":
              editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
              break;
            case "number":
              editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
              break;
            default:
              $setBlocksType(selection, () => $createParagraphNode());
              break;
          }
          setBlockType(type); // Atualiza blockType para o novo tipo
        } else {
          $setBlocksType(selection, () => $createParagraphNode());
          setBlockType("paragraph");
        }
      }
    });
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        INSERT_UNORDERED_LIST_COMMAND,
        () => {
          insertList(editor, "bullet");
          return true;
        },
        LowPriority
      )
    );
  }, [editor, $updateToolbar]);

  return (
    <div
      className="w-full flex items-center rounded-tl-lg rounded-tr-lg space-x-3 border-b px-2"
      ref={toolbarRef}
    >
      <button
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        className={`toolbar-item mr-2 ${
          !canUndo ? "text-gray-400" : "text-gray-900"
        } `}
        aria-label="Undo"
      >
        <Undo />
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        className={`toolbar-item mr-2 ${
          !canRedo ? "text-gray-400" : "text-gray-900"
        } `}
        aria-label="Redo"
      >
        <Redo />
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        className={`flex justify-center hover:bg-gray-200 items-center size-8 rounded-md ${
          isBold ? "bg-gray-200" : ""
        }`}
        aria-label="Format Bold"
      >
        <Bold />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        className={`flex justify-center hover:bg-gray-200 items-center size-8 rounded-md italic ${
          isItalic ? "bg-gray-200" : ""
        }`}
        aria-label="Format Italics"
      >
        <Italic />
      </button>
      <button
        onClick={() => {
          formatBlock("bullet");
        }}
        className={`flex justify-center hover:bg-gray-200 items-center size-8 rounded-md`}
        aria-label="Format Unordered List"
      >
        <List />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
        className={`flex justify-center hover:bg-gray-200 items-center size-8 rounded-md underline ${
          isUnderline ? "bg-gray-200" : ""
        }`}
        aria-label="Format Underline"
      >
        <Underline />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
        className={`flex justify-center hover:bg-gray-200 items-center size-8 rounded-md line-through ${
          isStrikethrough ? "bg-gray-200" : ""
        }`}
        aria-label="Format Strikethrough"
      >
        <Strikethrough />
      </button>
      <Divider />
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}
        className="size-8 rounded-md"
        aria-label="Left Align"
      >
        <AlignLeft />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}
        className="size-8 rounded-md"
        aria-label="Center Align"
      >
        <AlignCenter />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}
        className="size-8 rounded-md"
        aria-label="Right Align"
      >
        <AlignRight />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        }}
        className="size-8 rounded-md"
        aria-label="Justify Align"
      >
        <AlignJustify />
      </button>
    </div>
  );
}
