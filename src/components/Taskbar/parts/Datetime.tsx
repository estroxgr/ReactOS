import { CSSProperties } from "react";

//hooks
import { useState, useEffect } from "react";
import useTheme from "@hooks/useTheme";

function Datetime() {
  const { locale } = useTheme();
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // format localdate
  const strDate = (date: Date) => {
    return date.toLocaleDateString(locale, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // format localtime
  const strTime = (date: Date) => {
    return date.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div style={style}>
      <div>{strDate(dateTime)}</div>
      <div>{strTime(dateTime)}</div>
    </div>
  );
}

const style: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 11,
};
export default Datetime;
