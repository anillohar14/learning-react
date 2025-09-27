import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenceForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minLenght: 5, message: "Title should be 5 character long" },
    ],
    category: [{ required: true, message: "Category is required" }],
    amount: [{ required: true, message: "Amount is required" }],
    email: [
      { required: true, message: "Email is required" },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Enter an valid email",
      },
    ],
  };
  const errorData = {};
  const validate = (formData) => {
    // console.log(formData);
    Object.entries(formData).forEach(([key, value]) => {
      // console.log(`key: ${key} value: ${value}`);
      validationConfig[key].some((rule) => {
        // console.log(rule);
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true
        }

        if (rule.minLenght && value.length < 5) {
          errorData[key] = rule.message;
          return true

        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true 
        }
      });
    });
    setErrors(errorData);
    return errorData;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
      email: "",
    });
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handelSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handelChange}
        errors={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handelChange}
        options={["Grocery", "Cloths", "Bills", "Education", "Medicines"]}
        defaultOption="Select Category"
        errors={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handelChange}
        errors={errors.amount}
      />
      <Input
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onChange={handelChange}
        errors={errors.email}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenceForm;
