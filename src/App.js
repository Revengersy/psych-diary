import React, { useState } from "react";
import DiaryEntry from "./DiaryEntry";
import EntryList from "./EntryList";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className="App">
      <h1>Daily Emotional Diary</h1>
      <DiaryEntry onAddEntry={addEntry} />
      <EntryList entries={entries} />
    </div>
  );
}

export default App;