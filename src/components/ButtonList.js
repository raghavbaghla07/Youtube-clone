import React from 'react'
import Button from './Button'

//TODO: refacstor using map function
// const List = [
//     "All",
//     "game",]

const ButtonList = () => {
    return (
        <div className='flex'>
            <Button name="All" />
            <Button name="game" />
            <Button name="music" />
            <Button name="Live" />
            <Button name="cricket" />
            <Button name="news" />
            <Button name="cooking" />
            <Button name="Psychology" />
            <Button name="movies" />
        </div>
    )
}

export default ButtonList