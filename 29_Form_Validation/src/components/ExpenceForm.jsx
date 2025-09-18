import { useState } from "react";

function ExpenceForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const validate = (formData) => {
    const errorData = {}

    if(!formData.title){
      errorData.title = "Title is required"
    }

    if(!formData.category){
      errorData.category = "Category is required"
    }

    if(!formData.amount){
      errorData.amount = "Amount is required"
    }

    return errorData
  }
  const validateResult = validate(expense)
  if(Object.keys(validateResult).length) return
  
  const handelSubmit = (e) => {
    e.preventDefault();

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

  const handelChange = (e) => {
    console.log(e.target)
    const {name, value} = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };


  return (
    <form className="expense-form" onSubmit={handelSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handelChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handelChange}
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
          onChange={handelChange}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenceForm;
