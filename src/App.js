import "./App.css";
import { Provider } from "react-redux"
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
function App() {
  return (
    // Here I am providing my store to app, and we do it using react-redux
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>

    </Provider>
  );
}

export default App;
