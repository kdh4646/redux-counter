import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

//function based component
const Counter = () => {
  //redux dispatch
  const dispatch = useDispatch();

  //managed by redux - automatic subscribe
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

/*

Need to Import 'Component' from react, 'connect' from react-redux

//class-based component example for redux
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//similar to useSelector()
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

//similar to useDispatch()
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

//connect() returns new function & execute new function
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/

export default Counter;
