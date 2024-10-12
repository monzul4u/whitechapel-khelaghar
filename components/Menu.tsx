import Image from "next/image";

const Menu = () => {
  return (
    <section id="menu" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12 underline">
          Our Menu
        </h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/menu.jpg"
            alt="Whitechapel Khela Ghar Menu"
            width={1200}
            height={1600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
