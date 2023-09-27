import Data from "./Data"
export default function (props) {
    return (
        <>  
            <div className="container mt-5 mb-5">
            <div class="card mb-3">
                <img class="card-img-top" src={props.img} alt="Card image cap " />
                <div class="card-body">
                    <h5 class="card-title">{props.heading}</h5>
                    <p class="card-text">{props.desc}</p>
                    <a href={props.link}>{props.link===""?"":"link"}</a>
                </div>
            </div>
            </div>
        </>
    )
}