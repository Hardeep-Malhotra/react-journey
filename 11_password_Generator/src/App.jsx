import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*[]{}:~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Auto-generate when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-400 tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex mb-5">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 rounded-l-lg bg-gray-800 outline-none text-lg tracking-wider"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="bg-orange-500 px-4 rounded-r-lg hover:bg-orange-600 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-300">
            Password Length: <span className="text-orange-400">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer accent-orange-500"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Include Symbols
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 py-2 rounded-lg hover:bg-orange-600 transition font-semibold text-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
