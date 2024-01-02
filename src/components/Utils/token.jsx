import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default async function RefreshTokenAPI() {
  return new Promise((resolve, reject) => {
    const cookies = new Cookies();
    axios
      .post("http://localhost:5000/token", {
        refreshToken: cookies.get("refreshToken"),
      })
      .then((res) => {
        cookies.remove("accessToken");
        cookies.set("accessToken", res.data.accessToken, { path: "/" });
        cookies.remove("refreshToken");
        cookies.set("refreshToken", res.data.refreshToken, { path: "/" });
        resolve(); // Resolve the promise after setting cookies
      })
      .catch((err) => {
        console.log(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
