import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function HeroesPage() {
  const [counter, setCounter] = useState(0);
  const [heroes, setHeroes] = useState([]);

function handleNext() {
    setCounter(counter+1)
}
function handlePrevious() {
    setCounter(counter-1)
}

  useEffect(() => {
    setHeroes([]);

    async function fetchHeroes() {
      for (let i = counter * 10 + 1; i < counter * 10 + 11; i++) {
        const response = await fetch(`http://localhost:3000/api/${i}`);
        const data = await response.json();
        setHeroes((Heroes) => [...Heroes, data]);
        console.log(data);
      }
    }
    fetchHeroes();
  }, [counter]);

  return (
    <div>
      <ol>
        {heroes.map((hero) => {
          return <li>{hero.name}</li>;
        })}
      </ol>
      <p onClick={handleNext}>Next</p>
      <p onClick={handlePrevious}>Previous</p>
    </div>
  );
}

export default HeroesPage;
