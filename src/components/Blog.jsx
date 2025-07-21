// blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const blogPosts = [
  {
    id: "barfla-mutlu-kopekler",
    image: "/img/blog/blog1.png",
    title: "BARF’LA BESLENEN MUTLU VE SAĞLIKLI KÖPEKLER!",
    description: "BARF’la beslenen köpekler çok daha dayanıklı ve enerjik olurlar. Bunun temel sebebi...",
  },
  {
    id: "alternatif-beslenme-olarak-barf",
    image: "/img/blog/blog2.png",
    title: "ALTERNATİF BESLENME YÖNTEMİ OLARAK 'BARF'",
    description: "Yirminci yüzyılın başlarından itibaren köpekler ve kediler evcilleştirilmiş diğer hayvanlardan farklı olarak hiçbir çıkar...",
  },
  {
    id: "cig-beslenmenin-dogasina-yolculuk",
    image: "/img/blog/blog3.png",
    title: "ÇİĞ BESLENMENİN DOĞASINA DOĞRU BİR YOLCULUK",
    description: "Doğada özgür yaşayan kurtların düzenli bir beslenme programları yoktur. Bazı dönemlerde ...",
  },
  {
    id: "hayvan-beslenme",
    image: "/img/blog/blog4.png",
    title: "HAYVANLARIN BESLENME ALIŞKANLIKLARI",
    description: "Doğada tüm hayvanlar gibi kurtlar da hayatta kalabilmek için sağlıklı olmak zorundadır...",
  },
  {
    id: "yapay-secilim",
    image: "/img/blog/blog5.png",
    title: "KÖPEKLER VE YAPAY SEÇİLİM",
    description: "İnsanların kurtlara uyguladığı bu yöntem, aslında bir çeşit hızlandırılmış evrimdi...",
  },
  {
    id: "kopekler-nereden-geldi",
    image: "/img/blog/blog6.png",
    title: "KÖPEKLER NEREDEN GELDİ?",
    description: "Var olan tüm köpek ırklarının atası kurttur. Tam olarak bilinmemekle beraber...",
  },
  {
    id: "gunluk-gereksinimler",
    image: "/img/blog/blog7.png",
    title: "EVCİL DOSTUNUZUN GÜNLÜK GEREKSİNİMLERİ",
    description: "Köpek ve kedilerin besin maddeleri gereksinimleri; su, karbonhidratlar...",
  },
  {
    id: "beslenme-bicimleri-faktorler",
    image: "/img/blog/blog8.png",
    title: "KÖPEK VE KEDİLERİN BESLENME BİÇİMLERİNE ETKİ EDEN FAKTÖRLER",
    description: "Irk ve vücut (büyük, orta, küçük ırk)...",
  },
  {
    id: "safha-beslenme",
    image: "/img/blog/blog9.png",
    title: "KÖPEKLERİN VE KEDİLERİN YAŞAMLARININ DEĞİŞİK SAFHALARINDA BESLENMELERİ",
    description: "Erişkin ve herhangi bir performans göstermeyen köpekler ...",
  },
  {
    id: "uzak-durulmasi-gerekenler",
    image: "/img/blog/blog10.png",
    title: "EVCİL DOSTLARINIZIN UZAK DURMASI GEREKEN BESİNLER NELER?",
    description: "Kakao bazlı ürünler, evcil hayvanlarda gıda zehirlenmesine en sık karışan...",
  },
  {
    id: "barf-nedir",
    image: "/img/blog/blog11.png",
    title: "BARF NEDİR?",
    description: "Kalsiyum ve fosfor açısından zengindir, dostunuzun ihtiyacı duyduğu protein, yağ...",
  },
  {
    id: "deri-tumoru",
    image: "/img/blog/blog12.png",
    title: "EVCİL HAYVANLARDA DERİ TÜMÖRÜ TANISI VE TEDAVİ YÖNTEMLERİ",
    description: "Tümörler anormal olarak büyüme gösteren hücrelerdir...",
  },
  {
    id: "dogal-barf-beslenme",
    image: "/img/blog/blog13.png",
    title: "DOĞALARINA UYGUN, SAĞLIKLI BİR BESLENME BİÇİMİ: BARF",
    description: "Köpekler için BARF (Biologically Appropriate Raw Food) beslenme...",
  },
  {
    id: "egitmen-tercihi-barf",
    image: "/img/blog/blog14.png",
    title: "KÖPEK EĞİTMENLERİNİN İLK TERCİHİ: BARF BESLENME",
    description: "Köpekler, doğaları gereği her zaman çiğ beslenen canlılar olmuşlardır...",
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
            <span className="read-more">DEVAMINI OKU</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
