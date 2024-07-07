import './CustomButton.css';

function CustomButton(props){
    const colores = props.buttonColor;
    if (colores != null) {
        const colorBoton = colores.color;
        return (
            <>
                <button className="button" style={{color: colorBoton}}>
                    Cambio Ahora!!
                </button>
            </>
        )   
    } else {
        return (
            <>
                <button className="button">
                    Cambio ahora!!
                </button>
            </>
        )
    }
}

export default CustomButton;