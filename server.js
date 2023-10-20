import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("dist"));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "dist/index.html");
    res.sendFile(filePath);
});

app.listen(3000, () => console.log(`app listening on port ${3000}`));