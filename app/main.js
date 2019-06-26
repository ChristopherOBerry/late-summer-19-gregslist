import CarController from "./components/car/CarController.js";
import JobController from "./components/job/JobController.js";
import HouseController from "./components/house/HouseController.js";


class App{
  constructor(){
    this.controllers ={
      carController:  new CarController(),
      jobController: new JobController(),
      houseController: new HouseController()
    }
  }
}

window["app"] = new App()
