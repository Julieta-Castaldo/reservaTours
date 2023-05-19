import {PanelSectionWrapper} from "./PanelSection.styled.js";
import {AdminTable} from "../../organisms/AdminTable/AdminTable.jsx";

export const PanelSection = () => {
    return (
        <PanelSectionWrapper>
            <AdminTable/>
        </PanelSectionWrapper>
    )
}