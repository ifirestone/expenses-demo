import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../layouts/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  useState();
  const [title, setTitle] = useState(props.title);
  let date = props.date;
  let amount = props.amount;
  const changeTitle = () => {
    setTitle("Updated!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
