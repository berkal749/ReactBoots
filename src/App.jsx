import Image from "./components/img";
import Name from "./components/name";
import Description from "./components/description";
import SomeWhere from "./someWhere";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className=""
      style={{
        height: "100vh",
        display:"flex",
     flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card  " style={{ width: "18rem" }}>
        <Image></Image>
        <div className="card-body">
          <Name></Name>
          <Description></Description>
          <SomeWhere></SomeWhere>
        </div>
      </div>
      <p className="">Hello there!</p>
    </div>
  );
}

export default App;
