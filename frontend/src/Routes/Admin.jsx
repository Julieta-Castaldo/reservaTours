import { NameSection } from "../Components/sections/NameSection/NameSection.jsx";
import { SiteMapSection } from "../Components/sections/SiteMapSection/SiteMapSection.jsx";
import { PanelSection } from "../Components/sections/PanelSection/PanelSection.jsx";
import { useEffect, useState } from "react";
import { useGlobalState } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import {PanelSiteMap} from "../Components/sections/SiteMapSection/PanelSiteMap.jsx";

const Admin = () => {
    const { auth } = useGlobalState();
    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState('products')
    useEffect(() => {
        if (!auth || (auth && auth.rol !== 'ADMIN')) navigate('/')
    }, [auth])

    const children = [
        <ToggleButton selected={selectedTab === 'products'} onClick={()=> setSelectedTab('products')} value="products" key="products">
            Tours
        </ToggleButton>,
        <ToggleButton selected={selectedTab === 'users'} onClick={()=> setSelectedTab('users')} value="users" key="users">
            Usuarios
        </ToggleButton>,
        <ToggleButton selected={selectedTab === 'categories'} onClick={()=> setSelectedTab('categories')} value="categories" key="categories">
            Categorías
        </ToggleButton>
    ];

    const control = {
        value: 'left',
        exclusive: true,
    };

    return (
        <main>
            {auth && <>
                <NameSection>
                </NameSection>
                <SiteMapSection>
                    <PanelSiteMap />
                </SiteMapSection>
                <Stack spacing={2} alignItems="center">
                    <ToggleButtonGroup {...control} aria-label="Medium sizes">
                        {children}
                    </ToggleButtonGroup>
                </Stack>
                <PanelSection selectedTab={selectedTab} />
            </>}
        </main>
    )
}

export default Admin;