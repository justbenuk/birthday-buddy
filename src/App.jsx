import { useState } from "react";
import data from "./data";
import List from "./list";

function App() {
  const [people, setPeople] = useState(data);

  function ClearList() {
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birtday Today</h3>
        <List people={people} />
        <button onClick={ClearList} className="btn btn-block">
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
