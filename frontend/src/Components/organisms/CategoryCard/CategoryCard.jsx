import {CategoryCardTitle, CategoryCardWrapper} from "./Category.styled.js";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const CategoryCard = (props) => {

    const {id, icon, title} = props;

    return (
        <Link
            to={`/category/:${id}`}
            rel="noopener noreferrer"
            target="_self"
        >
            <CategoryCardWrapper>
                {icon ? icon : null}
                <CategoryCardTitle>
                    {title}
                </CategoryCardTitle>
            </CategoryCardWrapper>
        </Link>
    )
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    url: PropTypes.element,
};