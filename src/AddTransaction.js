import React, {useState, useContext} from 'react'
import  { GlobalContext } from "./GlobalContext";
import "./App.css";




    const AddTransaction = () => {
  
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className="newTransaction">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="newTransaction">
          <label htmlFor="amount"
            >Amount <br />
           </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;