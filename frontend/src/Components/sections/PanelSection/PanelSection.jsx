import {PanelSectionWrapper} from "./PanelSection.styled.js";
import {AdminTable} from "../../organisms/AdminTable/AdminProductsTable/AdminTable.jsx";
import { useGlobalState } from "../../../Context/Context.jsx";

export const PanelSection = () => {
    const {products} = useGlobalState()

    return (
        <PanelSectionWrapper>
            <AdminTable
                data={products}
            />
            {/* <AdminUsersTable/> */}
        </PanelSectionWrapper>
    )
}