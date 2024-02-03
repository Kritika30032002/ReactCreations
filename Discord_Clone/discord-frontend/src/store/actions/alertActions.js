const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};

export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
