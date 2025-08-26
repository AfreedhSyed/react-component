import CardNavBar from "./CardNavBar";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export default function Card() {
  return (
    <>
      <div className="card">
        <CardNavBar />
        <CardBody />
        <CardFooter />
      </div>
    </>
  );
}
