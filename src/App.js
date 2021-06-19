import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        name="Diana Lane"
        online
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/95.jpg"
        name="Lester Stanley"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/14.jpg"
        name="Marian Silva"
        online
      />
    </div>
  );
}

export default App;
