import "./Accordion.scss";

const Accordion = (props) => {
  const { children } = props;

  return (
    <details className="accordion">
      <summary className="accordion__summary" />
      {children}
    </details>
  );
};
export default Accordion;
