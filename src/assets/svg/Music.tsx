const Music = ({ color = '#BBBBCC' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3571 9.5C16.3571 9.65438 16.3497 9.76409 16.3402 9.84036C16.2639 9.84982 16.1542 9.85714 16 9.85714C15.8458 9.85714 15.7361 9.84982 15.6598 9.84036C15.6503 9.76409 15.6429 9.65438 15.6429 9.5C15.6429 9.34562 15.6503 9.23591 15.6598 9.15964C15.7361 9.15018 15.8458 9.14286 16 9.14286C16.1542 9.14286 16.2639 9.15018 16.3402 9.15964C16.3497 9.23591 16.3571 9.34562 16.3571 9.5Z"
        fill={color}
        stroke={color}
        strokeWidth="2.28571"
      />
      <path
        d="M20 17.9999C20 20.2091 18.2091 21.9999 16 21.9999C13.7909 21.9999 12 20.2091 12 17.9999C12 15.7908 13.7909 13.9999 16 13.9999C18.2091 13.9999 20 15.7908 20 17.9999Z"
        stroke={color}
        strokeWidth="2"
      />
      <rect
        x="6"
        y="4"
        width="20"
        height="24"
        rx="5"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Music;
