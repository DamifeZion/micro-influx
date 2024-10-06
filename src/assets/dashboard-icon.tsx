import { TIconProps } from "@/types";
import * as React from "react";

export const HomeIcon: React.FC<TIconProps> = ({
   size = 18,
   color = "currentColor",
   className = "",
}) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 18 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className} // Apply custom class
      >
         <path
            d="M7.9695 0.893412C8.248 0.630108 8.61673 0.483398 9 0.483398C9.38327 0.483398 9.752 0.630108 10.0305 0.893412L17.2965 7.76191C17.7465 8.18641 18 8.77891 18 9.39691V17.7519C18 18.3486 17.7629 18.9209 17.341 19.3429C16.919 19.7649 16.3467 20.0019 15.75 20.0019H12.75C12.4544 20.0019 12.1617 19.9437 11.8886 19.8305C11.6155 19.7173 11.3674 19.5515 11.1585 19.3424C10.9495 19.1333 10.7838 18.8851 10.6708 18.6119C10.5579 18.3388 10.4998 18.046 10.5 17.7504V14.0004C10.5 13.8015 10.421 13.6107 10.2803 13.4701C10.1397 13.3294 9.94891 13.2504 9.75 13.2504H8.25C8.05109 13.2504 7.86032 13.3294 7.71967 13.4701C7.57902 13.6107 7.5 13.8015 7.5 14.0004V17.7504C7.5 18.3472 7.26295 18.9194 6.84099 19.3414C6.41903 19.7634 5.84674 20.0004 5.25 20.0004H2.25C1.65326 20.0004 1.08097 19.7634 0.65901 19.3414C0.237053 18.9194 0 18.3472 0 17.7504V9.39541C0 8.77741 0.255 8.18491 0.705 7.76041L7.9695 0.890412V0.893412ZM9 1.98241L1.734 8.85241C1.66024 8.92234 1.60146 9.00654 1.56123 9.09988C1.52101 9.19322 1.50017 9.29377 1.5 9.39541V17.7504C1.5 17.9493 1.57902 18.1401 1.71967 18.2807C1.86032 18.4214 2.05109 18.5004 2.25 18.5004H5.25C5.44891 18.5004 5.63968 18.4214 5.78033 18.2807C5.92098 18.1401 6 17.9493 6 17.7504V14.0004C6 13.4037 6.23705 12.8314 6.65901 12.4094C7.08097 11.9875 7.65326 11.7504 8.25 11.7504H9.75C10.3467 11.7504 10.919 11.9875 11.341 12.4094C11.7629 12.8314 12 13.4037 12 14.0004V17.7504C12 17.9493 12.079 18.1401 12.2197 18.2807C12.3603 18.4214 12.5511 18.5004 12.75 18.5004H15.75C15.9489 18.5004 16.1397 18.4214 16.2803 18.2807C16.421 18.1401 16.5 17.9493 16.5 17.7504V9.39541C16.5 9.29352 16.4793 9.19269 16.4391 9.09907C16.3988 9.00545 16.3399 8.92102 16.266 8.85091L9 1.98241Z"
            fill={color} // Use color prop here
         />
      </svg>
   );
};

export const CampaignsIcon: React.FC<TIconProps> = ({
   size = 18,
   color = "currentColor",
   className = "",
}) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 21 22"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <path
            d="M21 0.749986V15.25C20.9999 15.3862 20.9626 15.5197 20.8924 15.6363C20.8221 15.753 20.7213 15.8483 20.601 15.912C20.217 16.116 19.818 15.877 19.462 15.664L19.459 15.662C19.369 15.608 19.282 15.555 19.198 15.512C18.552 15.1826 17.8837 14.8989 17.198 14.663C15.46 14.056 12.877 13.44 9.495 13.412C9.49822 13.4412 9.49989 13.4706 9.5 13.5C9.5 15.779 9.99401 17.779 10.406 19.047C10.774 20.178 9.968 21.5 8.674 21.5H6.661C5.965 21.5 5.301 21.08 5.061 20.371C4.684 19.255 4 16.811 4 13.75V13.293C2.72156 12.932 1.61698 12.1204 0.89036 11.0083C0.163743 9.8962 -0.135806 8.55867 0.0470626 7.24288C0.229931 5.92708 0.882857 4.72193 1.8852 3.85011C2.88754 2.97828 4.17156 2.49871 5.5 2.49999H9.25C12.755 2.49999 15.425 1.88999 17.205 1.28999C17.8902 1.06248 18.5591 0.788512 19.207 0.469986C19.3729 0.3876 19.5363 0.300227 19.697 0.207986C19.745 0.179986 19.792 0.152986 19.839 0.122986C19.9522 0.0492424 20.0831 0.00738624 20.2181 0.0018267C20.3531 -0.00373285 20.487 0.02721 20.6059 0.0913955C20.7247 0.155581 20.8241 0.250633 20.8934 0.366538C20.9628 0.482444 20.9996 0.614911 21 0.749986ZM9.5 11.912C13.064 11.941 15.813 12.59 17.693 13.247C18.43 13.505 19.033 13.764 19.5 13.987V1.99299C19.033 2.20899 18.427 2.45999 17.685 2.71099C15.807 3.34499 13.061 3.97099 9.5 3.99899V11.912ZM5.5 3.99999C4.43914 3.99999 3.42172 4.42141 2.67158 5.17156C1.92143 5.9217 1.5 6.93912 1.5 7.99999C1.5 9.06085 1.92143 10.0783 2.67158 10.8284C3.42172 11.5786 4.43914 12 5.5 12H8V3.99999H5.5ZM5.5 13.75C5.5 16.597 6.138 18.873 6.482 19.891C6.5 19.942 6.556 20 6.661 20H8.674C8.761 20 8.85301 19.957 8.92301 19.853C8.95798 19.8039 8.98129 19.7475 8.99116 19.6881C9.00104 19.6286 8.99722 19.5677 8.98 19.51C8.537 18.148 8 15.986 8 13.5H5.5V13.75Z"
            fill={color}
         />
      </svg>
   );
};

export const MessagesIcon: React.FC<TIconProps> = ({
   size = 18,
   color = "currentColor",
   className = "",
}) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 20 21"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <path
            d="M5.20086 6.19922C5.20086 6.04009 5.26408 5.88748 5.3766 5.77496C5.48912 5.66243 5.64173 5.59922 5.80086 5.59922H9.40086C9.55999 5.59922 9.71261 5.66243 9.82513 5.77496C9.93765 5.88748 10.0009 6.04009 10.0009 6.19922C10.0009 6.35835 9.93765 6.51096 9.82513 6.62348C9.71261 6.73601 9.55999 6.79922 9.40086 6.79922H5.80086C5.64173 6.79922 5.48912 6.73601 5.3766 6.62348C5.26408 6.51096 5.20086 6.35835 5.20086 6.19922ZM5.80086 7.99922C5.64173 7.99922 5.48912 8.06243 5.3766 8.17496C5.26408 8.28748 5.20086 8.44009 5.20086 8.59922C5.20086 8.75835 5.26408 8.91096 5.3766 9.02348C5.48912 9.13601 5.64173 9.19922 5.80086 9.19922H8.20086C8.35999 9.19922 8.5126 9.13601 8.62513 9.02348C8.73765 8.91096 8.80086 8.75835 8.80086 8.59922C8.80086 8.44009 8.73765 8.28748 8.62513 8.17496C8.5126 8.06243 8.35999 7.99922 8.20086 7.99922H5.80086ZM7.60086 0.199219C6.35172 0.198799 5.12396 0.523368 4.03822 1.14104C2.95248 1.7587 2.04611 2.64822 1.40817 3.72218C0.770237 4.79614 0.422683 6.01759 0.399661 7.26652C0.376638 8.51545 0.67894 9.74888 1.27686 10.8456L0.424862 13.8336C0.394882 13.9385 0.394084 14.0497 0.422552 14.155C0.45102 14.2603 0.507676 14.3559 0.586424 14.4315C0.665172 14.507 0.763028 14.5596 0.869462 14.5837C0.975896 14.6078 1.08688 14.6023 1.19046 14.568L3.99606 13.6332C4.95229 14.1858 6.02283 14.511 7.12484 14.5836C8.22685 14.6563 9.33081 14.4744 10.3513 14.0522C11.3718 13.6299 12.2815 12.9786 13.01 12.1485C13.7385 11.3184 14.2662 10.3319 14.5525 9.26521C14.8387 8.19854 14.8757 7.08032 14.6606 5.99706C14.4455 4.9138 13.9841 3.89453 13.3121 3.01812C12.6401 2.1417 11.7755 1.43162 10.7851 0.94282C9.79479 0.454016 8.70527 0.199588 7.60086 0.199219ZM1.60086 7.39922C1.60106 6.06794 2.044 4.77454 2.85996 3.72263C3.67591 2.67072 4.81854 1.92005 6.10795 1.58881C7.39735 1.25756 8.76031 1.36455 9.98224 1.89292C11.2042 2.4213 12.2157 3.34106 12.8575 4.5074C13.4993 5.67374 13.735 7.02042 13.5275 8.33542C13.32 9.65042 12.681 10.8591 11.7112 11.7711C10.7414 12.6831 9.49578 13.2466 8.17052 13.373C6.84526 13.4994 5.51559 13.1815 4.39086 12.4692C4.31563 12.4215 4.23072 12.3912 4.1423 12.3804C4.05387 12.3696 3.96416 12.3786 3.87966 12.4068L1.89006 13.0704L2.50206 10.9332C2.52436 10.8545 2.53033 10.7721 2.5196 10.691C2.50887 10.6099 2.48166 10.5318 2.43966 10.4616C1.88869 9.53528 1.59884 8.47703 1.60086 7.39922ZM12.7321 16.9356L9.84966 15.4956C10.3777 15.348 10.8853 15.1512 11.3653 14.91L13.0009 15.7284L18.4009 13.0284V12.1992C18.4009 11.881 18.2744 11.5757 18.0494 11.3507C17.8243 11.1256 17.5191 10.9992 17.2009 10.9992H15.1921C15.3757 10.6152 15.5293 10.2132 15.6529 9.79922H17.2009C17.8374 9.79922 18.4478 10.0521 18.8979 10.5022C19.348 10.9523 19.6009 11.5627 19.6009 12.1992V18.1992C19.6009 18.8357 19.348 19.4462 18.8979 19.8963C18.4478 20.3464 17.8374 20.5992 17.2009 20.5992H8.80086C8.16434 20.5992 7.55389 20.3464 7.10381 19.8963C6.65372 19.4462 6.40086 18.8357 6.40086 18.1992V15.7152C6.79326 15.7704 7.19286 15.7992 7.60086 15.7992V18.1992C7.60086 18.5175 7.72729 18.8227 7.95233 19.0477C8.17738 19.2728 8.4826 19.3992 8.80086 19.3992H17.2009C17.5191 19.3992 17.8243 19.2728 18.0494 19.0477C18.2744 18.8227 18.4009 18.5175 18.4009 18.1992V14.37L13.2697 16.9356C13.1862 16.9774 13.0942 16.9992 13.0009 16.9992C12.9075 16.9992 12.8155 16.9774 12.7321 16.9356Z"
            fill={color}
         />
      </svg>
   );
};

export const EarningsIcon: React.FC<TIconProps> = ({
   size = 18,
   color = "currentColor",
   className = "",
}) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 22 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <path
            d="M3.979 6.685C1.993 5.891 1 5.494 1 5C1 4.506 1.993 4.11 3.979 3.315L6.787 2.192C8.773 1.397 9.767 1 11 1C12.234 1 13.227 1.397 15.213 2.192L18.021 3.315C20.007 4.109 21 4.506 21 5C21 5.494 20.007 5.89 18.021 6.685L15.213 7.808C13.227 8.604 12.233 9 11 9C9.766 9 8.773 8.603 6.787 7.809L3.98 6.684L3.979 6.685Z"
            stroke={color}
            stroke-width="1.5"
         />
         <path
            d="M4.766 7L3.979 7.315C1.993 8.109 1 8.507 1 9C1 9.493 1.993 9.89 3.979 10.685L6.787 11.808C8.773 12.604 9.767 13 11 13C12.234 13 13.227 12.603 15.213 11.809L18.021 10.685C20.007 9.891 21 9.493 21 9C21 8.507 20.007 8.11 18.021 7.315L17.234 7"
            stroke={color}
            stroke-width="1.5"
         />
         <path
            d="M4.766 11L3.979 11.315C1.993 12.109 1 12.507 1 13C1 13.494 1.993 13.89 3.979 14.685L6.787 15.808C8.773 16.604 9.767 17 11 17C12.234 17 13.227 16.603 15.213 15.808L18.021 14.685C20.007 13.891 21 13.494 21 13C21 12.507 20.007 12.11 18.021 11.315L17.234 11"
            stroke={color}
            stroke-width="1.5"
         />
      </svg>
   );
};

export const SettingsIcon: React.FC<TIconProps> = ({
   size = 18,
   color = "currentColor",
   className = "",
}) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <path
            d="M4.5 1.5H19.5C21.162 1.5 22.5 2.838 22.5 4.5V19.5C22.5 21.162 21.162 22.5 19.5 22.5H4.5C2.838 22.5 1.5 21.162 1.5 19.5V4.5C1.5 2.838 2.838 1.5 4.5 1.5Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M6 6H7.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M9 7.5C8.60217 7.5 8.22064 7.34196 7.93934 7.06066C7.65803 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.65803 5.22064 7.93934 4.93934C8.22064 4.65804 8.60217 4.5 9 4.5C9.19698 4.5 9.39204 4.5388 9.57402 4.61418C9.75601 4.68956 9.92137 4.80005 10.0607 4.93934C10.1999 5.07863 10.3104 5.24399 10.3858 5.42597C10.4612 5.60796 10.5 5.80302 10.5 6C10.5 6.19698 10.4612 6.39204 10.3858 6.57403C10.3104 6.75601 10.1999 6.92137 10.0607 7.06066C9.92137 7.19995 9.75601 7.31044 9.57402 7.38582C9.39204 7.4612 9.19698 7.5 9 7.5Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M10.5 6.00003L18 6"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M18 12H16.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M15 13.5C15.3978 13.5 15.7794 13.342 16.0607 13.0607C16.342 12.7794 16.5 12.3978 16.5 12C16.5 11.6022 16.342 11.2206 16.0607 10.9393C15.7794 10.658 15.3978 10.5 15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M13.5 12L6 12"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M6 18H7.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M9 19.5C8.60217 19.5 8.22064 19.342 7.93934 19.0607C7.65803 18.7794 7.5 18.3978 7.5 18C7.5 17.6022 7.65803 17.2206 7.93934 16.9393C8.22064 16.658 8.60217 16.5 9 16.5C9.19698 16.5 9.39204 16.5388 9.57402 16.6142C9.75601 16.6896 9.92137 16.8001 10.0607 16.9393C10.1999 17.0786 10.3104 17.244 10.3858 17.426C10.4612 17.608 10.5 17.803 10.5 18C10.5 18.197 10.4612 18.392 10.3858 18.574C10.3104 18.756 10.1999 18.9214 10.0607 19.0607C9.92137 19.1999 9.75601 19.3104 9.57402 19.3858C9.39204 19.4612 9.19698 19.5 9 19.5Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M10.5 18L18 18"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};
