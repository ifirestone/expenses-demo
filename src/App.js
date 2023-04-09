import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 44.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Designer Lamp",
      amount: 230.45,
      date: new Date(2021, 6, 15),
    },
    {
      id: "e5",
      title: "Dinner Party",
      amount: 123.25,
      date: new Date(2021, 6, 22),
    },
    {
      id: "e6",
      title: "Wife Birthday Party",
      amount: 734.56,
      date: new Date(2021, 7, 13),
    },
    {
      id: "e7",
      title: "My Birthday Party",
      amount: 345.26,
      date: new Date(2021, 7, 16),
    },
    {
      id: "e8",
      title: "Businness Trip",
      amount: 235.57,
      date: new Date(2021, 8, 1),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In APP.js");
    console.log(expense);
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
