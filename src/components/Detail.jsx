import "../components/Detail.css"
import P1 from "../assets/p1.svg"
const Detail = () => {
  return (
    <>

     

        <div className="detail">
       <div className="exit"><a href="/">geri</a> <div></div></div>

        <div className="det-sec">
          <div className="left">
            <img src={P1} alt="" />
          </div>

          <div className="right">
            <h1>Nombre del producto</h1>
            <p>Subtitulo</p>
            <h5>10,99 $</h5>
            <p>Cuerpo del texto para describir qué es este producto <br /> y por qué es una compra imprescindible.</p>
            <button>Añadir al carrito</button>

          </div>
        </div>

        </div>


    
    
    
    
    </>
  )
}

export default Detail