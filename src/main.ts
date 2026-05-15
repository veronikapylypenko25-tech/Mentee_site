import './styles/style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePageData } from './scripts/types';

class MentiApp {
  private header: Header;
  private footer: Footer;
  private data: HomePageData;
  private activeAudience: 'mentee' | 'mentor' = 'mentee';

  constructor() {
    this.header = new Header('Mentee');
    this.footer = new Footer('Mentee');
    this.data = this.loadData();
  }

  private asset(path: string): string {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  }

  private loadData(): HomePageData {
    return {
      features: [
        {
          id: '1',
          title: 'AI-діагностика',
          description:
            'Персоналізований підхід на основі експертних методик провідних українських освітян',
          icon: '🤖',
        },
        {
          id: '2',
          title: 'Єдиний простір',
          description:
            'Адміністрування, чати, завдання та відстеження прогресу в одному місці',
          icon: '📱',
        },
        {
          id: '3',
          title: 'Психологічна підтримка',
          description:
            'Зниження рівня тривожності та розвиток стійкості (resilience)',
          icon: '🧠',
        },
      ],
      steps: [
        {
          number: 1,
          title: 'Первинна діагностика',
          description:
            'AI-асистент проводить точну діагностику схильностей особистості',
          tags: ['AI', 'Тестування'],
        },
        {
          number: 2,
          title: 'Підбір фахівця',
          description: 'Швидкий місток між підлітком та ментором/психологом',
          tags: ['Ментор', 'Психолог'],
        },
        {
          number: 3,
          title: 'Розвиток та підтримка',
          description: 'Інтелектуальна екосистема веде трекінг успішності',
          tags: ['Прогрес', 'Аналітика'],
        },
      ],
      testimonials: [
        {
          id: '1',
          authorName: 'Оля Резнікова',
          authorRole: 'Засновниця платформи',
          content:
            'Я бачила успішні трансформації одиниць, але хотіла допомогти тисячам. Mentee народився на перетині мого досвіду в освіті та віри в те, що технології мають служити людині.',
        },
        {
          id: '2',
          authorName: 'Підлітки України',
          authorRole: 'Бенефіціари',
          content:
            'Понад 70% підлітків відчувають високий рівень тривожності. Mentee створений, щоб допомогти кожному.',
        },
        {
          id: '3',
          authorName: 'Марія Коваленко',
          authorRole: 'Керівниця програм менторства',
          content:
            'Mentee дає можливість підліткам отримувати якісну підтримку незалежно від місця проживання. Це справжня революція в освіті.',
        },
      ],
      mentorBenefits: [
        '🧑‍🎓 Для підлітків: персоналізований план розвитку',
        '👥 Для менторів: зручні інструменти роботи',
        '📊 Відстеження прогресу в реальному часі',
        '🔒 Безпечне середовище для спілкування',
        '🎯 Профорієнтація та психологічна підтримка',
        '🤝 Спільнота однодумців',
      ],
      teamMembers: [
        {
          id: '1',
          name: 'Ольга Резнікова',
          role: 'CEO',
          description:
            'Засновниця освітньої платформи, менторка молодіжних ініціатив',
          fullDescription:
            'Реалізуючи менторські програми, я усвідомила головну проблему — відсутність швидкого містка між підлітком та фахівцем.',
          photo: this.asset('images/team/olha_reznikova_.png'),
          quote: 'Кожен підліток заслуговує на шанс розкрити свій потенціал',
          contacts: {
            phone: '+380969007678',
            email: 'reznikovaolha@gmail.com',
            social: 'https://instagram.com/olla_reznikova',
          },
        },
        {
          id: '2',
          name: 'Вероніка Пилипенко',
          role: 'Mobile Developer',
          description: 'Розробниця сайту та мобільного додатку Mentee',
          fullDescription:
            'Я вірю, що технології можуть змінювати життя на краще.',
          photo: this.asset('images/team/veronika_pylypenko.png'),
          quote: 'Технології мають бути доступними та корисними для кожного',
          contacts: {
            phone: '+380684801933',
            email: 'veronika.pylypenko.25@kse.org.ua',
            social: 'https://instagram.com/nn.2n.nnj',
          },
        },
        {
          id: '3',
          name: 'Микита Сідоров',
          role: 'UI/UX Designer',
          description: 'Дизайнер інтерфейсів та користувацького досвіду',
          fullDescription:
            'Дизайн — це не просто естетика, це спосіб зробити складне простим.',
          photo: this.asset('images/team/mykyta_sidorov.png'),
          quote:
            'Гарний дизайн робить продукт зрозумілим, а великий — незабутнім',
          contacts: {
            phone: '+380989522471',
            email: 'mykyta.sidorov.25@kse.org.ua',
            social: 'https://instagram.com/naukyr',
          },
        },
        {
          id: '4',
          name: 'Поліна Гармаш',
          role: 'Content Creator',
          description: 'Створює контент та комунікації',
          fullDescription:
            'Слова мають силу. Я долучилась до Mentee, щоб допомогти розповісти історії.',
          photo: this.asset('images/team/polina_harmash_.png'),
          quote: 'Кожна історія має бути почутою',
          contacts: {
            phone: '+380958069506',
            email: 'polina.harmash.25@kse.org.ua',
            social: 'https://instagram.com/harmashpolinaua',
          },
        },
        {
          id: '5',
          name: 'Єлизавета Приходько',
          role: 'Project Manager',
          description:
            'Координаторка проєктів, організаторка менторських програм',
          fullDescription:
            'Я вірю, що правильно організований процес може змінити життя.',
          photo: this.asset('images/team/yelyzaveta_pryhodko.png'),
          quote: 'Якісне планування — запорука успішного результату',
          contacts: { email: 'yelyzaveta.prykhodko@kse.org.ua' },
        },
      ],
    };
  }

  private renderHero(): string {
    return `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Одна розмова може змінити життя</h1>
              <p class="hero-subtitle">Персональна екосистема розвитку Mentee — це місце, де молодь знаходить підтримку, яка їм справді потрібна.</p>
              <p class="hero-subtitle-secondary">Без засуджень. Без стереотипів. Просто ти і твій шлях вперед.</p>
              <div class="hero-tags">
                <span class="hero-tag">🔒 Безпечно</span>
                <span class="hero-tag">🎭 Анонімно</span>
                <span class="hero-tag">⏰ 24/7</span>
              </div>

              <div class="hero-buttons">
                <button class="btn-download" id="downloadBtn" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/>
                  </svg>
                  <span>Завантажити додаток</span>
                </button>
                <button class="test-btn" id="openTestBtn" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4 10-10 10S2 17.5 2 12 6 2 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span>Пройти тест "Твоя супер-сила"</span>
                </button>
              </div>

              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-front">
                    <div class="stat-number">1.5M+</div>
                    <div class="stat-label">підлітків потребують підтримки</div>
                  </div>
                  <div class="stat-hover-description">
                    <p>📱 Ми створили <strong>AI-ментора</strong>, який почує кожного 24/7.<br>Твій запит не залишиться без відповіді.</p>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-front">
                    <div class="stat-number">70%</div>
                    <div class="stat-label">мають високий рівень тривожності</div>
                  </div>
                  <div class="stat-hover-description">
                    <p>🧠 Відчуваєш тривожність? Підніми свій рівень контролю з 1 до 10 вже після першої сесії.<br><strong>Керуй своїм станом, а не навпаки.</strong></p>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-front">
                    <div class="stat-number">60%</div>
                    <div class="stat-label">не мають плану профорієнтації</div>
                  </div>
                  <div class="stat-hover-description">
                    <p>🎯 Не знаєш, ким бути? AI-алгоритм Mentee перетворює твої цілі у <strong>чіткий план дій</strong>.<br>Знайди свій шлях без тиску.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-phone">
              <div class="phone-frame">
                <div class="phone-screen">
                  <img src="${this.asset('images/screen_page.png')}" alt="Menti App" class="phone-screenshot">
                </div>
                <div class="phone-dynamic-island"></div>
                <div class="phone-home"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderFlagshipBlocks(): string {
    return `
    <section class="section flagship-section">
      <div class="container">
        <h2 class="section-title">Тут починається твій Take-off</h2>
        <p class="section-subtitle">Обери свій шлях розвитку разом з Mentee</p>
        <div class="flagship-grid">
          <div class="flagship-card">
            <div class="flagship-media">
              <img src="${this.asset('images/gif_education.gif')}" alt="Education" class="flagship-gif" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <div class="flagship-icon-fallback" style="display:none">📚</div>
            </div>
            <h3>Education</h3>
            <p>Хочеш наздогнати програму чи підготуватися до тесту без зайвих нервів? AI-ментор підкаже шлях, а досвідчені викладачі стануть твоїми провідниками. Отримуй знання в зручному темпі, став будь-які питання та відчувай підтримку на кожному етапі свого розвитку.</p>
            <div class="flagship-tag">Навчання</div>
          </div>
          <div class="flagship-card">
            <div class="flagship-media">
              <img src="${this.asset('images/gif_career.gif')}" alt="Career" class="flagship-gif" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <div class="flagship-icon-fallback" style="display:none">💼</div>
            </div>
            <h3>Career & Soft Skills</h3>
            <p>Від розбору складної теми до першого кар'єрного плану — ти самостійно будуєш своє майбутнє у комфортному темпі.</p>
            <div class="flagship-tag">Розвиток</div>
          </div>
          <div class="flagship-card">
            <div class="flagship-media">
              <img src="${this.asset('images/gif_mental.gif')}" alt="Mental Health" class="flagship-gif" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <div class="flagship-icon-fallback" style="display:none">🧘‍♀️</div>
            </div>
            <h3>Mental Health</h3>
            <p>Ментальне здоров'я — це твоя стійкість. Швидка AI-підтримка, коли накриває, та перевірені психологи, з якими легко говорити про все на світі.</p>
            <div class="flagship-tag">Підтримка</div>
          </div>
        </div>
      </div>
    </section>
  `;
  }

  private renderVolunteerCall(): string {
    return `
      <section class="section volunteer-call-section">
        <div class="container">
          <div class="volunteer-call-grid">
            <div class="volunteer-call-content">
              <h2 class="volunteer-call-title">Інвестуйте свій час у розвиток молоді, що постраждала від війни</h2>
              <p class="volunteer-call-subtitle">допоможіть підліткам повірити у власні сили</p>
              <p class="volunteer-call-text">Приєднуйся до спільноти експертів Mentee, які допомагають молоді вразливих категорій знайти свій шлях. Ваша експертиза допоможе підлітку опанувати необхідні soft skills, підвищити рівень знань та повірити в себе. Навіть одна сесія на місяць може стати провідником у світ професійної реалізації та внутрішньої рівноваги менті.</p>
              <div class="volunteer-call-quote"><span class="quote-mark">“</span><span class="quote-text">з ментором легше</span><span class="quote-mark">”</span></div>
              <div class="volunteer-call-stats">
                <div class="volunteer-call-stat"><div class="volunteer-call-stat-number">280+</div><div class="volunteer-call-stat-label">експертів вже приєдналось</div></div>
                <div class="volunteer-call-stat"><div class="volunteer-call-stat-number">1-2 год</div><div class="volunteer-call-stat-label">на місяць вашого часу</div></div>
              </div>
              <div class="volunteer-call-buttons">
                <button class="btn-volunteer-primary" id="volunteerCallBtn" type="button"><span>Стати волонтером-ментором</span></button>
              </div>
            </div>
            <div class="volunteer-call-media">
              <div class="volunteer-media-wrapper">
                <img src="${this.asset('images/gif.gif')}" alt="Менторська сесія" class="volunteer-gif">
                <div class="floating-element floating-1">👥 280+ менторів</div>
                <div class="floating-element floating-2">⏱️ 1-2 год/міс</div>
                <div class="floating-element floating-3">💚 Зміни життя</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderMission(): string {
    return `
      <section class="section mission-section">
        <div class="container">
          <div class="mission-content">
            <h2 class="section-title">Наша місія</h2>
            <div class="mission-text-wrapper"><p class="mission-text">Усунути бар'єри у швидкій комунікації між фахівцями та менті, автоматизуючи процеси пошуку, запису та взаємодії в єдиному цифровому просторі.</p></div>
          </div>
        </div>
      </section>
    `;
  }

  private renderFeatures(): string {
    return `
      <section class="section"><div class="container"><h2 class="section-title">Чому Mentee?</h2><p class="section-subtitle">Інтелектуальна екосистема, яка веде трекінг успішності</p><div class="features-grid">${this.data.features.map((f) => `<div class="feature-card"><div class="feature-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.description}</p></div>`).join('')}</div></div></section>
    `;
  }

  private renderProblem(): string {
    return `
      <section class="section problem-section"><div class="container"><h2 class="section-title">Проблема, яку ми вирішуємо</h2><div class="problem-grid"><div class="problem-card"><h3>Складність комунікації</h3><p>Сторонні чати та відсутність системи відстеження прогресу</p></div><div class="problem-card"><h3>Втрата соціальних зв'язків</h3><p>Понад 500 000 підлітків змінили місце проживання</p></div><div class="problem-card"><h3>Відсутність профорієнтації</h3><p>60% молоді не мають чіткого плану профорієнтації</p></div></div></div></section>
    `;
  }

  private renderSteps(): string {
    return `
      <section class="section"><div class="container"><h2 class="section-title">Як це працює</h2><div class="steps-grid">${this.data.steps.map((s) => `<div class="step-item"><div class="step-number">${s.number}</div><h3>${s.title}</h3><p>${s.description}</p><div class="tags">${s.tags?.map((t) => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('')}</div></div></section>
    `;
  }

  private renderAudienceContent(): string {
    const content =
      this.activeAudience === 'mentee'
        ? {
            title: 'Хочу навчатись',
            items: [
              {
                title: 'AI-Matching',
                text: 'Твій ідеальний фахівець за декілька кліків',
              },
              {
                title: 'Верифікована безпека',
                text: 'Ми вже перевірили всі дипломи',
              },
              { title: 'Оплата в один дотик', text: 'Apple Pay / Google Pay' },
              {
                title: 'Roadmap та трекер навчання',
                text: 'Реальний прогрес своїх навичок',
              },
            ],
          }
        : {
            title: 'Хочу навчати',
            items: [
              { title: 'Гарантований дохід', text: 'Оплата автоматично' },
              { title: 'Авто-календар', text: 'Синхронізація з Google' },
              { title: 'Нуль маркетингу', text: 'AI приводить учнів' },
              {
                title: 'Автоматизована операційка',
                text: 'Нагадування та облік',
              },
            ],
          };
    return `<div class="audience-panel"><h4>${content.title}</h4><div class="audience-feature-list">${content.items.map((i) => `<div class="audience-feature-card"><h5>${i.title}</h5><p>${i.text}</p></div>`).join('')}</div></div>`;
  }

  private renderUniqueness(): string {
    return `
      <section class="section uniqueness-dashboard-section"><div class="container"><div class="uniqueness-shell"><div class="uniqueness-top-switch"><button class="top-switch-btn ${this.activeAudience === 'mentee' ? 'active' : ''}" data-audience="mentee">Для Menti</button><button class="top-switch-btn ${this.activeAudience === 'mentor' ? 'active' : ''}" data-audience="mentor">Для Менторів</button></div><div class="uniqueness-grid"><div class="journey-column"><h3 class="uniqueness-block-title">${this.activeAudience === 'mentee' ? 'Шлях до результату' : 'Шлях ментора'}</h3><div class="journey-flow"><div class="journey-line"></div>${this.activeAudience === 'mentee' ? '<div class="journey-step step-chat"><div class="step-badge">💬 Хочу розвинути лідерство!</div></div><div class="journey-step step-ai"><div class="ai-orb"><div class="ai-orb-core">AI</div><div class="ai-orb-ring ring-1"></div><div class="ai-orb-ring ring-2"></div></div><div class="step-label">AI-Навігатор</div></div><div class="journey-step step-request"><div class="mini-chip">Запит у чаті</div></div><div class="journey-step step-quests"><div class="journey-card small-card quests-card"><div class="quests-art"></div></div><div class="step-label">Квести</div></div><div class="journey-step step-certificate"><div class="journey-card cert-card"><div class="cert-header">🏅 Сертифікат досягнень</div><div class="cert-body"></div></div><div class="step-label">Сертифікати досягнень</div></div><div class="journey-step step-result"><div class="mini-chip success-chip">Отримано! і результат!</div></div>' : '<div class="journey-step step-chat"><div class="step-badge">💼 Хочу навчати та допомагати</div></div><div class="journey-step step-ai"><div class="ai-orb"><div class="ai-orb-core">AI</div><div class="ai-orb-ring ring-1"></div><div class="ai-orb-ring ring-2"></div></div><div class="step-label">AI-підбір учнів</div></div><div class="journey-step step-request"><div class="mini-chip">Мотивовані запити</div></div><div class="journey-step step-quests"><div class="journey-card small-card quests-card"><div class="quests-art"></div></div><div class="step-label">Сесії та roadmap</div></div><div class="journey-step step-certificate"><div class="journey-card cert-card"><div class="cert-header">📅 Авто-календар</div><div class="cert-body"></div></div><div class="step-label">Облік і нагадування</div></div><div class="journey-step step-result"><div class="mini-chip success-chip">Прозоро! і дохід!</div></div>'}</div></div><div class="dashboard-column"><h3 class="uniqueness-block-title">${this.activeAudience === 'mentee' ? 'Панель керування' : 'Панель ментора'}</h3><div class="dashboard-stack">${this.activeAudience === 'mentee' ? '<div class="dashboard-card"><div class="dashboard-card-head"><span>Твій Match</span><small>ТОП-3 кандидати</small></div><div class="dashboard-value">95%</div><div class="chart-line"></div></div><div class="dashboard-card"><div class="dashboard-card-head"><span>Оплата</span></div><div class="calendar-row"><span>APPLE</span><span>PAY</span><span>GOOGLE</span><span>PAY</span><span>FAST</span><span>SAFE</span><span>OK</span></div><div class="calendar-slots"><span class="active">1 tap</span><span>Card</span><span>Pay</span><span>Done</span><span>No IBAN</span><span>No chat</span><span>Easy</span></div></div><div class="dashboard-card"><div class="dashboard-card-head"><span>Прогрес</span></div><div class="dashboard-value">+4</div><div class="payout-meta"><span>Сесій: 8</span><span>Навички: ростуть ★</span></div><div class="wallet-visual"><div class="wallet-stack"></div><div class="wallet-icon">📈</div></div></div>' : '<div class="dashboard-card"><div class="dashboard-card-head"><span>Доходи</span><small>Цього тижня</small></div><div class="dashboard-value">$1250</div><div class="chart-line"></div></div><div class="dashboard-card"><div class="dashboard-card-head"><span>Календар</span></div><div class="calendar-row"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div><div class="calendar-slots"><span class="active">Supervision</span><span>11:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>19:00</span><span>21:00</span></div></div><div class="dashboard-card"><div class="dashboard-card-head"><span>Виплати</span></div><div class="dashboard-value">$620</div><div class="payout-meta"><span>Сесій: 8</span><span>Виплат: 4.9 ★</span></div><div class="wallet-visual"><div class="wallet-stack"></div><div class="wallet-icon">💳</div></div></div>'}</div></div></div>${this.renderAudienceContent()}<div class="floating-cta-inline"><div class="cta-copy"><strong>Створи зміни разом з Menti</strong><span>Приєднуйся до спільноти менторів</span></div><button class="cta-button" id="floatingCtaBtn" type="button">Стати ментором</button></div></div></div></section>
    `;
  }

  private renderCommunity(): string {
    return `<section class="section community-section"><div class="container"><h2 class="section-title">Ми вже маємо рушійну силу</h2><p class="section-subtitle">Сформована спільнота для пілотного запуску</p><div class="community-grid"><div class="community-card"><div class="community-number">Активна група</div><p>Підлітків-бенефіціарів</p></div><div class="community-card"><div class="community-number">Мережа експертів</div><p>Менторів та психологів</p></div></div></div></section>`;
  }

  private renderSimpleImpact(): string {
    return `<section class="impact-block" style="max-width:1200px;margin:0 auto;padding:60px 20px;text-align:center;background:#fff;border-radius:32px;"><h2 style="font-size:2.2rem;font-weight:800;margin-bottom:16px;background:linear-gradient(135deg,#1f2a78,#8b5cf6,#f26f9f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Ваша підтримка = реальні зміни</h2><p style="font-size:1.1rem;color:#5f6f8f;max-width:700px;margin:0 auto 48px;">Прозорість — основа нашої роботи. Кожна гривня перетворюється на години підтримки для підлітків.</p><div style="display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin-bottom:60px;"><div style="background:#f8fafe;padding:32px;border-radius:24px;min-width:220px;"><div style="font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">+10K</div><div style="color:#5f6f8f;margin-top:8px;">запланованих годин підтримки</div></div><div style="background:#f8fafe;padding:32px;border-radius:24px;min-width:220px;"><div style="font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">95%</div><div style="color:#5f6f8f;margin-top:8px;">точності AI-матчингу</div></div></div><h3 style="font-size:1.8rem;font-weight:700;margin-bottom:32px;">Як це працює</h3><div style="display:flex;justify-content:center;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:32px;"><div style="background:#f8fafe;padding:24px;border-radius:20px;min-width:140px;"><div style="font-size:2rem;">💰</div><div style="font-size:1.5rem;font-weight:800;color:#f26f9f;">100$</div><div style="color:#5f6f8f;">ваш внесок</div></div><div style="font-size:2rem;color:#c4b5fd;">→</div><div style="background:#f8fafe;padding:24px;border-radius:20px;min-width:140px;"><div style="font-size:2rem;">🎓</div><div style="font-size:1.5rem;font-weight:800;color:#f26f9f;">5 сесій</div><div style="color:#5f6f8f;">менторської підтримки</div></div><div style="font-size:2rem;color:#c4b5fd;">→</div><div style="background:#f8fafe;padding:24px;border-radius:20px;min-width:140px;"><div style="font-size:2rem;">🌟</div><div style="font-size:1.5rem;font-weight:800;color:#f26f9f;">1 дитина</div><div style="color:#5f6f8f;">з прифронтової зони</div></div></div><div style="background:linear-gradient(135deg,#f26f9f10,#8b5cf610);padding:16px;border-radius:60px;max-width:500px;margin:0 auto 40px;"><span style="font-weight:700;">100$ = 5 менторських сесій для дитини з прифронтової зони</span></div><div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;"><button class="btn-impact-donate" id="donateBtn" style="background:linear-gradient(135deg,#8b5cf6,#f26f9f);color:white;border:none;padding:14px 32px;border-radius:60px;font-weight:700;cursor:pointer;">Стати партнером / донором</button><button class="btn-impact-more" id="impactMoreBtn" style="background:transparent;border:2px solid #f26f9f;color:#f26f9f;padding:14px 32px;border-radius:60px;font-weight:700;cursor:pointer;">Дізнатись більше про Impact</button></div></section>`;
  }

  private renderInteractiveStats(): string {
    return `<div class="interactive-stats-wrapper" style="display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin:40px 0;"><div class="interactive-stat-card" style="background:#f8fafe;padding:32px;border-radius:24px;min-width:240px;transition:all 0.3s;cursor:pointer;position:relative;overflow:hidden;"><div class="stat-front-content" style="transition:opacity 0.25s;"><div style="font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">1.5M+</div><div style="color:#5f6f8f;margin-top:8px;">підлітків шукають підтримки</div></div><div class="stat-hover-desc" style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(145deg,#f8fafe,#f0f3fc);border-radius:24px;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;visibility:hidden;transition:opacity 0.3s;font-size:0.95rem;color:#1f2a78;font-weight:500;text-align:center;">📱 Ми створили <strong>AI-ментора</strong>, який почує кожного 24/7.<br>Твій запит не залишиться без відповіді.</div></div><div class="interactive-stat-card" style="background:#f8fafe;padding:32px;border-radius:24px;min-width:240px;transition:all 0.3s;cursor:pointer;position:relative;overflow:hidden;"><div class="stat-front-content" style="transition:opacity 0.25s;"><div style="font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">1→10</div><div style="color:#5f6f8f;margin-top:8px;">рівень контролю після першої сесії</div></div><div class="stat-hover-desc" style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(145deg,#f8fafe,#f0f3fc);border-radius:24px;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;visibility:hidden;transition:opacity 0.3s;font-size:0.95rem;color:#1f2a78;font-weight:500;text-align:center;">🧠 Відчуваєш тривожність? Підніми свій рівень контролю з 1 до 10 вже після першої сесії.<br><strong>Керуй своїм станом, а не навпаки.</strong></div></div><div class="interactive-stat-card" style="background:#f8fafe;padding:32px;border-radius:24px;min-width:240px;transition:all 0.3s;cursor:pointer;position:relative;overflow:hidden;"><div class="stat-front-content" style="transition:opacity 0.25s;"><div style="font-size:2.5rem;font-weight:900;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Mentee AI</div><div style="color:#5f6f8f;margin-top:8px;">перетворює цілі в план дій</div></div><div class="stat-hover-desc" style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(145deg,#f8fafe,#f0f3fc);border-radius:24px;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;visibility:hidden;transition:opacity 0.3s;font-size:0.95rem;color:#1f2a78;font-weight:500;text-align:center;">🎯 Не знаєш, ким бути? AI-алгоритм Mentee перетворює твої цілі у <strong>чіткий план дій</strong>.<br>Знайди свій шлях без тиску.</div></div></div><style>.interactive-stat-card:hover{transform:translateY(-8px);box-shadow:0 20px 35px -12px rgba(0,0,0,0.15)}.interactive-stat-card:hover .stat-front-content{opacity:0}.interactive-stat-card:hover .stat-hover-desc{opacity:1;visibility:visible}</style>`;
  }

  private renderValue(): string {
    return `<section class="section value-section"><div class="container"><h2 class="section-title">Цінність, яку ми створюємо</h2><div class="value-grid"><div class="value-card"><h3>Освітня</h3><p>Закриття прогалин у знаннях та свідомий вибір професії</p></div><div class="value-card"><h3>Психологічна</h3><p>Зниження рівня тривожності та розвиток стійкості</p></div><div class="value-card"><h3>Результат</h3><p>Підвищення якості людського капіталу України</p></div></div></div></section>`;
  }

  private renderTestimonials(): string {
    return `<section class="section testimonials-carousel-section"><div class="container"><div class="testimonials-header"><h2 class="section-title">Про нас говорять</h2><p class="section-subtitle">Реальні історії від наших учнів та менторів</p></div><div class="testimonials-carousel-container"><button class="carousel-arrow carousel-prev" id="carouselPrev" type="button">‹</button><div class="testimonials-carousel"><div class="carousel-track" id="carouselTrack">${this.data.testimonials.map((t, i) => `<div class="testimonial-card-carousel" data-index="${i}"><div class="testimonial-quote-icon">“</div><p class="testimonial-content-carousel">${t.content}</p><div class="testimonial-author-carousel"><div class="author-avatar"><div class="avatar-placeholder">${t.authorName.charAt(0)}</div></div><div class="author-info"><h4 class="author-name">${t.authorName}</h4><p class="author-role">${t.authorRole}</p></div></div></div>`).join('')}</div></div><button class="carousel-arrow carousel-next" id="carouselNext" type="button">›</button></div><div class="carousel-dots">${this.data.testimonials.map((_, i) => `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" type="button"></button>`).join('')}</div><div class="testimonials-footer"><button class="btn-all-testimonials" id="allTestimonialsBtn" type="button">Переглянути всі відгуки</button></div></div></section>`;
  }

  private renderCTA(): string {
    return `<div class="container"><section class="cta-section"><h2>Стань частиною змін</h2><p>Приєднуйся до спільноти Mentee та допомагай будувати майбутнє України</p><div class="cta-buttons"><button class="btn-download" id="ctaDownloadBtn" type="button">Завантажити додаток</button><button class="btn-volunteer" id="ctaVolunteerBtn" type="button">Стати волонтером-ментором</button></div><div class="cta-contact"><a href="tel:+3800969007678">+3800969007678</a><a href="mailto:ngo.teleport@gmail.com">reznikovaolha@gmail.com</a></div></section></div>`;
  }

  private renderQuizModal(): string {
    return `<div id="quizModal" class="quiz-modal-overlay"><div class="quiz-container"><div class="quiz-header"><h2>⚡ Яка твоя суперсила?</h2><button class="quiz-close" id="closeQuizBtn">&times;</button></div><div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div><div id="quizContent"></div></div></div>`;
  }

  private renderAuthModal(
    mode: 'login' | 'register' | 'mentor' = 'register',
  ): string {
    const isLogin = mode === 'login';
    const isMentor = mode === 'mentor';
    return `<div class="modal-overlay" id="authModal"><div class="modal-container"><button class="modal-close" type="button">&times;</button><div class="modal-header"><div class="modal-logo">Mentee</div><h2>${isLogin ? 'Вхід' : isMentor ? 'Стати ментором' : 'Реєстрація'}</h2><p>${isLogin ? 'Введіть ваші дані для входу' : isMentor ? 'Приєднуйтесь до команди менторів' : 'Створіть акаунт щоб приєднатись'}</p></div><form class="modal-form" id="authForm">${!isLogin ? `<div class="form-group"><label for="name">Ім'я</label><input type="text" id="name" name="name" placeholder="Ваше ім'я" required></div>` : ''}${isMentor ? `<div class="form-group"><label for="expertise">Спеціалізація</label><input type="text" id="expertise" name="expertise" placeholder="Наприклад: Психолог, Ментор" required></div><div class="form-group"><label for="experience">Досвід (років)</label><input type="number" id="experience" name="experience" placeholder="5" required></div>` : ''}<div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" placeholder="your@email.com" required></div><div class="form-group"><label for="password">Пароль</label><input type="password" id="password" name="password" placeholder="••••••••" required></div>${!isLogin ? `<div class="form-group"><label for="confirmPassword">Підтвердіть пароль</label><input type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••" required></div>` : ''}<div class="form-group checkbox-group"><input type="checkbox" id="terms" name="terms" required><label for="terms">Я погоджуюсь з <a href="#">умовами використання</a> та <a href="#">політикою конфіденційності</a></label></div><button type="submit" class="modal-submit">${isLogin ? 'Увійти' : isMentor ? 'Зареєструватись як ментор' : 'Зареєструватись'}</button></form><div class="modal-footer">${isLogin ? `<p>Ще немає акаунту? <a href="#" id="switchToRegister">Зареєструватись</a></p>` : `<p>Вже є акаунт? <a href="#" id="switchToLogin">Увійти</a></p>`}</div>${!isLogin ? `<div class="modal-divider"><span>або</span></div><div class="social-login"><button class="social-btn google" type="button">Google</button><button class="social-btn facebook" type="button">Facebook</button></div>` : ''}</div></div>`;
  }

  public render(): void {
    const headerElement = document.getElementById('header');
    const mainElement = document.getElementById('main-content');
    const footerElement = document.getElementById('footer');

    if (headerElement) headerElement.innerHTML = this.header.render();
    if (mainElement) {
      mainElement.innerHTML = `${this.renderHero()}${this.renderFlagshipBlocks()}${this.renderVolunteerCall()}${this.renderMission()}}${this.renderFeatures()}${this.renderProblem()}${this.renderSteps()}${this.renderUniqueness()}${this.renderCommunity()}${this.renderSimpleImpact()}${this.renderInteractiveStats()}${this.renderValue()}${this.renderTestimonials()}${this.renderCTA()}${this.renderQuizModal()}`;
    }
    if (footerElement) footerElement.innerHTML = this.footer.render();
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    document
      .querySelector('.mobile-menu-btn')
      ?.addEventListener('click', () =>
        document.querySelector('.nav-links')?.classList.toggle('show'),
      );
    this.initTeamCarousel();
    this.initTestimonialsCarousel();
    this.initQuiz();

    document
      .getElementById('downloadBtn')
      ?.addEventListener('click', () => alert('Додаток буде доступний скоро!'));
    document
      .getElementById('ctaDownloadBtn')
      ?.addEventListener('click', () => alert('Додаток буде доступний скоро!'));

    [
      'volunteerBtn',
      'ctaVolunteerBtn',
      'volunteerCallBtn',
      'floatingCtaBtn',
    ].forEach((id) =>
      document
        .getElementById(id)
        ?.addEventListener('click', () => this.openModal('mentor')),
    );

    document
      .getElementById('registerBtn')
      ?.addEventListener('click', () => this.openModal('register'));
    document.getElementById('loginLink')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal('login');
    });
    document
      .getElementById('volunteerAskBtn')
      ?.addEventListener('click', () =>
        alert("Зв'яжіться з нами: reznikovaolha@gmail.com"),
      );
    document
      .getElementById('donateBtn')
      ?.addEventListener('click', () => alert('Дякуємо за інтерес!'));
    document
      .getElementById('impactMoreBtn')
      ?.addEventListener('click', () => alert('Прозорість — наша цінність.'));
    document
      .getElementById('allTestimonialsBtn')
      ?.addEventListener('click', () =>
        alert('Всі відгуки будуть доступні незабаром!'),
      );

    document
      .querySelectorAll<HTMLButtonElement>('.top-switch-btn')
      .forEach((btn) =>
        btn.addEventListener('click', () => {
          const audience = btn.dataset.audience as 'mentee' | 'mentor';
          if (audience && audience !== this.activeAudience) {
            this.activeAudience = audience;
            this.render();
          }
        }),
      );
  }

  private initTeamCarousel(): void {
    const prevBtn = document.getElementById('teamPrev'),
      nextBtn = document.getElementById('teamNext'),
      centerCard = document.getElementById('teamCenterCard');
    const topLeft = document.getElementById('teamSlotTopLeft'),
      topRight = document.getElementById('teamSlotTopRight'),
      bottomLeft = document.getElementById('teamSlotBottomLeft'),
      bottomRight = document.getElementById('teamSlotBottomRight');
    const dots = document.querySelectorAll<HTMLElement>('.team-dot');
    if (
      !prevBtn ||
      !nextBtn ||
      !centerCard ||
      !topLeft ||
      !topRight ||
      !bottomLeft ||
      !bottomRight
    )
      return;

    const members = this.data.teamMembers;
    let currentIndex = 0,
      hoverTimer: number | null = null;
    const normalizeIndex = (i: number) => (i + members.length) % members.length;
    const getMember = (i: number) => members[normalizeIndex(i)];
    const renderCenter = (m: (typeof members)[0]) =>
      `<div class="team-center-avatar-wrap"><div class="team-center-avatar-glow"></div><div class="team-center-avatar-ring"><img src="${m.photo}" alt="${m.name}" class="team-center-avatar" onerror="this.src='${this.asset('images/placeholder-avatar.jpg')}'"></div></div><div class="team-center-content"><h3 class="team-center-name">${m.name}</h3><p class="team-center-role">${m.role}</p><p class="team-center-text">${m.quote}</p></div>`;
    const renderSide = (m: (typeof members)[0], idx: number, txt: string) =>
      `<button class="team-side-node" type="button" data-index="${idx}"><div class="team-side-avatar-wrap"><div class="team-side-avatar-ring"><img src="${m.photo}" alt="${m.name}" class="team-side-avatar" onerror="this.src='${this.asset('images/placeholder-avatar.jpg')}'"></div></div><p class="team-side-text">${txt}</p></button>`;
    const bindHover = (container: HTMLElement | null) => {
      const btn =
        container?.querySelector<HTMLButtonElement>('button[data-index]');
      if (!btn) return;
      const idx = Number(btn.dataset.index);
      const activate = () => {
        currentIndex = idx;
        update();
      };
      btn.addEventListener('click', activate);
      btn.addEventListener('mouseenter', () => {
        if (hoverTimer) clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(activate, 160);
      });
      btn.addEventListener('mouseleave', () => {
        if (hoverTimer) {
          clearTimeout(hoverTimer);
          hoverTimer = null;
        }
      });
    };
    const update = () => {
      const center = getMember(currentIndex);
      centerCard.innerHTML = renderCenter(center);
      topLeft.innerHTML = renderSide(
        getMember(currentIndex - 2),
        normalizeIndex(currentIndex - 2),
        getMember(currentIndex - 2).description,
      );
      topRight.innerHTML = renderSide(
        getMember(currentIndex + 1),
        normalizeIndex(currentIndex + 1),
        getMember(currentIndex + 1).description,
      );
      bottomLeft.innerHTML = renderSide(
        getMember(currentIndex - 1),
        normalizeIndex(currentIndex - 1),
        getMember(currentIndex - 1).description,
      );
      bottomRight.innerHTML = renderSide(
        getMember(currentIndex + 2),
        normalizeIndex(currentIndex + 2),
        getMember(currentIndex + 2).description,
      );
      bindHover(topLeft);
      bindHover(topRight);
      bindHover(bottomLeft);
      bindHover(bottomRight);
      dots.forEach((dot, i) =>
        dot.classList.toggle('active', i === currentIndex),
      );
    };
    prevBtn.addEventListener('click', () => {
      currentIndex = normalizeIndex(currentIndex - 1);
      update();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = normalizeIndex(currentIndex + 1);
      update();
    });
    dots.forEach((dot) =>
      dot.addEventListener('click', () => {
        currentIndex = Number(dot.dataset.index || 0);
        update();
      }),
    );
    update();
  }

  private initTestimonialsCarousel(): void {
    const track = document.getElementById('carouselTrack'),
      prevBtn = document.getElementById('carouselPrev'),
      nextBtn = document.getElementById('carouselNext'),
      dots = document.querySelectorAll<HTMLElement>('.carousel-dot');
    if (!track || !prevBtn || !nextBtn) return;
    let idx = 0;
    const total = this.data.testimonials.length;
    const update = (i: number) => {
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('active', j === i));
    };
    prevBtn.addEventListener('click', () => {
      idx = (idx - 1 + total) % total;
      update(idx);
    });
    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % total;
      update(idx);
    });
    dots.forEach((d) =>
      d.addEventListener('click', () => {
        idx = Number(d.dataset.index || 0);
        update(idx);
      }),
    );
  }

  private initQuiz(): void {
    const QUESTIONS = [
      {
        text: 'Твій друг засмучений, а ти маєш важливий дедлайн. Ти...',
        options: [
          {
            text: 'Скидаю йому чіткий чек-лист',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: 'Відкладаю все, щоб вислухати',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
          {
            text: 'Кажу: «Не кисни, давай зробимо щось круте!»',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
        ],
      },
      {
        text: 'Ти бачиш у соцмережах ровесника, який запустив стартап. Твоя думка?',
        options: [
          {
            text: '«Круто, піду теж зроблю!»',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          {
            text: '«Цікаво, яка бізнес-модель?»',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: '«Напишу, щоб привітати»',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
        ],
      },
      {
        text: 'Яку навичку ти б завантажив миттєво?',
        options: [
          {
            text: 'Залізна дисципліна',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          {
            text: 'Прогнозування наслідків',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: 'Радар емоцій людей',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
        ],
      },
      {
        text: 'Твоя кімната у повному безладі. Що робиш?',
        options: [
          {
            text: 'Вмикаю музику і розгрібаю за годину',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          {
            text: 'Створюю систему, щоб безлад не повертався',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: 'Прошу друзів допомогти',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
        ],
      },
      {
        text: 'Твій пріоритет у груповому проекті?',
        options: [
          {
            text: 'Результат за будь-яку ціну',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          {
            text: 'Чіткий розподіл ролей',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: 'Здорова атмосфера в команді',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
        ],
      },
      {
        text: 'Яким має бути твій ідеальний AI-ментор?',
        options: [
          {
            text: 'Жорсткий тренер',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          { text: 'Аналітик', points: { strategy: 1, drive: 0, empathy: 0 } },
          { text: 'Друг', points: { strategy: 0, drive: 0, empathy: 1 } },
        ],
      },
      {
        text: 'Що для тебе найскладніше?',
        options: [
          {
            text: 'Почати щось нове',
            points: { strategy: 0, drive: 1, empathy: 0 },
          },
          {
            text: 'Довести справу до кінця',
            points: { strategy: 1, drive: 0, empathy: 0 },
          },
          {
            text: 'Розповісти про свої почуття',
            points: { strategy: 0, drive: 0, empathy: 1 },
          },
        ],
      },
    ];
    const RESULTS = {
      drive: {
        icon: '⚡️',
        title: 'Кібер-Драйвер',
        verdict: 'Ти — двигун будь-якого процесу.',
        advice: 'Твій AI-ментор допоможе тобі не перегоріти.',
      },
      strategy: {
        icon: '🧩',
        title: 'Майстер-Стратег',
        verdict: 'Ти бачиш архітектуру там, де інші бачать хаос.',
        advice: 'Ми підберемо тобі ментора-практика.',
      },
      empathy: {
        icon: '🤝',
        title: 'Глобальний Емпат',
        verdict: 'Твоя сила в людях.',
        advice: 'Твій ментор допоможе розкрити емоційний інтелект.',
      },
    };
    let currentQ = 0,
      answers: number[] = [],
      scores = { drive: 0, strategy: 0, empathy: 0 };
    const modal = document.getElementById('quizModal'),
      quizContent = document.getElementById('quizContent'),
      progressFill = document.getElementById('quizProgressFill');
    const recalc = () => {
      scores = { drive: 0, strategy: 0, empathy: 0 };
      for (let i = 0; i < answers.length; i++) {
        const a = answers[i];
        if (a !== undefined && QUESTIONS[i]?.options[a]) {
          const p = QUESTIONS[i].options[a].points;
          scores.drive += p.drive;
          scores.strategy += p.strategy;
          scores.empathy += p.empathy;
        }
      }
    };
    const renderQ = () => {
      if (!quizContent || !progressFill) return;
      const q = QUESTIONS[currentQ];
      const selected = answers[currentQ] !== undefined ? answers[currentQ] : -1;
      let html = `<div class="quiz-question"><div class="quiz-question-text">${currentQ + 1}. ${q.text}</div><div class="quiz-options">`;
      q.options.forEach((opt, idx) => {
        html += `<div class="quiz-option ${selected === idx ? 'selected' : ''}" data-opt-index="${idx}"><span>${idx === 0 ? '🔹' : idx === 1 ? '🔸' : '⭐'}</span><span>${opt.text}</span></div>`;
      });
      html += `</div></div><div class="quiz-nav-buttons"><button class="quiz-nav-btn" id="quizPrevBtn" ${currentQ === 0 ? 'disabled style="opacity:0.5"' : ''}>← Назад</button><button class="quiz-nav-btn quiz-primary" id="quizNextBtn">${currentQ === QUESTIONS.length - 1 ? 'Побачити результат' : 'Далі →'}</button></div>`;
      quizContent.innerHTML = html;
      document.querySelectorAll('.quiz-option').forEach((opt) =>
        opt.addEventListener('click', (e) => {
          const idx = parseInt(
            (e.currentTarget as HTMLElement).dataset.optIndex || '0',
          );
          answers[currentQ] = idx;
          recalc();
          renderQ();
        }),
      );
      document.getElementById('quizPrevBtn')?.addEventListener('click', () => {
        if (currentQ > 0) {
          currentQ--;
          renderQ();
        }
      });
      document.getElementById('quizNextBtn')?.addEventListener('click', () => {
        if (answers[currentQ] === undefined) {
          alert('Будь ласка, обери відповідь 💫');
          return;
        }
        if (currentQ === QUESTIONS.length - 1) {
          showResult();
        } else {
          currentQ++;
          renderQ();
        }
      });
      progressFill.style.width = `${((currentQ + 1) / QUESTIONS.length) * 100}%`;
    };
    const getDominant = (): 'drive' | 'strategy' | 'empathy' => {
      if (scores.drive >= scores.strategy && scores.drive >= scores.empathy)
        return 'drive';
      if (scores.strategy >= scores.drive && scores.strategy >= scores.empathy)
        return 'strategy';
      return 'empathy';
    };
    const showResult = () => {
      if (!quizContent) return;
      const r = RESULTS[getDominant()];
      quizContent.innerHTML = `<div class="quiz-result"><div class="quiz-bento"><div class="quiz-superpower-icon">${r.icon}</div><div class="quiz-result-type">${r.title}</div><div class="quiz-verdict">${r.verdict}</div><div class="quiz-advice">💡 Порада від Mentee:<br>${r.advice}</div><div><button id="quizDownloadBtn" class="quiz-download-btn">📸 Завантажити результат</button><button id="quizRestartBtn" class="quiz-restart-btn">🔄 Пройти ще раз</button></div></div></div>`;
      if (progressFill) progressFill.style.width = '100%';
      document
        .getElementById('quizDownloadBtn')
        ?.addEventListener('click', () => {
          const div = document.createElement('div');
          div.style.cssText =
            'position:fixed;left:-9999px;top:0;width:500px;background:linear-gradient(145deg,#fff,#faf5ff);border-radius:2rem;padding:2rem;text-align:center;font-family:Inter,sans-serif;';
          div.innerHTML = `<div style="font-size:4rem;">${r.icon}</div><div style="font-size:2rem;font-weight:800;background:linear-gradient(135deg,#f26f9f,#8b5cf6);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">${r.title}</div><div style="font-size:1rem;color:#44516f;">${r.verdict}</div><div style="background:#f3f6fe;border-radius:1.5rem;padding:1rem;margin:1rem 0;">💡 Порада від Mentee:<br>${r.advice}</div><div>mentee.app | твій шлях вперед</div>`;
          document.body.appendChild(div);
          const s = document.createElement('script');
          s.src =
            'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
          s.onload = () => {
            (window as any)
              .html2canvas(div, { scale: 2 })
              .then((canvas: HTMLCanvasElement) => {
                const link = document.createElement('a');
                link.download = `superpower_${r.title}.png`;
                link.href = canvas.toDataURL();
                link.click();
                document.body.removeChild(div);
              })
              .catch(() => {
                alert('Результат готовий! 🎉');
                document.body.removeChild(div);
              });
          };
          document.head.appendChild(s);
        });
      document
        .getElementById('quizRestartBtn')
        ?.addEventListener('click', () => {
          currentQ = 0;
          answers = [];
          scores = { drive: 0, strategy: 0, empathy: 0 };
          renderQ();
        });
    };
    const openModal = () => {
      if (modal) {
        modal.classList.add('active');
        currentQ = 0;
        answers = [];
        scores = { drive: 0, strategy: 0, empathy: 0 };
        renderQ();
      }
    };
    const closeModal = () => {
      if (modal) modal.classList.remove('active');
    };
    document
      .getElementById('openTestBtn')
      ?.addEventListener('click', openModal);
    document
      .getElementById('closeQuizBtn')
      ?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  private openModal(mode: 'login' | 'register' | 'mentor'): void {
    document.getElementById('authModal')?.remove();
    document.body.insertAdjacentHTML('beforeend', this.renderAuthModal(mode));
    requestAnimationFrame(() => {
      document.getElementById('authModal')?.classList.add('show');
      this.attachModalListeners();
    });
  }

  private attachModalListeners(): void {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.querySelector('.modal-close')?.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 250);
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 250);
      }
    });
    document.getElementById('switchToLogin')?.addEventListener('click', (e) => {
      e.preventDefault();
      modal.remove();
      this.openModal('login');
    });
    document
      .getElementById('switchToRegister')
      ?.addEventListener('click', (e) => {
        e.preventDefault();
        modal.remove();
        this.openModal('register');
      });
    document.getElementById('authForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Дякуємо! Перевірте вашу пошту.');
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 250);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MentiApp().render();
});