import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Menu,
  X,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: ["0850 533 3500", "0546 549 3500"],
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      details: ["info@phoneturk.com", "destek@phoneturk.com"],
      description: "24 saat içinde yanıtlıyoruz"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      details: ["Merkez: İzmir", "Şube: Samsun", "İzmir adresimiz yenileniyor"],
      description: "Ofis ziyaretleri randevu ile"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 10:00 - 16:00"],
      description: "Pazar günleri kapalı"
    }
  ];

  const services = [
    "Yazılım Geliştirme",
    "Mobil Uygulama",
    "Web Sitesi Yapımı",
    "ERP Sistemleri",
    "CRM Sistemleri",
    "Yapay Zeka Sistemleri",
    "Telekomünikasyon",
    "Diğer"
  ];

  const faqs = [
    {
      question: "Proje süresi ne kadar?",
      answer: "Proje süreleri karmaşıklığa göre değişir. Basit web siteleri 2-4 hafta, karmaşık uygulamalar 3-6 ay sürebilir."
    },
    {
      question: "Fiyatlandırma nasıl yapılıyor?",
      answer: "Her proje için özel teklif hazırlıyoruz. Ücretsiz danışmanlık sonrası detaylı fiyat teklifi sunuyoruz."
    },
    {
      question: "Proje sonrası destek var mı?",
      answer: "Evet, tüm projelerimiz için 1 yıl ücretsiz teknik destek ve bakım hizmeti sunuyoruz."
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer: "React, Node.js, Python, Flutter, Swift gibi modern teknolojileri kullanarak projeler geliştiriyoruz."
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
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
              <Link to="/contact" className="text-primary font-semibold">İletişim</Link>
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
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
                <Link to="/contact" className="text-primary font-semibold">İletişim</Link>
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
            <MessageSquare className="w-4 h-4 mr-2" />
            İletişim
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            <span className="gradient-text">Bizimle</span> İletişime Geçin
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-medium">
            Projeniz hakkında konuşmak, sorularınızı yanıtlamak ve size en uygun çözümü 
            sunmak için buradayız. Hemen iletişime geçin!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:tech-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="text-primary group-hover:text-accent transition-colors mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Proje Teklifi Alın
                </CardTitle>
                <p className="text-muted-foreground">
                  Formu doldurun, size en kısa sürede dönüş yapalım.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Mesajınız Gönderildi!</h3>
                    <p className="text-muted-foreground">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Adınız ve soyadınız"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">E-posta *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ornek@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefon</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+90 (5xx) xxx xx xx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Şirket</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Şirket adınız"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Hizmet Türü</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Hizmet seçiniz</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Mesaj *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Projeniz hakkında detayları paylaşın..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full tech-shadow">
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Ofis Konumumuz</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Harita Görünümü</p>
                      <p className="text-sm text-muted-foreground">
                        Merkez: İzmir<br />
                        Şube: Samsun<br />
                        İzmir adresimiz yenileniyor
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Ofisimizi ziyaret etmek isterseniz, lütfen önceden randevu alınız. 
                    Metro ve otobüs hatlarına yakın konumumuzla kolayca ulaşabilirsiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Hızlı İletişim</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Acil Durum Hattı</p>
                      <p className="text-sm text-foreground font-medium">0546 549 3500</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Teknik Destek</p>
                      <p className="text-sm text-foreground font-medium">destek@phoneturk.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-sm text-foreground font-medium">0546 549 3500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Sık Sorulan Sorular
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="gradient-text">Merak</span> Ettikleriniz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En çok sorulan sorular ve yanıtları. Başka sorularınız varsa bizimle iletişime geçin.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:tech-shadow transition-all duration-300 bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projenizi <span className="gradient-text">Başlatalım</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık için hemen iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-shadow">
              Ücretsiz Danışmanlık
            </Button>
            <Button size="lg" variant="outline" className="glass-effect">
              WhatsApp ile İletişim
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

export default Contact;