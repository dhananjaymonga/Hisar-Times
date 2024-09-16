import React from 'react'
import { useParams } from 'react-router-dom'
export default function MainNews() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            hello
        </div>
    )
}
