import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
