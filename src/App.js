
import './App.css';
import MainContainer from './containers/MainContainer'


// import Project from './components/Project';

function App() {
  return (
    <div className="App">
      {/* <Project/> not calling direct  */}
      {/* calling throw MainContainer */}
      <MainContainer />
    </div>
  );
}

export default App;
