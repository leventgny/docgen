## Giriş : Deneysel Proje Dökümantasyon Uygulaması

Sözkonusu içerik proje ve belge yönetimine dair bir test yazılımından oluşmaktadır.

Daha detaylı bilgiye ve yazılım projesini çalıştırma adımlarına aşağıdan ulaşabilirsiniz;

### Kullanılan Teknolojiler

- NodeJs // geliştirme ve temel uygulama ortamı
- NextJs // web tabanlı NodeJs geliştirme kütüphanesi
- ReactJs // web uygulaması geliştirme kütüphanesi
- MaterialUI // web tabanlı bileşen kütüphanesi
- Mongoose // MongoDB veritabanı kullanım kütüphanesi

### Google API Key

    file: .env
    GOOGLE_API_KEY=<GEÇERLİ_BİR_UYGULAMA_KODU>

### Geliştirme ortamı için

    ~$ npm install
    ~$ npm run dev


### Asıl çalışma ortamı için

    ~$ npm install
    ~$ npm run build
    ~$ npm start

Uygulamaya **localhost:3000** üzerinden ulaşabilirsiniz.