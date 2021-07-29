export class Product {
  public id: string
  public name: string
  public description: string
  public imageUrl: string
  public price: number
  public favorite: boolean

  constructor(
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    favorite: boolean
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.imageUrl = imageUrl
    this.price = price
    this.favorite = favorite
  }
}
