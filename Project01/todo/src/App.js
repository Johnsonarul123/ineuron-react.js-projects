import './App.css';
import { useState } from 'react';
import Todo from './Todo';




function App() {
  const[List,setList]=useState("aja");
  const[Input,setInput]=useState([]);


  const itemList =(e) =>{
    setList(e.target.value); 

  };

  //storing the items in the empty array.
  const listfun =()=>{
    setInput((oldItems) => {     // old item accessing an array
      return[...oldItems,List];
    });
    setList("");
  }

  const deleteitem =() =>{
       console.log("delete");
       const newTours = Input.filter((id) => Input.id !== id)
       setInput(newTours)

       console.log(newTours);

  }

 

  return (
    
    <div className="App">
      <div className='container'>
      <h1>Todo List</h1>

      <div className='new-todo'>
      <h2>New Todo</h2>
      <input className='todo-new' place="content-center" value={List} onChange={itemList}></input>
      <button onClick={listfun} >Add Todo</button>
    </div>

    <h1> hello world</h1>
    
      <ol>
      
        <li>
        
       { Input.map((itemval,index) => {
          return <li key={index} id={index}>

          <button onClick={deleteitem()}>helllo</button>
          {itemval}
        </li>
        })}
        </li>
      </ol>

      

      </div>
    </div>
  
    
  );
  
}

export default App;
