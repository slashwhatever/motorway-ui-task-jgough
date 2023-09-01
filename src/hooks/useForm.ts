import { useForm as useRHF } from "react-hook-form";
import { object, string, date, number, ValidationError } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import isEmailValidator from "validator/lib/isEmail";

/* 

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)
*/

import { parse, isDate } from "date-fns";

function parseDateString(value: string, originalValue: string) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const validationSchema = object({
  name: string().required("This is a required field"),
  email: string()
    .email("Invalid email format")
    .required("This is a required field")
    .test(
      "is-valid",
      () => `Invalid email format`,
      (value) =>
        value
          ? isEmailValidator(value)
          : new ValidationError("Invalid email format")
    ),

  dob: date()
    .transform(parseDateString)
    .required("This a required field")
    .max(new Date(), "Date of birth must be before today!"),
  color: string().required("This a required field"),
  salaryRange: number().min(0).max(100000).required("This a required field"),
});

const onSubmit = () => {
  console.log("Your form is great!");
};

export const useForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    dob: new Date(),
    color: "",
    salaryRange: 0,
  };

  const formMethods = useRHF({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return {
    formMethods,
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
