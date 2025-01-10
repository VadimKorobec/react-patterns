import { useAccordionContext } from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionItem = ({ id, title, children, className }) => {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <AccordionTitle id={id}>{title}</AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </li>
  );
};

export default AccordionItem;
