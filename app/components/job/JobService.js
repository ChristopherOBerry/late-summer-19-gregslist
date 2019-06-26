import Job from "../../models/Job.js";

let _jobApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})


let _state = {
  jobs: []
}
let _subscribers = {
  jobs: []
}
function setState(propName, data){
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}
export default class JobService{
  constructor(){
    console.log("Job service works!")
  }
  addJob(newJob){
    _jobApi.post('', newJob)
      .then(res => {
      
        let serverJob = res.data.data
        let job = new Job(serverJob)
        let jobs = this.Jobs
        jobs.unshift(job)
        setState('jobs', jobs)
      })
      .catch(e => console.error(e))
    }
  
  getJobs() {
    _jobApi.get('')
      .then(res => {
      let serverJobs = res.data.data
      let jobs = serverJobs.map(c => new Job(c)).reverse()
      setState('jobs', jobs)
    })
    .catch(e => console.error(e))
  }
  addSubscriber(propName, fn){
    _subscribers[propName].push(fn)
  }
  get Jobs(){
    return _state.jobs.map(job => new Job(job))
  }
}

