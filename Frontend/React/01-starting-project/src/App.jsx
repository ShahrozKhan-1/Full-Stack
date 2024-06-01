import Header from "./component/header/header";
import CoreConcept from "./component/core/core";
import componentImg1 from "./assets/components.png";
import componentImg2 from "./assets/config.png";
import componentImg3 from "./assets/jsx-ui.png";
import componentImg4 from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./component/button/tabbutton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept
              title="Components"
              description="The core UI building block."
              image = {componentImg1} 
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image = {componentImg2} 
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image = {componentImg3} 
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image = {componentImg4} 
            /> */}

            {/* <CoreConcept 
             title = {CORE_CONCEPTS[0].title}
             description = {CORE_CONCEPTS[0].description}
             image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
             title = {CORE_CONCEPTS[1].title}
             description = {CORE_CONCEPTS[1].description}
             image = {CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
             title = {CORE_CONCEPTS[2].title}
             description = {CORE_CONCEPTS[2].description}
             image = {CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
             title = {CORE_CONCEPTS[3].title}
             description = {CORE_CONCEPTS[3].description}
             image = {CORE_CONCEPTS[3].image}
            /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton name="button" /> */}
            <TabButton>Component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
