import { Brain, ShieldCheck, LineChart } from "lucide-react";

const SectionWrapper = ({ children, id, className }) => (
    <section id={id} className={`p-4 ${className}`}>
        {children}
    </section>
);

const features = [
  {
    icon: <Brain className="w-10 h-10 text-teal-600" />,
    title: "AI-Powered Insights",
    desc: "Analyze patterns instantly and receive smart recommendations to boost your workflow.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
    title: "Secure by Design",
    desc: "Your data is fully protected with advanced encryption and real-time monitoring.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-teal-600" />,
    title: "Performance Tracking",
    desc: "Monitor progress, measure productivity, and visualize your growth clearly.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Highlights</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}