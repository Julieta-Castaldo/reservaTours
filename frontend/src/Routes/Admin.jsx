import { NameSection } from "../Components/sections/NameSection/NameSection.jsx";
import { SiteMapSection } from "../Components/sections/SiteMapSection/SiteMapSection.jsx";
import { PanelSection } from "../Components/sections/PanelSection/PanelSection.jsx";
import { useEffect } from "react";
import { useGlobalState } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const { auth } = useGlobalState();
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!auth || (auth && auth.rol !== 'ADMIN')) navigate('/')
    }, [auth])
    return (
        <main>
            {auth && <>
                <NameSection />
                <SiteMapSection />
                <PanelSection />
            </>}
        </main>
    )
}

export default Admin;