import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTYVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%&*^`";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length) + 1;

      pass += str.charAt(ch);
    }

    setPassword(pass);
  }, [length, num, char, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10);
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <>
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <div className="bg-[grey] w-[50%] h-1/2 rounded-2xl overflow-hidden flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold my-2">Password Generator</h1>

            <div className="">
              <input
                type="text"
                value={password}
                placeholder="Password"
                readOnly
                className="rounded-l-lg p-3 w-96 outline-none"
                ref={passwordRef}
              />
              <button
                onClick={copyPassword}
                className="rounded-r-lg w-fit bg-[blue] p-3 px-4 text-white font-semibold"
              >
                copy
              </button>
            </div>

            <div className="flex justify-start items-center gap-3">
              <input
                type="range"
                min={8}
                max={30}
                value={length}
                name="length"
                id="length"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="length" className="text-[blue]">
                Length: {length}
              </label>
            </div>

            <div>
              <div className="flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name="num"
                  id="num"
                  // onChange={setNum((prev) => !prev)}
                  onChange={() => setNum((prev) => !prev)}
                  defaultChecked={char}
                />
                <label htmlFor="num" className="text-lg">
                  Numbers
                </label>
              </div>

              <div className="flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name="char"
                  id="char"
                  defaultChecked={char}
                  // onChange={setChar((prev) => !prev)}
                  onChange={() => setChar((prev) => !prev)}
                />
                <label htmlFor="char" className="text-lg">
                  Characters
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
