import PropTypes from "prop-types";

export const IconSearchNormal1 = (props) => {
    const {color = "white", size = "25", className} = props;

    return (
        <svg
            // width="25"
            // height="25"
            className={className}
            width={size}
            height={size}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 22.2C6.35 22.2 1.75 17.6 1.75 11.95C1.75 6.29995 6.35 1.69995 12 1.69995C17.65 1.69995 22.25 6.29995 22.25 11.95C22.25 17.6 17.65 22.2 12 22.2ZM12 3.19995C7.17 3.19995 3.25 7.12995 3.25 11.95C3.25 16.77 7.17 20.7 12 20.7C16.83 20.7 20.75 16.77 20.75 11.95C20.75 7.12995 16.83 3.19995 12 3.19995ZM22.5 23.201C22.31 23.201 22.12 23.131 21.97 22.981L19.97 20.981C19.8305 20.8398 19.7523 20.6494 19.7523 20.451C19.7523 20.2525 19.8305 20.0621 19.97 19.921C20.26 19.631 20.74 19.631 21.03 19.921L23.03 21.921C23.32 22.211 23.32 22.691 23.03 22.981C22.88 23.131 22.69 23.201 22.5 23.201Z"
                fill={color}
            />
        </svg>

    );
};

IconSearchNormal1.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};
