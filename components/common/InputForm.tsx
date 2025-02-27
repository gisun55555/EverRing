import { InputFormProps } from "@customTypes/form";
import Input from "@components/common/Input";

export default function InputForm({
  name,
  register,
  rules,
  errors,
  value,
  readOnly,
  onChange,
  ...props
}: InputFormProps) {
  const errorMessage = errors?.[name]?.message || "";
  const isInvalid = !!errors?.[name];

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <Input
        name={name}
        isInvalid={isInvalid}
        {...(register && register(name, rules))}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        {...props}
      />
      {isInvalid && (
        <p className="text-sm font-semibold text-red">{errorMessage}</p>
      )}
    </div>
  );
}
