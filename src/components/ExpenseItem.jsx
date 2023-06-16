import { useState } from 'react';
import { Card } from '../card/Card';
import style from './ExpenseItem.module.css';
import { Expensedate } from './Expensedate';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

export const ExpenseItem = ({ expenses }) => {
  const [selectedOption,setSelectedOption] = useState('2021')


  const selectedFilterOption = (selectedOptions) => {
    console.log('filter con')
    setSelectedOption(selectedOptions)
  }

  const filterDate = expenses.filter((filterDate) =>{
    return filterDate.date.getFullYear().toString() === selectedOption
  } 
  )

  let expneseContent = <p className={style.no_content}>There is no Expenses for Present Year.</p>
  
  if(filterDate.length > 0){
    expneseContent = filterDate.map((exp, index) => (
      <Card className={style.expenseItem} key={exp.id}>
        <Expensedate expenses={exp.date} />
        <div className={style.expenseItem__description}>
          <h2>{exp.title}</h2>
        </div>
        <div className={style.expenseItem__price}>${exp.amount}</div>
      </Card>
    ));
  }

  console.log(filterDate,'filterdate')

  console.log(selectedOption,'inside fff')

  return (
    <>
      <ExpensesFilter selected = {selectedOption} onFilterSelect={selectedFilterOption} />
      <ExpenseChart expenses={filterDate}/> 
      {expneseContent}
    </>
  );
};
