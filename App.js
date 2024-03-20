import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';

function App() {
  return (
   
   <div>
     <Header name="Durgesh Tiwari" title="first card"/>
     <hr />
     <Header name="satyaprakash swain" title="second card"/>
     <h1>Satyaprakash Swain</h1>
     <p>This is the paragraph based on react project</p>
     <p>This is the another paragraph based on react project</p>
     <Header name="chiku swain" title="third card"/>
   </div>
  );
}

export default App;
