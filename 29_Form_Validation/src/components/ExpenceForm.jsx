import { useState } from "react";

function ExpenceForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
const [errors, setErrors] = useState({})

  const validate = (formData) => {
    const errorData = {}

    if(!formData.title){
      errorData.title = "Title is required"
    }

    if(!formData.category){
      errorData.category = "Select a Category"
    }

    if(!formData.amount){
      errorData.amount = "Amount is required"
    }

    setErrors(errorData)
    return errorData
  }
  
  const handelSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense)
    if(Object.keys(validateResult).length) return

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
    const {name, value} = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
    setErrors({})
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
        <p className="error">{errors.title}</p>
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handelChange}
        />
        <p className="error">{errors.amount}</p> 
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenceForm;
