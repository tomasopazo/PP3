import './CustomButton.css';

function CustomButton(props){
    //const cambioColor = props.cambioColor;
    return (
        <>
            <button className="button" style={{color: props.colors.color}}>
                Cambio Ahora!!
            </button>
        </>
    )
}

export default CustomButton;