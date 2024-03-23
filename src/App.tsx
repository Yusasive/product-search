import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import ComparisonTable from "./components/ComparisonTable";
import productsData from "./data/products.json";

interface Product {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleSearch = (query: string) => {
    const results = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectProduct = (productId: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">
        Product Search & Comparison
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {searchResults.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
      </div>
      {selectedProducts.length > 1 && (
        <ComparisonTable
          products={selectedProducts.map(
            (id) => productsData.find((product) => product.id === id)!
          )}
        />
      )}
    </div>
  );
};

export default App;
