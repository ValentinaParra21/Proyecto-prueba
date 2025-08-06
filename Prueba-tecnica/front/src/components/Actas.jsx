import React, { useState } from 'react';
import '../styles/actas.css';


// codigo para ver actas, y crear nuevas, es decir la vista sobrepuesta que se mostrara al usuaio.
const Actas = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [actaSeleccionada, setActaSeleccionada] = useState(null);

  const actas = [
    { id: 1, titulo: 'Reunión 01', estado: 'Abierta', fecha: '2025-08-05', compromisos: 5 },
    { id: 2, titulo: 'Planeación Q3', estado: 'Cerrada', fecha: '2025-07-20', compromisos: 2 },
  ];

  const handleNuevaActa = () => {
    setMostrarFormulario(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleVerActa = (acta) => {
    setActaSeleccionada(acta);
  };

  const handleCerrarDetalle = () => {
    setActaSeleccionada(null);
  };

  return (
    <div className="actas-background">
      <div className="actas-panel">
        <header className="actas-header">
          <h2>Actas</h2>
          <p>Consulta, filtra y accede al detalle de las actas generadas en el sistema.</p>
        </header>

        <div className="filtros">
          <input type="text" placeholder=" Buscar por título" />
          <input type="date" />
          <select defaultValue="">
            <option value="">Todos los estados</option>
            <option value="Abierta">Abierta</option>
            <option value="Cerrada">Cerrada</option>
          </select>
        </div>

        <table className="tabla-actas">
          <thead>
            <tr>
              <th>Título</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Compromisos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actas.map((acta) => (
              <tr key={acta.id}>
                <td>{acta.titulo}</td>
                <td>{acta.estado}</td>
                <td>{acta.fecha}</td>
                <td>{acta.compromisos}</td>
                <td> 

                  <button className="btn-ver" onClick={() => handleVerActa(acta)}>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-flotante" onClick={handleNuevaActa}>＋ Nueva acta</button>
      </div>

    
      {mostrarFormulario && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>Crear Nueva Acta</h3>
            <form>
              <input type="text" placeholder="Título" />
              <input type="date" />
              <select>
                <option value="Abierta">Abierta</option>
                <option value="Cerrada">Cerrada</option>
              </select>
              <textarea placeholder="Descripción o notas..."></textarea>
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCerrarFormulario}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

 
      {actaSeleccionada && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>Detalle del Acta</h3>
            <p><strong>Título:</strong> {actaSeleccionada.titulo}</p>
            <p><strong>Estado:</strong> {actaSeleccionada.estado}</p>
            <p><strong>Fecha:</strong> {actaSeleccionada.fecha}</p>
            <p><strong>Compromisos:</strong> {actaSeleccionada.compromisos}</p>
            <button onClick={handleCerrarDetalle}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actas;
