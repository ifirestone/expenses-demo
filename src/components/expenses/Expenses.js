import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Card from "../layouts/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
