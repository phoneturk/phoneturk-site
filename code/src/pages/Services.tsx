import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Globe, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Menu,
  X,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceCategories = [
    {
      id: 'software',
      title: 'Yazılım Geliştirme',
      icon: <Code className="w-6 h-6" />,
      description: 'Modern teknolojilerle özel yazılım çözümleri',
      services: [
        {
          title: 'Web Uygulamaları',
          description: 'React, Vue.js, Angular ile modern web uygulamaları',
          features: ['Responsive Tasarım', 'PWA Desteği', 'API Entegrasyonu', 'SEO Optimizasyonu'],
          price: '15.000₺ - 50.000₺',
          duration: '4-12 hafta'
        },
        {
          title: 'Backend Sistemler',
          description: 'Ölçeklenebilir ve güvenli backend çözümleri',
          features: ['RESTful API', 'Mikroservis Mimarisi', 'Veritabanı Tasarımı', 'Cloud Deployment'],
          price: '20.000₺ - 75.000₺',
          duration: '6-16 hafta'
        },
        {
          title: 'E-Ticaret Platformları',
          description: 'Kapsamlı online satış platformları',
          features: ['Ödeme Entegrasyonu', 'Stok Yönetimi', 'Admin Paneli', 'Mobil Uyumlu'],
          price: '25.000₺ - 100.000₺',
          duration: '8-20 hafta'
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobil Uygulamalar',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'iOS ve Android platformları için native ve cross-platform uygulamalar',
      services: [
        {
          title: 'Native iOS/Android',
          description: 'Platform özel performans ve özellikler',
          features: ['Swift/Kotlin', 'Platform API\'leri', 'App Store Optimizasyonu', 'Push Notifications'],
          price: '30.000₺ - 120.000₺',
          duration: '10-24 hafta'
        },
        {
          title: 'React Native',
          description: 'Cross-platform mobil uygulama geliştirme',
          features: ['Tek Kod Tabanı', 'Hızlı Geliştirme', 'Native Performans', 'Hot Reload'],
          price: '20.000₺ - 80.000₺',
          duration: '8-18 hafta'
        },
        {
          title: 'Flutter Uygulamaları',
          description: 'Google\'ın modern UI toolkit\'i ile geliştirme',
          features: ['Dart Dili', 'Widget Tabanlı', 'Hızlı Rendering', 'Cross-Platform'],
          price: '25.000₺ - 90.000₺',
          duration: '8-20 hafta'
        }
      ]
    },
    {
      id: 'ai',
      title: 'Yapay Zeka Sistemleri',
      icon: <Brain className="w-6 h-6" />,
      description: 'AI destekli akıllı çözümler ve otomasyon sistemleri',
      services: [
        {
          title: 'Makine Öğrenmesi',
          description: 'Veri analizi ve tahmin modelleri',
          features: ['Veri Analizi', 'Tahmin Modelleri', 'Anomali Tespiti', 'Otomatik Karar Verme'],
          price: '40.000₺ - 150.000₺',
          duration: '12-30 hafta'
        },
        {
          title: 'Doğal Dil İşleme',
          description: 'Metin analizi ve chatbot sistemleri',
          features: ['Sentiment Analizi', 'Chatbot Geliştirme', 'Dil Çevirisi', 'Metin Sınıflandırma'],
          price: '35.000₺ - 120.000₺',
          duration: '10-25 hafta'
        },
        {
          title: 'Görüntü İşleme',
          description: 'Computer vision ve görsel analiz çözümleri',
          features: ['Nesne Tanıma', 'Yüz Tanıma', 'OCR Sistemleri', 'Kalite Kontrol'],
          price: '45.000₺ - 180.000₺',
          duration: '14-35 hafta'
        }
      ]
    },
    {
      id: 'erp',
      title: 'ERP & CRM Sistemleri',
      icon: <Database className="w-6 h-6" />,
      description: 'İşletmenizi dijitalleştiren entegre yönetim sistemleri',
      services: [
        {
          title: 'Kurumsal Kaynak Planlaması',
          description: 'Tüm iş süreçlerini entegre eden ERP sistemi',
          features: ['Finansal Yönetim', 'İnsan Kaynakları', 'Stok Yönetimi', 'Raporlama'],
          price: '50.000₺ - 200.000₺',
          duration: '16-40 hafta'
        },
        {
          title: 'Müşteri İlişkileri Yönetimi',
          description: 'Müşteri süreçlerini optimize eden CRM sistemi',
          features: ['Lead Yönetimi', 'Satış Takibi', 'Müşteri Analizi', 'Kampanya Yönetimi'],
          price: '30.000₺ - 100.000₺',
          duration: '10-24 hafta'
        },
        {
          title: 'İş Süreçleri Otomasyonu',
          description: 'Workflow ve süreç yönetimi sistemleri',
          features: ['Süreç Tasarımı', 'Onay Mekanizmaları', 'Görev Yönetimi', 'Performans Takibi'],
          price: '25.000₺ - 80.000₺',
          duration: '8-20 hafta'
        }
      ]
    },
    {
      id: 'web',
      title: 'Web Sitesi Yapımı',
      icon: <Globe className="w-6 h-6" />,
      description: 'Modern, responsive ve SEO uyumlu web siteleri',
      services: [
        {
          title: 'Kurumsal Web Siteleri',
          description: 'Profesyonel kurumsal kimlik ve sunum',
          features: ['Responsive Tasarım', 'CMS Entegrasyonu', 'SEO Optimizasyonu', 'Hız Optimizasyonu'],
          price: '8.000₺ - 25.000₺',
          duration: '3-8 hafta'
        },
        {
          title: 'E-Ticaret Siteleri',
          description: 'Online satış platformları',
          features: ['Ürün Kataloğu', 'Sepet Sistemi', 'Ödeme Entegrasyonu', 'Admin Paneli'],
          price: '15.000₺ - 60.000₺',
          duration: '6-15 hafta'
        },
        {
          title: 'Blog & Portal Siteleri',
          description: 'İçerik yönetimi ve topluluk platformları',
          features: ['İçerik Yönetimi', 'Kullanıcı Sistemi', 'Yorum Sistemi', 'Sosyal Medya Entegrasyonu'],
          price: '10.000₺ - 35.000₺',
          duration: '4-10 hafta'
        }
      ]
    },
    {
      id: 'telecom',
      title: 'Telekomünikasyon',
      icon: <Zap className="w-6 h-6" />,
      description: 'Haberleşme altyapısı ve network çözümleri',
      services: [
        {
          title: 'Network Kurulumu',
          description: 'Kurumsal ağ altyapısı ve konfigürasyonu',
          features: ['LAN/WAN Kurulumu', 'Firewall Konfigürasyonu', 'WiFi Sistemleri', 'Network Monitoring'],
          price: '20.000₺ - 80.000₺',
          duration: '2-8 hafta'
        },
        {
          title: 'VoIP Sistemleri',
          description: 'IP tabanlı telefon sistemleri',
          features: ['PBX Kurulumu', 'SIP Trunk', 'Call Center', 'Sesli Yanıt Sistemleri'],
          price: '15.000₺ - 50.000₺',
          duration: '3-10 hafta'
        },
        {
          title: 'Güvenlik Çözümleri',
          description: 'Network güvenliği ve izleme sistemleri',
          features: ['Güvenlik Duvarı', 'VPN Kurulumu', 'İzleme Sistemleri', 'Yedekleme Çözümleri'],
          price: '25.000₺ - 100.000₺',
          duration: '4-12 hafta'
        }
      ]
    },
    {
      id: 'social',
      title: 'Sosyal Medya Ajansı',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Dijital pazarlama ve sosyal medya yönetimi hizmetleri',
      services: [
        {
          title: 'Sosyal Medya Yönetimi',
          description: 'Profesyonel sosyal medya hesap yönetimi ve içerik üretimi',
          features: ['İçerik Planlama', 'Görsel Tasarım', 'Hashtag Stratejisi', 'Etkileşim Yönetimi'],
          price: '5.000₺ - 15.000₺',
          duration: 'Aylık paket'
        },
        {
          title: 'Dijital Reklam Kampanyaları',
          description: 'Facebook, Instagram, Google Ads kampanya yönetimi',
          features: ['Hedef Kitle Analizi', 'Kreatif Tasarım', 'A/B Test', 'ROI Optimizasyonu'],
          price: '8.000₺ - 25.000₺',
          duration: 'Kampanya bazlı'
        },
        {
          title: 'İçerik Üretimi',
          description: 'Profesyonel fotoğraf, video ve grafik tasarım hizmetleri',
          features: ['Ürün Fotoğrafçılığı', 'Video Prodüksiyon', 'Grafik Tasarım', 'Copywriting'],
          price: '3.000₺ - 12.000₺',
          duration: '2-6 hafta'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PT</span>
              </div>
              <span className="text-2xl font-bold text-foreground">PhoneTürk Group</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
              <Link to="/services" className="text-primary font-semibold">Hizmetler</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
              <Button className="tech-shadow">Teklif Al</Button>
            </div>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
                <Link to="/services" className="text-primary font-semibold">Hizmetler</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
                <Button className="w-full">Teklif Al</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-card/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6">
            <Code className="w-4 h-4 mr-2" />
            Profesyonel Hizmetler
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            <span className="gradient-text">Teknoloji</span> Hizmetlerimiz
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-medium">
            Yazılım geliştirmeden yapay zeka sistemlerine, telekomünikasyondan web tasarımına kadar 
            geniş yelpazede profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 text-xs md:text-sm"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, index) => (
                    <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Özellikler:</h4>
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2 pt-4 border-t border-border">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Fiyat Aralığı:</span>
                            <span className="font-semibold text-primary">{service.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Süre:</span>
                            <span className="font-semibold">{service.duration}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full group-hover:tech-shadow">
                          Teklif Al
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projenizi <span className="gradient-text">Başlatalım</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hangi hizmete ihtiyacınız olursa olsun, uzman ekibimiz size en uygun çözümü sunmaya hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-shadow">
              Ücretsiz Danışmanlık
            </Button>
            <Button size="lg" variant="outline" className="glass-effect">
              Portfolyomuzu İnceleyin
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">PT</span>
                </div>
                <span className="text-xl font-bold text-foreground">PhoneTürk Group</span>
              </div>
              <p className="text-foreground/70 font-medium">
                Teknolojinin gücüyle işletmenizin geleceğini şekillendiriyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Hizmetler</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Yazılım Geliştirme</li>
                <li>Mobil Uygulamalar</li>
                <li>ERP & CRM</li>
                <li>Yapay Zeka</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Şirket</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Hakkımızda</li>
                <li>Ekibimiz</li>
                <li>Kariyer</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">İletişim</h4>
              <ul className="space-y-2 text-foreground/70 font-medium">
                <li>info@phoneturk.com</li>
                <li>0850 533 3500</li>
                <li>Merkez: İzmir, Şube: Samsun</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; 2024 PhoneTürk Group. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;