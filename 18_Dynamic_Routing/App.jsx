import Header from "./components/Header";
import "./App.css";
import { Outlet } from "./node_modules/react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
