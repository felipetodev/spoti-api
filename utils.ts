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
