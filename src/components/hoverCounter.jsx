import WithCounter from "./HOC/withCount";

const HoverCounter = (props) => {
  const { handleCount, counter } = props;
  return (
    <div className="box1">
      <button onMouseMove={handleCount}>Hover Me</button>
      <p>Value:{counter}</p>
    </div>
  );
};

export default WithCounter(HoverCounter);
