
const characterList = [
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
    },
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        name: "Morty Smith"
    },
    {
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        name: "Johnny Depp"
    }
]

const CharacterComponent = () => {
    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            <h3>Team 6</h3>


            <div className="card">
                {characterList.map((item, index) => {
                    return (
                        <div key={index} className="character-container">
                            <img className="img" src={item.imgUrl} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    )

                })}


            </div>
        </div>
    )
}

export default CharacterComponent