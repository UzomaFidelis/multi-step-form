import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "../styles/step1.scss";
import { FormStepProps, UserDataValidation } from "../types";

const Step1 = ({
  info,
  dispatchFn,
  validation,
  setValidation,
}: FormStepProps & {
  validation: UserDataValidation;
  setValidation: Dispatch<SetStateAction<UserDataValidation>>;
}) => {
  const handleNameInput = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      dispatchFn({ type: "name-set", payload: e.target.value });
    }
    if (!validation.name.notNull) {
      setValidation({
        ...validation,
        name: { ...validation.name, notNull: true },
      });
    }
  };

  const handleEmailInput = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      dispatchFn({ type: "email-set", payload: e.target.value });
    }
    if (!validation.email.notNull || !validation.email.validInput) {
      setValidation({
        ...validation,
        email: { notNull: true, validInput: true },
      });
    }
  };

  const handlePhoneNumInput = (e: ChangeEvent) => {
    if (!validation.phoneNum.notNull) {
      setValidation({
        ...validation,
        phoneNum: { notNull: true },
      });
    }
    if (e.target instanceof HTMLInputElement) {
      let value = e.target.value;

      if (value.startsWith("+")) {
        value = value.substring(1);
      }

      if (/^[0-9]+$/.test(value) || value === "") {
        if (value === "") {
          dispatchFn({ type: "phonenum-set", payload: value });
          return;
        }

        dispatchFn({ type: "phonenum-set", payload: `+${value}` });
      }
    }
  };
  return (
    <div className="step-one step">
      <fieldset className="personal-info form-set">
        <legend className="step__legend">
          <p className="step__title text--dark-blue">Personal info</p>
          <p className="step__description text--cool-grey">
            Please provide your name, email, address, and phone number.
          </p>
        </legend>
        <label
          htmlFor="name"
          className="step-one__name step-one__label text--label"
        >
          <span>Name</span>
          {!validation.name.notNull ? (
            <span className="step-one__error-text">This field is required</span>
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          id="name"
          className={`block step-one__input ${!validation.name.notNull ? "input-error" : ""}`}
          placeholder="e.g. Stephen King"
          onChange={handleNameInput}
          value={info.name}
        />
        <label
          htmlFor="email"
          className="step-one__email step-one__label text--label"
        >
          <span>Email Address</span>
          {!validation.email.notNull ? (
            <span className="step-one__error-text">This field is required</span>
          ) : (
            ""
          )}
          {!validation.email.validInput && validation.email.notNull ? (
            <span className="step-one__error-text">Invalid email</span>
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          id="email"
          className={`block step-one__input ${!validation.email.notNull || !validation.email.validInput ? "input-error" : ""}`}
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleEmailInput}
          value={info.email}
        />
        <label
          htmlFor="phone-number"
          className="step-one__phone text--label step-one__label"
        >
          <span>Phone Number</span>
          {!validation.phoneNum.notNull ? (
            <span className="step-one__error-text">This field is required</span>
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          id="phone-number"
          className={`block step-one__input ${!validation.phoneNum.notNull ? "input-error" : ""}`}
          placeholder="e.g. +1 234 567 890"
          onChange={handlePhoneNumInput}
          value={info.phoneNum}
        />
      </fieldset>
    </div>
  );
};

export default Step1;
