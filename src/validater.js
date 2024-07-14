import * as z from "zod";

const UserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    phoneNum: z.string(),
  })
  .required();
const nameSchema = z
  .string()
  .refine((val) => val.length > 0, { message: "Required" });
const emailSchema = z
  .string()
  .email()
  .refine((val) => val.length > 0, { message: "Required" });
const phoneNumSchema = z
  .string()
  .refine((val) => val.length > 0, { message: "Required" });

// const name = "John Doe";
const name = "";
// const email = "johndoe@gmail.com";
const email = "";

const phoneNum = "7346374676";

export const validateUserData = () => {
  // const nameValidation = nameSchema.safeParse(name);
  // console.log(nameValidation.error);

  const emailValidation = emailSchema.safeParse(email);
  console.log(emailValidation.error);
  // phoneNumSchema.parse(phoneNum);
};

validateUserData();
