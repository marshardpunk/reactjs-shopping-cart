import {getProduct, getProducts} from "../../src/ducks/products.js";

test("Obtener un producto", ()=>{
    //Arrange
    const pos1=
        {
          id: 1,
          name: 'Ohrensessel Josslyn',
          price: 499.99,
          currency: 'EUR',
          image: 'images/01.jpg',
        };
    const initialState = {
        products: [ pos1 ]
    };
    const id=1;

    //Act
    const respuesta=getProduct(initialState, { id });

    //Assert
    expect(respuesta).toStrictEqual(pos1);
});

test("Obtener lista de productos", ()=>{
    //Arrange
    const data = require("../../src/data/products");
    const initialState = {
        products: data
    };

    //Act
    const respuesta=getProducts(initialState, null);

    //Assert
    expect(respuesta).toBe(data);
});