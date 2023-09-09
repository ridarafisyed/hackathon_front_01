export interface ProductCart{
    id: number,
    name: string,
    imagePath: string
    price: number,

}
export interface AddProductCart{
    product :{id: number,
    name: string,
    imagePath: string
    price: number,},
    quantity:number

}

export interface CartItem{
    product: ProductCart
    qunatity: number
}