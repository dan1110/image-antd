import "./styles.css";
import { data_info } from "./data/data_infor";
import { useEffect, useState } from "react";
import { Route, Router } from "react-router-dom";
import Detail from "./details/detailInfo";
import DetailList from "./details/detailList";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data_info);
  }, [data]);

  return (
    <div className="App">
      <div>
        list danh sách người nổi tiếng
        <DetailList data={data} />
      </div>
    </div>
  );
}
