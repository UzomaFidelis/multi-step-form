import * as z from "zod";
import { UserDataValidation } from "./types";

const NameSchema = z
  .string()
  .refine((val) => val.length > 0, { message: "Required" });
const EmailSchema = z
  .string()
  .email()
  .refine((val) => val.length > 0, { message: "Required" });
const PhoneNumSchema = z
  .string()
  .refine((val) => val.length > 0, { message: "Required" });

export const validateUserData = (
  name: string,
  email: string,
  phoneNum: string,
  validationData: UserDataValidation,
) => {
  const nameValidation = NameSchema.safeParse(name);
  const emailValidation = EmailSchema.safeParse(email);
  const phoneNumValidation = PhoneNumSchema.safeParse(phoneNum);

  if (!nameValidation.success) {
    if (nameValidation.error.errors[0].message === "Required") {
      validationData.name.notNull = false;
    }
  } else {
    validationData.name.notNull = true;
  }

  if (!emailValidation.success) {
    emailValidation.error.errors.forEach((err) => {
      if (err.message === "Required") {
        validationData.email.notNull = false;
      } else if (err.message === "Invalid email")
        validationData.email.validInput = false;
    });
  } else {
    validationData.email.notNull = true;
    validationData.email.validInput = true;
  }
  if (!phoneNumValidation.success) {
    if (phoneNumValidation.error.errors[0].message === "Required") {
      validationData.phoneNum.notNull = false;
    }
  } else {
    validationData.phoneNum.notNull = true;
  }

  if (
    nameValidation.success &&
    emailValidation.success &&
    phoneNumValidation.success
  ) {
    return {
      success: true,
      validation: validationData,
    };
  } else {
    return {
      success: false,
      validation: validationData,
    };
  }
};
