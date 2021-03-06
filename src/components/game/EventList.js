import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"


export const EventList = (props) => {
    const history = useHistory()

    const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext)
    const [toggle, setToggle]=useState(false)

    useEffect(() => {
        getEvents()
    }, [])
    
    // useEffect(()=>{
    //     getEvents()
    // }, [toggle])

    

    return (
        <>
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
            </header>
            {
                events.map(event => {
                    const attending = events.some(evt => evt.id === event.id)
                    return <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>{event.description}</div>
                        <div>
                            {
                                new Date(event.event_time).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                               
                            }
                        </div>
                        {/* {console.log(event.game.title)}
                        {console.log(event.joined)} */}
                        {
                            event.joined
                                ? <button className="btn btn-3"
                                    onClick={() => {
                                        // console.log("leave",event)
                                        leaveEvent(event.id).then(setToggle)}}
                                    >Leave</button>
                                : <button className="btn btn-2"
                                    onClick={() => {
                                        // console.log("join",event)
                                        joinEvent(event.id).then(setToggle)}}
                                    >Join</button>
                        }
                    </section>
                })
            }
        </article >
        
        </>
    )
}

