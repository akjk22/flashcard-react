import React from "react";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import ScheduleList from "./Components/ScheduleList";
import SeasonalProduce from "./Components/SeasonalProduce";
import SeasonalProduceList from "./Components/SeasonalProduceList";


function App(){
  return (
    <React.Fragment>
      <Header />
      <Schedule />
      <ScheduleList />
      <SeasonalProduce />
      <SeasonalProduceList />
    </React.Fragment>
  );
}

export default App;