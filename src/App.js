import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HooksBurgerContainer from "./components/HooksBurgerContainer";
import HooksFetchData from "./components/HooksFetchData";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer></HooksCakeContainer>
        <CakeContainer></CakeContainer> */}
        <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
        <NewCakeContainer></NewCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <HooksIceCreamContainer></HooksIceCreamContainer>
        <HooksBurgerContainer></HooksBurgerContainer>
        <HooksFetchData></HooksFetchData>
      </div>
    </Provider>
  );
}

export default App;
