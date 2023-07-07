import React from "react";




function App() {


        // setInterval(timeDisplay, 1000);


  const [timeWord, timeCount] = React.useState("TIME");
  const [isTimeDisplayed, setIsTimeDisplayed] = React.useState(false)

//   function handleTimeToggle(){
//         if (isTimeDisplayed){
//                 setIsTimeDisplayed(false);
//                 timeCount("TIME");
//         } else {
//                 setIsTimeDisplayed(true);
//                 timeDisplay();
//         }
//   }

  function timeDisplay(){
    const newTime = new Date().toLocaleTimeString();
    timeCount(newTime);
    setIsTimeDisplayed(!isTimeDisplayed);
  }
  return (
    <div className="container backdrop-opacity-20 backdrop-invert bg-white/30 sm:w-[500px] w-72 border mt-20 m-auto p-20 text-center rounded-xl h-96">
      <h1 className="sm:text-2xl text-xl tracking-wider font-bold text-gray-950 mt-8">{isTimeDisplayed ? timeWord : "TIME"}</h1>
      <button className="bg-gray-900 text-neutral-200 mt-20 p-4 rounded-2xl tracking-wide transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 tracking-wider" onClick={timeDisplay}>{isTimeDisplayed ? "Close Time" : "Get Time⏲️"}</button>
    </div>
  );
}

export default App;
