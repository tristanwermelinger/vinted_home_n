// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import banner from "../assets/banner-vinted.jpg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const { offerid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      {/* <p>Nombre d'offres : {data.count}</p> */}
      <img className="bannersize" src={banner} alt="" />
      <br />
      <br />
      <div className="fleximages">
        {data.offers.map((offer, index) => {
          console.log(offer);

          return (
            <div key={offer.id}>
              {/* <div key={offer.id}>{offer.product_pictures[0].secure_url}</div> */}
              <div className="margindiv" key={offer.id}>
                {offer.owner.account.username}
              </div>
              <div>
                <Link to={`/offer/${offer._id}`}>
                  <img
                    // onClick={() => {
                    //   offer._id;
                    // }}
                    className="size"
                    key={offer.id}
                    src={offer.product_image.secure_url}
                    alt="images"
                  />
                </Link>
              </div>
              <div key={offer.id}>{offer.product_price} €</div>
              <div key={offer.id}>
                {offer.product_details[1].TAILLE
                  ? offer.product_details[1].TAILLE
                  : ""}
              </div>
              <div key={offer.id}>{offer.product_details[0].MARQUE}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
