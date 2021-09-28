import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const editMode = (event) => {
    setEditing(true);
  };

  const stopEditingHandler = (event) => {
    setEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editMode}>Add New Expenses</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
