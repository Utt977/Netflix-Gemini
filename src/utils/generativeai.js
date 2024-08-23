import { GEMINI_URL } from "./constant";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GEMINI_URL);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
