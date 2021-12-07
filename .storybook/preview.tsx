import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import "../src/globals.css";

export const parameters = {
  layout: "fullscreen",

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>);
