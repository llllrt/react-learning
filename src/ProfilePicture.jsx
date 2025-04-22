

function ProfilePicture(){


  const imageUrl = './src/assets/JT.webp';
  const handleClick = (e) => e.target.style.display = "none";
  

  return(
    <img onClick={handleClick} src={imageUrl} alt="JT" />
  )
}

export default ProfilePicture;
