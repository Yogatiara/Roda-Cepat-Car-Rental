import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getCarData from "../../redux/actions/carAction";

const CarSearchPage = () => {
  const dispatch = useDispatch();

  const carData = useSelector((state) => state.car.carData);

  useEffect(() => {
    dispatch(getCarData());
  }, [dispatch]);

  if (carData.length === 0) {
    return;
  }
  return (
    <div className="pt-96">
      {carData.map((data, i) => (
        <div key={i}>
          <div>{data.manufacture}</div>
        </div>
      ))}
    </div>
  );
};

export default CarSearchPage;
