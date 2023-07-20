import { useState, useEffect } from "react"
import { HeroCard } from '../../components/'

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState("")
    const [heroData, setHeroData] = useState([])

    function handleInput(e){
        const input = e.target.value
        setInputValue(input)
    }

    function handleSubmit(e){
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue("")
    }

    useEffect(() => {
        async function searchAPI(){
            if(searchString !== "") {
                const response = await fetch(`https://superheroapi.com/api/10227237697881031/search/${searchString}`)
                const data = await response.json()
                if(data.response === "success") {
                    setHeroData(data.results)
                }
            }
        }
        searchAPI()
    },[searchString])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} type="text" required onChange={handleInput}/>
                <input type="submit" value="Search" />
            </form>
            {heroData.map(hero => <HeroCard key={hero.id} hero={hero}/>)}
        </>
    )
}
 