import "./Footer.scss";
import icon from "./rocket.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img className="footer__image" alt={"rocket"} src={icon} />
        <p className="footer__title">Exciting space adventure!</p>
      </div>
    </footer>
  );
};
export default Footer;
