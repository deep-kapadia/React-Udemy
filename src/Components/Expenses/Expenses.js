import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeFun = (expenseYear) => {
    setFilteredYear(expenseYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeFun}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
