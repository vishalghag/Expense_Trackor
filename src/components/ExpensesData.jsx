import { useState } from "react";
import { NewExpense } from "../NewExpense/NewExpense";
import { Card } from "../card/Card";
import { ExpenseItem } from "./ExpenseItem";
import style from './ExpensesData.module.css'

export const ExpenseData = () => {

    let DATA = [
        {
            id: 1,
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { 
            id: 1.1,
             title: 'New TV',
              amount: 799.49,
               date: new Date(2021, 2, 12) 
        },
        {
            id: 2,
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 3,
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];


    const [expenses,setExpenses] = useState(DATA);

    const addExpenseHandler = (expensesForm) => {
        console.log('in data');
        console.log(expensesForm,'datattt');
        setExpenses((prevSate) => {
            return [expensesForm,...prevSate]
        })
    }

    console.log(expenses,'expessesdsdfs');
   

    return (
        <>
        <NewExpense onAddExpenses={addExpenseHandler}/>
        <Card className={style.expenses}>
            <ExpenseItem expenses={expenses}/>
        </Card>
        </>
    )
}