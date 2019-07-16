import React from "react";
import { Header } from "./Components/Header";

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
