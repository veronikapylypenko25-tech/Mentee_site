(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();class B{constructor(e="Menti",t=!1){this.baseUrl="/Mentee_site/docs/",this.siteName=e,this.isLoggedIn=t}render(){return`
      <nav class="navbar">
        <div class="container">
          <a href="${this.baseUrl}" class="logo">
            <img src="${this.baseUrl}images/menti_logo.png" alt="Menti" class="logo-icon" width="120" height="120">
            <span class="logo-text">${this.siteName}</span>
          </a>

          <div class="nav-links">
            <a href="#" class="nav-link">Про проєкт</a>
            <a href="#" class="nav-link">Функціонал</a>
            <a href="#" class="nav-link">Спільнота</a>
            <a href="#" class="nav-link">Контакти</a>
            ${this.isLoggedIn?`
                <a href="${this.baseUrl}dashboard" class="nav-link">Кабінет</a>
                <button class="btn-outline" id="logoutBtn" type="button">Вийти</button>
              `:`
                <a href="#" class="nav-link" id="loginLink">Увійти</a>
                <div class="button-group">
                  <button class="btn-register" id="registerBtn" type="button">
                    <span>Зареєструватися</span>
                    <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              `}
          </div>

          <button class="mobile-menu-btn" type="button">☰</button>
        </div>
      </nav>
    `}}class L{constructor(e="Menti"){this.siteName=e}render(){return`
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h4>${this.siteName}</h4>
              <p>Персональна екосистема розвитку: менторство, психологічна підтримка та AI-навігація для молоді</p>
            </div>

            <div class="footer-section">
              <h4>Навігація</h4>
              <ul>
                <li><a href="#home">Головна</a></li>
                <li><a href="#features">Можливості</a></li>
                <li><a href="#mentors">Ментори</a></li>
                <li><a href="#contact">Контакти</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Контакти</h4>
              <ul>
                <li><a href="tel:+3800969007678">+38 096 900 76 78</a></li>
                <li><a href="mailto:reznikovaolha@gmail.com">reznikovaolha@gmail.com</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Слідкуйте за нами</h4>
              <div class="social-links">
                <a
                  href="https://www.instagram.com/mentee_app?igsh=ODhkYnpsdjExcnc0&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-icon instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
              <p class="social-text">Приєднуйтесь до нашої спільноти!</p>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} ${this.siteName}. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    `}}class x{constructor(){this.activeAudience="mentee",this.header=new B("Mentee"),this.footer=new L("Mentee"),this.data=this.loadData()}asset(e){return`/Mentee_site/docs/${e.replace(/^\/+/,"")}`}loadData(){return{features:[{id:"1",title:"AI-діагностика",description:"Персоналізований підхід на основі експертних методик провідних українських освітян",icon:"🤖"},{id:"2",title:"Єдиний простір",description:"Адміністрування, чати, завдання та відстеження прогресу в одному місці",icon:"📱"},{id:"3",title:"Психологічна підтримка",description:"Зниження рівня тривожності та розвиток стійкості (resilience)",icon:"🧠"}],steps:[{number:1,title:"Первинна діагностика",description:"AI-асистент проводить точну діагностику схильностей особистості",tags:["AI","Тестування"]},{number:2,title:"Підбір фахівця",description:"Швидкий місток між підлітком та ментором/психологом",tags:["Ментор","Психолог"]},{number:3,title:"Розвиток та підтримка",description:"Інтелектуальна екосистема веде трекінг успішності",tags:["Прогрес","Аналітика"]}],testimonials:[{id:"1",authorName:"Оля Резнікова",authorRole:"Засновниця платформи",content:"Я бачила успішні трансформації одиниць, але хотіла допомогти тисячам. Mentee народився на перетині мого досвіду в освіті та віри в те, що технології мають служити людині."},{id:"2",authorName:"Підлітки України",authorRole:"Бенефіціари",content:"Понад 70% підлітків відчувають високий рівень тривожності. Mentee створений, щоб допомогти кожному."},{id:"3",authorName:"Марія Коваленко",authorRole:"Керівниця програм менторства",content:"Mentee дає можливість підліткам отримувати якісну підтримку незалежно від місця проживання. Це справжня революція в освіті."}],mentorBenefits:["🧑‍🎓 Для підлітків: персоналізований план розвитку","👥 Для менторів: зручні інструменти роботи","📊 Відстеження прогресу в реальному часі","🔒 Безпечне середовище для спілкування","🎯 Профорієнтація та психологічна підтримка","🤝 Спільнота однодумців"],teamMembers:[{id:"1",name:"Ольга Резнікова",role:"CEO ",description:"Засновниця освітньої платформи, менторка молодіжних ініціатив",fullDescription:"Реалізуючи менторські програми, я усвідомила головну проблему — відсутність швидкого містка між підлітком та фахівцем. Я бачила успішні трансформації одиниць, але хотіла допомогти тисячам. Mentee народився на перетині мого досвіду в освіті та віри в те, що технології мають служити людині, масштабуючи підтримку там, де вона найпотрібніша.",photo:this.asset("images/team/olha_reznikova_.png"),quote:"Кожен підліток заслуговує на шанс розкрити свій потенціал",contacts:{phone:"+380969007678",email:"reznikovaolha@gmail.com",social:"https://instagram.com/olla_reznikova"}},{id:"2",name:"Вероніка Пилипенко",role:"Mobile Developer",description:"Розробниця сайту та мобільного додатку Mentee",fullDescription:"Я вірю, що технології можуть змінювати життя на краще. Долучилась до Mentee, щоб створити зручний та доступний інструмент для підлітків, які потребують підтримки. Моя місія — зробити додаток інтуїтивно зрозумілим та корисним для кожного користувача.",photo:this.asset("images/team/veronika_pylypenko.png"),quote:"Технології мають бути доступними та корисними для кожного",contacts:{phone:"+380684801933",email:"veronika.pylypenko.25@kse.org.ua",social:"https://instagram.com/nn.2n.nnj"}},{id:"3",name:"Микита Сідоров",role:"UI/UX Designer",description:"Дизайнер інтерфейсів та користувацького досвіду",fullDescription:"Дизайн — це не просто естетика, це спосіб зробити складне простим. Я приєднався до Mentee, щоб створити інтерфейс, який буде зрозумілим та комфортним для підлітків. Кожен елемент дизайну має надихати та допомагати користувачам досягати своїх цілей.",photo:this.asset("images/team/mykyta_sidorov.png"),quote:"Гарний дизайн робить продукт зрозумілим, а великий — незабутнім",contacts:{phone:"+380989522471",email:"mykyta.sidorov.25@kse.org.ua",social:"https://instagram.com/naukyr"}},{id:"4",name:"Поліна Гармаш",role:"Content Creator",description:"Створює контент та комунікації",fullDescription:"Слова мають силу. Я долучилась до Mentee, щоб допомогти розповісти історії тих, хто потребує підтримки, та показати, як важливо мати наставника поруч. Моя мета — створювати контент, який надихає, підтримує та показує реальні зміни в житті підлітків.",photo:this.asset("images/team/polina_harmash_.png"),quote:"Кожна історія має бути почутою",contacts:{phone:"+380958069506",email:"polina.harmash.25@kse.org.ua",social:"https://instagram.com/harmashpolinaua"}},{id:"5",name:"Єлизавета Приходько",role:"Project Manager",description:"Координаторка проєктів, організаторка менторських програм",fullDescription:"Я вірю, що правильно організований процес може змінити життя багатьох підлітків. Долучилась до Mentee, щоб вибудовувати ефективну комунікацію між менторами та учнями, забезпечувати якісне планування та контроль усіх етапів роботи. Моя мета — зробити Mentee зручним та прозорим для всіх учасників освітнього процесу.",photo:this.asset("images/team/yelyzaveta_pryhodko.png"),quote:"Якісне планування — запорука успішного результату",contacts:{email:"yelyzaveta.prykhodko@kse.org.ua"}}]}}renderHero(){return`
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
                  <img src="${this.asset("images/screen_page.png")}" alt="Menti App" class="phone-screenshot">
                </div>
                <div class="phone-dynamic-island"></div>
                <div class="phone-home"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}renderFlagshipBlocks(){return`
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
    `}renderVolunteerCall(){return`
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
              <img src="${this.asset("images/gif.gif")}" alt="Менторська сесія" class="volunteer-gif">
                <div class="floating-element floating-1">👥 280+ менторів</div>
                <div class="floating-element floating-2">⏱️ 1-2 год/міс</div>
                <div class="floating-element floating-3">💚 Зміни життя</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}renderMission(){return`
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
    `}renderFounder(){return`
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
            ${this.data.teamMembers.map((e,t)=>`
                  <button class="team-dot ${t===0?"active":""}" data-index="${t}" type="button"></button>
                `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}renderFeatures(){return`
      <section class="section">
        <div class="container">
          <h2 class="section-title">Чому Mentee?</h2>
          <p class="section-subtitle">Інтелектуальна екосистема, яка веде трекінг успішності</p>
          <div class="features-grid">
            ${this.data.features.map(e=>`
                <div class="feature-card">
                  <div class="feature-icon">${e.icon}</div>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                </div>
              `).join("")}
          </div>
        </div>
      </section>
    `}renderProblem(){return`
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
    `}renderSteps(){return`
      <section class="section">
        <div class="container">
          <h2 class="section-title">Як це працює</h2>
          <div class="steps-grid">
            ${this.data.steps.map(e=>`
                <div class="step-item">
                  <div class="step-number">${e.number}</div>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                  ${e.tags?`
                    <div class="tags">
                      ${e.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
                    </div>
                  `:""}
                </div>
              `).join("")}
          </div>
        </div>
      </section>
    `}renderAudienceContent(){const e=this.activeAudience==="mentee"?{title:"Хочу навчатись",items:[{title:"AI-Matching",text:"Твій ідеальний фахівець за декілька кліків: обирай серед ТОП-3, які підходять саме під твій вайб та ціль."},{title:"Верифікована безпека",text:"Ми вже перевірили всі дипломи та бекграунд експертів. Тобі залишається лише зареєструватись."},{title:"Оплата в один дотик",text:"Apple Pay / Google Pay без реквізитів чи скріншотів. Сплачуй сесії так само легко, як купуєш каву."},{title:"Roadmap та трекер навчання",text:"Завдяки вбудованій системі асесменту ти бачиш реальний прогрес своїх навичок після кожної сесії."}]}:{title:"Хочу навчати",items:[{title:"Гарантований дохід (Escrow)",text:"Оплата зараховується автоматично — прозоро, вчасно та без зайвих переписок."},{title:"Авто-календар",text:"Синхронізація з Google / Outlook. Система сама нагадує учню та веде облік твоїх годин."},{title:"Нуль маркетингу",text:"AI сам приводить до тебе вмотивованих учнів. Просто роби те, що любиш."},{title:"Автоматизована операційка",text:"Нагадування, статуси сесій, облік годин і базова комунікація працюють у системі."}]};return`
      <div class="audience-panel">
        <h4>${e.title}</h4>
        <div class="audience-feature-list">
          ${e.items.map(t=>`
              <div class="audience-feature-card">
                <h5>${t.title}</h5>
                <p>${t.text}</p>
              </div>
            `).join("")}
        </div>
      </div>
    `}renderUniqueness(){return`
      <section class="section uniqueness-dashboard-section">
        <div class="container">
          <div class="uniqueness-shell">
            <div class="uniqueness-top-switch" role="tablist" aria-label="Режим перегляду">
              <button
                class="top-switch-btn ${this.activeAudience==="mentee"?"active":""}"
                type="button"
                data-audience="mentee"
              >
                Для Menti
              </button>
              <button
                class="top-switch-btn ${this.activeAudience==="mentor"?"active":""}"
                type="button"
                data-audience="mentor"
              >
                Для Менторів
              </button>
            </div>

            <div class="uniqueness-grid">
              <div class="journey-column">
                <h3 class="uniqueness-block-title">
                  ${this.activeAudience==="mentee"?"Шлях до результату":"Шлях ментора"}
                </h3>

                <div class="journey-flow">
                  <div class="journey-line"></div>

                  ${this.activeAudience==="mentee"?`
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
                  `:`
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
                  `}
                </div>
              </div>

              <div class="dashboard-column">
                <h3 class="uniqueness-block-title">
                  ${this.activeAudience==="mentee"?"Панель керування":"Панель ментора"}
                </h3>

                <div class="dashboard-stack">
                  ${this.activeAudience==="mentee"?`
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
                  `:`
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
                  `}
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
    `}renderCommunity(){return`
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
    `}renderImpactSection(){return`
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
                <img src="${this.asset("images/mentorship-session.jpg")}" alt="Менторська сесія" class="impact-image" onerror="this.src='${this.asset("images/placeholder.jpg")}'">
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
    `}renderValue(){return`
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
    `}renderBusinessModel(){return`
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
<p class="business-note" style="margin-top: 2rem; padding: 0.5rem 0; background: transparent; border: none; color: #44516f; font-weight: 500; text-align: center; font-size: 1rem;">
  🌱 Соціальна складова реалізовуватиметься за рахунок грантового фінансування, внесків меценатів та партнерів.
</p>    </section>
  `}renderTestimonials(){return`
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
                ${this.data.testimonials.map((e,t)=>`
                    <div class="testimonial-card-carousel" data-index="${t}">
                      <div class="testimonial-quote-icon">“</div>
                      <p class="testimonial-content-carousel">${e.content}</p>
                      <div class="testimonial-author-carousel">
                        <div class="author-avatar">
                          <div class="avatar-placeholder">${e.authorName.charAt(0)}</div>
                        </div>
                        <div class="author-info">
                          <h4 class="author-name">${e.authorName}</h4>
                          <p class="author-role">${e.authorRole}</p>
                        </div>
                      </div>
                    </div>
                  `).join("")}
              </div>
            </div>

            <button class="carousel-arrow carousel-next" id="carouselNext" type="button">›</button>
          </div>

          <div class="carousel-dots">
            ${this.data.testimonials.map((e,t)=>`
                <button class="carousel-dot ${t===0?"active":""}" data-index="${t}" type="button"></button>
              `).join("")}
          </div>

          <div class="testimonials-footer">
            <button class="btn-all-testimonials" id="allTestimonialsBtn" type="button">
              Переглянути всі відгуки
            </button>
          </div>
        </div>
      </section>
    `}renderCTA(){return`
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
    `}renderAuthModal(e="register"){const t=e==="login",n=e==="mentor";return`
      <div class="modal-overlay" id="authModal">
        <div class="modal-container">
          <button class="modal-close" type="button">&times;</button>
          <div class="modal-header">
            <div class="modal-logo">Mentee</div>
            <h2>${t?"Вхід":n?"Стати ментором":"Реєстрація"}</h2>
            <p>${t?"Введіть ваші дані для входу":n?"Приєднуйтесь до команди менторів":"Створіть акаунт щоб приєднатись"}</p>
          </div>
          <form class="modal-form" id="authForm">
            ${t?"":`
                <div class="form-group">
                  <label for="name">Ім'я</label>
                  <input type="text" id="name" name="name" placeholder="Ваше ім'я" required>
                </div>
              `}
            ${n?`
                <div class="form-group">
                  <label for="expertise">Спеціалізація</label>
                  <input type="text" id="expertise" name="expertise" placeholder="Наприклад: Психолог, Ментор" required>
                </div>
                <div class="form-group">
                  <label for="experience">Досвід (років)</label>
                  <input type="number" id="experience" name="experience" placeholder="5" required>
                </div>
              `:""}
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>
            <div class="form-group">
              <label for="password">Пароль</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required>
            </div>
            ${t?"":`
                <div class="form-group">
                  <label for="confirmPassword">Підтвердіть пароль</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••" required>
                </div>
              `}
            <div class="form-group checkbox-group">
              <input type="checkbox" id="terms" name="terms" required>
              <label for="terms">Я погоджуюсь з <a href="#">умовами використання</a> та <a href="#">політикою конфіденційності</a></label>
            </div>
            <button type="submit" class="modal-submit">
              ${t?"Увійти":n?"Зареєструватись як ментор":"Зареєструватись"}
            </button>
          </form>
          <div class="modal-footer">
            ${t?'<p>Ще немає акаунту? <a href="#" id="switchToRegister">Зареєструватись</a></p>':'<p>Вже є акаунт? <a href="#" id="switchToLogin">Увійти</a></p>'}
          </div>
          ${t?"":`
              <div class="modal-divider"><span>або</span></div>
              <div class="social-login">
                <button class="social-btn google" type="button">Google</button>
                <button class="social-btn facebook" type="button">Facebook</button>
              </div>
            `}
        </div>
      </div>
    `}render(){const e=document.getElementById("header"),t=document.getElementById("main-content"),n=document.getElementById("footer");e&&(e.innerHTML=this.header.render()),t&&(t.innerHTML=`
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
      `),n&&(n.innerHTML=this.footer.render()),this.attachEventListeners()}attachEventListeners(){var t,n,a,s,o,r,c,p;const e=document.querySelector(".mobile-menu-btn");e&&e.addEventListener("click",()=>{const i=document.querySelector(".nav-links");i==null||i.classList.toggle("show")}),this.initTeamCarousel(),this.initTestimonialsCarousel(),(t=document.getElementById("downloadBtn"))==null||t.addEventListener("click",()=>{alert("Додаток буде доступний скоро! Слідкуйте за оновленнями.")}),(n=document.getElementById("ctaDownloadBtn"))==null||n.addEventListener("click",()=>{alert("Додаток буде доступний скоро! Слідкуйте за оновленнями.")}),["volunteerBtn","ctaVolunteerBtn","volunteerCallBtn","floatingCtaBtn"].forEach(i=>{var l;(l=document.getElementById(i))==null||l.addEventListener("click",()=>{this.openModal("mentor")})}),(a=document.getElementById("registerBtn"))==null||a.addEventListener("click",()=>{this.openModal("register")}),(s=document.getElementById("loginLink"))==null||s.addEventListener("click",i=>{i.preventDefault(),this.openModal("login")}),(o=document.getElementById("volunteerAskBtn"))==null||o.addEventListener("click",()=>{alert("Зв'яжіться з нами: reznikovaolha@gmail.com або +3800969007678")}),(r=document.getElementById("donateBtn"))==null||r.addEventListener("click",()=>{alert("Дякуємо за інтерес! Зв'яжіться з нами: reznikovaolha@gmail.com")}),(c=document.getElementById("impactMoreBtn"))==null||c.addEventListener("click",()=>{alert("Прозорість — наша цінність. 100$ = 5 менторських сесій для дитини з прифронтової зони.")}),(p=document.getElementById("allTestimonialsBtn"))==null||p.addEventListener("click",()=>{alert("Всі відгуки будуть доступні незабаром! Слідкуйте за оновленнями.")}),document.querySelectorAll(".top-switch-btn").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.audience;!l||l===this.activeAudience||(this.activeAudience=l,this.render())})})}initTeamCarousel(){const e=document.getElementById("teamPrev"),t=document.getElementById("teamNext"),n=document.getElementById("teamCenterCard"),a=document.getElementById("teamSlotTopLeft"),s=document.getElementById("teamSlotTopRight"),o=document.getElementById("teamSlotBottomLeft"),r=document.getElementById("teamSlotBottomRight"),c=document.querySelectorAll(".team-dot");if(!e||!t||!n||!a||!s||!o||!r)return;const p=this.data.teamMembers;let i=0,l=null;const u=d=>(d+p.length)%p.length,h=d=>p[u(d)],k=d=>`
    <div class="team-center-avatar-wrap">
      <div class="team-center-avatar-glow"></div>
      <div class="team-center-avatar-ring">
        <img
          src="${d.photo}"
          alt="${d.name}"
          class="team-center-avatar"
          onerror="this.src='${this.asset("images/placeholder-avatar.jpg")}'"
        >
      </div>
    </div>

    <div class="team-center-content">
      <h3 class="team-center-name">${d.name}</h3>
      <p class="team-center-role">${d.role}</p>
      <p class="team-center-text">${d.quote}</p>
    </div>
  `,f=(d,v,m)=>`
    <button class="team-side-node" type="button" data-index="${v}" aria-label="${d.name}">
      <div class="team-side-avatar-wrap">
        <div class="team-side-avatar-ring">
          <img
            src="${d.photo}"
            alt="${d.name}"
            class="team-side-avatar"
            onerror="this.src='${this.asset("images/placeholder-avatar.jpg")}'"
          >
        </div>
      </div>
      <p class="team-side-text">${m}</p>
    </button>
  `,y=d=>{const v=d==null?void 0:d.querySelector("button[data-index]");if(!v)return;const m=Number(v.dataset.index),g=()=>{i=m,b()};v.addEventListener("click",g),v.addEventListener("mouseenter",()=>{l&&window.clearTimeout(l),l=window.setTimeout(()=>{g()},160)}),v.addEventListener("mouseleave",()=>{l&&(window.clearTimeout(l),l=null)})},b=()=>{const d=h(i),v=h(i-2),m=h(i+1),g=h(i-1),$=h(i+2);n.innerHTML=k(d),a.innerHTML=f(v,u(i-2),v.description),s.innerHTML=f(m,u(i+1),m.description),o.innerHTML=f(g,u(i-1),g.description),r.innerHTML=f($,u(i+2),$.description),y(a),y(s),y(o),y(r),c.forEach((E,M)=>{E.classList.toggle("active",M===i)})};e.addEventListener("click",()=>{i=u(i-1),b()}),t.addEventListener("click",()=>{i=u(i+1),b()}),c.forEach(d=>{d.addEventListener("click",()=>{i=Number(d.dataset.index||0),b()})}),b()}initTestimonialsCarousel(){const e=document.getElementById("carouselTrack"),t=document.getElementById("carouselPrev"),n=document.getElementById("carouselNext"),a=document.querySelectorAll(".carousel-dot");if(!e||!t||!n)return;let s=0;const o=this.data.testimonials.length,r=c=>{e.style.transform=`translateX(-${c*100}%)`,a.forEach((p,i)=>p.classList.toggle("active",i===c))};t.addEventListener("click",()=>{s=(s-1+o)%o,r(s)}),n.addEventListener("click",()=>{s=(s+1)%o,r(s)}),a.forEach(c=>{c.addEventListener("click",()=>{s=Number(c.dataset.index||0),r(s)})})}openModal(e){var t;(t=document.getElementById("authModal"))==null||t.remove(),document.body.insertAdjacentHTML("beforeend",this.renderAuthModal(e)),requestAnimationFrame(()=>{var n;(n=document.getElementById("authModal"))==null||n.classList.add("show"),this.attachModalListeners()})}attachModalListeners(){var t,n,a,s;const e=document.getElementById("authModal");e&&((t=e.querySelector(".modal-close"))==null||t.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),250)}),e.addEventListener("click",o=>{o.target===e&&(e.classList.remove("show"),setTimeout(()=>e.remove(),250))}),(n=document.getElementById("switchToLogin"))==null||n.addEventListener("click",o=>{o.preventDefault(),e.remove(),this.openModal("login")}),(a=document.getElementById("switchToRegister"))==null||a.addEventListener("click",o=>{o.preventDefault(),e.remove(),this.openModal("register")}),(s=document.getElementById("authForm"))==null||s.addEventListener("submit",o=>{o.preventDefault(),alert("Дякуємо! Перевірте вашу пошту для підтвердження."),e.classList.remove("show"),setTimeout(()=>e.remove(),250)}))}}document.addEventListener("DOMContentLoaded",()=>{new x().render()});
