
import { useState } from "react";
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for books
const featuredBooks = [
  {
    id: 1,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    salePrice: 29.90,
    rentalPrice: 9.90,
    rating: 4.8,
    category: "Fantasia"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4ada86?w=400&h=600&fit=crop",
    salePrice: 24.90,
    rentalPrice: 7.90,
    rating: 4.9,
    category: "Ficção Científica"
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    salePrice: 19.90,
    rentalPrice: 5.90,
    rating: 4.6,
    category: "Literatura Brasileira"
  },
  {
    id: 4,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    salePrice: 22.90,
    rentalPrice: 6.90,
    rating: 4.7,
    category: "Infantil"
  }
];

const bestSellers = [
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    salePrice: 39.90,
    rentalPrice: 12.90,
    rating: 4.9,
    category: "História"
  },
  {
    id: 6,
    title: "Mindset",
    author: "Carol S. Dweck",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=600&fit=crop",
    salePrice: 34.90,
    rentalPrice: 11.90,
    rating: 4.8,
    category: "Autoajuda"
  },
  {
    id: 7,
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
    salePrice: 32.90,
    rentalPrice: 10.90,
    rating: 4.7,
    category: "Desenvolvimento Pessoal"
  },
  {
    id: 8,
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
    salePrice: 29.90,
    rentalPrice: 9.90,
    rating: 4.6,
    category: "Finanças"
  }
];

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      title: "Novos Lançamentos",
      subtitle: "Descubra os livros mais aguardados do ano",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop",
      cta: "Ver Lançamentos"
    },
    {
      title: "Promoção de Verão",
      subtitle: "Até 50% de desconto em livros selecionados",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop",
      cta: "Aproveitar Ofertas"
    },
    {
      title: "Aluguel por apenas R$ 4,90",
      subtitle: "Acesso completo por 30 dias",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4ada86?w=1200&h=400&fit=crop",
      cta: "Começar Agora"
    }
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${banners[currentBanner].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {banners[currentBanner].title}
            </h1>
            <p className="text-xl mb-6">
              {banners[currentBanner].subtitle}
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {banners[currentBanner].cta}
            </Button>
          </div>
        </div>
        
        <button 
          onClick={prevBanner}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 transition-colors"
        >
          <ChevronRight size={40} />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Destaques da Semana</h2>
          <p className="text-gray-600">Os livros mais populares escolhidos especialmente para você</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mais Vendidos</h2>
            <p className="text-gray-600">Os livros que estão conquistando nossos leitores</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore por Categoria</h2>
            <p className="text-gray-600">Encontre seu próximo livro favorito</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Ficção', 'Romance', 'Autoajuda', 'Negócios', 'História', 'Biografia'].map((category) => (
              <div key={category} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Fique por Dentro</h2>
          <p className="text-blue-100 mb-8">Receba novidades, promoções e recomendações personalizadas</p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Inscrever
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
