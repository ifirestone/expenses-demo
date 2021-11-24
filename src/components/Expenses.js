import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  //   const list = [];
  //   props.items.forEach((item) => {
  //     list.push(
  //       <ExpenseItem
  //         title={item.title}
  //         amount={item.amount}
  //         date={item.date}
  //       />
  //     );
  //   });
  //   return <div className="expenses">{list}</div>;
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        if (item.activo) {
          return (
            <ExpenseItem
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
