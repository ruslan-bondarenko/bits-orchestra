"use client";

import React, { FC, useState } from "react";
import {
  Controller,
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

import { useReviewsActions } from "@/base/store";
import { EMAIL_PATTERN, ERRORS_MESSAGES, DEFAULT_TEXT } from "@/shared/const";
import { Input, Button, ButtonVariantEnum, Checkbox } from "@/shared/ui";
import { IReview } from "@/shared";

type FormValues = {
  message: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
};

const ReviewForm: FC = () => {
  const { addReview } = useReviewsActions();
  const errorRequired = ERRORS_MESSAGES.required;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { control, handleSubmit, reset, formState } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newReview: IReview = {
      id: String(Date.now()),
      text: data.message,
      stars: data.rating,
      date: String(Date.now()),
      fullName: data.name,
      email: data.email,
      phone: data.phone,
    };

    addReview(newReview);
    reset();
    setIsChecked(false);
  };

  return (
    <div>
      <h3 className="text-3xl mb-2">Leave a Review</h3>
      <div className="text-m mb-6">
        Your email address will not be published! Required fields are marked *
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 md:gap-4"
      >
        <Controller
          render={({ field }) => (
            <Input
              name="message"
              inputRef={field.ref}
              placeholder="Comment *"
              inputValue={field.value}
              setInputValue={field.onChange}
              type="textarea"
              error={formState.errors.message}
            />
          )}
          name="message"
          control={control}
          rules={{ required: { value: true, message: errorRequired } }}
        />

        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-4">
          <Controller
            render={({ field }) => (
              <Input
                name="name"
                inputRef={field.ref}
                placeholder="Name *"
                inputValue={field.value}
                setInputValue={field.onChange}
                error={formState.errors.name}
              />
            )}
            name="name"
            control={control}
            rules={{ required: { value: true, message: errorRequired } }}
          />

          <Controller
            render={({ field }) => (
              <Input
                name="email"
                inputRef={field.ref}
                placeholder="Email *"
                inputValue={field.value}
                setInputValue={field.onChange}
                error={formState.errors.email}
              />
            )}
            name="email"
            control={control}
            rules={{
              required: { value: true, message: errorRequired },
              pattern: {
                value: EMAIL_PATTERN,
                message: ERRORS_MESSAGES.email,
              },
            }}
          />
        </div>

        <Controller
          render={({ field }) => (
            <Input
              name="phone"
              inputRef={field.ref}
              placeholder="Phone (optional)"
              inputValue={field.value}
              setInputValue={field.onChange}
              type="number"
            />
          )}
          name="phone"
          control={control}
        />

        <Controller
          render={({ field }) => (
            <Input
              name="rating"
              className="!w-32"
              inputRef={field.ref}
              placeholder="Rate us *"
              inputValue={String(field.value)}
              setInputValue={field.onChange}
              type="number"
              error={formState.errors.rating}
              min={1}
              max={5}
            />
          )}
          name="rating"
          control={control}
          rules={{
            required: { value: true, message: errorRequired },
            min: { value: 1, message: "Rating must be at least 1" },
            max: { value: 5, message: "Rating must be at most 5" },
          }}
        />

        <Checkbox
          checkboxPosition="cursor-pointer top-0 left-0 h-5 w-5"
          className="pl-7 mt-2 md:mt-0 mb-4"
          htmlFor={`checkbox-form`}
          label="Save my name, email, and website in this browser for the next time I comment"
          checked={isChecked}
          onChange={() => setIsChecked((state) => !state)}
        />
        <Button
          className="h-12 w-full sm:w-1/2 md:w-1/3 rounded-xl"
          variant={ButtonVariantEnum.GRAY}
          type="submit"
          disabled={formState.isSubmitting}
        >
          <span className="text-m">Post Review</span>
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
