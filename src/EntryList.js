import React from "react";

function EntryList({ entries }) {
  return (
    <div>
      <h2>Your Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet!</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}</strong> - {entry.emotion}
              <p>{entry.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EntryList;