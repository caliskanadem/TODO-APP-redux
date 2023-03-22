import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../../redux/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(inc())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
