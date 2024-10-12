import { Coffee, Gamepad2, Tv } from "lucide-react";

const services = [
  {
    title: "Food & Drinks",
    description: "Enjoy our delicious food items, Chana Piazi, and tea.",
    icon: Coffee,
  },
  {
    title: "Games",
    description: "Play Carrom,and Gafla game with friends.",
    icon: Gamepad2,
  },
  {
    title: "Live Sports",
    description: "Watch live Sky Sports events on our big screens.",
    icon: Tv,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12 underline">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
