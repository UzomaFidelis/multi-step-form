import { FormState, FormAction } from "./types";

export const initialState = {
  step: 1,
  userInfo: {
    name: "",
    email: "",
    phoneNum: "",
    billingType: "monthly",
    selectedPlan: "arcade",
    selectedAddOns: [],
  },
};

export function reducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "next-step": {
      return { ...state, step: state.step + 1 };
    }
    case "previous-step": {
      return { ...state, step: state.step - 1 };
    }
    case "monthly-billing": {
      return {
        ...state,
        userInfo: { ...state.userInfo, billingType: "monthly" },
      };
    }
    case "yearly-billing": {
      return {
        ...state,
        userInfo: { ...state.userInfo, billingType: "yearly" },
      };
    }
    case "arcade-plan": {
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedPlan: "arcade" },
      };
    }
    case "advanced-plan": {
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedPlan: "advanced" },
      };
    }
    case "pro-plan": {
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedPlan: "pro" },
      };
    }
    case "remove-addon": {
      const addOnIndex = [...state.userInfo.selectedAddOns].indexOf(
        action.payload,
      );
      const updatedAdOns = [...state.userInfo.selectedAddOns];
      updatedAdOns.splice(addOnIndex, 1);
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedAddOns: updatedAdOns },
      };
    }

    case "select-addon": {
      const updatedAdOns = [...state.userInfo.selectedAddOns];
      updatedAdOns.push(action.payload);
      return {
        ...state,
        userInfo: { ...state.userInfo, selectedAddOns: updatedAdOns },
      };
    }
    case "name-set": {
      return {
        ...state,
        userInfo: { ...state.userInfo, name: action.payload },
      };
    }
    case "email-set": {
      return {
        ...state,
        userInfo: { ...state.userInfo, email: action.payload },
      };
    }
    case "phonenum-set": {
      return {
        ...state,
        userInfo: { ...state.userInfo, phoneNum: action.payload },
      };
    }
  }
}
