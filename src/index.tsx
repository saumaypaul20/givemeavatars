import React from "react";
import ReactDOM, {hydrateRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssVarsProvider, extendTheme } from "@mui/joy";
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const customTheme = extendTheme({
  
  typography: {
    display1: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      background:
        "linear-gradient(90deg, rgba(255,232,177,1) 0%, rgba(178,255,213,1) 38%, rgba(16,217,255,1) 100%)",
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: 70,
      pt: 2,
    },
  },
});

root.render(
  <React.StrictMode>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Give Me Avatar | Free Online Avatar Generator</title>
                <link rel="canonical" href="https://givemeavatar.netlify.app" />
                <meta name="description" content="A free online random avatar generator for making beautiful personal avatar within seconds. Generate avatar for your social media accounts quickly. Avatars can be used in profile or display picture or for development. Best tool for developers." />
            </Helmet>

    <CssVarsProvider theme={customTheme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
