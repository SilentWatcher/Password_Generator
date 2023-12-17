import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [passLength, setPassLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    // animation on copy button
    const [effect , setEffect] = useState(null)

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~";

        for (let i = 0; i <= passLength; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [passLength, numAllowed, charAllowed, setPassword]);

    //Todo: USCASE OF useRef TO COPY TO CLIPBOARD
    const passwordRef = useRef(null);
    const copyPassowrdToClipBoard = useCallback(() => {

        passwordRef.current?.select();
        console.log(passwordRef);
        // passwordRef.current?.setSelectionRange(0, 3);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [passLength, numAllowed, charAllowed, passwordGenerator]);

    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-gradient-to-r from-blue-950 to-blue-500  ">
            <h1 className="text-center text-4xl bg-white p-4 text-blue-950 font-extrabold mx-2 my-2 rounded-lg shadow-2xl">
                Password Generator
            </h1>
            <div className="p-6 mx-2 my-2 rounded-lg shadow-2xl  bg-gradient-to-r from-cyan-300 to-blue-400  w-2/3">
                <div className="flex">
                    {/* PASSWORD INPUT */}
                    <input
                        value={password}
                        type="text"
                        ref={passwordRef}
                        placeholder="Password"
                        readOnly
                        className="p-2 w-full border-none rounded-sm shadow-lg outline-none selection:bg-green-400 selection:text-indigo-950 text-2xl "
                    />

                    {/* COPY PASS INPUT BTN*/}
                    <button
                        // className=" rounded-sm outline-none bg-blue-700 text-white px-3 "
                        className={`${effect && "animate-wiggle"} rounded-sm outline-none bg-blue-700 text-white text-2xl px-3 `}
                        onClick={()=>{copyPassowrdToClipBoard();setEffect(true)} } 
                        onAnimationEnd={()=>setEffect(false)} 
                    >Copy</button>
                </div>
                <div className=" font-bold py-8 flex flex-wrap items-center gap-10 justify-center text-violet-950 text-xl">
                    {/* range input */}
                    <div>
                        <input
                            type="range"
                            max={16}
                            min={8}
                            className="cursor-pointer accent-violet-950"
                            value={passLength}
                            onChange={(e) => {
                                setPassLength(e.target.value);
                            }}
                        />
                        <label >
                            Length: {passLength}
                        </label>
                    </div>
                    {/* number input */}
                    <div>
                        <input
                            type="checkbox"
                            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            defaultChecked={numAllowed}
                            id="numInput"
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}
                        />
                        <label
                            className="ml-1 cursor-pointer "
                            htmlFor="numInput"
                        >
                            Number
                        </label>
                    </div>
                    {/* character input */}
                    <div>
                        <input
                            type="checkbox"
                            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            defaultChecked={charAllowed}
                            id="charInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label className="ml-1 cursor-pointer" htmlFor="charInput" >
                            Character
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
