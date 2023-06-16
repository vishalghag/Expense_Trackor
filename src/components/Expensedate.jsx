import style from './Expensedate.module.css'

export const Expensedate = ({expenses}) => {

    const day = expenses.toLocaleDateString('en-US', {day:'2-digit'})
    const month = expenses.toLocaleDateString('en-US', {month:'long'})
    const year = expenses.getFullYear();
    return(
        <>
            <div className={style.expenseDate}>
            <div className={style.expenseDate__month}>
                {month} 
            </div>
            <div className={style.expenseDate__year}>
                {year} 
            </div>
            <div className={style.expenseDate__day}>
                {day} 
            </div>
            </div>
        </>
    )
}