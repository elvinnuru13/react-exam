import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Detail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;