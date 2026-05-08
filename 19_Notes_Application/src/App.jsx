import React, { useState } from "react";

export const App = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!heading.trim() || !note.trim()) return;

    const newNote = { heading, note, id: Date.now() };
    setAllNotes([...allNotes, newNote]);
    setHeading("");
    setNote("");
  };

  // --- DELETE FUNCTION ---
  const deleteHandler = (id) => {
    // Filter kya karta hai: Sirf wo notes rakhta hai jinki ID match NAHI karti
    const filteredNotes = allNotes.filter((item) => item.id !== id);
    setAllNotes(filteredNotes);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Input Section (Same as before) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-20">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold text-amber-500">Add a Note</h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter Notes Heading"
              className="w-full px-5 py-3 bg-zinc-900 border-2 border-zinc-800 rounded-lg focus:border-amber-600 outline-none"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write Your Notes here...."
              className="w-full px-5 py-3 h-32 bg-zinc-900 border-2 border-zinc-800 rounded-lg focus:border-amber-600 outline-none resize-none"
            />
            <button className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-transform active:scale-95">
              Save Note
            </button>
          </form>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            className="w-full max-w-sm drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] grayscale"
            src="https://img.freepik.com/premium-vector/black-white-drawing-man-writing-with-pen_847135-4919.jpg?w=360"
            alt="Writing man"
          />
        </div>
      </div>

      <hr className="border-zinc-800 mb-10" />

      {/* Notes Display Area with Delete Button */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-amber-500">
          Your Saved Notes
        </h2>

        {allNotes.length === 0 ? (
          <p className="text-gray-500 italic">No notes found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNotes.map((item) => (
              <div
                key={item.id}
                className="relative p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-red-900/50 transition-colors group"
              >
                <h3 className="text-xl font-bold text-amber-500 mb-2 pr-8">
                  {item.heading}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.note}</p>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="Status-Trash 19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
