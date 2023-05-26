import {PanelSectionWrapper} from "./PanelSection.styled.js";
import {AdminTable} from "../../organisms/AdminTable/AdminProductsTable/AdminTable.jsx";
import {useEffect, useState} from "react";
import { AdminUsersTable } from "../../organisms/AdminTable/AdminUsersTable/AdminUsersTable.jsx";

export const PanelSection = () => {

    const [products, setProducts] = useState([])
    const url = `http://localhost:8080/Tour/todos`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [url])

    return (
        <PanelSectionWrapper>
            <AdminTable
                data={products}
            />
            {/* <AdminUsersTable/> */}
        </PanelSectionWrapper>
    )
}