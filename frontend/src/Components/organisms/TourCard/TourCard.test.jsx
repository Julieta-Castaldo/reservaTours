import {render, screen} from "@testing-library/react";
import {expect, describe, test} from "vitest";
import {BrowserRouter} from "react-router-dom";
import {TourCard} from "./TourCard";
// Custom assertion to check the attribute value
expect.extend({
    toHaveAttribute(element, attributeName, attributeValue) {
        const receivedValue = element.getAttribute(attributeName);
        const pass = receivedValue === attributeValue;
        if (pass) {
            return {
                pass: true,
                message: () =>
                    `Expected element to not have attribute ${attributeName} with value ${attributeValue}, but it does.`,
            };
        } else {
            return {
                pass: false,
                message: () =>
                    `Expected element to have attribute ${attributeName} with value ${attributeValue}, but received ${receivedValue}.`,
            };
        }
    },
});

describe("TourCard", () => {
    const product = {
        listaImagenes: [{url: "https://example.com/image.jpg"}],
        nombre: "Tour Name",
        duracion: 5,
        ciudad: "City Name",
        id: 1,
    };

    test("renders tour name", () => {
        render(
            <BrowserRouter>
                <TourCard product={product}/>
            </BrowserRouter>
        );
        expect(screen.getByText("Tour Name")).toBeDefined();
    });

    test("renders tour duration", () => {
        render(
            <BrowserRouter>
                <TourCard product={product}/>
            </BrowserRouter>
        );
        expect(screen.getByText("5 días")).toBeDefined();
    });

    test("renders link to tour details", () => {
        render(
            <BrowserRouter>
                <TourCard product={product}/>
            </BrowserRouter>
        );

        const linkElement = screen.getByRole("link");
        const href = linkElement.getAttribute("href");

        expect(href).toBe("/tour/:1");
    });
});
