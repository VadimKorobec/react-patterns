import { useAccordionContext } from "./Accordion";

const AccordionTitle = ({ id, children }) => {
  const { toggleItem } = useAccordionContext();
  return <h3 onClick={() => toggleItem(id)}>{children}</h3>;
};

export default AccordionTitle;
