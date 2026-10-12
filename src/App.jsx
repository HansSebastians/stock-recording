import { InformationContainer } from "./components/Container";


function App() {  
  return (
    <div style={{display: "flex"}}>
    <InformationContainer 
      information={"Jenis bahan baku"}
      icon={"/src/assets/boxes.svg"}
      total={"20.0000.000"}
      detail={`${9} aman ${3} perlu perhatian`}
    />
    </div>
  )
}

export default App;
