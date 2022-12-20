import React, { useState } from "react";

import ExpenseDate from "../Expenses/ExpenseDate";
import "./expenseitem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, settitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
