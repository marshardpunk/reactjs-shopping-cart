import React from "react";
import CartItem from "../../../src/components/Cart/CartItem";
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

describe("El item del carrito debe", () => {
    //Arrange
    const renderCartItem= () => {
        const retornoEsperado="Hola mundo";
        const miMock = jest.fn();
        miMock.mockReturnValue(retornoEsperado);
        render(<CartItem onClick={() => {miMock}} name="Elemento prueba" price={100} currency="EUR" />);    
    };

    test("tener un nombre", ()=>{
        //Arrange
        const $=renderCartItem();

        //Act
        const miSpan=screen.getByTestId("miSpan");

        //Assert
        expect(miSpan.textContent).toBe("Elemento prueba");

        cleanup();
    });

    test("tener un precio en la moneda definida", ()=>{
        //Arrange
        const $=renderCartItem();

        //Act
        const divPrecio=screen.getByTestId("divPrecio");

        //Assert
        expect(divPrecio.textContent).toBe("100 EUR");

        cleanup();
    });

    test("tener un botón para remover el item", ()=>{
        //Arrange
        const $=renderCartItem();

        //Act
        const boton=screen.getByTestId("miBoton");

        //Assert
        expect(boton).toBeDefined();

        cleanup();
    });

    test("remover el item al hacer clic en el botón", ()=>{
        //Arrange
        const handleClick = jest.fn();
        render(<CartItem onClick={handleClick} name="qwerty" price={0} currency="USD">Click Me</CartItem>);

        //Act
        fireEvent.click(screen.getByTestId("miBoton"));

        //Assert
        //No es necesario verificar lo que hace la función ya que se prueba en la sección "ducks"
        expect(handleClick).toHaveBeenCalledTimes(1);

        cleanup();
    });

});