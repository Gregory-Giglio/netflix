import './App.css';
import movies from './assets/movies.json';
import Section from './components/Section';

import logo from "./assets/img/logo.696c2101.png";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo Netflix" />
      <p></p>
      {/* <Section movies={movies[0]}/> */}

      {movies.map((movie, index) => {
        return (
          <Section key={index} movies={movie}/>
        );
      })}
      
      
    </>
  );
};

export default App;
