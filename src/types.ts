import { Dispatch, SetStateAction } from "react";

export type UserInfo = {
  name: string;
  email: string;
  phoneNum: string;
  billingType: string;
  selectedPlan: string;
  selectedAddOns: string[];
};
export type FormState = {
  step: number;
  userInfo: UserInfo;
};

export type FormStepSwitch = { type: "next-step" } | { type: "previous-step" };

export type BillingTypeSwitch =
  | { type: "monthly-billing" }
  | { type: "yearly-billing" };

export type PlanTypeSwitch =
  | { type: "arcade-plan" }
  | { type: "advanced-plan" }
  | { type: "pro-plan" };

export type AddOnSelect =
  | { type: "select-addon"; payload: string }
  | { type: "remove-addon"; payload: string };
export type InputDataSet =
  | { type: "name-set"; payload: string }
  | { type: "email-set"; payload: string }
  | { type: "phonenum-set"; payload: string };

export type FormAction =
  | FormStepSwitch
  | BillingTypeSwitch
  | PlanTypeSwitch
  | AddOnSelect
  | InputDataSet;

export type FormStepProps = {
  info: UserInfo;
  dispatchFn: Dispatch<FormAction>;
};
export type UserDataValidation = {
  name: {
    notNull: boolean;
  };
  email: { notNull: boolean; validInput: boolean };
  phoneNum: { notNull: boolean };
};
export type FormInputProps = {
  formState: FormState;
  dispatchFn: Dispatch<FormAction>;
  validation: UserDataValidation;
  setValidation: Dispatch<SetStateAction<UserDataValidation>>;
  completed: boolean;
};
export type StepOneState = {
  name: string;
  email: string;
  phoneNum: string;
};
