import "./App.scss";
import React, { useState, useEffect } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";

import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Resume from "./components/resume/resume";

import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, glide } from "react-tiger-transition";
import Loader from "./components/loader/loader";
import { ERoute } from "./types/enums/route.enum";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Particle from "./components/particle/particle";

glide({
  name: "glide-left",
});
glide({
  name: "glide-right",
  direction: "right",
});
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  const routes = [
    { path: ERoute.INDEX, component: <Home /> },
    { path: ERoute.ABOUT, component: <About /> },
    { path: ERoute.PROJECTS, component: <Projects /> },
    { path: ERoute.RESUME, component: <Resume /> },
  ];

  return (
    <div className="App">
      {
        <CSSTransition
          in={isLoading}
          appear={true}
          unmountOnExit
          classNames="fade"
          timeout={300}
        >
          <Loader load={isLoading} />
        </CSSTransition>
      }
      <Navigation>
        <Particle />
        <Navbar />
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
            }}
          >
            {r.component}
          </Route>
        ))}
      </Navigation>
    </div>
  );
}
