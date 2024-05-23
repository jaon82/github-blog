import { InputHTMLAttributes } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      <input {...props} placeholder="Buscar conteúdo" />
    </TextInputContainer>
  );
}
