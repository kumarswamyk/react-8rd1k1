import React from 'react';
const Traffic = (state, action) => {
  if ('trafficlightId' in action) {
    return state.map((trafficlight) => {
      if (action.trafficlightId === trafficlight.id) {
        return { ...trafficlight };
      }

      return trafficlight;
    });
  }

  return state;
};

export default Traffic;
