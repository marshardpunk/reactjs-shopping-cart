import {addToCart, removeFromCart, isInCart, getCurrency, getItems} from "../../src/ducks/cart.js";

test("Agregar al carrito", ()=>{
    //Arrange
    const productId=123;
    const valorEsperado={ type: 'cart/ADD', payload: { productId: 123 } };

    //Act
    const respuesta=addToCart(productId);

    //Assert
    expect(respuesta).toStrictEqual(valorEsperado);
});

test("Eliminar del carrito", ()=>{
    //Arrange
    const productId=123;
    const valorEsperado={ type: 'cart/REMOVE', payload: { productId: 123 } };

    //Act
    const respuesta=removeFromCart(productId);

    //Assert
    expect(respuesta).toStrictEqual(valorEsperado);
});

test("El producto está en el carrito", ()=>{
    //Arrange
    const initialState = {
        cart:{
            items: [1, 55, 98], // array of product ids
            currency: 'EUR'
        }
    };
    const productId={ id: 55};

    //Act
    const respuesta=isInCart(initialState, productId);

    //Assert
    expect(respuesta).toBe(true);
});

test("El producto no está en el carrito", ()=>{
    //Arrange
    const initialState = {
        cart:{
            items: [], // array of product ids
            currency: 'EUR'
        }
    };
    const productId={ id: 55};

    //Act
    const respuesta=isInCart(initialState, productId);

    //Assert
    expect(respuesta).toBe(false);
});

test("Obtener moneda", ()=>{
    //Arrange
    const initialState = {
        cart:{
            items: [], // array of product ids
            currency: 'EUR'
        }
    };

    //Act
    const respuesta=getCurrency(initialState, null);

    //Assert
    expect(respuesta).toBe("EUR");
});

