import React from "react";
import "./Pcomponente1.css";

function Pcomponente1() {
  return (
    <div className="pcomponente1">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="principal">
          <Principal />
          <Aside />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Noticias de la Formula 1 Edicion MC</h1>
      <img src="./src/assets/a8833-16800524630545-1920.avif" alt="Formula 1" />
    </nav>
  );
}

function Principal() {
  return (
    <main className="Principal">
      <h2>
        2 ganadores y 2 perdedores de China: ¿quién destacó cuando la F1 regresó
        a Shanghai?
      </h2>
      <p>Ganador: Max Verstappen.</p>
      <p>
        Max Verstappen realizó una de las actuaciones más imponentes de su
        carrera, ya que consiguió su primera victoria en el Gran Premio de China
        y la cuarta en cinco Grandes Premios en lo que va de temporada.
      </p>
      <p>Perdedor: Daniel Ricciardo.</p>
      <p>
        Esto estuvo muy cerca de ser un gran fin de semana para Daniel
        Ricciardo, quien tuvo la medida de su compañero de equipo en RB, Yuki
        Tsunoda, por primera vez esta temporada.
      </p>
      <p>Ganador: Lando Norris.</p>
      <p>
        Lando Norris afrontó el fin de semana esperando que su McLaren tuviera
        problemas en el Circuito Internacional de Shanghai, cortesía de sus
        curvas de larga duración.
      </p>
      <p>Perdedores: Aston Martin.</p>
      <p>
        Aston Martin desperdició una oportunidad de oro para sumar más puntos en
        el fin de semana del Gran Premio de China y mantener la presión sobre
        Mercedes en la lucha por la cuarta posición en el campeonato de
        constructores.
      </p>
    </main>
  );
}

// Componente de barra lateral
function Aside() {
  return (
    <aside className="aside">
      <h2>
        DESTACADOS: Reviva la acción de la clasificación en China cuando
        Verstappen consigue la pole y Sainz se estrella
      </h2>
      <h2>
        NOTICIA: Piastri admite que pasó gran parte del GP de China en modo de
        “limitación de daños” después de que el coche quedara “destruido”
      </h2>
    </aside>
  );
}

// Componente de pie de página
function Footer() {
  return (
    <footer className="footer">
      <h4>F1 derechos reservados</h4>
    </footer>
  );
}

export default Pcomponente1;
