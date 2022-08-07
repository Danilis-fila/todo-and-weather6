import './App.css';
import TodoForm from './React/todoForm'
import WeatherForm from './React/weatherForm';

function App() {
  return (
    <div className="app">

      <div className='conteiner-todo'>
        <TodoForm />
      </div>

      <div className='conteiner-weather'>
        <WeatherForm />
      </div>
    
    </div>
  );
}

export default App;
