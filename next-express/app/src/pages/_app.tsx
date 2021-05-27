import createStore from "../ducks/createStore";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider } from "react-redux";

import "@styles/globals.css";

const store = createStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />)
    </Provider>
  );
}

export default MyApp;
