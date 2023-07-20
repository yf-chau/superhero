export default function HeroCard({hero}) {
    return (
        <div className="hero-card">
            <div>
                {hero.image ? <img src={hero.image.url} alt={hero.name} /> : ""}
            </div>
            <div>
                <h2>{hero.name}</h2>
                <p>Intelligence: {hero.powerstats.intelligence}</p>
                <p>Power: {hero.powerstats.power}</p>
                {hero.biography["place-of-birth"] ? <p>Born in: {hero.biography["place-of-birth"]}</p> : ""}
                <p>{hero.biography["first-appearance"]}</p>
            </div>
        </div>
    )
}
