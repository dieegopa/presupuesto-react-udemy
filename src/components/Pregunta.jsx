import React from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  const [cantidad, setCantidad] = React.useState(0);
  const [error, setError] = React.useState(false);

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={(e) => agregarPresupuesto(e)}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
          min={0}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
