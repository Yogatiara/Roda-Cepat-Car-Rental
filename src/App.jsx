import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import LandingPage from "./pages/landing-page/LandingPage";
import MainLayout from "./components/layout/MainLayout";
import CarSearchPage from "./pages/car-search/CarSearchPage";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<LandingPage />} />
            <Route path="car-search">
              <Route index={true} element={<CarSearchPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
