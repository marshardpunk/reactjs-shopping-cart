import React from "react";
import Product from "../../../src/components/Product/Product";
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

describe("El producto debe ", ()=>{
    //Arrange
    const renderProduct= (_isInCart=true) => {
        render(
            <Product 
                id={1} 
                name="Ohrensessel Josslyn" 
                price={499.99} 
                currency="EUR"
                image="images/01.jpg"
                isInCart={_isInCart} 
                addToCart={(id) => {}} 
                removeFromCart={(id) => {}} 
            />
        );    
    };

    test("tener un nombre",()=>{
        //Arrange
        renderProduct();

        //Act
        const miTitulo=screen.getByTestId("miTitulo");

        //Assert
        expect(miTitulo.textContent).toBe("Ohrensessel Josslyn");

        cleanup();
    });

    test("tener un precio",()=>{
        //Arrange
        renderProduct();

        //Act
        const miPrecioProducto=screen.getByTestId("miPrecioProducto");

        //Assert
        expect(miPrecioProducto.textContent).toBe("499.99 EUR");

        cleanup();
    });

    test("tener una imagen",()=>{
        //Arrange
        renderProduct();

        //Act
        const miImagen=screen.getByTestId("miImagen");

        //Assert
        expect(miImagen.src).toContain("images/01.jpg");

        cleanup();
    });

    test("poder agregarse al carrito",()=>{
        //Arrange
        const handleClickAdd = jest.fn();
        const handleClickRemove = jest.fn();
        render(
            <Product 
                id={1} 
                name="Ohrensessel Josslyn" 
                price={499.99} 
                currency="EUR"
                image="images/01.jpg"
                isInCart={false} 
                addToCart={handleClickAdd} 
                removeFromCart={handleClickRemove} 
            />
        );    

        //Act
        const miAccion=screen.getByTestId("miAccion");
        fireEvent.click(miAccion);

        //Assert
        expect(handleClickAdd).toHaveBeenCalledTimes(1);

        cleanup();
    });

    test("poder eliminarse del carrito",()=>{
        //Arrange
        const handleClickAdd = jest.fn();
        const handleClickRemove = jest.fn();
        render(
            <Product 
                id={1} 
                name="Ohrensessel Josslyn" 
                price={499.99} 
                currency="EUR"
                image="images/01.jpg"
                isInCart={true} 
                addToCart={handleClickAdd} 
                removeFromCart={handleClickRemove} 
            />
        );    

        //Act
        const miAccion=screen.getByTestId("miAccion");
        fireEvent.click(miAccion);

        //Assert
        expect(handleClickRemove).toHaveBeenCalledTimes(1);

        cleanup();
    });
});