import Footer from "./components/Footer";
import Section from "./components/Section";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let users = [
    {
      name: "John",
      lastName: "Snow",
      age: 27,
      id: 66,
    },
    {
      name: "Din",
      lastName: "Moro",
      age: 23,
      id: 47,
    },
    {
      name: "Nana",
      lastName: "Mot",
      age: 30,
      id: 12,
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
