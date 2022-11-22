import React, { useState } from 'react'

export default function About(props) {
    return (
        <div>
            <div className="container">
                <h1 className={`text-${props.mode === 'light'?'dark': 'dark'}`}>Know us</h1>
                <p className={`text-${props.mode === 'light'?'dark': 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis atque nemo minus tenetur! Labore vitae perferendis reprehenderit pariatur dolor nemo error consequuntur quibusdam aliquam, dolore harum, vero quaerat totam eius eos consequatur repellat excepturi assumenda quos ex placeat earum, fugiat at culpa. Dolore vitae tempora obcaecati ducimus. Laudantium, minima.</p>
            </div>
        </div>
    )
}
