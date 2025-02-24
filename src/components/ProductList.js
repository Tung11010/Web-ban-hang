import React from 'react';

const ProductList = () => {
    const products = [
        { id: 1, name: "Pizza", price: "60.000đ", img: "images/sanpham1.png" },
        { id: 2, name: "Burger", price: "65.000đ", img: "images/sanpham2.jpg" },
        { id: 3, name: "Kimchi Fried Rice", price: "250.000đ", img: "images/sanpham3.png" },
        { id: 4, name: "Pizza", price: "60.000đ", img: "images/sanpham1.png" },
        { id: 5, name: "Burger", price: "65.000đ", img: "images/sanpham2.jpg" },
        { id: 6, name: "Kimchi Fried Rice", price: "250.000đ", img: "images/sanpham3.png" },
        { id: 7, name: "Pizza", price: "60.000đ", img: "images/sanpham1.png" },
        { id: 8, name: "Burger", price: "65.000đ", img: "images/sanpham2.jpg" },
        { id: 9, name: "Kimchi Fried Rice", price: "250.000đ", img: "images/sanpham3.png" },
    ];
   
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center">Products On Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 text-center">
                        <img src={product.img} alt={product.name} className="mx-auto h-40" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-red-500 font-bold">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
