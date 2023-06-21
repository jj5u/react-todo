import React, { useEffect } from "react";

export default function TodoList({ myItems, setMyItems, status }) {
  const handleChecked = (e) => {
    const checkedId = parseInt(e.target.parentNode.id);
    setMyItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === checkedId) {
          return {
            ...item,
            status: item.status === "done" ? "notDone" : "done",
          };
        }
        return item;
      });
    });
  };

  const filteredItems = myItems.filter((item) => {
    if (status === "all") {
      return true;
    } else if (status === "notDone") {
      return item.status === "notDone";
    } else if (status === "done") {
      return item.status === "done";
    }
    return false;
  });

  useEffect(() => {
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    checkboxInputs.forEach((checkbox) => {
      const id = parseInt(checkbox.parentNode.id);
      const item = myItems.find((item) => item.id === id);
      checkbox.checked = item?.status === "done";
    });
  }, [filteredItems]);

  return (
    <div className="overflow-auto">
      <ul className="p-2 ">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="mb-1 text-left text-slate-700 hover:opacity-70 flex p-1 rounded-sm transition-colors dark:text-slate-200"
          >
            <input
              type="checkbox"
              value={item.status}
              onChange={handleChecked}
              className="accent-slate-300 focus:accent-slate-500 mr-1 dark:accent-slate-800"
            />
            {item.value}
            <button
              onClick={() => {
                setMyItems(myItems.filter((a) => a.id !== item.id));
              }}
              className="ml-auto text-xs bg-slate-300 hover:bg-slate-200 px-2 rounded-md cursor-pointer text-slate-700 ml-2 transition-colors dark:bg-slate-900 dark:text-slate-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
