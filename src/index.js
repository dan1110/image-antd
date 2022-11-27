import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Detail from "./details/detailInfo";
import DetailList from "./details/detailList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<DetailList />} />
      <Route path="/list/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
