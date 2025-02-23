import { useFormContext } from "react-hook-form";
import AutoHeightTextArea from "./AutoHeightTextArea";

interface IFormItem {
  label: string;
  placeholder: string;
  number: string;
  className?: string;
  textarea?: boolean;
  formId: string;
}

const FormItem = ({
  label,
  placeholder,
  number,
  className,
  textarea,
  formId,
}: IFormItem) => {
  const { register } = useFormContext();

  return (
    <div
      className={`border-neutral-500 nth-1:border-t-[0.5px] nth-last-2:pb-32 border-b-[0.5px] flex gap-10 py-16 max-lg:py-12 w-full ${className}`}
    >
      <div className="text-neutral-500 pt-0.5">{number}</div>
      <div className="flex flex-col-reverse text-2xl gap-3 w-full max-lg:text-lg">
        {textarea ? (
          <AutoHeightTextArea
            id={formId}
            className="outline-0 w-full peer"
            placeholder={placeholder}
            required
            {...register(formId)}
          />
        ) : (
          <input
            type="text"
            id={formId}
            placeholder={placeholder}
            className="outline-0 peer"
            required
            {...register(formId)}
          />
        )}
        <label
          htmlFor="name"
          className="font-onest peer-valid:text-neutral-400"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormItem;
