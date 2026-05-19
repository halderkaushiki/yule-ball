import React from "react";

const quotes = [
  "Welcome to the Yule Ball — where magic begins.",
  "May your evening be filled with wonder and dancing.",
];

export default function Loading() {
  const quote = quotes[0];

  return (
    <div className="loading">
      <div className="spinner" aria-hidden="true" />
      <div className="quote">{quote}</div>
    </div>
  );
}
