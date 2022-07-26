import React from "react";
import CardItems from "../card-items/Card-items.component";
import "./Cards.style.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/gwl-1.jpg"
              text="Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple."
              label="Photos"
              path="/"
            />
            <CardItems
              src="images/gwl-7.jpg"
              text="Gwalior Junction railway station is the railway station of Gwalior City, Madhya Pradesh, India. It is operated by Indian Railways and is part of the Jhansi Division of the North-Central Railways."
              label="Railway Station"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/gwl-3.jpg"
              text="The Gwalior Fort is a hill fort near Gwalior, Madhya Pradesh, India. The fort has existed at least since the 10th century."
              label="Gwalior Fort"
              path="/"
            />
            <CardItems
              src="images/gwl-4.jpg"
              text="The Jai Vilas Mahal, also known as the Jai Vilas Palace, is a nineteenth century palace in Gwalior, India. It was established in 1874 by Jayajirao Scindia."
              label="Jai Vilas Palace"
              path="/"
            />
            <CardItems
              src="images/gwl-5.jpg"
              text="Small zoo in a garden-like complex with a range of animals, from snakes, birds to a white tiger."
              label="Gwalior Zoo"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
