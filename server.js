import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import pageRoutes from "./src/routes/pageRoutes.js";

const app = express();

// Recreate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", pageRoutes);

app.use((req, res) => {
    res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});