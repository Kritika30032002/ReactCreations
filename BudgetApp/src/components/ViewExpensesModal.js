import { Button, Form, Modal, Stack } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";
import { currencyFormatter } from "./utils";

export default function ViewExpensesModal({budgetId, handleClose}){
    const {getBudgetExpenses, budgets, deleteBudget, deleteExpense} = useBudgets()

    const expenses = getBudgetExpenses(budgetId)
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? {
        name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID} : 
        budgets.find(b =>b.id === budgetId)
    return(
        <Modal show={budgetId != null } onHide={handleClose}>
           
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap="2">
                            <div>Expenses - {budget?.name}</div>
                            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                                <Button variant="outline-danger" onClick={()=> {
                                    deleteBudget(budget)
                                    handleClose()}
                                }
                              
                                >Delete</Button>
                            )}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {expenses.map(expense =>(
                        <Stack direction="horizontal" gap="2" key={expense.id}>
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                            <Button size="sm" variant="outline-danger" onClick={()=> deleteExpense(expense)}>&times;</Button>
                        </Stack>    
                    ))}
                </Stack>
                </Modal.Body>
          
        </Modal>
    )
}