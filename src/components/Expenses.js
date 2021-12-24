import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        if (item.activo) {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        }
        return null;
      })}
    </Card>
  );
}

export default Expenses;
