import House from "../../models/House.js";

let _houseApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/houses',
    timeout: 3000
})

let _state = {
    houses: []
  }
  let _subscribers = {
    houses: []
  }
  function setState(propName, data){
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn());
  }

  export default class HouseService{
    constructor(){
      console.log("House Service works!")
    }
    addHouse(newHouse){
      _houseApi.post('', newHouse)
        .then(res => {
        
          let serverHouse = res.data.data
          let house = new House(serverHouse)
          let houses = this.Houses
          houses.unshift(house)
          setState('houses', houses)
        })
        .catch(e => console.error(e))
      }
    
    getHouses() {
      _houseApi.get('')
        .then(res => {
        let serverHouses = res.data.data
        let houses = serverHouses.map(c => new House(c)).reverse()
        setState('houses', houses)
      })
      .catch(e => console.error(e))
    }
    addSubscriber(propName, fn){
      _subscribers[propName].push(fn)
    }
    get Houses(){
      return _state.houses.map(house => new House(house))
    }
  }