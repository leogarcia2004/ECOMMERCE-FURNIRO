export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    short: string,
    normalPrice: number,
    salePrice: number,
    images: string,
    new: boolean
    sku: string
}

export interface productsProps {
    productsFilter: IProduct[]
    products: IProduct[]
}