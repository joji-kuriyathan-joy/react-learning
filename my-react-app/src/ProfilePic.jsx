
// click event = An interaction when a user clicks on a specific item element.
// we can responf to click s by passing a callback to the onClick event handler.



function ProfilePic(){

    const imageUrl = './src/assets/profilepc.jpg';
   
    const handleCLick = (e) => e.target.style.display = "none";
   
    return(<img onClick={(e) => handleCLick(e)} className="profile-pic" src ={imageUrl}/>)
}

export default ProfilePic