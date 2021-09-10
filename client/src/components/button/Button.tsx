import React from "react";

export type ButtonProps = {
  text?: string;
  icon?: unknown;
};

export const Button = ({ text }: ButtonProps) => (
  <button type={"button"}>
    <h2>{ text }</h2>
  </button>
);
