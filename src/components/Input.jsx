import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import RadioGroup from "./RadioGroup";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [filter, setFilter] = useState("");

  const LOCAL_STORAGE_KEY = "saved";

  //set Items
  useEffect(() => {
    if (myItems.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myItems));
    }
  }, [myItems]);
  //get Items
  useEffect(() => {
    const savedItems = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
    );
    if (savedItems) {
      setMyItems(savedItems);
      setFilter("all");
    } else setMyItems([]);
  }, []);
  //get filtered status
  useEffect(() => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((radio) => {
      radio.checked = radio.value === filter;
    });
  }, [filter]);
  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function handleAdd() {
    if (inputValue) {
      setMyItems((prev) => [
        ...prev,
        {
          id: new Date().getTime(),
          value: inputValue,
          status: "notDone",
        },
      ]);
      setInputValue("");
      setFilter("all");
    }
  }

  return (
    <>
      <div className="grid justify-center w-screen h-screen dark:bg-slate-800 px-2">
        <div className="max-w-md w-full bg-slate-400 p-4 min-h-[50%] max-h-[50%] my-auto rounded-md drop-shadow-xl flex flex-col dark:bg-slate-700 transition-colors">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
            My Todos
          </h3>
          <div className="w-full flex-nowrap p-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="max-w-5/6 border border-solid border-slate-400 rounded-md focus:outline-none focus:border-slate-600 mr-1 px-2 transition-colors"
            />
            <button
              onClick={handleAdd}
              className=" bg-slate-300 hover:bg-slate-200 px-2 rounded-md cursor-pointer text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-400"
            >
              add
            </button>
          </div>
          <div className="mb-2">
            <ul className="grid  grid-cols-3 w-full gap-1  ">
              <RadioGroup
                handleFilter={handleFilter}
                labelName="전체보기"
                radioValue="all"
                item={myItems}
              />
              <RadioGroup
                handleFilter={handleFilter}
                labelName="미완료 목록"
                radioValue="notDone"
                item={myItems.filter((item) => item.status === "notDone")}
              />
              <RadioGroup
                handleFilter={handleFilter}
                labelName="완료 목록"
                radioValue="done"
                item={myItems.filter((item) => item.status === "done")}
              />
            </ul>
          </div>
          <TodoList myItems={myItems} setMyItems={setMyItems} status={filter} />
        </div>
      </div>
    </>
  );
}
