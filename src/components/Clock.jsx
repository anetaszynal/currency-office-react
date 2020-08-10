import React, { useState, useEffect } from 'react';
import { SectionParagraph } from './Section/styled';

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

  const formatedDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })

  return (
    <SectionParagraph date>
      Dzisiaj jest {" "} {formatedDate(date)}
    </SectionParagraph>
  );
};

