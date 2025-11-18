const SectionWrapper = ({ children, id, className }) => (
    <section id={id} className={`p-4 ${className}`}>
        {children}
    </section>
);

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Core features", "Single workspace", "Community support"],
  },
  {
    name: "Plus",
    price: "$12/mo",
    features: ["Unlimited workspaces", "Advanced analytics", "Faster syncing"],
  },
  {
    name: "Enterprise",
    price: "$49/mo",
    features: ["Team permissions", "Dedicated manager", "Custom integrations"],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Plans & Pricing</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className="border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-4xl font-bold text-teal-600 mb-6">{p.price}</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button 
                className="bg-teal-600 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}