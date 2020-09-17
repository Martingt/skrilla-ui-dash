import { apiRequest } from "../actions/api";
import { LOGIN } from "../actions/auth";

const SERVER_URL = `http://localhost:6001`;

export const appMiddleware = () => next => action => {
  next(action);
  switch (action.type) {
    case LOGIN: {
      next(
        apiRequest({
          url: `${SERVER_URL}/connect/token`,
          method: "POST",
          data: action.payload
        })
      );
      break;
    }
    default:
      break;
  }
};