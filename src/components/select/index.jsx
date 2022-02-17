import React from "react";
import style from "./style.module.css";

const Select = ({ func, values, defValue }) => {
  return (
    <>
      <div className={style.select}>
        <select onChange={func} defaultValue={defValue}>
          {values.map((value) => (
            <option key={value.value} value={value.value}>
              {value.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
