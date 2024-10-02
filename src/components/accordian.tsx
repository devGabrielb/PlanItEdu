import { ChevronDown } from "lucide-react";
import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Tipagem para o contexto do Accordion
interface AccordianContextType {
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}

const AccordianContext = createContext<AccordianContextType | undefined>(
  undefined
);

// Tipagem para o componente Accordian
interface AccordianProps {
  children: ReactNode;
  value: string | null;
  onChange?: (value: string | null) => void;
  [key: string]: any; // Aceita outras props como className, id, etc.
}

export default function Accordian({
  children,
  value,
  onChange,
  ...props
}: AccordianProps) {
  const [selected, setSelected] = useState<string | null>(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

// Tipagem para o componente AccordianItem
interface AccordianItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
  [key: string]: any; // Aceita outras props como className, id, etc.
}

export function AccordianItem({
  children,
  value,
  trigger,
  ...props
}: AccordianItemProps) {
  const context = useContext(AccordianContext);

  if (!context) {
    throw new Error("AccordianItem must be used within an Accordian.");
  }

  const { selected, setSelected } = context;
  const open = selected === value;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Se o acordeão for aberto, rolamos para o conteúdo
    if (open && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // Faz a rolagem no contêiner
      });
    }
  }, [open]);
  const handleClick = () => {
    setSelected(open ? null : value);
  };
  return (
    <li className="border-b bg-white p-2 rounded-sm mt-4" {...props}>
      <header
        role="button"
        onClick={handleClick}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
