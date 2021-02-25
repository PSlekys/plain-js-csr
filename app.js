import Header from "./components/header.js";
import About from "./components/about.js";
import Services from "./components/services.js";
import Footer from "./components/footer.js";

const app = document.getElementById("app");

const clear = () => (app.innerHTML = "");

Router();
addEventListener("hashchange", Router);

function Router() {
  const hash = document.location.hash.slice(1);

  clear();

  switch (hash) {
    case "about":
      Header(app);
      About(app);
      Footer(app);
      break;

    case "services":
      Header(app);
      Services(app);
      break;

    default:
      Header(app);
  }
}
