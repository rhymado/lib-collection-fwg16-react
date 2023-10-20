import { useState } from "react";
import Title from "../components/Title";

function Calc() {
  const [screen, setScreen] = useState("");
  const [operator, setOperator] = useState("");
  const [math, setMath] = useState({
    first: 0,
    operator: "",
  });
  const operators = [
    { symbol: "+", value: "ADD" },
    { symbol: "-", value: "SUB" },
    { symbol: "*", value: "MUL" },
    { symbol: "/", value: "DIV" },
    { symbol: "=", value: "EQUAL" },
  ];
  const numberHandler = (numValue) => {
    if (numValue === "C") {
      setOperator("");
      setScreen("");
      return;
    }
    setScreen((screen) => {
      return screen + numValue;
    });
  };
  const operatorHandler = ({ symbol, value }) => {
    if (value === "EQUAL") {
      switch (math.operator) {
        case "ADD":
          setScreen(math.first + parseInt(screen));
          return;
      }
    }

    const number = parseInt(screen || math.first);
    setOperator(`${number} ${symbol}`);
    setMath((data) => ({ ...data, first: number, operator: value }));
    setScreen("");
  };
  return (
    <Title title="Calculator">
      <main className="bg-white h-full rounded-md p-3 flex flex-col items-center">
        <h1 className="text-xl font-bold">Calculator</h1>
        <section className="bg-blue-950 flex-1 rounded-md w-3/4 p-5 flex flex-col gap-3">
          <section className="bg-slate-400 h-1/5 border-2 border-solid border-white p-3 rounded-t-md">
            <div className="h-full flex flex-col items-end overflow-hidden">
              <p className="text-md font-bold select-none flex-1">{operator}</p>
              <p className="text-3xl font-bold overflow-hidden select-none flex-[3]">{screen}</p>
            </div>
          </section>
          <section className="bg-slate-800 flex-1 border-2 border-solid border-white p-3 rounded-b-md flex gap-4">
            <section className="bg-white flex-1 p-3 grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, ""].map((number, idx) => (
                <button
                  className="border-2 border-black border-solid text-xl font-bold flex items-center justify-center rounded-md cursor-pointer select-none active:bg-slate-500"
                  key={idx}
                  onClick={() => {
                    numberHandler(number);
                  }}
                >
                  {number}
                </button>
              ))}
            </section>
            <section className="bg-white w-1/5 p-3 flex flex-col gap-1">
              {operators.map((op, idx) => (
                <button
                  className="border-2 border-solid border-black cursor-pointer select-none active:bg-slate-500 rounded-md flex-1 flex items-center justify-center text-xl font-bold"
                  key={idx}
                  onClick={() => {
                    operatorHandler(op);
                  }}
                >
                  {op.symbol}
                </button>
              ))}
            </section>
          </section>
        </section>
      </main>
    </Title>
  );
}

export default Calc;
