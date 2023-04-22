export default function Button({ text, color, bgColor }) {
  return (
    <button
      className={` text-primary-yellow bg-gray-dark3 border-primary-yellow border-2 rounded-lg py-2 px-4 font-semibold tracking-wider inline-block`}
    >
      {text}
    </button>
  );
}
