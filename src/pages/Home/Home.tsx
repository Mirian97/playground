import reactLogo from "@/assets/svg/react.svg";
import { useState } from "react";
import WLogo from "/svg/w-logo.svg";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <div className="flex flex-row gap-3">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={WLogo}
            alt="Vite logo"
            className="w-16"
            title="Aprenda sobre Vite"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="w-16"
            title="Aprenda sobre React"
          />
        </a>
      </div>
      <h1>Wivenn Playground</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default Home;
