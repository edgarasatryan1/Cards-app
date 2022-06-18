import React from "react";
import Button from "./Button";
export default function Header() {
  return (
    <div className="navbar">
      <Button title={"Add card"} />
      <Button title={"Sort cards"} />
    </div>
  );
}
