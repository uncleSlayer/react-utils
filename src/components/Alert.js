import React from 'react'

function Alert(props) {
    return (
        props.alertMessage && <div className="alert alert-success alert-dismissible fade show container" role="alert">
            <strong>Hey, </strong> {props.alertMessage}
        </div>
    )
}
export default Alert
