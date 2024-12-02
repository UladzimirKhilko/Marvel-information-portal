/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";
import "./style/style.scss";

const marvelService = new MarvelService();
const container = document.getElementById("root");
const root = createRoot(container);

marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)))

root.render(<App />);