import PropTypes from "prop-types";

export const IconWay = (props) => {
    const {color = "white", size = "22", className} = props;

    return (
        <svg
            className={className}
            width={size}
            height={size}
            // width="22"
            // height="22"
            viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2341_434)">
                <path
                    d="M5.16502 21.5006C4.75218 21.4455 4.31181 21.418 3.89897 21.3353C3.43108 21.225 2.96319 21.0597 2.52282 20.8943C2.33016 20.8117 2.1375 20.6739 1.99988 20.5085C1.58704 20.0951 1.55952 19.5439 1.99988 19.1581C2.22007 18.9652 2.46777 18.7723 2.743 18.662C3.15585 18.4967 3.59621 18.3865 4.03658 18.2211C4.03658 17.8904 3.92649 17.5597 3.76135 17.2565C3.62374 16.9809 3.4586 16.7329 3.26594 16.5124C3.1008 16.292 3.07328 16.1266 3.23842 15.9888C3.37603 15.851 3.56869 15.9061 3.76135 16.0991C4.39438 16.8156 4.69713 17.6699 4.69713 18.6069C4.69713 19.2683 5.35768 19.6817 5.93566 19.4061C6.26594 19.2408 6.4586 18.9652 6.4586 18.5794C6.4586 17.2841 7.0641 16.2644 8.08245 15.4652C9.43108 14.3904 9.92649 12.9573 9.54117 11.3038C9.12832 9.62267 7.99988 8.57543 6.29346 8.24472C3.62374 7.7211 1.20172 10.0361 1.53199 12.7368C1.64208 13.6463 2.02741 14.4455 2.66043 15.1069C2.79805 15.2447 2.88062 15.3825 2.77053 15.5479C2.66043 15.7408 2.44025 15.7408 2.27511 15.5479C1.64208 14.914 1.22924 14.1699 1.03658 13.3156C0.431075 10.6424 2.10997 8.10692 4.80722 7.61086C7.31181 7.14236 9.87144 8.96126 10.2292 11.4967C10.4769 13.3431 9.87144 14.8589 8.3852 16.0164C7.66961 16.5676 7.22924 17.3116 7.11915 18.2211C7.33933 18.2762 7.58704 18.3313 7.80722 18.3865C8.10998 18.4967 8.41273 18.6069 8.71548 18.7723C8.88062 18.855 9.04575 18.9928 9.18337 19.1305C9.34851 19.3235 9.4586 19.5164 9.76135 19.4888C9.92649 19.4888 10.0091 19.6542 9.98153 19.792C9.98153 19.9573 9.87144 20.0676 9.70631 20.04C9.51365 20.04 9.43108 20.1227 9.29346 20.2605C9.07328 20.4809 8.85309 20.7014 8.57786 20.8392C7.88979 21.1975 7.11915 21.3353 6.32098 21.3904C6.23842 21.3904 6.12832 21.3904 6.04575 21.418H5.22007L5.16502 21.5006ZM4.09163 18.8825C3.56869 18.9928 3.04575 19.103 2.60539 19.4061C2.22007 19.6817 2.19254 19.9573 2.60539 20.2054C2.88062 20.3707 3.18337 20.5085 3.48612 20.5912C4.55952 20.9219 5.68796 20.9494 6.78887 20.7841C7.36686 20.7014 7.94484 20.5636 8.44025 20.2605C8.90814 19.9573 8.90814 19.6817 8.44025 19.3786C8.02741 19.103 7.55952 18.9928 7.0641 18.8825C6.65126 19.8195 6.23842 20.1502 5.46777 20.1227C4.80722 20.0951 4.33933 19.6817 4.0641 18.8825H4.09163Z"
                    fill={color}/>
                <path
                    d="M21.8981 4.71888C21.843 4.93935 21.8155 5.13226 21.7605 5.35273C21.5403 6.17951 21.0724 6.84092 20.3843 7.36455C19.8063 7.80549 19.4761 8.35667 19.366 9.07321C19.5311 9.10077 19.6687 9.12833 19.8339 9.18344C20.1641 9.32124 20.5219 9.43147 20.7972 9.65195C21.3751 10.0653 21.3751 10.6992 20.7972 11.1126C20.7146 11.1953 20.6045 11.2504 20.4944 11.3055C20.3293 11.3882 20.1366 11.3331 20.054 11.1953C19.9715 11.0575 20.0265 10.8921 20.1916 10.7819C20.3017 10.7268 20.3843 10.6716 20.4669 10.589C20.632 10.4512 20.632 10.3409 20.4669 10.2031C20.1366 9.92754 19.7238 9.8173 19.3109 9.73462C19.0907 10.3409 18.7054 10.6992 18.0724 10.6992C17.5219 10.6992 17.1641 10.4512 16.8063 9.73462C16.421 9.8173 16.0357 9.89998 15.7054 10.148C15.4302 10.3409 15.4302 10.5063 15.7054 10.6716C16.1733 10.9748 16.6962 11.1126 17.2467 11.1401C17.8522 11.1677 18.4577 11.1401 19.0632 11.1401C19.2559 11.1401 19.421 11.2228 19.4485 11.3882C19.4485 11.5535 19.366 11.7189 19.1733 11.7464C18.0724 11.9118 16.999 11.8842 15.9256 11.4984C15.5403 11.3606 15.1825 11.1401 14.9348 10.7543C14.9072 10.6992 14.7696 10.6992 14.6871 10.6716C14.4394 10.6716 14.3017 10.4787 14.3568 10.2858C14.4118 10.1205 14.5494 10.0378 14.7146 10.0653C14.8797 10.0653 14.9623 10.0102 15.0724 9.89998C15.4027 9.48659 15.8981 9.32124 16.3935 9.18344C16.5036 9.15588 16.6137 9.12832 16.7513 9.10077C16.6962 8.93541 16.6687 8.7425 16.6137 8.57714C16.4485 8.08108 16.1458 7.69525 15.7329 7.3921C14.9623 6.81336 14.4944 6.04171 14.2742 5.07714C13.8614 2.89998 15.4577 0.722812 17.6595 0.50234C19.8063 0.309426 21.5403 1.68738 21.8705 3.80943C21.8705 3.83699 21.8705 3.86454 21.8981 3.8921V4.66376V4.71888ZM21.2926 4.25037C21.2926 4.25037 21.2926 3.91966 21.2375 3.69919C20.8797 1.99053 19.3384 0.915725 17.6045 1.1362C16.1458 1.32911 14.9348 2.65195 14.8797 4.11258C14.8247 5.2425 15.265 6.17951 16.1458 6.86848C16.9715 7.50234 17.4118 8.35667 17.4394 9.37636C17.4394 9.48659 17.4669 9.56927 17.5219 9.67951C17.6595 9.9551 17.9348 10.0929 18.2375 10.0378C18.5403 9.98266 18.7329 9.70707 18.7605 9.32124C18.788 8.30155 19.2283 7.47478 20.054 6.84092C20.8797 6.20706 21.2926 5.32518 21.3201 4.22281L21.2926 4.25037Z"
                    fill={color}/>
                <path
                    d="M8.21977 12.2687C8.21977 13.7293 7.06381 14.8868 5.60509 14.8868C4.14638 14.8868 2.96289 13.7018 2.96289 12.2687C2.96289 10.8081 4.14638 9.62305 5.60509 9.62305C7.03629 9.62305 8.21977 10.8081 8.21977 12.2412V12.2687ZM7.61427 12.2687C7.61427 11.1664 6.73353 10.2569 5.63262 10.2293C4.5317 10.2293 3.59592 11.1388 3.59592 12.2412C3.59592 13.3435 4.50418 14.253 5.57757 14.253C6.70601 14.253 7.61427 13.3711 7.61427 12.2412V12.2687Z"
                    fill={color}/>
                <path
                    d="M11.467 12.2672C11.467 12.1294 11.467 11.9916 11.522 11.8538C11.5495 11.6885 11.7147 11.5782 11.8523 11.6058C12.0174 11.6058 12.1275 11.7711 12.1 11.9365C12.045 12.2672 12.1 12.5703 12.1826 12.8735C12.2376 13.0389 12.1275 13.2042 11.9624 13.2318C11.7973 13.2869 11.6596 13.2318 11.6046 13.0389C11.522 12.7908 11.4945 12.5152 11.4395 12.2672H11.467Z"
                    fill={color}/>
                <path
                    d="M19.1738 17.008C19.1738 17.008 19.1738 17.1733 19.1738 17.2836C19.1738 17.4489 19.0086 17.5867 18.8435 17.5592C18.6784 17.5592 18.5683 17.4214 18.5408 17.256C18.5132 16.9253 18.4582 16.6221 18.4307 16.2914C18.4307 16.0985 18.4857 15.9607 18.6508 15.9056C18.816 15.8781 18.9811 15.9607 19.0086 16.1261C19.0912 16.4292 19.1187 16.7048 19.1738 17.008C19.1738 17.008 19.1738 17.008 19.1463 17.008H19.1738Z"
                    fill={color}/>
                <path
                    d="M17.7427 19.5696C17.7427 19.5696 17.55 19.4593 17.5225 19.3767C17.495 19.2664 17.5225 19.1286 17.5776 19.046C17.7977 18.7704 18.0179 18.5223 18.2656 18.2743C18.3757 18.1641 18.4858 18.1365 18.6234 18.1916C18.761 18.2743 18.8436 18.4121 18.761 18.5499C18.5684 18.9633 18.2656 19.2664 17.9078 19.5145C17.8803 19.5145 17.8253 19.5145 17.7427 19.5696Z"
                    fill={color}/>
                <path
                    d="M13.7251 10.3653C13.7251 10.5306 13.615 10.6133 13.4774 10.6684C13.2021 10.7786 12.9269 10.9164 12.6792 11.0542C12.5141 11.1369 12.3489 11.1369 12.2388 10.9991C12.1287 10.8613 12.1563 10.696 12.2939 10.5582C12.5966 10.2826 12.9544 10.1172 13.3673 10.0621C13.5599 10.0345 13.7251 10.1723 13.7251 10.3653Z"
                    fill={color}/>
                <path
                    d="M13.476 14.5266C13.2008 14.5266 12.8705 14.3888 12.5677 14.1959C12.3751 14.0857 12.32 13.9203 12.4301 13.755C12.5127 13.5896 12.6778 13.5621 12.898 13.6448C13.1457 13.755 13.3934 13.8377 13.6411 13.8928C13.8888 13.9479 14.0265 14.0306 13.9989 14.2511C13.9989 14.444 13.8613 14.5266 13.5035 14.5266H13.476Z"
                    fill={color}/>
                <path
                    d="M15.4849 14.5282C15.3197 14.5282 15.1271 14.5282 14.9619 14.5282C14.7693 14.5282 14.6592 14.3904 14.6592 14.225C14.6592 14.0597 14.7693 13.9219 14.9344 13.9219C15.2922 13.9219 15.6775 13.9219 16.0353 13.9219C16.228 13.9219 16.3106 14.0597 16.3106 14.2526C16.3106 14.4179 16.2005 14.5282 16.0078 14.5282C16.0078 14.5282 16.0078 14.5282 15.9803 14.5282C15.8151 14.5282 15.65 14.5282 15.4849 14.5282Z"
                    fill={color}/>
                <path
                    d="M18.4575 15.133C18.4575 15.133 18.3474 15.3259 18.2648 15.3535C18.1822 15.381 18.0171 15.3535 17.9345 15.3259C17.6593 15.133 17.3841 14.9401 17.1088 14.7472C16.9712 14.6369 16.9162 14.4991 16.9988 14.3613C17.0813 14.196 17.2189 14.1409 17.3566 14.2235C17.7419 14.3889 18.0722 14.6369 18.3749 14.9401C18.4299 14.9952 18.4299 15.0503 18.4575 15.1605V15.133Z"
                    fill={color}/>
                <path
                    d="M11.4399 20.12C11.2748 20.12 11.0821 20.12 10.917 20.12C10.7243 20.12 10.6143 20.0097 10.6143 19.8168C10.6143 19.6515 10.7243 19.5137 10.8895 19.5137C11.2473 19.5137 11.6051 19.5137 11.9629 19.5137C12.1555 19.5137 12.2656 19.6515 12.2656 19.8444C12.2656 20.0097 12.1555 20.12 11.9629 20.12C11.7977 20.12 11.6326 20.12 11.4399 20.12Z"
                    fill={color}/>
                <path
                    d="M13.7798 20.12C13.6147 20.12 13.4495 20.12 13.2569 20.12C13.0642 20.12 12.9541 20.0097 12.9541 19.8444C12.9541 19.679 13.0642 19.5412 13.2569 19.5137C13.6147 19.5137 13.9725 19.5137 14.3302 19.5137C14.5229 19.5137 14.633 19.6515 14.633 19.8444C14.633 20.0097 14.5229 20.12 14.3027 20.1475C14.1376 20.1475 13.9724 20.1475 13.7798 20.1475V20.12Z"
                    fill={color}/>
                <path
                    d="M15.981 20.1204C15.981 20.1204 15.7333 20.1204 15.6232 20.1204C15.4306 20.1204 15.293 20.0102 15.293 19.8173C15.293 19.6519 15.4031 19.5141 15.5957 19.5141C15.7609 19.5141 15.8985 19.5141 16.0636 19.5141C16.2287 19.5141 16.3939 19.5141 16.5865 19.459C16.7792 19.459 16.9168 19.5417 16.9443 19.707C16.9719 19.8999 16.8618 20.0377 16.6691 20.0653C16.4489 20.0928 16.2012 20.1204 15.981 20.1204Z"
                    fill={color}/>
                <path
                    d="M18.0731 6.47933C16.8896 6.47933 15.8988 5.51476 15.9263 4.30217C15.9263 3.11713 16.8896 2.15256 18.1007 2.125C19.3117 2.125 20.275 3.11713 20.275 4.30217C20.275 5.4872 19.2841 6.45177 18.1007 6.45177L18.0731 6.47933ZM18.0731 5.87303C18.9263 5.87303 19.6419 5.18406 19.6419 4.32972C19.6419 3.47539 18.9539 2.78642 18.1007 2.75886C17.2474 2.75886 16.5318 3.44783 16.5318 4.30217C16.5318 5.1565 17.2199 5.84547 18.0731 5.87303Z"
                    fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_2341_434">
                    <rect width="21" height="21" fill="white" transform="translate(0.898438 0.5)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

IconWay.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};
