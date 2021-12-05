import React, { Component } from "react";

export default function IngredientUnit(props) {
  return <p style={{ backgroundColor: props.color }}>{props.name}</p>;
}
