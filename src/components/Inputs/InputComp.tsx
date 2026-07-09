/** @format */

import React from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputPromps = {
  fieldLabel?: string;
  type: string;
  placeholder: string;
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

const InputComp = ({
  fieldLabel,
  type,
  placeholder,
  value,
  handleChange,
  className,
}: InputPromps) => {
  return (
    <Field>
      <FieldLabel htmlFor='input-required'>
        {fieldLabel} <span className='text-destructive'>*</span>
      </FieldLabel>
      <Input
        type={type}
        className={className}
        id='input-required'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </Field>
  );
};

export default InputComp;
