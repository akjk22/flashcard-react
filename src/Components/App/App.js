import React from "react";
import Header from "../Header";
import Schedule from "../Schedule";
// import ScheduleList from "./Components/ScheduleList";
import SeasonalProduce from "../SeasonalProduce";
import SeasonalProduceList from "../SeasonalProduceList";
import ScheduleDropDown from "../ScheduleDropDown";
import ScheduleControl from "../ScheduleControl";
// import Toggle from "../Test";


function App(){
  return (
    <React.Fragment>
      <Header />
      <ScheduleDropDown />
      <Schedule />
      <ScheduleControl />
      {/* <Toggle /> */}
      {/* <ScheduleList /> */}
      <SeasonalProduce />
      <SeasonalProduceList />
    </React.Fragment>
  );
}

export default App;