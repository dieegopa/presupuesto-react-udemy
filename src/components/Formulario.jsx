import React from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombreGasto, setNombreGasto] = React.useState("");
  const [cantidadGasto, setCantidadGasto] = React.useState(0);
  const [error, setError] = React.useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    if (!nombreGasto.trim() || cantidadGasto < 1 || isNaN(cantidadGasto)) {
      setError(true);
      return;
    }

    setError(false);

    const gasto = {
      nombre: nombreGasto,
      cantidad: cantidadGasto,
      id: shortid.generate(),
    };

    setGasto(gasto);
    setCrearGasto(true);

    setNombreGasto("");
    setCantidadGasto(0);
  };

  return (
    <>
      <form onSubmit={(e) => agregarGasto(e)}>
        <h2>Agrega tus gastos aqui</h2>

        {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

        <div className="campo">
          <label htmlFor="">Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="">Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            min={0}
            value={cantidadGasto}
            onChange={(e) => setCantidadGasto(parseInt(e.target.value))}
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
