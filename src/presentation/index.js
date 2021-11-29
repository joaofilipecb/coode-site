import { globalStyles } from "../application/styles/global";
import { Home } from "./sections/home";
import { Header } from "./components/header/index";
import { Introduction } from "./sections/introduction";
import { Choose } from "./sections/choose";
export default () => {
  return (
    <div style={globalStyles.defaultBody}>
      <Header />
      <Home />
      <Introduction />
      <Choose />
    </div>
  );
};
