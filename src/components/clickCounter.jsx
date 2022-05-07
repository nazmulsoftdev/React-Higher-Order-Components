import WithCounter from "./HOC/withCount";

const ClickCounter = (props) => {
  const { handleCount, counter } = props;
  return (
    <div className="box1">
      <button onClick={handleCount}>Click</button>
      <p>Value: {counter}</p>
    </div>
  );
};

export default WithCounter(ClickCounter);
