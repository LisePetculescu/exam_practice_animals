import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AnimalPage from "./components/AnimalPage";
import Layout from "./Layout";
import TrophyPage from "./components/TrophyPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AnimalPage />} />
          <Route path="/trophy" element={<TrophyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
