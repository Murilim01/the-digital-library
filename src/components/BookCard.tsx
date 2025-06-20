
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  salePrice: number;
  rentalPrice: number;
  rating: number;
  category: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Book Cover */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {book.category}
          </Badge>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          por {book.author}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Comprar</p>
              <p className="font-bold text-green-600">
                R$ {book.salePrice.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Alugar</p>
              <p className="font-bold text-blue-600">
                R$ {book.rentalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Comprar
          </Button>
          <Button variant="outline" className="w-full text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Alugar por 30 dias
          </Button>
        </div>

        {/* Quick View */}
        <Link to={`/book/${book.id}`}>
          <Button variant="ghost" className="w-full mt-2 text-sm text-gray-600 hover:text-blue-600">
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
