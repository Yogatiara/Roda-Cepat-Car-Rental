import { getCarsData } from "../../api/fetching";
import { setCarData } from "../reducers/carReducer";

const getCarData = () => async (dispatch) => {
  try {
    const res = await getCarsData();
    dispatch(setCarData(res.data));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getCarData;
