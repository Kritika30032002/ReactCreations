import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";
import BudgetCard from "./BudgetCard";


export default function UncategorizedBudgetCard(props) {
    const {getBudgetExpenses} = useBudgets();
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
        (total, expense) => total + expense.amount, 0
        )

    if (amount=== 0) return null
    return (
        <BudgetCard name="Uncategorized" amount={amount}  gray {...props}/>
  )
}
