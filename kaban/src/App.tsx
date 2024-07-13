import Container from "./components/Container";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col h-svh">
      <Navbar />
      <Container />
    </div>
  );
}
