
import "./App.css";
import { useState } from "react";

function App() {
  let addtask = () => {
    if(tasklist === " "){
      alert("WELCOME" , window.location.reload())
      
    }
    settodoList([
      ...List,
      { id: List.length + 1, name: `${tasklist}`, isDone: false },
    ]);
  };
  let taskdone = (id) => {
    let itemList = List.findIndex((obj) => obj.id === id);
   
    settodoList([...List]);
    if (List[itemList].isDone === false) {
      List[itemList].isDone = true;
    } else if (List[itemList].isDone === true) {
      List[itemList].isDone = false;
    }
  };
  let deletetask = (id) => {
    let removetask = List.findIndex((obj) => obj.id === id);
    List.splice(removetask, 1);
    settodoList([...List]);
  };

  const [tasklist, setTaskList] = useState("");
  const [List, settodoList] = useState([]);
  return (
    <div className="content">
      <h1>CREATE LIST</h1>
      <input type="text" placeholder="Create your list😊" onChange={(e) => setTaskList(e.target.value)}></input>{" "}
      <button onClick={addtask}> Create Task</button>

      <ul>
        {List.map((item) => {
          return (
            <li className= {item.isDone ? "markdone" : ""}>
              <h5>{item.name}</h5>

              <div>
              <button onClick={() => taskdone (item.id)}> Done </button>
              <button onClick={() => deletetask (item.id)}> Delete </button>
              </div>
              
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App ;