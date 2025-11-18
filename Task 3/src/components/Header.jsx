export default function Header() {
  const handleScroll = () => {
    document.querySelector("#features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-600 to-teal-400 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
      <p className="text-lg mb-6 max-w-md">
        Boost your productivity with smart tools designed to help you plan, track, and achieve more every day.
      </p>
      <button
        onClick={handleScroll}
        className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Explore Features
      </button>
    </header>
  );
}