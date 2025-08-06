# ADmyBRAND Insights – AI-Powered Analytics Dashboard

# 🧠 AdMyBrand Insights Dashboard

A smart and modern dashboard that generates AI-powered summaries from brand sales data using OpenAI GPT-4 API.

This project was developed as part of an internship assignment to showcase frontend integration with AI (OpenAI) and modern UI/UX design using Next.js and Tailwind CSS.

---

## 🚀 Features

- ✅ AI Summary Generation using OpenAI GPT-4
- ✅ Sales summary section with mock data
- ✅ Real-time response loading indicator
- ✅ Error handling for API responses
- ✅ Beautiful UI with Tailwind CSS
- ✅ Responsive and production-ready design
- ✅ Modular components and clean folder structure

---

## 🖼️ Preview

> 💻 Add your screenshots here (optional)

---

## 🛠️ Tech Stack

| Layer     | Tech            |
|-----------|-----------------|
| Framework | [Next.js 14](https://nextjs.org/) |
| Language  | TypeScript      |
| Styling   | Tailwind CSS    |
| AI Engine | OpenAI GPT-4    |
| API Calls | Axios / Fetch   |
| Hosting   | Vercel          |

---

## 📂 Folder Structure

admybrandtask1/
│
├── app/
│ └── page.tsx # Main dashboard page
│
├── components/
│ └── AISummary.tsx # AI Summary Component (frontend)
│
├── lib/
│ └── openai.ts # Helper to call OpenAI API
│
├── public/
│ └── favicon.ico # Favicon and other public assets
│
├── styles/ (optional)
│ └── globals.css # Tailwind base styles
│
├── .gitignore # Git ignore file (place in root)
├── README.md # You're reading it!
├── package.json # Project metadata
└── .env.local # 🔒 Your OpenAI key (never commit this)

yaml
Copy
Edit

---

## 🔧 Setup Instructions (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/admybrand-insights.git
cd admybrand-insights
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Add Environment Variable
Create a .env.local file at root:

bash
Copy
Edit
touch .env.local
Add your OpenAI API key:

env
Copy
Edit
OPENAI_API_KEY=your_openai_key_here
⚠️ Never share or commit this key.

4️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

📂 Project Structure
php
Copy
Edit
admybrand-insights/
├── components/        # Reusable UI components
├── pages/             # App routes and pages
├── public/            # Static files and assets
├── styles/            # Global styles (Tailwind)
├── utils/             # Utility functions (AI request)
├── .env.local         # Environment variables (ignored)
└── README.md
📦 Dependencies
openai

axios

tailwindcss

postcss

autoprefixer

🧠 AI Summary Logic
The app uses the OpenAI GPT API to generate summaries from a static or dynamic sales data paragraph. The request is triggered on button click, and loading state is handled cleanly.

📬 Contact
Made with ❤️ by {Ankit Prajapati]
📧 ankitprajapatiofficial876@gmail.com