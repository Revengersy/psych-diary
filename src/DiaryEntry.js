import React, { useState } from "react";

function DiaryEntry({ onAddEntry }) {
  const [text, setText] = useState("");
  const [emotion, setEmotion] = useState("Happy");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      text,
      emotion,
      date: new Date().toLocaleDateString(),
    };
    onAddEntry(newEntry);
    setText("");
    setEmotion("Happy");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling today?"
        required
      />
      <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Excited">Excited</option>
      </select>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default DiaryEntry;