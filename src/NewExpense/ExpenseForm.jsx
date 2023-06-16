import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [buttonHandler, setButtonHandler] = useState(false);

    const titleInputhHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountInputHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateInputhandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const inputData = {
            title: title,
            amount: +amount,
            date: new Date(enteredDate)
        }

        // console.log(inputData);
        onSaveExpenseData(inputData);
        setTitle('');
        setAmount('');
        setEnteredDate('');
    }

    const onAddNewHandler = () => {
        setButtonHandler(true)
    }

    const onCancelHandler = () => {
        setButtonHandler(false)
        setTitle('');
        setAmount('');
        setEnteredDate('');
    }

    // console.log(`${title} ,'title ${amount}, amount ${enteredDate}, date`);

    return (
        <>
            <form onSubmit={submitHandler}>
                {buttonHandler ? <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' required onChange={titleInputhHandler} value={title} />
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' required min="0.01" step="0.01" onChange={amountInputHandler} value={amount} />
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' required min="2019-01-01" max="2022-12-31" onChange={dateInputhandler} value={enteredDate} />
                    </div>

                    <div className='new-expense__actions'>
                    <button onClick={onCancelHandler}>Cancel</button> <button >Add Expense</button>
                    </div>

                </div> :
                 <div className='new-expense__action'>
                    <button onClick={onAddNewHandler}>Add New Expense</button>
                </div>}

            </form>
        </>
    )
}

export default ExpenseForm;