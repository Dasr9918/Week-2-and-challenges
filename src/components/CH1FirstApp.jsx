//CHALLENGE 1
import React, { useState } from 'react';

function TitleComponent() {
  // Establece el título como una variable de estado
  const [title, setTitle] = useState('Tu Nuevo Título');

  return (
    <div>
      {/* Renderiza el título en una etiqueta h1 */}
      <h1>{title}</h1>

      {/* Renderiza el texto "10" en una etiqueta span */}
      <span>10</span>
    </div>
  );
}

export default TitleComponent;