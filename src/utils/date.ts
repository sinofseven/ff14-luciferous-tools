import EorzeaTime from "eorzea-time";

const formatDigit = (n: number): string => {
  return n.toString().padStart(2, "0");
};

export const formatTime = (d: Date | EorzeaTime): string => {
  const hour = formatDigit(d.getHours());
  const minute = formatDigit(d.getMinutes());
  const second = formatDigit(d.getSeconds());
  return `${hour}:${minute}:${second}`;
};
