import '../assets/css/components/banner.css';
export default function Banner(props) {
    return(
        <>
            <div className="banner">
                <div className="container">
                    <h1>{props.title}</h1>
                    <p>{props.label}</p>
                </div>
            </div>
        </>
    );
}