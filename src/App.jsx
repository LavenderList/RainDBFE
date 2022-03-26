import { ModProvider } from "./context/modsContext";
import { FilterProvider } from "./context/filterContext";
import { GalleryProvider } from "./context/galleryContext";
import { Route, Redirect, Switch, Router } from "wouter";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import ModPage from "./pages/modPage";
import ScrollToTop from "./components/scrollToTop";
import Tutorials from "./pages/tutorials";
import Submit from "./pages/submit";
import Community from "./pages/community";
import Nav from "./components/nav";
import Error404 from "./pages/404";
import Joke from "./pages/joke";
import Rollback from "./pages/rollback";

function App() {
  return (
    <div className="App">
      <Router base="/RainDBFE">
        <Nav />
        <ScrollToTop />
        <ModProvider>
          <FilterProvider>
            <GalleryProvider>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/gallery" component={Gallery} />
                <Route path="/tutorials" component={Tutorials} />
                <Route path="/submit" component={Submit} />
                <Route path="/projects" component={Community} />
                <Route path="/rollback" component={Rollback} />
                <Route path="/mod/1.8/MoreSlugcats" component={Joke} />
                <Route path="/mod/:version/:name" component={ModPage} />
                <Route path="/404" component={Error404} />
                <Route>
                  <Redirect to="/404" />
                </Route>
              </Switch>
            </GalleryProvider>
          </FilterProvider>
        </ModProvider>
        <footer
          className="footer"
          style={{
            color: "var(--secondary-text-color)",
            fontSize: "0.8em",
            textAlign: "center",
            margin: "2em 0",
            position: "relative",
            bottom: "0",
          }}
        >
          <h2>
            Original website:{" "}
            <a
              href="https://www.raindb.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff8a38" }}
            >
              Rain DB
            </a>{" "}
            By AndrewFM
          </h2>
        </footer>
      </Router>
    </div>
  );
}

export default App;
