const ProductManager = require('./product_manager.js');

describe('ProductManager', () => {
      let productManager;

      beforeEach(() => {
            productManager = new ProductManager();
      });

      test('getProducts deberia retornar un array vacio', () => {
            expect(productManager.getProducts()).toEqual([]);
      });

      test('addProduct no deberia permitir campos vacios', () => {

            const product = {
                  title: null,
                  description: 'Descripcion 1',
                  price: 100,
                  thumbnail: 'Imagen 1',
                  code: 'Codigo 1',
                  stock: 10
            };

            productManager.addProduct(
                  product.title,
                  product.description,
                  product.price,
                  product.thumbnail,
                  product.code,
                  product.stock
            );

            expect(productManager.getProducts()).toEqual([]);

      });

      test('addProduct deberia agregar un producto', () => {

            const product = {
                  title: 'Titulo 1',
                  description: 'Descripcion 1',
                  price: 100,
                  thumbnail: 'Imagen 1',
                  code: 'Codigo 1',
                  stock: 10
            };

            productManager.addProduct(
                  product.title,
                  product.description,
                  product.price,
                  product.thumbnail,
                  product.code,
                  product.stock
            );

            const products = productManager.getProducts();

            expect(products[0]).toEqual({
                  ...product,
                  id: 1
            });
      });

      test('addProduct no deberia permitir un code repetido', () => {

            const product1 = {
                  title: 'Titulo 1',
                  description: 'Descripcion 1',
                  price: 100,
                  thumbnail: 'Imagen 1',
                  code: 'Codigo 1',
                  stock: 10
            };

            const product2 = {
                  title: 'Titulo 2',
                  description: 'Descripcion 2',
                  price: 200,
                  thumbnail: 'Imagen 2',
                  code: 'Codigo 1',
                  stock: 20
            };

            productManager.addProduct(
                  product1.title,
                  product1.description,
                  product1.price,
                  product1.thumbnail,
                  product1.code,
                  product1.stock
            );

            productManager.addProduct(
                  product2.title,
                  product2.description,
                  product2.price,
                  product2.thumbnail,
                  product2.code,
                  product2.stock
            );

            const products = productManager.getProducts();

            expect(products[0]).toEqual({
                  ...product1,
                  id: 1
            });

      });

      test('addProduct deberia asignar un id incremental a cada producto', () => {

            const product1 = {
                  title: 'Titulo 1',
                  description: 'Descripcion 1',
                  price: 100,
                  thumbnail: 'Imagen 1',
                  code: 'Codigo 1',
                  stock: 10
            };

            const product2 = {
                  title: 'Titulo 2',
                  description: 'Descripcion 2',
                  price: 200,
                  thumbnail: 'Imagen 2',
                  code: 'Codigo 2',
                  stock: 20
            };

            productManager.addProduct(
                  product1.title,
                  product1.description,
                  product1.price,
                  product1.thumbnail,
                  product1.code,
                  product1.stock
            );

            productManager.addProduct(
                  product2.title,
                  product2.description,
                  product2.price,
                  product2.thumbnail,
                  product2.code,
                  product2.stock
            );

            const products = productManager.getProducts();

            expect(products[0]).toEqual({
                  ...product1,
                  id: 1
            });
            expect(products[1]).toEqual({
                  ...product2,
                  id: 2
            });

      });

      test('getProductById deberia retornar un producto por su id', () => {

            const product1 = {
                  title: 'Titulo 1',
                  description: 'Descripcion 1',
                  price: 100,
                  thumbnail: 'Imagen 1',
                  code: 'Codigo 1',
                  stock: 10
            };

            const product2 = {
                  title: 'Titulo 2',
                  description: 'Descripcion 2',
                  price: 200,
                  thumbnail: 'Imagen 2',
                  code: 'Codigo 2',
                  stock: 20
            };

            productManager.addProduct(
                  product1.title,
                  product1.description,
                  product1.price,
                  product1.thumbnail,
                  product1.code,
                  product1.stock
            );

            productManager.addProduct(
                  product2.title,
                  product2.description,
                  product2.price,
                  product2.thumbnail,
                  product2.code,
                  product2.stock
            );

            const productById1 = productManager.getProductById(1);
            const productById2 = productManager.getProductById(3);

            expect(productById1).toEqual({
                  ...product1,
                  id: 1
            });

            expect(productById2).toBeUndefined();

      });

});