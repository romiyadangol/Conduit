export default function Avatar(props) {
    return(
        <>
            <div className="avatar">
                <img src={props.image} alt="avatar"/>
                <h1>{props.username}</h1>
            </div>
        </>
    );
}