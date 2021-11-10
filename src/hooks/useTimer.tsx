import { useEffect, useState } from "react";

export const useTimer = (targetDate: string) => {
  const [finish, setFinish] = useState(false);
  const [dayes, setDayes] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(targetDate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDayes(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(interval);
        setFinish(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return { finish, dayes, hours, minutes, seconds };
};
