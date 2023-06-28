import {render, screen} from "@testing-library/react";
import {expect, describe, test, beforeEach} from "vitest";
import {FeatureBlock} from "./FeatureBlock";

describe("FeatureBlock", () => {
    describe("Given a list of features", () => {
        let features;

        beforeEach(() => {
            features = [
                "Desayuno",
                "Transporte",
                "Almuerzo",
                "Cena",
                "Guía Turístico",
            ];
        });

        test("When the component is rendered, Then it should display the title", () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Lo que te incluye este tour")).toBeDefined();
        });

        test('When the component is rendered, Then it should display the breakfast icon for the "Desayuno" feature', () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Desayuno")).toBeDefined();
        });

        test('When the component is rendered, Then it should display the bus icon for the "Transporte" feature', () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Transporte")).toBeDefined();
        });

        test('When the component is rendered, Then it should display the lunch icon for the "Almuerzo" feature', () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Almuerzo")).toBeDefined();
        });

        test('When the component is rendered, Then it should display the dinner icon for the "Cena" feature', () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Cena")).toBeDefined();
        });

        test('When the component is rendered, Then it should display the tour guide icon for the "Guía Turístico" feature', () => {
            render(<FeatureBlock features={features}/>);
            expect(screen.getByText("Guía turístico")).toBeDefined();
        });

        test("When the component is rendered with an unknown feature, Then it should not display anything for that feature", () => {
            features.push("Unknown");
            render(<FeatureBlock features={features}/>);
            expect(screen.queryByText("Unknown")).toBeNull();
        });
    });
});
