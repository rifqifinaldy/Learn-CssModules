import {Container} from 'reactstrap';
import './App.css';
import { CustomButton } from './Components/Button/CustomButton';

function App() {
  return (
    <div>
      <h1 className="text-center mt-5">Dynamic Component Lib</h1>
      <hr />
      
      <Container className="mt-5">
        <h4 className="text-center">Button Component</h4>
        <h6 className="text-secondary text-center">Button Pallete</h6>
        <div className="d-flex justify-content-center mb-3">
          <CustomButton Style="primary" className="me-3">
            Primary
          </CustomButton>
          <CustomButton Style="secondary" className="me-3">
            Secondary
          </CustomButton>
          <CustomButton Style="outline">
            Outline
          </CustomButton>
        </div>
        <h6 className="text-secondary text-center">Button Shape</h6>
        <div className="d-flex justify-content-center">
          <CustomButton Style="primary" Shape="square" className="me-3">
            Square
          </CustomButton>
          <CustomButton Style="primary" Shape="pill">
            Pill
          </CustomButton>
        </div>
        <h6 className="text-secondary text-center">Button Size</h6>
        <div className="d-flex justify-content-center mb-3">
          <CustomButton Style="primary" Shape="square" Size="small" className="me-3">
            Small
          </CustomButton>
          <CustomButton Style="primary" Shape="pill" Size="medium" className="me-3">
            Medium
          </CustomButton>
          <CustomButton Style="primary" Shape="pill" Size="large">
            Large
          </CustomButton>
        </div>
        <div className="d-flex justify-content-center">
          <CustomButton Style="primary" Shape="pill" Size="block">Block</CustomButton>
        </div>
      </Container>
    </div>
  );
}

export default App;
