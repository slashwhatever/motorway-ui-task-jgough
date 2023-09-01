import { FormProvider } from "react-hook-form";
import { useForm } from "../../hooks";
import { StyledForm } from "./styled";
import { ChangeEvent, useState } from "react";

const Form = (): JSX.Element => {
  const { formMethods, register, onSubmit, errors } = useForm();
  const [salaryDisplay, setSalaryDisplay] = useState<string>("0");

  const handleSalaryChange = (value: string) => {
    const salaryAsNumber = parseInt(value, 10);
    const salaryLowerBound = Math.max(salaryAsNumber - 10000, 0);
    setSalaryDisplay(
      salaryAsNumber > 0
        ? `${salaryLowerBound} - ${salaryAsNumber}`
        : `${salaryAsNumber}`
    );
  };

  const { onChange, ...rest } = register("salaryRange");

  return (
    <>
      <FormProvider {...formMethods}>
        <StyledForm onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={errors.name ? "error" : ""}
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={errors.email ? "error" : ""}
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}

          <label htmlFor="name">Date of Birth</label>
          <input
            type="date"
            className={errors.dob ? "error" : ""}
            {...register("dob")}
            aria-invalid={errors.dob ? "true" : "false"}
          />
          {errors.dob && <span role="alert">{errors.dob.message}</span>}

          <label htmlFor="name">Favourite color</label>
          <input
            type="text"
            className={errors.color ? "error" : ""}
            {...register("color")}
            aria-invalid={errors.color ? "true" : "false"}
          />
          {errors.color && <span role="alert">{errors.color.message}</span>}

          <label htmlFor="name">Salary range: {salaryDisplay}</label>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            className={errors.salaryRange ? "error" : ""}
            {...rest}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChange(e);
              handleSalaryChange(e.currentTarget.value);
            }}
            aria-invalid={errors.salaryRange ? "true" : "false"}
          />
          {errors.salaryRange && (
            <span role="alert">{errors.salaryRange.message}</span>
          )}

          <input type="submit" />
        </StyledForm>
      </FormProvider>
    </>
  );
};

export default Form;
