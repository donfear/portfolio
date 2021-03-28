import React from "react";
import Particles from "react-particles-js";
import {pure} from 'recompose';

function Particle() {
  return (
    <Particles

    params={{
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 100
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
        }
      },
      retina_detect: true
    }}
    />
  );
}

export default pure(Particle);
