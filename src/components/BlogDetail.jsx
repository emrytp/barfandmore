import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

/**
 * Full blog content is stored in this object.
 * Each key matches a blog post route (ID).
 * title: Blog title
 * image: Banner image path
 * content: Multiline blog text, rendered as paragraphs
 */

const blogDetails = {
  "barfla-mutlu-kopekler": {
    title: "BARF’LA BESLENEN MUTLU VE SAĞLIKLI KÖPEKLER!",
    image: "/img/blog/blog1banner.jpg",
    content: `
BARF’la beslenen köpekler çok daha dayanıklı ve enerjik olurlar. Bunun temel sebebi başta enerji olmak üzere tüm besin ihtiyaçlarını avladıkları hayvanların etlerinden elde edebilecek şekilde evrimleşmiş olmalarıdır. Daha önce de belirtmiştiğimiz gibi tahıl ile beslenen köpeklerin kan ve şeker seviyelerinde oluşan dengesizlikler metabolizmalarını olumsuz etkiler.

Arka planında ciddi bir medikal problem olmamasına rağmen, kabızlık, ishal, kusma ve besinlerden yeteri kadar faydalanamama gibi sindirim problemleri, genellikle köpeklerin biyolojileriyle uyumsuz ve dengesiz gıdalarla beslenmelerinin sonucunda ortaya çıkar. BARF’la beslenmeye başlayan köpeklerde tüm bu problemler kısa süre içerisinde çözüldüğü gibi ağız kokuları ve kokusu azalır.

Çiğ beslenme, köpeklerin kas kütlelerini koruyarak sağlıklı bir şekilde zayıflamalarını ve ideal kilolarını muhafaza etmelerini sağlar. Bu konudaki sağlıklı çıkan bir şeker metabolizmasının çok büyük önemi vardır. Özellikle BARF ile beslenen köpeklerde insülin hassasiyeti çok az rastlandığı dair bilimsel makaleler mevcuttur.

Stres, anksiyete, agresyon ve birçok mental bozukluk BARF ile beslenen köpeklerde hemen hemen hiç görülmez. BARF, hayvan davranışlarını inceleyen akademisyenlerce de tamamlayıcı tedavi olarak önerilmektedir.

BARF, köpeklerin biyolojisine ve fizyolojisine en uygun beslenme şekli olduğundan dolayı bağışıklık sistemleri problemleri çiğ beslenen köpeklerde neredeyse hiç görülmez. Köpeğinizin sağlıklı ve parlak bir tüy yapısına kavuşmasına yardımcı olur. Deride kızarıklık, kaşıntı, dökülme gibi pütsü tüyleri problemler BARF’la beslenmeye başlayan köpeklerde eğer arka planında ciddi bir medikal problem yoksa kendiliğinden iyileşir.

BARF, köpeğinizin diş sağlığını da korur. Köpeklerde diş taşlarının, dişet enfeksiyonlarının, kötü ve rahatsız edici ağız kokusunun nedeni tamamen buğday bazlı, işlenmiş BARF’tan uzak mamalardır. BARF tamamen doğal olduğu için evcil hayvanlarınızın dişlerinde birikinti bırakmaz. BARF ile beslenen köpeklerde rastlanmaz. Unutulmamalı ki bir kurdun diş sağlığı demek onun hayatına mal olacaktır.

Veteriner Hekim Barış Kasmoğlu
    `
  },

  "alternatif-beslenme-olarak-barf": {
    title: "ALTERNATİF BESLENME YÖNTEMİ OLARAK “BARF”",
    image: "/img/blog/blog2banner.jpg",
    content: `
Yirminci yüzyılın başlarından itibaren köpekler ve kediler evcilleştirilmiş diğer hayvanlardan farklı olarak hiçbir çıkar gözetmeksizin ailelerimizin birer ferdi oldular. Bu da onların beslenme ve sağlık problemleriyle diğer evcil hayvanlara göre daha yakından ilgilenmemize sebep oldu. Bu ilginin artmasının bir sonucu olaraksa kocaman bir mama ve ilaç sektörü oluştu. Ancak 1970’li yılların sonuna doğru evrimsel biyoloji ve genetik alanındaki inanılmaz ilerlemelere bağlı olarak tüm evcil hayvanların beslenme alışkanlıkları da tekrar tartışılmaya başlandı.

1980 yılında Dr. Ian Billinghurst ticari mamaların hayvanlarda verdiği zararları inceleyip bir makale yayımladı; köpeklerin çiğ kemik ve et ile beslenmesinin daha doğru olduğu tezini ortaya koydu. Başlangıçta çok fazla ilgi görmeyen bu görüş, zaman içinde alternatif bir beslenme yöntemi olan BARF’ın ortaya çıkmasına öncülük etti.

BARF (Biologically appropriate raw food) ilk olarak 1990’lı yılların başında Avustralya, Yeni Zelanda, İngiltere, Kuzey Amerika ve Avrupa’da, evlerde ve çiftliklerde yaşayan kediler ve köpeklerde kullanıldı; sonuçlar mucizeviydi. Özellikle avlanma yeteneklerini tamamen kaybetmiş ya da modern çağda artık evrimsel biyolojilerine uygun gıdalara ulaşma şansı olmayan köpekler için tam ve dengeli bir gıda olan BARF son yıllarda ülkemizde de yaygınlaştı.

“Köpeklerin ataları olan kurtların doğal ortamlarındaki beslenme şekillerinin bir taklidi”

• Başlıca içeriği büyükbaş/kanatlı hayvan etlerinden kemik, kas içi ve organlarından oluşur. Az miktarda da köpeklerin tüketebileceği sebze ve diğer çiğ doğal besinleri içerir.  
• Bu diyet köpeklerin ataları olan kurtların doğal ortamlarındaki beslenme şekillerinin bir taklididir.  
• BARF’ın içeriğinde, bitki bazlı bazı gıdalar da tamamlayıcı olarak kullanılmalıdır.  
• BARF evde veya şehir içi şartlarında da hazırlanabileceği gibi, uzmanlarca hazırlanmış ticari BARF çeşitleri de mevcuttur.

Veteriner Hekim Barış Kasmoğlu
    `
  },

  "cig-beslenmenin-dogasina-yolculuk": {
    title: "ÇİĞ BESLENMENİN DOĞASINA DOĞRU BİR YOLCULUK",
    image: "/img/blog/blog3banner.jpg",
    content: `
Doğada özgür yaşayan kurtların düzenli bir beslenme programları yoktur. Bazı dönemlerde her gün yemek yiyebilirlerken bazı dönemlerde 4-5 gün aç kaldıkları zamanlar da olabilir. Kurtların diyetlerinin büyük bir kısmını et oluşturur, ancak kurtların hiçbir öğünü onların tam ve dengeli bir diyetine sahip değildir. Esas besin kaynakları avlarının etleri ve kemikleridir. Kurtlar için hayvanların karaciğeri ve kalpleri, depolanabilen A-D-E-K vitaminleri başta olmak üzere, önemli besin kaynaklarıdır. Kış aylarında toprağın altındaki donmuş karkasları bulup çıkartırlar. Çiğ yumurtaya bayılırlar. Çok aç kaldıklarında leş yiyebilirler. Bunların dışında böcek, ağaç kabuğu, toprak, kuş tüyleri ve kemikleri gibi şeyler de yerler. Hepsi çiğdir, katkısızdır. Kurtlar sadece et yerler.

Köpekler evcilleştirilmiş olsalar da sindirim sistemleri değişmemiştir. Bitkilerle beslenen hayvanlardaki gibi mikrobiyal enzimlere sahip değiller. Bitkisel proteinleri parçalamakta yetersizdirler. Günümüz mamalarında bulunan katkılar nedeniyle köpeklerde obezite, insülin direnci gibi sorunlar artmıştır. Bu mamalar vücutta yağa dönüşür. Bu yüzden doğal, katkısız, çiğ beslenme sistemleri önemlidir.

Veteriner Hekim Barış Kasmoğlu
    `
  },

  "hayvan-beslenme": {
    title: "HAYVANLARIN BESLENME ALIŞKANLIKLARI",
    image: "/img/blog/blog4banner.jpg",
    content: `
Hayvanların Beslenme Alışkanlıkları: Herbivorlar, Omnivorlar ve Karnivorlar

Beslenme alışkanlıkları bakımından sınıflandırdığımızda hayvanları 3 ana gruba ayırırız:

• Herbivorlar: Tamamen bitkilerle beslenen hayvanlardır. Sığır, koyun, geyik, fil gibi hayvanlar bu gruba girerler.  
• Omnivorlar: Hem bitkilerle hem de diğer hayvanların etleriyle beslenmek zorunda olan hayvanlardır. Ayı, fare, domuz, karga ve biz insanlar bu grupta yer alırız.  
• Karnivorlar: Diğer hayvanların etleriyle beslenen hayvanlardır. Tüm kedi türleri, kartal, yılan, kurt ve ondan türeyen tüm köpekler bu gruba girer.

Doğada tüm hayvanlar gibi kurtlar da hayatta kalabilmek için sağlıklı olmak zorundadır. Besin zincirinin en tepesinde olan bu hayvanların, avlanabilmek ve diğer yırtıcılardan kendilerini koruyabilmek için sağlıklı bir kemik yapısına ve atletik bir vücuda sahip olmaları gerekir. Avlanma yeteneklerini kaybeden ve diğer hayvanlara karşı kendilerini koruyamayan kurtların hayatta kalması mümkün değildir. Doğada yaşanan bu gerçeklik, evcilleşmiş sokak hayvanları ve ev köpekleri için geçerli olmasa da, doğdukları ve evrimle adapte oldukları yapının, modern beslenme sistemlerine uygunluk göstermemesi onların sağlık sorunlarıyla daha sık karşılaşmalarına sebep olmaktadır.

Evcil köpeklerimizle vahşi doğada yaşayan kurtlar arasında binlerce yıl geçmesine rağmen sindirim sistemleri aynı kalmıştır. Özellikle tahıl ağırlıklı diyetler, köpeklerin vücutlarına uygun değildir. Modern mamaların içeriğinde yer alan tahıllar, şeker oranı yüksek katkı maddeleri ve gliserin gibi maddeler köpeklerin sindirim sistemini zorlamakta ve başta obezite olmak üzere birçok hastalığa zemin hazırlamaktadır.  

Veteriner Hekim Barış Kasmoğlu
    `
  },

  "yapay-secilim": {
  title: "KÖPEKLER VE YAPAY SEÇİLİM",
  image: "/img/blog/blog5banner.jpg",
  content: `
Farklı Köpek Irklarının Ortaya Çıkışı: Yapay Seçilim

İnsanların kurtlara uyguladığı bu yöntem, aslında bir çeşit hızlandırılmış evrimdi. Doğada, değişen çevre şartlarına uyum sağlayabilen canlılar hayatta kalarak üreme şansı bulurlar. Buna "evrim" ya da "doğal seçilim" denir ve bu yolla yeni bir ırkın ya da türün oluşması milyonlarca yıl alabilir. İşte insanların kurtlarla veya diğer evcil hayvanlarla, kendi amaçlarına uygun fiziksel görünüş ve karaktere sahip canlılar oluşturmak için uyguladıkları bu yönteme de “yapay seçilim” adı verilir. Bu yöntem sayesinde 7-8 nesil sonra bile farklı bir ırk oluşturulabilir. Bugün 200’den fazla farklı köpek ırkı, kurtlardan yapay seçilim yoluyla evrimleştirilerek oluşturuldu ve hala bilinçli seçimlerle yeni ırklar oluşturulmaya devam ediliyor.

İnsanlar köpeklerin kendilerine en fiziksel özelliklerini yapay seçilim yoluyla kendi ihtiyaçlarını karşılayacak için değiştirdiler. Evlerini ve kendilerini korumak için güçlü ve saldırgan köpekler ürettiler. Sportif avcılıkta alanları tespit etmesi, yaralanan yere ulaşması ve avı yakalaması için atletik, hızlı koşan türler; köy işlerinde alanları, dükkân bekçisi olarak kullanılacak iri ırklar, süs köpeği olarak minyatür boyutlara sahip köpekler gibi farklı amaçlarla seçilimler sağladılar. Daha sonrasında, beslenme şekillerine göre farklı ırklar ortaya çıktı. Bazı türlerde yüz kasları küçültüldü, tüy yapısı değiştirildi, cüsse küçültüldü ya da artırıldı.

Yapay seçilimle birlikte köpeklerin sadece fiziksel değil, davranışsal özellikleri de değişti. İnsanlarla daha iyi iletişim kurabilmeleri için daha itaatkâr, evcilleşmiş yapılar seçildi. Ancak bu süreçte bazı doğal yeteneklerini kaybettiler. Örneğin birçok ev köpeği, kendi başına hayatta kalamaz hale geldi. Bu nedenle, beslenme alışkanlıkları da evrimsel kökenlerinden uzaklaştı.

Veteriner Hekim Barış Kasmoğlu
  `
},

"kopekler-nereden-geldi": {
  title: "KÖPEKLER NEREDEN GELDİ?",
  image: "/img/blog/blog6banner.jpg",
  content: `
Farklı Fiziksel Görünüşe ve Karaktere Sahip Kurtlar: Evcil Köpekler

Var olan tüm köpek ırklarının atası kurttur. Tam olarak bilinmemekle beraber, bulunan fosil kayıtları, modern köpeklerin 10.000 ile 50.000 yıl önce ortaya çıktıklarını göstermektedir. İlk insanlar tarım toplumlarını oluşturup yerleşik hayata geçmeden binlerce yıl önce, buzul çağında, hala avcı toplayıcı küçük gruplar halinde yaşarken, aynı yaşam alanını paylaştıkları kurtlarla tesadüfen de olsa sıra dışı bir ortaklık kurdular. Birbirine rakip bu iki tür arasındaki ilişki, aslında karşılıklı menfaate dayanan bir yakınlaşmadan ibaretti. İnsanlar avladıkları hayvanlardan artakalanları kurtlara vermeye başlayınca, kurtlar insan topluluklarına yakınlaşmaya başladı ve temel besin kaynakları bu artan et ve kemikler haline geldi. Köpeklerin bu ilkel ataları, insanların bu iyiliğini karşılıksız bırakmadı. Bazı kurtlar zaman içinde daha sakin ve ılımlı bir karakter geliştirdi ve insanlarla doğrudan fiziksel temas kurmaya başladılar. Koku duyuları ve algıları insanların çok daha üstün olduğu için gelen tehlikeleri önceden fark edebiliyorlar ve bu özellikleriyle insanlara avlarda yardım etmek için kullanıldılar.

Zamanla insanlar bu hayvanların üremelerini de kontrol etmeye başladılar. İlk etapta, bilinçli ya da bilinçsiz olarak, en yumuşak karakterli ve uyumlu olanların üremelerine izin verdiler. Daha sonrasında vücut yapısı, diş büyüklüğü, renk gibi özelliklere göre seçilen kurtların üremeleri teşvik edilerek değişik fiziksel görünüşe ve karaktere sahip kurtlar meydana geldi: Evcil Köpekler.

Veteriner Hekim Barış KASIMOĞLU
  `
},

"gunluk-gereksinimler": {
  title: "EVCİL DOSTUNUZUN GÜNLÜK GEREKSİNİMLERİ",
  image: "/img/blog/blog7banner.jpg",
  content: `
Köpek ve kedilerin besin maddeleri gereksinimleri; su, karbonhidratlar, yağlar, proteinler, enerji, vitaminler ve mineraller olarak sınıflandırılabilir.

Su: Normal koşullarda köpekler, tükettikleri kuru maddenin 2-3 katı suya ihtiyaç duyarlar. Diyare (ishal) durumlarında su ihtiyacının karşılanmasına önem verilmelidir. Bazı hastalıklarda (Diabetes mellitus ve insipidus gibi metabolizma hastalıkları ve içme sıklığı) hastalığın teşhisinde yardımcı olur. Köpeklerin yoğun egzersizden sonra aşırı miktarda soğuk su içmeleri önlenmelidir.

Karbonhidratlar: Ucuz bir enerji kaynağı olmalarından dolayı, kedi ve köpek diyetlerinin önemli bir kısmını oluştururlar. Kedi ve köpekler metabolizmaları enerji değeri ihtiyacını protein ve yağlardan da karşılayabilir fakat karbonhidrat, metabolizmanın önemli yanıdır. Özellikle gebeliğin son 1/3’lük döneminde çok yavruya gebe köpeklerde, günlük diyette karbonhidrat açlığı hipoglisemi ve ketozis gibi metabolik hastalıkları yol açmakta ve yavrunun yaşama gücünü azaltmaktadır.

Yağlar: Enerji kaynağıdırlar. Esansiyel yağ asitlerini içerirler (eksikliğinde deri ve tüy bozuklukları, böbrek fonksiyon bozuklukları, üreme ile ilgili bozukluklar), yemin lezzetini arttırır. Kedi ve köpeklerin metabolik enerji ihtiyaçlarını karşılarlar.

Proteinler: Köpek ve kedilerin protein gereksinmesini etkileyen birçok faktör (hayvanın yaşı, ırkı, gebelik, laktasyon, proteinin kalitesi ve içeriği ve enerji düzeyi) vardır. Kediler, diyetlerinde köpeklere göre daha fazla proteine ihtiyaç duyarlar. Çünkü vücutlarında protein depolanmaz.

Enerji: Vücut ısısının korunması, kas hareketleri, yapılan dokuların yenilenmesi, büyüme, süt ve tüy gibi hayvansal amaçlar için enerji kaynakları kullanılır. Köpek ve kedilerin vücut ağırlıklarına ve yaşına göre yeme içme enerji oranı bulunmaz. Bu durumda en enerji gereksinimlerinin hesaplanması kolaylaştırır. Erişkin kedilerdeki enerji oranı vücut ağırlığı başına 40 Kcal’dan 135 Kcal’a kadar değişmektedir. Bu yüzden köpeklerin enerji gereksinimleri arasında büyük farklılıklar vardır.
  `
},

"beslenme-bicimleri-faktorler": {
  title: "KÖPEK VE KEDİLERİN BESLENME BİÇİMLERİNE ETKİ EDEN FAKTÖRLER",
  image: "/img/blog/blog8banner.jpg",
  content: `
**Köpeklerde;**

• Irk ve vücut büyüklüğü (Büyük, orta, küçük ırklar)  
• Besleniş amacı (hobi, av, bekçilik, kızak, yarış)  
• Yaşamlarındaki değişik dönemler (erişkin, yavru, yaşlılık, gebelik ve laktasyon) olarak;

**Kedilerde;**

• Irk faktörü köpekler kadar önemli farklılık oluşturmaz.  
• Mizaç ve barındırıldıkları ortamın koşulları  
• Yaşamlarındaki değişik dönemler (erişkin, yavru, gebelik ve laktasyon) olarak sıralanabilir.
  `
},

"safha-beslenme": {
  title: "KÖPEKLERİN VE KEDİLERİN YAŞAMLARININ DEĞİŞİK SAFHALARINDA BESLENMELERİ",
  image: "/img/blog/blog9banner.jpg",
  content: `
**Erişkin Köpeklerin Beslenmesi:**  
Erişkin ve herhangi bir performans göstermeyen köpekler günde 1 öğün beslenirler. Tek öğünle beslenmenin; tüketiminin daha kolay kontrol edilmesi, iş kolaylığı ve dışkılama zamanının ayarlanabilmesi gibi avantajları vardır. Günde 2-3 öğün köpek maması ile besleme aşırı yem tüketimine yol açarak hayvanın yağlanmasına neden olabilir.

**Gebe Köpeklerin Beslenmesi:**  
9 hafta gelen gebelik süresinin ilk 6 haftasında gebe köpeğin fazladan beslenmesine gerek yoktur ancak köpeğin bu dönemde zayıflamasına da izin verilmemelidir. Gebeliğin 5-6. haftalarından itibaren ekstra bir mama değişikliği yapılmaksızın, günlük yiyecek miktarı her haftalık 10-15’lik dilimle doğuma kadar önceki miktarın %50’sine çıkarılır. Günlük verilen yiyecek miktarı 2-3 öğüne bölünerek yedirilmelidir. Gıdaların sindirilebilirliği yüksek olmalıdır. Özellikle gebeliğin son döneminde dış kapsamı yüksek gıdalar verilmemelidir.

**Laktasyondaki (Süt Verimi) Köpeklerin Beslenmesi:**  
Köpekler 2 ay kadar yavrularını emzirirler. Laktasyonun 3-6. haftası: süt veriminin en yüksek olduğu dönemdir. Bu dönemde enerji gereksinimi yaşama payının 2-3 katına çıkar. Laktasyon döneminde verilecek gıdaların; sindirilebilirliği, protein kalitesi ve lezzetliliğinin yüksek olması, vitamin ve mineraller bakımından yeterli olması gerekir. Bu dönemde ya da yavru köpeklerin ihtiyacını karşılamak amacıyla özel mama ürünleri vardır. Köpeklerin yoğun egzersizden sonra aşırı miktarda soğuk su içmeleri önlenmelidir.

**Yavru Köpeklerin Beslenmesi:**  
Yavru köpekler ilk 4 hafta sadece anne sütü ile beslenirler (günde 10-12 kez emzirilen anneleri). Anne sütünün verilemediği hallerde inek sütü dışındaki gıdalarla aşılama başlanmamalıdır. Bu amaçla günde 1-2 saat aralıklarla annelerin önerilen mama alternatifleri kullanılır. 6-8 haftalık yaşlarda tamamen sütten kesilebilirler; ancak bu kesim birdenbire yapılmamalıdır. Sütten kesme sürecinde aşamalı azaltma gerekir: 1. haftada gündüz öğün, sonraki 1-2 haftada 3-4 öğün şeklinde. 2-3 hafta içinde bu geçiş tamamlanır. İlk 4-6 ayda yüksek proteinli, enerji içeriği artırılmış mamalar verilmelidir. Kalsiyum, fosfor oranı önemlidir ve vücut koşullarından takip edilmelidir.

**Yaşlı Köpeklerin Beslenmesi:**  
İleri yaşlardaki köpekler sindirim ve metabolizma açısından zayıf, böbrek fonksiyonları yetersiz olabilir. Yaşlı köpeklerin diyetleri düşük kalorili, yüksek sindirilebilirlik ve antioksidan içeriği yüksek olmalıdır. Ayrıca eklemlerde kısıtlanma yapmaması gerekir.

**Erişkin Kedilerin Beslenmesi:**  
Kedilerin erişkin ağırlıkları arasında ırklara göre fazla bir farklılık görülmez (3-5 kg). Bu durumda kedilerin besin maddesi gereksinimlerinde çok farklılık yaratmaz. Ancak barındırıldıkları ortam, kedinin karakterine ve aktivitesine, içinde bulunduğu fizyolojik duruma ve yaşına göre besin madde ve enerji gereksinimi değişebilir. Kediler, karnivor (etçil) özelliklerini hala korumaktadırlar. Kediler ad libitum (tercih ettiklerinde sürekli yem ve su bulunacak şekilde) beslenmeye yatkındırlar ve bir günde az miktarlarda fakat çok sayıda öğün tercih etmektedirler.

**Kedilerin Gebelik ve Laktasyon Döneminde Beslenmeleri:**  
Köpeklerin vücut ağırlığı gebeliğin son 3 haftasında artarken, kedilerin gebeliği ilk haftasında artmaya başlar. 9 haftalık gebelik süresince, gebe kedinin canlı ağırlığı %40 oranında bir artış gösterir. Kazanılan bu ağırlığın %60’ı doğum sırasında, %40’ı ise doğumdan önceki süreçte yavrulara aktarılır. Gebelik ve laktasyondaki kediler için özel bir besleme programına gerek yoktur. Lezzetli, sindirilebilirliği ve protein kalitesi yüksek, vitamin ve mineraller bakımından dengeli bir diyetin ad libitum olarak verilmesi yeterli bir beslenme sağlar. İlk 2-4 haftadan itibaren yavru kediler de bu besinlerden faydalanır. Süt üretiminin artması genelde 3-4. haftada zirveye ulaşır.

**Yavru Kedilerin Beslenmesi:**  
Yavru kediler (80-140 gr doğarlar) ilk 4 hafta tamamen anne sütüne bağımlıdırlar. 4. haftada doğum ağırlığının 3 katına ulaşırlar. Bu yaştan sonra yavru kediler kuru mama tükettirilerek (kaynar, ince doğranmış etli su sulu gıdalarla) alıştırılmaya başlanmalıdır ancak sütten kesme birdenbire yapılmamalıdır. Erişkin bir kedinin günlük enerji ihtiyacı 70-90 kcal/kg canlı ağırlık iken yavrular için 260 kcal/kg enerjiye ihtiyaç duyar. Yavrular 6 aylık yaşta erişkin ağırlıklara yaklaşırlar. Bu yüzden yavru kediler, enerji ve protein gereksinmesine sahip olur. Yavru kedilerde, sindirilebilirliği ve kalitesi yüksek özel mamaların verilmesi lezzetli diyetler şeklinde önerilmelidir. Yavru kedilerin beslenmeleri ve vücut kondisyonları düzenli izlenmeli ve aşırı mama içeriği izin verilmemelidir.

**Veteriner Hekim Ömer KÜÇÜKAKÇALI**
  `
},

"uzak-durulmasi-gerekenler": {
  title: "EVCİL DOSTLARINIZIN UZAK DURMASI GEREKEN BESİNLER NELER?",
  image: "/img/blog/blog10banner.jpg",
  content: `
**Çikolata, Kahve ve Kafein**  
Kakao bazlı ürünler, evcil hayvanlarda gıda zehirlenmesine en sık karışan ve karın ağrıları gibi hafif problemlerden nöbet ve ölümcül sonuçlara neden olan riskli maddelerdir.

Araştırmacılar, çikolatanın evcil hayvanlar için toksik olan iki bileşik içerdiğini söyledi: teobromin ve kafein. Bu bileşikler hücresel süreçleri değiştirir ve hem merkezi sinir sisteminin hem de kalp kaslarının uyarılmasına sebep olur.

**Soğan ve Sarımsak**  
Soğan ve sarımsak gibi allium dehasındaki bitki türleri genellikle köpekleri ve kedileri hasta eder. Bu yaygın bileşenler, organosülfürik adı verilen bileşikleri içerir. Köpek veya kedi bir parça soğan bile yutarsa kanlarında tehlikeli değişikliklere neden olabilir.

**Üzüm ve Kuru Ürünleri**  
Kuru üzüm, kuru üzüm ve kuş üzümü hem çiğ hem de pişmiş formda köpeklerde böbrek yetmezliğine sebep olduğu bildirilmiştir.

Bununla birlikte, incelemeye göre, tüm köpekler bu yiyeceklere aynı tepkileri vermiyor.

**Süt ve Süt Ürünleri**  
Süt ve süt ürünleri içerdikleri bulunan laktoz kedi ve köpeklerin sindirim sistemleri tarafından tolere edilemez diğer bir sindirim sistemleri bu besinleri işleyemez.

Bu durum sonucunda da ishal başta olmak üzere halsizlik, uyuşukluk ve iştahsızlık gibi sağlık sorunları yaşayabilirler.
`
},

"barf-nedir": {
  title: "BARF NEDİR?",
  image: "/img/blog/blog11banner.jpg",
  content: `
**Barf'ın İçinde Neler Var?**

**Kemik**  
Kalsiyum ve fosfor açısından zengindir, dostunuzun ihtiyaç duyduğu protein, yağ ve minerallerle doludur. Barf Mamaları'nın içerisine eklemış olduğumuz kemik tozu sayesinde dostunuzun besinleri daha iyi yemesi ve sindirmesi sağlanır.

Kemikleri öğüterek kemik tozu hâline getirmek, mamamızı daha besleyici hâle getiriyor ve aynı zamanda bu sayede diş sorunlarını da önlemiş oluyoruz.

Evcil dostunuz yeteri kadar kalsiyum ve fosfor almazsa bu durum; zayıflamış dişlere, kırılgan kemiklere ve bir dizi sağlık sorununa yol açabilir.

**Yeşil Elma**  
Evcil dostlarımız için lezzetli ve sağlıklı bir atıştırmalık ve iyi bir besin kaynağıdır.

Evcil dostlarımızın kötü seviyelerini düşürüp sindirim sistemini güçlendiren ve can dostumuzun bağırsağında yaşayan iyi bakterilerle faydalı olan lifleri içerir. Bu sayede idrar sökücü, kabızlık giderici ve parazit önleyici roller üstlenen yeşil elma aynı zamanda böbreklerin temizlenmesinde önemli rol oynar.

Ayrıca canların nefesini tazeler ve diş sağlığına yardımcı olur. Yeşil elma, diş minesini aydınlatan doğal bir arıtma maddesi olan asitler içerir. Bağışıklık sistemini güçlendirdiği söylenen A vitamini sayesinde evcil dostunuzun tüylerinin daha sağlıklı hale gelir. Yeşil elma bol miktarda bulunan C vitamini, özellikle yavrularda kas ve kemik gelişimini sağlar.

**Bal Kabağı**  
Bal kabağı, lifli yapısı sayesinde dostlarımız için doğal bir mide yatıştırıcısı rolü üstlenir.

Evcil dostlarımızın ishal ve kabızlık başta olmak üzere tüm sindirim sorunlarına yardımcı olan bal kabağı aynı zamanda mide içerisindeki fazla suyun da giderilmesine yardımcı olur.

Bal kabağı sayesinde barf mamalarımız dostunuzun dişçiliğine konusunda rahatlatacaktır.

---

**BARF Diyeti**  
Bu noktada kadar BARF diyetine birçok farklı açıdan değinmekle birlikte içeriği ve bu içerikte bulunması gereken besin grupları ya da bunların oranlarıyla ilgili herhangi bir detay vermedik.

BARF diyeti dahilinde dostumuza vereceğimiz besin en temel hâliyle;

- **Proteinler:** Çiğ Kırmızı veya Beyaz Et, Balık, Sakatat (Belirli Periyotlarla Verilmeli)  
- **Yağlar:** Balık, Ayçiçek ve Zeytinyağları  
- **Vitamin ve Mineraller:** Taze Sebze ve Meyveler, Kemikler ve Yumurta Kabukları

Bu besin gruplarını ya da hangisinin ne şekilde bunların oranı ve detayı gibi bilgileri en net bir noktadır ve uzmanlar bu noktadaki tavsiyesi; 3 birim çiğ ete karşılık 1 birim taze meyve, sebze vb. besin gruplarının diyete dahil edilmesidir.

**Dolayısıyla;**

- %60 Çiğ Et (Kemiksiz etin yanında belirli bir miktar kemikli etin de eklenmesi tavsiye edilir.)  
- %20 Sebze, Meyve, Sakatat ve çeşitli mineral/vitamin halinde bir oranlama mümkündür.

---

**Barf Ne Kadar Tüketmeliyim?**  
Evcil dostlarımız barf mamadan ne kadar versek verelim hepsini tüketirler. Bu durumu kontrol etmek için öğünler ve günlük tüketilmeleri gereken miktar kontrol edilmelidir.

Öğünleri belirleyen en önemli unsur evcil dostumuzun kilosudur.

**Köpekler için günlük tüketim ölçüleri:**

- 2-4 aylık bir köpek, kilosunun %8-10 kadarı  
- 4-8 aylık bir köpek, kilosunun %6-6 kadarı  
- 8-12 aylık bir köpek, kilosunun %3-4 kadarı  
- Erişkin ve ideal kilodaki köpekler kilosunun %2-3 kadarı günlük tüketim için uygundur.

**Kediler için günlük tüketim ölçüleri:**

- 2-4 aylık bir kedi, kilosunun %10-13 kadarı  
- 4-8 aylık bir kedi, kilosunun %6-10 kadarı  
- 8-12 aylık bir kedi, kilosunun %3-6 kadarı  
- Yetişkin ve ideal kilodaki kediler için kilosunun %2-2.5 kadarı günlük tüketim için uygundur.  
- Yetişkin ve kilolu kediler ile kilosunun %1,5 kadarı, yetişkin ve zayıf kediler de kilosunun %3 kadarı tüketmelidir.
`
},

"deri-tumoru": {
  title: "EVCİL HAYVANLARDA DERİ TÜMÖRÜ TANISI VE TEDAVİ YÖNTEMLERİ",
  image: "/img/blog/blog12banner.jpg",
  content: `
**Deri ve Tüy Sağlığında Kontrol Sizde**  
Tümörler anormal olarak büyüme gösteren hücrelerdir. Tümörler, diğer organ doku tümörleri ile karşılaştırıldığında çoğu zaman daha erken fark edilmektedir. İç organ tümörlerinin görüntülenebilmesi ise genellikle klinik bulgular sonrasında, Check-Up’larda veya rastlantısal olarak başka bir problem bulunmaya çalışılırken ortaya çıkmaktadır. Deri tümörleri oyun oynarken, yıkama sırasında veya hekim muayenesinde herhangi anormal bir şişkinlik olduğu fark edilerek anlaşılabilir. Tabii ki her kitle tümör olarak değerlendirilmez. Travma, cisim batmaları veya enjeksiyon sonrası oluşabilecek şişkinlikler de oluşabilir.

Köpek veya kedimizin vücudunda herhangi bir anormali şişkinlik görüldüğü takdirde bir hekime danışmakta fayda vardır. Bu yapıların karakterinin belirlenmesi adına hekiminiz birkaç test veya inceleme yapabilir. Deri tümör şüphelerinde kitlenin tanısının koyulabilmesi adına genellikle ince iğne aspirasyon yöntemine başvurulur. Bu yöntem çoğu zaman anestezi gerektirmeyen bir yöntemdir. Hekim, kitlenin içeriğinden hücre toplayarak bu hücreleri boyadıktan sonra mikroskop altında inceler. Bu muayene sonucunda çoğu kitleler belirleyici veya ek tetkikler isteyebilir.

İleri yaşlarda görülen bazı iyi huylu tümörler ile uzun zaman operasyonel olarak yakalanmayabilir. İyi huylu tümörler yavaş büyür ve metastaz özelliği bulunmayan tümörlerdir. Fonksiyonel veya hastanın yaşam kalitesini bozmayan iyi huylu tümörlerde çoğu zaman müdahale edilmez. Hekiminiz sizi takip ve kontroller konusunda sizi Tümörün tipine göre bilgilendirecektir.

Tümörlerin tanısında palpasyon yöntemi ile el ile sertliğine veya yumuşaklığına bakarak yorum yapmak doğru değildir.

Genellikle tümör şüpheli hastalarımızda görüşülecek deri her hangi bir şüpheli durumda mutlaka hekim muayenesi gereklidir.  
Kötü karakterli oluşumlarda kitlenin karakteri ve erken müdahalesi oldukça kıymetlidir.

**Veteriner Hekim Erkan Yunus Tüfekçi**
  `
},

  "dogal-barf-beslenme": {
    title: "DOĞALARINA UYGUN, SAĞLIKLI BİR BESLENME BİÇİMİ: BARF",
    image: "/img/blog/blog13banner.jpg",
    content: `
Köpekler için BARF (Biologically Appropriate Raw Food) beslenme, doğalarına en uygun beslenme biçimidir. %75 hayvansal gıda ve %25 sebze grubu kullanılarak üretilir.

BARF mama, köpeklerin ihtiyaç duyduğu taurini gibi aminoasitleri doğal bir şekilde bünyesinde barındırır ve ek takviyelerle protein değeri yükseltilmiştir. Diğer mamalara kıyasla BARF beslenmede, köpeklerin **kalp fonksiyonlarından göz sağlığına kadar birçok açıdan onlara fayda sağlayan taurin**, yüksek ısı nedeniyle yok edilmeden doğal olarak mamaların içinde bulunur. Ayrıca BARF mama **içerdiği probiyotiklerle köpeklerin sindirim sistemini destekler**. Gerekli besinler hızlıca sindirilir ve enzim üretiminde fazla bir artışa sebep olmadan kolayca kana karışır.

Doğal yöntemlerle, hiçbir enzimatik reaksiyona sokulmadan, doğru saklama koşullarında çiğ olarak sunulan BARF mama, **köpeklerin doğasına uygun bir beslenme rejimidir.**

**Veteriner Hekim Ali Ergun Mer Dağlıkoca**
    `
  },

  "egitmen-tercihi-barf": {
    title: "KÖPEK EĞİTMENLERİNİN İLK TERCİHİ: BARF BESLENME",
    image: "/img/blog/blog14banner.jpg",
    content: `
Köpekler, doğaları gereği her zaman çiğ beslenen canlılar olmuşlardır. Günümüzde genellikle kuru mamalar tercih edilse de BARF beslenme köpeklerin doğalarına en uygun beslenme biçimidir. Bir yıl raf ömrü olan kuru mamalar yerine, köpekler BARF mamalar ile **hem daha sağlıklı hem daha mutlu** olacaklardır.

BARF ile beslenen köpeklerin fiziksel sağlığında birçok olumlu etki gözlemlenir. Örneğin, çiğ beslenen köpeklerin **tüy yapısının çok daha parlak ve sağlıklı** olduğu gözlemlenir ve **sindirim sistemleri daha iyi çalışır**. BARF ile beslenen köpeklerin sindirim sistemleri, aldıkları gıdayı kolayca sindirebildiği için kuru mamalarda olduğu gibi ihtiyaç duydukları besinler dışkı yoluyla atılmaz.

Kuru mama ile beslenen köpeklere bakıldığında karşılaşılan sorunlardan biri de çevrelerindeki ve etrafındaki kuru ve çiğ besinlere karşı çok büyük ilgilerinin olmamasıdır. Bunun sebebi ise doğalarına uygun beslenme biçimine sahip olmamalarıdır. Kuru mamalara kıyasla BARF ile beslenen köpeklerde **çevrelerinde bulunan besinlere ilgi ve isteklerinin olmadığı gözlemlenebilir.**

Bazen çiğ beslenmenin köpekleri vahşileştirebileceği yanılgısı oluşabilir. Çiğ beslenen köpekler, tam aksine, **beslenme alışkanlıkları doğalarına uygun olduğu için çok daha mutlu ve huzurlu** olurlar.

BARF beslenme rejimi, köpekler üzerinde gerek psikolojik gerekse fiziksel birçok olumlu etkiye sahiptir, **rahatlıkla köpeklerde çiğ beslenme tercih edilebilir.**

**Uzman Köpek Eğitmeni Çetin Erginoğlu**
    `
  }

};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogDetails[id];

  if (!post) {
    return (
      <div className="blog-detail">
        <h2>Yazı bulunamadı</h2>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-banner-img">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="blog-content-wrapper">
        {post.content.split("\n").map((line, i) =>
          line.trim() !== "" ? <p key={i}>{line.trim()}</p> : null
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
