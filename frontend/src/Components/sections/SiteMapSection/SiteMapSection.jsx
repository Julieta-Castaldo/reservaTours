import {SiteMapSectionWrapper} from "./SiteMapSection.styled.js";
import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {Link} from "react-router-dom";

export const SiteMapSection = () => {
    return (
        <SiteMapSectionWrapper>
            <Link
                to='/home'
                rel="noopener noreferrer"
                target="_self"
            >
                <IconText
                    text='Home'
                    color={'#DDE3EB'}
                    fontSize='1.4rem'
                    lineHeight='4.2rem'
                    fontWeight='400'
                    rIcon={true}
                    src={
                        <IconArrowRight2
                            size='14'
                            color={'#DDE3EB'}
                        />
                    }
                />
            </Link>
            <IconText
                text='Home'
                color={'#F2A63B'}
                fontSize='1.4rem'
                lineHeight='4.2rem'
                fontWeight='700'
                rIcon={true}
            />
        </SiteMapSectionWrapper>
    )
}