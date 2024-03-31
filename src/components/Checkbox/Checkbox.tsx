import { motion } from "framer-motion";
import { useState } from "react";

enum CheckboxState {
  PENDING = "PENDENTE",
  YES = "SIM",
  NO = "NÃO",
}

const Checkbox = () => {
  const [value, setValue] = useState<CheckboxState>(CheckboxState.PENDING);

  const icon = {
    [CheckboxState.PENDING]: (
      <motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="orange"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key="pending"
        >
          <path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" />
        </motion.svg>
      </motion.div>
    ),
    [CheckboxState.YES]: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        fill="green"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        key="checked"
      >
        <path d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
      </motion.svg>
    ),
    [CheckboxState.NO]: (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        fill="red"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        key="not-checked"
      >
        <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
      </motion.svg>
    ),
  };

  const color = {
    [CheckboxState.PENDING]: "text-orange-400",
    [CheckboxState.YES]: "text-green-500",
    [CheckboxState.NO]: "text-red-500",
  };

  const toggleCheckbox = () => {
    const nextState = {
      [CheckboxState.PENDING]: CheckboxState.YES,
      [CheckboxState.YES]: CheckboxState.NO,
      [CheckboxState.NO]: CheckboxState.YES,
    };
    setValue(nextState[value]);
  };

  return (
    <div className="m-5 max-w-fit select-none rounded-xl px-4 py-2 shadow-lg transition-all duration-300">
      <h4>Faz interação</h4>
      <label
        className="flex cursor-pointer items-center gap-1.5"
        onClick={toggleCheckbox}
      >
        <span className="rounded-md border-2 border-solid border-gray-300">
          {icon[value]}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className={`${color[value]} font-bold`}
        >
          {value}
        </motion.span>
      </label>
    </div>
  );
};

export default Checkbox;
