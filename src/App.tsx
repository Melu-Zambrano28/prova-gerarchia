import "./App.css";
import { Nodo } from "./components/Nodo";

const sottoNodi = [
  {
    livello: 0,
    id: "001-1",
    descrizione: "Milano",
  },
  {
    livello: 1,
    id: "001-1",
    descrizione: "Milano 1",
  },
];

const App: React.FunctionComponent<{}> = () => {
  return (
    <Nodo livello={0} id={"01"} descrizione={"Root"} children={sottoNodi} />
  );
};

export default App;
