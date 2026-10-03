import type { BlogPost } from "@/types/content";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "soguk-zincir-nedir-neden-onemlidir",
    title: "Soğuk Zincir Nedir ve Neden Bu Kadar Önemlidir?",
    excerpt:
      "Üretimden tüketiciye kadar ürün sıcaklığının kesintisiz korunması; gıda güvenliği, raf ömrü ve marka itibarı için neden kritik?",
    category: "Temel Bilgiler",
    date: "2026-09-24",
    readMinutes: 6,
    sections: [
      {
        heading: "Soğuk zincirin tanımı",
        paragraphs: [
          "Soğuk zincir; ısıya duyarlı ürünlerin hasat, avlanma ya da üretim anından son tüketiciye ulaşana kadar belirlenen sıcaklık aralığında tutulmasını sağlayan depolama ve taşıma süreçlerinin bütünüdür.",
          "Zincirin herhangi bir halkasında yaşanan birkaç saatlik kopukluk, ürünün tamamen bozulmasına ya da gözle görülmeyen kalite kayıplarına yol açabilir.",
        ],
      },
      {
        heading: "Hangi ürünler soğuk zincir gerektirir?",
        paragraphs: ["Pek çok sektör soğuk zincire doğrudan bağımlıdır:"],
        bullets: [
          "Taze ve dondurulmuş deniz ürünleri",
          "Meyve, sebze ve taze kesme çiçekler",
          "Süt ve süt ürünleri, et ve şarküteri",
          "İlaç, aşı ve biyolojik ürünler",
        ],
      },
      {
        heading: "Kopukluğun maliyeti",
        paragraphs: [
          "Bozulan ürünün doğrudan maliyetinin yanında iade, imha, sözleşme cezaları ve itibar kaybı da hesaba katılmalıdır. Bu nedenle soğuk zincire yapılan yatırım, aslında bir sigorta niteliği taşır.",
        ],
      },
    ],
  },
  {
    slug: "mobil-soguk-hava-deposu-avantajlari",
    title: "Mobil Soğuk Hava Deposunun İşletmenize Kazandıracağı 7 Avantaj",
    excerpt:
      "Sabit depo yatırımı yapmadan, ihtiyaç duyduğunuz yerde ve sürede soğuk depolama kapasitesine sahip olmanın yolları.",
    category: "Mobil Depolama",
    date: "2026-09-18",
    readMinutes: 5,
    sections: [
      {
        heading: "Sermaye yerine esneklik",
        paragraphs: [
          "Sabit bir soğuk hava deposu kurmak; arsa, inşaat, izin ve soğutma ekipmanı için ciddi bir sermaye gerektirir. Mobil depolar ise kiralama modeliyle bu yükü operasyonel bir gidere dönüştürür.",
        ],
      },
      {
        heading: "Öne çıkan avantajlar",
        paragraphs: ["Mobil soğuk depoların sunduğu başlıca faydalar:"],
        bullets: [
          "Hasat ve av sezonuna göre kapasiteyi artırıp azaltabilme",
          "Ürünün kaynağında, tarlada veya limanda depolama",
          "Birkaç saat içinde sahada kurulum",
          "-20°C ile +20°C arası ayarlanabilir sıcaklık",
          "IoT ile uzaktan sıcaklık takibi",
          "Bakım ve arıza yükünün hizmet sağlayıcıda olması",
          "Sabit tesise göre çok daha düşük başlangıç maliyeti",
        ],
      },
    ],
  },
  {
    slug: "deniz-urunlerinde-soguk-zincir",
    title: "Deniz Ürünlerinde Soğuk Zincir: Tekneden Sofraya Tazelik",
    excerpt:
      "Balığın tazeliği ilk saatlerde belirlenir. Avlanmadan perakendeye kadar doğru sıcaklık yönetimi rehberi.",
    category: "Su Ürünleri",
    date: "2026-09-10",
    readMinutes: 7,
    sections: [
      {
        heading: "İlk saatlerin önemi",
        paragraphs: [
          "Balık avlandığı andan itibaren bozulma süreci başlar. Ürün ne kadar hızlı 0°C ile +2°C aralığına indirilirse raf ömrü o kadar uzar.",
          "Çanakkale ve Ege kıyılarındaki balıkçılar için limanda konumlanan mobil soğuk depolar, tekneden iner inmez ürünü güvenceye almanın en pratik yoludur.",
        ],
      },
      {
        heading: "Doğru sıcaklık rejimleri",
        paragraphs: [
          "Taze balık için 0°C / +2°C, dondurulmuş ürünler için ise -18°C ve altı önerilir. Buz ile soğutma kısa mesafede yeterli olsa da uzun transferlerde frigorifik araç şarttır.",
        ],
      },
    ],
  },
  {
    slug: "frigorifik-arac-secerken-dikkat-edilmesi-gerekenler",
    title: "Frigorifik Araç Seçerken Dikkat Edilmesi Gereken 6 Kriter",
    excerpt:
      "Kasa yalıtımından soğutma ünitesine, ATP belgesinden telemetriye kadar doğru aracı seçmenin püf noktaları.",
    category: "Filo",
    date: "2026-09-02",
    readMinutes: 5,
    sections: [
      {
        heading: "Kriterler",
        paragraphs: ["Taşıma hizmeti alırken şu noktaları mutlaka sorgulayın:"],
        bullets: [
          "ATP belgesi ve kasa sınıfı (FRC/FNA)",
          "Soğutma ünitesinin kapasitesi ve markası",
          "Sıcaklık kaydı ve GPS takibi olup olmadığı",
          "Kasa hacmi ve palet kapasitesi",
          "Araç ve ünitenin bakım geçmişi",
          "Arıza durumunda yedek araç garantisi",
        ],
      },
      {
        heading: "Telemetri neden şart?",
        paragraphs: [
          "Teslimat sonunda sunulan sıcaklık raporu, hem müşteriniz hem de denetimler karşısında en güçlü belgenizdir.",
        ],
      },
    ],
  },
  {
    slug: "meyve-sebzede-hasat-sonrasi-kayiplar",
    title: "Meyve ve Sebzede Hasat Sonrası Kayıpları Azaltmanın Yolları",
    excerpt:
      "Türkiye'de üretilen tarım ürünlerinin önemli bir kısmı hasat sonrası kayboluyor. Ön soğutma ve doğru depolama ile bu kaybı azaltın.",
    category: "Tarım",
    date: "2026-08-26",
    readMinutes: 6,
    sections: [
      {
        heading: "Tarla sıcaklığı düşmanınızdır",
        paragraphs: [
          "Yaz aylarında hasat edilen ürün tarlada 30°C'nin üzerinde ısıyı içinde taşır. Ön soğutma yapılmadan taşınan ürünün solunumu hızlanır, raf ömrü ciddi şekilde kısalır.",
        ],
      },
      {
        heading: "Pratik öneriler",
        paragraphs: ["Kayıpları azaltmak için:"],
        bullets: [
          "Hasadı serin saatlerde yapın",
          "Ürünü tarlada mobil depoda ön soğutmaya alın",
          "Ürüne özel nem ve sıcaklık değerlerini uygulayın",
          "Etilen hassasiyeti farklı ürünleri ayrı depolayın",
        ],
      },
    ],
  },
  {
    slug: "iot-ile-sicaklik-takibi",
    title: "IoT ile Sıcaklık Takibi: Soğuk Zincirde Dijital Dönüşüm",
    excerpt:
      "Sensörler, GPS ve anlık alarmlar sayesinde ürününüzün sıcaklığını cebinizden izleyin, riskleri oluşmadan önleyin.",
    category: "Teknoloji",
    date: "2026-08-19",
    readMinutes: 5,
    sections: [
      {
        heading: "Manuel kayıttan anlık veriye",
        paragraphs: [
          "Eskiden günde birkaç kez elle tutulan sıcaklık kayıtları, artık dakikalık ölçümlerle buluta aktarılıyor. Bu sayede sapmalar anında fark ediliyor.",
        ],
      },
      {
        heading: "Sağladığı faydalar",
        paragraphs: ["IoT tabanlı takip sistemleri:"],
        bullets: [
          "Eşik aşımında SMS ve e-posta alarmı gönderir",
          "Denetimler için otomatik rapor üretir",
          "Kapı açılma sürelerini kaydeder",
          "Araç konumunu canlı olarak gösterir",
        ],
      },
    ],
  },
  {
    slug: "etkinlik-ve-festivallerde-soguk-depolama",
    title: "Etkinlik ve Festivallerde Geçici Soğuk Depolama Rehberi",
    excerpt:
      "Düğün, festival ve organizasyonlarda yiyecek-içecek güvenliğini sağlamak için mobil soğutma nasıl planlanır?",
    category: "Etkinlik",
    date: "2026-08-11",
    readMinutes: 4,
    sections: [
      {
        heading: "Planlama aşaması",
        paragraphs: [
          "Etkinlikten önce misafir sayısı, menü ve içecek miktarına göre gerekli hacmi hesaplayın. Bir standart reefer konteyner, yüzlerce kişilik bir organizasyonun ihtiyacını rahatlıkla karşılar.",
        ],
      },
      {
        heading: "Kurulum ve enerji",
        paragraphs: [
          "Mobil depolar için uygun zemin ve elektrik bağlantısı gerekir. Elektrik olmayan alanlarda jeneratör desteği planlanmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "ilac-ve-asi-lojistiginde-gdp",
    title: "İlaç ve Aşı Lojistiğinde İyi Dağıtım Uygulamaları (GDP)",
    excerpt:
      "+2°C / +8°C aralığında taşınması gereken ilaçlar için mevzuat, validasyon ve kayıt gereklilikleri.",
    category: "İlaç",
    date: "2026-08-04",
    readMinutes: 6,
    sections: [
      {
        heading: "GDP nedir?",
        paragraphs: [
          "İyi Dağıtım Uygulamaları, ilaçların depolanması ve taşınması sırasında kalitesinin korunmasını güvence altına alan kurallardır.",
        ],
      },
      {
        heading: "Temel gereklilikler",
        paragraphs: ["Uyumlu bir taşıma için:"],
        bullets: [
          "Kalibre edilmiş sıcaklık sensörleri",
          "Sıcaklık haritalaması yapılmış araç ve depo",
          "Kesintisiz kayıt ve sapma prosedürleri",
          "Eğitimli personel",
        ],
      },
    ],
  },
  {
    slug: "soguk-zincirde-enerji-verimliligi",
    title: "Soğuk Zincirde Enerji Verimliliği: Maliyetleri Düşürmenin 5 Yolu",
    excerpt:
      "Soğutma enerjisi, soğuk depo işletmelerinin en büyük gider kalemlerinden biri. Küçük önlemlerle büyük tasarruf mümkün.",
    category: "Verimlilik",
    date: "2026-07-28",
    readMinutes: 4,
    sections: [
      {
        heading: "Tasarruf önerileri",
        paragraphs: ["Enerji tüketimini azaltmak için:"],
        bullets: [
          "Kapı açma sürelerini en aza indirin, şerit perde kullanın",
          "Depoyu doğru doluluk oranında çalıştırın",
          "Kondenser bakımlarını düzenli yaptırın",
          "Konteyneri doğrudan güneş almayan alana konumlayın",
          "Ürünü depoya önceden soğutulmuş olarak alın",
        ],
      },
    ],
  },
  {
    slug: "canakkale-balikesir-tarim-ve-soguk-zincir",
    title: "Çanakkale ve Balıkesir'de Tarım, Balıkçılık ve Soğuk Zincir Potansiyeli",
    excerpt:
      "Marmara ve Ege'nin kesişimindeki bu iki il, zengin üretimiyle soğuk zincir altyapısına her geçen gün daha fazla ihtiyaç duyuyor.",
    category: "Bölge",
    date: "2026-07-20",
    readMinutes: 5,
    sections: [
      {
        heading: "Zengin bir üretim havzası",
        paragraphs: [
          "Çanakkale; domates, şeftali, kiraz ve deniz ürünleriyle; Balıkesir ise süt ürünleri, zeytin ve Ayvalık-Edremit kıyılarındaki balıkçılıkla öne çıkıyor.",
        ],
      },
      {
        heading: "Altyapı ihtiyacı",
        paragraphs: [
          "Sezonluk üretim zirveleri sabit depo kapasitesini aşıyor. Mobil soğuk depolar ve frigorifik araç filoları, bu dalgalanmayı karşılamanın en esnek çözümü olarak bölgede hızla yaygınlaşıyor.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
