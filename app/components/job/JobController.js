import JobService from "./JobService.js";

let _jobService = new JobService()

function drawJobs(){
  let jobsElem = document.querySelector("#jobs")
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.Template
  })
  jobsElem.innerHTML = template
}
export default class JobController{
  constructor(){
    console.log("Job controller works!")
    _jobService.addSubscriber("jobs", drawJobs)
    _jobService.getJobs()

  }
  addJob(e){
    e.preventDefault()
  let form = e.target

  let newJob = {
    jobTitle: form.jobTitle.value,
    rate: form.rate.value,
    company: form.company.value,
    hours: form.hours.value,
    description: form.description.value
  }
  _jobService.addJob(newJob)
  form.reset()
  }
}