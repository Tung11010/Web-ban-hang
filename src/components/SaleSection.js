import React from "react";

const SaleSection = () => {
  return (
    <div
      className="relative min-h-[400px] bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`, // Replace with your image URL or path
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-6">
        {/* Menu Section */}
        <div className="md:w-1/6"> {/* Reduced from md:w-1/4 to md:w-1/6 */}
          <div className="bg-white/90 shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white text-center py-1 font-bold text-sm"> {/* Reduced padding and font size */}
              MENU
            </div>
            <div className="flex flex-col p-2"> {/* Reduced padding from p-4 to p-2 */}
              <a href="#" className="py-1 text-gray-700 hover:text-red-500 text-sm"> {/* Reduced padding and font size */}
                Pizza
              </a>
              <a href="#" className="py-1 text-gray-700 hover:text-red-500 text-sm">
                Burger
              </a>
              <a href="#" className="py-1 text-gray-700 hover:text-red-500 text-sm">
                Drinks
              </a>
            </div>
          </div>
        </div>

        {/* Sale Section */}
        <div className="md:w-5/6"> {/* Increased from md:w-3/4 to md:w-5/6 */}
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-white">ON SALE</p>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              discount="-6%"
              imgSrc="image2.png"
              name="Chicken thighs fried in butter"
              description="Clean, safe food, highly rated among leading brands in..."
              price="60.000đ"
              oldPrice="64.000đ"
            />
            <ProductCard
              imgSrc="image5.png"
              name="Spicy cheese grilled chicken rice"
              description="Are you wondering what to do with the bowl of rice left over from the previous meal? If you throw it away..."
              price="65.000đ"
            />
            <ProductCard
              discount="-11%"
              imgSrc="image8.png"
              name="Kimchi fried rice"
              description="Are you wondering what to do with the bowl of rice left over from the previous meal? If you throw it away..."
              price="250.000đ"
              oldPrice="280.000đ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ discount, imgSrc, name, description, price, oldPrice }) => {
  return (
    <div className="relative bg-white/90 shadow-md rounded-lg p-4 text-center">
      {/* Discount Badge */}
      {discount && (
        <p className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          {discount}
        </p>
      )}
      {/* Product Image */}
      <img src={imgSrc} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      {/* Product Name */}
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      {/* Description */}
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      {/* Price */}
      <h3 className="text-red-500 font-semibold">
        {price}{" "}
        {oldPrice && <del className="text-gray-400 ml-2">{oldPrice}</del>}
      </h3>
    </div>
  );
};

export default SaleSection;