import "./Accordion.scss";

const Accordion = (props) => {
  const { text } = props;

  return (
    <details className="accordion">
      <summary className="accordion__summary" />
      <p>{text}</p>
    </details>
  );
};
export default Accordion;
