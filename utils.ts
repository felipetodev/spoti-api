export const options: any = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
  },
};

export const getTime = (time: number) => {
  return (
    new Date(time).getMinutes() +
    ":" +
    ("0" + new Date(time).getSeconds()).slice(-2)
  );
};

export const getNumberFormat = (count: number) => {
  if (!count) return null;
  return new Intl.NumberFormat("es-CL", { currency: "CLP" }).format(count);
};

export const clamp = (number: number, min: number, max: number) => {
  return Math.max(min, Math.min(number, max))
}

export const getTimeFormat = (time: number) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};