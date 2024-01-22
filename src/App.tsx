import "./App.css";
import Router from "./providers/Router";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-800 rounded-xl">
      <Router />
    </div>
  );
}

export default App;
