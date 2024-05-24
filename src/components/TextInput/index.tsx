import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef(
  ({ ...props }: TextInputProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <TextInputContainer>
        <input {...props} ref={ref} />
      </TextInputContainer>
    );
  }
);

export default TextInput;
