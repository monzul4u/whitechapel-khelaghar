import Image from "next/image";

const images = ["/image1.jpg", "/image2.jpg", "/banner1.jpg", "gallery1.jpg"];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12 underline">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
