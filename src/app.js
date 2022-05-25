import express from "express";

//********** */
import path from "path";
import { fileURLToPath } from "url";
//********** */

const app = express();

//Solucion al error: __dirname is not defined in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//********* */
app.use(express.static(path.join(__dirname, "/public")));

export default app;
