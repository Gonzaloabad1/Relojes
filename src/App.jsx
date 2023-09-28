import "./App.css";
import Digitalclock from "./components/Digitalclock/Digitalclock";
import Cronometro from "./components/Cronometro/Cronometro";
import Cuentaatras from "./components/Cuentaatras/Cuentaatras";

const App = () => {
  return (
    <>
      <Digitalclock />
      <Cuentaatras/>
      <Cronometro /> 
    </>
  );
};

export default App;