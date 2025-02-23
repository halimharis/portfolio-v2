import { useRef, useEffect, forwardRef, TextareaHTMLAttributes } from "react";

interface AutoResizeTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const AutoHeightTextArea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>((props, ref) => {
  const { rows = 1, ...restProps } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", autoResize);
      return () => {
        textarea.removeEventListener("input", autoResize);
      };
    }
  }, []);

  return (
    <textarea
      ref={(node) => {
        textareaRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      rows={rows}
      {...restProps}
    />
  );
});

export default AutoHeightTextArea;
