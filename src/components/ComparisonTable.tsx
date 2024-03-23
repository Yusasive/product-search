import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
}

const ComparisonTable: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Comparison Table</h2>
      <table className="border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
