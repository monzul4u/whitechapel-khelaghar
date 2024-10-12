import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Services />
      <Menu />
      <Gallery />
    </div>
  );
}