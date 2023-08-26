
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import logo from './logo.svg';
import './App.css';
import pic1 from './imgs/photo1.png'
import './team'
import Team from './team';
import Header from './header';
function App() {
  return (
    <div className="App">
      
      <Team/>
    </div>
  );
}

export default App;
