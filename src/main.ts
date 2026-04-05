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
          role: 'CEO ',
          description:
            'Засновниця освітньої платформи, менторка молодіжних ініціатив',
          fullDescription:
            'Реалізуючи менторські програми, я усвідомила головну проблему — відсутність швидкого містка між підлітком та фахівцем. Я бачила успішні трансформації одиниць, але хотіла допомогти тисячам. Mentee народився на перетині мого досвіду в освіті та віри в те, що технології мають служити людині, масштабуючи підтримку там, де вона найпотрібніша.',
          photo: '/images/team/olha_reznikova_.png',
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
            'Я вірю, що технології можуть змінювати життя на краще. Долучилась до Mentee, щоб створити зручний та доступний інструмент для підлітків, які потребують підтримки. Моя місія — зробити додаток інтуїтивно зрозумілим та корисним для кожного користувача.',
          photo: '/images/team/veronika_pylypenko.png',
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
            'Дизайн — це не просто естетика, це спосіб зробити складне простим. Я приєднався до Mentee, щоб створити інтерфейс, який буде зрозумілим та комфортним для підлітків. Кожен елемент дизайну має надихати та допомагати користувачам досягати своїх цілей.',
          photo: '/images/team/mykyta_sidorov.png',
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
            'Слова мають силу. Я долучилась до Mentee, щоб допомогти розповісти історії тих, хто потребує підтримки, та показати, як важливо мати наставника поруч. Моя мета — створювати контент, який надихає, підтримує та показує реальні зміни в житті підлітків.',
          photo: '/images/team/polina_harmash_.png',
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
            'Я вірю, що правильно організований процес може змінити життя багатьох підлітків. Долучилась до Mentee, щоб вибудовувати ефективну комунікацію між менторами та учнями, забезпечувати якісне планування та контроль усіх етапів роботи. Моя мета — зробити Mentee зручним та прозорим для всіх учасників освітнього процесу.',
          photo: '/images/team/yelyzaveta_pryhodko.png',
          quote: 'Якісне планування — запорука успішного результату',
          contacts: {
            email: 'yelyzaveta.prykhodko@kse.org.ua',
          },
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
              <p class="hero-subtitle">
                Персональна екосистема розвитку: менторство, психологічна підтримка та AI-навігація для молоді в одному місці.
              </p>

              <div class="hero-buttons">
                <button class="btn-download" id="downloadBtn" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/>
                  </svg>
                  <span>Завантажити додаток</span>
                </button>
                <button class="btn-volunteer" id="volunteerBtn" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4 10-10 10S2 17.5 2 12 6 2 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span>Стати волонтером-ментором</span>
                </button>
              </div>

              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-number">1.5M+</div>
                  <div class="stat-label">підлітків потребують підтримки</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">70%</div>
                  <div class="stat-label">мають високий рівень тривожності</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">60%</div>
                  <div class="stat-label">не мають плану профорієнтації</div>
                </div>
              </div>
            </div>

            <div class="hero-phone">
              <div class="phone-frame">
                <div class="phone-screen">
                  <img src="/images/screen_page.png" alt="Menti App" class="phone-screenshot">
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
          <h2 class="section-title">Напрями підтримки</h2>
          <p class="section-subtitle">Обери свій шлях розвитку разом з Mentee</p>
          <div class="flagship-grid">
            <div class="flagship-card">
              <div class="flagship-icon">📚</div>
              <h3>Education</h3>
              <p>Закрий прогалини у знаннях та підготуйся до іспитів з експертами.</p>
              <div class="flagship-tag">Навчання</div>
            </div>
            <div class="flagship-card">
              <div class="flagship-icon">💼</div>
              <h3>Career & Soft Skills</h3>
              <p>Знайди свій шлях та опануй навички, яких не вчать у школі.</p>
              <div class="flagship-tag">Розвиток</div>
            </div>
            <div class="flagship-card">
              <div class="flagship-icon">🧘‍♀️</div>
              <h3>Mental Health</h3>
              <p>Отримай підтримку психологів, щоб зберегти спокій у часи невизначеності.</p>
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
              <p class="volunteer-call-text">
                Ми шукаємо менторів та психологів, готових приділити 1-2 години на місяць волонтерським сесіям для підлітків із вразливих груп.
              </p>

              <div class="volunteer-call-quote">
                <span class="quote-mark">“</span>
                <span class="quote-text">з ментором легше</span>
                <span class="quote-mark">”</span>
              </div>

              <div class="volunteer-call-stats">
                <div class="volunteer-call-stat">
                  <div class="volunteer-call-stat-number">280+</div>
                  <div class="volunteer-call-stat-label">експертів вже приєдналось</div>
                </div>
                <div class="volunteer-call-stat">
                  <div class="volunteer-call-stat-number">1-2 год</div>
                  <div class="volunteer-call-stat-label">на місяць вашого часу</div>
                </div>
              </div>

              <div class="volunteer-call-buttons">
                <button class="btn-volunteer-primary" id="volunteerCallBtn" type="button">
                  <span>Стати волонтером-ментором</span>
                </button>
                <button class="btn-volunteer-secondary" id="volunteerAskBtn" type="button">
                  <span>Привіт! Є питання?</span>
                </button>
              </div>
            </div>

            <div class="volunteer-call-media">
              <div class="volunteer-media-wrapper">
                <img src="/images/gif.gif" alt="Менторська сесія" class="volunteer-gif">
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
            <div class="mission-text-wrapper">
              <p class="mission-text">
                Усунути бар'єри у швидкій комунікації між фахівцями та менті, автоматизуючи процеси пошуку, запису та взаємодії в єдиному цифровому просторі.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderFounder(): string {
    return `
    <section class="section team-orbit-section">
      <div class="container">
        <div class="team-orbit-header">
          <h2 class="section-title">Наша команда</h2>
          <p class="section-subtitle">Об'єднані бажанням створювати інновації в освіті</p>
        </div>

        <div class="team-orbit-shell">
          <div class="team-orbit-stage">
            <div class="team-orbit-dot dot-1"></div>
            <div class="team-orbit-dot dot-2"></div>
            <div class="team-orbit-dot dot-3"></div>
            <div class="team-orbit-dot dot-4"></div>
            <div class="team-orbit-dot dot-5"></div>
            <div class="team-orbit-dot dot-6"></div>

            <div class="team-orbit-curve curve-left-top"></div>
            <div class="team-orbit-curve curve-right-top"></div>
            <div class="team-orbit-curve curve-left-bottom"></div>
            <div class="team-orbit-curve curve-right-bottom"></div>

            <button class="team-orbit-arrow orbit-arrow-left" id="teamPrev" type="button" aria-label="Попередній учасник">‹</button>
            <button class="team-orbit-arrow orbit-arrow-right" id="teamNext" type="button" aria-label="Наступний учасник">›</button>

            <div class="team-orbit-side side-top-left" id="teamSlotTopLeft"></div>
            <div class="team-orbit-side side-top-right" id="teamSlotTopRight"></div>
            <div class="team-orbit-side side-bottom-left" id="teamSlotBottomLeft"></div>
            <div class="team-orbit-side side-bottom-right" id="teamSlotBottomRight"></div>

            <div class="team-orbit-center" id="teamCenterCard"></div>
          </div>

          <div class="team-dots-container" id="teamDots">
            ${this.data.teamMembers
              .map(
                (_, index) => `
                  <button class="team-dot ${index === 0 ? 'active' : ''}" data-index="${index}" type="button"></button>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
  }

  private renderFeatures(): string {
    return `
      <section class="section">
        <div class="container">
          <h2 class="section-title">Чому Mentee?</h2>
          <p class="section-subtitle">Інтелектуальна екосистема, яка веде трекінг успішності</p>
          <div class="features-grid">
            ${this.data.features
              .map(
                (feature) => `
                <div class="feature-card">
                  <div class="feature-icon">${feature.icon}</div>
                  <h3>${feature.title}</h3>
                  <p>${feature.description}</p>
                </div>
              `,
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  private renderProblem(): string {
    return `
      <section class="section problem-section">
        <div class="container">
          <h2 class="section-title">Проблема, яку ми вирішуємо</h2>
          <div class="problem-grid">
            <div class="problem-card">
              <h3>Складність комунікації</h3>
              <p>Сторонні чати та відсутність системи відстеження прогресу</p>
            </div>
            <div class="problem-card">
              <h3>Втрата соціальних зв'язків</h3>
              <p>Понад 500 000 підлітків змінили місце проживання, втративши доступ до звичних репетиторів та психологів</p>
            </div>
            <div class="problem-card">
              <h3>Відсутність профорієнтації</h3>
              <p>60% молоді не мають чіткого плану профорієнтації через стрес</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderSteps(): string {
    return `
      <section class="section">
        <div class="container">
          <h2 class="section-title">Як це працює</h2>
          <div class="steps-grid">
            ${this.data.steps
              .map(
                (step) => `
                <div class="step-item">
                  <div class="step-number">${step.number}</div>
                  <h3>${step.title}</h3>
                  <p>${step.description}</p>
                  ${
                    step.tags
                      ? `
                    <div class="tags">
                      ${step.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                  `
                      : ''
                  }
                </div>
              `,
              )
              .join('')}
          </div>
        </div>
      </section>
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
                text: 'Твій ідеальний фахівець за декілька кліків: обирай серед ТОП-3, які підходять саме під твій вайб та ціль.',
              },
              {
                title: 'Верифікована безпека',
                text: 'Ми вже перевірили всі дипломи та бекграунд експертів. Тобі залишається лише зареєструватись.',
              },
              {
                title: 'Оплата в один дотик',
                text: 'Apple Pay / Google Pay без реквізитів чи скріншотів. Сплачуй сесії так само легко, як купуєш каву.',
              },
              {
                title: 'Roadmap та трекер навчання',
                text: 'Завдяки вбудованій системі асесменту ти бачиш реальний прогрес своїх навичок після кожної сесії.',
              },
            ],
          }
        : {
            title: 'Хочу навчати',
            items: [
              {
                title: 'Гарантований дохід (Escrow)',
                text: 'Оплата зараховується автоматично — прозоро, вчасно та без зайвих переписок.',
              },
              {
                title: 'Авто-календар',
                text: 'Синхронізація з Google / Outlook. Система сама нагадує учню та веде облік твоїх годин.',
              },
              {
                title: 'Нуль маркетингу',
                text: 'AI сам приводить до тебе вмотивованих учнів. Просто роби те, що любиш.',
              },
              {
                title: 'Автоматизована операційка',
                text: 'Нагадування, статуси сесій, облік годин і базова комунікація працюють у системі.',
              },
            ],
          };

    return `
      <div class="audience-panel">
        <h4>${content.title}</h4>
        <div class="audience-feature-list">
          ${content.items
            .map(
              (item) => `
              <div class="audience-feature-card">
                <h5>${item.title}</h5>
                <p>${item.text}</p>
              </div>
            `,
            )
            .join('')}
        </div>
      </div>
    `;
  }

  private renderUniqueness(): string {
    return `
      <section class="section uniqueness-dashboard-section">
        <div class="container">
          <div class="uniqueness-shell">
            <div class="uniqueness-top-switch" role="tablist" aria-label="Режим перегляду">
              <button
                class="top-switch-btn ${this.activeAudience === 'mentee' ? 'active' : ''}"
                type="button"
                data-audience="mentee"
              >
                Для Menti
              </button>
              <button
                class="top-switch-btn ${this.activeAudience === 'mentor' ? 'active' : ''}"
                type="button"
                data-audience="mentor"
              >
                Для Менторів
              </button>
            </div>

            <div class="uniqueness-grid">
              <div class="journey-column">
                <h3 class="uniqueness-block-title">
                  ${this.activeAudience === 'mentee' ? 'Шлях до результату' : 'Шлях ментора'}
                </h3>

                <div class="journey-flow">
                  <div class="journey-line"></div>

                  ${
                    this.activeAudience === 'mentee'
                      ? `
                    <div class="journey-step step-chat"><div class="step-badge">💬 Хочу розвинути лідерство!</div></div>
                    <div class="journey-step step-ai">
                      <div class="ai-orb">
                        <div class="ai-orb-core">AI</div>
                        <div class="ai-orb-ring ring-1"></div>
                        <div class="ai-orb-ring ring-2"></div>
                      </div>
                      <div class="step-label">AI-Навігатор</div>
                    </div>
                    <div class="journey-step step-request"><div class="mini-chip">Запит у чаті</div></div>
                    <div class="journey-step step-quests">
                      <div class="journey-card small-card quests-card"><div class="quests-art"></div></div>
                      <div class="step-label">Квести</div>
                    </div>
                    <div class="journey-step step-certificate">
                      <div class="journey-card cert-card">
                        <div class="cert-header">🏅 Сертифікат досягнень</div>
                        <div class="cert-body"></div>
                      </div>
                      <div class="step-label">Сертифікати досягнень</div>
                    </div>
                    <div class="journey-step step-result"><div class="mini-chip success-chip">Отримано! і результат!</div></div>
                  `
                      : `
                    <div class="journey-step step-chat"><div class="step-badge">💼 Хочу навчати та допомагати</div></div>
                    <div class="journey-step step-ai">
                      <div class="ai-orb">
                        <div class="ai-orb-core">AI</div>
                        <div class="ai-orb-ring ring-1"></div>
                        <div class="ai-orb-ring ring-2"></div>
                      </div>
                      <div class="step-label">AI-підбір учнів</div>
                    </div>
                    <div class="journey-step step-request"><div class="mini-chip">Мотивовані запити</div></div>
                    <div class="journey-step step-quests">
                      <div class="journey-card small-card quests-card"><div class="quests-art"></div></div>
                      <div class="step-label">Сесії та roadmap</div>
                    </div>
                    <div class="journey-step step-certificate">
                      <div class="journey-card cert-card">
                        <div class="cert-header">📅 Авто-календар</div>
                        <div class="cert-body"></div>
                      </div>
                      <div class="step-label">Облік і нагадування</div>
                    </div>
                    <div class="journey-step step-result"><div class="mini-chip success-chip">Прозоро! і дохід!</div></div>
                  `
                  }
                </div>
              </div>

              <div class="dashboard-column">
                <h3 class="uniqueness-block-title">
                  ${this.activeAudience === 'mentee' ? 'Панель керування' : 'Панель ментора'}
                </h3>

                <div class="dashboard-stack">
                  ${
                    this.activeAudience === 'mentee'
                      ? `
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Твій Match</span><small>ТОП-3 кандидати</small></div>
                      <div class="dashboard-value">95%</div>
                      <div class="chart-line"></div>
                    </div>
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Оплата</span></div>
                      <div class="calendar-row">
                        <span>APPLE</span><span>PAY</span><span>GOOGLE</span><span>PAY</span><span>FAST</span><span>SAFE</span><span>OK</span>
                      </div>
                      <div class="calendar-slots">
                        <span class="active">1 tap</span><span>Card</span><span>Pay</span><span>Done</span><span>No IBAN</span><span>No chat</span><span>Easy</span>
                      </div>
                    </div>
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Прогрес</span></div>
                      <div class="dashboard-value">+4</div>
                      <div class="payout-meta"><span>Сесій: 8</span><span>Навички: ростуть ★</span></div>
                      <div class="wallet-visual"><div class="wallet-stack"></div><div class="wallet-icon">📈</div></div>
                    </div>
                  `
                      : `
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Доходи</span><small>Цього тижня</small></div>
                      <div class="dashboard-value">$1250</div>
                      <div class="chart-line"></div>
                    </div>
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Календар</span></div>
                      <div class="calendar-row">
                        <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                      </div>
                      <div class="calendar-slots">
                        <span class="active">Supervision</span><span>11:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>19:00</span><span>21:00</span>
                      </div>
                    </div>
                    <div class="dashboard-card">
                      <div class="dashboard-card-head"><span>Виплати</span></div>
                      <div class="dashboard-value">$620</div>
                      <div class="payout-meta"><span>Сесій: 8</span><span>Виплат: 4.9 ★</span></div>
                      <div class="wallet-visual"><div class="wallet-stack"></div><div class="wallet-icon">💳</div></div>
                    </div>
                  `
                  }
                </div>
              </div>
            </div>

            ${this.renderAudienceContent()}

            <div class="floating-cta-inline">
              <div class="cta-copy">
                <strong>Створи зміни разом з Menti</strong>
                <span>Приєднуйся до спільноти менторів</span>
              </div>
              <button class="cta-button" id="floatingCtaBtn" type="button">Стати ментором</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderCommunity(): string {
    return `
      <section class="section community-section">
        <div class="container">
          <h2 class="section-title">Ми вже маємо рушійну силу</h2>
          <p class="section-subtitle">Сформована спільнота для пілотного запуску</p>
          <div class="community-grid">
            <div class="community-card">
              <div class="community-number">Активна група</div>
              <p>Підлітків-бенефіціарів</p>
            </div>
            <div class="community-card">
              <div class="community-number">Мережа експертів</div>
              <p>Менторів та психологів</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderImpactSection(): string {
    return `
      <section class="section impact-section">
        <div class="container">
          <div class="impact-header">
            <h2 class="section-title">Ваша підтримка = реальні зміни</h2>
            <p class="impact-subtitle">Прозорість — основа нашої роботи. Кожна гривня перетворюється на години підтримки для підлітків.</p>
          </div>

          <div class="impact-grid">
            <div class="impact-stats">
              <div class="impact-stat-card">
                <div class="impact-stat-number">+10K</div>
                <div class="impact-stat-label">запланованих годин підтримки</div>
              </div>
              <div class="impact-stat-card">
                <div class="impact-stat-number">95%</div>
                <div class="impact-stat-label">точності AI-матчингу</div>
              </div>
            </div>

            <div class="impact-visual">
              <div class="impact-media">
                <img src="/images/mentorship-session.jpg" alt="Менторська сесія" class="impact-image" onerror="this.src='/images/placeholder.jpg'">
              </div>
            </div>
          </div>

          <div class="impact-conversion">
            <h3 class="impact-conversion-title">Як це працює</h3>
            <div class="conversion-flow">
              <div class="flow-step"><div class="flow-icon">💰</div><div class="flow-amount">100$</div><div class="flow-desc">ваш внесок</div></div>
              <div class="flow-arrow">→</div>
              <div class="flow-step"><div class="flow-icon">🎓</div><div class="flow-amount">5 сесій</div><div class="flow-desc">менторської підтримки</div></div>
              <div class="flow-arrow">→</div>
              <div class="flow-step"><div class="flow-icon">🌟</div><div class="flow-amount">1 дитина</div><div class="flow-desc">з прифронтової зони</div></div>
            </div>
            <div class="conversion-note">
              <span>100$ = 5 менторських сесій для дитини з прифронтової зони</span>
            </div>
          </div>

          <div class="impact-cta">
            <div class="impact-cta-buttons">
              <button class="btn-impact-donate" id="donateBtn" type="button">Стати партнером / донором</button>
              <button class="btn-impact-more" id="impactMoreBtn" type="button">Дізнатись більше про Impact</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderValue(): string {
    return `
      <section class="section value-section">
        <div class="container">
          <h2 class="section-title">Цінність, яку ми створюємо</h2>
          <div class="value-grid">
            <div class="value-card">
              <h3>Освітня</h3>
              <p>Закриття прогалин у знаннях та свідомий вибір професії</p>
            </div>
            <div class="value-card">
              <h3>Психологічна</h3>
              <p>Зниження рівня тривожності та розвиток стійкості</p>
            </div>
            <div class="value-card">
              <h3>Результат</h3>
              <p>Підвищення якості людського капіталу України</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderBusinessModel(): string {
    return `
    <section class="section business-section">
      <div class="container">
        <h2 class="section-title">Бізнес-модель та стратегія</h2>
        <div class="business-grid">
          <div class="business-card">
            <h3>💰 Комерційна складова</h3>
            <p>Комісія з транзакцій, premium-функції, корпоративні підписки</p>
          </div>
          <div class="business-card">
            <h3>🤝 Соціальна місія</h3>
            <p>Грантові програми, волонтерські години від експертів, доступ до знань для кожного</p>
          </div>
        </div>
        <p class="business-note" style="margin-top: 2.8rem; padding: 1.2rem 1.8rem;  border-radius: 1rem; color: #44516f; font-weight: 500; text-align: center;">
          🌱 Соціальна складова реалізовуватиметься за рахунок грантового фінансування, 
          внесків меценатів та партнерів.
        </p>
      </div>
    </section>
  `;
  }

  private renderTestimonials(): string {
    return `
      <section class="section testimonials-carousel-section">
        <div class="container">
          <div class="testimonials-header">
            <h2 class="section-title">Про нас говорять</h2>
            <p class="section-subtitle">Реальні історії від наших учнів та менторів</p>
          </div>

          <div class="testimonials-carousel-container">
            <button class="carousel-arrow carousel-prev" id="carouselPrev" type="button">‹</button>

            <div class="testimonials-carousel">
              <div class="carousel-track" id="carouselTrack">
                ${this.data.testimonials
                  .map(
                    (testimonial, index) => `
                    <div class="testimonial-card-carousel" data-index="${index}">
                      <div class="testimonial-quote-icon">“</div>
                      <p class="testimonial-content-carousel">${testimonial.content}</p>
                      <div class="testimonial-author-carousel">
                        <div class="author-avatar">
                          <div class="avatar-placeholder">${testimonial.authorName.charAt(0)}</div>
                        </div>
                        <div class="author-info">
                          <h4 class="author-name">${testimonial.authorName}</h4>
                          <p class="author-role">${testimonial.authorRole}</p>
                        </div>
                      </div>
                    </div>
                  `,
                  )
                  .join('')}
              </div>
            </div>

            <button class="carousel-arrow carousel-next" id="carouselNext" type="button">›</button>
          </div>

          <div class="carousel-dots">
            ${this.data.testimonials
              .map(
                (_, index) => `
                <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" type="button"></button>
              `,
              )
              .join('')}
          </div>

          <div class="testimonials-footer">
            <button class="btn-all-testimonials" id="allTestimonialsBtn" type="button">
              Переглянути всі відгуки
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private renderCTA(): string {
    return `
      <div class="container">
        <section class="cta-section">
          <h2>Стань частиною змін</h2>
          <p>Приєднуйся до спільноти Mentee та допомагай будувати майбутнє України</p>
          <div class="cta-buttons">
            <button class="btn-download" id="ctaDownloadBtn" type="button">Завантажити додаток</button>
            <button class="btn-volunteer" id="ctaVolunteerBtn" type="button">Стати волонтером-ментором</button>
          </div>
          <div class="cta-contact">
            <a href="tel:+3800969007678">+3800969007678</a>
            <a href="mailto:reznikovaolha@gmail.com">reznikovaolha@gmail.com</a>
          </div>
        </section>
      </div>
    `;
  }

  private renderAuthModal(
    mode: 'login' | 'register' | 'mentor' = 'register',
  ): string {
    const isLogin = mode === 'login';
    const isMentor = mode === 'mentor';

    return `
      <div class="modal-overlay" id="authModal">
        <div class="modal-container">
          <button class="modal-close" type="button">&times;</button>
          <div class="modal-header">
            <div class="modal-logo">Mentee</div>
            <h2>${isLogin ? 'Вхід' : isMentor ? 'Стати ментором' : 'Реєстрація'}</h2>
            <p>${isLogin ? 'Введіть ваші дані для входу' : isMentor ? 'Приєднуйтесь до команди менторів' : 'Створіть акаунт щоб приєднатись'}</p>
          </div>
          <form class="modal-form" id="authForm">
            ${
              !isLogin
                ? `
                <div class="form-group">
                  <label for="name">Ім'я</label>
                  <input type="text" id="name" name="name" placeholder="Ваше ім'я" required>
                </div>
              `
                : ''
            }
            ${
              isMentor
                ? `
                <div class="form-group">
                  <label for="expertise">Спеціалізація</label>
                  <input type="text" id="expertise" name="expertise" placeholder="Наприклад: Психолог, Ментор" required>
                </div>
                <div class="form-group">
                  <label for="experience">Досвід (років)</label>
                  <input type="number" id="experience" name="experience" placeholder="5" required>
                </div>
              `
                : ''
            }
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
              <label for="password">Пароль</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required>
            </div>
            ${
              !isLogin
                ? `
                <div class="form-group">
                  <label for="confirmPassword">Підтвердіть пароль</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••" required>
                </div>
              `
                : ''
            }
            <div class="form-group checkbox-group">
              <input type="checkbox" id="terms" name="terms" required>
              <label for="terms">Я погоджуюсь з <a href="#">умовами використання</a> та <a href="#">політикою конфіденційності</a></label>
            </div>
            <button type="submit" class="modal-submit">
              ${isLogin ? 'Увійти' : isMentor ? 'Зареєструватись як ментор' : 'Зареєструватись'}
            </button>
          </form>
          <div class="modal-footer">
            ${
              isLogin
                ? `<p>Ще немає акаунту? <a href="#" id="switchToRegister">Зареєструватись</a></p>`
                : `<p>Вже є акаунт? <a href="#" id="switchToLogin">Увійти</a></p>`
            }
          </div>
          ${
            !isLogin
              ? `
              <div class="modal-divider"><span>або</span></div>
              <div class="social-login">
                <button class="social-btn google" type="button">Google</button>
                <button class="social-btn facebook" type="button">Facebook</button>
              </div>
            `
              : ''
          }
        </div>
      </div>
    `;
  }

  public render(): void {
    const headerElement = document.getElementById('header');
    const mainElement = document.getElementById('main-content');
    const footerElement = document.getElementById('footer');

    if (headerElement) {
      headerElement.innerHTML = this.header.render();
    }

    if (mainElement) {
      mainElement.innerHTML = `
        ${this.renderHero()}
        ${this.renderFlagshipBlocks()}
        ${this.renderVolunteerCall()}
        ${this.renderMission()}
        ${this.renderFounder()}
        ${this.renderFeatures()}
        ${this.renderProblem()}
        ${this.renderSteps()}
        ${this.renderUniqueness()}
        ${this.renderCommunity()}
        ${this.renderImpactSection()}
        ${this.renderValue()}
        ${this.renderBusinessModel()}
        ${this.renderTestimonials()}
        ${this.renderCTA()}
      `;
    }

    if (footerElement) {
      footerElement.innerHTML = this.footer.render();
    }

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks?.classList.toggle('show');
      });
    }

    this.initTeamCarousel();
    this.initTestimonialsCarousel();

    document.getElementById('downloadBtn')?.addEventListener('click', () => {
      alert('Додаток буде доступний скоро! Слідкуйте за оновленнями.');
    });

    document.getElementById('ctaDownloadBtn')?.addEventListener('click', () => {
      alert('Додаток буде доступний скоро! Слідкуйте за оновленнями.');
    });

    [
      'volunteerBtn',
      'ctaVolunteerBtn',
      'volunteerCallBtn',
      'floatingCtaBtn',
    ].forEach((id) => {
      document.getElementById(id)?.addEventListener('click', () => {
        this.openModal('mentor');
      });
    });

    document.getElementById('registerBtn')?.addEventListener('click', () => {
      this.openModal('register');
    });

    document.getElementById('loginLink')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal('login');
    });

    document
      .getElementById('volunteerAskBtn')
      ?.addEventListener('click', () => {
        alert("Зв'яжіться з нами: reznikovaolha@gmail.com або +3800969007678");
      });

    document.getElementById('donateBtn')?.addEventListener('click', () => {
      alert("Дякуємо за інтерес! Зв'яжіться з нами: reznikovaolha@gmail.com");
    });

    document.getElementById('impactMoreBtn')?.addEventListener('click', () => {
      alert(
        'Прозорість — наша цінність. 100$ = 5 менторських сесій для дитини з прифронтової зони.',
      );
    });

    document
      .getElementById('allTestimonialsBtn')
      ?.addEventListener('click', () => {
        alert(
          'Всі відгуки будуть доступні незабаром! Слідкуйте за оновленнями.',
        );
      });

    document
      .querySelectorAll<HTMLButtonElement>('.top-switch-btn')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const audience = button.dataset.audience as
            | 'mentee'
            | 'mentor'
            | undefined;
          if (!audience || audience === this.activeAudience) return;
          this.activeAudience = audience;
          this.render();
        });
      });
  }

  private initTeamCarousel(): void {
    const prevBtn = document.getElementById('teamPrev');
    const nextBtn = document.getElementById('teamNext');
    const centerCard = document.getElementById('teamCenterCard');
    const topLeft = document.getElementById('teamSlotTopLeft');
    const topRight = document.getElementById('teamSlotTopRight');
    const bottomLeft = document.getElementById('teamSlotBottomLeft');
    const bottomRight = document.getElementById('teamSlotBottomRight');
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
    let currentIndex = 0;
    let hoverTimer: number | null = null;

    const normalizeIndex = (index: number) =>
      (index + members.length) % members.length;
    const getMember = (index: number) => members[normalizeIndex(index)];

    const renderCenter = (member: (typeof members)[number]) => `
    <div class="team-center-avatar-wrap">
      <div class="team-center-avatar-glow"></div>
      <div class="team-center-avatar-ring">
        <img
          src="${member.photo}"
          alt="${member.name}"
          class="team-center-avatar"
          onerror="this.src='/images/placeholder-avatar.jpg'"
        >
      </div>
    </div>

    <div class="team-center-content">
      <h3 class="team-center-name">${member.name}</h3>
      <p class="team-center-role">${member.role}</p>
      <p class="team-center-text">${member.quote}</p>
    </div>
  `;

    const renderSide = (
      member: (typeof members)[number],
      targetIndex: number,
      text: string,
    ) => `
    <button class="team-side-node" type="button" data-index="${targetIndex}" aria-label="${member.name}">
      <div class="team-side-avatar-wrap">
        <div class="team-side-avatar-ring">
          <img
            src="${member.photo}"
            alt="${member.name}"
            class="team-side-avatar"
            onerror="this.src='/images/placeholder-avatar.jpg'"
          >
        </div>
      </div>
      <p class="team-side-text">${text}</p>
    </button>
  `;

    const bindHoverSwitch = (container: HTMLElement | null) => {
      const button =
        container?.querySelector<HTMLButtonElement>('button[data-index]');
      if (!button) return;

      const targetIndex = Number(button.dataset.index);

      const activate = () => {
        currentIndex = targetIndex;
        updateTeam();
      };

      button.addEventListener('click', activate);

      button.addEventListener('mouseenter', () => {
        if (hoverTimer) window.clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => {
          activate();
        }, 160);
      });

      button.addEventListener('mouseleave', () => {
        if (hoverTimer) {
          window.clearTimeout(hoverTimer);
          hoverTimer = null;
        }
      });
    };

    const updateTeam = () => {
      const center = getMember(currentIndex);
      const memberTopLeft = getMember(currentIndex - 2);
      const memberTopRight = getMember(currentIndex + 1);
      const memberBottomLeft = getMember(currentIndex - 1);
      const memberBottomRight = getMember(currentIndex + 2);

      centerCard.innerHTML = renderCenter(center);

      topLeft.innerHTML = renderSide(
        memberTopLeft,
        normalizeIndex(currentIndex - 2),
        memberTopLeft.description,
      );

      topRight.innerHTML = renderSide(
        memberTopRight,
        normalizeIndex(currentIndex + 1),
        memberTopRight.description,
      );

      bottomLeft.innerHTML = renderSide(
        memberBottomLeft,
        normalizeIndex(currentIndex - 1),
        memberBottomLeft.description,
      );

      bottomRight.innerHTML = renderSide(
        memberBottomRight,
        normalizeIndex(currentIndex + 2),
        memberBottomRight.description,
      );

      bindHoverSwitch(topLeft);
      bindHoverSwitch(topRight);
      bindHoverSwitch(bottomLeft);
      bindHoverSwitch(bottomRight);

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    prevBtn.addEventListener('click', () => {
      currentIndex = normalizeIndex(currentIndex - 1);
      updateTeam();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = normalizeIndex(currentIndex + 1);
      updateTeam();
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        currentIndex = Number(dot.dataset.index || 0);
        updateTeam();
      });
    });

    updateTeam();
  }

  private initTestimonialsCarousel(): void {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dots = document.querySelectorAll<HTMLElement>('.carousel-dot');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const totalCards = this.data.testimonials.length;

    const updateCarousel = (index: number) => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateCarousel(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel(currentIndex);
    });

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        currentIndex = Number(dot.dataset.index || 0);
        updateCarousel(currentIndex);
      });
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
      alert('Дякуємо! Перевірте вашу пошту для підтвердження.');
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 250);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MentiApp().render();
});
