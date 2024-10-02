export interface Field {
  label: string;
  type: string;
  content: string;
  style: string;
}

export interface Section {
  id: string;
  Title: string;
  fields: Field[];
  isSelected?: boolean;
  style: string;
}

export interface Plans {
  sections: Section[];
}
