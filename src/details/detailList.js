import { useNavigate, useParams } from "react-router-dom";

export default function DetailList({ data }) {
  const navigation = useNavigate();
  const handleClickItem = (i) => {
    navigation(`/list/${i?.id}`);
  };

  return (
    <div>
      <ul>
        {data?.map((item, i) => (
          <li key={i} onClick={() => handleClickItem(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
