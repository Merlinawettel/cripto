import styled from "@emotion/styled"

const Contenedor = styled.div `
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;

`

const Imagen = styled.img`
  display: block;
  width: 120px;

`
const Texto = styled.p `
font-size: 20px;
span {
    font-weight: 700;
}

`
const Precio = styled.p `
font-size: 25px;
span {
    font-weight: 700;
}
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY,LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE}= resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto'/>
        <div> 
        <Precio><p>El Precio es de: <span>{PRICE}</span></p></Precio>
      <Texto><p>El Precio mas alto del dia: <span>{HIGHDAY}</span></p>             </Texto>
      <Texto><p>El Precio más bajo del día <span>{LOWDAY}</span></p></Texto>
      <Texto><p>Variación de ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p></Texto>
      <Texto> <p>Ultima Actualización: <span>{LASTUPDATE}</span></p></Texto>
     </div>
     

    </Contenedor>
  )
}

export default Resultado
