import {NameSectionContainer, NameSectionWrapper} from "./NameSectionWrapper.styled.js";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {IconAdmin} from "../../svgs/IconAdmin.jsx";

export const NameSection = () => {
    return (
        <NameSectionWrapper>
            <NameSectionContainer>
                <IconAdmin
                    size='18'
                />
                <IconText
                    text='Admin'
                    color={'white'}
                    fontSize='1.8rem'
                    fontHeight='2.4rem'
                    fontWeight='600'
                    rIcon={true}
                    src={
                        <IconArrowRight2
                            size='18'
                        />
                    }

                />
            </NameSectionContainer>
        </NameSectionWrapper>
    )
}