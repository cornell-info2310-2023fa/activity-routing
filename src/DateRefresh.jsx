import React from "react";

export default function DateRefresh({actionText = "Update Date", color = "white"}) {
  const [date, setDate] = React.useState(new Date().toString());

  function updateDate() {
    setDate(new Date().toString());
  }

  return (
    <div className="DateRefresh" style={{backgroundColor: color}}>
      <p>{date}</p>
      <button onClick={updateDate}>{actionText}</button>
    </div>
  );
}
