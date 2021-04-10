import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/ES-hq/2021/img/Mobile_Traffic/Q2_VFAP/XCM_Manual_1316800_1629224_ES_es_pc_ilm_2x_es_es_3750198_650x45_1X_es_ES._CB655615252_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Tu cesta de Amazon está vacía.</h2>
            <p>
              La cesta de la compra es muy útil. Dale sentido: llénala con
              alimentos, ropa, suministros para el hogar, electrónica y mucho
              más. Siga comprando en Amazon.es, vea información de las ofertas
              de hoy, o visite su Lista de deseos.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Tu cesta:</h2>

            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
