import { useEffect, useState } from "react";

import { Time } from "@/models/m_time.ts";

function calculateET(): Time {
  const now = new Date();
  const tmp = now.getTime() * (1440 / 70);
  const dtET = new Date(tmp);

  return {
    hours: dtET.getUTCHours().toString().padStart(2, "0"),
    minutes: dtET.getUTCMinutes().toString().padStart(2, "0"),
    seconds: dtET.getUTCSeconds().toString().padStart(2, "0"),
  };
}

export function useEorzeaTime(): Time {
  const [et, setET] = useState<Time>(calculateET());

  useEffect(() => {
    const idTimer = setInterval(() => setET(calculateET()), 100);

    return () => {
      clearInterval(idTimer);
    };
  }, [et]);

  return et!;
}
