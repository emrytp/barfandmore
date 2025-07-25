import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import './Products.css';
import Header from "./Header.jsx";

/**
 * Products component: filters, searches, sorts and lists products.
 * - Uses useMemo to optimize filtering/sorting performance.
 * - Handles category selection and out-of-stock labels.
 * - Navigates to detail page when a product is clicked.
 */
const Products = () => {
  const navigate = useNavigate();

  const [activeSort, setActiveSort] = useState("Fiyat artan");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Sorting options
  const sortOptions = ["Fiyat artan", "Fiyat azalan", "İlk eklenen", "Son eklenen"];

  // Category filters
  const categoryOptions = [
    "Tümü",
    "Barf ECOMIX Köpek Maması",
    "Barf Premium Köpek Maması",
    "Kedi Oyuncakları",
    "Kurutulmuş Köpek Ödülleri",
    "Köpek Aksesuarları",
    "Köpek Oyuncağı"
  ];

  // Static product list (can be moved to external file or fetched via API later)
  const products = [
    { id: "tavuk-boyun-kopek-odul-mamasi", img: "pilic-boyun.jpg", name: "Tavuk Boyun Köpek Ödül Maması", price: "₺90,00", brand: "Barf and More", stock: false, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "barf-beef-10kg", img: "barf-beef-10kg.jpg", name: "10 kg (1000 Gr. Aç Bitir)", price: "₺1.620,00", brand: "Barf Beef Premium", stock: false, category: "Barf Premium Köpek Maması" },
    { id: "barf-beef-13kg", img: "barf-beef-13kg.jpg", name: "13 kg (1000 Gr. Aç Bitir)", price: "₺2.100,00", brand: "Barf Beef Premium", stock: false, category: "Barf Premium Köpek Maması" },
    { id: "barf-beef-20kg", img: "barf-beef-20kg.jpg", name: "20 kg (1000 Gr. Aç Bitir)", price: "₺2.940,00", brand: "Barf Beef Premium", stock: false, category: "Barf Premium Köpek Maması" },
    { id: "ecomix-20kg-ac-bitir", img: "ecomix-20kg.jpg", name: "ECOMİX 20 kg (1000 Gr. Aç Bitir)", price: "₺2.200,00", brand: "Barf Ecomix", stock: false, category: "Barf ECOMIX Köpek Maması" },
    { id: "ecomix-7kg-ac-bitir", img: "ecomix-20kg.jpg", name: "ECOMİX 7 kg (1000 Gr. Aç Bitir)", price: "₺900,00", brand: "Barf Ecomix", stock: false, category: "Barf ECOMIX Köpek Maması" },
    { id: "ecomix-14kg-ac-bitir", img: "ecomix-14kg.jpg", name: "ECOMİX 14 kg (1000 Gr. Aç Bitir)", price: "₺1.700,00", brand: "Barf Ecomix", stock: false, category: "Barf ECOMIX Köpek Maması" },
    { id: "ecomix-20kg-tekli", img: "barf-chick-indirim-20-kg.jpg", name: "ECOMİX 20 kg (Tekli Ambalaj)", price: "₺1.725,00", brand: "Barf Chick Premium", stock: false, category: "Barf Premium Köpek Maması" },
    { id: "ecomix-10kg-tekli", img: "barf-chick-indirim-10-kg.jpg", name: "ECOMİX 10 kg (Tekli Ambalaj)", price: "₺1.080,00", brand: "Barf Chick Premium", stock: false, category: "Barf Premium Köpek Maması" },
    { id: "tavuk-ayak", img: "pilic-ayak.jpg", name: "Tavuk Ayak Köpek Ödül Maması", price: "₺90,00", brand: "Barf and More", stock: true, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "dana-akciger", img: "dana-akciger.jpg", name: "Dana Akciğer", price: "₺90,00", brand: "Barf and More", stock: false, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "dana-girtlak", img: "dana-girtlak.jpg", name: "Dana Gırtlak", price: "₺90,00", brand: "Barf and More", stock: true, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "dana-kulak", img: "dana-kulak.jpg", name: "Dana Kulak", price: "₺90,00", brand: "Barf and More", stock: true, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "kuzu-girtlak", img: "kuzu-girtlak.jpg", name: "Kuzu Gırtlak", price: "₺100,00", brand: "Barf and More", stock: true, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "kuzu-kulak", img: "kuzu-kulak.jpg", name: "Kuzu Kulak", price: "₺120,00", brand: "Barf and More", stock: true, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "kuzu-paca", img: "kuzu-paca.jpg", name: "Kuzu Paça", price: "₺90,00", brand: "Barf and More", stock: false, category: "Kurutulmuş Köpek Ödülleri" },
    { id: "kedi-alay-oyuncagi", img: "kedi-alay-oyuncagi.jpg", name: "Kedi Alay Oyuncağı", price: "₺250,00", brand: "Barf and More", stock: true, category: "Kedi Oyuncakları" },
    { id: "yaka-tutucu", img: "yaka-tutcu.jpg", name: "Silikonlu Yaka Tutucu", price: "₺300,00", brand: "Barf and More", stock: true, category: "Köpek Aksesuarları" },
    { id: "woof-soda", img: "woof-soda.jpg", name: "Peluş Gıcırtılı Soda", price: "₺800,00", brand: "Barf and More", stock: true, category: "Köpek Oyuncağı" },
    { id: "pizza-dilim", img: "pizza.jpg", name: "Peluş Pizza Oyuncağı", price: "₺800,00", brand: "Barf and More", stock: true, category: "Köpek Oyuncağı" },
    { id: "naylon-pembe", img: "pembe.jpg", name: "Gıcırtılı Naylon (Pembe)", price: "₺300,00", brand: "Barf and More", stock: true, category: "Köpek Oyuncağı" },
    { id: "naylon-oyuncak", img: "oyuncak.jpg", name: "Gıcırtılı Naylon Oyuncak", price: "₺300,00", brand: "Barf and More", stock: true, category: "Köpek Oyuncağı" }
  ];

  // Converts price string like "₺1.500,00" to 1500.00
  const parsePrice = (priceStr) =>
    parseFloat(priceStr.replace("₺", "").replace(/\./g, "").replace(",", "."));

  // Filter and sort logic memoized for performance
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "Tümü") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (activeSort) {
      case "Fiyat artan":
        return filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "Fiyat azalan":
        return filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "Son eklenen":
        return filtered.reverse();
      case "İlk eklenen":
      default:
        return filtered;
    }
  }, [products, searchTerm, activeSort, selectedCategory]);

  return (
    <>
      <Header />
      <div className="products-page">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Ne aramıştınız?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h3>Alt Kategoriler</h3>
          <ul>
            {categoryOptions.map((cat, i) => (
              <li key={i}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "14px",
                    cursor: "pointer",
                    color: selectedCategory === cat ? "#d62828" : "#222",
                    fontWeight: selectedCategory === cat ? "bold" : "normal"
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product content */}
        <div className="right-content">
          <div className="category-title">
            <h2>{selectedCategory === "Tümü" ? "Barf ECOMIX Köpek Maması" : selectedCategory}</h2>
            <span className="product-count">{filteredProducts.length} ürün</span>
          </div>

          <div className="sort-tabs">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                className={activeSort === option ? "active" : ""}
                onClick={() => setActiveSort(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className={`product-card${!product.stock ? " out-of-stock" : ""}`}
                onClick={() => navigate(`/urun/${product.id}`)}
              >
                {!product.stock && <span className="sold-out-badge">Tükendi</span>}
                <img src={`/img/ürünler/${product.img}`} alt={product.name} />
                <h4>{product.brand}</h4>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
