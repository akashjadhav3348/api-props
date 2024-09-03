import React from 'react'

const Post = (props) => {

    return (
        <>
           <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={props.image} alt={`${props.firstName} ${props.lastName}`} />
                <div className="card-body">
                    <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
                    <p className="card-text">
                        Age: {props.age}<br/>
                        Email: {props.email}<br/>
                        Phone: {props.phone}
                    </p>
                    <a href={`mailto:${props.email}`} className="btn btn-primary">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Post