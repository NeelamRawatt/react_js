import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Nested from "./components/Nested";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/nested" element={<Nested />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
