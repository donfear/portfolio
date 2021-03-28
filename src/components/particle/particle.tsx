import React from "react";
import Particles from "react-particles-js";
import {pure} from 'recompose';

function Particle() {
  return (
    <Particles

      params={{
        retina_detect: true,
        particles: {
          number: {
            value: 32,
            density: {
              value_area: 800
            }
          },
        }
      }}
    />
  );
}

export default pure(Particle);
