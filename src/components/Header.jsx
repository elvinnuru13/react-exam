import "../components/Header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <p>Nombre del sitio</p>

        <div className="nav-right">
          <p>Pagina</p>
          <p>Pagina</p>
          <p>Pagina</p>

          <button className="f-btn">Boton</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
