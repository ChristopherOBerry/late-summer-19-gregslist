export default class House{
    constructor(data){
        this._id = data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }
    get Template(){
        return `
        <div class="col-4">
              <img src="${this.imgUrl}" alt="House Photo" class="card-img-top" />  
              <h4>Bedrooms: ${this.bedrooms}</h4>
              <h4>Bathrooms: ${this.bathrooms}</h4>
              <h4>Levels: ${this.levels}</h4>
              <h4>Year: ${this.year}</h4>
              <h4>Price: ${this.price}</h4>
              <p>Description: ${this.description}</p>
            </div>
        `
      }
}