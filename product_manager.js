// Se crea la clase ProductManager.
class ProductManager {
      // Se crea un constructor de productos con un array vacío.
      constructor() {
            this.products = [];
      };

      // Se crea un método para retornar todos los productos.
      getProducts() {
            return this.products;
      };

      // Se crea un método para agregar un producto utilizando el método addProduct.
      addProduct = (
            title,
            description,
            price,
            thumbnail,
            code,
            stock
      ) => {

            // Se crea un objeto con los datos del producto.
            const product = {
                  title,
                  description,
                  price,
                  thumbnail,
                  code,
                  stock,
            };

            // Se verifica que ningún campo esté vacío.
            if (
                  title && description && price && thumbnail && code && stock
            ) {
                  console.log("El producto ingresado no tiene campos vacíos.");

                  // Si no hay campos vacíos, se verifica que el campo code no esté repetido.
                  if (
                        !this.products.some((product) => product.code === code)
                  ) {

                        console.log("El codigo ingresado no pertenece a otro producto.");

                        // Si el campo code no está repetido, se verifica si hay productos en el array.
                        if (this.products.length === 0) {

                              console.log("El array de productos está vacío y se le asigna el id 1 al producto.");

                              // Si no hay productos en el array, se le asigna el id 1 al producto.
                              product.id = 1;

                        } else {

                              console.log("El array de productos no está vacío y se le asigna el id del último producto + 1 al producto.");

                              // Si hay productos en el array, se le asigna al nuevo producto, el id del último producto + 1.
                              product.id = this.products[this.products.length - 1].id + 1;

                        }

                        // Se agrega el producto al array.
                        this.products.push(product);

                  } else {

                        // Si el campo code está repetido, mostramos un mensaje de error y retornamos.
                        console.log("El codigo ingresado ya pertenece a otro producto.");
                        return;

                  }

            } else {

                  // Si hay campos vacíos, mostramos un mensaje de error y retornamos.
                  console.log("El producto ingresado no puede tener campos vacíos.");
                  return;

            }

      };

      // Se crea un método para retornar un producto por su id.

      getProductById = (id) => {

            // Se busca el producto en el array.
            const product = this.products.find(products => products.id === id);

            // Se verifica que el producto exista.
            if (product) {

                  // Si el producto existe, lo retornamos.
                  return product;

            } else {

                  // Si el producto no existe, mostramos un mensaje de error y retornamos.
                  console.log("No existe el producto con el id ingresado.");
                  return;

            };

      };

};

// Se exporta la clase ProductManager.
module.exports = ProductManager;