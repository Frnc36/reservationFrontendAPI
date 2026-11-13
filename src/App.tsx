import "./App.css";
import Users from "./components/Users";

function App() {
  const NEV = "Mágori Ferenc Ferdinánd";
  const CIM = "Reservation API";

  return (
    <>
      <main>
        <header>{CIM}</header>
        <article>
          <Users/>
        </article>
        <footer>&copy;{NEV}</footer>
      </main>
    </>
  );
}

export default App;
