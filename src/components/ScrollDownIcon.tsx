export default function ScrollDownIcon() {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-10 h-10 rounded-full border-2 border-purple-700 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
