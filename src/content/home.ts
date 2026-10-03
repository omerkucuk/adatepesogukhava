import type { CoverageHub, FaqItem, Sector } from "@/types/content";

export const SECTORS: Sector[] = [
  { icon: "fish", title: "Su Ürünleri & Balıkçılık", description: "Tekne çıkışından işletmeye kesintisiz." },
  { icon: "apple", title: "Yaş Sebze, Meyve & Hasat", description: "Hasat döneminde esnek ek kapasite." },
  { icon: "milk", title: "Süt, Peynir & Şarküteri", description: "+2°C / +4°C hassas taze rejim." },
  { icon: "beef", title: "Et & Tavuk Entegre Tesisleri", description: "Donuk ve taze çift bölmeli taşıma." },
  { icon: "pill", title: "İlaç, Medikal & Kimya", description: "Doğrulanabilir sıcaklık kayıtları." },
  { icon: "utensils", title: "Otel, Restoran & Catering", description: "Etkinlik ve sezonluk depolama." },
];

export const COVERAGE_HUBS: CoverageHub[] = [
  {
    city: "Çanakkale",
    icon: "ship",
    areas: ["Merkez", "Biga", "Lapseki", "Gelibolu", "Ezine", "Ayvacık", "Bozcaada", "Gökçeada"],
  },
  {
    city: "Balıkesir",
    icon: "sprout",
    areas: ["Edremit Körfezi", "Ayvalık", "Bandırma", "Gönen", "Merkez"],
  },
];

export const HERO_STATS = [
  { value: "-20°C / +20°C", label: "Hassas sıcaklık kontrolü" },
  { value: "7/24", label: "IoT & GPS telemetri takibi" },
  { value: "Hızlı", label: "Sahada kurulum & esnek kiralama" },
] as const;

export const DASHBOARD_FEATURES = [
  {
    icon: "thermometer",
    title: "Gerçek zamanlı sıcaklık sensörleri",
    description: "Her ünite ve araçta 5 dakikalık aralıkla ölçüm ve kayıt.",
  },
  {
    icon: "door",
    title: "Kapı açılma takibi",
    description: "Yükleme/boşaltma sırasında sıcaklık kaybı anında görünür.",
  },
  {
    icon: "bell",
    title: "Anomali SMS & e-posta uyarısı",
    description: "Eşik aşımında saniyeler içinde operasyon ekibine bildirim.",
  },
  {
    icon: "file-check",
    title: "HACCP uyumlu raporlar",
    description: "Gıda güvenliği denetimleri için anında indirilebilir kayıt.",
  },
] as const satisfies readonly { icon: Sector["icon"]; title: string; description: string }[];

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Çanakkale ve Balıkesir'de hangi bölgelere soğuk zincir hizmeti veriyorsunuz?",
    answer:
      "Çanakkale Merkez, Biga, Ezine, Lapseki, Gelibolu, Ayvacık, Bozcaada ve Gökçeada ile Balıkesir Merkez, Edremit Körfezi, Ayvalık, Bandırma ve Gönen başta olmak üzere tüm Güney Marmara ve Kuzey Ege hattında hizmet veriyoruz.",
  },
  {
    question: "Mobil soğuk hava deposu kiralama fiyatları nasıl hesaplanır?",
    answer:
      "Fiyat; ünite tipi ve hacmi, sıcaklık rejimi (-18°C donuk, +4°C soğuk veya iklimlendirme), kiralama süresi ve kurulum lokasyonuna göre belirlenir. Sitedeki hesaplayıcı ile ön ihtiyacınızı çıkarıp WhatsApp üzerinden dakikalar içinde teklif alabilirsiniz.",
  },
  {
    question: "Hangi sıcaklık aralıklarında depolama ve taşıma yapabiliyorsunuz?",
    answer:
      "Mobil depolarımız -20°C ile +20°C, reefer konteynerlerimiz -25°C ile +25°C arasında ayarlanabilir. Dondurulmuş (-18°C / -20°C), taze ve soğuk (+2°C / +4°C) ve iklimlendirme (+10°C / +15°C) rejimlerinde hizmet veriyoruz.",
  },
  {
    question: "Kurulum ne kadar sürer ve sahada neye ihtiyaç var?",
    answer:
      "Düz bir zemin, araç erişimi ve uygun elektrik bağlantısı yeterlidir. Soğuk rejimde 12 saat, donuk rejimde 24 saat içinde ünite operasyona hazır hale gelir. Elektrik olmayan alanlar için jeneratör desteği sağlıyoruz.",
  },
  {
    question: "Sıcaklık takibi ve HACCP raporlaması yapıyor musunuz?",
    answer:
      "Tüm ünite ve araçlarımızda 7/24 IoT sensörleri bulunur. 5 dakikalık aralıklarla kayıt alınır, eşik aşımlarında SMS/e-posta alarmı gönderilir ve denetimler için HACCP uyumlu raporlar sunulur.",
  },
  {
    question: "Soğuk odam arızalandı, ne kadar hızlı destek alabilirim?",
    answer:
      "Acil durum hattımız 7/24 açıktır. Çanakkale ve çevresinde ortalama 4 saat içinde mobil depo veya frigorifik araçla sahada olup ürünlerinizi soğuk zinciri kırmadan güvenceye alıyoruz.",
  },
];
