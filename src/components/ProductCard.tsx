import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
}

const ProductCard: React.FC<{
  product: Product;
  onSelect: (id: number) => void;
}> = ({ product, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onSelect(product.id);
  };

  return (
    <div
      className={`border border-gray-300 rounded-lg p-4 ${
        selected ? "bg-gray-100" : ""
      }`}>
      <h3 className="font-semibold">{product.name}</h3>
      <p>{product.description}</p>
      <button
        onClick={handleSelect}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Select
      </button>
    </div>
  );
};

export default ProductCard;
