import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Serve static files
app.use(express.static(join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Welcome to Our Landing Page',
    features: [
      { 
        title: 'Responsive Design', 
        description: 'Our platform works seamlessly across all devices and screen sizes.',
        icon: 'monitor'
      },
      { 
        title: 'Fast Performance', 
        description: 'Optimized for speed to provide the best user experience possible.',
        icon: 'zap'
      },
      { 
        title: 'Secure & Reliable', 
        description: 'Built with security in mind to keep your data safe and accessible.',
        icon: 'shield'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});