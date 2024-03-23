import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";

import NewExpense from './components/NewExpense/NewExpense';


let DUMMY_EXPENSE = [


{
  id: 'e1',
  title: 'school Fee',
  amount: 250,
  date: new Date(2021, 5, 12)
},
{
  id: 'e1',
  title: 'Books',
  amount: 300,
  date: new Date(2021, 4, 12)
},
{
  id: 'e1',
  title: 'Food',
  amount: 940,
  date: new Date(2021, 9, 4)
},
{
  id: 'e1',
  title: 'playing',
  amount: 270,
  date: new Date(2021, 5, 12)
}

];

const App = () => {

const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

// fetch('http://localhost/sample-api/api/read.php').then(
//   response => {
//     return response.json();
//   }
// ).then(
// data => {
//   console.log(data);
//   setExpenses(data);
// }
// );

  const addExpenseHandler = (expense) => {
          const updatedExpense = [expense, ...expenses];
           setExpenses(updatedExpense);
  };

  return( 
       <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      
        
        <Expenses item={expenses}/>
   </div>
      );
}

export default App;


































// {
//   id: 'e1',
//   title: 'school Fee',
//   amount: 250,
//   date: new Date(2021, 5, 12)
// },
// {
//   id: 'e1',
//   title: 'Books',
//   amount: 300,
//   date: new Date(2021, 4, 12)
// },
// {
//   id: 'e1',
//   title: 'Food',
//   amount: 940,
//   date: new Date(2021, 9, 4)
// },
// {
//   id: 'e1',
//   title: 'playing',
//   amount: 270,
//   date: new Date(2021, 5, 12)
// }