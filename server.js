import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'password.html'));
});

app.get('/apps', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apps.html'));
});

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.use((req, res) => {
    res.redirect('/404');
  });
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
