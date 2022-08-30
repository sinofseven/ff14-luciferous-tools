import { useState, useEffect } from "react";
import EorzeaTime from "eorzea-time";

const useApp = (): [EorzeaTime, Date] => {
  const [et, setEt] = useState<EorzeaTime>(new EorzeaTime());
  const updateEt = (): void => setEt(new EorzeaTime());

  const [lt, setLt] = useState<Date>(new Date());
  const updateLt = (): void => setLt(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      updateEt();
      updateLt();
    }, 50);
    return () => clearInterval(timerId);
  }, [et, lt]);

  return [et, lt];
};

export default useApp;
