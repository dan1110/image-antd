import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data_info } from "../data/data_infor";

import { Image } from "antd";

import NPH from "../../../public/assets/imgs/npk.png";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id === "1") {
      setData(data_info[0]);
    }
    if (id === "2") {
      setData(data_info[1]);
    }
    if (id === "3") {
      setData(data_info[2]);
    }
  }, [data, id]);

  return (
    <div className="App">
      hello
      <div>
        Tên: {data.name}
        <br />
        mô tả: {data.des}
        <br />
        <Image src={window.location.origin + `/${data.avatar}`} width={200} />
      </div>
    </div>
  );
}
