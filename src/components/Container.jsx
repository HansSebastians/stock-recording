import "../css/index.css";

function Container({ children }) {
    return (
        <div className={"container"} >
            {children}
        </div>
    )
}

export function InformationContainer({ information, icon, total, detail }) {
    return (
        <Container>
            <div style={{ height: "104px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <div className={"container-information"}>
                    <span style={{color: "#748078", fontSize: "13px"}}>{information}</span>
                    <span><img  width="20" height="20" src={`${icon}`}/></span>
                </div>
                <div style={{fontSize: "28px", fontWeight: "600", color: "#202D28"}}>{total}</div>
                <div style={{color: "#748078", fontSize: "12px"}}>{detail}</div>
            </div>
        </Container>
    )
}
