import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import {EventProvider} from './game/EventProvider'
import {EventList} from "./game/EventList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
            </GameProvider>
            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
            </EventProvider>
        </main>
    </>
}