import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const itemsEvent = (event) => {
    
    setInputlist(event.target.value);
  };
  
  const listOfItems = () => {
    if(inputList!=""){

      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputlist("");
    }else{
      alert("This can't be empty !!!")
    }
  };

  const deleteOfItems = (id) => {
    console.log("delete gar aba");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDO List application</h1>
          <br />
          <input
            type="text"
            placeholder="add a items"
            value={inputList}
            onChange={itemsEvent}
          />
          <button onClick={listOfItems} style={{padding:"0px 11px"}}> + </button>
          <br />
          <br />
          <br />

          <ol>
            {items.map((itemval, index) => {
              return (
                <Todolist
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteOfItems}
                />
              );
            })}
          </ol>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
