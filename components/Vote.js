import React, { useState } from 'react'

function Vote() {
    const [like, setLike] = useState(1)
    const handleClickLike = () => {
        setLike(like + 1)
        console.log('Like: ' + like)
    }
    const [dislike, setDislike] = useState(1)

    const handleClickDislike = () => {
        setDislike(dislike + 1)
        console.log('DIslike: ' + dislike)

    }
    return (
        <div>
            <h1>Vote for this: </h1>
            <button onClick={handleClickLike}>Like</button>
            <p></p>
            <button onClick={handleClickDislike}>Dislike</button>

        </div>
    )
}

export default Vote