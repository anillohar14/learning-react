import { useRef } from "react";
import { useState } from "react";

function ExpenceForm({ setExpenses }) {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const refTitle = useRef() // useRef is use to change the dom without renderit multiple time 
  const refCategory = useRef() 
  const refAmount = useRef()  
  
  const handelSubmit = (e) => {
    e.preventDefault();
      console.log({
        title: refTitle.current.value,
        catogery: refCategory.current.value,
        amount: refAmount.current.value,
        id: crypto.randomUUID()
      })

      setExpenses((prevState) => [
      ...prevState,{
        title: refTitle.current.value,
        category: refCategory.current.value,
        amount: refAmount.current.value,
        id: crypto.randomUUID()
      }]);
    // setExpenses((prevState) => [
    //   ...prevState,
    //   { ...expense, id: crypto.randomUUID() },
    // ]);
    // setExpense({
    //   title: "",
    //   category: "",
    //   amount: "",
    // });
  };

  return (
    <form className="expense-form" onSubmit={handelSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          ref={refTitle}
          // value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          // }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          ref={refCategory}
          // value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
          // }
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
          ref={refAmount}
          // value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenceForm;
