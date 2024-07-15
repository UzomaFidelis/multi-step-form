import { FormInputProps } from "../types";
import "../styles/formInput.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ThankYou from "./ThankYou";

const FormInput = ({
  formState,
  dispatchFn,
  validation,
  setValidation,
  completed,
}: FormInputProps) => {
  return (
    <div className="form-input">
      {formState.step === 1 && (
        <Step1
          info={formState.userInfo}
          dispatchFn={dispatchFn}
          validation={validation}
          setValidation={setValidation}
        />
      )}
      {formState.step === 2 && (
        <Step2 info={formState.userInfo} dispatchFn={dispatchFn} />
      )}
      {formState.step === 3 && (
        <Step3 info={formState.userInfo} dispatchFn={dispatchFn} />
      )}
      {formState.step === 4 && !completed && (
        <Step4 info={formState.userInfo} />
      )}
      {formState.step === 4 && completed && <ThankYou />}
    </div>
  );
};
export default FormInput;
