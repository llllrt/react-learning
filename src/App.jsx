import Student from './Student';

function App() {
 
  return (
    <>
       <Student 
        name="Kris"
        age={29}
        isStudent={true}
       />
       <Student 
        name="Eric"
        age={28}
        isStudent={false}
       />
       <Student 
        name="Dong"
        age={29}
        isStudent={false}
       />
       <Student />
    </>
  );
}

export default App
