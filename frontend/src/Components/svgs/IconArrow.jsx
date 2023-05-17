import PropTypes from "prop-types";
export const IconArrowRight2 = (props) => {
    const {color = "white", size = "40", className} = props;

    return (
        <svg
            className={className}
            width={size}
            // height={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.8502 34.4495C14.5335 34.4495 14.2168 34.3329 13.9668 34.0829C13.7344 33.8476 13.604 33.5303 13.604 33.1995C13.604 32.8688 13.7344 32.5514 13.9668 32.3162L24.8335 21.4495C25.6335 20.6495 25.6335 19.3495 24.8335 18.5495L13.9668 7.68288C13.7344 7.44765 13.604 7.13026 13.604 6.79954C13.604 6.46883 13.7344 6.15144 13.9668 5.91621C14.4502 5.43288 15.2502 5.43288 15.7335 5.91621L26.6002 16.7829C27.4502 17.6329 27.9335 18.7829 27.9335 19.9995C27.9335 21.2162 27.4668 22.3662 26.6002 23.2162L15.7335 34.0829C15.4835 34.3162 15.1668 34.4495 14.8502 34.4495Z"
                fill={color}
            />
        </svg>
    );
};

IconArrowRight2.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};
