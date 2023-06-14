import { PanelSectionWrapper } from "./PanelSection.styled.js";
import { AdminTable } from "../../organisms/AdminTable/AdminProductsTable/AdminTable.jsx";
import { useGlobalState } from "../../../Context/Context.jsx";
import { useEffect, useState } from "react";
import Spinner from "../../../assets/Spinner/Spinner.jsx";
import { AdminUsersTable } from '../../organisms/AdminTable/AdminUsersTable/AdminUsersTable.jsx'
import { AdminCategoriesTable } from '../../organisms/AdminTable/AdminCategoriesTable/AdminCategoriesTable'
import { AdminCitiesTable } from "../../organisms/AdminTable/AdminCitiesTable/AdminCitiesTable.jsx";
//Hooks
import { useGetUsers } from "../../../Hooks/Users/useGetUsers.jsx";
import { useGetCategories } from "../../../Hooks/Categories/useGetCategories";
import { useGetCities } from "../../../Hooks/Cities/useGetCities.jsx";

export const PanelSection = ({ selectedTab = 'products' }) => {
    const { products } = useGlobalState()
    const { reloadProductsFlag } = useGlobalState()
    const [users, handleGetUsers] = useGetUsers()
    const [reloadUsers, setReloadUsers] = useState(false)
    const [reloadCategories, setReloadCategories] = useState(false)
    const [reloadCities, setReloadCities] = useState(false)
    const [categories, handleGetCategories] = useGetCategories()
    const [cities, handleGetCities] = useGetCities()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (reloadUsers) {
            handleGetUsers(setReloadUsers)
        }
    }, [reloadUsers])

    useEffect(() =>{
        if(reloadCities) handleGetCities(setReloadCities)
    }, [reloadCities])

    useEffect(() => {
        if(reloadCategories){
            handleGetCategories(setReloadCategories)
        }
    }, [reloadCategories])

    useEffect(() => {
        handleGetUsers()
        handleGetCategories()
        handleGetCities(setReloadCities)
    }, [])

    return (
        <PanelSectionWrapper>
            {selectedTab === 'products' &&
                <>
                    {reloadProductsFlag ? <Spinner /> : <AdminTable data={products} />}
                </>
            }
            {selectedTab === 'users' &&
                <>
                    {reloadUsers ? <Spinner /> : <AdminUsersTable data={users} setReloadUsers={setReloadUsers} />}
                </>
            }
            {selectedTab === 'categories' &&
                <>
                    {reloadCategories ? <Spinner /> : <AdminCategoriesTable data={categories} setReloadCategories={setReloadCategories} />}
                </>
            }
            {selectedTab === 'cities' &&
                <>
                    {reloadCities ? <Spinner /> : <AdminCitiesTable data={cities} setReloadCities={setReloadCities} />}
                </>
            }
        </PanelSectionWrapper>
    )
}