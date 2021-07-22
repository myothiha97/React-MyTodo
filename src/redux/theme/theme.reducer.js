import { themeActionTypes } from "./theme.types";
import { setTheme } from "./theme.actions";

const INITIAL_STATE = {
  theme: true,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case themeActionTypes.SET_THEME:
      return {
        ...state,
        theme: !state.theme,
      };

    default:
      return state;
  }
};

export default themeReducer;
