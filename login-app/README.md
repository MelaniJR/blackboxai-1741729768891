# Modern Login Page with React + Vite + Tailwind CSS

A modern, responsive login page built with React, Vite, and Tailwind CSS. Features a clean, minimalist design with a glass-morphism effect and seamless integration with Django backend.

## Features

- 🎨 Modern UI with glass-morphism effect
- 🎯 Responsive design that works on all devices
- 🔒 Secure authentication ready to connect with Django backend
- 🌈 Custom color palette with smooth transitions
- ⚡ Built with Vite for lightning-fast development
- 🎭 Form validation and error handling
- 🔄 Loading states and animations
- 📱 Mobile-friendly interface

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Django backend running on localhost:8000 (for API integration)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd login-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Backend Configuration

The application is configured to connect to a Django backend at `http://localhost:8000/api`. Make sure your Django backend:

1. Has CORS configured to accept requests from the frontend origin
2. Has an endpoint at `/api/login/` that accepts:
   - POST requests
   - JSON payload with `username` and `password` fields
   - Returns a JWT token in the response

Example Django CORS configuration:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    # Add any other frontend URLs
]
```

## Environment Variables

To modify the API endpoint, you can update the base URL in `src/api/axiosInstance.js`.

## Project Structure

```
login-app/
├── src/
│   ├── api/
│   │   └── axiosInstance.js    # Axios configuration
│   ├── pages/
│   │   └── Login.jsx           # Login page component
│   ├── App.jsx                 # Main application component
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # Application entry point
├── public/
├── index.html
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json
```

## Customization

### Colors

The color palette can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: 'rgb(118, 255, 237)',
      secondary: 'rgb(90, 200, 201)',
      tertiary: 'rgb(79, 151, 165)',
    }
  }
}
```

### Background Image

To change the background image, update the `backgroundImage` URL in `src/pages/Login.jsx`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
