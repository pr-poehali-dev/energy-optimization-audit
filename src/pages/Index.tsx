import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/theme-toggle';

const Index = () => {
  const [monthlyConsumption, setMonthlyConsumption] = useState(5000);
  const [currentTariff, setCurrentTariff] = useState(6.5);
  
  const calculateSavings = () => {
    const annualCost = monthlyConsumption * currentTariff * 12;
    const potentialSavings = annualCost * 0.30;
    return {
      annual: Math.round(annualCost),
      savings: Math.round(potentialSavings),
      percentage: 30
    };
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-heading font-bold text-primary">Энеговектор</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
                Получить консультацию
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent">Энергоаудит и оптимизация</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Снизьте расходы на электроэнергию <span className="text-primary">до 40%</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Комплексный энергоаудит, оптимизация договорных отношений и техническое сопровождение для частных лиц и крупных производств
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')} className="bg-primary hover:bg-primary/90">
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="TrendingDown" className="mx-auto mb-3 text-accent" size={40} />
                    <div className="text-3xl font-bold text-primary mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Экономия</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Users" className="mx-auto mb-3 text-accent" size={40} />
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Award" className="mx-auto mb-3 text-accent" size={40} />
                    <div className="text-3xl font-bold text-primary mb-1">15 лет</div>
                    <div className="text-sm text-muted-foreground">Опыта</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="CheckCircle" className="mx-auto mb-3 text-accent" size={40} />
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Результат</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent">Калькулятор</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Рассчитайте свою экономию</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Узнайте, сколько вы можете сэкономить на электроэнергии
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-card">
                <CardTitle className="text-2xl">Интерактивный расчет экономии</CardTitle>
                <CardDescription>Введите ваши данные для расчета потенциальной выгоды</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Среднее потребление электроэнергии в месяц (кВт·ч)</label>
                      <span className="text-2xl font-bold text-primary">{monthlyConsumption.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[monthlyConsumption]}
                      onValueChange={(value) => setMonthlyConsumption(value[0])}
                      min={500}
                      max={50000}
                      step={100}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>500 кВт·ч</span>
                      <span>50,000 кВт·ч</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Текущий тариф (₽ за кВт·ч)</label>
                      <span className="text-2xl font-bold text-primary">{currentTariff.toFixed(2)} ₽</span>
                    </div>
                    <Slider
                      value={[currentTariff]}
                      onValueChange={(value) => setCurrentTariff(value[0])}
                      min={3}
                      max={15}
                      step={0.1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>3 ₽</span>
                      <span>15 ₽</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-8 mt-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Ваши расходы в год</div>
                        <div className="text-3xl font-bold text-foreground">
                          {calculateSavings().annual.toLocaleString()} ₽
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Потенциальная экономия</div>
                        <div className="text-3xl font-bold text-accent">
                          {calculateSavings().savings.toLocaleString()} ₽
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Процент экономии</div>
                        <div className="text-3xl font-bold text-primary">
                          до {calculateSavings().percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-card rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <p className="text-sm text-muted-foreground">
                          <strong>Экономия достигается за счёт:</strong> перехода на прямой договор с энергосбытом, оптимизации мощности, 
                          правильной работы с приборами учета и выбора оптимального тарифа.
                        </p>
                      </div>
                      <Button 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90"
                        onClick={() => scrollToSection('contacts')}
                      >
                        <Icon name="Calculator" className="mr-2" size={20} />
                        Получить точный расчет
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div className="text-sm">
                        <div className="font-semibold mb-1">Без посредников</div>
                        <div className="text-muted-foreground">Прямой договор с энергосбытом</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div className="text-sm">
                        <div className="font-semibold mb-1">Быстрый результат</div>
                        <div className="text-muted-foreground">Экономия с первого месяца</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <div className="text-sm">
                        <div className="font-semibold mb-1">Полное сопровождение</div>
                        <div className="text-muted-foreground">От аудита до реализации</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <Badge className="mb-4">Пакеты услуг</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Подберём оптимальное решение для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: 'ЭКОНОМ',
                description: 'Базовый аудит',
                price: 'от 15 000 ₽',
                features: ['Анализ договорных отношений', 'Работа с мощностью', 'Базовые рекомендации'],
                popular: true
              },
              {
                name: 'ОПТИМУМ',
                description: 'Основной пакет',
                price: 'от 35 000 ₽',
                features: ['Полный энергоаудит', 'Работа с приборами учета', 'Оптимизация расходов', 'Техническое сопровождение'],
                popular: false
              },
              {
                name: 'ПРОФИ',
                description: 'Комплексный',
                price: 'от 50 000 ₽/мес',
                features: ['Все из ОПТИМУМ', 'Энергообследование', 'Налоговая оптимизация', 'Кадровый учет', 'Подписка'],
                popular: false
              },
              {
                name: 'ПРОЕКТ',
                description: 'Разовый проект',
                price: 'Индивидуально',
                features: ['Технологическое присоединение', 'Крупные производства', 'Индивидуальный подход'],
                popular: false
              }
            ].map((pkg, idx) => (
              <Card key={idx} className={`transition-transform duration-300 hover:scale-105 ${pkg.popular ? 'border-accent border-2' : ''}`}>
                <CardHeader>
                  {pkg.popular && <Badge className="mb-2 bg-accent">Популярный</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} onClick={() => scrollToSection('contacts')}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'FileText', title: 'Энергоаудит', desc: 'Комплексный анализ энергопотребления и выявление точек оптимизации' },
              { icon: 'Settings', title: 'Техническое сопровождение', desc: 'Технологическое присоединение и работа с приборами учета' },
              { icon: 'Calculator', title: 'Бухгалтерское сопровождение', desc: 'Налоговая оптимизация и кадровый учет' }
            ].map((service, idx) => (
              <Card key={idx} className="transition-transform duration-300 hover:scale-105 border-none shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Энеговектор — ваш надёжный партнёр в энергооптимизации</h2>
              <p className="text-muted-foreground mb-4">
                Мы специализируемся на энергоаудите и оптимизации расходов на электроэнергию. Помогаем частным лицам и крупным производствам снижать затраты путём перевода на прямые договоры без посредников.
              </p>
              <p className="text-muted-foreground mb-6">
                Наша команда сертифицированных энергоаудиторов обладает глубокими знаниями в области договорных отношений, работы с мощностью и приборами учета.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Прозрачность</div>
                    <div className="text-sm text-muted-foreground">Понятные условия сотрудничества</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Надёжность</div>
                    <div className="text-sm text-muted-foreground">Гарантия результата</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Экспертность</div>
                    <div className="text-sm text-muted-foreground">Опытная команда</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Результат</div>
                    <div className="text-sm text-muted-foreground">Реальная экономия</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6">Наши преимущества</h3>
              <div className="space-y-6">
                {[
                  { title: 'Индивидуальный подход', desc: 'Разработка решений под конкретные задачи клиента' },
                  { title: 'Полное сопровождение', desc: 'От аудита до реализации и техподдержки' },
                  { title: 'Быстрый результат', desc: 'Оптимизация начинается с первого месяца' },
                  { title: 'Юридическая поддержка', desc: 'Помощь в оформлении всех документов' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <Badge className="mb-4">Кейсы</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Успешные проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Производственный комплекс',
                category: 'Промышленность',
                savings: '38%',
                description: 'Оптимизация энергопотребления крупного производства с переводом на прямой договор',
                icon: 'Factory'
              },
              {
                title: 'Жилой комплекс',
                category: 'ЖКХ',
                savings: '25%',
                description: 'Снижение расходов на электроэнергию для 350 квартир через работу с приборами учета',
                icon: 'Building'
              },
              {
                title: 'Торговый центр',
                category: 'Коммерция',
                savings: '42%',
                description: 'Комплексный энергоаудит и технологическое присоединение нового объекта',
                icon: 'ShoppingCart'
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="transition-transform duration-300 hover:scale-105 overflow-hidden border-none shadow-lg">
                <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={caseItem.icon} className="text-primary" size={32} />
                  </div>
                  <Badge className="w-fit mb-2" variant="outline">{caseItem.category}</Badge>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 bg-accent/10 rounded-lg p-4">
                    <Icon name="TrendingDown" className="text-accent" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground">Экономия</div>
                      <div className="text-2xl font-bold text-accent">{caseItem.savings}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение часа для бесплатной консультации
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@energovektor.ru</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle>Заявка на консультацию</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="example@mail.ru" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Интересующий пакет</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>ЭКОНОМ</option>
                      <option>ОПТИМУМ</option>
                      <option>ПРОФИ</option>
                      <option>ПРОЕКТ</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Расскажите о вашей задаче..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-white py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-accent" size={28} />
                <span className="text-xl font-heading font-bold">Энеговектор</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональный энергоаудит и оптимизация расходов на электроэнергию
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">Энергоаудит</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Техническое сопровождение</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Бухгалтерские услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-accent transition-colors">Кейсы</a></li>
                <li><a href="#contacts" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@energovektor.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Энеговектор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;