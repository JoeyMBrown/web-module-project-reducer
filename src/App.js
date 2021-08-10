import React, { useReducer } from 'react';
import { addOne, applyNumber, changeOpertion, clearDisplay, addToMemory, clearMemory } from './actions/index';
import './App.css';
import reducer, { initialState }  from './reducers/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(addToMemory(), state)}/>
              <CalcButton value={"MR"} onClick={() => dispatch(applyNumber(state.memory, state))}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory(), state)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatch(applyNumber(1), state)}/>
              <CalcButton value={2} onClick={() => dispatch(applyNumber(2), state)}/>
              <CalcButton value={3} onClick={() => dispatch(applyNumber(3), state)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(applyNumber(4), state)}/>
              <CalcButton value={5} onClick={() => dispatch(applyNumber(5), state)}/>
              <CalcButton value={6} onClick={() => dispatch(applyNumber(6), state)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(applyNumber(7), state)}/>
              <CalcButton value={8} onClick={() => dispatch(applyNumber(8), state)}/>
              <CalcButton value={9} onClick={() => dispatch(applyNumber(9), state)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(changeOpertion("+"), state)}/>
              <CalcButton value={"*"} onClick={() => dispatch(changeOpertion("*"), state)}/>
              <CalcButton value={"-"} onClick={() => dispatch(changeOpertion("-"), state)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay(), state)}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
