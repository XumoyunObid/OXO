import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/";

const request = axios.create({ baseURL: BASE_URL });

const sendDataToServer = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method === "post"
    ) {
      axios
        .post(BASE_URL + "all", JSON.parse(config.data), {
          headers: {
            Authorization: config.headers.Authorization // Ensure token is included
          }
        })
        .then((res) => res.data)
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    }
  }, 500);
};

request.interceptors.request.use(
  (config) => {
    // Get the token from cookies
    const token = Cookies.get("token");
    if (token) {
      // If token exists, add it to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    sendDataToServer(config);
    // Return the modified config
    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      window.location.pathname = "/";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
