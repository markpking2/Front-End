import axios from "axios";
import { axiosWithAuth } from "../components/AxiosAuth";

import {
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  SENDING_DATA,
  LOGOUT,
  LOGIN,
  LOGIN_MODAL_ON,
  LOGIN_MODAL_OFF,
  REGISTER_MODAL_ON,
  REGISTER_MODAL_OFF,
  MESSAGE_MODAL_ON,
  MESSAGE_MODAL_OFF,
  MODULE_MODAL_ON,
  MODULE_MODAL_OFF,
  EDIT_MODAL_ON,
  EDIT_MODAL_OFF,
  DELETE_MODAL_ON,
  DELETE_MODAL_OFF
} from "../reducers";

export const sendMessage = (message, history) => {
  message.userID = localStorage.getItem("userID");
  return dispatch => {
    axiosWithAuth()
      .post("/", message)
      .then(res => {
        dispatch({
          type: MESSAGE_MODAL_ON
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: MESSAGE_ERROR
        });
      });
  };
};

export const editFunction = (message, history) => {
  delete message.confirmPassword;
  message.phone = "+1" + message.phone;
  if (!message.password) {
    delete message.password;
  }
  const uid = localStorage.getItem("userID");
  return dispatch => {
    axiosWithAuth()
      .put(`/users/${uid}`, message)
      .then(res => {
        dispatch({
          type: EDIT_MODAL_ON
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: MESSAGE_ERROR
        });
      });
  };
};

export const deleteFunction = history => {
  const uid = localStorage.getItem("userID");
  return dispatch => {
    axiosWithAuth()
      .delete(`/users/${uid}`)
      .then(res => {
        dispatch({ type: DELETE_MODAL_ON });
        localStorage.setItem("userID", "");
        localStorage.setItem("ec-token", "");
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loginFunction = (credentials, history) => {
  return dispatch => {
    axios
      .post("https://empowered-conversations.herokuapp.com/login", credentials)
      .then(res => {
        localStorage.setItem("userID", res.data.userID);
        localStorage.setItem("ec-token", res.data.token);
        dispatch({ type: LOGIN });
        dispatch({ type: LOGIN_MODAL_ON });
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  };
};

export const logoutFunction = () => {
  return {
    type: LOGOUT
  };
};

export const loginTest = () => {
  return {
    type: LOGIN
  };
};

export const registerFunction = (credentials, history) => {
  credentials.phone = "+1" + credentials.phone;
  delete credentials.confirmPassword;

  return dispatch => {
    axios
      .post(
        "https://empowered-conversations.herokuapp.com/register",
        credentials
      )
      .then(res => {
        dispatch({ type: REGISTER_MODAL_ON });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const activateLoginModal = () => {
  return { type: LOGIN_MODAL_ON };
};

export const deactivateLoginModal = () => {
  return { type: LOGIN_MODAL_OFF };
};

export const activateRegisterModal = () => {
  return { type: REGISTER_MODAL_ON };
};

export const deactivateRegisterModal = () => {
  return { type: REGISTER_MODAL_OFF };
};

export const activateMessageModal = () => {
  return { type: MESSAGE_MODAL_ON };
};

export const deactivateMessageModal = () => {
  return { type: MESSAGE_MODAL_OFF };
};

export const activateModuleModal = () => {
  return { type: MODULE_MODAL_ON };
};

export const deactivateModuleModal = () => {
  return { type: MODULE_MODAL_OFF };
};

export const activateEditModal = () => {
  return { type: EDIT_MODAL_ON };
};

export const deactivateEditModal = () => {
  return { type: EDIT_MODAL_OFF };
};

export const activateDeleteModal = () => {
  return { type: DELETE_MODAL_ON };
};

export const deactivateDeleteModal = () => {
  return { type: DELETE_MODAL_OFF };
};
