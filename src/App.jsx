import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

const App = () => {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="1"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>We are good at the business</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="2"
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
      <section>
        <SearchableList items={PLACES} />
        <SearchableList items={['item1','item2','item3']} />
      </section>
    </main>
  );
};

export default App;
