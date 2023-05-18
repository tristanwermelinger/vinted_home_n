import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OfferId = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/{id}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      {/* <div>{data.offer[0]._id}</div> */}
      <p>Success</p>
    </div>
  );
};

export default OfferId;
