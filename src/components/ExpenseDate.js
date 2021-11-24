import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleDateString("es-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("es-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
