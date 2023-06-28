import {render, screen} from "@testing-library/react";
import {expect, describe, test, } from "vitest";
import {ImagesCarousel} from "./ImagesCarousel";

describe("ImagesCarousel", () => {
    describe("Given the component is closed", () => {
        test("When the component is rendered, Then it should not be visible", () => {
            render(<ImagesCarousel isOpen={false}/>);
            expect(screen.queryByRole("dialog")).toBeNull();
        });
    });
});
