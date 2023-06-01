import { PanelSectionWrapper } from "./PanelSection.styled.js";
import { AdminTable } from "../../organisms/AdminTable/AdminProductsTable/AdminTable.jsx";
import { useGlobalState } from "../../../Context/Context.jsx";
import { useEffect, useState } from "react";
import Spinner from "../../../assets/Spinner/Spinner.jsx";
import { AdminUsersTable } from '../../organisms/AdminTable/AdminUsersTable/AdminUsersTable.jsx'
import { useGetUsers } from "../../../Hooks/Users/useGetUsers.jsx";

export const PanelSection = () => {
    const { products } = useGlobalState()
    const { reloadProductsFlag } = useGlobalState()
    const [users, handleGetUsers] = useGetUsers()
    const [reloadUsers, setReloadUsers] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
       if(reloadUsers){
           handleGetUsers(setReloadUsers)
       }
    }, [reloadUsers])

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <PanelSectionWrapper>
            {reloadProductsFlag ? <Spinner/> :<AdminTable data={products}/>}
            {reloadUsers ? <Spinner/> : <AdminUsersTable data={users} setReloadUsers={setReloadUsers}/>}
        </PanelSectionWrapper>
    )
}