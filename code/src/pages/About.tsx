import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "İnovasyon",
      description: "En son teknolojileri takip ederek yenilikçi çözümler üretiyoruz."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Kalite",
      description: "Her projede mükemmellik standardını yakalayarak kaliteli hizmet sunuyoruz."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "İşbirliği",
      description: "Müşterilerimizle güçlü ortaklıklar kurarak birlikte başarıya ulaşıyoruz."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Güvenilirlik",
      description: "Sözlerimizi tutarak uzun vadeli güven ilişkileri kuruyoruz."
    }
  ];

  const team = [
    {
      name: "Hüseyin Arda Aslan",
      role: "Kurucu & CEO",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
      description: "15 yıllık teknoloji deneyimi ile şirketimizi yönetiyor."
    },
    {
      name: "Elif Kaya",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1580982324076-d95230549339?w=400&auto=format&fit=crop&q=80",
      description: "Yazılım mimarisi ve teknoloji stratejilerinden sorumlu."
    },
    {
      name: "Mehmet Demir",
      role: "Proje Yöneticisi",
      image: "https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?w=400&auto=format&fit=crop&q=80",
      description: "Proje süreçlerini yönetir ve müşteri ilişkilerini koordine eder."
    },
    {
      name: "Zeynep Özkan",
      role: "UI/UX Tasarımcı",
      image: "https://images.unsplash.com/photo-1581374820583-317d45555a82?w=400&auto=format&fit=crop&q=80",
      description: "Kullanıcı deneyimi ve arayüz tasarımı konularında uzman."
    }
  ];

  const achievements = [
    {
      number: "100+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen projeler"
    },
    {
      number: "50+",
      label: "Mutlu Müşteri",
      description: "Memnun müşteri portföyümüz"
    },
    {
      number: "5+",
      label: "Yıllık Deneyim",
      description: "Sektördeki tecrübemiz"
    },
    {
      number: "24/7",
      label: "Teknik Destek",
      description: "Kesintisiz hizmet anlayışımız"
    }
  ];

  const testimonials = [
    {
      name: "Ayşe Yıldız",
      company: "TechStart A.Ş.",
      text: "PhoneTürk Group ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizi aşarak teslim ettiler.",
      rating: 5
    },
    {
      name: "Can Özdemir",
      company: "Digital Solutions",
      text: "Profesyonel yaklaşımları ve teknik uzmanlıkları sayesinde işimizi bir üst seviyeye taşıdık.",
      rating: 5
    },
    {
      name: "Fatma Arslan",
      company: "E-Commerce Pro",
      text: "Mobil uygulamamız için aldığımız hizmet mükemmeldi. Ekip çok deneyimli ve çözüm odaklı.",
      rating: 5
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
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Hizmetler</Link>
              <Link to="/about" className="text-primary font-semibold">Hakkımızda</Link>
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
                <Link to="/services" className="text-foreground hover:text-primary transition-colors">Hizmetler</Link>
                <Link to="/about" className="text-primary font-semibold">Hakkımızda</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
                <Button className="w-full">Teklif Al</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">
                <Users className="w-4 h-4 mr-2" />
                Hakkımızda
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                <span className="gradient-text">Teknolojinin</span> Geleceğini
                <br />Şekillendiriyoruz
              </h1>
              
              <p className="text-xl text-foreground/80 mb-8 font-medium">
                2019 yılından bu yana teknoloji sektöründe faaliyet gösteren PhoneTürk Group, 
                yazılım geliştirmeden yapay zeka sistemlerine kadar geniş bir yelpazede 
                profesyonel çözümler sunmaktadır.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="tech-shadow">
                  Ekibimizle Tanışın
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="glass-effect">
                  Projelerimizi İnceleyin
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80"
                alt="Ekibimiz"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Değerlerimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="gradient-text">Temel</span> Değerlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Çalışma prensiplerimiz ve şirket kültürümüzü oluşturan temel değerler.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50 text-center">
                <CardContent className="p-8">
                  <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Ekibimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="gradient-text">Uzman</span> Ekibimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deneyimli ve tutkulu profesyonellerden oluşan ekibimizle projelerinizi hayata geçiriyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm font-medium">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Müşteri Yorumları
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="gradient-text">Müşterilerimiz</span> Ne Diyor?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projelerini bizimle hayata geçiren müşterilerimizin deneyimleri.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 border-border/50 hover:tech-shadow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Misyonumuz</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Teknolojinin gücünü kullanarak işletmelerin dijital dönüşümünü hızlandırmak, 
                  yenilikçi çözümlerle müşterilerimizin rekabet avantajı elde etmesini sağlamak 
                  ve sürdürülebilir başarıya ulaşmalarına katkıda bulunmaktır.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 hover:tech-shadow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">Vizyonumuz</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Türkiye'nin önde gelen teknoloji şirketlerinden biri olmak, uluslararası 
                  standartlarda hizmet vererek global pazarda tanınan bir marka haline gelmek 
                  ve teknoloji ekosisteminin gelişimine öncülük etmektir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Birlikte <span className="gradient-text">Çalışalım</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Projenizi hayata geçirmek için deneyimli ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-shadow">
              İletişime Geçin
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

export default About;