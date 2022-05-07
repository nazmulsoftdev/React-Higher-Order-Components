import WithCounter from "./HOC/withCount";

const TextInput = (props) => {
  return (
    <div className="box1">
      <input type="text" onChange={props.handleInput} />
      <br />
      <p>
        {"Text: "}
        {props.userText}
      </p>
    </div>
  );
};

export default WithCounter(TextInput);
