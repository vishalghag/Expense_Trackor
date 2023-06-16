
import './App.css';
// import { ExpenseItem } from './components/ExpenseItem';
import { ExpenseData } from './components/ExpensesData';

function App() {
  console.log('hi there');
  return (
    <div className="App">
    {/* <ExpenseItem expenses={expenses}/> */}
    <ExpenseData/>
    </div>
  );
}

export default App;
