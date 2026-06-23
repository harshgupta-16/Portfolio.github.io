# 👨‍💻 Harsh Gupta — Portfolio

A modern, fully responsive portfolio website showcasing projects, experience, and skills. Built with vanilla JavaScript, Express.js, and integrated with an AI chatbot powered by Claude.

**🔗 [Live Portfolio](https://portfolio-github-io-two-xi.vercel.app/)** | **📧 [Contact](mailto:harshgupta16022005@example.com)**

---

## ✨ Features

- 🎨 **Modern Design** — Clean, minimal aesthetic with smooth animations and interactive elements
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- 🤖 **AI Chatbot** — Integrated assistant for visitor inquiries using Claude API
- 📧 **Email Integration** — Contact form with nodemailer backend
- ⚡ **Fast Performance** — Optimized assets and efficient backend architecture
- 🔒 **Secure** — Environment variables for sensitive data, CORS enabled
- 🎯 **SEO Friendly** — Proper meta tags and semantic HTML structure

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome Icons & Devicons
- Google Fonts (Inter, JetBrains Mono)
- Responsive Grid & Flexbox Layout

### Backend
- **Node.js** with **Express.js**
- **Nodemailer** — Email service
- **Cors** — Cross-origin resource sharing
- **Dotenv** — Environment variables
- **Node-fetch** — HTTP client

### AI Integration
- **Claude API** — Chatbot intelligence

---

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── style.css               # Styling
├── main.js                 # Frontend interactions
├── package.json            # Frontend dependencies
├── images/                 # Project & profile images
├── server/
│   ├── index.js            # Chatbot server
│   ├── server.js           # Main Express server
│   └── package.json        # Backend dependencies
└── README.md               # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Claude API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshgupta-16/Portfolio.git
   cd Portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `server/` directory:
   ```
   CLAUDE_API_KEY=your_api_key_here
   SENDER_EMAIL=your_email@gmail.com
   SENDER_PASSWORD=your_app_password_here
   PORT=5000
   ```

### Running the Project

**Development Mode:**

Terminal 1 — Start the backend server:
```bash
cd server
npm start
```

Terminal 2 — Open the frontend:
```bash
# Simply open index.html in your browser
# Or use a local server:
npx http-server
```

**Production:**
- Deploy frontend to **Vercel**, **Netlify**, or any static hosting
- Deploy backend to **Heroku**, **Railway**, or any Node.js hosting

---

## 📝 Key Features Explained

### 1. **AI Chatbot Integration**
- Responds to visitor inquiries in real-time
- Integrated with Claude API for intelligent conversations
- Provides information about your background and projects

### 2. **Email Contact Form**
- Visitors can send messages directly from the portfolio
- Uses nodemailer to deliver emails to your inbox
- Secure and spam-protected

### 3. **Dynamic Content Loading**
- Smooth scrolling between sections
- Active section highlighting in navigation
- Scroll-to-top functionality

---

## 📸 Sections Included

- **Hero** — Eye-catching introduction
- **About** — Background and expertise
- **Experience** — Work history and education
- **Projects** — Showcase of key projects
- **Skills** — Technical proficiencies
- **Contact** — Get in touch section

---

## 🔗 Links

- **GitHub Repository** — [harshgupta-16/Portfolio](https://github.com/harshgupta-16/Portfolio)
- **Live Website** — [harshgupta.vercel.app](https://portfolio-github-io-two-xi.vercel.app/)
- **Email** — harsh@example.com
- **LinkedIn** — [Your Profile](https://www.linkedin.com/in/harsh-gupta-5587b528a)
- **GitHub** — [@harshgupta-16](https://github.com/harshgupta-16)

---

## 📄 License

This project is licensed under the **ISC License**. See the LICENSE file for details.

---

## 🤝 Contributing

This is a personal portfolio project. If you find any issues or have suggestions, feel free to open an issue or reach out!

---

**Made with ❤️ by Harsh Gupta**