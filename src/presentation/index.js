import { globalStyles } from "../application/styles/global";
import { Home } from "./sections/home";
import { Header } from "./components/header/index";
import { Introduction } from "./sections/introduction";
import { Choose } from "./sections/choose";
import { Contact } from "./sections/contact";
export default () => {
  return (
    <div style={globalStyles.defaultBody}>
      <Header />
      <Home />
      <Introduction />
      <Choose />
      <Contact />
    </div>
  );
};
