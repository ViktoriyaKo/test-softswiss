export const BurgerIcon = () => (
  <svg
    width="32"
    height="38"
    viewBox="0 0 32 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_80_40)">
      <path
        d="M4.75 11.0212H27.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.75 18.8934H27.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.75 26.7657H27.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_80_40"
        x="0"
        y="10.2712"
        width="32"
        height="25.2446"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_80_40"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_80_40"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
