import "../css/index.css";

export function Button({ text, variant, action, icon }) {

    if (icon !== "") {
        return (
        <button onClick={action} className={`${variant}`}>
            <div><img src={icon}/></div><div>{text}</div>
        </button>
    );
    } else {
        return( 
        <button onClick={action} className={`${variant}`}>
            <div>{text}</div>
        </button>
        );
    }
    
}

