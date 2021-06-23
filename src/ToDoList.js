import React, { useState, useEffect } from "react";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [doneList, setdoneList] = useState([]);

  const done1 = (item, i) => {
    const newdone = [...doneList];
    newdone.push(item);

    toDoList.splice(i, 1);

    setdoneList(newdone);
  };
  const addInList = () => {
    const newtodolist = [...toDoList];
    newtodolist.push(inputText);
    setToDoList(newtodolist);
  };

  return (
    <>
      <div style={styles.mainDiv}>
        <input
        style={styles.input}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addInList}>submit</button>
      </div>
      <div className="todolist">
        {toDoList.map((item, i) => {
          return (
            <div key={i} className="card-item">
              <div>{item}</div>
              <button onClick={() => done1(item, i)}>done</button>{" "}
              {/*vidzaxebt mxolod aq funqcias*/}
            </div>
          );
        })}
      </div>
      <div className="done">
        {doneList.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
      </div>
    </>
  );
}

const  styles = {
  mainDiv:{
    backgroundColor:'red'
  },
  input:{
    
  }
}