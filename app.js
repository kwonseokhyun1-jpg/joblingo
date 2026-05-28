const careers = [
  {
    id: "software-developer",
    title: "Software Developer",
    field: "Technology",
    summary:
      "Builds apps, websites, and tools by turning ideas into working code.",
    fit: "You like puzzles, improving systems, and making useful things from scratch.",
    traits: ["builder", "analytical", "independent", "creative"],
    skills: ["Coding", "Problem solving", "Debugging", "Team communication"],
    workStyle: "Focused building with team check-ins",
    startingPoint: "Create a small website, script, or app that solves a real problem.",
    lessons: [
      {
        title: "What software developers really do",
        objective: "Understand the difference between writing code and solving user problems.",
        activity: "Pick an app you use daily and list three problems it solves.",
        takeaway:
          "A developer's core job is to translate human needs into reliable software."
      },
      {
        title: "The tools of the trade",
        objective: "Learn the basic workflow: editor, code, terminal, browser, and version control.",
        activity: "Sketch the path from an idea to a shipped feature.",
        takeaway:
          "Developers use tools that help them write, test, save, and share code safely."
      },
      {
        title: "How developers think",
        objective: "Break a large problem into small steps that can be tested.",
        activity: "Write instructions for making a sandwich as if a computer had to follow them.",
        takeaway:
          "Clear thinking matters as much as knowing a programming language."
      },
      {
        title: "Your first move",
        objective: "Choose a beginner project that builds confidence without being too broad.",
        activity: "Define one feature, one user, and one success measure for a tiny app.",
        takeaway:
          "A small finished project teaches more than a huge unfinished idea."
      }
    ]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    field: "Design",
    summary:
      "Studies users and designs digital experiences that are clear, useful, and easy to navigate.",
    fit: "You notice confusing experiences and enjoy improving how things feel.",
    traits: ["creative", "empathetic", "visual", "curious"],
    skills: ["Research", "Wireframing", "Prototyping", "Usability testing"],
    workStyle: "Research, sketching, feedback, and iteration",
    startingPoint: "Redesign one frustrating screen from an app you already know.",
    lessons: [
      {
        title: "What UX means",
        objective: "See UX as the full experience someone has while completing a task.",
        activity: "Map the steps you take when ordering food online.",
        takeaway:
          "UX designers reduce confusion between what users want and what products do."
      },
      {
        title: "Research before screens",
        objective: "Learn why designers ask questions before drawing interfaces.",
        activity: "Interview someone about the last app feature that frustrated them.",
        takeaway:
          "Good design starts with evidence about real people, not personal taste alone."
      },
      {
        title: "From sketch to prototype",
        objective: "Understand wireframes, flows, and clickable prototypes.",
        activity: "Sketch three screens for booking an appointment.",
        takeaway:
          "Prototypes let teams test ideas before spending time building them."
      },
      {
        title: "Your first portfolio story",
        objective: "Turn a design exercise into a clear case study.",
        activity: "Write the problem, users, changes, and result for your redesign.",
        takeaway:
          "UX portfolios show how you think, not just how polished your screens look."
      }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    field: "Business",
    summary:
      "Finds patterns in data and explains what those patterns mean for decisions.",
    fit: "You like spotting trends, asking why, and turning messy information into clarity.",
    traits: ["analytical", "curious", "structured", "communicator"],
    skills: ["Spreadsheets", "SQL", "Dashboards", "Storytelling"],
    workStyle: "Independent analysis followed by clear presentations",
    startingPoint: "Analyze a public dataset about music, sports, weather, or jobs.",
    lessons: [
      {
        title: "What data analysts answer",
        objective: "Learn the common questions analysts help organizations answer.",
        activity: "Write three questions a coffee shop could answer with sales data.",
        takeaway:
          "Analysts connect numbers to decisions people need to make."
      },
      {
        title: "Cleaning messy information",
        objective: "Understand why data has to be checked before it can be trusted.",
        activity: "Find duplicate, missing, or inconsistent values in a simple list.",
        takeaway:
          "Clean data prevents confident answers from being confidently wrong."
      },
      {
        title: "Charts that explain",
        objective: "Choose chart types that match the question being asked.",
        activity: "Match a trend, comparison, and breakdown to the right chart.",
        takeaway:
          "A good chart makes the main point easier to see, not harder."
      },
      {
        title: "Your first analysis",
        objective: "Plan a tiny project from question to recommendation.",
        activity: "Pick one dataset and write a one-sentence recommendation from it.",
        takeaway:
          "Data work is valuable when it ends in a clear next step."
      }
    ]
  },
  {
    id: "nurse",
    title: "Nurse",
    field: "Healthcare",
    summary:
      "Cares for patients, monitors health, explains treatment, and works closely with medical teams.",
    fit: "You stay calm under pressure and want work that directly helps people.",
    traits: ["empathetic", "hands-on", "resilient", "communicator"],
    skills: ["Patient care", "Observation", "Medical knowledge", "Team coordination"],
    workStyle: "Fast-paced care with constant communication",
    startingPoint: "Volunteer, shadow a healthcare worker, or learn basic first aid.",
    lessons: [
      {
        title: "The nurse's role",
        objective: "Understand how nurses support patients and medical teams.",
        activity: "List what a patient might need besides a diagnosis.",
        takeaway:
          "Nurses combine clinical skill, emotional support, and careful observation."
      },
      {
        title: "Reading patient needs",
        objective: "Learn why small changes in symptoms, mood, or behavior matter.",
        activity: "Practice describing a situation using only observable facts.",
        takeaway:
          "Observation helps nurses catch problems early and advocate for patients."
      },
      {
        title: "Communication in care",
        objective: "See how nurses explain information to patients and teams.",
        activity: "Rewrite a medical instruction in plain language.",
        takeaway:
          "Clear communication can make care safer and less stressful."
      },
      {
        title: "Your first move",
        objective: "Explore pathways into nursing and related healthcare roles.",
        activity: "Compare one nursing program, one assistant role, and one volunteer option.",
        takeaway:
          "Healthcare careers often start with exposure to real care environments."
      }
    ]
  },
  {
    id: "electrician",
    title: "Electrician",
    field: "Skilled Trades",
    summary:
      "Installs, repairs, and maintains electrical systems in homes, buildings, and equipment.",
    fit: "You like hands-on work, practical problem solving, and seeing visible results.",
    traits: ["hands-on", "builder", "practical", "structured"],
    skills: ["Safety", "Blueprint reading", "Wiring", "Troubleshooting"],
    workStyle: "Physical, precise work across changing job sites",
    startingPoint: "Research apprenticeships and practice basic tool safety.",
    lessons: [
      {
        title: "What electricians work on",
        objective: "Understand residential, commercial, and industrial electrical work.",
        activity: "Identify five electrical systems around your home or school.",
        takeaway:
          "Electricians keep power safe, reliable, and useful in everyday spaces."
      },
      {
        title: "Safety comes first",
        objective: "Learn why procedures matter when working with electricity.",
        activity: "Write a safety checklist for starting a repair task.",
        takeaway:
          "Professional electricians follow safety habits before touching tools."
      },
      {
        title: "Troubleshooting a circuit",
        objective: "Understand how electricians narrow down the source of a problem.",
        activity: "Create a decision tree for a light that will not turn on.",
        takeaway:
          "Troubleshooting is logical detective work with real-world constraints."
      },
      {
        title: "Apprenticeship path",
        objective: "Learn how paid training can lead to licensing and specialization.",
        activity: "Find one local apprenticeship requirement and write down the first step.",
        takeaway:
          "Many trade careers let you earn while building recognized skills."
      }
    ]
  },
  {
    id: "teacher",
    title: "Teacher",
    field: "Education",
    summary:
      "Helps learners understand new ideas, practice skills, and build confidence.",
    fit: "You enjoy explaining things, encouraging people, and organizing learning.",
    traits: ["empathetic", "communicator", "structured", "creative"],
    skills: ["Lesson planning", "Classroom management", "Coaching", "Assessment"],
    workStyle: "People-centered days with planning, teaching, and feedback",
    startingPoint: "Tutor someone, lead a club session, or observe a classroom.",
    lessons: [
      {
        title: "What teachers design",
        objective: "See teaching as designing experiences that help students learn.",
        activity: "Turn one topic you know into a 10-minute lesson outline.",
        takeaway:
          "Teaching is not just knowing a subject; it is helping someone else reach it."
      },
      {
        title: "Explaining with examples",
        objective: "Learn how examples, practice, and feedback build understanding.",
        activity: "Explain a hard concept using one analogy and one practice question.",
        takeaway:
          "Great explanations meet learners where they are."
      },
      {
        title: "Managing a room",
        objective: "Understand routines, expectations, and relationships.",
        activity: "Design three class norms that would help a group learn safely.",
        takeaway:
          "Structure creates the conditions for students to participate."
      },
      {
        title: "Trying education work",
        objective: "Explore teaching, tutoring, training, and youth program roles.",
        activity: "Compare a school role and a non-school teaching role.",
        takeaway:
          "Education skills can lead to many kinds of people-focused careers."
      }
    ]
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    field: "Business",
    summary:
      "Uses online channels to help people discover, understand, and choose products or causes.",
    fit: "You like creativity, trends, psychology, and measuring what gets attention.",
    traits: ["creative", "communicator", "analytical", "curious"],
    skills: ["Content", "SEO", "Campaigns", "Analytics"],
    workStyle: "Creative testing with performance tracking",
    startingPoint: "Create a campaign plan for a club, small business, or cause.",
    lessons: [
      {
        title: "What marketing is for",
        objective: "Understand marketing as matching a message to an audience need.",
        activity: "Choose a product and write who it helps and why they care.",
        takeaway:
          "Digital marketing works best when it starts with a specific audience."
      },
      {
        title: "Channels and campaigns",
        objective: "Learn how social, search, email, and ads play different roles.",
        activity: "Pick the best channel for three different audience goals.",
        takeaway:
          "Each channel has a job, and campaigns combine them intentionally."
      },
      {
        title: "Testing messages",
        objective: "See how marketers compare ideas using data.",
        activity: "Write two headlines for the same event and predict which will perform better.",
        takeaway:
          "Marketing blends creativity with evidence about what people actually do."
      },
      {
        title: "Build a sample campaign",
        objective: "Create a portfolio-ready mini campaign.",
        activity: "Draft an audience, goal, message, channel, and success metric.",
        takeaway:
          "A clear campaign plan shows both creative and strategic thinking."
      }
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    field: "Technology",
    summary:
      "Protects systems and data by finding risks, monitoring threats, and responding to incidents.",
    fit: "You like investigation, rules, technology, and staying one step ahead.",
    traits: ["analytical", "structured", "resilient", "curious"],
    skills: ["Security basics", "Monitoring", "Risk analysis", "Incident response"],
    workStyle: "Careful monitoring, investigation, and documentation",
    startingPoint: "Learn password safety, networks, and basic security labs.",
    lessons: [
      {
        title: "What cybersecurity protects",
        objective: "Understand data, systems, accounts, and people as security targets.",
        activity: "List three things a school or business would need to protect.",
        takeaway:
          "Security work protects trust, privacy, money, and operations."
      },
      {
        title: "Thinking like a defender",
        objective: "Learn how analysts look for weak points before attackers use them.",
        activity: "Create a risk list for a shared laptop.",
        takeaway:
          "Cybersecurity is structured caution, not movie-style hacking."
      },
      {
        title: "Responding to alerts",
        objective: "Understand the first steps of investigating suspicious activity.",
        activity: "Write three questions to ask after a strange login alert.",
        takeaway:
          "Analysts gather evidence before deciding what action to take."
      },
      {
        title: "First security project",
        objective: "Choose a beginner-friendly learning path.",
        activity: "Make a checklist for securing your own accounts and devices.",
        takeaway:
          "Personal security habits are a practical entry point into the field."
      }
    ]
  },
  {
    id: "project-manager",
    title: "Project Manager",
    field: "Business",
    summary:
      "Keeps teams aligned on goals, schedules, risks, decisions, and delivery.",
    fit: "You like organizing people, clarifying next steps, and turning chaos into plans.",
    traits: ["structured", "communicator", "resilient", "practical"],
    skills: ["Planning", "Facilitation", "Risk tracking", "Prioritization"],
    workStyle: "Meetings, planning, follow-up, and problem solving",
    startingPoint: "Lead a small group project with clear tasks, owners, and deadlines.",
    lessons: [
      {
        title: "What project managers manage",
        objective: "Learn the difference between managing work and managing people.",
        activity: "Break a school event into goals, tasks, owners, and risks.",
        takeaway:
          "Project managers create clarity so teams can move together."
      },
      {
        title: "Scope, time, and tradeoffs",
        objective: "Understand how changing one constraint affects the rest.",
        activity: "Choose what you would cut if an event had half the budget.",
        takeaway:
          "Good project management makes tradeoffs visible before they become crises."
      },
      {
        title: "Running useful meetings",
        objective: "Practice agendas, decisions, and follow-ups.",
        activity: "Write a three-item agenda and two decision questions for a project meeting.",
        takeaway:
          "A meeting is useful when it creates decisions, alignment, or momentum."
      },
      {
        title: "Your first project story",
        objective: "Turn organizing experience into a career signal.",
        activity: "Describe one project using problem, action, result, and lesson.",
        takeaway:
          "Project portfolios can come from clubs, events, volunteering, or work."
      }
    ]
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    field: "Science",
    summary:
      "Studies the environment and helps solve problems involving land, water, air, and ecosystems.",
    fit: "You care about nature, evidence, and practical solutions for communities.",
    traits: ["curious", "analytical", "hands-on", "practical"],
    skills: ["Field sampling", "Research", "Data analysis", "Policy awareness"],
    workStyle: "Mix of field work, lab work, analysis, and reports",
    startingPoint: "Join a local cleanup, citizen science project, or nature survey.",
    lessons: [
      {
        title: "What environmental scientists study",
        objective: "Understand how science connects to real environmental decisions.",
        activity: "List one land, water, and air issue near your community.",
        takeaway:
          "Environmental science turns observations into evidence for action."
      },
      {
        title: "Field work basics",
        objective: "Learn why careful samples and notes matter.",
        activity: "Design a simple observation sheet for a local park.",
        takeaway:
          "Field data is only useful when it is collected consistently."
      },
      {
        title: "From data to recommendation",
        objective: "See how scientists communicate findings to decision makers.",
        activity: "Write a one-paragraph recommendation after observing litter in a park.",
        takeaway:
          "Science careers often require explaining evidence to non-scientists."
      },
      {
        title: "Explore green careers",
        objective: "Compare research, consulting, conservation, and policy paths.",
        activity: "Choose one environmental issue and list three jobs that could help.",
        takeaway:
          "Environmental work spans labs, field sites, offices, and public programs."
      }
    ]
  },

  {
    id: "product-manager",
    title: "Product Manager",
    field: "Technology",
    summary:
      "Decides what a product team should build next by connecting user needs, business goals, and technical reality.",
    fit: "You like organizing ideas, asking why, and helping different people agree on what matters most.",
    traits: ["structured", "communicator", "curious", "practical"],
    skills: ["User research", "Prioritization", "Roadmapping", "Decision writing"],
    workStyle: "Cross-functional planning with research, tradeoffs, and follow-through",
    startingPoint: "Write a one-page product idea for an app feature you wish existed.",
    lessons: [
      {
        title: "What product managers decide",
        objective: "Understand how product managers turn messy needs into clear product choices.",
        activity: "Choose one app feature and write the user problem, business reason, and success metric behind it.",
        takeaway:
          "Product management is about making thoughtful tradeoffs, not simply collecting feature ideas."
      },
      {
        title: "Listening to users",
        objective: "Learn how user interviews, feedback, and behavior data shape product direction.",
        activity: "Ask three people what frustrates them about a tool they use and group the answers by theme.",
        takeaway:
          "Strong product decisions are grounded in patterns from real users, not the loudest opinion."
      },
      {
        title: "Prioritizing what to build",
        objective: "Practice comparing impact, effort, risk, and timing before choosing a direction.",
        activity: "Rank five possible features using impact and effort, then explain your top choice.",
        takeaway:
          "Prioritization makes limited time visible so a team can focus on the most valuable next step."
      },
      {
        title: "Writing a product brief",
        objective: "Create a concise plan that helps design, engineering, and stakeholders align.",
        activity: "Draft a brief with problem, audience, goal, non-goals, risks, and launch measure.",
        takeaway:
          "A clear product brief is a decision document that reduces confusion before work begins."
      }
    ]
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    field: "Engineering",
    summary:
      "Designs, tests, and improves physical systems such as machines, tools, vehicles, and manufacturing equipment.",
    fit: "You enjoy understanding how things move, break, fit together, and become safer or more efficient.",
    traits: ["builder", "analytical", "hands-on", "structured"],
    skills: ["CAD", "Physics", "Testing", "Technical documentation"],
    workStyle: "Design analysis mixed with prototypes, tests, and engineering reviews",
    startingPoint: "Take apart a simple object safely and sketch how its parts work together.",
    lessons: [
      {
        title: "How engineers define problems",
        objective: "Learn why engineering starts with constraints, requirements, and failure modes.",
        activity: "Describe a water bottle using requirements like weight, durability, cost, and user needs.",
        takeaway:
          "Mechanical engineers solve physical problems by defining success before designing solutions."
      },
      {
        title: "From sketch to model",
        objective: "Understand the path from concept sketch to CAD model and prototype.",
        activity: "Sketch a phone stand, label the forces on it, and identify one weak point.",
        takeaway:
          "Models help engineers reason about shape, motion, materials, and manufacturability before building."
      },
      {
        title: "Testing and iteration",
        objective: "See why engineers expect prototypes to reveal problems.",
        activity: "Design a simple paper bridge test and decide what data would prove it improved.",
        takeaway:
          "Testing turns guesses into evidence and helps engineers improve designs safely."
      },
      {
        title: "Building an engineering portfolio",
        objective: "Identify beginner projects that show design thinking and measurement.",
        activity: "Write a project note with problem, constraints, prototype, test result, and next revision.",
        takeaway:
          "Engineering portfolios are strongest when they show tradeoffs, data, and iteration."
      }
    ]
  },
  {
    id: "accountant",
    title: "Accountant",
    field: "Finance",
    summary:
      "Organizes financial information so people and organizations understand money, obligations, and performance.",
    fit: "You like accuracy, patterns, rules, and helping people make calm decisions with numbers.",
    traits: ["analytical", "structured", "practical", "independent"],
    skills: ["Bookkeeping", "Financial statements", "Tax basics", "Attention to detail"],
    workStyle: "Detailed records, deadlines, reconciliations, and advisory conversations",
    startingPoint: "Track a simple monthly budget and categorize every transaction.",
    lessons: [
      {
        title: "What accounting explains",
        objective: "Understand how accounting turns transactions into a story about financial health.",
        activity: "List five transactions for a small business and decide whether each is income, expense, asset, or debt.",
        takeaway:
          "Accounting creates trusted records that show what happened and what decisions are possible."
      },
      {
        title: "Reading financial statements",
        objective: "Learn the basic purpose of income statements, balance sheets, and cash flow statements.",
        activity: "Match common questions to the statement that would answer them.",
        takeaway:
          "Different statements answer different questions about profit, resources, and cash movement."
      },
      {
        title: "Accuracy and controls",
        objective: "See why accountants check, reconcile, and document their work.",
        activity: "Find the mistake in a small set of transactions that does not balance.",
        takeaway:
          "Trustworthy financial work depends on repeatable checks, not memory or assumptions."
      },
      {
        title: "First steps in accounting",
        objective: "Compare bookkeeping, tax, audit, corporate accounting, and advisory paths.",
        activity: "Choose one accounting path and list the credentials, tools, and first project you would try.",
        takeaway:
          "Accounting offers many paths for people who like structured thinking and useful precision."
      }
    ]
  },
  {
    id: "lawyer",
    title: "Lawyer",
    field: "Law & Public Service",
    summary:
      "Uses legal rules, evidence, writing, and argument to advise clients and resolve conflicts.",
    fit: "You enjoy reading closely, debating carefully, and helping people navigate complicated situations.",
    traits: ["analytical", "communicator", "resilient", "structured"],
    skills: ["Legal research", "Writing", "Argumentation", "Client communication"],
    workStyle: "Research, writing, negotiation, preparation, and high-stakes communication",
    startingPoint: "Read a short court opinion or legal explainer and summarize the main issue in plain language.",
    lessons: [
      {
        title: "What lawyers actually do",
        objective: "Move past courtroom stereotypes and understand advice, documents, negotiation, and advocacy.",
        activity: "Choose a common conflict and list what legal questions would need to be answered.",
        takeaway:
          "Lawyers help people understand rights, risks, obligations, and choices under rules."
      },
      {
        title: "Reading rules and facts",
        objective: "Learn how lawyers connect specific facts to legal standards.",
        activity: "Write a fact list for a dispute and separate facts you know from facts you would need to prove.",
        takeaway:
          "Legal reasoning depends on careful distinctions between claims, evidence, and rules."
      },
      {
        title: "Writing persuasive arguments",
        objective: "Practice making a clear claim with reasons and support.",
        activity: "Write one paragraph that argues for a school policy change using facts and a counterargument.",
        takeaway:
          "Strong legal writing is structured, precise, and honest about the other side."
      },
      {
        title: "Exploring legal careers",
        objective: "Compare litigation, corporate, public interest, policy, and compliance work.",
        activity: "Pick one legal issue you care about and identify three roles that work on it.",
        takeaway:
          "Legal training can lead to many kinds of advocacy, advisory, and public-service work."
      }
    ]
  },
  {
    id: "social-worker",
    title: "Social Worker",
    field: "Human Services",
    summary:
      "Supports people and communities through counseling, advocacy, resource navigation, and crisis support.",
    fit: "You care about people's circumstances and want practical ways to help them move toward stability.",
    traits: ["empathetic", "communicator", "resilient", "practical"],
    skills: ["Active listening", "Case planning", "Advocacy", "Resource coordination"],
    workStyle: "People-centered support with documentation, boundaries, and teamwork",
    startingPoint: "Volunteer with a community organization and observe how needs are assessed and supported.",
    lessons: [
      {
        title: "What support can look like",
        objective: "Understand social work as both emotional support and practical systems navigation.",
        activity: "Map the resources a family might need after losing housing.",
        takeaway:
          "Social workers connect human needs with services, rights, plans, and relationships."
      },
      {
        title: "Listening without taking over",
        objective: "Learn why empowerment and consent matter in helping professions.",
        activity: "Rewrite advice as open-ended questions that let someone choose their next step.",
        takeaway:
          "Helpful support respects people's agency instead of treating them like problems to fix."
      },
      {
        title: "Case plans and documentation",
        objective: "See how goals, referrals, notes, and follow-ups keep support accountable.",
        activity: "Create a sample plan with one goal, two resources, and one follow-up question.",
        takeaway:
          "Documentation protects continuity of care and helps teams coordinate responsibly."
      },
      {
        title: "Taking care while helping",
        objective: "Explore boundaries, supervision, and resilience in emotionally demanding work.",
        activity: "List three boundaries that help a helper stay effective and ethical.",
        takeaway:
          "Sustainable helping requires compassion, structure, and support for the helper too."
      }
    ]
  },
  {
    id: "chef",
    title: "Chef",
    field: "Hospitality",
    summary:
      "Creates food experiences by planning menus, preparing dishes, leading kitchen flow, and managing quality.",
    fit: "You like hands-on creativity, fast feedback, teamwork, and making something people experience immediately.",
    traits: ["creative", "hands-on", "resilient", "practical"],
    skills: ["Knife skills", "Flavor building", "Kitchen timing", "Food safety"],
    workStyle: "Fast-paced preparation, service pressure, teamwork, and constant refinement",
    startingPoint: "Cook one simple dish three times and improve one variable each attempt.",
    lessons: [
      {
        title: "What chefs balance",
        objective: "Understand food work as creativity plus timing, cost, safety, and consistency.",
        activity: "Choose a dish and list what could go wrong with taste, timing, safety, and presentation.",
        takeaway:
          "Chefs create experiences while managing constraints that guests may never see."
      },
      {
        title: "Building flavor intentionally",
        objective: "Learn how salt, acid, fat, heat, texture, and aroma shape a dish.",
        activity: "Taste a simple food before and after adding acid or seasoning, then describe the difference.",
        takeaway:
          "Cooking skill grows when you can explain why a dish tastes better, not just follow a recipe."
      },
      {
        title: "Kitchen teamwork",
        objective: "See how prep, stations, communication, and timing keep service moving.",
        activity: "Plan the order of tasks for making dinner so everything finishes hot at the same time.",
        takeaway:
          "A kitchen succeeds through preparation, communication, and disciplined timing."
      },
      {
        title: "Creating a food portfolio",
        objective: "Turn practice into evidence of technique, taste, and growth.",
        activity: "Photograph a dish and write notes on ingredients, method, feedback, and next improvement.",
        takeaway:
          "Food careers reward both craft and the ability to learn from each service."
      }
    ]
  },
  {
    id: "financial-planner",
    title: "Financial Planner",
    field: "Finance",
    summary:
      "Helps people set money goals, understand options, and make plans for saving, investing, debt, and risk.",
    fit: "You like explaining numbers in a human way and helping people make steady long-term choices.",
    traits: ["analytical", "empathetic", "communicator", "structured"],
    skills: ["Budgeting", "Goal planning", "Risk basics", "Client education"],
    workStyle: "Client conversations, analysis, planning documents, and long-term follow-up",
    startingPoint: "Build a personal money plan with goals, monthly budget, emergency savings, and questions.",
    lessons: [
      {
        title: "What financial planning solves",
        objective: "Understand planning as aligning money decisions with life goals and constraints.",
        activity: "Create three sample goals for a client: short-term, medium-term, and long-term.",
        takeaway:
          "Financial planning is about choices over time, not just picking investments."
      },
      {
        title: "Budgeting without shame",
        objective: "Learn how planners use cash flow to create options instead of judgment.",
        activity: "Sort expenses into needs, commitments, wants, and future goals.",
        takeaway:
          "A budget is useful when it helps people see tradeoffs and act with less stress."
      },
      {
        title: "Risk and uncertainty",
        objective: "Explore emergency funds, insurance, diversification, and changing life events.",
        activity: "List three financial risks for a young adult and one possible protection for each.",
        takeaway:
          "Good plans prepare for uncertainty instead of pretending the future is perfectly predictable."
      },
      {
        title: "Practicing client guidance",
        objective: "Turn financial knowledge into clear, ethical recommendations.",
        activity: "Write a plain-language explanation of compound interest for someone your age.",
        takeaway:
          "Financial planners need trust, clarity, and responsibility as much as technical knowledge."
      }
    ]
  },
  {
    id: "video-game-designer",
    title: "Video Game Designer",
    field: "Creative Technology",
    summary:
      "Designs game rules, levels, systems, and player experiences that make games engaging and understandable.",
    fit: "You like games, storytelling, systems, feedback loops, and testing how people react to experiences.",
    traits: ["creative", "builder", "analytical", "curious"],
    skills: ["Game mechanics", "Level design", "Playtesting", "Systems thinking"],
    workStyle: "Creative iteration with prototypes, feedback, tuning, and collaboration",
    startingPoint: "Make a paper prototype of a tiny game with one rule, one goal, and one twist.",
    lessons: [
      {
        title: "What game designers design",
        objective: "Understand mechanics, goals, rules, feedback, difficulty, and player emotion.",
        activity: "Pick a favorite game and identify its core loop: action, reward, and next choice.",
        takeaway:
          "Game designers shape decisions and feelings, not just characters or graphics."
      },
      {
        title: "Prototyping before polish",
        objective: "Learn why rough versions are useful for testing fun and clarity early.",
        activity: "Create a no-code prototype using cards, paper, dice, or a simple board.",
        takeaway:
          "A prototype answers whether an idea works before time is spent making it beautiful."
      },
      {
        title: "Playtesting honestly",
        objective: "Practice observing players without explaining or defending the design.",
        activity: "Have someone play your prototype and write what confused them, surprised them, and motivated them.",
        takeaway:
          "Playtesting shows the game players actually experience, not the game in the designer's head."
      },
      {
        title: "Making a design portfolio",
        objective: "Document your design decisions and iterations clearly.",
        activity: "Write a one-page game design postmortem: goal, rules, test results, changes, and lesson.",
        takeaway:
          "Game portfolios should show your thinking, testing, and improvement process."
      }
    ]
  },
  {
    id: "human-resources-specialist",
    title: "Human Resources Specialist",
    field: "Business",
    summary:
      "Supports hiring, employee questions, workplace policies, training, and healthy team practices.",
    fit: "You like helping people understand systems, resolving sensitive issues, and improving workplaces.",
    traits: ["communicator", "empathetic", "structured", "practical"],
    skills: ["Hiring coordination", "Policy communication", "Conflict support", "Training"],
    workStyle: "People-focused operations with confidentiality, process, and careful documentation",
    startingPoint: "Design an onboarding checklist for a new club member or teammate.",
    lessons: [
      {
        title: "What HR protects",
        objective: "Understand HR as support for employees, managers, policy, fairness, and compliance.",
        activity: "List what a new employee needs in their first week to feel prepared and included.",
        takeaway:
          "HR helps workplaces function more clearly, fairly, and consistently."
      },
      {
        title: "Hiring as a structured process",
        objective: "Learn how job descriptions, interviews, and evaluation criteria reduce confusion and bias.",
        activity: "Write three interview questions that connect directly to a role's responsibilities.",
        takeaway:
          "Better hiring comes from clear criteria, not gut feelings alone."
      },
      {
        title: "Handling sensitive conversations",
        objective: "Explore confidentiality, empathy, boundaries, and documentation.",
        activity: "Rewrite a vague complaint as neutral notes with facts, impact, and next question.",
        takeaway:
          "HR communication must be compassionate, specific, and responsible."
      },
      {
        title: "Improving employee experience",
        objective: "Identify small systems that make teams healthier and easier to navigate.",
        activity: "Create a feedback survey with five questions for improving a club, class, or workplace.",
        takeaway:
          "HR work can improve culture by turning feedback into practical changes."
      }
    ]
  },
  {
    id: "architect",
    title: "Architect",
    field: "Design",
    summary:
      "Designs buildings and spaces by balancing human needs, beauty, safety, rules, and construction realities.",
    fit: "You notice spaces, enjoy visual thinking, and like solving practical problems with design.",
    traits: ["creative", "visual", "structured", "practical"],
    skills: ["Spatial design", "Drawing", "Building systems", "Client communication"],
    workStyle: "Design concepts, drawings, client feedback, codes, and construction coordination",
    startingPoint: "Sketch a room you know and redesign it for a different user need.",
    lessons: [
      {
        title: "What architects balance",
        objective: "Understand architecture as design shaped by people, site, budget, safety, and codes.",
        activity: "Pick a public space and list who uses it, what works, and what feels difficult.",
        takeaway:
          "Architecture turns human activities into spaces that must also be buildable and safe."
      },
      {
        title: "Reading a space",
        objective: "Learn how circulation, light, sound, materials, and accessibility affect experience.",
        activity: "Walk through a room and note where people pause, move, gather, or avoid.",
        takeaway:
          "Good spatial design starts by observing how people actually use places."
      },
      {
        title: "Drawing ideas clearly",
        objective: "See how plans, sections, elevations, and models communicate different information.",
        activity: "Draw a simple room from above and label doors, windows, furniture, and movement paths.",
        takeaway:
          "Architectural drawings are thinking tools as well as communication tools."
      },
      {
        title: "Your first design study",
        objective: "Build a mini portfolio piece around a real spatial problem.",
        activity: "Document before, user need, sketch options, chosen solution, and tradeoffs.",
        takeaway:
          "Architecture portfolios show observation, reasoning, constraints, and visual clarity."
      }
    ]
  },
];

const quizQuestions = [
  {
    text: "When you get a big assignment, what part do you enjoy most?",
    answers: [
      { text: "Breaking it into a clear plan", traits: ["structured", "practical"] },
      { text: "Imagining a creative direction", traits: ["creative", "visual"] },
      { text: "Finding patterns or hidden clues", traits: ["analytical", "curious"] },
      { text: "Helping the group feel confident", traits: ["empathetic", "communicator"] }
    ]
  },
  {
    text: "Which environment sounds most energizing?",
    answers: [
      { text: "A quiet space where I can build or analyze", traits: ["independent", "analytical"] },
      { text: "A hands-on site where every day is practical", traits: ["hands-on", "builder"] },
      { text: "A team setting with lots of conversation", traits: ["communicator", "empathetic"] },
      { text: "A creative room with sketches, ideas, and feedback", traits: ["creative", "visual"] }
    ]
  },
  {
    text: "What kind of problem do you naturally notice?",
    answers: [
      { text: "A process that is disorganized", traits: ["structured", "practical"] },
      { text: "A tool or system that could work better", traits: ["builder", "analytical"] },
      { text: "A person who needs clearer support", traits: ["empathetic", "communicator"] },
      { text: "A question that needs evidence", traits: ["curious", "analytical"] }
    ]
  },
  {
    text: "Which compliment would mean the most to you?",
    answers: [
      { text: "You made this easier to understand", traits: ["communicator", "empathetic"] },
      { text: "You made something useful", traits: ["builder", "hands-on"] },
      { text: "You found the answer in the details", traits: ["analytical", "structured"] },
      { text: "You came up with a fresh idea", traits: ["creative", "curious"] }
    ]
  },
  {
    text: "How do you prefer to learn a new skill?",
    answers: [
      { text: "Practice with tools and real examples", traits: ["hands-on", "practical"] },
      { text: "Watch people, ask questions, and discuss", traits: ["communicator", "empathetic"] },
      { text: "Read, compare, and test my understanding", traits: ["analytical", "independent"] },
      { text: "Experiment until I find a style that works", traits: ["creative", "curious"] }
    ]
  }
];


const careerPrerequisites = {
  "software-developer": {
    education: "Bachelor's degree in computer science is common, but bootcamps, certificates, self-study, and strong projects can also open doors.",
    timeline: "3-4 years for a bachelor's degree, 3-12 months for intensive beginner training, plus ongoing project practice.",
    credentials: "Portfolio projects, GitHub work, internships, coding assessments, and sometimes cloud or language certificates.",
    start: "Build and publish one small project, then explain the problem, users, code choices, and what you would improve."
  },
  "ux-designer": {
    education: "Degrees in design, psychology, human-computer interaction, or communications help, but a strong case-study portfolio matters most.",
    timeline: "2-4 years through college or 3-12 months through focused portfolio training and practice projects.",
    credentials: "UX portfolio, usability testing examples, Figma or prototyping skills, research notes, and internship or freelance work.",
    start: "Redesign one confusing experience and document the user problem, research, sketches, prototype, test feedback, and final changes."
  },
  "data-analyst": {
    education: "A bachelor's degree in business, statistics, economics, computer science, or a related field is common; certificates can help career changers.",
    timeline: "2-4 years for a degree path, or 3-9 months to build entry-level spreadsheet, SQL, dashboard, and portfolio skills.",
    credentials: "SQL projects, spreadsheet analysis, dashboard samples, analytics certificates, and clear written recommendations.",
    start: "Analyze a public dataset and publish a short report with one question, one chart, one insight, and one recommendation."
  },
  nurse: {
    education: "Requires an approved nursing program such as an ADN or BSN, followed by licensing. Some people begin as nursing assistants first.",
    timeline: "About 2 years for an associate nursing degree, 4 years for a BSN, plus licensing exam preparation.",
    credentials: "NCLEX-RN licensure for registered nurses, clinical hours, CPR/BLS, and optional specialty certifications later.",
    start: "Explore CNA, volunteer, shadowing, or basic first-aid opportunities to test whether patient-care environments fit you."
  },
  electrician: {
    education: "Usually requires a high school diploma or equivalent and a paid apprenticeship rather than a traditional college degree.",
    timeline: "Commonly 4-5 years of apprenticeship hours, classroom instruction, supervised work, and licensing preparation.",
    credentials: "Apprenticeship registration, state or local licensing, safety training, and continuing education for code updates.",
    start: "Research one local apprenticeship program and note the age, education, application, testing, and tool requirements."
  },
  teacher: {
    education: "Public school teachers usually need a bachelor's degree, teacher preparation program, student teaching, and state certification.",
    timeline: "Typically 4 years for a bachelor's path, plus certification exams and supervised classroom experience.",
    credentials: "State teaching license, background checks, student-teaching evaluations, and endorsements for grade level or subject.",
    start: "Tutor, mentor, coach, or lead a small lesson so you can test whether explaining and supporting learners energizes you."
  },
  "digital-marketer": {
    education: "Degrees in marketing, communications, business, or media are helpful, but practical campaign results and platform skills can matter more.",
    timeline: "2-4 years through college, or 3-9 months to build entry-level content, SEO, ads, analytics, and portfolio experience.",
    credentials: "Campaign samples, analytics reports, SEO/content projects, Google/Meta/HubSpot-style certificates, and writing samples.",
    start: "Create a simple campaign for a club, cause, or small business with audience, channel, content, budget, and results."
  },
  "cybersecurity-analyst": {
    education: "A degree in cybersecurity, IT, or computer science helps, but many people start through IT support, labs, and certifications.",
    timeline: "2-4 years for a degree, or 6-18 months to build networking, operating-system, security, and lab fundamentals.",
    credentials: "Security+, Network+, home labs, capture-the-flag practice, incident writeups, and eventually cloud or vendor certifications.",
    start: "Secure your own accounts and devices, then write a checklist explaining risks, controls, and what changed."
  },
  "project-manager": {
    education: "Degrees in business or a project field can help, but many project managers grow from team coordination experience.",
    timeline: "Entry paths vary: months of project coordination practice, or several years of experience before senior PM roles.",
    credentials: "Project plans, schedules, risk logs, stakeholder updates, CAPM/PMP later, and proof you can organize delivery.",
    start: "Lead a small project and document scope, tasks, owners, timeline, risks, decisions, and final result."
  },
  "environmental-scientist": {
    education: "A bachelor's degree in environmental science, biology, chemistry, geology, or a related field is commonly expected.",
    timeline: "Usually 4 years for entry-level roles; research-heavy or specialized roles may require graduate study.",
    credentials: "Field sampling experience, lab skills, GIS/data analysis, research reports, internships, and safety training.",
    start: "Join a citizen-science or cleanup project and document observations, methods, data, and environmental questions."
  },
  "product-manager": {
    education: "No single required degree; business, computer science, design, economics, or domain experience can all be relevant.",
    timeline: "Often 2-5 years of adjacent experience in design, engineering, analytics, operations, or customer work before PM roles.",
    credentials: "Product briefs, user research notes, roadmap exercises, shipped projects, analytics thinking, and strong communication samples.",
    start: "Write a product brief for one feature with user problem, goals, tradeoffs, risks, and success metrics."
  },
  "mechanical-engineer": {
    education: "A bachelor's degree in mechanical engineering or a closely related engineering field is usually required.",
    timeline: "Typically 4 years for the degree; professional engineering licensure can take additional supervised experience and exams.",
    credentials: "CAD projects, lab reports, design projects, internships, FE/PE path for some roles, and technical documentation.",
    start: "Create a small design project with sketches, measurements, prototype photos, test results, and next improvements."
  },
  accountant: {
    education: "A bachelor's degree in accounting or finance is common; CPA-track roles often require additional credit hours.",
    timeline: "Usually 4 years for a degree, with extra coursework and exam preparation for CPA licensure where required.",
    credentials: "Bookkeeping practice, spreadsheet skill, accounting software exposure, internships, CPA/CMA later depending on path.",
    start: "Build a sample budget or bookkeeping file and explain categories, reconciliations, and what the numbers reveal."
  },
  lawyer: {
    education: "Requires a bachelor's degree, law school, and bar admission for licensed attorney work in the United States.",
    timeline: "Typically 4 years undergraduate study, 3 years of law school, then bar exam preparation and admission requirements.",
    credentials: "JD degree, bar license, writing samples, clinics, internships, moot court, journals, or legal research experience.",
    start: "Summarize a legal issue in plain language and practice making a balanced argument with facts and counterpoints."
  },
  "social-worker": {
    education: "A bachelor's in social work or a related field can lead to some roles; clinical roles usually require an MSW and licensure.",
    timeline: "About 4 years for a BSW, 1-2 more years for an MSW, plus supervised hours for clinical licensure.",
    credentials: "Field placements, supervised hours, state licensure for clinical practice, crisis training, and case documentation experience.",
    start: "Volunteer with a community organization and write what needs you saw, what resources helped, and what boundaries mattered."
  },
  chef: {
    education: "Culinary school can help, but many chefs learn through kitchen experience, apprenticeships, and progressive responsibility.",
    timeline: "Months to 2 years for culinary training, with several years of kitchen experience to move into lead or chef roles.",
    credentials: "Food handler certification, culinary portfolio, station experience, references, and sometimes hospitality or safety credentials.",
    start: "Cook one dish repeatedly, gather feedback, track changes, and document how technique improved the result."
  },
  "financial-planner": {
    education: "A bachelor's degree in finance, business, economics, or a related field is common; planning credentials often require specific coursework.",
    timeline: "Usually 4 years for a degree, plus experience and exam preparation for credentials such as CFP depending on role.",
    credentials: "Client-service experience, financial planning coursework, licensing where required, CFP path, and ethical communication skills.",
    start: "Create a sample financial plan with goals, budget, emergency fund, debt questions, and risk considerations."
  },
  "video-game-designer": {
    education: "Game design, computer science, interactive media, art, or writing programs can help, but playable projects are essential.",
    timeline: "2-4 years through school or self-directed project building, plus repeated prototypes and team experience.",
    credentials: "Playable prototypes, design documents, level designs, playtest notes, engine skills, and a portfolio explaining decisions.",
    start: "Make a small playable or paper prototype and record what players understood, enjoyed, and struggled with."
  },
  "human-resources-specialist": {
    education: "Degrees in human resources, business, psychology, or communications are common, though operations experience can also lead in.",
    timeline: "Often 2-4 years of education or entry-level coordinator experience before specialist responsibilities.",
    credentials: "Hiring coordination, onboarding materials, policy communication samples, HRIS exposure, SHRM/HRCI credentials later.",
    start: "Design an onboarding plan with first-day steps, key contacts, training needs, and feedback check-ins."
  },
  architect: {
    education: "Licensed architects usually need an accredited architecture degree, supervised experience, and licensing exams.",
    timeline: "Often 5 years for a B.Arch or 4 years plus graduate study, followed by experience hours and exams.",
    credentials: "Design portfolio, studio projects, internships, architecture experience program hours, exams, and state licensure.",
    start: "Create a small spatial redesign study with observations, sketches, constraints, user needs, and a final concept."
  }
};

const defaultPrerequisites = {
  education: "Research whether this path expects a degree, certificate, apprenticeship, license, portfolio, or on-the-job training.",
  timeline: "Preparation time varies by location, employer, and level of responsibility.",
  credentials: "Look for proof employers request: projects, supervised hours, exams, licenses, references, or portfolio work.",
  start: "Find three job postings and compare their education, experience, and skill requirements."
};

function getPrerequisites(career) {
  return careerPrerequisites[career.id] || defaultPrerequisites;
}

function buildPrerequisiteLesson(career) {
  const prerequisites = getPrerequisites(career);

  return {
    type: "prerequisites",
    title: "Prerequisites: education, credentials, and timeline",
    objective: `Understand what it usually takes to become a ${career.title}, including school, training, credentials, and realistic preparation time.`,
    activity: `Compare three entry-level ${career.title} postings. Write down required education, preferred experience, tools, credentials, and anything that appears more than once.`,
    takeaway: `Prerequisites are not just boxes to check; they show how the field builds trust, safety, skill, and readiness before someone does the work independently.`,
    prerequisites
  };
}

function getCareerLessons(career) {
  return [buildPrerequisiteLesson(career), ...career.lessons];
}

const progressKey = "joblingo.lessonProgress";
let activeCareerId = careers[0].id;
let lessonProgress = readProgress();

const careerGrid = document.querySelector("#career-grid");
const careerSearch = document.querySelector("#career-search");
const fieldFilter = document.querySelector("#field-filter");
const careerSelect = document.querySelector("#career-select");
const lessonList = document.querySelector("#lesson-list");
const lessonCareerTitle = document.querySelector("#lesson-career-title");
const lessonCareerSummary = document.querySelector("#lesson-career-summary");
const progressLabel = document.querySelector("#progress-label");
const pathProgressBar = document.querySelector("#path-progress-bar");
const matchForm = document.querySelector("#match-form");
const matchButton = document.querySelector("#match-button");
const matchResults = document.querySelector("#match-results");
const careerCount = document.querySelector("#career-count");
const miniClassCount = document.querySelector("#mini-class-count");

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(lessonProgress));
}

function byActiveCareer() {
  return careers.find((career) => career.id === activeCareerId) || careers[0];
}

function getCompletedLessons(careerId) {
  return lessonProgress[careerId] || [];
}

function setActiveCareer(careerId) {
  activeCareerId = careerId;
  careerSelect.value = careerId;
  renderLessons();
  document.querySelector("#classroom").scrollIntoView({ behavior: "smooth" });
}

function renderFields() {
  const fields = [...new Set(careers.map((career) => career.field))].sort();
  fieldFilter.insertAdjacentHTML(
    "beforeend",
    fields.map((field) => `<option value="${field}">${field}</option>`).join("")
  );
}

function renderCareerOptions() {
  careerSelect.innerHTML = careers
    .map((career) => `<option value="${career.id}">${career.title}</option>`)
    .join("");
  careerSelect.value = activeCareerId;
}

function careerMatchesQuery(career, query) {
  const content = [
    career.title,
    career.field,
    career.summary,
    career.fit,
    career.workStyle,
    career.skills.join(" "),
    career.traits.join(" ")
  ]
    .join(" ")
    .toLowerCase();

  return content.includes(query);
}

function renderCareers() {
  const query = careerSearch.value.trim().toLowerCase();
  const selectedField = fieldFilter.value;
  const filtered = careers.filter((career) => {
    const matchesField = selectedField === "all" || career.field === selectedField;
    const matchesQuery = !query || careerMatchesQuery(career, query);
    return matchesField && matchesQuery;
  });

  careerGrid.innerHTML = filtered.length
    ? filtered.map(renderCareerCard).join("")
    : `<p class="empty-state">No career paths match that search yet. Try a different word or field.</p>`;

  careerGrid.querySelectorAll("[data-career-id]").forEach((button) => {
    button.addEventListener("click", () => setActiveCareer(button.dataset.careerId));
  });
}

function renderCareerCard(career) {
  const completed = getCompletedLessons(career.id).length;
  const total = getCareerLessons(career).length;

  return `
    <article class="career-card">
      <div class="card-meta">
        <span class="tag">${career.field}</span>
        <span class="tag">${total} classes</span>
      </div>
      <h3>${career.title}</h3>
      <p>${career.summary}</p>
      <div class="career-details" aria-label="${career.title} details">
        <div><span>Good fit if</span><strong>${career.traits.slice(0, 2).join(", ")}</strong></div>
        <div><span>Work style</span><strong>${career.workStyle}</strong></div>
        <div><span>Progress</span><strong>${completed}/${total} classes</strong></div>
      </div>
      <button class="button secondary" type="button" data-career-id="${career.id}">
        Start this path
      </button>
    </article>
  `;
}

function renderQuiz() {
  matchForm.innerHTML = quizQuestions
    .map(
      (question, questionIndex) => `
        <fieldset class="quiz-question">
          <legend>${questionIndex + 1}. ${question.text}</legend>
          <div class="option-list">
            ${question.answers
              .map(
                (answer, answerIndex) => `
                  <label class="option">
                    <input
                      type="radio"
                      name="question-${questionIndex}"
                      value="${answerIndex}"
                      ${answerIndex === 0 ? "checked" : ""}
                    />
                    <span>${answer.text}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </fieldset>
      `
    )
    .join("");
}

function calculateTraitScores() {
  return quizQuestions.reduce((scores, question, questionIndex) => {
    const selected = matchForm.querySelector(`input[name="question-${questionIndex}"]:checked`);
    const answer = question.answers[Number(selected.value)];

    answer.traits.forEach((trait) => {
      scores[trait] = (scores[trait] || 0) + 1;
    });

    return scores;
  }, {});
}

function calculateMatches() {
  const traitScores = calculateTraitScores();
  const highestPossible = Math.max(...Object.values(traitScores), 1);

  return careers
    .map((career) => {
      const rawScore = career.traits.reduce((score, trait) => score + (traitScores[trait] || 0), 0);
      const score = Math.round((rawScore / (career.traits.length * highestPossible)) * 100);

      return {
        ...career,
        matchScore: Math.min(score + 35, 99),
        sharedTraits: career.traits.filter((trait) => traitScores[trait])
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}

function renderMatches() {
  const matches = calculateMatches();

  matchResults.innerHTML = matches
    .map(
      (career) => `
        <article class="match-card">
          <div class="match-card-header">
            <h3>${career.title}</h3>
            <span class="score-pill">${career.matchScore}% match</span>
          </div>
          <p>${career.fit}</p>
          <div class="card-meta">
            ${career.sharedTraits.map((trait) => `<span class="tag">${trait}</span>`).join("")}
          </div>
          <button class="button secondary" type="button" data-match-career="${career.id}">
            Take the ${career.title} class
          </button>
        </article>
      `
    )
    .join("");

  matchResults.querySelectorAll("[data-match-career]").forEach((button) => {
    button.addEventListener("click", () => setActiveCareer(button.dataset.matchCareer));
  });
}


const lessonGuideTemplates = [
  {
    focus: "Career reality",
    why: (career) =>
      `This class separates the job title from the daily work: ${career.workStyle.toLowerCase()}. It helps you decide whether the role sounds interesting in real life, not just on paper.`,
    reflection: (career) =>
      `Which part of this role sounds energizing to you, and which part might drain you? Use this clue: ${career.fit}`,
    proof: (career) =>
      `Save a short "day in the life" summary for ${career.title} using three real tasks and one misconception you corrected.`
  },
  {
    focus: "Core skills",
    why: (career, lesson, skill) =>
      `This class connects the role to a skill you can actually practice: ${skill}. Naming the skill makes the career less mysterious and gives you a concrete next step.`,
    reflection: (career, lesson, skill) =>
      `Where have you already used a version of ${skill.toLowerCase()} at school, work, home, or in a hobby?`,
    proof: (career, lesson, skill) =>
      `Keep one small artifact that shows ${skill.toLowerCase()}: notes, a sketch, a spreadsheet, a script, a checklist, or a before-and-after example.`
  },
  {
    focus: "Decision making",
    why: (career) =>
      `Every career has judgment calls. This class shows how ${career.title}s think through tradeoffs, evidence, people, constraints, and consequences.`,
    reflection: (career) =>
      `What kind of decision in this role would make you curious enough to investigate instead of guessing?`,
    proof: (career) =>
      `Write a decision note with the problem, options, tradeoffs, recommendation, and what you would measure next.`
  },
  {
    focus: "First portfolio move",
    why: (career) =>
      `The final class turns curiosity into evidence. A tiny finished project helps you test whether ${career.title} is worth exploring further.`,
    reflection: (career) =>
      `After these classes, what is one question you still have before choosing ${career.title} as a serious path?`,
    proof: (career) =>
      `Create a one-page career snapshot: what the job does, skills to build, why it fits you, and your first experiment: ${career.startingPoint}`
  }
];

function getLessonGuide(career, lesson, index) {
  if (lesson.type === "prerequisites") {
    const prerequisites = lesson.prerequisites;

    return {
      focus: "Prerequisites",
      skill: "Path planning",
      why: `Education: ${prerequisites.education} Timeline: ${prerequisites.timeline}`,
      reflection: `Which prerequisite feels most realistic for you right now, and which one would require the most planning or support?`,
      proof: `Save a prerequisite checklist for ${career.title}: education path, timeline, credentials, first step, and three job-posting requirements you verified.`
    };
  }

  const templateIndex = Math.max(index - 1, 0);
  const template = lessonGuideTemplates[templateIndex] || lessonGuideTemplates[lessonGuideTemplates.length - 1];
  const skill = career.skills[templateIndex % career.skills.length];
  const secondarySkill = career.skills[(templateIndex + 1) % career.skills.length];

  return {
    focus: template.focus,
    skill,
    why: template.why(career, lesson, skill, secondarySkill),
    reflection: template.reflection(career, lesson, skill, secondarySkill),
    proof: template.proof(career, lesson, skill, secondarySkill)
  };
}

function renderLessons() {
  const career = byActiveCareer();
  const completedLessons = getCompletedLessons(career.id);
  const lessons = getCareerLessons(career);
  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  lessonCareerTitle.textContent = `${career.title} class path`;
  lessonCareerSummary.textContent = `${career.summary} Start here: ${career.startingPoint}`;
  progressLabel.textContent = `${progress}%`;
  pathProgressBar.style.width = `${progress}%`;

  lessonList.innerHTML = lessons
    .map((lesson, index) => {
      const lessonId = `${career.id}-${index}`;
      const isComplete = completedLessons.includes(index);
      const guide = getLessonGuide(career, lesson, index);

      return `
        <article class="lesson-card ${isComplete ? "completed" : ""}">
          <p class="eyebrow">Class ${index + 1}</p>
          <h3>${lesson.title}</h3>
          <div class="lesson-tags" aria-label="Lesson focus">
            <span class="tag">Focus: ${guide.focus}</span>
            <span class="tag">Skill: ${guide.skill}</span>
          </div>
          <p>${lesson.objective}</p>
          <dl>
            <div>
              <dt>Why it matters</dt>
              <dd>${guide.why}</dd>
            </div>
            <div>
              <dt>Try this</dt>
              <dd>${lesson.activity}</dd>
            </div>
            ${lesson.type === "prerequisites" ? `
              <div>
                <dt>Education path</dt>
                <dd>${lesson.prerequisites.education}</dd>
              </div>
              <div>
                <dt>Typical timeline</dt>
                <dd>${lesson.prerequisites.timeline}</dd>
              </div>
              <div>
                <dt>Credentials to know</dt>
                <dd>${lesson.prerequisites.credentials}</dd>
              </div>
              <div>
                <dt>Beginner first step</dt>
                <dd>${lesson.prerequisites.start}</dd>
              </div>
            ` : ""}
            <div>
              <dt>Reflect</dt>
              <dd>${guide.reflection}</dd>
            </div>
            <div>
              <dt>Proof to save</dt>
              <dd>${guide.proof}</dd>
            </div>
            <div>
              <dt>Career insight</dt>
              <dd>${lesson.takeaway}</dd>
            </div>
          </dl>
          <button
            class="button ${isComplete ? "secondary" : "primary"}"
            type="button"
            data-lesson-index="${index}"
            aria-pressed="${isComplete}"
            id="${lessonId}"
          >
            ${isComplete ? "Mark as unfinished" : "Mark class complete"}
          </button>
        </article>
      `;
    })
    .join("");

  lessonList.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => toggleLesson(Number(button.dataset.lessonIndex)));
  });

  renderCareers();
}

function toggleLesson(index) {
  const career = byActiveCareer();
  const completed = new Set(getCompletedLessons(career.id));

  if (completed.has(index)) {
    completed.delete(index);
  } else {
    completed.add(index);
  }

  lessonProgress[career.id] = [...completed].sort((a, b) => a - b);
  saveProgress();
  renderLessons();
}

function initialize() {
  careerCount.textContent = careers.length;
  miniClassCount.textContent = careers.reduce((total, career) => total + getCareerLessons(career).length, 0);
  renderFields();
  renderCareerOptions();
  renderQuiz();
  renderCareers();
  renderLessons();

  careerSearch.addEventListener("input", renderCareers);
  fieldFilter.addEventListener("change", renderCareers);
  careerSelect.addEventListener("change", (event) => {
    activeCareerId = event.target.value;
    renderLessons();
  });
  matchButton.addEventListener("click", renderMatches);
}

initialize();
