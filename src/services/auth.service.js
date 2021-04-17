import axios from "axios";

const API_URL = "http://localhost:7070/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("account", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("account");
  }

  register(name, email, password) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
    });
  }
}

export default new AuthService();