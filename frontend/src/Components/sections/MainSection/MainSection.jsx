import {MainSectionSearch, MainSectionSearchBar, MainSectionWrapper} from "./MainSection.styled.js";
import {IconSearchNormal1} from "../../svgs/IconSearchNormal1.jsx";

export const MainSection = () => {
    return (
        <MainSectionWrapper
            bgImg={'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80'}
        >
            <MainSectionSearchBar>
                <MainSectionSearch>
                    <IconSearchNormal1 size='24'/>
                </MainSectionSearch>
            </MainSectionSearchBar>
            {/*<IconBg*/}
            {/*    src={<IconUser color={'red'} className='iconSVG'/>}*/}
            {/*    bgColor={'#fff'}*/}
            {/*    hoverColor={'yellow'}*/}
            {/*    hoverBgColor={'green'}*/}
            {/*/>*/}
        </MainSectionWrapper>
    )
}