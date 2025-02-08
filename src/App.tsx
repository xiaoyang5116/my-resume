import Header from "./components/Header/ Header";
import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  );
}

export default App;
