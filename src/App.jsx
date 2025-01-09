import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

const App = () => {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id='1'
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>We are good at the business</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id='2'
            className="accordion-item"
            title="We are working with local guides."
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>We are good at the business</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default App;
