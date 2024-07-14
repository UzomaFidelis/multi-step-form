import { FormStepProps, UserInfo } from "../types";
import "../styles/step4.scss";
import { plansData, addonsData } from "../data";

const initialFinalPlan = {
  name: "--",
  cost: { month: 0, year: 0 },
};

const Step4 = ({ info }: { info: UserInfo }) => {
  let totalCost = 0;
  const plan = assignPlan() || initialFinalPlan;
  const addOns = assignAddons() || [];

  function assignPlan() {
    let currentPlan = plansData.find((obj) => obj.name === info.selectedPlan);
    if (currentPlan !== undefined) {
      totalCost +=
        info.billingType === "monthly"
          ? currentPlan.cost.month
          : currentPlan.cost.year;
      return currentPlan;
    }
  }
  function assignAddons() {
    const pickedAddons = addonsData.filter((obj) =>
      info.selectedAddOns.includes(obj.name),
    );
    totalCost +=
      info.billingType === "monthly"
        ? pickedAddons.reduce((acc, obj) => acc + obj.cost.month, 0)
        : pickedAddons.reduce((acc, obj) => acc + obj.cost.year, 0);
    return pickedAddons;
  }

  return (
    <div className="step step-four">
      <div className="finishing form-set">
        <div className="finishing__legend step__legend">
          <p className="step__title text--dark-blue">Finishing up</p>
          <p className="step__description text--cool-grey">
            Double check everything looks OK before confirming.
          </p>
        </div>
      </div>
      <div className="form-choice">
        <div className="form-choice__plan">
          <span>
            <p className="form-choice__plan-type">
              <span className="form-choice__plan-name">{plan.name}</span>{" "}
              <span className="form-choice__billing-type">
                ({info.billingType})
              </span>
            </p>
            <button className="form-choice__change-btn cursor-pointer">
              Change
            </button>
          </span>
          <span>
            <p className="form-choice__plan-price">
              {info.billingType === "monthly"
                ? `$${plan.cost.month}/mo`
                : `$${plan.cost.year}/yr`}
            </p>
          </span>
        </div>
        <hr className="form-choice__divider" />
        <ul className="form-choice__addons">
          {addOns.map((addOn, idx) => (
            <li className="form-choice__addons-item" key={idx}>
              <p className="form-choice__addons-name">{addOn.display}</p>
              <p className="form-choice__addons-price">
                +$
                {info.billingType === "monthly"
                  ? `${addOn.cost.month}/mo`
                  : `${addOn.cost.year}/yr`}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="plan-total">
        <p className="plan-total__name">
          Total (per {info.billingType === "monthly" ? "month" : "year"})
        </p>
        <div className="plan-total__amount">
          +${totalCost}/{info.billingType === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </div>
  );
};

export default Step4;
