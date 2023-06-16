import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = ({onAddExpenses}) => {

    const saveExpenseDataHandler = (expenseDataForm) => {
        const expenseData= {
            ...expenseDataForm,
            id:Math.random().toString()
        }

        onAddExpenses(expenseData)
    }

    return(
        <>
            <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        </>
    )
}