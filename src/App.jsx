import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Instagram, Menu, X, Palette, Users, Clock, Award, PenTool } from 'lucide-react';

const AmberFlowWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    group: '',
    message: ''
  });

  // Prace artystki - ścieżki do plików w public/images/
  const artworks = [
    {
      id: 1,
      src: '/images/LdP8uT5Td-jo7RWURLq7v.jpg',
      title: 'King Spaniel Dexter',
      description: 'Portret pełen charakteru, olej na płótnie'
    },
    {
      id: 2,
      src: '/images/NegvU6rlfSSS1I_wZu1Zn.jpg',
      title: 'Martwa natura z szkłem',
      description: 'Gra światła i odbić, olej na płótnie'
    },
    {
      id: 3,
      src: '/images/kbGoRO-8h_JAunrnwGDSm.jpg',
      title: 'Abstrakcyjne pęknięcia',
      description: 'Ekspresja w ruchu, technika mieszana'
    },
    {
      id: 4,
      src: '/images/JOZPDt0oWvv3_hs3Lz4Oj.jpg',
      title: 'Kosmiczne stworzenie',
      description: 'Fantazja i natura, olej na płótnie'
    },
    {
      id: 5,
      src: '/images/XGvKv1OnkGGR1KByIvlcL.jpg',
      title: 'Kobieta z kieliszkiem',
      description: 'Intymny moment, olej na płótnie'
    },
    {
      id: 6,
      src: '/images/TqIdL1eJEckDuwdTPGRKz.jpg',
      title: 'Spojrzenie przez lupę',
      description: 'Szczegół i precyzja, olej na płótnie'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Symulacja wysyłania formularza
    alert(`Dziękujemy ${formData.name}! Skontaktujemy się z Tobą wkrótce.`);
    setFormData({ name: '', email: '', phone: '', group: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Head elements */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AmberFlow - Kursy Malarstwa w Jawiszowicach | Weronika Ambrożkiewicz-Mosler</title>
      
      <div className="min-h-screen bg-white w-screen overflow-x-hidden">
      
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-serif font-bold">
                <span className="text-blue-600">Amber</span>
                <span className="text-teal-700">Flow</span>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-blue-600 font-medium">Strona główna</button>
              <button onClick={() => scrollToSection('about')} className="text-blue-600 font-medium">O mnie</button>
              <button onClick={() => scrollToSection('courses')} className="text-blue-600 font-medium">Kursy</button>
              <button onClick={() => scrollToSection('gallery')} className="text-blue-600 font-medium">Galeria</button>
              <button onClick={() => scrollToSection('contact')} className="text-blue-600 font-medium">Kontakt</button>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zapisz się na zajęcia
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-blue-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-blue-600 font-medium">Strona główna</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-blue-600 font-medium">O mnie</button>
                <button onClick={() => scrollToSection('courses')} className="text-left py-2 text-blue-600 font-medium">Kursy</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left py-2 text-blue-600 font-medium">Galeria</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-blue-600 font-medium">Kontakt</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full mt-2"
                >
                  Zapisz się na zajęcia
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
                  <span className="text-blue-600">AmberFlow</span>
                  <br />
                  tchnij sztukę w swoje życie!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nazywam się Weronika Ambrożkiewicz-Mosler i zapraszam Cię do mojej pracowni AmberFlow w Jawiszowicach. 
                  Razem odkryjemy magię malarstwa w kameralnych grupach - maksymalnie 4 osoby!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="!bg-blue-600 !text-white px-8 py-3 rounded-lg hover:!bg-blue-700 transition-colors text-lg font-semibold"
                  style={{ WebkitAppearance: 'none', appearance: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  Zapisz się na zajęcia
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="border-2 border-teal-600 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Zobacz prace
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm font-semibold">Maksymalnie 4 uczniów w grupie</p>
                </div>
                <div className="text-center">
                  <Palette className="w-8 h-8 mx-auto text-teal-600 mb-2" />
                  <p className="text-sm font-semibold">Materiały w cenie</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm font-semibold">Doświadczona artystka</p>
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={artworks[currentSlide].src}
                  alt={artworks[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                    <h3 className="text-xl font-semibold mb-1 drop-shadow-lg">{artworks[currentSlide].title}</h3>
                    <p className="text-sm opacity-95 drop-shadow-lg">{artworks[currentSlide].description}</p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 !bg-blue-600 !text-white p-3 rounded-full shadow-xl hover:!bg-blue-700 hover:scale-110 transition-all z-10 border-2 border-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 !bg-blue-600 !text-white p-3 rounded-full shadow-xl hover:!bg-blue-700 hover:scale-110 transition-all z-10 border-2 border-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>


            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                Poznaj <span className="text-blue-600">mnie</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jestem Weronika Ambrożkiewicz-Mosler, znana również jako Amber. Urodziłam się w 1988 roku i jestem artystką wizualną. 
                  Specjalizuję się w abstrakcji, łącząc intensywne kolory z różnorodnymi technikami malarskimi.
                </p>
                <p>
                  Moje prace, inspirowane naturą i psychologią, tworzę właśnie tutaj - w pracowni AmberFlow. 
                  Swoją pasją do sztuki chętnie dzielę się z uczniami, prowadząc kursy dla wszystkich grup wiekowych.
                </p>
                <p>
                  Moje unikalne połączenie wykształcenia naukowego (jestem doktorem chemii) z artystyczną wrażliwością 
                  pozwala mi na precyzyjne podejście do technik malarskich i opracowanie innowacyjnych metod nauczania.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Moja twórczość</h3>
                <p className="text-gray-600">
                  Swoje prace prezentuję na platformie <a href="https://www.artmajeur.com/weronika-ambrozkiewicz-mosler" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ArtMajeur</a>, gdzie możesz śledzić moje najnowsze projekty i rozwój artystyczny.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/LbNofSRGQCu_aof5XBlDL.jpg"
                alt="Praca Weroniki - Kieliszek z naturą"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Doktor chemii</p>
                <p className="text-sm opacity-90">Artystka malarka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Oferta <span className="text-blue-600">Kursów</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prowadzę kameralne grupy - maksymalnie 4 osoby! To pozwala mi na indywidualne podejście do każdego ucznia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rysunek */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rysunek</h3>
                <p className="text-gray-600">Wszystkie grupy wiekowe</p>
              </div>
              <div className="space-y-4 mb-8">
                <ul className="space-y-2 text-gray-600">
                  <li>• Ołówek, węgiel i sangwina</li>
                  <li>• Studium światła i cienia</li>
                  <li>• Nauka perspektywy</li>
                  <li>• Materiały wliczone w cenę</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">160-180 zł</div>
                <p className="text-gray-600 mb-4">miesięcznie (4 zajęcia po 2 godziny)</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full !bg-gray-600 !text-white py-3 rounded-lg shadow-md hover:!bg-gray-700 hover:shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-600 disabled:!bg-slate-200 disabled:!text-slate-700 disabled:cursor-not-allowed"
                  style={{ WebkitAppearance: 'none', appearance: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  Zapisz się
                </button>
              </div>
            </div>

            {/* Oleje */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Oleje</h3>
                <p className="text-gray-600">Od 13 lat wzwyż</p>
              </div>
              <div className="space-y-4 mb-8">
                <ul className="space-y-2 text-gray-600">
                  <li>• Klasyczne techniki olejne</li>
                  <li>• Portrety i pejzaże</li>
                  <li>• Studium światła i formy</li>
                  <li>• Materiały wliczone w cenę</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200-250 zł</div>
                <p className="text-gray-600 mb-4">miesięcznie (4 zajęcia po 2 godziny)</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full !bg-blue-600 !text-white py-3 rounded-lg shadow-md hover:!bg-blue-700 hover:shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:!bg-slate-200 disabled:!text-slate-700 disabled:cursor-not-allowed"
                  style={{ WebkitAppearance: 'none', appearance: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  Rozpocznij naukę
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Warsztaty jednorazowe</h3>
            <p className="text-gray-600 mb-4">Sprawdź czy malarstwo to Twoja pasja na moich warsztatach wprowadzających</p>
            <div className="text-2xl font-bold text-teal-600 mb-4">50-70 zł/osobę</div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="!bg-teal-600 !text-white px-8 py-3 rounded-lg shadow-md hover:!bg-teal-700 hover:shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600 disabled:!bg-slate-200 disabled:!text-slate-700 disabled:cursor-not-allowed"
              style={{ WebkitAppearance: 'none', appearance: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              Umów warsztat
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Galeria</span> Prac
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odkryj różnorodność stylów i technik w pracach Weroniki
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{artwork.title}</h3>
                  <p className="text-sm opacity-90">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Zainteresowany zakupem obrazów?</p>
            <a 
              href="https://www.artmajeur.com/weronika-ambrozkiewicz-mosler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Zobacz pełne portfolio
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Często zadawane <span className="text-blue-600">pytania</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Czy potrzebuję doświadczenia w malarstwie?</h3>
              <p className="text-gray-600">Nie musisz mieć żadnego doświadczenia! Moje kursy są dostosowane do wszystkich poziomów zaawansowania. Zaczynamy od podstaw i stopniowo rozwijamy umiejętności.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Co jest wliczone w cenę kursu?</h3>
              <p className="text-gray-600">Wszystkie materiały malarskie są wliczone w cenę - farby, pędzle, płótna, palety. Nie musisz nic kupować, po prostu przyjdź i maluj!</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ilu uczniów jest w grupie?</h3>
              <p className="text-gray-600">Maksymalnie 4 osoby w grupie. To gwarantuje indywidualne podejście do każdego ucznia i komfortową atmosferę nauki.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jak zapisać się na kurs?</h3>
              <p className="text-gray-600">Wypełnij formularz kontaktowy poniżej lub zadzwoń do mnie bezpośrednio. Chętnie się z Tobą spotka i omówię Twoje potrzeby oraz oczekiwania podczas bezpłatnego spotkania zapoznawczego.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Czy mogę spróbować przed zapisaniem się na cały kurs?</h3>
              <p className="text-gray-600">Oczywiście! Organizuję jednorazowe warsztaty za 50-70 zł, podczas których możesz poznać atmosferę moich zajęć i sprawdzić, czy malarstwo to Twoja pasja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Kontakt</span> i Zapisy
            </h2>
            <p className="text-xl text-gray-600">Skontaktuj się z nami i rozpocznij swoją artystyczną przygodę</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formularz zapisu</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Wpisz swoje imię i nazwisko"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="twoj@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="531 199 868"
                  />
                </div>

                <div>
                  <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-2">
                    Wybierz technikę *
                  </label>
                  <select
                    id="group"
                    name="group"
                    value={formData.group}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Wybierz technikę malarskią</option>
                    <option value="akwarele">Akwarele (120-150 zł/mies.)</option>
                    <option value="akryl">Akryl (160-180 zł/mies.)</option>
                    <option value="oleje">Oleje (200-250 zł/mies.)</option>
                    <option value="warsztat">Warsztat jednorazowy (50-70 zł)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dodatkowe informacje, pytania..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full !bg-blue-600 !text-white py-3 px-6 rounded-lg hover:!bg-blue-700 transition-colors text-lg font-semibold"
                  style={{ WebkitAppearance: 'none', appearance: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  Wyślij zgłoszenie
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Adres pracowni</p>
                      <p className="text-gray-600">Jawiszowice, ul. Osiedle Paderewskiego 14</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">amberflow@proton.me</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-600">531 199 868</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Godziny zajęć</p>
                      <p className="text-gray-600">Śro: 16:00-20:00<br />Sob: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.4!2d19.1412!3d49.9679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOsiedle%20Paderewskiego%2014%2C%2032-626%20Jawiszowice!5e0!3m2!1spl!2spl!4v1700000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AmberFlow - Lokalizacja w Jawiszowicach"
                ></iframe>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Śledź nas w social mediach</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/amber1988flow/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@weraamberflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.317-1.951-1.317-3.103V1h-3.177v14.67c0 1.735-1.407 3.142-3.142 3.142s-3.142-1.407-3.142-3.142 1.407-3.142 3.142-3.142c.347 0 .681.056.994.16V9.487a6.292 6.292 0 0 0-.994-.08c-3.465 0-6.274 2.809-6.274 6.274S6.64 22.955 10.105 22.955s6.274-2.809 6.274-6.274V8.796a9.284 9.284 0 0 0 5.942 2.148v-3.177c-1.084 0-2.093-.419-2.856-1.18l-.144-.025Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-600 rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-serif font-bold">AmberFlow</span>
              </div>
              <p className="text-gray-400">
                Pracownia malarstwa w Jawiszowicach. Kameralne kursy dla wszystkich grup wiekowych.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">O mnie</button>
                <button onClick={() => scrollToSection('courses')} className="block text-gray-400 hover:text-white transition-colors">Kursy</button>
                <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-white transition-colors">Galeria</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Kontakt</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Jawiszowice, ul. Osiedle Paderewskiego 14</p>
                <p>amberflow@proton.me</p>
                <p>531 199 868</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Biokineticum Dariusz Mosler. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default AmberFlowWebsite;