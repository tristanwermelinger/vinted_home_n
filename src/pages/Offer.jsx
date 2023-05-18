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
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className="flexposition">
      <img src={data.product_image.secure_url} alt="" />
      <span className="flexproduct">
        <div>
          Prix :{data.product_price} €{data.product_details[0].MARQUE}
        </div>
        <div>Taille :{data.product_details[1].TAILLE}</div>
        <div>Etat :{data.product_details[2].ETAT}</div>
        <div>Couleur :{data.product_details[3].COULEUR}</div>
        <div>Emplacement :{data.product_details[4].EMPLACEMENT}</div>
        <div>Mode de Paiement :{data.product_details[5].MODES_DE_PAIEMENT}</div>
        {/* <div>{data.product_name}</div> */}
      </span>
    </div>
  );
};

export default OfferId;
