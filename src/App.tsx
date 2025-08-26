import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Dashboard from "./page/Dashboard";
import Upload from "./page/Upload";
import Myfiles from "./page/Myfiles";
import Subscription from "./page/Subscription";
import Transactions from "./page/Transactions";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/myfile" element={<Myfiles />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
