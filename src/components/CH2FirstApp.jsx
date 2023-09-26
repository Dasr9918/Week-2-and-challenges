import React, { useState } from 'react';

function FirstApp() {
  //Definir el estado inicial del contador utilizando el hook useState
  const [counter, setCounter] = useState(0);

  //Implementar la función handleSubtract para restar del contador
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  //mplementar la función handleReset para restablecer el contador al valor predeterminado
  const handleReset = () => {
    setCounter(0); // Puedes establecer cualquier valor predeterminado que desees aquí
  };

  return (
    <div>
      <h1>Contador: {counter}</h1>
      {/*Mostrar los botones y vincularlos a las funciones correspondientes */}
      <button onClick={handleSubtract}>Restar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default App;