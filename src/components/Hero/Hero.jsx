import "./Hero.scss";
import HeroTitle from "./HeroTitle";
import { Button } from "../../ui";

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
