import AutoHeightTextArea from "./AutoHeightTextArea";

interface IFormItem {
  label: string;
  placeholder: string;
  number: string;
  className?: string;
  textarea?: boolean;
}

const FormItem = ({
  label,
  placeholder,
  number,
  className,
  textarea,
}: IFormItem) => {
  return (
    <div
      className={`border-white nth-1:border-t nth-last-1:border-b-0 border-b flex gap-10 py-12 w-full ${className}`}
    >
      <div className="text-neutral-500 pt-0.5">{number}</div>
      <div className="flex flex-col text-2xl gap-3 w-full max-lg:text-lg">
        <label htmlFor="name" className="font-onest">
          {label}
        </label>
        {textarea ? (
          <AutoHeightTextArea
            id="name"
            className="outline-0 w-full"
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            id="name"
            placeholder={placeholder}
            className="outline-0"
          />
        )}
      </div>
    </div>
  );
};

export default FormItem;
