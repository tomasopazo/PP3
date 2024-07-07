import './CustomButton.css';
import { useState } from 'react';
import setData from '../callbacks/setData';

function CustomButton(props){
    const [colors, setColors] = useState();
    setColors(props.colors);

    /*const cambioColor = async () => {
        switch (colors.color) {
          case "red":
            setColors({
                color: "blue",
                text: "white"
            })
            break;
          case "blue":
            setColors({
                color: "red",
                text: "white"
            })
            break;
          default:
            setColors({
                color: "",
                text: ""
            })
            break;
        }
        await setData(colors);
      }*/
    if (colors != null) {
        const colorBoton = colors.color;
        return (
            <>
                <button className="button" style={{color: colorBoton}} onClick={cambioColor}>
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