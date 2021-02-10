import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventProvider } from './game/EventProvider'
import { EventList } from "./game/EventList"
import { GameForm } from "./game/GameForm"
import {EventForm} from "./game/EventForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/games" render={
                    props => <GameList {...props} />} />
                <Route exact path="/games/new" render={
                    props => <GameForm {...props} />} />
            </GameProvider>
        <EventProvider>
            <GameProvider>
        <Route exact path="/events" render={
                    props => <EventList {...props} />} />
        <Route exact path="/events/new" render={
                    props => <EventForm {...props} />} />
                </GameProvider>
        </EventProvider>
    </main>
    </>
}