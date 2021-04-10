import React from "react";
import Product from "./Product";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/gateway/placement/launch/LaTemplanza/TPZA_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_es-ES._CB656668453_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1245"
          title="Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming"
          price={35.08}
          rating={5}
          image="https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="1246"
          title="Cafetera express para espresso y capuccino. 1200W 15 Bares. Vaporizador orientable. Capacidad 1,2L Café molido y monodosis. Cafetera eléctrica. Bandeja Calientatazas. Modelo KOFFY!"
          price={80.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/6173fjQrrtL._AC_UL640_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1247"
          title="Braun HC 5010 - Máquina de cortar pelo profesional, cortapelos con 9 longitudes de corte, negro"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81XU0UlWTRL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="1248"
          title="AKAI Professional MPK Mini Play - Mini teclado controlador MIDI USB completamente independiente y con altavoz integrado, pads estilo MPC, efectos internos y paquete de software incluido"
          price={99.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/41dEmwdWpIL.jpg"
        />
        <Product
          id="1249"
          title="Ultima Pienso para Perros Junior con Pollo y Arroz - 3000 gr"
          price={10.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/81MEuytv4yL._AC._SR360,460.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1250"
          title="Upgrade4cars Fundas Asientos Coche Universales Negro Gris para Delanteros"
          price={39.95}
          rating={3}
          image="https://m.media-amazon.com/images/I/71YNk53YvIL._AC._SR360,460.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
