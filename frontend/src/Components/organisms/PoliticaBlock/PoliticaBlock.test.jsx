import {render, screen} from "@testing-library/react";
import {expect, describe, test} from "vitest";
import PoliticaBlock from "./PoliticaBlock.jsx";

describe("PoliticaBlock", () => {
    test("When the component is rendered, Then it should display the correct title", () => {
        render(<PoliticaBlock/>);
        expect(screen.getByText("Lo que debes saber")).toBeDefined();
    });

    test('When the component is rendered, Then it should display the correct list items', () => {
        render(<PoliticaBlock/>);

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(12);

        const firstListItemText = listItems[0].textContent;
        expect(firstListItemText).toContain('Sigue las instrucciones del guía turístico en todo momento.');

        const secondListItemText = listItems[1].textContent;
        expect(secondListItemText).toContain(
            "Mantén un comportamiento respetuoso hacia los demás participantes del tour."
        );

        const thirdListItemText = listItems[2].textContent;
        expect(thirdListItemText).toContain(
            "Respeta las normas culturales y costumbres locales del lugar que estás visitando."
        );

        const fourthListItemText = listItems[3].textContent;
        expect(fourthListItemText).toContain(
            "No te desvíes del grupo sin autorización o sin notificar al guía."
        );

        const fifthListItemText = listItems[4].textContent;
        expect(fifthListItemText).toContain(
            "Respeta los horarios establecidos y sé puntual en las reuniones o puntos de encuentro."
        );
    });
});
