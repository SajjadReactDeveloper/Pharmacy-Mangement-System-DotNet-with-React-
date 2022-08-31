import Router from "./Router";
import LoginRouter from "./LoginRouter";

function App() {
  const login = localStorage.getItem('Login')
  console.log(login == 'true');
  return (
    <div className="App">
      {login == 'true' ? <Router />: <LoginRouter />}
    </div>
  );
}

export default App;
