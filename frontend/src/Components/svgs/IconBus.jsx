import PropTypes from "prop-types";

export const IconBus = (props) => {
    const {color = "white", size = "22", className} = props;

    return (
        <svg
            className={className}
            width={size}
            height={size - 2}
            // width="22"
            // height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2341_426)">
                <path
                    d="M21.8983 7.88364C21.7334 8.24335 21.4585 8.3817 21.0737 8.35403C20.7164 8.35403 20.3315 8.35403 19.9742 8.35403C19.5069 8.35403 19.2595 8.105 19.2595 7.63461C19.2595 6.58316 19.2595 5.5317 19.2595 4.50791C19.2595 4.03753 19.5069 3.7885 19.9742 3.7885C20.0567 3.7885 20.1666 3.7885 20.2491 3.7885C20.2216 3.5118 20.0842 3.34578 19.8643 3.31811C19.5344 3.31811 19.1771 3.31811 18.8198 3.31811V3.62248C18.8198 8.105 18.8198 12.5875 18.8198 17.0977C18.8198 17.2637 18.8198 17.4298 18.7648 17.5958C18.6548 18.0938 18.215 18.4259 17.6928 18.4259C17.5828 18.4259 17.4729 18.4259 17.3355 18.4259C17.3355 18.6749 17.3355 18.8963 17.3355 19.1176C17.3355 19.6157 17.0056 19.9754 16.5109 20.0031C16.0436 20.0031 15.5488 20.0031 15.0815 20.0031C14.5868 20.0031 14.2569 19.6157 14.2294 19.1176C14.2294 18.8963 14.2294 18.6749 14.2294 18.4259H8.53966C8.53966 18.6196 8.53966 18.8409 8.53966 19.0346C8.53966 19.6434 8.18233 20.0031 7.57761 20.0031C7.16531 20.0031 6.75301 20.0031 6.3407 20.0031C5.76348 20.0031 5.40615 19.6434 5.40615 19.0623C5.40615 18.8686 5.40615 18.6472 5.40615 18.3982C5.2962 18.3982 5.18625 18.3982 5.0763 18.3982C4.49908 18.3982 4.00432 17.9555 3.97683 17.3744C3.94934 17.0147 3.97683 16.6273 3.97683 16.2676C3.97683 16.0739 4.11426 15.9356 4.27918 15.9356C4.44411 15.9356 4.58154 16.0739 4.58154 16.2676C4.58154 16.572 4.58154 16.8487 4.58154 17.1531C4.58154 17.5958 4.77395 17.7895 5.21374 17.7895C9.33678 17.7895 13.4598 17.7895 17.5554 17.7895C17.9677 17.7895 18.1601 17.5958 18.1601 17.2084C18.1601 15.6035 18.1601 14.0264 18.1601 12.4215C18.1601 12.3938 18.1601 12.3385 18.1601 12.3385C17.7478 12.3385 17.363 12.3662 16.9781 12.3662C13.1849 12.3662 9.36426 12.3662 5.57107 12.3662C5.24123 12.3662 4.91138 12.3385 4.58154 12.3108C4.58154 12.3385 4.58154 12.4215 4.58154 12.5045C4.58154 13.2239 4.58154 13.9157 4.58154 14.6351C4.58154 14.7181 4.58154 14.7734 4.58154 14.8565C4.58154 15.0225 4.44411 15.1055 4.30667 15.1055C4.14175 15.1055 4.0318 15.0225 4.00432 14.8565C4.00432 14.7734 4.00432 14.6904 4.00432 14.5798C4.00432 10.8997 4.00432 7.21957 4.00432 3.53947V3.26277C3.64699 3.26277 3.28966 3.26277 2.95981 3.26277C2.71243 3.26277 2.60248 3.45646 2.575 3.73316C2.68494 3.73316 2.79489 3.73316 2.93233 3.73316C3.34463 3.73316 3.59201 4.00986 3.59201 4.42491C3.59201 5.50403 3.59201 6.58316 3.59201 7.63461C3.59201 8.04966 3.34463 8.29869 2.93233 8.32636C2.49254 8.32636 2.05274 8.32636 1.58547 8.32636C1.25562 8.32636 1.06322 8.13267 0.925781 7.85597V4.23122C1.11819 3.76083 1.50301 3.70549 1.91531 3.76083C1.99777 3.56714 2.02526 3.37345 2.10772 3.2351C2.32761 2.82005 2.68494 2.65403 3.15222 2.65403C3.45458 2.65403 3.72945 2.65403 4.0318 2.65403C4.0318 2.18364 4.0318 1.76859 4.0318 1.32588C4.00432 0.468109 4.44411 0.0253906 5.26871 0.0253906C9.36426 0.0253906 13.4598 0.0253906 17.5554 0.0253906C17.6103 0.0253906 17.6653 0.0253906 17.7478 0.0253906C18.2975 0.0253906 18.7648 0.468109 18.8198 1.02151C18.8472 1.46423 18.8198 1.93461 18.8198 2.37733C18.8198 2.46034 18.8198 2.54335 18.8198 2.62636C19.0946 2.62636 19.342 2.62636 19.6169 2.62636C20.359 2.62636 20.7713 2.9584 20.9088 3.70549C20.9088 3.70549 20.9088 3.70549 20.9363 3.76083C21.3486 3.70549 21.7334 3.76083 21.9258 4.23122V7.85597L21.8983 7.88364ZM9.44672 10.2079C9.44672 10.2079 9.44672 10.2356 9.44672 10.2633C9.80405 10.2633 10.1889 10.2633 10.5462 10.2633C10.6287 10.2633 10.7386 10.2079 10.8211 10.1526C11.5357 9.57151 12.2229 8.96277 12.9376 8.3817C13.3499 8.04966 13.7347 7.71762 14.147 7.38558C14.3119 7.24724 14.5043 7.24724 14.6143 7.38558C14.7242 7.52393 14.6967 7.71762 14.5318 7.85597C14.5318 7.85597 14.4768 7.91131 14.4493 7.91131C13.5972 8.63073 12.7177 9.37782 11.8656 10.0972C11.8106 10.1249 11.7556 10.1802 11.7007 10.2079C12.6627 10.2633 13.5972 10.2633 14.5318 10.2633C14.6143 10.2633 14.6967 10.2633 14.7517 10.2633C14.9166 10.2909 14.9991 10.4016 14.9991 10.5953C14.9991 10.7613 14.8891 10.8443 14.7242 10.872C14.6417 10.872 14.5868 10.872 14.5043 10.872C11.2883 10.872 8.07238 10.872 4.85641 10.872H4.60903C4.49908 11.3977 4.69149 11.7574 5.26871 11.7574C7.71505 11.7574 10.1614 11.7574 12.5802 11.7574C14.2294 11.7574 15.8787 11.7574 17.5554 11.7574C17.8577 11.7574 18.0776 11.6467 18.1326 11.4254C18.1601 11.2594 18.1601 11.0934 18.1876 10.8997C18.0776 10.8997 17.9952 10.8997 17.9402 10.8997C17.363 10.8997 16.8132 10.8997 16.236 10.8997C15.9886 10.8997 15.8512 10.789 15.8512 10.5953C15.8512 10.4016 15.9886 10.2909 16.236 10.2909C16.8132 10.2909 17.3904 10.2909 17.9677 10.2909C18.0501 10.2909 18.1051 10.2909 18.1876 10.2909V4.36957C18.1876 4.36957 17.9952 4.36957 17.9402 4.36957C13.9546 4.36957 9.94149 4.36957 5.95589 4.36957C5.87343 4.36957 5.79096 4.36957 5.73599 4.36957C5.57107 4.36957 5.46112 4.20355 5.46112 4.03753C5.46112 3.87151 5.57107 3.76083 5.76348 3.76083C5.84594 3.76083 5.90091 3.76083 5.98337 3.76083C9.96898 3.76083 13.9546 3.76083 17.9127 3.76083H18.1876V2.79238H4.60903V10.2633C4.60903 10.2633 4.69149 10.2633 4.74646 10.2633C5.9284 10.2633 7.13782 10.2633 8.31976 10.2633C8.40222 10.2633 8.51217 10.2079 8.56714 10.1526C9.66662 9.23947 10.7386 8.32636 11.8381 7.41325C12.058 7.24724 12.2229 7.21957 12.3603 7.38558C12.4978 7.5516 12.4428 7.71762 12.2229 7.88364C11.9205 8.16034 11.5907 8.40937 11.2883 8.68607C10.6836 9.18413 10.0789 9.70986 9.47421 10.2079H9.44672ZM18.1876 2.10063C18.1876 1.82393 18.1876 1.57491 18.1876 1.32588C18.1876 0.772478 18.0226 0.634128 17.5004 0.634128C13.4323 0.634128 9.36426 0.634128 5.2962 0.634128C5.24123 0.634128 5.15877 0.634128 5.10379 0.634128C4.8839 0.634128 4.69149 0.744808 4.664 0.966167C4.60903 1.35355 4.60903 1.71325 4.60903 2.10063H18.215H18.1876ZM2.93233 7.71762V4.39724H1.53049V7.71762H2.93233ZM19.8643 4.39724V7.71762H21.2661V4.39724H19.8643ZM6.06583 18.3705C6.06583 18.6196 6.06583 18.8686 6.06583 19.09C6.06583 19.256 6.17578 19.339 6.31322 19.339C6.78049 19.339 7.22028 19.339 7.68756 19.339C7.77002 19.339 7.90746 19.2283 7.93494 19.1453C7.96243 18.8963 7.93494 18.6472 7.93494 18.3982H6.06583V18.3705ZM14.8616 18.3705C14.8616 18.6196 14.8616 18.8686 14.8616 19.09C14.8616 19.2283 14.9716 19.339 15.109 19.339C15.5763 19.339 16.0161 19.339 16.4834 19.339C16.5658 19.339 16.7033 19.2283 16.7308 19.1453C16.7582 18.8963 16.7308 18.6472 16.7308 18.3982H14.8616V18.3705Z"
                    fill={color}/>
                <path
                    d="M7.5226 15.6045C7.22024 15.6045 6.8904 15.6045 6.58804 15.6045C5.95584 15.6045 5.46108 15.0511 5.43359 14.4147C5.43359 14.2487 5.43359 14.0827 5.43359 13.9167C5.43359 13.6123 5.626 13.391 5.92836 13.3633C6.58804 13.3633 7.24773 13.3633 7.90742 13.3633C8.5671 13.391 9.03438 13.9167 9.03438 14.5808C9.03438 14.7191 9.03438 14.8575 9.03438 15.0235C9.03438 15.3832 8.84197 15.5769 8.45715 15.6045C8.1548 15.6045 7.82496 15.6045 7.5226 15.6045ZM8.42967 14.9681C8.42967 14.9681 8.42967 14.8021 8.42967 14.7191C8.42967 14.221 8.20977 13.9997 7.71501 13.9997C7.33019 13.9997 6.91789 13.9997 6.53307 13.9997H6.06579C6.06579 14.1657 6.06579 14.3041 6.06579 14.4424C6.06579 14.7191 6.28569 14.9681 6.56056 14.9681C7.19276 14.9681 7.79747 14.9681 8.45715 14.9681H8.42967Z"
                    fill={color}/>
                <path
                    d="M15.3018 15.6045C14.972 15.6045 14.6696 15.6045 14.3398 15.6045C13.9824 15.6045 13.79 15.4109 13.79 15.0511C13.79 14.8298 13.79 14.6084 13.79 14.3871C13.8725 13.806 14.3673 13.391 14.972 13.3633C15.6042 13.3633 16.2364 13.3633 16.8686 13.3633C17.1984 13.3633 17.4183 13.5846 17.4183 13.9167C17.4183 14.1657 17.4183 14.4147 17.3908 14.6638C17.2809 15.2172 16.8136 15.5769 16.2639 15.6045C15.9615 15.6045 15.6317 15.6045 15.3293 15.6045H15.3018ZM16.7861 14.0274H16.7311C16.2089 14.0274 15.6866 14.0274 15.1644 14.0274C14.5872 14.0274 14.2848 14.3594 14.4222 15.0235C15.0269 15.0235 15.6317 15.0235 16.2089 15.0235C16.5112 15.0235 16.7311 14.7744 16.7586 14.4701C16.7586 14.3317 16.7586 14.221 16.7586 14.0827L16.7861 14.0274Z"
                    fill={color}/>
                <path
                    d="M11.3988 15.6875C11.8386 15.6875 12.2784 15.6875 12.7182 15.6875C13.0205 15.6875 13.158 15.8259 13.158 16.1302C13.158 16.3792 13.158 16.6006 13.158 16.8496C13.158 17.1263 12.9931 17.2924 12.7182 17.2924C11.8386 17.2924 10.959 17.2924 10.0794 17.2924C9.80457 17.2924 9.63965 17.1263 9.63965 16.8496C9.63965 16.6006 9.63965 16.3792 9.63965 16.1302C9.63965 15.8259 9.77708 15.6875 10.0794 15.6875C10.5192 15.6875 10.959 15.6875 11.3988 15.6875ZM10.2718 16.6559H12.5258V16.3239H10.2718V16.6559Z"
                    fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_2341_426">
                    <rect width="21" height="19.95" fill="white" transform="translate(0.898438 0.0253906)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

IconBus.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};