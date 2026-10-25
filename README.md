# 💰 Money Plan

### Give every rupee a job.

**Money Plan** is a minimal, Apple-inspired personal budgeting calculator that helps you allocate your income across five financial categories: Safety, Growth, Fixed & Safe, Skill, and Live.

Choose your financial planning phase, enter an amount, and instantly see how your money can be distributed through interactive visualizations and clear percentage-based allocations.

Designed with simplicity, responsive layouts, and a distraction-free experience in mind, Money Plan makes financial planning easier to understand and use.

---

## ✨ Features

- **Instant calculations** — Automatically distribute your entered amount across five financial categories.
- **Two planning phases** — Switch between building your emergency fund and growing your investments.
- **Interactive donut chart** — Visualize your allocations and explore the relationship between the chart and category cards.
- **Multiple currencies** — Display amounts in INR (₹), USD ($), EUR (€), and GBP (£).
- **Light and dark themes** — Switch between visual themes to suit your preference.
- **Quick amount selection** — Use preset amount buttons to get started faster.
- **Copyable summaries** — Copy your complete allocation breakdown to the clipboard.
- **Persistent preferences** — Remember your previous settings using browser local storage.
- **Responsive design** — Works across desktop, tablet, and mobile screens.
- **Reduced-motion support** — Respects system preferences for reduced animation.
- **No build process required** — Run the application directly in a browser.

---

## 🧩 The 5-Step Money Plan

Money Plan organizes your income into five categories.

| Category | Phase 1 | Phase 2 | Purpose |
|---|---:|---:|---|
| 🛡️ Safety | 20% | 5% | Emergency savings and financial protection |
| 📈 Growth | 15% | 25% | Long-term investing and wealth building |
| 🎯 Fixed & Safe | 10% | 15% | Planned expenses and short-term goals |
| 🧠 Skill | 10% | 10% | Courses, books, tools, and learning |
| 🎉 Live | 45% | 45% | Everyday expenses, lifestyle, and enjoyment |
| **Total** | **100%** | **100%** | |

### Phase 1 — Build your safety net

Prioritize financial security while building your emergency fund. Allocate 20% to Safety and use the remaining categories to balance growth, planned expenses, skill development, and lifestyle.

### Phase 2 — Grow beyond your safety net

Once your emergency fund is complete, reduce the Safety allocation to 5% and increase Growth to 25%, while maintaining the other planned allocations.

*These percentages are configurable planning guidelines, not universally appropriate financial recommendations.*

---

## 🖥️ Preview

Money Plan features a clean, Apple-inspired interface with:

- A prominent income input area.
- Quick-select amount buttons.
- An interactive Phase 1 / Phase 2 selector.
- A circular allocation visualization.
- Individual category cards with percentages, amounts, and progress bars.
- Currency and theme controls.

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Application structure and semantic markup |
| CSS3 | Styling, responsive layouts, themes, and animations |
| JavaScript | Calculations, interactions, chart rendering, and state management |
| Tailwind CSS | Utility-first styling via CDN |
| SVG | Interactive donut chart |
| Web Storage API | Persisting user preferences locally |
| GitHub Actions | Automated deployment workflow |
| GitHub Pages | Static website hosting |

---

## 🚀 Getting Started

### Prerequisites

You only need:

- A modern web browser.
- An internet connection for the externally loaded Tailwind CSS and Google Fonts resources.

No package manager, backend server, or build tools are required for basic use.

### Run locally

**Option 1 — Open directly**

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

**Option 2 — Use a local development server**

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/money-plan.git
```

Navigate into the project:

```bash
cd money-plan
```

Start a local server using Python:

```bash
python -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

Replace `YOUR_USERNAME` with your GitHub username. The commands above assume your repository is named `money-plan`.

---

## 🌐 Deploy with GitHub Pages

Money Plan includes a GitHub Actions workflow that automatically deploys the static website.

### Setup instructions

1. Create a repository on GitHub.
2. Upload the project files while preserving the folder structure.
3. Ensure your default deployment branch is named `main`, or update the workflow to match your branch.
4. Open **Settings → Pages** in your repository.
5. Set the deployment source to **GitHub Actions**.
6. Push your changes to `main`, or manually run the workflow from the **Actions** tab.

GitHub Actions will build the Pages artifact from the repository and publish the website.

Your published URL will be available in the repository's **Settings → Pages** section after a successful deployment.

---

## 📁 Project Structure

```text
money-plan/
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages deployment workflow
├── css/
│   └── styles.css          # Styles, themes, animations, and layout
├── js/
│   └── app.js              # Calculations and application logic
├── index.html              # Main application
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## ⚙️ Customization

### Change allocation percentages

Open `js/app.js` and locate the `B` array.

Each category defines its name, description, color, and allocation percentages for both phases.

```javascript
const B = [
  {
    k: "safety",
    n: "Safety",
    e: "🛡️",
    c: "var(--safety)",
    d: "Emergency fund and financial protection.",
    a: 20,
    b: 5
  }
];
```

- `a` represents the Phase 1 percentage.
- `b` represents the Phase 2 percentage.

Update the values to customize the allocation rules. Ensure the percentages across all five categories total 100% in each phase.

### Customize currencies

Modify the `CUR` configuration in `js/app.js` to adjust supported currency formatting, locale settings, and quick-select amounts.

**Note:** Changing the display currency does not convert the underlying amount using exchange rates.

### Customize appearance

Edit `css/styles.css` to change colors, spacing, typography, card styles, animations, and light or dark theme behavior.

---

## 🔒 Privacy

Money Plan is a client-side application. Its current implementation stores application preferences in your browser's `localStorage`.

- No application backend is required.
- Your entered amount and preferences are not intentionally sent to a Money Plan server.
- Clearing the website's local storage removes the saved application settings.

The application loads external styling and font resources from third-party CDNs, which may involve requests to those providers.

Avoid using shared or public devices for sensitive financial information.

---

## 🗺️ Roadmap

Potential future improvements include:

- [ ] Customizable allocation percentages through the interface.
- [ ] Monthly budget history and expense tracking.
- [ ] Export summaries as CSV or PDF.
- [ ] Savings goals and progress tracking.
- [ ] Additional currencies and localization options.
- [ ] Optional offline support.

These are possible future enhancements and are not necessarily available in the current version.

---

## ⚠️ Financial Disclaimer

Money Plan is an educational budgeting and financial planning tool. Its allocation percentages are illustrative guidelines and may not suit every person's income, expenses, debt obligations, financial goals, or circumstances.

This application does not provide personalized financial, investment, tax, or legal advice. Investment decisions involve risk, and past performance does not guarantee future results.

Consider your individual circumstances and consult a qualified financial professional when appropriate.

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork this repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application in a modern browser.
5. Submit a pull request describing your improvements.

For significant changes, consider opening an issue first to discuss the proposed feature or modification.

---

## 📄 License

This project is distributed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with simplicity and a better relationship with money in mind.
</p>
