import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7070/api/auth/";

class AuthService {
  async login(email, password) {
    return await axios
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

  async update() {
    return await axios({
      method: "POST",
      url: API_URL + "update",
      data: { method: "post" },
      headers: authHeader(),
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("account", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  async register(name, email, password) {
    return await axios.post(API_URL + "signup", {
      name,
      email,
      password,
    });
  }
}

export default new AuthService();
