import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Comp from './Comp';

const App = () => {

  const [inputlist, setinputList] = useState("buy apple");
  const [item , setItem] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listofItems = () => {
    setItem((olditems) => {
      return[...olditems , inputlist]
    })
    setinputList(" ");
  };
  const deleteItems = (id) => {
    console.log("deleted");

    setItem((olditems) => {
      return olditems.filter ((arrElem , index) => {
        return index !== id ;
      });
      
    });
};



  return(
    <>
      <div className = "main_div">
        <div className = "center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder = "Add an Item" onChange = {itemEvent} 
            value = {inputlist}
          />
          <button onClick = {listofItems} > + </button>
          <ul>
            
            {
              item.map((itemval, index) => {
                return (<Comp text = {itemval} key = {index} id = {index} onSelect = {deleteItems} />);
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
