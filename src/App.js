import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2021-03-25"),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("2021-03-25"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021-03-25"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
      // console.log(...prevExpenses);
      // const a = [expense, ...prevExpenses];
      // console.log(a);
      // return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
