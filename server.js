import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Indexes
app.use((req, res, next) => {
    const indexPath = path.join(__dirname, 'public', req.path, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            next();
        }
    });
});

app.get('/@', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apps.html'));
});

app.get('/&', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games.html'));
});

app.get('/~', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'random.html'));
});

app.get('/=', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'settings.html'));
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
