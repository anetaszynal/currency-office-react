import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatedDate = date.toLocaleString("pl-Pl", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })


  return (
    <p className="section__paragraph section__paragraph--date">
      {`Dzisiaj jest ${formatedDate}`}
    </p>
  );
};

