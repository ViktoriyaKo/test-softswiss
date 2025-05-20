import "./Hero.scss";
import { Button } from "../../ui";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <section className={"hero"}>
      <div className={"hero__inner"}>
        <HeroTitle />
        <Button text={"Learn more"} />
      </div>
    </section>
  );
};
export default Hero;
