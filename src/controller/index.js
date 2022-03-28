import { products } from "../database/products";
//only get requests

const productsByCategory = (category) => {
  var temp = [];
  products.data.map((product) => 
    (product.category_id.toLowerCase() === category.toLowerCase()) ?  temp.push(product):null
  );
  return temp;
};

export { productsByCategory };
