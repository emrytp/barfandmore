import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const products = [
  { id: "tavuk-boyun-kopek-odul-mamasi", name: "Tavuk Boyun Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: false, description: "Tavuk Boyun Köpek Ödül Maması hiçbir kimyasal katkı maddesi içermez.", image: "/img/ürünler/pilic-boyun.jpg" },
  { id: "barf-beef-10kg", name: "10 kg (1000 Gr. Aç Bitir)", brand: "Barf Beef Premium", price: "₺1.620,00", stock: false, description: "Barf Beef Premium’un 10 kiloluk ambalajıdır.", image: "/img/ürünler/barf-beef-10kg.jpg" },
  { id: "barf-beef-13kg", name: "13 kg (1000 Gr. Aç Bitir)", brand: "Barf Beef Premium", price: "₺2.100,00", stock: false, description: "Barf Beef Premium’un 13 kiloluk ambalajıdır.", image: "/img/ürünler/barf-beef-13kg.jpg" },
  { id: "barf-beef-20kg", name: "20 kg (1000 Gr. Aç Bitir)", brand: "Barf Beef Premium", price: "₺2.940,00", stock: false, description: "Barf Beef Premium’un 20 kiloluk ambalajıdır.", image: "/img/ürünler/barf-beef-20kg.jpg" },
  { id: "ecomix-20kg-ac-bitir", name: "ECOMİX 20 kg (1000 Gr. Aç Bitir)", brand: "Barf Ecomix", price: "₺2.200,00", stock: false, description: "Barf Ecomix 20 kg Aç Bitir ürünüdür.", image: "/img/ürünler/ecomix-20kg.jpg" },
  { id: "ecomix-7kg-ac-bitir", name: "ECOMİX 7 kg (1000 Gr. Aç Bitir)", brand: "Barf Ecomix", price: "₺900,00", stock: false, description: "Barf Ecomix 7 kg Aç Bitir ürünüdür.", image: "/img/ürünler/ecomix-20kg.jpg" },
  { id: "ecomix-14kg-ac-bitir", name: "ECOMİX 14 kg (1000 Gr. Aç Bitir)", brand: "Barf Ecomix", price: "₺1.700,00", stock: false, description: "Barf Ecomix 14 kg Aç Bitir ürünüdür.", image: "/img/ürünler/ecomix-14kg.jpg" },
  { id: "ecomix-20kg-tekli", name: "ECOMİX 20 kg (1000 Gr. Tekli Ambalaj)", brand: "Barf Chick Premium", price: "₺1.725,00", stock: false, description: "Barf Chick Premium 20 kg Tekli Ambalaj.", image: "/img/ürünler/barf-chick-indirim-20-kg.jpg" },
  { id: "ecomix-10kg-tekli", name: "ECOMİX 10 kg (1000 Gr. Tekli Ambalaj)", brand: "Barf Chick Premium", price: "₺1.080,00", stock: false, description: "Barf Chick Premium 10 kg Tekli Ambalaj.", image: "/img/ürünler/barf-chick-indirim-10-kg.jpg" },
  { id: "tavuk-ayak", name: "Tavuk Ayak Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: true, description: "Doğal tavuk ayağından üretilmiştir.", image: "/img/ürünler/pilic-ayak.jpg" },
  { id: "dana-akciger", name: "Dana Akciğer Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: false, description: "Doğal dana akciğerinden üretilmiştir.", image: "/img/ürünler/dana-akciger.jpg" },
  { id: "dana-girtlak", name: "Dana Gırtlak Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: true, description: "Doğal dana gırtlağından üretilmiştir.", image: "/img/ürünler/dana-girtlak.jpg" },
  { id: "dana-kulak", name: "Dana Kulak Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: true, description: "Doğal dana kulağından üretilmiştir.", image: "/img/ürünler/dana-kulak.jpg" },
  { id: "kuzu-girtlak", name: "Kuzu Gırtlak Köpek Ödül Maması", brand: "Barf and More", price: "₺100,00", stock: true, description: "Doğal kuzu gırtlağından üretilmiştir.", image: "/img/ürünler/kuzu-girtlak.jpg" },
  { id: "kuzu-kulak", name: "Kuzu Kulak Köpek Ödül Maması", brand: "Barf and More", price: "₺120,00", stock: true, description: "Doğal kuzu kulağından üretilmiştir.", image: "/img/ürünler/kuzu-kulak.jpg" },
  { id: "kuzu-paca", name: "Kuzu Paça Köpek Ödül Maması", brand: "Barf and More", price: "₺90,00", stock: false, description: "Doğal kuzu paçasından üretilmiştir.", image: "/img/ürünler/kuzu-paca.jpg" },
  { id: "kedi-alay", name: "Kedi Alay Oyuncağı", brand: "Barf and More", price: "₺250,00", stock: true, description: "Eğlenceli kedi oyuncağı.", image: "/img/ürünler/kedi-alay-oyuncagi.jpg" },
  { id: "yaka-tutucu", name: "Silikonlu Köpek Yaka Tutucu", brand: "Barf and More", price: "₺300,00", stock: true, description: "Pratik köpek tasma tutucusu.", image: "/img/ürünler/yaka-tutcu.jpg" },
  { id: "woof-soda", name: "Peluş Gıcırtılı Köpek Oyuncağı", brand: "Barf and More", price: "₺800,00", stock: true, description: "Sevimli woof soda temalı oyuncak.", image: "/img/ürünler/woof-soda.jpg" },
  { id: "pizza-dilim", name: "Peluş Gıcırtılı Pizza Dilimi Köpek Oyuncağı", brand: "Barf and More", price: "₺800,00", stock: true, description: "Gıcırtılı peluş pizza oyuncak.", image: "/img/ürünler/pizza.jpg" },
  { id: "naylon-pembe", name: "Gıcırtılı Naylon Köpek Oyuncağı", brand: "Barf and More", price: "₺300,00", stock: true, description: "Pembe gıcırtılı naylon oyuncak.", image: "/img/ürünler/pembe.jpg" },
  { id: "naylon-oyuncak", name: "Gıcırtılı Naylon Köpek Oyuncağı", brand: "Barf and More", price: "₺300,00", stock: true, description: "Gıcırtılı naylon oyuncak.", image: "/img/ürünler/oyuncak.jpg" }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="product-detail-page">Ürün bulunamadı.</div>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-thumbnails">
          <img src={product.image} alt={product.name} />
          <p>{product.category}</p>
        </div>

        <div className="product-main-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h4>{product.brand}</h4>
          <h2>{product.name}</h2>
          <div className="product-price">{product.price}</div>
          <div className={`stock-status ${product.stock ? "in" : "out"}`}>
            {product.stock ? "STOKTA VAR" : "STOKTA YOK"}
          </div>
          <a
            className="whatsapp-button"
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP
          </a>
        </div>
      </div>

      <div className="product-description">
        <h3>Ürün Açıklaması</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
