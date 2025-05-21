import "./Offers.scss";
import OfferCard from "./OfferCard";

const Offers = () => {
  const cards = [
    {
      id: 1,
      title: "Move the borders of reality!",
      subtitle: "Go on a space adventure - it's possible with us!",
    },
    {
      id: 2,
      title: "Space is not just stars and planets",
      subtitle: "it is a majestic journey to",
    },
    {
      id: 3,
      title: "For those who dream of stars ",
      subtitle: "Our offer: make your dream come true",
    },
    {
      id: 4,
      title: "Fulfill your fantastic dreams",
      subtitle: "Space has never been so close",
    },
  ];

  return (
    <section className="offers">
      <h2>Offers</h2>
      <div className={"offers__container"}>
        {cards.map((card) => {
          return (
            <OfferCard
              image={`../../../public/images/${card.id}.jpg`}
              {...card}
              key={card.id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Offers;
