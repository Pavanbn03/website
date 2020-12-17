import HeroPage from "./pages/heropage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Emotion from "./pages/emotion";
import Projects from "./pages/products";
import Team from "./pages/Team";
import Technologies from "./pages/technologies";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/aboutus" component={Emotion} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
