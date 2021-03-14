import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className='App'>
      <h1>Hello StackBlitz!</h1>
      
      {Message({
        text: 'HELLO',
        x: 5 + 5,
        y: "10",
        callback: ()=>{console.log('123')},
      })}

      <Message
        text="hello"
        x={1 + 5}
        y="2"
        callback={()=>{}}
      />

      <Message
        text="bye"
        x="3"
        items={[1,2,3,4,5]}
      />
    </div>
  );
}


const Message = (props) => {
  console.log(props);
  return (
    <p className="Message">
      {props.text} {props.x} {props.y} {props.items} {props.callback}
    </p>
  );
}