import {PanelSectionWrapper} from "./PanelSection.styled.js";
import {AdminTable} from "../../organisms/AdminTable/AdminTable.jsx";
import {useEffect, useState} from "react";

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
                api={products}
            />
        </PanelSectionWrapper>
    )
}