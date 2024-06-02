import Header from "./component/header/header";
import CoreConcept from "./component/core/core";
import componentImg1 from "./assets/components.png";
import componentImg2 from "./assets/config.png";
import componentImg3 from "./assets/jsx-ui.png";
import componentImg4 from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./component/button/tabbutton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedButtton) {
    setSelectedTopic(selectedButtton);
    console.log(selectedTopic);
  }

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

            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton name="button" /> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;
