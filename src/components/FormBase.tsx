import { useReducer, useState } from "react";
import FormInput from "./FormInput";
import "../styles/formBase.scss";
import { reducer, initialState } from "../reducer";
import { validateUserData } from "../validate";

const initialUserDataValidation = {
  name: {
    notNull: true,
  },
  email: { notNull: true, validInput: true },
  phoneNum: { notNull: true },
};

const FormBase = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userDataValidation, setUserDataValidation] = useState(
    initialUserDataValidation,
  );
  const [completed, setCompleted] = useState(false);

  const handleToNext = () => {
    const validation = validateUserData(
      state.userInfo.name,
      state.userInfo.email,
      state.userInfo.phoneNum,
      { ...userDataValidation },
    );
    if (validation.success) {
      dispatch({ type: "next-step" });
    } else {
    }
    setUserDataValidation(validation.validation);
  };

  const handleToPrev = () => {
    dispatch({ type: "previous-step" });
  };

  return (
    <main>
      <section className="step-progress">
        <div className="steps">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((num, idx) => (
            <span
              className="steps__item"
              key={idx}
              style={{
                backgroundColor: `${state.step === num ? "hsl(206, 94%, 87%)" : "transparent"}`,
              }}
            >
              <p
                style={{
                  color: `${
                    state.step === num ? "hsl(213, 96%, 18%)" : "white"
                  }`,
                  fontWeight: 500,
                }}
              >
                {num}
              </p>
            </span>
          ))}
        </div>
      </section>
      <section className="forms">
        <FormInput
          formState={state}
          dispatchFn={dispatch}
          validation={userDataValidation}
          completed={completed}
        />
      </section>
      <section className="form-navigate">
        <button
          className="prev cursor-pointer"
          disabled={state.step === 1 || completed}
          style={{
            visibility: `${state.step === 1 || completed ? "hidden" : "visible"}`,
          }}
          onClick={handleToPrev}
        >
          Go back
        </button>
        {state.step >= 1 && state.step < 4 && (
          <button className="next cursor-pointer" onClick={handleToNext}>
            Next Step
          </button>
        )}
        {state.step === 4 && (
          <button
            className="confirm cursor-pointer"
            disabled={completed}
            style={{
              visibility: `${completed ? "hidden" : "visible"}`,
            }}
            onClick={() => setCompleted(true)}
          >
            Confirm
          </button>
        )}
      </section>
    </main>
  );
};

export default FormBase;