import CheckIcon from "public/svg/check.svg?react";
import CloseIcon from "public/svg/close.svg?react";
import RemoveIcon from "public/svg/remove.svg?react";
import { useState } from "react";

const Checkbox = () => {
  const [value, setValue] = useState<boolean | undefined>(undefined);

  const label = value === undefined ? "PENDENTE" : value ? "SIM" : "NÃO";

  return (
    <div className="m-5 max-w-fit select-none rounded-xl px-4 py-2 shadow-lg transition-all duration-300">
      <h4>Faz interação</h4>
      <label className="flex cursor-pointer items-center gap-1.5">
        <span className="rounded-md border-2 border-solid border-gray-300">
          {value === undefined ? (
            <RemoveIcon className="fill-orange-400" />
          ) : value ? (
            <CheckIcon className="fill-green-500" />
          ) : (
            <CloseIcon className="fill-red-500" />
          )}
        </span>
        <input
          type="checkbox"
          value={value}
          name="Checkbox"
          className="absolute left-0 opacity-0"
          onChange={() => setValue(!value)}
        />
        <span
          className={`${value === undefined ? "text-orange-400" : value ? "text-green-500" : "text-red-500"} font-bold`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
