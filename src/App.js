import React, { useState } from 'react'
import ToDoLists from './ToDoLists';

const App = () => {
const[inputList, setInputList] = useState("");
const[Items, setItems] = useState([]);

const itemEvent = (event)=> {
  setInputList(event.target.value);
};

const listOfItems = () => {
setItems((oldItems)=>{
  return [inputList, ...oldItems];
});
setInputList('');
};

const deleteItems = (id)=> {
  console.log('Deleted');
  setItems((oldItems)=> {
    return oldItems.filter((arrElem, index)=> {
      return index !== id;
    })
  })
}

  return (
    <>
<div className='main__div'>
      <div className='center__div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add an item"
        value={inputList}
         onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((itemval, index) => {
            return (
              <ToDoLists 
            key={index} 
            id={index}
            text={itemval}
            onSelect = {deleteItems}
            />
          );
          })}
        </ol>
    </div>
    </div>
    </>
    
  );
};

export default App;