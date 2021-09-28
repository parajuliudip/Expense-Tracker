import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // //inside a function we call a useState
  // // inside the function and any nested function, should call
  // const [initalvalue, updatevalue] = useState(); array distructing

  const [title, settitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    settitle("Hello!");
    console.log("Clicked!!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
