import Button from "./Button/Button";
import WayToTeach from "./WayToTeach";
import { ways, differences } from "./data";
import { useState } from "react";

export default function Ul() {

  //   const [now, setNow] =useState(new Date())
  // setInterval( ()=> setNow(new Date()),1000)
const [contentType, setContentType] = useState(null);






  //console.log("App...")
  const handleClick = (type) => {
    //console.log('touch',type)
    setContentType(type);
    console.log(contentType);
  };

  const renderContentType = () => {
    if (contentType) {
      return <p>{differences[contentType]} </p>;
    }

    return <p>press button</p>;
  };
  return (
    <section>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>

      <Button
        isActive={contentType == "way"}
        onClick={() => handleClick("way")}
      >
        Підхід
      </Button>
      <Button
        isActive={contentType == "easy"}
        onClick={() => handleClick("easy")}
      >
        рп
      </Button>
      {renderContentType()}
    </section>
  );
}
