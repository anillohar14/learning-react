import { useState } from "react";

function ExpenceForm({ setExpenses }) {
  // const [title, setTitle] = useState('')
  // const [category, setCategory] = useState('')
  // const [amount,setAmount] = useState('')
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // setTitle('')
    // setCategory('')
    // setAmount('')

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  // console.log("hii")
  return (
    <form className="expense-form" onSubmit={handelSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenceForm;
