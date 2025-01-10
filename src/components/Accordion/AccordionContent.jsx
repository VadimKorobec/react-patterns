const AccordionContent = ({children,isOpen}) => {
    return (
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    );
}

export default AccordionContent