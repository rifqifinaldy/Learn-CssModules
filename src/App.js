import './App.css';
import ButtonExample from './Example/Button/ButtonExample';
import WidgetExample from './Example/Widget/WidgetExample';

function App() {
  return (
    <div>
      <h1 className="text-center mt-5">Dynamic Component Lib</h1>
      <hr />
      <ButtonExample />
      <hr className="mt-5"/>
      <WidgetExample />
    </div>
  );
}

export default App;
