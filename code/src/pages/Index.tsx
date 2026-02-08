import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Smartphone, Brain, Globe, Database, Zap, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const services = [{
    icon: <Code className="w-8 h-8" />,
    title: "Yazılım Geliştirme",
    description: "Modern teknolojilerle özel yazılım çözümleri geliştiriyoruz.",
    features: ["Web Uygulamaları", "Mobil Uygulamalar", "API Geliştirme"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=80"
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformları için native ve cross-platform uygulamalar.",
    features: ["Native iOS/Android", "React Native", "Flutter"],
    image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?w=600&auto=format&fit=crop&q=80"
  }, {
    icon: <Database className="w-8 h-8" />,
    title: "ERP & CRM Sistemleri",
    description: "İşletmenizi dijitalleştiren entegre yönetim sistemleri.",
    features: ["Kurumsal Kaynak Planlaması", "Müşteri İlişkileri Yönetimi", "İş Süreçleri Otomasyonu"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
  }, {
    icon: <Brain className="w-8 h-8" />,
    title: "Yapay Zeka Sistemleri",
    description: "AI destekli akıllı çözümler ve otomasyon sistemleri.",
    features: ["Makine Öğrenmesi", "Doğal Dil İşleme", "Görüntü İşleme"],
    image: "https://images.unsplash.com/photo-1717501218385-55bc3a95be94?w=600&auto=format&fit=crop&q=80"
  }, {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Sitesi Yapımı",
    description: "Modern, responsive ve SEO uyumlu web siteleri.",
    features: ["Kurumsal Web Siteleri", "E-Ticaret", "Blog & Portal"],
    image: "https://images.unsplash.com/photo-1576272531110-2a342fe22342?w=600&auto=format&fit=crop&q=80"
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "Telekomünikasyon",
    description: "Haberleşme altyapısı ve network çözümleri.",
    features: ["Network Kurulumu", "VoIP Sistemleri", "Güvenlik Çözümleri"],
    image: "https://images.unsplash.com/photo-1582193607281-dafb7941640f?w=600&auto=format&fit=crop&q=80"
  }];
  const stats = [{
    number: "100+",
    label: "Tamamlanan Proje"
  }, {
    number: "50+",
    label: "Mutlu Müşteri"
  }, {
    number: "5+",
    label: "Yıllık Deneyim"
  }, {
    number: "24/7",
    label: "Teknik Destek"
  }];
  return <div className="min-h-screen bg-background dark">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PT</span>
              </div>
              <span className="text-2xl font-bold text-foreground">PhoneTürk Group</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Hizmetler</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
              <Button className="tech-shadow">Teklif Al</Button>
            </div>
            
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
                <Link to="/services" className="text-foreground hover:text-primary transition-colors">Hizmetler</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
                <Button className="w-full">Teklif Al</Button>
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <Zap className="w-4 h-4 mr-2" />
            Teknolojinin Geleceğini Şekillendiriyoruz
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-center" style={{
          animationDelay: '0.4s'
        }}>
            <span className="gradient-text">PhoneTürk Group</span>
            <br />
            <span className="text-foreground">Dijital Çözümler</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{
          animationDelay: '0.6s'
        }}>
            Yazılım geliştirmeden yapay zeka sistemlerine, telekomünikasyondan web tasarımına kadar 
            teknolojinin her alanında profesyonel çözümler sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button size="lg" className="tech-shadow group">
              Projelerimizi İncele
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-effect">
              Ücretsiz Danışmanlık
            </Button>
          </div>
          
          <div className="mt-12 animate-slide-up" style={{
          animationDelay: '1s'
        }}>
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Code className="w-4 h-4 mr-2" />
              Hizmetlerimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="gradient-text">Teknoloji</span> Çözümlerimiz
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Modern teknolojiler kullanarak işletmenizin dijital dönüşümünü gerçekleştiriyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-primary group-hover:text-accent transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 font-medium">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-foreground/60 font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>)}
                  </div>
                  
                  <Button className="w-full mt-6 group-hover:tech-shadow" variant="outline">
                    Detayları Gör
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projenizi <span className="gradient-text">Hayata Geçirelim</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Teknoloji alanındaki deneyimimizle işletmenizin dijital dönüşümünde yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-shadow">
              Ücretsiz Görüşme Planlayın
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
    </div>;
};
export default Index;