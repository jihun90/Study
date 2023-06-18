interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProdeucts(): Promise<Product[]> {
    return
    //..
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem13 = Pick<Product, 'id' | 'name' | 'price'>;
const Cup: Omit<Product, 'stock'> = { id: 123, name: "starbucks cup", price: 10000, brand: "stracbucks" }
function displayProductDetail(shoppingItem: ShoppingItem13) {
    //..
}

type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) { //필요 정보만 사용

}

// 4. 유틸리티 타입 루현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// Partial 구현 과정
//#1
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}
//#2
type UserProfileUpdate2 = {
    [P in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[P];
}

//#3
// type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate3 = {
    [P in keyof UserProfile]?: UserProfile[P];
}

//#4 
type PartialImplement<T> = {
    [P in keyof T]?: T[P];
}