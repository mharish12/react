import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEdit, setIsEdit] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdit(false);
  }

  function startEditingHandler() {
    setIsEdit(true);
  }

  function stopEditingHandler() {
    setIsEdit(false);
  }

  return (
    <div className="new-expense">
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdit && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
