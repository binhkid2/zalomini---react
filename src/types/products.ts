export interface  ProductType {
    _id: string;
    name: string;
    description:string;
    price:number,
    quantity?:number,
    wholesalePrice?:number,
    moq?:number,
    shop:string,
    images?:JSON,
    category:string,
    shopName:string,
    address:string,
    variants?:JSON,
    notice?:string,
    enName?:string,
    enDescription?:string,
    enNotice?:string,
    review?:JSON,
    likes?:number,
    views?:number,
    hidden?:boolean,
    tags?:JSON,
    createdAt:string
  }
  export const initialProductState: ProductType = {
    _id: "",
    name: "ProductName",
    description: "",
    price: 1,
    shop: "",
    category: "",
    address: "",
    shopName:'',
    createdAt:''
  };

  //ProductCard1
  
interface Image {
  id: number;
  src: string;
  alt: string;
}

export interface ProductCard1Props {
  address: string;
  name: string;
  price: number;
  shopName: string;
  createdAt: string;
  _id: string;
  images: Image[];
  description:string
}
export const initProduct1: ProductCard1Props = {
  address: '',
  name: '',
  price: 10000,
  shopName: '',
  createdAt: '',
  _id: '',
  images: [],
  description:''
}
export interface ManageCardProps {
  address: string;
  name: string;
  price: number;
  createdAt: string;
  _id: string;
  images: Image[];
  description:string
}
//Product card small 
export interface ProductCardSmallProps{
  address: string;
  name: string;
  price: number;
  shopName: string;
  _id: string;
  images: Image[];
}