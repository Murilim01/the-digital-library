
import { useState } from "react";
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";

// Extended mock data
const allBooks = [
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
  },
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

const categories = [
  "Todas as Categorias",
  "Fantasia",
  "Ficção Científica",
  "Literatura Brasileira",
  "Infantil",
  "História",
  "Autoajuda",
  "Desenvolvimento Pessoal",
  "Finanças"
];

const Catalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todas as Categorias");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = allBooks.filter(book => {
    if (selectedCategory === "Todas as Categorias") return true;
    return book.category === selectedCategory;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.salePrice - b.salePrice;
      case "price-high":
        return b.salePrice - a.salePrice;
      case "rating":
        return b.rating - a.rating;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Catálogo de Livros</h1>
          <p className="text-gray-600">Descubra milhares de títulos para comprar ou alugar</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filtros</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  ×
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categoria</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        checked={selectedCategory === category}
                        onCheckedChange={() => setSelectedCategory(category)}
                      />
                      <label className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Faixa de Preço</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input 
                      type="number" 
                      placeholder="Min" 
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                      className="text-sm"
                    />
                    <span>até</span>
                    <Input 
                      type="number" 
                      placeholder="Max" 
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Tipo</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <label className="text-sm">Venda</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <label className="text-sm">Aluguel</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <label className="text-sm">Gratuito</label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Aplicar Filtros
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  
                  <span className="text-sm text-gray-600">
                    {sortedBooks.length} livros encontrados
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevância</SelectItem>
                      <SelectItem value="price-low">Menor Preço</SelectItem>
                      <SelectItem value="price-high">Maior Preço</SelectItem>
                      <SelectItem value="rating">Avaliação</SelectItem>
                      <SelectItem value="title">A-Z</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Books Grid/List */}
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }>
              {sortedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12 space-x-2">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
