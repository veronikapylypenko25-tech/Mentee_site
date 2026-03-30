export class Footer {
  private siteName: string;

  constructor(siteName: string = 'Menti') {
    this.siteName = siteName;
  }

  render(): string {
    return `
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
    `;
  }
}
