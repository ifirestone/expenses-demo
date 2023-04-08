import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../layouts/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        id={props.items[0].id}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        id={props.items[1].id}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        id={props.items[2].id}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        id={props.items[3].id}
      />
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
        id={props.items[4].id}
      />
      <ExpenseItem
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
        id={props.items[5].id}
      />
      <ExpenseItem
        title={props.items[6].title}
        amount={props.items[6].amount}
        date={props.items[6].date}
        id={props.items[6].id}
      />
      <ExpenseItem
        title={props.items[7].title}
        amount={props.items[7].amount}
        date={props.items[7].date}
        id={props.items[7].id}
      />
    </Card>
  );
};

export default Expenses;
