import React from "react";
import Cart from "../../../src/components/Cart/Cart";
import { cleanup, render, screen } from '@testing-library/react';

describe("El carrito de compras debe ", ()=>{
        //Arrange
        const renderCart= (poblarDatos=true) => {
            const retornoEsperado="Hola mundo";
            const miMock = jest.fn();
            miMock.mockReturnValue(retornoEsperado);
            const pos1=
                {
                id: 1,
                name: 'Ohrensessel Josslyn',
                price: 499.99,
                currency: 'EUR',
                image: 'images/01.jpg',
                };
                const pos2=
                {
                    id: 2,
                    name: 'Sessel Sofie',
                    price: 249.99,
                    currency: 'EUR',
                    image: 'images/02.jpg',
                };
            const data=(poblarDatos?[pos1, pos2]:[]);
            const totalLista=(poblarDatos?749.98:0);
            render(<Cart removeFromCart={( id ) => {miMock}} items={data} total={totalLista} currency="EUR" />);    
        };

        test("mostar la lista de productos", ()=> {
            //Arrange
           renderCart();

            //Act
            const miLista=screen.getByTestId("miLista");

            //Assert
            expect(miLista.children.length).toBe(2);

            cleanup();
        });

        test("mostar el total de los productos", ()=> {
            //Arrange
            renderCart();

            //Act
            const miTotal=screen.getByTestId("miTotal");

            //Assert
            expect(miTotal.textContent).toBe("Total: 749.98 EUR");

            cleanup();
        });

        test("considerar carrito vacío", ()=> {
            //Arrange
           renderCart(false);

            //Act
            const miValidacion=screen.getByTestId("miValidacion");
            const miTotal=screen.getByTestId("miTotal");

            //Assert
            expect(miValidacion.textContent).toBe("Cart is empty");
            expect(miTotal.textContent).toBe("Total: 0 EUR");

            cleanup();
        });
});