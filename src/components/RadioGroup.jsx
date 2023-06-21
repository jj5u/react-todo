import React from "react";

export default function RadioGroup({
  handleFilter,
  labelName,
  radioValue,
  item,
}) {
  return (
    <>
      <li className="hover:opacity-50 bg-slate-500 transition-color p-1 rounded-sm dark:bg-slate-600">
        <label role="radio" aria-checked="true" className="cursor-pointer">
          <input
            className="hidden peer"
            type="radio"
            name="todo-filter"
            value={radioValue}
            onClick={handleFilter}
          />
          <span className=" text-slate-200 peer-checked:font-bold peer-checked:text-slate-50 text-sm whitespace-nowrap ">
            {labelName} ({item.length})
          </span>
        </label>
      </li>
    </>
  );
}
