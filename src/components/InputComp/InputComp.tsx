/** @format */

import { Search } from "lucide-react";

import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import useScroll from "@/base/hooks/useScroll";

export function InputInputGroup() {
  const { isScrolled } = useScroll();
  return (
    <Field>
      <InputGroup>
        <InputGroupInput
          id='input-group-url'
          placeholder='Search...'
          className={
            isScrolled
              ? "text-white outline-0 shadow-none"
              : "outline-0 shadow-none"
          }
        />
        <InputGroupAddon></InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <Search className={isScrolled ? "text-white" : ""} />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
