import React from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  const [presupuesto, setPresupuesto] = React.useState(0);
  const [restante, setRestante] = React.useState(0);
  const [mostrarPregunta, setMostrarPregunta] = React.useState(true);
  const [gastos, setGastos] = React.useState([]);
  const [gasto, setGasto] = React.useState({});
  const [crearGasto, setCrearGasto] = React.useState(false);

  React.useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }

    setCrearGasto(false);
  }, [gasto, crearGasto, restante, gastos]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
