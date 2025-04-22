

function Button(){

  let count = 0;
  // const handleClick = () => console.log("OUCH!");
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  }

  return (
    <button onClick={() => handleClick("Kris")}>
      Click me 😊
    </button>
  )
}

export default Button;
