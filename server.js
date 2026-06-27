import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { router } from "./src/routes/pageRoutes.js";

// Define the the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const app = express();

// Recreate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "src/public")));


app.use((req, res) => {
    res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log(`Server running on port ${PORT}`);
    console.log(`URL: http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
    console.log("--------------------------------");
});