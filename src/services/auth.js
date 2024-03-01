import axios from "axios";

export const login = async ({ email, password }) => {
  return axios.post(
    "https://lobster-app-ddwng.ondigitalocean.app/user/login",
    { email, password },
    {
      headers: {
        //"Content-Type": "multipart/form-data",
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
      },
    }
  );
};
