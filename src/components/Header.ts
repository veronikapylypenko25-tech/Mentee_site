export class Header {
  private siteName: string;
  private isLoggedIn: boolean;
  private readonly baseUrl = import.meta.env.BASE_URL;

  constructor(siteName: string = 'Menti', isLoggedIn: boolean = false) {
    this.siteName = siteName;
    this.isLoggedIn = isLoggedIn;
  }

  render(): string {
    return `
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
            ${
              this.isLoggedIn
                ? `
                <a href="${this.baseUrl}dashboard" class="nav-link">Кабінет</a>
                <button class="btn-outline" id="logoutBtn" type="button">Вийти</button>
              `
                : `
                <a href="#" class="nav-link" id="loginLink">Увійти</a>
                <div class="button-group">
                  <button class="btn-register" id="registerBtn" type="button">
                    <span>Зареєструватися</span>
                    <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              `
            }
          </div>

          <button class="mobile-menu-btn" type="button">☰</button>
        </div>
      </nav>
    `;
  }
}
