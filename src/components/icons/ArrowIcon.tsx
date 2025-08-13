interface ArrowIconProps {
  rotated?: boolean;
}

const ArrowIcon = ({ rotated = false }: ArrowIconProps) => {
  return (
    <div style={{ display: 'flex', transform: rotated ? 'rotate(180deg)' : 'none' }}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_8_52)'>
          <path d='M15 6L9 12L15 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        </g>
        <defs>
          <clipPath id='clip0_8_52'>
            <rect width='24' height='24' fill='white' transform='matrix(0 1 -1 0 24 0)' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowIcon;
