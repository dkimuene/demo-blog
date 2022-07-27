import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = {name: "Deo", age: 30}
  const link = "www.google.com"
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.name}</p>
        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;
