# Portfolio Website

A modern, responsive portfolio website with an integrated AI chatbot backend. Showcasing a full-stack application with frontend animations, dark mode support, and seamless backend integration.

---

## 🚀 Features

- **Responsive Design** - Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes for better user experience
- **Smooth Animations** - AOS (Animate On Scroll) integration for elegant page transitions
- **AI-Powered Chatbot** - Integrated chatbot feature powered by a Node.js/Express backend
- **Email Integration** - Nodemailer integration for contact form submissions
- **Modern UI** - Built with Tailwind CSS for a clean, professional design
- **CORS Enabled** - Secure cross-origin requests with proper CORS configuration
- **Environment Configuration** - Dotenv integration for secure credential management

---

## 🛠 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Tailwind CSS
- **JavaScript (ES6+)** - Interactive elements and DOM manipulation
- **Tailwind CSS** - Utility-first CSS framework
- **AOS (Animate On Scroll)** - Scroll animation library
- **Font Awesome** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email service integration
- **CORS** - Cross-Origin Resource Sharing middleware
- **Body Parser** - Request body parsing
- **Dotenv** - Environment variable management
- **Node Fetch** - HTTP client for external API calls

---

## 📁 Project Structure

```
Portfolio/
├── index.html           # Main portfolio webpage
├── main.js             # Frontend JavaScript logic
├── style.css           # Custom CSS styles
├── package.json        # Frontend dependencies
├── images/             # Asset storage
├── server/
│   ├── index.js        # Chatbot server entry point
│   ├── server.js       # Express server configuration
│   ├── package.json    # Backend dependencies
│   └── .env            # Environment variables (not versioned)
└── README.md           # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/harshgupta-16/Portfolio.git
cd Portfolio
```

2. Install frontend dependencies:
```bash
npm install
```

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
npm install
```

2. Create a `.env` file in the `server/` directory:
```env
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CORS_ORIGIN=http://localhost:3000
```

---

## 🚦 Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:5000` by default.

### Serve the Frontend

Option 1: Using a simple HTTP server
```bash
npx http-server
```

Option 2: Using VS Code Live Server extension
- Right-click `index.html` → Open with Live Server

The frontend will be available at `http://localhost:8080` (or your preferred port)

---

## 🔌 API Endpoints

### POST `/api/contact`
Sends contact form data via email.

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Message content"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### POST `/api/chat`
Chatbot endpoint for handling user queries.

**Request Body:**
```json
{
  "message": "User message"
}
```

---

## 🎯 Key Functionality

### Contact Form
- Validates user input
- Sends formatted emails via Nodemailer
- Error handling and success feedback

### Chatbot Integration
- Processes user messages
- Returns intelligent responses
- Integrated seamlessly with the frontend UI

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scroll navigation
- Active link highlighting

---

## 🌙 Dark Mode Implementation

The portfolio includes a dark mode toggle that:
- Persists user preference (localStorage)
- Uses Tailwind's `dark:` utility classes
- Provides better accessibility with high contrast ratios

---

## 📦 Dependencies

### Frontend
- Tailwind CSS CDN
- AOS (Animate On Scroll) - v2.3.1
- Font Awesome - v6.5.0
- Lucide Icons

### Backend
- `express` - Web framework
- `nodemailer` - Email service
- `cors` - CORS middleware
- `body-parser` - Request parsing
- `dotenv` - Environment variables
- `node-fetch` - HTTP requests

---

## 🔒 Security Considerations

- Environment variables for sensitive data (API keys, credentials)
- CORS configuration to prevent unauthorized access
- Input validation for form submissions
- Secure email credentials using app-specific passwords

---

## 📈 Performance Optimizations

- CDN integration for faster library loading
- Lazy loading with AOS animations
- Optimized asset delivery
- Responsive image strategies

---

## 🚀 Deployment

### Frontend
- **Vercel** - Recommended for seamless deployment
- **GitHub Pages** - Static hosting option
- **Netlify** - Alternative serverless option

### Backend
- **Heroku** - Recommended PaaS
- **Railway** - Modern deployment platform
- **Render** - Free tier with good performance
- **AWS/DigitalOcean** - VPS options

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- **Full-stack development** with Node.js and vanilla JavaScript
- **RESTful API design** and implementation
- **Frontend optimization** and responsive design principles
- **Backend services** (email integration, CORS handling)
- **Environment management** and secure credential handling
- **Git version control** and collaborative development

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### CORS Issues
Ensure `CORS_ORIGIN` in `.env` matches your frontend URL.

### Email Not Sending
- Verify Gmail app-specific password
- Enable "Less secure app access" if applicable
- Check `nodemailer` configuration

---

## 📝 License

ISC License - See `package.json` for details

---

## 🤝 Connect With Me

- **GitHub:** [harshgupta-16](https://github.com/harshgupta-16)
- **Email:** [Your Email](mailto:your-email@example.com)
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

---

## 📚 Future Enhancements

- [ ] Database integration for message persistence
- [ ] Advanced chatbot AI training
- [ ] Blog section with CMS integration
- [ ] Project showcase with live demo links
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization
- [ ] PWA (Progressive Web App) implementation
- [ ] WebSockets for real-time chat features

---

**Built with ❤️ by Harsh Gupta**