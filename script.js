/* PromptVault AI — data + interactions */
const CATEGORIES = ["Image Generation","Writing","Coding","Study","Business","Marketing","Research","Productivity","Video","Social Media"];

const PLATFORM_LINKS = {
  "ChatGPT":"https://chatgpt.com/",
  "Claude":"https://claude.ai/",
  "Grok":"https://grok.com/",
  "Gemini":"https://gemini.google.com/"
};

const prompts = [
  // ========= ChatGPT — 10 (2 per profession) =========
  {
    id:1, platform:"ChatGPT", category:"Study", trending:true,
    title:"ChatGPT — Study Sprint Planner for Students",
    description:"Students: Turn any subject into a 7-day sprint with daily tasks, recall quizzes, and a final cheat sheet.",
    prompt:"You are an expert study coach for university and high school students. Your task is to create a complete 7-day study sprint for Biology - Cell Division (Mitosis & Meiosis). For each of the 7 days, give a 45-minute lesson plan with learning goal, key concepts explained in simple language, and a 5-minute active recall activity. Include a memorable mnemonic for the phases of mitosis, 5 practice quiz questions with hidden answers, and a one-page final cheat sheet summarizing all key terms. Use encouraging, clear language suitable for a 16-year-old beginner.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:2, platform:"ChatGPT", category:"Writing",
    title:"ChatGPT — Essay Outline & Thesis Builder for Students",
    description:"Students: Go from blank page to structured essay with thesis, outline, sources, and counterargument.",
    prompt:"You are a university writing tutor. Help me write a strong 1000-word argumentative essay on the topic: Should social media be regulated to protect teenagers’ mental health? Provide a clear thesis statement, a detailed outline with introduction, three body paragraphs each with topic sentence and supporting evidence points, a counterargument and rebuttal section, and a conclusion. Suggest three credible source types to cite and give five strong academic transition phrases I can use. Keep tone formal and persuasive, suitable for a first-year college essay.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:3, platform:"ChatGPT", category:"Video", trending:true,
    title:"ChatGPT — YouTube Script Builder for Content Creators",
    description:"Content Creators: Full YouTube script with hook, chapters, B-roll cues, and CTA — ready to record.",
    prompt:"You are a YouTube scripting expert for educational and lifestyle creators. Write a complete 8-minute YouTube script on the topic How I Organized My Life in 30 Days Using Notion. Structure it as: 1) Cold open hook under 10 seconds, 2) Intro with channel value promise, 3) Three main chapters each with spoken script, on-screen text suggestion, and B-roll idea, 4) Common mistake to avoid, 5) Outro with call to action to subscribe and comment. Keep language conversational, energetic, and natural for a 25-year-old creator speaking to camera. Add time stamps for each chapter.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:4, platform:"ChatGPT", category:"Social Media",
    title:"ChatGPT — Instagram Carousel & Caption Engine for Creators",
    description:"Content Creators: 10-slide carousel scripts with captions and hashtags that drive saves.",
    prompt:"You are an Instagram content strategist. Create a complete 10-slide carousel post on the topic 5 Morning Habits That Doubled My Productivity. For each slide, provide headline under 7 words, body text under 20 words, and a visual direction for the designer. Then write three caption variations: one storytelling, one list-style, and one question-driven, each under 150 words with a call to action. Include five relevant hashtags and suggest the best posting time for maximum engagement.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:5, platform:"ChatGPT", category:"Writing",
    title:"ChatGPT — Cold Pitch Email Crafter for Freelancers",
    description:"Freelancers: Send pitches that get replies — personalized, concise, and value-first.",
    prompt:"You are a freelance business coach who helps freelancers land clients via cold email. Write three cold pitch email templates for a freelance graphic designer offering brand identity services to small coffee shop owners. Each email must include a personalized subject line, a one-sentence hook showing you researched their brand, a brief value proposition with one past result example, a clear low-commitment call to action, and a professional sign-off. Keep each email under 120 words, friendly but confident, and avoid sounding desperate or generic.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:6, platform:"ChatGPT", category:"Business",
    title:"ChatGPT — Freelance Proposal Builder",
    description:"Freelancers: Turn a brief into a winning proposal with scope, timeline, pricing, and FAQs.",
    prompt:"You are a senior freelance consultant. Create a complete client proposal for a freelance social media manager hired to grow an eco-friendly skincare brand on Instagram and TikTok over three months. Include project overview, goals, detailed scope with deliverables per month, timeline with milestones, pricing with three package tiers starting at $800 per month, revision policy, and five frequently asked questions from the client perspective. Use a professional, trustworthy tone that justifies premium pricing.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:7, platform:"ChatGPT", category:"Marketing",
    title:"ChatGPT — Product Launch Copy Pack for Business & Marketing",
    description:"Business & Marketing: Headlines, emails, and ads for your next product launch in one go.",
    prompt:"You are a launch copywriter for startups. Create a full product launch copy pack for a new productivity app called FocusFlow designed for remote workers who struggle with distractions. Deliver: five headline options for the landing page, a 150-word hero section, three email sequence outlines with subject lines for pre-launch, launch day, and last-chance emails, and four ad copy variations for Instagram and LinkedIn each under 30 words. Keep tone confident, benefit-driven, and modern.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:8, platform:"ChatGPT", category:"Business",
    title:"ChatGPT — SEO Blog Outline & Brief for Marketers",
    description:"Business & Marketing: Keyword-driven blog brief with outline, FAQs, and meta data.",
    prompt:"You are an SEO content strategist. Create a complete blog post brief targeting the keyword best budget travel tips for solo travelers. Provide an SEO title under 60 characters, a meta description under 155 characters, a detailed H2 and H3 outline with bullet points for what to cover in each section, five People Also Ask style FAQs with concise answers, internal linking suggestions, and a call to action for a travel newsletter signup. Aim for a helpful, friendly tone that ranks well and keeps readers engaged.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:9, platform:"ChatGPT", category:"Image Generation",
    title:"ChatGPT — UI Design Critique Partner for Designers & Developers",
    description:"Designers & Developers: Get structured feedback on any UI with scores and fixes.",
    prompt:"You are a senior product designer with ten years of experience at top tech companies. Critique a mobile banking app home screen that shows balance, recent transactions, and quick actions for transfer and pay. Evaluate it on visual hierarchy, color contrast and accessibility, typography, spacing, and user flow clarity. Give a score out of ten for each criterion, list the top three strengths, top three improvements with specific before and after suggestions, and a revised layout description in words that a designer can implement directly.",
    link:PLATFORM_LINKS.ChatGPT
  },
  {
    id:10, platform:"ChatGPT", category:"Coding",
    title:"ChatGPT — Code Explainer & Bug Hunter for Developers",
    description:"Designers & Developers: Paste any code snippet and get plain-English logic plus fixes.",
    prompt:"You are a patient senior software engineer and mentor. Explain the following JavaScript function in plain English line by line, then identify any bugs, edge cases, or performance issues, and provide a corrected and optimized version with comments. Function to analyze: function calculateTotal(items) { let total = 0; for (let i = 0; i <= items.length; i++) { total += items[i].price; } return total; } Explain what the function tries to do, why the loop condition causes an error, and how to fix it to handle empty arrays and missing price fields safely. End with two test cases demonstrating correct behavior.",
    link:PLATFORM_LINKS.ChatGPT
  },

  // ========= Claude — 10 (2 per profession) =========
  {
    id:11, platform:"Claude", category:"Research", trending:true,
    title:"Claude — Research Paper Synthesizer for Students",
    description:"Students: Turn three sources into a clear synthesis with claims, gaps, and citations.",
    prompt:"You are Claude, a careful research assistant for students. Synthesize the following three sources on the topic The Impact of Remote Learning on Student Performance. Sources: Source 1 is a 2023 Stanford study finding remote learning reduced test scores by 8 percent for K-12 students. Source 2 is an EdWeek survey where 62 percent of teachers said engagement dropped online. Source 3 is a parent interview collection praising flexibility for students with anxiety. Create a comparison table of key claims, note where sources agree and disagree, identify two gaps where more research is needed, and write a 250-word synthesis paragraph with inline source labels. Keep tone academic and balanced.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:12, platform:"Claude", category:"Study",
    title:"Claude — Spaced Repetition Exam Coach for Students",
    description:"Students: Convert any syllabus into an 8-week plan with recall tasks and mock questions.",
    prompt:"You are Claude, a thoughtful academic coach. Create an 8-week exam preparation plan for a university course titled Introduction to Psychology covering chapters on memory, motivation, personality, and social psychology. For each week, list learning objectives, two active recall exercises, and one spaced repetition schedule suggestion. Then build a one-page cheat sheet template with key terms and definitions, and finish with five mock exam questions mixing multiple choice and short answer with answer keys hidden for self-testing.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:13, platform:"Claude", category:"Writing",
    title:"Claude — Long-Form Story Editor for Content Creators",
    description:"Content Creators: Shape a rough draft into a polished narrative with structure and voice.",
    prompt:"You are Claude, an experienced narrative editor for creators and newsletters. Edit the following rough draft into a publication-ready story: I started my freelance journey last year with no clients and a lot of doubt. I sent cold emails every day for a month. Most people ignored me. Then one reply changed everything. I want you to restructure it into a compelling story with a strong opening hook, three narrative beats with emotional tension and resolution, sensory details, a clear takeaway for aspiring freelancers, and three alternative titles. Keep my authentic voice but make it tighter, more vivid, and more resonant.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:14, platform:"Claude", category:"Marketing",
    title:"Claude — Brand Voice Guide Extractor for Creators",
    description:"Content Creators: Analyze your best writing and build a reusable voice guide.",
    prompt:"You are Claude, a brand voice specialist. Analyze these three writing samples from a wellness creator and build a complete brand voice guide. Sample 1: Slow mornings, warm light, and the quiet courage to begin again. Sample 2: You do not need a perfect plan. You need one brave next step. Sample 3: Take a breath. Your timeline is your own. Extract tone, vocabulary patterns, sentence rhythm, and punctuation habits. Then deliver a voice profile with five do and five do not rules, three example sentences in this voice for Instagram captions, and a reusable prompt I can paste into any AI that says Write this caption in my brand voice as defined above.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:15, platform:"Claude", category:"Productivity",
    title:"Claude — Meeting Notes to Action Plan for Freelancers",
    description:"Freelancers: Turn messy client calls into decisions, owners, and follow-up emails.",
    prompt:"You are Claude, a meticulous executive assistant for freelancers managing multiple clients. Transform the following meeting notes into a clear action plan. Notes: Met with GreenLeaf Organics on Tuesday. Discussed new website copy. Sarah wants homepage done by Friday. Budget is $1200. Need logo files from client. Follow up on testimonials. Deliverables: Create a TLDR with three bullet points, a decisions made section, an action items table with task, owner, and due date columns, a list of open questions needing clarification, and a polished 100-word follow-up email to Sarah confirming next steps. Flag any ambiguity in the notes.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:16, platform:"Claude", category:"Business",
    title:"Claude — Freelance Rate & Contract Advisor",
    description:"Freelancers: Price your work confidently and protect yourself with clear terms.",
    prompt:"You are Claude, a freelance business advisor with expertise in pricing and contracts. Advise a freelance video editor with two years of experience, based in Europe, who has been offered $300 to edit a 10-minute YouTube video requiring color grading and sound design with a two-day turnaround. Evaluate if the rate is fair for the market, suggest a counteroffer with justification covering hours, skill, and rush fee, recommend a simple contract clause for revisions and late payment, and provide a polite negotiation email template. Keep tone supportive and professional, empowering the freelancer to advocate for fair pay.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:17, platform:"Claude", category:"Business",
    title:"Claude — Competitive Analysis Memo for Business & Marketing",
    description:"Business & Marketing: Compare three competitors and find your white space.",
    prompt:"You are Claude, a strategy consultant writing for a founder launching a sustainable meal kit service competing with HelloFresh, Blue Apron, and Purple Carrot. Create a competitive analysis memo with a comparison table of pricing, target audience, sustainability claims, and delivery model for each competitor. Identify two underserved market gaps, propose a differentiated positioning statement, and list three strategic risks to monitor. Use a concise, numbers-forward, honest tone that a founder can share with advisors.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:18, platform:"Claude", category:"Marketing",
    title:"Claude — Customer Persona Builder for Marketers",
    description:"Business & Marketing: Build three vivid personas with pain points, goals, and messaging.",
    prompt:"You are Claude, a customer research expert. Build three detailed customer personas for an online learning platform that teaches creative professionals how to use AI tools for design and writing. Each persona must include name, age range, job title, primary goal, top three pain points, preferred content channels, buying objections, and a one-sentence messaging hook that would resonate with them. Make the personas distinct: one early-career freelancer, one mid-career marketing manager, and one creative agency owner. End with one content idea tailored to each persona.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:19, platform:"Claude", category:"Coding",
    title:"Claude — System Design Critic for Designers & Developers",
    description:"Designers & Developers: Get a thoughtful review of architecture and trade-offs.",
    prompt:"You are Claude, a staff engineer mentoring a mid-level developer. Review the following system design for a simple URL shortener handling 10 million URLs per day with a Node.js API, PostgreSQL database, and Redis cache. The design uses a single server, sequential IDs encoded in base62, and no rate limiting. Identify strengths, three scalability risks, two security concerns, and suggest improvements for high availability, caching strategy, and analytics. Provide a revised architecture summary with a simple diagram described in text and explain each trade-off choice clearly.",
    link:PLATFORM_LINKS.Claude
  },
  {
    id:20, platform:"Claude", category:"Productivity",
    title:"Claude — Accessibility Audit Assistant for Developers",
    description:"Designers & Developers: Audit any webpage for WCAG issues with specific fixes.",
    prompt:"You are Claude, an accessibility specialist auditing web products for WCAG 2.1 AA compliance. Audit a fictional e-commerce product page that has light gray text on a white background, images without alt text, buttons labeled only with icons, and a checkout form without visible error messages. List each accessibility violation with WCAG criterion, severity level, impact on users with disabilities, and a specific fix with code example where relevant. Prioritize the top three fixes that would have the highest impact and estimate effort for each as low, medium, or high.",
    link:PLATFORM_LINKS.Claude
  },

  // ========= Grok — 10 (2 per profession) =========
  {
    id:21, platform:"Grok", category:"Study", trending:true,
    title:"Grok — Curiosity Explainer for Students",
    description:"Students: Any topic explained with humor, analogies, and a quiz you will actually enjoy.",
    prompt:"You are Grok, a witty and brilliant tutor with a knack for unforgettable analogies. Explain the concept of blockchain to a curious 15-year-old who loves video games. Use a gaming analogy comparing blockchain to a shared multiplayer inventory that everyone can verify, break the explanation into four simple steps, point out two common misconceptions people have about blockchain, and create a fun four-question quiz with answers hidden behind spoiler tags. Keep it punchy, playful, and accurate without dumbing it down.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:22, platform:"Grok", category:"Research",
    title:"Grok — Debate Sparring Partner for Students",
    description:"Students: Stress-test your argument with steelman counters before the real debate.",
    prompt:"You are Grok, a sharp and playful debate sparring partner. My debate position is that artificial intelligence will create more jobs than it destroys. Steelman the opposing view first by presenting the three strongest arguments against my position with real-world examples such as automation in manufacturing and customer service. Then give me three rebuttals I can use, one concession I should make to sound credible, and a killer closing line under 20 words. Keep it energetic and a little provocative to prepare me for a tough opponent.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:23, platform:"Grok", category:"Social Media",
    title:"Grok — Viral X Thread Engine for Content Creators",
    description:"Content Creators: Bold 7-post threads with scroll-stopping hooks and tight insights.",
    prompt:"You are Grok, witty, direct, and slightly unhinged in the best way. Write a seven-post X thread on the topic The Real Reasons Most Side Hustles Fail, aimed at aspiring creators in their twenties. Post one must be a bold, contrarian hook under 260 characters. Posts two through six each deliver one sharp insight with a concrete example. Post seven has a call to action asking for replies. Provide two alternative hooks at the end. No corporate jargon, no fluff, all punch.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:24, platform:"Grok", category:"Video",
    title:"Grok — Reel & Meme Trend Hijacker for Creators",
    description:"Content Creators: Five on-brand reel ideas riding trending formats this week.",
    prompt:"You are Grok, a social media trend surfer who knows how to ride memes without being cringe. For a sustainable fashion brand targeting Gen Z women, invent five reel and meme concepts based on trending formats like get ready with me, POV transitions, and before versus after reveals. For each concept, give the trending format name, a hook under ten words, a three-beat script outline, caption text, and one thing to avoid so it does not feel forced or inauthentic.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:25, platform:"Grok", category:"Productivity",
    title:"Grok — Brutally Honest Freelancer Prioritizer",
    description:"Freelancers: Get told what to drop, delegate, and do first — with love and bite.",
    prompt:"You are Grok, a brutally honest but caring productivity coach for freelancers. Here is a freelancer todo list: finish logo draft for client A, send invoice to client B, research new portfolio website, reply to five cold leads, and edit social media content. Rank the tasks by impact, tell me which two to delete or postpone, which one to delegate, and identify the single most important task to do first tomorrow morning. Give a three-step plan with time blocks starting at 9 AM to complete that top task before noon.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:26, platform:"Grok", category:"Business",
    title:"Grok — Freelance Quote Calculator in Plain English",
    description:"Freelancers: Turn scope into a clear, justifiable price with package options.",
    prompt:"You are Grok, a no-nonsense freelance pricing expert who speaks plainly. Calculate a fair quote for a freelance copywriter asked to write ten product descriptions of 150 words each plus one homepage hero section for a DTC candle brand, with one round of revisions and delivery in five days. Break down pricing by per-word cost, research time, and revision buffer, then present three package tiers at $500, $850, and $1200 with what is included in each. Explain in one paragraph why the middle tier delivers the best value, and add a one-line disclaimer about scope creep.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:27, platform:"Grok", category:"Business",
    title:"Grok — Brutal Pitch Roast & Rescue for Business",
    description:"Business & Marketing: Hear the harsh truth, then get the fix that wins investors.",
    prompt:"You are Grok, a contrarian VC who hates hype and loves blunt honesty. Roast this startup pitch in 120 words: We are building an AI-powered grocery list app that learns your eating habits and auto-orders groceries. Be brutally honest about what is boring, vague, or overhyped. Then rescue it by rewriting the pitch into a tight, compelling version with a clear problem, unique insight, and defensible moat. Rate the original pitch one to ten on problem, solution, and defensibility, and end with one killer question the founder must be ready to answer in an investor meeting.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:28, platform:"Grok", category:"Marketing",
    title:"Grok — Hype vs Reality Checker for Marketers",
    description:"Business & Marketing: Reality-check any trend before you bet budget on it.",
    prompt:"You are Grok, a skeptical newsroom fact checker. Evaluate the claim that AI influencers will replace human influencers within two years. Examine what data supports the claim such as virtual influencer engagement rates, what data contradicts it such as audience trust surveys, what financial incentives drive the hype, and what would need to be true for the prediction to happen. Give a final verdict of hype, half true, or real, with a confidence level and one practical recommendation for a brand deciding whether to invest.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:29, platform:"Grok", category:"Coding",
    title:"Grok — Weekend MVP Planner for Designers & Developers",
    description:"Designers & Developers: Cut scope by fifty percent and ship a real MVP in two days.",
    prompt:"You are Grok, an encouraging drill sergeant for builders who want to ship fast. Plan a weekend MVP for a habit tracking app where users log daily habits, see streaks, and get a weekly summary. Cut the scope by fifty percent to the smallest shippable version, recommend a boring and fast tech stack using Next.js and Supabase, outline the file structure, provide starter code for the core habit logging feature, and list five features to explicitly not build yet to avoid scope creep. Keep tone motivational and direct.",
    link:PLATFORM_LINKS.Grok
  },
  {
    id:30, platform:"Grok", category:"Writing",
    title:"Grok — Code Roast & Refactor for Developers",
    description:"Designers & Developers: Get your code roasted, then beautifully refactored.",
    prompt:"You are Grok, a senior engineer with a sharp sense of humor and deep technical skill. Roast the following Python code in three witty sentences, then deliver a clean refactored version. Code to roast: def calc(x,y): a=x+y; b=x*y; if a>b: return a; else: return b. Explain what is wrong with naming, logic, and edge cases, provide the corrected function with clear variable names and docstring, and add two test cases that would have caught the original flaws. Keep the roast clever, not cruel, and the refactor production ready.",
    link:PLATFORM_LINKS.Grok
  },

  // ========= Gemini — 10 (2 per profession) =========
  {
    id:31, platform:"Gemini", category:"Study", trending:true,
    title:"Gemini — Visual Study Guide for Students",
    description:"Students: Dense chapter to visual map, tables, flashcards, and memory hooks.",
    prompt:"You are Gemini, a visual learning specialist for students. Transform Chapter 4 of a biology textbook covering photosynthesis into a complete visual study guide. Create a text-based concept map showing how sunlight, water, and carbon dioxide connect, a color-coded summary table of light-dependent versus light-independent reactions, a mnemonic to remember the reactants and products, five flashcards with question on front and answer on back, and a prompt I can paste into Gemini to generate a clean diagram of the chloroplast structure with labels. Keep language clear for a high school student.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:32, platform:"Gemini", category:"Study",
    title:"Gemini — Math & Science Tutor for Students",
    description:"Students: Step-by-step solutions with visual thinking and common mistakes highlighted.",
    prompt:"You are Gemini, a patient math and science tutor who teaches with visuals and checks for understanding. Solve the following problem step by step: A ball is thrown upward with an initial velocity of 20 meters per second from a height of 5 meters. How high will it go and when will it hit the ground? Show each physics formula used, explain why you chose it, draw a simple text timeline of the motion, highlight two common mistakes students make on this type of problem, and create a follow-up practice question with a worked answer for self-testing. Use friendly, encouraging language.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:33, platform:"Gemini", category:"Video",
    title:"Gemini — YouTube Chapter & Clip Pack for Creators",
    description:"Content Creators: Long video to chapters, viral clips, titles, and tags.",
    prompt:"You are Gemini, a YouTube optimization expert for creators. Take the following 12-minute transcript about morning routines for productivity and produce: estimated chapter markers with timestamps for each section, five clip-worthy segments of 30 to 45 seconds each with a hook text overlay suggestion, five click-worthy title options optimized for curiosity and CTR, and a video description with tags. Keep the advice practical and creator-friendly. Transcript summary: Introduction on why mornings matter, habit one wake at same time, habit two hydrate and stretch, habit three plan top three tasks, outro with challenge to try for seven days.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:34, platform:"Gemini", category:"Writing",
    title:"Gemini — Podcast Show Notes & Promo Kit for Creators",
    description:"Content Creators: Episode to show notes, quotes, and social promo in one pass.",
    prompt:"You are Gemini, a podcast producer helping creators repurpose audio content. Given a 30-minute podcast episode on how freelancers can find their first five clients, create detailed show notes with timestamps for each topic, pull three quotable highlights under 20 words each, write a 100-word episode summary for Spotify and Apple Podcasts, draft three social media promo posts for LinkedIn, Instagram, and X, and suggest five SEO tags. Keep tone warm and actionable for an audience of aspiring freelancers.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:35, platform:"Gemini", category:"Business",
    title:"Gemini — Portfolio Case Study Builder for Freelancers",
    description:"Freelancers: Turn one project into a polished case study that wins clients.",
    prompt:"You are Gemini, a portfolio strategist for freelancers. Build a complete case study from the following project: Freelance brand designer redesigned the visual identity for a local bakery called Morning Crumb, including new logo, color palette inspired by warm bread tones, packaging for bread bags, and Instagram templates. The bakery saw a 40 percent increase in Instagram engagement after the rebrand. Structure the case study with challenge, approach, process with three key decisions explained, final outcome with metrics, and a client testimonial placeholder. Add a one-sentence lesson learned and suggest three images to include for visual impact.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:36, platform:"Gemini", category:"Productivity",
    title:"Gemini — Time-Blocked Week Planner for Freelancers",
    description:"Freelancers: From scattered tasks to a calm, time-boxed week with buffers.",
    prompt:"You are Gemini, a time management coach for freelancers juggling multiple clients. Create a complete time-blocked week plan for a freelance writer handling three clients: Client A needs four blog posts by Friday, Client B needs a newsletter on Wednesday, and Client C needs research by Monday. Allocate focused work blocks, admin time, breaks, and buffer slots for overflow. Include daily top three priorities, a Friday review ritual with three reflection questions, and one automation tip using Google Calendar and Gmail to reduce manual scheduling. Keep it realistic and sustainable, not aspirational.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:37, platform:"Gemini", category:"Business", trending:true,
    title:"Gemini — Market Map & Positioning for Business & Marketing",
    description:"Business & Marketing: Map eight competitors, find white space, craft positioning.",
    prompt:"You are Gemini, a business strategy assistant. Build a market map for the direct-to-consumer sustainable cleaning products industry with axes of price from budget to premium and differentiation from generic to highly distinctive. Place eight fictional but realistic players on the map, describe the two most crowded clusters and why they are crowded, identify one underserved quadrant with opportunity, and write two positioning statements for a new brand entering that white space. End with three risks of entering that opportunity and how to mitigate each.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:38, platform:"Gemini", category:"Research",
    title:"Gemini — Data to Chart Storyteller for Marketers",
    description:"Business & Marketing: Turn raw numbers into chart ideas and narrative insights.",
    prompt:"You are Gemini, a data storyteller who turns spreadsheets into compelling narratives. Given the following quarterly sales data for an e-commerce store selling handmade candles: Q1 $12,000, Q2 $18,000, Q3 $15,000, Q4 $28,000, describe three charts that would best visualize the trend including chart type and what data to plot, write a 150-word narrative explaining the story behind the numbers including a hypothesis for the Q4 spike, suggest two data points to collect next quarter for deeper insight, and recommend one pricing experiment based on the pattern. Keep tone analytical but accessible for a non-technical founder.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:39, platform:"Gemini", category:"Image Generation",
    title:"Gemini — Figma to Code Prompt for Designers & Developers",
    description:"Designers & Developers: Describe any Figma frame and get clean, responsive code.",
    prompt:"You are Gemini, a Figma to code specialist who writes clean, accessible frontend code. Given a Figma design description for a pricing section with three cards for Basic at $19, Pro at $49, and Enterprise as contact us, each card showing features with checkmarks and a call to action button, generate clean responsive HTML and Tailwind CSS code. Include semantic HTML, ARIA labels for accessibility, hover states, and a mobile breakpoint where cards stack vertically. Explain two design-to-code decisions you made for spacing and one accessibility improvement you included beyond the basic design.",
    link:PLATFORM_LINKS.Gemini
  },
  {
    id:40, platform:"Gemini", category:"Coding",
    title:"Gemini — API Documentation Drafter for Developers",
    description:"Designers & Developers: Turn any endpoint spec into polished docs with examples.",
    prompt:"You are Gemini, a technical writer who crafts API documentation developers love. Write complete documentation for a REST API endpoint POST /api/v1/tasks that creates a new task with fields title as required string, description as optional string, due_date as optional ISO date, and priority as enum low medium high. Include endpoint description, request body schema with types and constraints, two curl request examples one minimal and one full, two response examples for success 201 and error 400, and a common pitfalls section with two mistakes and how to avoid them. Use clear, concise Markdown formatting.",
    link:PLATFORM_LINKS.Gemini
  },

  // ========= Other AI — 10 (2 per tool) =========
  {
    id:41, platform:"Other AI", category:"Research", trending:true,
    title:"Perplexity — Cited Research Brief",
    description:"Perplexity: Deep, cited briefing on any topic with source quality ratings.",
    prompt:"You are Perplexity, a research assistant that provides cited and up-to-date answers. Research the topic How does intermittent fasting affect metabolic health as of 2024. Provide a six-bullet executive summary where each bullet has an inline citation, a table of five sources with columns for source name, publication date, and credibility rating from one to five stars, a section on what experts disagree about, and three follow-up queries I should run next for deeper research. Prioritize recent peer-reviewed studies and reputable health organizations over blogs.",
    link:"https://www.perplexity.ai/"
  },
  {
    id:42, platform:"Other AI", category:"Research",
    title:"Perplexity — Fact-Check & Source Roundup",
    description:"Perplexity: Verify any claim with verdict, evidence, and trustworthy sources.",
    prompt:"You are Perplexity, a fact checking analyst who verifies claims against reliable sources. Fact check the claim that drinking eight glasses of water per day is scientifically required for optimal health. Provide a verdict of true, misleading, or false, summarize three studies or authoritative sources that address the claim with citations, explain where the eight glasses myth originated, note two nuances that most articles miss, and suggest one trustworthy source to bookmark for future hydration questions. Keep tone neutral and evidence based.",
    link:"https://www.perplexity.ai/"
  },
  {
    id:43, platform:"Other AI", category:"Image Generation",
    title:"Midjourney — Photoreal Product Shot",
    description:"Midjourney: Studio-light product renders that look like real photography.",
    prompt:"You are a Midjourney v6 prompting expert for photoreal commercial photography. Create a Midjourney prompt for a premium matte black ceramic coffee mug on a light oak table with soft morning window light, shallow depth of field, and a blurred linen background. Use the formula: subject, environment, lighting, materials, camera details, color palette. Provide the final prompt as a single paragraph, a negative prompt listing what to avoid such as plastic look and warped handle, two remix variations for golden hour and studio white background, and the recommended parameters --ar 4:5 --style raw --v 6 --s 150. Tool: midjourney.com",
    link:"https://www.midjourney.com/"
  },
  {
    id:44, platform:"Other AI", category:"Image Generation",
    title:"Midjourney — Character & Style Consistency Pack",
    description:"Midjourney: Keep the same character and style across an entire image series.",
    prompt:"You are a Midjourney consistency expert helping illustrators maintain character identity across images. Create a character sheet prompt for a friendly young female explorer with curly auburn hair, green canvas jacket, and leather satchel, designed to stay consistent across adventure scenes. Provide the base character prompt with seed and style reference tips, three scene prompts using the same character in a forest trail, a mountain overlook, and a cozy library, and a troubleshooting section on how to fix face drift and clothing changes using character reference and style reference parameters. Tool: midjourney.com",
    link:"https://www.midjourney.com/"
  },
  {
    id:45, platform:"Other AI", category:"Image Generation",
    title:"Canva AI — Brand Flyer & Social Kit",
    description:"Canva AI: From brief to ready-to-print flyer and matching social templates.",
    prompt:"You are Canva Magic Studio, an AI design assistant for small businesses. Create a complete design brief for a weekend farmers market flyer for Sunny Harvest Farms promoting organic seasonal produce, targeting local families, with a warm and rustic tone at A4 size. Provide three layout concepts each with headline, visual suggestion, and call to action, two color palette options with hex codes drawn from farm imagery, font pairings for heading and body, Magic Write prompts for each text block, and an export checklist covering bleed, DPI, and file format for print. Tool: canva.com",
    link:"https://www.canva.com/"
  },
  {
    id:46, platform:"Other AI", category:"Productivity",
    title:"Canva AI — Presentation Deck Builder",
    description:"Canva AI: Turn any outline into a polished slide deck with speaker notes.",
    prompt:"You are Canva Magic Studio presentation expert helping professionals create stunning decks. Build a ten-slide pitch deck outline for a sustainable packaging startup called EcoWrap pitching to local retailers. For each slide, give slide title, key bullet points under twelve words each, visual suggestion such as icon or chart type, and speaker note under 30 words. Include a cover slide, problem, solution, product photos suggestion, traction, business model, and closing call to action. Recommend a color and font theme that conveys trust and sustainability. Tool: canva.com",
    link:"https://www.canva.com/"
  },
  {
    id:47, platform:"Other AI", category:"Video",
    title:"Runway — Cinematic B-Roll Generator",
    description:"Runway: Turn a still landscape into slow, cinematic motion without the uncanny valley.",
    prompt:"You are a Runway Gen-3 prompting expert for cinematic video creation. Create a Runway motion prompt for a misty mountain valley at sunrise with slow drone push-in revealing a small cabin with warm light in the window. Provide the text prompt describing camera movement, subject action, and style with keywords like slow push in, volumetric light, and film grain, recommended settings of five seconds duration and motion intensity level three, a negative prompt to avoid such as fast motion and morphing, and two alternate camera moves of slow pan right and gentle orbit for the same scene. Tool: runwayml.com",
    link:"https://runwayml.com/"
  },
  {
    id:48, platform:"Other AI", category:"Video",
    title:"Runway — Product Demo Motion Prompt",
    description:"Runway: Animate any product shot into a clean demo clip for ads and landing pages.",
    prompt:"You are a Runway motion design expert for product marketing videos. Create a Runway prompt that animates a still image of a white wireless earbud case opening to reveal the earbuds inside on a dark studio background. Describe the motion as smooth lid opening with soft studio lighting and subtle camera dolly, suggest duration of four seconds and motion intensity of two for controlled elegance, include a negative prompt to prevent distortion of the product shape, and provide two variations for a 360-degree spin and a close-up detail push. Keep motion subtle and premium feeling. Tool: runwayml.com",
    link:"https://runwayml.com/"
  },
  {
    id:49, platform:"Other AI", category:"Coding",
    title:"GitHub Copilot — Test Suite Generator",
    description:"GitHub Copilot: Paste any function and instantly get thorough unit tests.",
    prompt:"You are GitHub Copilot, an expert test generation assistant. Generate a complete unit test suite for the following JavaScript function using Jest. Function: function formatPrice(amount, currency) { if (typeof amount !== 'number' || isNaN(amount)) throw new Error('Invalid amount'); return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency || 'USD' }).format(amount); } Cover happy paths for USD and EUR, edge cases for zero and negative amounts, error cases for invalid inputs like NaN and strings, and boundary cases for very large numbers. Provide the test code ready to paste, a brief explanation of each test group, and one additional test you would add after seeing real usage in production. Tool: github.com/features/copilot",
    link:"https://github.com/features/copilot"
  },
  {
    id:50, platform:"Other AI", category:"Coding",
    title:"GitHub Copilot — Legacy Code Commenter & Refactor",
    description:"GitHub Copilot: Understand and safely refactor tangled legacy code with Copilot chat.",
    prompt:"You are GitHub Copilot Chat, a legacy code rescue specialist. Analyze the following legacy Python function and help a developer understand and improve it. Code: def proc(d): r=[]; for k in d: if d[k]>100: r.append(k); return r. Provide a plain-English explanation of what the code does, add inline comments for each line, suggest a refactored version using a clear function name filterHighValueKeys, type hints, and a dictionary comprehension, explain why the refactor is better for readability and maintainability, and list two edge cases the original code does not handle such as non-numeric values and empty dictionaries. Tool: github.com/features/copilot",
    link:"https://github.com/features/copilot"
  }
];

// State
let platformFilter = "all";
let browseCategory = "all";
let trendingCategory = "all";
let platformCats = {chatgpt:"all",claude:"all",grok:"all",gemini:"all",other:"all"};
let query = "";

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function normalize(s){return (s||"").toLowerCase();}
function matchesSearch(p,q){
  if(!q) return true;
  const hay = `${p.title} ${p.description} ${p.prompt} ${p.category} ${p.platform}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}
function escapeHtml(s){
  return s.replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

function makePill(label, active, onClick){
  const b=document.createElement("button");
  b.className= active? "cat-pill active" : "cat-pill";
  b.textContent=label;
  b.addEventListener("click", onClick);
  return b;
}

function renderCats(containerId, active, onPick){
  const el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML="";
  const all = makePill("All", active==="all", ()=>onPick("all"));
  el.appendChild(all);
  CATEGORIES.forEach(c=>{
    const btn=makePill(c, active===c, ()=>onPick(c));
    el.appendChild(btn);
  });
}

function cardHtml(p){
  const trendBadge = p.trending ? `<span class="badge badge-trending">● Trending</span>` : "";
  const platClass = p.platform==="Other AI" ? "badge-other" : "badge-platform";
  const platStyle = p.platform==="Claude" ? ' style="background:#4a2c0a;border-color:#4a2c0a;color:#fff"' :
                    p.platform==="Gemini" ? ' style="background:#1a3a5a;border-color:#1a3a5a;color:#fff"' :
                    p.platform==="Grok" ? ' style="background:#111;border-color:#111;color:#fff"' : "";
  return `
  <article class="card" data-id="${p.id}">
    <div class="card-top">
      <div class="badges">
        <span class="badge ${platClass}"${platStyle}>${escapeHtml(p.platform)}</span>
        ${trendBadge}
      </div>
      <span class="cat-label">${escapeHtml(p.category)}</span>
    </div>
    <h3>${escapeHtml(p.title)}</h3>
    <p class="desc">${escapeHtml(p.description)}</p>
    <div class="prompt-box" title="Click Copy to get full prompt">${escapeHtml(p.prompt)}</div>
    <div class="card-actions">
      <button class="btn-copy" data-copy="${p.id}">Copy Prompt</button>
      <a class="btn-open" href="${p.link}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(p.platform)}">Open AI ↗</a>
    </div>
  </article>`;
}

function emptyHtml(){
  return `<div class="empty"><h4>No prompts found</h4><p>Try a different search or category — or clear filters to see all prompts.</p><button class="chip" id="clearEmpty" style="margin-top:10px">Clear filters</button></div>`;
}

function renderGrid(gridId, items){
  const grid=document.getElementById(gridId);
  if(!grid) return;
  if(!items.length){
    grid.innerHTML = emptyHtml();
    const btn=grid.querySelector("#clearEmpty");
    if(btn) btn.addEventListener("click", clearAllFilters);
    return;
  }
  grid.innerHTML = items.map(cardHtml).join("");
  grid.querySelectorAll("[data-copy]").forEach(btn=>{
    btn.addEventListener("click", onCopy);
  });
}

function filtered(){
  const q = query.trim();
  const bySearch = p => matchesSearch(p,q);
  const trending = prompts.filter(p=>p.trending && bySearch(p) && (trendingCategory==="all" || p.category===trendingCategory) && (platformFilter==="all" || p.platform===platformFilter));
  const browse = prompts.filter(p=> bySearch(p) && (platformFilter==="all" || p.platform===platformFilter) && (browseCategory==="all" || p.category===browseCategory));
  const map = {
    chatgpt: prompts.filter(p=>p.platform==="ChatGPT" && bySearch(p) && (platformCats.chatgpt==="all" || p.category===platformCats.chatgpt)),
    claude: prompts.filter(p=>p.platform==="Claude" && bySearch(p) && (platformCats.claude==="all" || p.category===platformCats.claude)),
    grok: prompts.filter(p=>p.platform==="Grok" && bySearch(p) && (platformCats.grok==="all" || p.category===platformCats.grok)),
    gemini: prompts.filter(p=>p.platform==="Gemini" && bySearch(p) && (platformCats.gemini==="all" || p.category===platformCats.gemini)),
    other: prompts.filter(p=>p.platform==="Other AI" && bySearch(p) && (platformCats.other==="all" || p.category===platformCats.other)),
  };
  return {trending,browse,map};
}

function renderAll(){
  const {trending,browse,map}=filtered();
  renderGrid("trendingGrid", trending);
  renderGrid("browseGrid", browse);
  renderGrid("grid-chatgpt", map.chatgpt);
  renderGrid("grid-claude", map.claude);
  renderGrid("grid-grok", map.grok);
  renderGrid("grid-gemini", map.gemini);
  renderGrid("grid-other", map.other);
  const stat=$("#statCount");
  if(stat) stat.textContent = String(browse.length);
}

function syncChips(){
  $$("#platformChips .chip").forEach(c=>{
    c.classList.toggle("active", (c.dataset.platform||"all")===platformFilter);
  });
}

function clearAllFilters(){
  platformFilter="all"; browseCategory="all"; trendingCategory="all";
  platformCats={chatgpt:"all",claude:"all",grok:"all",gemini:"all",other:"all"};
  query="";
  const gs=$("#globalSearch"), bs=$("#browseSearch");
  if(gs) gs.value=""; if(bs) bs.value="";
  syncChips();
  renderCatBars();
  renderAll();
  showToast("Filters cleared");
}

function renderCatBars(){
  renderCats("browseCats", browseCategory, v=>{browseCategory=v; renderCatBars(); renderAll();});
  renderCats("trendingCats", trendingCategory, v=>{trendingCategory=v; renderCatBars(); renderAll();});
  renderCats("cats-chatgpt", platformCats.chatgpt, v=>{platformCats.chatgpt=v; renderCatBars(); renderAll();});
  renderCats("cats-claude", platformCats.claude, v=>{platformCats.claude=v; renderCatBars(); renderAll();});
  renderCats("cats-grok", platformCats.grok, v=>{platformCats.grok=v; renderCatBars(); renderAll();});
  renderCats("cats-gemini", platformCats.gemini, v=>{platformCats.gemini=v; renderCatBars(); renderAll();});
  renderCats("cats-other", platformCats.other, v=>{platformCats.other=v; renderCatBars(); renderAll();});
}

async function onCopy(e){
  const btn=e.currentTarget;
  const id=Number(btn.dataset.copy);
  const p=prompts.find(x=>x.id===id);
  if(!p) return;
  const text=p.prompt;
  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text);
    } else {
      const ta=document.createElement("textarea");
      ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    btn.textContent="Copied ✓";
    btn.classList.add("copied");
    showToast("Copied to clipboard");
    setTimeout(()=>{btn.textContent="Copy Prompt"; btn.classList.remove("copied");}, 1600);
  }catch(err){
    console.error(err);
    showToast("Copy failed — please select and copy manually");
  }
}

let toastTimer=null;
function showToast(msg){
  const t=$("#toast");
  t.textContent="✓ " + msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove("show"), 1800);
}

// Search wiring
function bindSearch(){
  const gs=$("#globalSearch"), bs=$("#browseSearch");
  const handler = (val)=>{
    query = val;
    if(gs) gs.value = val;
    if(bs) bs.value = val;
    renderAll();
  };
  if(gs) gs.addEventListener("input", e=>handler(e.target.value));
  if(bs) bs.addEventListener("input", e=>handler(e.target.value));
  $("#globalSearchBtn")?.addEventListener("click", ()=>handler(gs.value));
  $("#browseSearchBtn")?.addEventListener("click", ()=>handler(bs.value));
}

// Platform chips
function bindPlatformChips(){
  $$("#platformChips .chip").forEach(ch=>{
    ch.addEventListener("click", ()=>{
      platformFilter = ch.dataset.platform || "all";
      syncChips();
      renderAll();
      if(platformFilter!=="all"){
        const id = platformFilter==="Other AI" ? "other" : platformFilter.toLowerCase();
        document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"});
      } else {
        document.getElementById("browse")?.scrollIntoView({behavior:"smooth"});
      }
    });
  });
}

// Mobile menu
function bindMobile(){
  const ham=$("#hamburger"), panel=$("#mobilePanel"), close=$("#closeMenu");
  function open(){ panel.classList.add("open"); panel.setAttribute("aria-hidden","false"); ham.setAttribute("aria-expanded","true"); }
  function shut(){ panel.classList.remove("open"); panel.setAttribute("aria-hidden","true"); ham.setAttribute("aria-expanded","false"); }
  ham?.addEventListener("click", open);
  close?.addEventListener("click", shut);
  panel?.addEventListener("click", e=>{ if(e.target===panel) shut(); });
  panel?.querySelectorAll("a").forEach(a=>a.addEventListener("click", shut));
}

// Nav active on scroll (simple)
function bindScrollSpy(){
  const ids=["home","chatgpt","claude","grok","gemini","other"];
  const links=$$(".nav-links a");
  const mLinks=$$(".mobile-sheet a");
  function setActive(id){
    links.forEach(a=>a.classList.toggle("active", a.dataset.nav===id));
    mLinks.forEach(a=>a.classList.toggle("active", a.dataset.mnav===id));
  }
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        const id=ent.target.id;
        if(id==="home") setActive("home");
        else if(ids.includes(id)) setActive(id);
      }
    });
  },{rootMargin:"-40% 0px -55% 0px",threshold:0});
  ids.forEach(id=>{
    const el=document.getElementById(id);
    if(el) obs.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderCatBars();
  bindSearch();
  bindPlatformChips();
  bindMobile();
  bindScrollSpy();
  renderAll();
});
