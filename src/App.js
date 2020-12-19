import "./css/main.css";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/products";
import Team from "./pages/Team";
import Technologies from "./pages/technologies";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/technologies" component={Technologies} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
