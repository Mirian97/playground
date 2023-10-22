import reactLogo from "@/assets/svg/react.svg";
import { useState } from "react";
import WLogo from "/svg/w-logo.svg";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="m-5 bg-slate-500"
        >
          <img src={WLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Wivenn Playground</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Home;
