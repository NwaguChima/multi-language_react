import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components import
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
