export const SET_SNACKBAR = "websiteSnackbar";

const DEFAULT_TIME = 4000;
const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
  snackbarTime: 4000,
};

export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  snackbarMessage = "",
  removeDefaultTime = false
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  snackbarMessage,
  removeDefaultTime,
});

// 26 line specifies that we can now export a modules without of its name means anonymous export

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  debugger
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarType, snackbarMessage, removeDefaultTime } =
        action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
        snackbarTime: removeDefaultTime === true ? null : DEFAULT_TIME,
      };
    default:
      return state;
  }
};
