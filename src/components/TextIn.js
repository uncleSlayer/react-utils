import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextIn(props) {
    const [text, setText] = useState('')

    const handleClick = () => {
        let lower = text.toUpperCase()
        setText(lower)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const changeColor = () => {
        let lower = text.toLowerCase()
        console.log(lower);
        setText(lower)
    }

    return (
        <>
            <div>
                <div className="container">
                    <h3 className={`text-${props.mode === 'light'?'dark': 'light'}`}>{props.heading}</h3>
                    <div className="form-floating my-3">
                        <textarea onChange={handleChange} value={text} className={`form-control ${props.mode === 'dark'? 'bg-dark text-white':'bg-white text-dark'}`} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} />
                        <input className="btn btn-primary my-3 mx-3" type="submit" value="convert to uppercase" onClick={handleClick} />
                        <input className="btn btn-primary my-3 mx-3" type="submit" value="convert to lower case" onClick={changeColor} />
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className={`text-${props.mode === 'light'?'dark': 'light'}`}>Text summary</h3>
                <p className={`text-${props.mode === 'light'?'dark': 'light'}`}>{text.split(' ').length} Words and {text.length} Characters</p>
                <p className={`text-${props.mode === 'light'?'dark': 'light'}`}>{0.008 * text.split(' ').length} minutes read</p>
            </div>
            <div className="container">
                <h3 className={`text-${props.mode === 'light'?'dark': 'light'}`}>Preview</h3>
                <p className={`text-${props.mode === 'light'?'dark': 'light'}`}>{text.length > 0? text: 'Write something in the text box to preview'}</p>
            </div>
        </>
    )
}

TextIn.prototype = {
    header: PropTypes.string
}