import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {IconText} from "../../molecules/IconText/IconText.jsx";
import {Link} from "react-router-dom";

export const PanelSiteMap = () => {
    return (
        <>
            <Link
                to='/'
                rel="noopener noreferrer"
                target="_self"
            >
                <IconText
                    text='Home'
                    color={'#B2BEC7'}
                    fontSize='1.4rem'
                    lineHeight='4.2rem'
                    fontWeight='400'
                    rIcon={true}
                    src={
                        <IconArrowRight2
                            size='14'
                            color={'#B2BEC7'}
                        />
                    }
                />
            </Link>
            <IconText
                text='Admin'
                color={'#F2A63B'}
                fontSize='1.4rem'
                lineHeight='4.2rem'
                fontWeight='700'
                rIcon={true}
            />
        </>
    )
}