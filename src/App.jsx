import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/pages/Form";
import Payment from "./components/pages/Payment";
import Internform from "./components/pages/internform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Internform />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;