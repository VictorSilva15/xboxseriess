import { ChangeEventHandler, FormEvent } from "react";
import { FormInputProps, InputTypes } from "../../types/formInputProps";

interface FormProps {
  inputs: FormInputProps[];
  handleOnSubmit: (event: FormEvent) => Promise<void>;
  handleInputchanges?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

function BuildInputs(
  input: FormInputProps,
  handleInputchange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
) {
  switch (input.type) {
    case InputTypes.text:
      return (
        <div className="mt-6" key={input.label}>
          <label htmlFor={input.id} className="font-medium text-xl font-sans">
            {input.label}
          </label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange ?? handleInputchange}
            required={input.required}
            readOnly={input.readonly}
            className={
              "w-full h-12 rounded-md p-4 text-black bg-gray border-none mt-4" +
              " " +
              input.className
            }
          />
        </div>
      );
    case InputTypes.textarea:
      return (
        <div className="mt-6" key={input.label}>
          <label htmlFor={input.id} className="font-medium text-xl font-sans">
            {input.label}
          </label>
          <textarea
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange ?? handleInputchange}
            required={input.required}
            readOnly={input.readonly}
            className={
              "w-full min-h-[200px] rounded-md p-4 text-black bg-gray border-none mt-4" +
              " " +
              input.className
            }
          />
        </div>
      );
    default:
      return (
        <div className="mt-6" key={input.label}>
          <label htmlFor={input.id} className="font-medium text-xl font-sans">
            {input.label}
          </label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange ?? handleInputchange}
            required={input.required}
            readOnly={input.readonly}
            className={
              "w-full h-12 rounded-md p-4 text-black bg-gray border-none mt-4" +
              " " +
              input.className
            }
          />
        </div>
      );
  }
}

export default function Form({
  inputs,
  handleOnSubmit,
  handleInputchanges,
}: FormProps) {
  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-full lg:w-[60%] mx-auto m-4 py-4 px-6 rounded-md bg-white"
    >
      {inputs.map((input) => {
        return BuildInputs(input, handleInputchanges);
      })}

      <button
        type="submit"
        className="w-[150px] float-right p-3 rounded-md cursor-pointer bg-primary text-white text-md font-medium mt-6"
      >
        Enviar
      </button>
    </form>
  );
}
