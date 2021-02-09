import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
        <button onClick={() => props.history.push("/games/new")}>
                Register Game
            </button>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} </div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__description">{game.title} is a game where you {game.description}</div>
                    </section>
                })
            }
        </article>
        </>
    )
}