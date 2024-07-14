import { ChangeEvent } from "react";
import "../styles/step3.scss";
import checkMark from "../assets/images/icon-checkmark.svg";
import { FormStepProps } from "../types";

const Step3 = ({ info, dispatchFn }: FormStepProps) => {
  const dispatchAddOn = (addon: string) => {
    if (info.selectedAddOns.includes(addon)) {
      dispatchFn({ type: "remove-addon", payload: addon });
    } else {
      dispatchFn({ type: "select-addon", payload: addon });
    }
  };

  const handleAddOnChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.id === "online-services") {
        dispatchAddOn("online-services");
      }
      if (e.target.id === "larger-storage") {
        dispatchAddOn("larger-storage");
      }
      if (e.target.id === "customizable-profile") {
        dispatchAddOn("customizable-profile");
      }
    }
  };

  return (
    <div className="step-three step">
      <fieldset className="select-adons form-set">
        <legend className="step__legend">
          <p className="step__title text--dark-blue">Pick add-ons</p>
          <p className="step__description text--cool-grey">
            Add-ons help enhance your gaming experience.
          </p>
        </legend>
        <label htmlFor="online-services" className="add-on__label">
          <div className="add-on__detail">
            <input
              type="checkbox"
              name="online-services"
              id="online-services"
              className="add-on__default-checkbox"
              onChange={handleAddOnChange}
              checked={info.selectedAddOns.includes("online-services")}
            />
            <span className="add-on__checkbox">
              <img src={checkMark} alt="" aria-hidden />
            </span>
            <div>
              <p className="add-on__name">Online service</p>
              <p className="add-on__description">Access to multiplayer games</p>
            </div>
          </div>
          <div>
            <p className="add-on__price">
              {info.billingType === "monthly" ? "+$1/mo" : "+$10/yr"}
            </p>
          </div>
        </label>
        <label htmlFor="larger-storage" className="add-on__label">
          <div className="add-on__detail">
            <input
              type="checkbox"
              name="larger-storage"
              id="larger-storage"
              className="add-on__default-checkbox"
              onChange={handleAddOnChange}
              checked={info.selectedAddOns.includes("larger-storage")}
            />
            <span className="add-on__checkbox">
              <img src={checkMark} alt="" aria-hidden />
            </span>
            <div>
              <p className="add-on__name">Larger storage</p>
              <p className="add-on__description">Extra 1TB of cloud save</p>
            </div>
          </div>
          <div>
            <p className="add-on__price">
              {info.billingType === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        </label>
        <label htmlFor="customizable-profile" className="add-on__label">
          <div className="add-on__detail">
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
              className="add-on__default-checkbox"
              onChange={handleAddOnChange}
              checked={info.selectedAddOns.includes("customizable-profile")}
            />
            <span className="add-on__checkbox">
              <img src={checkMark} alt="" aria-hidden />
            </span>
            <div>
              <p className="add-on__name">Customizable profile</p>
              <p className="add-on__description">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <div>
            <p className="add-on__price">
              {info.billingType === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        </label>
      </fieldset>
    </div>
  );
};

export default Step3;
