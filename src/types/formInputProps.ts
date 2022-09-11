import { ChangeEventHandler } from "react";

export interface FormInputProps {
  label: string;
  name: string;
  id: string;
  type: InputTypes;
  value: any;

  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  className?: string;
}

export enum InputTypes {
  text = "text",
  number = "number",
  textarea = "textarea",
  date = "date",
}
