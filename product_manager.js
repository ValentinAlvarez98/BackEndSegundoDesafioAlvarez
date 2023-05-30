// Se importa el módulo fs para poder leer y escribir archivos.
const fs = require('fs');

// Se crea la clase ProductManager.
class ProductManager {

      // Se crea un constructor para inicializar el array de productos y el path del archivo JSON.
      constructor() {

            this.products = [];
            this.path = './data/Products.json';

      }

      // Se crea un método para retornar los productos.
      getProducts = async () => {

            // Si el archivo existe, se lee, se parsea y el resultado se retorna.
            if (fs.existsSync(this.path)) {

                  const productData = await fs.promises.readFile(this.path, 'utf-8');
                  const products = JSON.parse(productData);
                  return products;

                  // Si el archivo no existe, se retorna un array vacío.
            } else {

                  return [];

            }

      };

      // Se crea un método para agregar un producto.
      addProduct = async (title, description, price, thumbnail, code, stock) => {

            // Se crea un objeto con los datos del producto.
            const newProduct = {
                  title,
                  description,
                  price,
                  thumbnail,
                  code,
                  stock,
                  id: this.products.length + 1,
            };

            // Se verifica que el producto no tenga campos vacíos.
            if (
                  newProduct.title == null ||
                  newProduct.description == null ||
                  newProduct.price == null ||
                  newProduct.thumbnail == null ||
                  newProduct.code == null ||
                  newProduct.stock == null
            ) {

                  console.log('El producto ingresado no puede tener campos vacíos.');
                  return;

            }

            // Se verifica que el código del producto no exista.
            if (this.products.some((product) => product.code === code)) {

                  console.log('El código ingresado ya pertenece a otro producto.');
                  return;

            }

            // Se pushea el producto al array.
            this.products.push(newProduct);

            // Se escribe el array en el archivo JSON.
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'), 'utf-8');

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