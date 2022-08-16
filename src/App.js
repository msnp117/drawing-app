import CanvasDraw from "react-canvas-draw";
import { useRef } from "react";

function App() {
  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const handleClick = () => {
    const data = firstCanvas.current.getSaveData(); //obtener datos
    console.log(data);
    secondCanvas.current.loadSaveData(data); //mostrar datos
  };

  const clear = () => {
    firstCanvas.current.clear(); //limpiar canvas
  };

  const undo = () => {
    firstCanvas.current.undo() //deshacer
  }

  return (
    <div>
      <button onClick={handleClick}>Save Drawing</button>

      <button onClick={clear}>Clear</button>

      <button onClick={undo}>Undo</button>
      <CanvasDraw
        brushRadius={1} //grosor del trazo
        brushColor="#ccc" //color del trazo
        catenaryColor="red" //color del puntero
        hideGrid={false} // ocultar grilla
        style={{ border: "1px solid #000" }}
        ref={firstCanvas}
        canvasHeight={500}
        canvasWidth={500}
      />

      <CanvasDraw hideGrid={true} disabled={true} ref={secondCanvas} />
    </div>
  );
}

export default App;
