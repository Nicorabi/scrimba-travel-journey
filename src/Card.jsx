/* eslint-disable react/prop-types */
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" />
            <div className="card-wrap">
                <p className="location">{props.location} <a href={props.google}>View on Google Maps</a></p>
                <p className="title">{props.title}</p>
                <p className="date">{props.start} - {props.end}</p>
                <p className="paragraph">{props.description}</p>
            </div>
        </div>
    )
}

export default Card
