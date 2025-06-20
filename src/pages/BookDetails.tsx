
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Calendar, ArrowLeft, Heart, Share2 } from "lucide-react";

// Mock data for book details
const bookDetails = {
  id: 1,
  title: "O Hobbit",
  author: "J.R.R. Tolkien",
  cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop",
  salePrice: 29.90,
  rentalPrice: 9.90,
  rating: 4.8,
  reviewCount: 342,
  category: "Fantasia",
  publisher: "HarperCollins",
  pages: 310,
  language: "Português",
  isbn: "978-85-359-0034-1",
  synopsis: "Em um buraco no chão vivia um hobbit. Não era um buraco sujo, repugnante, cheio de pontas de minhoca e com cheiro de lodo, nem tampouco um buraco seco, vazio, arenoso, sem nada para se sentar ou comer: era um buraco-hobbit, e isso significa conforto. Esta é a história de como um Baggins teve uma aventura, e se viu fazendo e dizendo coisas absolutamente inesperadas...",
  features: [
    "Download em PDF de alta qualidade",
    "Leitura offline disponível",
    "Compatível com todos os dispositivos",
    "Marcadores e anotações"
  ]
};

const relatedBooks = [
  {
    id: 2,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4ada86?w=400&h=600&fit=crop",
    salePrice: 45.90,
    rentalPrice: 14.90,
    rating: 4.9,
    category: "Fantasia"
  },
  {
    id: 3,
    title: "As Crônicas de Nárnia",
    author: "C.S. Lewis",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    salePrice: 35.90,
    rentalPrice: 11.90,
    rating: 4.7,
    category: "Fantasia"
  }
];

const reviews = [
  {
    id: 1,
    user: "Maria Silva",
    rating: 5,
    comment: "Livro incrível! A escrita do Tolkien é envolvente e a história é cativante do início ao fim.",
    date: "2024-06-15"
  },
  {
    id: 2,
    user: "João Santos",
    rating: 4,
    comment: "Clássico da literatura fantástica. Recomendo para quem gosta de aventuras épicas.",
    date: "2024-06-10"
  },
  {
    id: 3,
    user: "Ana Costa",
    rating: 5,
    comment: "Perfeito para quem está começando a ler Tolkien. Uma introdução fantástica ao mundo da Terra Média.",
    date: "2024-06-05"
  }
];

const BookDetails = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("synopsis");
  const [isFavorite, setIsFavorite] = useState(false);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/catalog" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img 
                  src={bookDetails.cover} 
                  alt={bookDetails.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar - R$ {bookDetails.salePrice.toFixed(2)}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Alugar 30 dias - R$ {bookDetails.rentalPrice.toFixed(2)}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      Favoritar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Header */}
              <div className="mb-6">
                <Badge className="mb-2 bg-blue-100 text-blue-800">
                  {bookDetails.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {bookDetails.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  por {bookDetails.author}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {renderStars(bookDetails.rating)}
                    <span className="ml-2 text-sm text-gray-600">
                      {bookDetails.rating} ({bookDetails.reviewCount} avaliações)
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex space-x-6 border-b">
                  <button
                    onClick={() => setSelectedTab("synopsis")}
                    className={`pb-2 px-1 font-medium ${
                      selectedTab === "synopsis" 
                        ? "text-blue-600 border-b-2 border-blue-600" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Sinopse
                  </button>
                  <button
                    onClick={() => setSelectedTab("details")}
                    className={`pb-2 px-1 font-medium ${
                      selectedTab === "details" 
                        ? "text-blue-600 border-b-2 border-blue-600" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Detalhes
                  </button>
                  <button
                    onClick={() => setSelectedTab("reviews")}
                    className={`pb-2 px-1 font-medium ${
                      selectedTab === "reviews" 
                        ? "text-blue-600 border-b-2 border-blue-600" 
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Avaliações
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mb-8">
                {selectedTab === "synopsis" && (
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {bookDetails.synopsis}
                    </p>
                    
                    <h3 className="font-semibold text-gray-800 mb-3">O que você terá acesso:</h3>
                    <ul className="space-y-2">
                      {bookDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === "details" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">Informações do Livro</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Editora:</span>
                          <span className="font-medium">{bookDetails.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Páginas:</span>
                          <span className="font-medium">{bookDetails.pages}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Idioma:</span>
                          <span className="font-medium">{bookDetails.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ISBN:</span>
                          <span className="font-medium">{bookDetails.isbn}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">Preços</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Comprar:</span>
                          <span className="text-2xl font-bold text-green-600">
                            R$ {bookDetails.salePrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Aluguel (30 dias):</span>
                          <span className="text-2xl font-bold text-blue-600">
                            R$ {bookDetails.rentalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "reviews" && (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{review.user}</h4>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full">
                      Ver mais avaliações
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <section className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Você também pode gostar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BookDetails;
