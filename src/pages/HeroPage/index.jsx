import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function HeroPage() {
  const { id } = useParams();
  const [hero, setHero] = useState({ image: { url: "" } });

  useEffect(() => {
    async function fetchHero() {
      const response = await fetch(`http://localhost:3000/api/${id}`);
      const data = await response.json();
      setHero(data);
    }
    fetchHero();
  }, []);

  console.log(hero);

  return (
    <>
      {hero.image.url && (
        <div>
          <h2>{hero.name}</h2>
          <img src={hero.image.url} height="400px" />
          <div>Power stats</div>
          <div>
            <div>Combat</div>
            <div>{hero.powerstats.combat}</div>
          </div>
          <div>
            <div>Durability</div>
            <div>{hero.powerstats.durability}</div>
          </div>
          <div>
            <div>Intelligence</div>
            <div>{hero.powerstats.intelligence}</div>
          </div>
          <div>
            <div>Power</div>
            <div>{hero.powerstats.power}</div>
          </div>
          <div>
            <div>Speed</div>
            <div>{hero.powerstats.speed}</div>
          </div>
          <div>
            <div>Strength</div>
            <div>{hero.powerstats.strength}</div>
          </div>
          <Link to="/">Back to homepage</Link>
        </div>
      )}
    </>
  );
}

export default HeroPage;
