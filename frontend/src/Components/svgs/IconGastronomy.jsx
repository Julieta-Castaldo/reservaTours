import PropTypes from "prop-types";

export const IconGastronomy = (props) => {
    const {color = "white", size = "85", className} = props;

    const height = String(Number(size) - 8);

    return (
        <svg
            className={className}
            width={size}
            height={height}
            // width="85"
            // height="77"
            viewBox="0 0 85 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2204_892)">
                <path
                    d="M0.118164 55.5847C0.514963 54.9256 1.09914 54.7272 1.85967 54.7471C3.5637 54.7911 5.26994 54.7603 6.95854 54.7603C7.25614 53.4354 7.51185 52.1524 7.84252 50.8893C8.09823 49.9149 8.69122 49.5358 9.42751 49.7474C10.2101 49.9744 10.457 50.6203 10.2035 51.6145C9.94555 52.6198 9.73613 53.6382 9.49144 54.7184H12.8201C14.0899 48.7642 17.5707 45.0916 23.8115 44.7345C29.025 44.4369 32.7615 47.2806 35.1313 52.8777C35.3936 51.7578 35.4751 50.6226 35.9249 49.6592C36.5796 48.2528 36.0681 47.3357 35.1665 46.3173C29.2168 39.6158 18.6685 39.7613 12.9083 46.6568C12.7672 46.8265 12.635 47.0029 12.4961 47.1726C11.9053 47.8979 11.158 48.061 10.5716 47.5937C9.98964 47.1285 9.97421 46.3812 10.5628 45.6207C13.1045 42.3471 16.42 40.2727 20.4409 39.2829C20.7539 39.2058 21.1331 38.9346 21.2631 38.6524C23.9371 32.8217 28.4496 29.4247 34.7719 28.3842C34.9064 28.3621 35.0409 28.3379 35.2679 28.2982C35.2679 26.4597 35.2856 24.6234 35.2415 22.7915C35.2371 22.6085 34.8822 22.3484 34.6397 22.2691C32.9004 21.6937 31.1456 21.848 29.435 22.3572C27.1953 23.023 24.9975 23.821 22.7577 24.4911C20.097 25.2869 17.4164 25.5669 14.7534 24.4382C13.3029 23.8232 13.1795 23.6579 13.1795 22.1214C13.1795 16.5111 13.1795 10.903 13.1795 5.29268C13.1795 3.64156 13.9135 3.17422 15.4302 3.8598C17.3062 4.7063 19.2505 4.69528 21.1683 4.15078C23.6263 3.45418 26.0357 2.59004 28.4871 1.86258C30.8811 1.15275 33.2972 0.976394 35.7198 1.80306C35.9182 1.8714 36.2445 1.77881 36.4253 1.64654C37.4966 0.859559 38.6429 0.680999 39.8465 1.23652C41.0943 1.81188 41.674 2.85898 41.7027 4.2103C41.7225 5.11633 41.7291 6.02676 41.6983 6.93279C41.6696 7.79693 41.1935 8.2797 40.4528 8.27529C39.7099 8.27088 39.2624 7.79031 39.2381 6.91295C39.2139 6.08849 39.2337 5.26403 39.2293 4.43736C39.2249 3.90168 39.1235 3.40128 38.4401 3.42773C37.8008 3.45198 37.7501 3.94577 37.7501 4.44177C37.7501 9.77651 37.7501 15.1113 37.7501 20.446C37.7501 23.0009 37.7501 25.5537 37.7501 28.2012C38.2439 28.2607 38.6892 28.3158 39.2337 28.382C39.2337 27.9719 39.2337 27.6479 39.2337 27.3238C39.2337 22.4851 39.2337 17.6442 39.2337 12.8054C39.2337 12.5034 39.2271 12.1992 39.258 11.8994C39.3285 11.227 39.7319 10.8391 40.391 10.806C41.0877 10.7707 41.5462 11.1322 41.6652 11.8355C41.7159 12.1309 41.7093 12.4373 41.7093 12.7393C41.7115 17.8271 41.7225 22.9128 41.6961 28.0006C41.6917 28.6465 41.8504 28.9661 42.5051 29.1712C45.1813 30.0155 47.4563 31.5277 49.416 33.5095C52.5926 30.9391 56.3424 31.2367 60.0017 31.3998C63.3326 31.5475 66.4872 32.5395 69.4852 34.0165C71.2554 34.8895 72.3797 36.2408 72.8161 38.1719C72.8779 38.4452 73.0211 38.7472 73.224 38.9324C77.8555 43.1561 80.3487 48.4071 80.8491 54.7625C81.5655 54.7625 82.2996 54.8022 83.0271 54.7515C83.7898 54.6986 84.3696 54.93 84.7686 55.5869V57.4012C84.7179 57.5533 84.6429 57.7032 84.6209 57.8575C84.3035 59.9694 83.4966 61.8784 82.1718 63.5472C79.694 66.6665 76.449 68.2713 72.4568 68.3595C72.06 68.3683 71.6764 68.2735 71.5398 68.8929C70.4067 73.9587 66.7164 76.9017 61.503 76.9105C55.1101 76.9237 48.7172 76.9149 42.3265 76.9127C36.3481 76.9105 30.3675 76.959 24.389 76.8752C19.9691 76.8135 16.1731 73.6148 15.1943 69.3404C15.1216 69.0274 15.0598 68.71 14.9805 68.333C13.8981 68.333 12.8775 68.3771 11.8634 68.3264C6.52867 68.0553 2.03162 64.451 0.589914 59.3102C0.413559 58.6798 0.276884 58.0383 0.122573 57.4012V55.5869L0.118164 55.5847ZM2.51218 57.2689C2.98614 58.521 3.27933 59.7313 3.87232 60.774C5.89379 64.3209 9.05275 65.9015 13.1111 65.8971C32.6667 65.8795 52.2223 65.8905 71.7778 65.8883C72.1636 65.8883 72.5494 65.8817 72.933 65.8508C77.0178 65.5246 79.8703 63.448 81.5259 59.7401C81.8631 58.984 82.0086 58.1441 82.2644 57.2689H2.51218ZM69.2163 68.4234H17.5553C17.6324 68.7585 17.6765 69.023 17.7559 69.2787C18.7413 72.4685 21.5056 74.4283 25.0856 74.4349C32.2721 74.4459 39.4586 74.4393 46.645 74.4393C51.6557 74.4393 56.6686 74.4371 61.6793 74.4393C64.6333 74.4393 66.873 73.1784 68.3389 70.6234C68.7093 69.9775 68.9011 69.2302 69.2163 68.4234ZM57.9781 41.4146H57.9825C57.9825 42.7064 57.9538 43.9982 57.9891 45.2878C58.0288 46.7251 59.164 47.8361 60.5088 47.8163C61.8931 47.7965 62.927 46.7119 62.9513 45.2371C62.9667 44.3311 62.9314 43.4229 62.9645 42.519C62.9998 41.5447 63.8286 40.9517 64.6487 41.2912C65.224 41.5292 65.3938 42.0098 65.4555 42.6094C65.6032 44.0423 66.7054 44.966 68.0898 44.891C69.4279 44.8183 70.3758 43.813 70.4089 42.3824C70.4331 41.311 70.4265 40.2396 70.4089 39.1683C70.389 37.936 69.8225 36.9925 68.7335 36.4304C63.7338 33.8468 58.4652 33.148 52.9608 34.3075C51.8299 34.5456 51.0671 35.2775 50.6924 36.3753C50.3485 37.3871 50.4543 38.3438 51.2347 39.1242C51.9533 39.845 52.8351 40.0831 53.8117 39.7282C54.8433 39.3535 55.3746 38.5775 55.4937 37.4951C55.5906 36.6266 56.0624 36.135 56.7546 36.1504C57.4821 36.1658 57.9648 36.7302 57.9736 37.623C57.9869 38.8861 57.9758 40.1493 57.9758 41.4146H57.9781ZM27.9448 4.59608C26.1967 5.19128 24.5676 5.7468 22.9936 6.28248V21.8304C24.4485 21.3432 25.8153 20.8538 27.2041 20.4394C27.8015 20.2608 28.0131 19.9919 28.0087 19.3526C27.9801 14.7078 27.9933 10.0631 27.9911 5.42054C27.9911 5.18246 27.9646 4.94218 27.9448 4.60049V4.59608ZM23.9085 38.831C24.971 38.928 25.888 38.9412 26.7742 39.1154C27.3716 39.2322 27.634 39.025 27.9779 38.5929C30.9076 34.8983 34.7102 33.4323 39.3682 34.2788C41.48 34.6646 43.2767 35.6985 44.8616 37.1204C45.8382 36.5472 46.7773 35.9939 47.8024 35.3899C44.1849 31.7614 39.9017 30.1367 34.8822 30.8884C29.9332 31.6269 26.3223 34.3582 23.9085 38.831ZM20.41 22.4851V7.01655C18.8096 6.9416 17.2621 6.86665 15.6617 6.7917C15.6617 11.7208 15.655 16.7447 15.6859 21.7687C15.6859 21.9626 16.0011 22.2514 16.2282 22.3286C17.5861 22.7827 18.9705 22.8003 20.41 22.4895V22.4851ZM35.226 19.6414C35.226 19.6414 35.2569 19.5774 35.2569 19.5267C35.2635 14.6086 35.2745 9.68833 35.2481 4.77023C35.2481 4.54538 34.9262 4.1596 34.7146 4.12654C33.608 3.96561 32.4881 3.87303 31.3705 3.80028C30.7114 3.7584 30.4468 4.04497 30.4512 4.78125C30.4909 9.42601 30.4711 14.0708 30.4733 18.7133C30.4733 18.98 30.4997 19.2468 30.5086 19.4099C32.109 19.4893 33.63 19.5642 35.2238 19.6414H35.226ZM32.8408 54.725C32.821 50.843 28.5466 47.1506 24.1311 47.1638C19.7641 47.1792 15.4963 50.9091 15.5162 54.725H18.7391C19.612 52.1127 21.3491 50.4947 24.1774 50.4969C27.0057 50.4969 28.7406 52.1172 29.6113 54.725H32.8408ZM49.4535 41.1258C48.9112 40.0986 48.4152 39.1639 47.9214 38.2292C41.6674 41.4741 37.6818 48.579 37.587 54.7184H40.8297C41.0876 51.8548 41.9496 49.2183 43.4839 46.8155C45.0204 44.4104 47.0462 42.5102 49.4513 41.1258H49.4535ZM55.4716 41.8842C54.4113 42.087 53.3267 42.1553 52.3413 42.5058C47.5334 44.2164 43.6382 49.5578 43.3825 54.7008H46.6605C46.9889 52.2737 47.9192 50.1728 49.5373 48.3872C51.1509 46.6061 53.168 45.4972 55.4738 44.9263V41.8842H55.4716ZM66.6724 54.7316C66.3086 52.4522 65.3012 50.6446 63.5884 49.2426C60.5198 51.0745 58.4939 50.5807 55.9015 47.4327C52.4824 48.0632 49.2595 51.5793 49.2551 54.7228H52.489C53.4038 52.0246 55.2181 50.3955 58.161 50.4991C60.8659 50.5961 62.528 52.1899 63.3547 54.7294H66.6746L66.6724 54.7316ZM78.3493 54.725C77.9723 49.9215 76.2529 45.8036 73.1358 42.3471C72.6993 43.5419 72.2827 44.6772 71.8638 45.8257C72.5295 47.1484 73.3849 48.5416 73.947 50.0428C74.5069 51.5374 74.7759 53.1422 75.1815 54.725H78.3515H78.3493ZM33.1362 41.3793C35.5148 39.3931 37.997 39.3028 40.3359 40.8503C41.1802 40.0611 41.9562 39.338 42.7277 38.6172C38.6473 34.9314 32.325 36.4789 30.1999 39.9332C31.1567 40.4028 32.1134 40.8745 33.1362 41.3771V41.3793ZM72.5207 54.7294C72.2628 52.0598 71.3987 49.6945 69.8798 47.5782C69.7498 47.3975 69.4301 47.188 69.2515 47.2299C67.876 47.5407 66.5842 47.3666 65.3673 46.6832C64.9044 47.1131 65.2307 47.3468 65.5283 47.6179C67.3139 49.2293 68.458 51.2177 68.9958 53.5567C69.0862 53.9468 69.1568 54.3414 69.2361 54.7316H72.5207V54.7294ZM26.8646 54.7294C26.3378 53.5434 25.2752 52.8909 24.0341 52.946C22.8724 52.9989 21.8826 53.6933 21.5255 54.7294H26.8646ZM60.6432 54.7294C59.9973 53.4508 58.84 52.8094 57.5791 52.9593C56.4658 53.0893 55.5311 53.8168 55.3019 54.7294H60.6432ZM38.9912 43.0238C37.7193 42.0826 36.3922 42.0583 35.3186 42.9269C36.1255 43.6521 36.9323 44.3774 37.7303 45.0916C38.061 44.5493 38.5107 43.8108 38.9912 43.0216V43.0238Z"
                    fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_2204_892">
                    <rect width="84.6504" height="76.0112" fill="white" transform="translate(0.118164 0.914062)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

IconGastronomy.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};
