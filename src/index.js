import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      size={32}
      messages={["Terrible😵‍💫", "Bad🤧", "Good👍🏻", "Perfect😀", "Exellent😍"]}
    />
    <StarRating maxRating={10} color="red" />
    <StarRating defaultRating={3} size={33} /> */}
    <App />
  </React.StrictMode>
);
