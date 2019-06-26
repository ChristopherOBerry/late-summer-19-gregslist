export default class Job{
  constructor(data){
    this._id = data._id
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.company = data.company
    this.description = data.description
    this.hours = data.hours
  }

get Template(){
  return `
  <div class="col-4">
        <h4>Title: ${this.jobTitle}</h4>
        <h4>Company: ${this.company}</h4>
        <h4>Rate: ${this.rate}</h4>
        <h4>Hours: ${this.hours}</h4>
        <p>Description: ${this.description}</p>
      </div>
  `
}

}

