import profilepic from "./assets/profilepc.jpg"


function Card(){
    return(
        <div className="card">
            <img className="card-img" alt="profile pic" src={profilepic} ></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">Hi i am studing Msc Computing and i am Software Developer</p>
        </div>
    );
}
export default Card;