const SectionWrapper = ({ children, id, className }) => (
    <section id={id} className={`p-4 ${className}`}>
        {children}
    </section>
);

const reviews = [
  {
    name: "Maya Roberts",
    quote:
      "FlowSuite helps me stay organized without feeling overwhelmed. It’s become part of my daily routine.",
  },
  {
    name: "Omar Khalid",
    quote:
      "The interface is clean and refreshing. Everything feels smooth and effortless to use.",
  },
  {
    name: "Sophie Martins",
    quote:
      "Our team works better together now. This tool makes collaboration so much easier.",
  },
];

export default function Reviews() {
  return (
    <SectionWrapper className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What People Think</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-white p-6 rounded-2xl shadow text-center"
          >
            <p className="text-gray-600 italic mb-4">“{r.quote}”</p>
            <span className="font-semibold text-teal-600">{r.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}