import React, { useState } from "react";

export const App = () => {
  const [localVal, setLocalVal] = useState("");
  const [sessionVal, setSessionVal] = useState("");

  // --- LOCAL STORAGE METHODS ---
  const handleLocal = (action) => {
    if (action === "set") {
      localStorage.setItem("username", "John Doe"); // Save
      setLocalVal(localStorage.getItem("username"));
    } else if (action === "get") {
      const val = localStorage.getItem("username"); // Retrieve
      alert("Local Storage Value: " + val);
    } else if (action === "remove") {
      localStorage.removeItem("username"); // Delete specific
      setLocalVal("");
    } else if (action === "clear") {
      localStorage.clear(); // Delete everything
      setLocalVal("");
    }
  };

  // --- SESSION STORAGE METHODS ---
  const handleSession = (action) => {
    if (action === "set") {
      sessionStorage.setItem("sessionID", "XYZ-123"); // Save
      setSessionVal(sessionStorage.getItem("sessionID"));
    } else if (action === "get") {
      const val = sessionStorage.getItem("sessionID"); // Retrieve
      alert("Session Storage Value: " + val);
    } else if (action === "remove") {
      sessionStorage.removeItem("sessionID"); // Delete specific
      setSessionVal("");
    } else if (action === "clear") {
      sessionStorage.clear(); // Delete everything
      setSessionVal("");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10 flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold border-b-2 border-amber-500 pb-2">
        Web Storage Lab
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* LOCAL STORAGE CARD */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">
            LocalStorage
          </h2>
          <p className="text-sm text-zinc-400 mb-4 italic">
            (Ye data browser band karne par bhi nahi udta)
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleLocal("set")}
              className="px-4 py-2 bg-blue-600 rounded"
            >
              Set
            </button>
            <button
              onClick={() => handleLocal("get")}
              className="px-4 py-2 bg-zinc-700 rounded"
            >
              Get
            </button>
            <button
              onClick={() => handleLocal("remove")}
              className="px-4 py-2 bg-red-800 rounded"
            >
              Remove
            </button>
            <button
              onClick={() => handleLocal("clear")}
              className="px-4 py-2 bg-red-600 rounded"
            >
              Clear All
            </button>
          </div>
          <div className="mt-6 p-3 bg-black rounded border border-zinc-700">
            Current:{" "}
            <span className="text-green-400 font-mono">
              {localVal || "Empty"}
            </span>
          </div>
        </div>

        {/* SESSION STORAGE CARD */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-cyan-500 mb-4">
            SessionStorage
          </h2>
          <p className="text-sm text-zinc-400 mb-4 italic">
            (Ye data sirf tab band karne tak rehta hai)
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSession("set")}
              className="px-4 py-2 bg-blue-600 rounded"
            >
              Set
            </button>
            <button
              onClick={() => handleSession("get")}
              className="px-4 py-2 bg-zinc-700 rounded"
            >
              Get
            </button>
            <button
              onClick={() => handleSession("remove")}
              className="px-4 py-2 bg-red-800 rounded"
            >
              Remove
            </button>
            <button
              onClick={() => handleSession("clear")}
              className="px-4 py-2 bg-red-600 rounded"
            >
              Clear All
            </button>
          </div>
          <div className="mt-6 p-3 bg-black rounded border border-zinc-700">
            Current:{" "}
            <span className="text-green-400 font-mono">
              {sessionVal || "Empty"}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 p-4 rounded text-xs text-zinc-300 w-full max-w-4xl">
        <p>
          <strong>Note:</strong> In dono ko console me dekhne ke liye{" "}
          <strong>
            Inspect {`>`} Application {`>`} Local/Session Storage
          </strong>{" "}
          check karein.
        </p>
      </div>
    </div>
  );
};
