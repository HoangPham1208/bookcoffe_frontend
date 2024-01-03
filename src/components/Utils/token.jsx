import axios from "axios";
import Cookies from "universal-cookie";

export default async function RefreshTokenAPI() {
  return new Promise((resolve, reject) => {
    const cookies = new Cookies();
    const refreshToken = cookies.get("refreshToken");

    axios
      .post("http://localhost:5000/token", {
        refreshToken: refreshToken,
      })
      .then((res) => {
        // Remove the old tokens after receiving the new ones
        cookies.remove("accessToken");
        cookies.remove("refreshToken");

        // Set the new tokens
        cookies.set("accessToken", res.data.accessToken, { path: "/" });
        cookies.set("refreshToken", res.data.refreshToken, { path: "/" });

        resolve(); // Resolve the promise after setting cookies
      })
      .catch((err) => {
        console.log(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
