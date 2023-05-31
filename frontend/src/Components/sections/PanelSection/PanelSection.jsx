import { PanelSectionWrapper } from "./PanelSection.styled.js";
import { AdminTable } from "../../organisms/AdminTable/AdminProductsTable/AdminTable.jsx";
import { useGlobalState } from "../../../Context/Context.jsx";
import { useEffect } from "react";
import Spinner from "../../../assets/Spinner/Spinner.jsx";

export const PanelSection = () => {
    const { products } = useGlobalState()
    const { reloadProductsFlag } = useGlobalState()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <PanelSectionWrapper>
            {reloadProductsFlag ? <Spinner/> :<AdminTable data={products}/>}
            {/* <AdminUsersTable/> */}
        </PanelSectionWrapper>
    )
}