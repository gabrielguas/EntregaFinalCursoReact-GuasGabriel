const Buscador = ({ onCategoryChange }) => {
  return (
    <div>
      <h2>Buscador</h2>
      <button onClick={() => onCategoryChange("all")}>Todo</button>
      <button onClick={() => onCategoryChange("hardware")}>Hardware</button>
      <button onClick={() => onCategoryChange("software")}>Software</button>
      <button onClick={() => onCategoryChange("infraestructura")}>Infraestructura</button>
    </div>
  );
};

export default Buscador;
