import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, {error}] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Input {...field} id={field.name} placeholder={props.placeholder}/>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
