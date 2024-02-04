"use client";

import { FieldError, UseFormSetValue } from "react-hook-form";
import React, { FC, LegacyRef, useState, useEffect } from "react";
import clsx from "clsx";
import { EyeEmpty } from "@/shared/assets";

type Props = {
  inputRef?: LegacyRef<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  placeholder: string;
  className?: string;
  type?: "text" | "password" | "email" | "phone" | "textarea";
  error?: FieldError | undefined;
  inputValue?: string;
  setInputValue?: UseFormSetValue<string>;
  min?: number;
  max?: number;
};

const Input: FC<Props> = ({
  inputRef,
  className = "",
  label,
  placeholder,
  error,
  setInputValue = () => {},
  type = "text",
  inputValue = "",
  min,
  max,
}) => {
  const [value, setValue] = useState<string>(inputValue);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const inputType =
    type !== "password" ? type : !passwordShown ? "password" : "text";

  const isTextarea = type === "textarea";

  return (
    <div
      className={clsx("relative group flex flex-col w-full h-auto", className)}
    >
      {type === "password" && (
        <button
          className={clsx(
            "absolute right-0 bottom-4 w-8 h-8 z-30",
            "flex items-center justify-end"
          )}
          onClick={() => value && setPasswordShown((prevState) => !prevState)}
        >
          <EyeEmpty
            className={clsx("hover:fill-main-dark", {
              ["fill-main-dark"]: passwordShown,
            })}
          />
        </button>
      )}
      {isTextarea ? (
        <textarea
          ref={inputRef as LegacyRef<HTMLTextAreaElement>}
          className={clsx(
            "relative bg-transparent border rounded body-medium resize-none px-4 py-2",
            "w-full h-20 z-20 focus:border-gray-300",
            {
              ["text-red border-red focus:border-red"]: error,
              ["border-brd-color focus:border-brd-color"]: !error,
            }
          )}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setInputValue(event.target.value || "");
          }}
        />
      ) : (
        <input
          ref={inputRef as LegacyRef<HTMLInputElement>}
          className={clsx(
            "relative bg-transparent border rounded body-medium px-4",
            "w-full h-12 z-20 focus:border-gray-300",
            {
              ["text-red border-red focus:border-red"]: error,
              ["border-brd-color focus:border-brd-color"]: !error,
            }
          )}
          value={value}
          type={inputType}
          onChange={(event) => {
            setValue(event.target.value);
            setInputValue(event.target.value || "");
          }}
          placeholder={placeholder}
          min={min}
          max={max}
        />
      )}
    </div>
  );
};

export default Input;
