import "./Journey.scss";
import { Accordion } from "../../ui";

const Journey = () => {
  return (
    <section className={"journey"}>
      <h2>Embark on a space journey</h2>
      <div className={"journey__inner"}>
        <p className={"journey__description"}>
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <Accordion>
          <p className={"journey__description"}>
            Our mission is to make space travel accessible and inspiring. With
            state-of-the-art spacecraft, professional astronauts as guides, and
            personalized programs tailored to your interests, we ensure that
            your journey is not only safe, but also deeply meaningful.
          </p>
        </Accordion>
      </div>
    </section>
  );
};
export default Journey;
