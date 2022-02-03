type ProductType = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    amount: number;
    totalPrice: number;
}

type ShoppingType = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    amount: number;
    totalPrice: number;
}

interface ItemProps {
    item: ProductType;
}

interface ShoppingItemProps {
    item: ShoppingType;
}

