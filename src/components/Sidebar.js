import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    // in our sdiebar we need to change accordingly
    // when the menu is toggled
    // but for that we need to get the state from the redux store
    // for that we will use useSelector hook from react-redux
    // but for now let's just create a static sidebar
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    // 1. useSelector is a hook that we get from react-redux library
    // 2. it helps us to get the state from the redux store

    // we have to subscribe to a specific slice of the store
    // in our case it is app slice
    // so we will pass a function to useSelector
    // that will return the app slice of the store.

    // this is called early return pattern
    if (!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg w-48 '>

            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h1 className='font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>Gaming</li>
            </ul>

            <h1 className='font-bold pt-5'>Playlist</h1>
            <h1 className='font-bold'>Watch later</h1>
        </div>
    )
}

export default Sidebar