import Item from "../Item/Item"

const ItemList = ({ products, selectedCategory }) => {
    const filteredProducts =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.categoryId === selectedCategory);
  
    return (
      <>
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </>
    );
  };


export default ItemList