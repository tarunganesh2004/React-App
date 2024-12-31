//@ts-nocheck
// props= read-only properties that are shared between components
//A parent component can send data to a child component
// <Component key=value/>


import Student from "./Student";

function App() {

  return (
    // here we can send key value pairs
    <>
      <Student name="Tarun Ganesh" age={20} isStudent={true} />
      <Student name="Sri Hari" age={21} isStudent={false} />
      <Student name="Madhu" age={22} isStudent={false} />
      <Student name="ENSTG" age={20} isStudent={true} />
      <Student name="Test"/> 
    </>
  );

}

export default App