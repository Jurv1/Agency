import './App.scss';
import BodyComp from './BodyComp/BodyComp';
import Header from './Header/Header';


function App(props) {
  
  return (
    <div className="wrapper">
      <Header />
      <BodyComp cards = {props.cards}/>
    </div>
  );
}

export default App;
