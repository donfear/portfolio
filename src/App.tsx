import "./App.scss";
import React, { useState, useEffect } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";

import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Resume from "./components/resume/resume";

import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, glideIn } from "react-tiger-transition";
import Loader from "./components/loader/loader";
import { ERoute } from "./types/enums/route.enum";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Particle from "./components/particle/particle";
import ScrollButton from "./components/scroll-button/scroll-button";

glideIn({
  name: "glideIn",
  direction: "left",
  opacity: 0.1,
});
glideIn({
  name: "glideOut",
  direction: "right",
  opacity: 0.1,
});
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChangingRoute, setIsChangingRoute] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1700);
  }, []);

  const routes = [
    { path: ERoute.INDEX, component: <Home /> },
    { path: ERoute.ABOUT, component: <About /> },
    // { path: ERoute.PROJECTS, component: <Projects /> },
    { path: ERoute.RESUME, component: <Resume /> },
  ];

  return (
    <div className="App">
      {
        <CSSTransition
          in={isLoading}
          unmountOnExit
          classNames="fade"
          timeout={400}
        >
          <Loader load={isLoading} />
        </CSSTransition>
      }

      <Navigation>
        <Particle />
        {!isLoading && <Header />}
        {routes.map((r, index) => (
          <Route
            path={r.path}
            key={index}
            screen
            screenProps={{
              style: {
                ...(r.path !== location.pathname && {
                  overflow: "hidden",
                  height: 0,
                }),
              },
              id: r.path !== location.pathname ? "" : "active_screen",
            }}
          >
            {r.component}
          </Route>
        ))}

        <ScrollButton />
      </Navigation>
    </div>
  );
}
