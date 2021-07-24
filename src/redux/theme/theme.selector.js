import { createSelector } from "reselect";

const selectTheme = (state) => {
  console.log("theme selector state : ", state);
  return state.theme;
};

export const selectAppTheme = createSelector(
  [selectTheme],
  (theme) => theme.theme
);
