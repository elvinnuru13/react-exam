import Bir from "../assets/1.svg"
import C1 from "../assets/c1.svg"
import C2 from "../assets/c2.svg"
import C3 from "../assets/c3.svg"
import "../components/Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

  return (
    <>

    <div className="home">
        

        <div className="section">
                <h1>Título de la página de inicio</h1>
                <p>Subtítulo que establece el contexto, comparte más información sobre el <br /> sitio web o, en general, motiva a la gente a seguir navegando. </p>

                <button className="f-btn">Boton</button>
                <img src={Bir} alt="" />
            </div>

            <div className="carts">

                <h1>Encabezado de sección</h1>

                <div className="det-carts">
                      <div className="cart" onClick={() => navigate("/product/1")} >
                    <img src={C1} alt="" />
                    <h5>Subtitulo</h5>
                    <p>Cuerpo del texto para lo que <br /> desees añadir adicionalmente al <br /> subtítulo. </p>
                </div>

                <div className="cart" onClick={() => navigate("/product/2")}>
                    <img src={C2} alt="" />
                    <h5>Subtitulo</h5>
                    <p>Cuerpo del texto para lo que <br /> desees añadir adicionalmente al <br /> subtítulo. </p>
                </div>

                <div className="cart" onClick={() => navigate("/product/3")}>
                    <img src={C3} alt="" />
                    <h5>Subtitulo</h5>
                    <p>Cuerpo del texto para lo que <br /> desees añadir adicionalmente al <br /> subtítulo. </p>
                </div>

                </div>

              
            </div>
    </div>


    
    
    
    
    
    
    </>
  )
}

export default Home