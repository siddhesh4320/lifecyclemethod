import React, { useEffect, useState } from "react";
import "./todlist.css";
import Todo from "./Todo";

export default function TodoList() {
  const [inputlist, setinputlist] = useState("");
  const [editinputlist, seteditinputlist] = useState("");
  const [data, setdata] = useState([]);
  const [editItem, seteditItem] = useState(false);

  const handleinput = (e) => {
    setinputlist(e.target.value);
    // seteditinputlist(e.target.value)
  };
  const handleeditinput = (e) => {
    seteditinputlist(e.target.value);
  };
  const handlesubmit = () => {
    // setdata((olditems)=>{
    //   console.log(olditems)
    //   return [...olditems,inputlist]
    // })
    //----------------
    if (inputlist !== "") {
      setdata([...data, inputlist]);
    }
    setinputlist("");
    seteditinputlist("");
    seteditItem(false);
  };
  const remove = (id) => {
    // setdata((olditems)=>{
    //   return olditems.filter((elment,index)=>{
    //      return index!==id
    //   })
    // })
    setdata(data.filter((element, index) => id !== index));
  };
  const edit = () => {
    seteditItem(true);
    console.log("true");
  };

  // useEffect(()=>{
  //   seteditItem(false)
  //   console.log("false")
  // })

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add item"
          name={inputlist}
          value={inputlist}
          onChange={handleinput}
        />
        <button className="plus" onClick={handlesubmit}>
          +
        </button>

        <ol>
          {editItem ? (
            <>
              <input
                type="text"
                placeholder="Edit item"
                name={editinputlist}
                value={editinputlist}
                onChange={handleeditinput}
              />
              <button className="submit" onClick={handlesubmit}> submit </button>
            </>
          ) : (
            <>
              {data.map((item, index) => {
                return (
                  <Todo
                    text={item}
                    key={index}
                    id={index}
                    onremove={() => remove(index)}
                    onedit={() => edit()}
                  />
                );
              })}
            </>
          )}
        </ol>
      </div>
    </div>
  );
}
