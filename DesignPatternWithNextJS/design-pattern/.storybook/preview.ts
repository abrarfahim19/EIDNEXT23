import type { Preview } from "@storybook/react";
// .storybook/preview.js

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "black", value: "#000" },
        { name: "dark", value: "#222" },
        { name: "light", value: "#ddd" },
        { name: "white", value: "#fff" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
