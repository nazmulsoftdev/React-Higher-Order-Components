import { useState } from "react";
const WithCounter = (PassComponent) => {
  const NewComponent = () => {
    const [counter, Setcounter] = useState(0);
    const [userText, SetuserText] = useState();

    const handleCount = () => {
      Setcounter(counter + 1);
    };

    const handleInput = (e) => {
      SetuserText(e.target.value);
    };

    return (
      <PassComponent
        counter={counter}
        handleCount={handleCount}
        handleInput={handleInput}
        userText={userText}
      />
    );
  };

  return NewComponent;
};

export default WithCounter;
