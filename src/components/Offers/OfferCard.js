import { Button } from "../../ui";

const OfferCard = (props) => {
  const { title, subtitle, image } = props;
  const backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${image})`;

  return (
    <div className="offers__card" style={{ backgroundImage }}>
      <h3 className="offers__title">{title}</h3>
      <p className="offers__subtitle">{subtitle}</p>
      <Button text={"Learn more"} variant={"outlined"} />
    </div>
  );
};

export default OfferCard;
