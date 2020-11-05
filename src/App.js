import logo from './logo.svg';
import './App.css';
import BMICalculator from './bmi-calculator';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BMICalculator />
      </Provider>
    </div>
  );
}

export default App;
