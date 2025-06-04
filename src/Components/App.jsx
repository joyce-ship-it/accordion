import "./App.css";
import { Header } from "./Header";
import { data } from "./data";
import Accordion from "./Accordion";
function App() {
  return (
    <>
      <Header></Header>
      {data.map(({ title, content }) => (
        <Accordion title={title} key={title}>
          {content}
        </Accordion>
      ))}
    </>
  );
}

export default App;
