import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './context/BudgetsContext';
import AddExpenseModal from './components/AddExpenseModal';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import ViewExpensesModal from './components/ViewExpensesModal';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const {budgets, getBudgetExpenses} = useBudgets()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
  <>
    <Container className='my-4 min-vh-100 p-3'>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='light' onClick={()=> setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant='outline-light' onClick={openAddExpenseModal}>Add Expense</Button>
      </Stack>
      <div style={{display:"grid", 
      gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
      gap: "1rem",
      alignItems: "flex-start" }}>

      {budgets.map(budget =>{
        const amount = getBudgetExpenses(budget.id).reduce(
          (total, expense) => total + expense.amount, 0
          )

        return <BudgetCard 
        key={budget.id}
        name={budget.name}
        amount={amount} 
        max={budget.max}
        onAddExpenseClick = {() =>openAddExpenseModal(budget.id)}
        onViewExpensesClick = {() =>setViewExpensesModalBudgetId(budget.id)}
        />

})}
      <UncategorizedBudgetCard 
      onAddExpenseClick = {openAddExpenseModal}
      onViewExpensesClick = {() =>setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)} />

      <TotalBudgetCard/>
      </div>
    </Container>;

    <AddBudgetModal 
    show={showAddBudgetModal} 
    handleClose={()=>setShowAddBudgetModal(false)}/>

    <AddExpenseModal 
    show={showAddExpenseModal} 
    handleClose={()=>setShowAddExpenseModal(false)}
    defaultBudgetId={addExpenseModalBudgetId}
    />

    <ViewExpensesModal
    budgetId={viewExpensesModalBudgetId}
    handleClose={() => setViewExpensesModalBudgetId()}
    />
       <footer className="text-center">
   <a class="link" href="https://ej-d.vercel.app/">© 2022 Copyright:
      EJD</a>
   </footer>
  </>
  )
}

export default App;
