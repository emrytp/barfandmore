import React, { useState } from "react";
import './Products.css';

const Products = () => {
  const [activeSort, setActiveSort] = useState("Fiyat artan");

  const sortOptions = [
    "Fiyat artan",
    "Fiyat azalan",
    "İndirim oranı artan",
    "İndirim oranı azalan",
    "İlk eklenen",
    "Son eklenen"
  ];

  const productElements = Array.from(document.querySelectorAll('.product-card'));

  const getPriceValue = (el) => {
    const priceText = el.querySelector('.product-price')?.textContent || "";
    return parseFloat(priceText.replace("₺", "").replace(".", "").replace(",", "."));
  };

  const sortedCards = () => {
    const container = document.querySelector('.product-grid');
    if (!container) return;

    const items = Array.from(container.children);

    let sorted;
    switch (activeSort) {
      case "Fiyat artan":
        sorted = items.sort((a, b) => getPriceValue(a) - getPriceValue(b));
        break;
      case "Fiyat azalan":
        sorted = items.sort((a, b) => getPriceValue(b) - getPriceValue(a));
        break;
      case "İlk eklenen":
        sorted = items.sort((a, b) => a.dataset.index - b.dataset.index);
        break;
      case "Son eklenen":
        sorted = items.sort((a, b) => b.dataset.index - a.dataset.index);
        break;
      default:
        sorted = items;
    }

    sorted.forEach((item) => container.appendChild(item));
  };

  React.useEffect(() => {
    sortedCards();
  }, [activeSort]);

  return (
    <div className="products-page">
      {/* Kategori */}
      <aside className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Ne aramıştınız?" />
        </div>

        <h3>Alt Kategoriler</h3>
        <ul>
          <li><a href="#">Barf ECOMIX Köpek Maması (3)</a></li>
          <li><a href="#">Barf Premium Köpek Maması (5)</a></li>
          <li><a href="#">Kedi Oyuncakları (1)</a></li>
          <li><a href="#">Kurutulmuş Köpek Ödülleri (8)</a></li>
          <li><a href="#">Köpek Aksesuarları (1)</a></li>
          <li><a href="#">Köpek Oyuncağı (4)</a></li>
        </ul>
      </aside>

      {/* Sıralama ve ürünler */}
      <div className="right-content">
        <div className="header">
          <h2>Barf ECOMIX Köpek Maması</h2>
          <span className="product-count">22 ürün</span>
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

        {/* Tüm ürünler tek grid içinde */}
        <div className="product-grid">
          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/pilic-boyun.jpg" alt="Piliç Boyun" />
            <h4>Barf and More</h4>
            <p className="product-name">Tavuk Boyun Köpek Ödül Maması</p>
            <p className="product-price">₺90.00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/barf-beef-10kg.jpg" alt="Beef 10kg" />
            <h4>Barf Beef Premium</h4>
            <p className="product-name">10 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺1.620,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/barf-beef-13kg.jpg" alt="Beef 13kg" />
            <h4>Barf Beef Premium</h4>
            <p className="product-name">13 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺2.100,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/barf-beef-20kg.jpg" alt="Beef 20kg" />
            <h4>Barf Beef Premium</h4>
            <p className="product-name">20 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺2.940,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/ecomix-20kg.jpg" alt="Ecomix 20kg" />
            <h4>Barf Ecomix</h4>
            <p className="product-name">ECOMİX 20 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺2.200,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/ecomix-20kg.jpg" alt="Ecomix 7kg" />
            <h4>Barf Ecomix</h4>
            <p className="product-name">ECOMİX 7 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺900,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/ecomix-14kg.jpg" alt="Ecomix 14kg" />
            <h4>Barf Ecomix</h4>
            <p className="product-name">ECOMİX 14 kg (1000 Gr. Aç Bitir)</p>
            <p className="product-price">₺1.700,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/barf-chick-indirim-20-kg.jpg" alt="Chick 20kg" />
            <h4>Barf Chick Premium</h4>
            <p className="product-name">ECOMİX 20 kg (1000 Gr. Tekli Ambalaj)</p>
            <p className="product-price">₺1.725,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/barf-chick-indirim-10-kg.jpg" alt="Chick 20kg" />
            <h4>Barf Chick Premium</h4>
            <p className="product-name">ECOMİX 10 kg (1000 Gr. Tekli Ambalaj)</p>
            <p className="product-price">₺1.080,00</p>
          </div>

          <div className="product-card">
            <img src="/img/ürünler/pilic-ayak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Tavuk Ayak Köpek Ödül Maması</p>
            <p className="product-price">₺90,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/dana-akciger.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Dana Akciğer Köpek Ödül Maması</p>
            <p className="product-price">₺90,00</p>
          </div>
                   
          <div className="product-card">
            <img src="/img/ürünler/dana-girtlak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Dana Gırtlak Köpek Ödül Maması</p>
            <p className="product-price">₺90,00</p>
          </div>
                    
          <div className="product-card">
            <img src="/img/ürünler/dana-kulak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Dana Kulak Köpek Ödül Maması</p>
            <p className="product-price">₺90,00</p>
          </div>
                 
          <div className="product-card">
            <img src="/img/ürünler/kuzu-girtlak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Kuzu Gırtlak Köpek Ödül Maması</p>
            <p className="product-price">₺100,00</p>
          </div>
                
          <div className="product-card">
            <img src="/img/ürünler/kuzu-kulak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Kuzu Kulak Köpek Ödül Maması</p>
            <p className="product-price">₺120,00</p>
          </div>

          <div className="product-card out-of-stock">
            <span className="sold-out-badge">Tükendi</span>
            <img src="/img/ürünler/kuzu-paca.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Kuzu Paça Köpek Ödül Maması</p>
            <p className="product-price">₺90,00</p>
          </div>

          <div className="product-card">
            <img src="/img/ürünler/kedi-alay-oyuncagi.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Kedi Alay Oyuncağı</p>
            <p className="product-price">₺250,00</p>
          </div>

          <div className="product-card">
            <img src="/img/ürünler/yaka-tutcu.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Silikonlu Köpek Yaka Tutucu</p>
            <p className="product-price">₺300,00</p>
          </div>

         <div className="product-card">
            <img src="/img/ürünler/woof-soda.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Peluş Gıcırtılı Köpek Oyuncağı</p>
            <p className="product-price">₺800,00</p>
          </div>

         <div className="product-card">
            <img src="/img/ürünler/pizza.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Peluş Gıcırtılı Pizza Dilimi Köpek Oyuncağı</p>
            <p className="product-price">₺800,00</p>
          </div>
        
         <div className="product-card">
            <img src="/img/ürünler/pembe.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Gıcırtılı Naylon Köpek Oyuncağı</p>
            <p className="product-price">₺300,00</p>
          </div>
 
         <div className="product-card">
            <img src="/img/ürünler/oyuncak.jpg" alt="Chick 20kg" />
            <h4>Barf and More</h4>
            <p className="product-name">Gıcırtılı Naylon Köpek Oyuncağı</p>
            <p className="product-price">₺300,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
