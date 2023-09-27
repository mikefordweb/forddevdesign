import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://new-sa-app-jjgqk.ondigitalocean.app",
  headers: {
    "Content-type": "application/json"
  }
});
