import api from "./api";

const getCarsData = async () => {
  const res = await api.get("/main/data/cars.min.json");
  return res;
};

export { getCarsData };
