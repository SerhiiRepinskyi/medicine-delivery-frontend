const HeartIcon = ({ isActive }) => (
  <svg width="18" height="18" viewBox="0 0 32 32">
    {isActive ? (
      <path
        d="M27.787 6.148C26.46 4.82 24.626 3.999 22.6 3.999s-3.859.821-5.187 2.149L16 7.561l-1.413-1.415A7.336 7.336 0 0 0 4.213 16.522L16 28.307 27.787 16.52c1.327-1.328 2.148-3.161 2.148-5.187s-.821-3.859-2.148-5.187h0z"
        fill="#3470ff"
      />
    ) : (
      <path
        d="M27.787 6.148C26.46 4.82 24.626 3.999 22.6 3.999s-3.859.821-5.187 2.149L16 7.561l-1.413-1.415A7.336 7.336 0 0 0 4.213 16.522L16 28.307 27.787 16.52c1.327-1.328 2.148-3.161 2.148-5.187s-.821-3.859-2.148-5.187h0z"
        fill="none"
        stroke="#fff"
      />
    )}
  </svg>
);

export default HeartIcon;
