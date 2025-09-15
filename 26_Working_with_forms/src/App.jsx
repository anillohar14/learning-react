import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenceForm from './components/ExpenceForm'
import ExpenceTable from './components/ExpenceTable'
import expenceData from '../expenceData'

function App() {
  const [expenses, setExpenses] = useState(expenceData)

  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenceForm setExpenses={setExpenses} />
        <ExpenceTable expenses={expenses} />
      </div>
    </main>
    </>
  )
}

export default App
