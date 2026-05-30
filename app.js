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

const additionalCareerBlueprints = [
  {
    id: "physician-assistant",
    title: "Physician Assistant",
    field: "Healthcare",
    summary: "Examines patients, diagnoses common conditions, orders tests, and supports treatment under physician collaboration.",
    fit: "You want hands-on medical work, patient relationships, and a faster route than becoming a physician.",
    traits: ["empathetic", "analytical", "resilient", "communicator"],
    skills: ["Clinical assessment", "Diagnosis", "Patient education", "Team coordination"],
    workStyle: "Patient-facing clinical care with documentation and medical-team collaboration",
    startingPoint: "Shadow a PA or volunteer in a clinic to observe patient flow and medical decision making.",
    setting: "clinics, hospitals, urgent care centers, and specialty practices",
    problem: "a patient arrives with symptoms that could have several causes",
    deliverable: "a short patient-case summary with symptoms, questions, likely next tests, and education points"
  },
  {
    id: "physical-therapist",
    title: "Physical Therapist",
    field: "Healthcare",
    summary: "Helps people recover movement, reduce pain, and rebuild strength after injury, illness, or surgery.",
    fit: "You like anatomy, coaching, practical progress, and helping people improve over time.",
    traits: ["empathetic", "hands-on", "structured", "communicator"],
    skills: ["Movement assessment", "Exercise planning", "Patient coaching", "Progress tracking"],
    workStyle: "Hands-on sessions, exercise plans, patient encouragement, and measurable rehabilitation goals",
    startingPoint: "Observe a rehab session or design a basic mobility routine with safety notes.",
    setting: "rehabilitation clinics, hospitals, sports settings, and home health",
    problem: "a patient needs to regain function safely without reinjury",
    deliverable: "a sample rehab plan with goal, baseline movement, exercises, safety notes, and progress measure"
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    field: "Healthcare",
    summary: "Ensures medicines are safe, appropriate, and understood by patients and healthcare teams.",
    fit: "You like chemistry, details, patient questions, and preventing mistakes before they happen.",
    traits: ["analytical", "structured", "communicator", "empathetic"],
    skills: ["Medication knowledge", "Safety checking", "Patient counseling", "Detail accuracy"],
    workStyle: "Precise medication review, patient counseling, documentation, and healthcare coordination",
    startingPoint: "Learn how one common medicine works and write a plain-language counseling note.",
    setting: "community pharmacies, hospitals, clinics, research settings, and public health programs",
    problem: "a patient takes multiple medicines that may interact or be misunderstood",
    deliverable: "a medication safety checklist with purpose, timing, side effects, interactions, and questions"
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    field: "Engineering",
    summary: "Designs and improves infrastructure such as roads, bridges, water systems, buildings, and transit networks.",
    fit: "You care about how communities work and enjoy practical math, safety, and large physical systems.",
    traits: ["analytical", "builder", "practical", "structured"],
    skills: ["Structural thinking", "Site analysis", "CAD", "Project documentation"],
    workStyle: "Design calculations, site constraints, safety reviews, and coordination with public or construction teams",
    startingPoint: "Study one bridge, road, or drainage problem near you and sketch the constraints.",
    setting: "engineering firms, construction sites, transportation agencies, and city infrastructure teams",
    problem: "a community needs a safe structure or system under budget, site, and environmental constraints",
    deliverable: "a site-observation brief with users, constraints, risks, design idea, and questions for an engineer"
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    field: "Design",
    summary: "Creates visual communication for brands, products, campaigns, publications, and digital experiences.",
    fit: "You notice typography, color, layout, and how visuals change what people understand or feel.",
    traits: ["creative", "visual", "communicator", "curious"],
    skills: ["Layout", "Typography", "Brand systems", "Visual critique"],
    workStyle: "Creative briefs, design iterations, feedback, production files, and visual problem solving",
    startingPoint: "Redesign a poster or social graphic and explain your layout choices.",
    setting: "design studios, marketing teams, agencies, nonprofits, media companies, and freelance projects",
    problem: "a message needs to be understood quickly by a specific audience",
    deliverable: "a before-and-after design with audience, goal, hierarchy, color choices, and feedback notes"
  },
  {
    id: "journalist",
    title: "Journalist",
    field: "Media",
    summary: "Finds, verifies, writes, and explains stories that help people understand events, issues, and communities.",
    fit: "You ask good questions, care about truth, and like turning messy information into clear stories.",
    traits: ["curious", "communicator", "resilient", "analytical"],
    skills: ["Interviewing", "Fact-checking", "Writing", "Source evaluation"],
    workStyle: "Research, interviews, deadlines, editing, and responsible public communication",
    startingPoint: "Interview someone about a local issue and write a balanced 500-word story.",
    setting: "newsrooms, podcasts, magazines, local media, newsletters, and independent reporting",
    problem: "the public needs accurate context about an event, decision, trend, or conflict",
    deliverable: "a reported story outline with angle, sources, verified facts, unanswered questions, and headline"
  },
  {
    id: "translator-interpreter",
    title: "Translator or Interpreter",
    field: "Language & Communication",
    summary: "Converts meaning between languages in written documents or live conversations while preserving context and tone.",
    fit: "You enjoy languages, cultural nuance, precision, and helping people understand each other.",
    traits: ["communicator", "empathetic", "structured", "curious"],
    skills: ["Bilingual fluency", "Cultural context", "Listening", "Terminology research"],
    workStyle: "Careful language work across documents, meetings, healthcare, legal, education, or community settings",
    startingPoint: "Translate a short public information notice and compare your wording with an official version.",
    setting: "schools, hospitals, courts, businesses, conferences, publishers, and remote language services",
    problem: "important meaning could be lost if words, tone, or cultural context are misunderstood",
    deliverable: "a glossary and translated sample with notes explaining difficult choices"
  },
  {
    id: "real-estate-agent",
    title: "Real Estate Agent",
    field: "Business",
    summary: "Helps people buy, sell, or rent property by guiding pricing, showings, negotiations, and paperwork.",
    fit: "You like people, local markets, negotiation, and helping clients make big practical decisions.",
    traits: ["communicator", "practical", "resilient", "empathetic"],
    skills: ["Client advising", "Market analysis", "Negotiation", "Follow-up"],
    workStyle: "Client meetings, property research, showings, paperwork, and relationship-based sales",
    startingPoint: "Compare three local listings and explain what affects their price.",
    setting: "brokerages, property tours, client meetings, local neighborhoods, and online listing platforms",
    problem: "a client must make a high-stakes property decision with incomplete information",
    deliverable: "a property comparison sheet with price, location, condition, tradeoffs, and client recommendation"
  },
  {
    id: "commercial-pilot",
    title: "Commercial Pilot",
    field: "Transportation",
    summary: "Operates aircraft safely by planning flights, monitoring systems, communicating, and making disciplined decisions.",
    fit: "You like responsibility, procedures, technology, travel, and staying calm under pressure.",
    traits: ["structured", "resilient", "analytical", "practical"],
    skills: ["Flight planning", "Situational awareness", "Communication", "Safety procedures"],
    workStyle: "Checklist-driven operations, weather judgment, crew coordination, and continuous training",
    startingPoint: "Take an introductory flight lesson or study how pilots read weather and flight checklists.",
    setting: "airlines, cargo carriers, charter companies, flight schools, and specialized aviation operations",
    problem: "a flight must be completed safely despite weather, equipment, timing, and airspace constraints",
    deliverable: "a mock preflight brief with route, weather risk, checklist items, and go/no-go decision"
  },
  {
    id: "firefighter",
    title: "Firefighter",
    field: "Public Safety",
    summary: "Responds to fires, medical emergencies, rescues, hazards, and community safety needs.",
    fit: "You want physically active service work that requires teamwork, courage, preparation, and calm execution.",
    traits: ["hands-on", "resilient", "practical", "communicator"],
    skills: ["Emergency response", "Physical readiness", "Team communication", "Safety procedures"],
    workStyle: "Shift work, training drills, emergency calls, equipment checks, and close team coordination",
    startingPoint: "Learn CPR basics and research firefighter candidate physical ability requirements.",
    setting: "fire stations, emergency scenes, community education events, and training facilities",
    problem: "people, property, or environments are in danger and decisions must be made quickly and safely",
    deliverable: "an emergency response checklist with scene safety, communication, equipment, and after-action review"
  },
  {
    id: "police-officer",
    title: "Police Officer",
    field: "Public Safety",
    summary: "Protects public safety, responds to calls, investigates incidents, writes reports, and supports community order.",
    fit: "You care about public service, communication, rules, de-escalation, and handling unpredictable situations.",
    traits: ["resilient", "communicator", "structured", "practical"],
    skills: ["De-escalation", "Observation", "Report writing", "Decision making"],
    workStyle: "Patrol, public interaction, incident response, documentation, and ongoing training",
    startingPoint: "Attend a community safety meeting or research local academy requirements.",
    setting: "communities, patrol areas, schools, events, courts, and emergency response scenes",
    problem: "a situation needs safety, facts, fairness, documentation, and careful communication",
    deliverable: "a neutral incident report practice with observations, timeline, actions, and follow-up questions"
  },
  {
    id: "paralegal",
    title: "Paralegal",
    field: "Law & Public Service",
    summary: "Supports lawyers by organizing cases, researching facts, drafting documents, and managing legal details.",
    fit: "You like law, research, organization, writing, and helping complex cases stay on track.",
    traits: ["structured", "analytical", "communicator", "practical"],
    skills: ["Legal research", "Document drafting", "Case organization", "Detail accuracy"],
    workStyle: "Research, deadlines, document review, client information, and attorney support",
    startingPoint: "Summarize a simple legal article and identify facts, rule, issue, and conclusion.",
    setting: "law firms, corporate legal teams, courts, government offices, and nonprofits",
    problem: "a legal team needs accurate facts and organized documents before decisions can be made",
    deliverable: "a case file checklist with timeline, parties, documents, missing facts, and research questions"
  },
  {
    id: "supply-chain-manager",
    title: "Supply Chain Manager",
    field: "Business",
    summary: "Coordinates how products, materials, information, and suppliers move from source to customer.",
    fit: "You like systems, logistics, problem solving, and making messy operations run smoothly.",
    traits: ["structured", "analytical", "practical", "communicator"],
    skills: ["Logistics", "Inventory planning", "Supplier coordination", "Risk management"],
    workStyle: "Planning, tracking, vendor communication, data review, and fast problem solving when disruptions happen",
    startingPoint: "Map how one product reaches a store or your home, from raw material to delivery.",
    setting: "warehouses, manufacturers, retailers, logistics companies, hospitals, and operations teams",
    problem: "a product must arrive on time despite demand changes, delays, cost limits, and supplier risk",
    deliverable: "a supply-chain map with steps, bottlenecks, risks, and improvement ideas"
  },
  {
    id: "sales-representative",
    title: "Sales Representative",
    field: "Business",
    summary: "Helps customers understand products or services, builds relationships, and guides buying decisions.",
    fit: "You like talking with people, solving needs, persuasion, goals, and learning what motivates decisions.",
    traits: ["communicator", "resilient", "empathetic", "practical"],
    skills: ["Discovery questions", "Product knowledge", "Persuasion", "Follow-up"],
    workStyle: "Customer conversations, demos, outreach, relationship tracking, and performance goals",
    startingPoint: "Practice explaining a product you like by matching features to customer needs.",
    setting: "retail, software companies, medical sales, real estate, services, and business-to-business teams",
    problem: "a customer has a need but must trust that the solution is worth the cost and change",
    deliverable: "a sales conversation plan with customer profile, questions, value points, objections, and follow-up"
  },
  {
    id: "veterinarian",
    title: "Veterinarian",
    field: "Healthcare",
    summary: "Diagnoses, treats, and protects animal health while communicating with owners and supporting public health.",
    fit: "You care about animals, science, problem solving, and emotionally honest client conversations.",
    traits: ["empathetic", "analytical", "hands-on", "resilient"],
    skills: ["Animal assessment", "Medical knowledge", "Client communication", "Surgical basics"],
    workStyle: "Clinical exams, diagnostics, treatment plans, procedures, and owner education",
    startingPoint: "Volunteer at an animal shelter or clinic and observe how animal behavior and health are documented.",
    setting: "animal hospitals, farms, shelters, research labs, zoos, and public health organizations",
    problem: "an animal cannot explain symptoms, so clues must come from examination, owner history, and tests",
    deliverable: "a mock animal case note with history, observations, possible causes, tests, and owner guidance"
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    field: "Engineering",
    summary: "Designs medical devices, tools, software, or systems that improve healthcare and patient outcomes.",
    fit: "You like biology, engineering, design, and solving health problems with technology.",
    traits: ["analytical", "builder", "curious", "practical"],
    skills: ["Medical-device design", "Testing", "Biology basics", "Technical documentation"],
    workStyle: "Research, prototypes, lab testing, regulatory thinking, and collaboration with clinicians",
    startingPoint: "Study one medical device and explain the user need, safety concern, and design tradeoff.",
    setting: "medical device companies, hospitals, research labs, startups, and regulatory environments",
    problem: "a healthcare problem needs a safe, usable, tested technical solution",
    deliverable: "a device concept brief with user, problem, constraints, risks, test plan, and improvement idea"
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    field: "Technology",
    summary: "Builds and maintains cloud infrastructure that helps apps run reliably, securely, and at scale.",
    fit: "You like systems, automation, reliability, security, and understanding how apps work behind the scenes.",
    traits: ["analytical", "builder", "structured", "independent"],
    skills: ["Cloud platforms", "Networking", "Automation", "Reliability"],
    workStyle: "Infrastructure design, scripting, monitoring, incident response, and security-minded operations",
    startingPoint: "Deploy a tiny static website or API and document the cloud services involved.",
    setting: "software companies, IT teams, startups, enterprises, and infrastructure consulting groups",
    problem: "an application needs to stay available, secure, fast, and affordable as usage changes",
    deliverable: "a simple architecture diagram with hosting, storage, network, monitoring, and security notes"
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    field: "Technology",
    summary: "Builds systems that use data and models to make predictions, recommendations, or automated decisions.",
    fit: "You like math, code, experiments, data, and asking whether a model actually works in the real world.",
    traits: ["analytical", "builder", "curious", "structured"],
    skills: ["Python", "Model training", "Data preparation", "Evaluation"],
    workStyle: "Coding, experiments, data checks, model evaluation, and collaboration with product or research teams",
    startingPoint: "Train a simple model on a public dataset and write what it predicts well and poorly.",
    setting: "technology companies, research labs, product teams, healthcare, finance, and data platforms",
    problem: "a pattern in data could support a useful prediction, but errors and bias must be measured",
    deliverable: "a model report with dataset, target, baseline, metric, result, limitations, and ethical concern"
  },
  {
    id: "event-planner",
    title: "Event Planner",
    field: "Hospitality",
    summary: "Designs and coordinates events by managing goals, guests, budgets, vendors, timelines, and on-site details.",
    fit: "You like organization, creativity, people, logistics, and making experiences feel smooth.",
    traits: ["structured", "creative", "communicator", "resilient"],
    skills: ["Timeline planning", "Vendor coordination", "Budgeting", "Guest experience"],
    workStyle: "Planning documents, vendor communication, client updates, checklists, and event-day problem solving",
    startingPoint: "Plan a small event with budget, timeline, supplies, roles, and backup plans.",
    setting: "venues, conferences, weddings, nonprofits, campuses, hotels, and corporate events",
    problem: "an experience must happen at a specific time with many people, vendors, and details aligned",
    deliverable: "an event plan with goals, audience, schedule, budget, risks, roles, and day-of checklist"
  },
  {
    id: "urban-planner",
    title: "Urban Planner",
    field: "Law & Public Service",
    summary: "Helps communities decide how land, transportation, housing, parks, and public spaces should develop.",
    fit: "You care about cities, fairness, maps, policy, design, and long-term community choices.",
    traits: ["analytical", "communicator", "practical", "curious"],
    skills: ["Community engagement", "Policy analysis", "Mapping", "Long-range planning"],
    workStyle: "Research, public meetings, maps, policy documents, and coordination with community stakeholders",
    startingPoint: "Study one street or neighborhood and list safety, access, housing, and transportation issues.",
    setting: "city governments, planning agencies, consulting firms, nonprofits, and transportation teams",
    problem: "a community must balance growth, access, safety, environment, cost, and resident needs",
    deliverable: "a neighborhood observation memo with map notes, stakeholders, tradeoffs, and recommendation"
  }

  ,
  {
    id: "dentist",
    title: "Dentist",
    field: "Healthcare",
    summary: "Diagnoses and treats teeth, gums, and oral health issues while helping patients prevent future problems.",
    fit: "You like science, precise hands-on work, patient care, and helping people feel more confident and healthy.",
    traits: ["empathetic", "hands-on", "analytical", "structured"],
    skills: ["Oral diagnosis", "Manual precision", "Patient education", "Treatment planning"],
    workStyle: "Clinical exams, procedures, patient explanations, prevention planning, and detailed documentation",
    startingPoint: "Shadow a dental office or learn how one common oral-health problem is prevented and treated.",
    setting: "dental clinics, hospitals, community health programs, specialty practices, and public health settings",
    problem: "a patient has pain or oral-health risk that needs diagnosis, treatment options, and prevention guidance",
    deliverable: "a sample oral-health education handout with cause, prevention steps, treatment options, and patient questions"
  },
  {
    id: "psychologist",
    title: "Psychologist",
    field: "Human Services",
    summary: "Studies thoughts, emotions, behavior, and mental health to support people through assessment, therapy, research, or consulting.",
    fit: "You are curious about people, careful with sensitive topics, and interested in evidence-based support.",
    traits: ["empathetic", "analytical", "communicator", "curious"],
    skills: ["Assessment", "Research methods", "Therapeutic communication", "Ethical judgment"],
    workStyle: "Listening, assessment, treatment planning, research, documentation, and professional boundaries",
    startingPoint: "Read about one therapy approach and summarize what problem it helps with and what evidence supports it.",
    setting: "clinics, schools, hospitals, research labs, private practices, organizations, and community programs",
    problem: "a person or group needs support understanding behavior, emotions, learning, or mental-health patterns",
    deliverable: "a support-plan outline with concern, context, assessment questions, ethical boundaries, and referral options"
  },
  {
    id: "occupational-therapist",
    title: "Occupational Therapist",
    field: "Healthcare",
    summary: "Helps people build or regain the daily-life skills they need for school, work, self-care, and independence.",
    fit: "You like practical problem solving, adaptive tools, patient coaching, and helping people participate in life.",
    traits: ["empathetic", "hands-on", "creative", "practical"],
    skills: ["Activity analysis", "Adaptive strategies", "Patient coaching", "Goal planning"],
    workStyle: "Client assessments, practical exercises, adaptive equipment, progress notes, and team collaboration",
    startingPoint: "Choose a daily task and redesign it for someone with limited hand strength or mobility.",
    setting: "hospitals, schools, rehab centers, homes, mental-health programs, and community clinics",
    problem: "a person cannot complete an important daily task safely or independently yet",
    deliverable: "an adaptation plan with task steps, barrier, tool or strategy, practice plan, and progress measure"
  },
  {
    id: "medical-laboratory-scientist",
    title: "Medical Laboratory Scientist",
    field: "Healthcare",
    summary: "Tests blood, tissue, and other samples to help healthcare teams diagnose and monitor disease.",
    fit: "You like biology, precision, lab work, quality control, and being an important behind-the-scenes problem solver.",
    traits: ["analytical", "structured", "independent", "practical"],
    skills: ["Lab testing", "Quality control", "Specimen handling", "Data accuracy"],
    workStyle: "Careful sample processing, instrument checks, result validation, safety procedures, and documentation",
    startingPoint: "Learn how one common lab test works and why sample handling affects the result.",
    setting: "hospital labs, reference labs, public health labs, research facilities, and diagnostic companies",
    problem: "a care team needs accurate lab results before diagnosis or treatment decisions can be made",
    deliverable: "a lab-test explainer with specimen type, what is measured, quality risks, and what results can indicate"
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    field: "Technology",
    summary: "Uses statistics, programming, and domain knowledge to uncover patterns and build predictive or explanatory models.",
    fit: "You like asking questions with data, coding experiments, math, and explaining uncertainty clearly.",
    traits: ["analytical", "curious", "structured", "communicator"],
    skills: ["Statistics", "Python", "Experiment design", "Data storytelling"],
    workStyle: "Data exploration, modeling, evaluation, communication, and collaboration with product or business teams",
    startingPoint: "Analyze a public dataset and compare a simple statistical summary with a predictive model.",
    setting: "technology companies, healthcare, finance, retail, research labs, government, and product analytics teams",
    problem: "a decision could improve if patterns, uncertainty, and model limitations were understood",
    deliverable: "a data-science notebook summary with question, data, method, metric, insight, limitation, and recommendation"
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    field: "Engineering",
    summary: "Designs, builds, and tests robots that sense, decide, move, and interact with the physical world.",
    fit: "You like machines, coding, electronics, physics, and seeing software affect real movement.",
    traits: ["builder", "analytical", "hands-on", "curious"],
    skills: ["Mechanical design", "Controls", "Sensors", "Programming"],
    workStyle: "Prototype building, debugging, simulations, hardware tests, and cross-discipline engineering teamwork",
    startingPoint: "Build or simulate a tiny robot behavior, such as following a line or avoiding an obstacle.",
    setting: "manufacturing, research labs, warehouses, healthcare, defense, agriculture, and automation companies",
    problem: "a physical task needs a machine that can sense conditions and act reliably in the real world",
    deliverable: "a robot concept brief with task, sensors, movement, control logic, failure risks, and test plan"
  },
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    field: "Engineering",
    summary: "Designs, tests, and improves aircraft, spacecraft, satellites, propulsion systems, or flight technologies.",
    fit: "You enjoy physics, advanced math, high-stakes design, testing, and systems that must be extremely reliable.",
    traits: ["analytical", "builder", "structured", "curious"],
    skills: ["Aerodynamics", "Simulation", "Testing", "Systems engineering"],
    workStyle: "Design reviews, modeling, tests, documentation, safety analysis, and collaboration across technical teams",
    startingPoint: "Compare two wing or rocket designs and explain how shape affects performance and stability.",
    setting: "aircraft companies, space agencies, defense contractors, satellite firms, research labs, and propulsion teams",
    problem: "a flight system must perform safely under extreme forces, constraints, and reliability requirements",
    deliverable: "a flight-design note with mission goal, constraints, forces, design tradeoffs, and testing questions"
  },
  {
    id: "interior-designer",
    title: "Interior Designer",
    field: "Design",
    summary: "Plans interior spaces so they are functional, safe, comfortable, and visually aligned with user needs.",
    fit: "You notice rooms, materials, lighting, furniture, mood, and how spaces affect behavior.",
    traits: ["creative", "visual", "practical", "empathetic"],
    skills: ["Space planning", "Materials", "Lighting", "Client communication"],
    workStyle: "Client briefs, mood boards, floor plans, material choices, budgets, and installation coordination",
    startingPoint: "Redesign a room for a specific user and explain layout, lighting, storage, and accessibility choices.",
    setting: "homes, offices, hotels, restaurants, healthcare spaces, retail stores, and design studios",
    problem: "a space needs to support people's activities, safety, budget, comfort, and visual goals",
    deliverable: "a room concept board with user needs, floor plan, materials, lighting plan, budget tradeoffs, and rationale"
  },
  {
    id: "librarian",
    title: "Librarian",
    field: "Education",
    summary: "Helps people find, evaluate, organize, and use information through collections, programs, research support, and community services.",
    fit: "You like learning, organizing knowledge, helping people, digital tools, and making information easier to access.",
    traits: ["curious", "communicator", "structured", "empathetic"],
    skills: ["Research support", "Information organization", "Digital literacy", "Program planning"],
    workStyle: "Reference help, collection management, community programming, teaching, and technology support",
    startingPoint: "Create a research guide for a topic with reliable sources, search tips, and evaluation notes.",
    setting: "public libraries, schools, universities, archives, companies, museums, and community organizations",
    problem: "someone needs trustworthy information but may not know where to search or how to evaluate sources",
    deliverable: "a research guide with search terms, source list, credibility checks, and user-friendly instructions"
  },
  {
    id: "film-editor",
    title: "Film Editor",
    field: "Media",
    summary: "Shapes raw footage into a clear story by choosing shots, rhythm, sound, transitions, and emotional pacing.",
    fit: "You like storytelling, detail, music, timing, visual choices, and making meaning through sequence.",
    traits: ["creative", "visual", "structured", "curious"],
    skills: ["Story pacing", "Video editing", "Sound choices", "Visual continuity"],
    workStyle: "Reviewing footage, assembling cuts, feedback cycles, technical exports, and collaboration with directors or clients",
    startingPoint: "Edit a 60-second video from existing clips and explain how each cut affects the story.",
    setting: "film studios, newsrooms, social media teams, agencies, documentary teams, and freelance production work",
    problem: "raw footage needs structure, emotion, clarity, and pacing before an audience can understand it",
    deliverable: "a short edit with a cut list, story goal, pacing choices, sound notes, and revision plan"
  },
  {
    id: "customer-support-specialist",
    title: "Customer Support Specialist",
    field: "Customer Experience",
    summary: "Helps customers solve problems, understand products, and feel supported through chat, email, phone, or help centers.",
    fit: "You are patient, clear, and good at calming confusing situations.",
    traits: ["empathetic", "communicator", "structured", "resilient"],
    skills: ["Active listening", "Troubleshooting", "Writing", "Customer empathy"],
    workStyle: "Customer conversations, issue tracking, product learning, and clear follow-up",
    startingPoint: "Rewrite a confusing help article into step-by-step instructions a beginner could follow.",
    setting: "software companies, retailers, healthcare services, banks, schools, and support centers",
    problem: "a customer is stuck, frustrated, or missing the information needed to move forward",
    deliverable: "a support response with problem summary, steps tried, solution, tone notes, and follow-up question"
  },
  {
    id: "administrative-assistant",
    title: "Administrative Assistant",
    field: "Operations",
    summary: "Keeps teams organized by managing schedules, documents, communication, supplies, and daily office workflows.",
    fit: "You like order, details, helping people stay prepared, and making busy days run smoothly.",
    traits: ["structured", "practical", "communicator", "empathetic"],
    skills: ["Scheduling", "Document organization", "Email communication", "Prioritization"],
    workStyle: "Coordinating calendars, preparing materials, handling requests, and solving small operational problems",
    startingPoint: "Plan a mock meeting with agenda, attendee list, materials, timing, and follow-up notes.",
    setting: "offices, schools, hospitals, nonprofits, law firms, agencies, and remote teams",
    problem: "a team has many moving pieces and needs reliable coordination so important details do not get missed",
    deliverable: "a meeting operations packet with agenda, schedule, prep checklist, notes template, and follow-up plan"
  },
  {
    id: "operations-coordinator",
    title: "Operations Coordinator",
    field: "Operations",
    summary: "Improves everyday workflows by tracking tasks, coordinating teams, solving process gaps, and keeping work moving.",
    fit: "You notice bottlenecks, like checklists, and enjoy making systems easier for everyone.",
    traits: ["structured", "practical", "analytical", "communicator"],
    skills: ["Process mapping", "Coordination", "Reporting", "Problem solving"],
    workStyle: "Task tracking, cross-team communication, vendor follow-up, process fixes, and status reporting",
    startingPoint: "Map a repeated process in your life and identify one step that could be simpler.",
    setting: "startups, warehouses, hospitals, universities, agencies, retailers, and service businesses",
    problem: "work is delayed because responsibilities, handoffs, or priorities are unclear",
    deliverable: "a process map with steps, owners, bottlenecks, risks, and one improvement recommendation"
  },
  {
    id: "it-help-desk-technician",
    title: "IT Help Desk Technician",
    field: "Technology",
    summary: "Solves everyday technology issues for people by diagnosing devices, accounts, software, networks, and access problems.",
    fit: "You like practical tech puzzles and can explain fixes without making people feel embarrassed.",
    traits: ["analytical", "communicator", "practical", "resilient"],
    skills: ["Troubleshooting", "Technical documentation", "Customer service", "Device support"],
    workStyle: "Ticket triage, step-by-step diagnosis, user support, documentation, and escalation when needed",
    startingPoint: "Write a troubleshooting guide for a common problem like slow Wi-Fi or a locked account.",
    setting: "companies, schools, hospitals, government offices, managed service providers, and remote support teams",
    problem: "someone cannot do their work because a technical tool, account, or device is failing",
    deliverable: "a help desk ticket response with symptoms, questions, steps, resolution, and prevention notes"
  },
  {
    id: "bookkeeper",
    title: "Bookkeeper",
    field: "Business",
    summary: "Records financial transactions, reconciles accounts, organizes receipts, and keeps business records accurate.",
    fit: "You like accuracy, routines, numbers, and making messy records trustworthy.",
    traits: ["structured", "analytical", "practical", "independent"],
    skills: ["Transaction recording", "Reconciliation", "Spreadsheets", "Attention to detail"],
    workStyle: "Regular financial updates, account checks, documentation, and communication with owners or accountants",
    startingPoint: "Create a sample monthly budget and reconcile it against pretend bank transactions.",
    setting: "small businesses, nonprofits, accounting firms, retail shops, contractors, and remote finance teams",
    problem: "a business needs reliable records to understand cash, expenses, invoices, and financial obligations",
    deliverable: "a monthly bookkeeping packet with categorized transactions, reconciliation notes, exceptions, and summary"
  },
  {
    id: "quality-assurance-tester",
    title: "Quality Assurance Tester",
    field: "Technology",
    summary: "Tests software to find bugs, verify features, document issues, and help teams ship more reliable products.",
    fit: "You are curious, detail-oriented, and enjoy trying to break things in useful ways.",
    traits: ["analytical", "structured", "curious", "practical"],
    skills: ["Test planning", "Bug reporting", "Regression testing", "User perspective"],
    workStyle: "Exploring product flows, writing test cases, documenting bugs, retesting fixes, and collaborating with developers",
    startingPoint: "Test a simple website or app and write three bug reports with steps to reproduce.",
    setting: "software companies, game studios, agencies, enterprise IT teams, and product organizations",
    problem: "a product may confuse users or fail in edge cases before a team catches the issue",
    deliverable: "a test plan with scenarios, expected results, actual results, bug reports, and severity ratings"
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    field: "Business",
    summary: "Connects business needs to practical solutions by gathering requirements, mapping processes, and clarifying decisions.",
    fit: "You like asking questions, organizing information, and translating between people and systems.",
    traits: ["analytical", "structured", "communicator", "curious"],
    skills: ["Requirements gathering", "Process analysis", "Documentation", "Stakeholder communication"],
    workStyle: "Interviews, workflow diagrams, requirement notes, tradeoff discussions, and solution validation",
    startingPoint: "Interview someone about a frustrating process and write what the improved version should do.",
    setting: "technology teams, banks, healthcare organizations, retailers, government agencies, and consulting firms",
    problem: "people know something is not working but need the real need defined before choosing a solution",
    deliverable: "a requirements brief with problem, users, current process, desired outcome, constraints, and success measure"
  },
  {
    id: "warehouse-team-lead",
    title: "Warehouse Team Lead",
    field: "Operations",
    summary: "Guides warehouse staff, coordinates inventory movement, monitors safety, and keeps orders flowing accurately.",
    fit: "You like active work, practical leadership, and making a busy physical system run well.",
    traits: ["hands-on", "practical", "structured", "communicator"],
    skills: ["Inventory control", "Team coordination", "Safety awareness", "Workflow planning"],
    workStyle: "Shift planning, floor checks, order prioritization, training, safety reminders, and issue solving",
    startingPoint: "Design a simple storage layout for faster picking and fewer mistakes.",
    setting: "warehouses, distribution centers, retail stockrooms, manufacturers, shipping hubs, and fulfillment centers",
    problem: "orders must be moved accurately and safely while people, inventory, and deadlines change",
    deliverable: "a shift plan with staffing, priorities, safety checks, bottlenecks, and handoff notes"
  },
  {
    id: "account-manager",
    title: "Account Manager",
    field: "Business",
    summary: "Maintains client relationships, understands customer goals, coordinates solutions, and helps accounts grow over time.",
    fit: "You enjoy relationships, follow-through, problem solving, and helping clients feel understood.",
    traits: ["communicator", "empathetic", "structured", "resilient"],
    skills: ["Client communication", "Relationship management", "Planning", "Negotiation"],
    workStyle: "Client calls, account plans, internal coordination, renewals, problem solving, and opportunity tracking",
    startingPoint: "Create a client check-in plan with goals, questions, risks, and next steps.",
    setting: "software companies, agencies, service businesses, manufacturers, benefits firms, and B2B sales teams",
    problem: "a client needs ongoing value, quick answers, and confidence that the company understands their goals",
    deliverable: "an account plan with client goals, stakeholders, risks, opportunities, next actions, and renewal strategy"
  },
  {
    id: "product-support-analyst",
    title: "Product Support Analyst",
    field: "Technology",
    summary: "Investigates user issues, explains product behavior, identifies patterns, and helps teams improve software support.",
    fit: "You like both people and systems, and you enjoy tracing problems to their root cause.",
    traits: ["analytical", "communicator", "curious", "structured"],
    skills: ["Product troubleshooting", "Data lookup", "Bug triage", "User communication"],
    workStyle: "Support tickets, product investigation, bug escalation, knowledge base updates, and customer education",
    startingPoint: "Pick an app feature and write a support guide for three things users might misunderstand.",
    setting: "SaaS companies, fintech products, healthcare platforms, education software, and internal product teams",
    problem: "a user-facing issue may be caused by data, product design, a bug, or unclear instructions",
    deliverable: "an issue analysis with user impact, reproduction steps, likely cause, workaround, and escalation notes"
  },
  {
    id: "recruiting-coordinator",
    title: "Recruiting Coordinator",
    field: "Human Resources",
    summary: "Supports hiring by scheduling interviews, communicating with candidates, tracking pipelines, and keeping recruiters organized.",
    fit: "You like coordination, respectful communication, and helping people move through important decisions.",
    traits: ["structured", "communicator", "empathetic", "practical"],
    skills: ["Scheduling", "Candidate communication", "Applicant tracking", "Attention to detail"],
    workStyle: "Calendar coordination, interview logistics, candidate updates, data entry, and recruiter support",
    startingPoint: "Build an interview schedule and candidate email sequence for a mock role.",
    setting: "companies, staffing firms, universities, nonprofits, healthcare systems, and remote recruiting teams",
    problem: "candidates and interviewers need a smooth, timely hiring process with clear communication",
    deliverable: "a recruiting coordination plan with timeline, interview steps, email templates, and tracking fields"
  },
  {
    id: "email-marketing-specialist",
    title: "Email Marketing Specialist",
    field: "Marketing",
    summary: "Creates email campaigns that inform, persuade, retain, and guide audiences through useful next actions.",
    fit: "You like writing, testing ideas, understanding audiences, and improving results with data.",
    traits: ["creative", "analytical", "communicator", "structured"],
    skills: ["Copywriting", "Audience segmentation", "A/B testing", "Email analytics"],
    workStyle: "Campaign planning, subject line testing, list segmentation, performance review, and content iteration",
    startingPoint: "Write a three-email welcome sequence for a product or club you understand.",
    setting: "ecommerce companies, nonprofits, software firms, media brands, schools, agencies, and membership organizations",
    problem: "an audience needs the right message at the right time without feeling spammed or confused",
    deliverable: "an email campaign brief with audience, goal, sequence, subject lines, metrics, and test idea"
  },
  {
    id: "facilities-coordinator",
    title: "Facilities Coordinator",
    field: "Operations",
    summary: "Helps physical workplaces run safely and smoothly by coordinating maintenance, vendors, supplies, moves, and service requests.",
    fit: "You like practical problem solving, organization, and making spaces work better for people.",
    traits: ["practical", "structured", "communicator", "hands-on"],
    skills: ["Vendor coordination", "Work orders", "Safety checks", "Space planning"],
    workStyle: "Handling requests, scheduling repairs, checking spaces, managing vendors, and tracking facility needs",
    startingPoint: "Inspect a shared space and create a maintenance checklist with priorities.",
    setting: "offices, campuses, hospitals, apartment communities, warehouses, labs, and public buildings",
    problem: "a building or workplace issue affects safety, comfort, productivity, or access",
    deliverable: "a facilities request plan with issue description, priority, vendor needs, safety notes, and follow-up"
  },
  {
    id: "data-entry-specialist",
    title: "Data Entry Specialist",
    field: "Operations",
    summary: "Enters, checks, and organizes information so records stay accurate, searchable, and useful for teams.",
    fit: "You are patient with details and can stay focused on accuracy in repetitive work.",
    traits: ["structured", "independent", "practical", "analytical"],
    skills: ["Typing accuracy", "Data validation", "Spreadsheets", "Record organization"],
    workStyle: "Careful entry, quality checks, duplicate cleanup, formatting, and exception reporting",
    startingPoint: "Clean a small spreadsheet by fixing missing values, duplicates, and inconsistent formatting.",
    setting: "healthcare offices, logistics teams, finance departments, research projects, nonprofits, and remote admin teams",
    problem: "records are incomplete, inconsistent, or hard to trust because data was captured in different ways",
    deliverable: "a data cleanup report with fields checked, errors found, fixes made, and remaining questions"
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    field: "Language & Communication",
    summary: "Explains complex products, systems, or processes through documentation that helps people complete tasks accurately.",
    fit: "You enjoy clear writing, learning how things work, and turning expert knowledge into useful instructions.",
    traits: ["communicator", "structured", "curious", "analytical"],
    skills: ["Documentation", "Information architecture", "Editing", "Subject research"],
    workStyle: "Interviewing experts, testing procedures, writing guides, organizing content, and revising for clarity",
    startingPoint: "Write a quick-start guide for a tool, device, or app you already know well.",
    setting: "software companies, hardware firms, healthcare technology, engineering teams, government, and education platforms",
    problem: "users or teams cannot safely or efficiently use something because the instructions are unclear",
    deliverable: "a user guide section with audience, task, prerequisites, steps, warnings, and success check"
  },
  {
    id: "public-relations-specialist",
    title: "Public Relations Specialist",
    field: "Marketing",
    summary: "Shapes public communication by writing messages, pitching stories, preparing spokespeople, and managing reputation.",
    fit: "You like communication strategy, news, relationships, and explaining why something matters.",
    traits: ["communicator", "creative", "resilient", "structured"],
    skills: ["Media writing", "Story pitching", "Message planning", "Relationship building"],
    workStyle: "Press materials, media outreach, campaign planning, stakeholder updates, and reputation monitoring",
    startingPoint: "Write a short press release for a community event or product launch.",
    setting: "agencies, nonprofits, companies, universities, government offices, entertainment, and public figures",
    problem: "an organization needs the public to understand a story, announcement, issue, or response accurately",
    deliverable: "a PR brief with audience, key message, press angle, spokesperson notes, risks, and pitch list"
  },
  {
    id: "insurance-claims-adjuster",
    title: "Insurance Claims Adjuster",
    field: "Business",
    summary: "Reviews insurance claims by gathering facts, assessing damage, interpreting policies, and recommending fair resolutions.",
    fit: "You like investigation, details, practical judgment, and helping people navigate stressful situations.",
    traits: ["analytical", "practical", "communicator", "structured"],
    skills: ["Investigation", "Policy review", "Documentation", "Negotiation"],
    workStyle: "Claim interviews, evidence review, estimates, policy interpretation, documentation, and settlement communication",
    startingPoint: "Review a fictional accident scenario and list facts, missing information, and next questions.",
    setting: "insurance companies, field offices, remote claim teams, auto shops, homes, and disaster response areas",
    problem: "a loss must be understood fairly using evidence, policy terms, cost estimates, and customer communication",
    deliverable: "a claim summary with incident facts, evidence, policy issue, estimate, recommendation, and next steps"
  },
  {
    id: "training-specialist",
    title: "Training Specialist",
    field: "Education",
    summary: "Designs and delivers workplace learning that helps employees build skills, follow processes, and improve performance.",
    fit: "You like explaining, coaching, organizing lessons, and helping adults learn practical skills.",
    traits: ["communicator", "empathetic", "structured", "creative"],
    skills: ["Instructional design", "Facilitation", "Assessment", "Feedback"],
    workStyle: "Needs analysis, lesson planning, workshops, learning materials, practice activities, and progress checks",
    startingPoint: "Turn a task you know into a 20-minute training outline with practice and feedback.",
    setting: "companies, hospitals, call centers, schools, government agencies, nonprofits, and remote learning teams",
    problem: "people need to learn a task or behavior consistently without being overwhelmed by information",
    deliverable: "a training plan with learner need, objective, agenda, activity, assessment, and follow-up resource"
  },
  {
    id: "restaurant-manager",
    title: "Restaurant Manager",
    field: "Hospitality",
    summary: "Runs restaurant operations by coordinating staff, service, inventory, guest experience, safety, and business results.",
    fit: "You like fast-paced teamwork, hospitality, practical leadership, and solving problems in real time.",
    traits: ["hands-on", "communicator", "resilient", "practical"],
    skills: ["Team leadership", "Customer service", "Scheduling", "Inventory control"],
    workStyle: "Shift management, staff coaching, guest recovery, ordering, safety checks, and performance review",
    startingPoint: "Create a shift plan for a busy dinner service with staffing, prep, and guest flow.",
    setting: "restaurants, cafes, hotels, catering companies, food halls, and franchise operations",
    problem: "guests, staff, food quality, timing, and costs all need attention during a busy service",
    deliverable: "a restaurant shift brief with roles, service risks, inventory needs, guest recovery plan, and closing checklist"
  },
  {
    id: "environmental-field-technician",
    title: "Environmental Field Technician",
    field: "Science",
    summary: "Collects environmental samples, records field observations, maintains equipment, and supports testing or compliance work.",
    fit: "You like outdoor work, science, details, and practical environmental problem solving.",
    traits: ["hands-on", "curious", "structured", "practical"],
    skills: ["Sampling", "Field notes", "Equipment handling", "Safety procedures"],
    workStyle: "Site visits, sample collection, measurements, documentation, equipment prep, and lab handoff",
    startingPoint: "Practice writing objective field notes from a local park, stream, or built environment observation.",
    setting: "environmental firms, labs, construction sites, water agencies, parks, utilities, and consulting teams",
    problem: "a site needs reliable environmental data before decisions about safety, compliance, or restoration",
    deliverable: "a field report with location, conditions, sample plan, observations, equipment, safety risks, and next tests"
  },
  {
    id: "crm-administrator",
    title: "CRM Administrator",
    field: "Technology",
    summary: "Maintains customer relationship management systems so teams can track contacts, sales, service, and reporting accurately.",
    fit: "You like organizing data, improving workflows, and helping teams use business tools correctly.",
    traits: ["structured", "analytical", "practical", "communicator"],
    skills: ["CRM configuration", "Data quality", "Reporting", "User support"],
    workStyle: "Field updates, user permissions, data cleanup, dashboard building, automation, and support requests",
    startingPoint: "Design a simple contact tracker and decide which fields, views, and reports users need.",
    setting: "sales teams, nonprofits, universities, healthcare groups, membership organizations, and SaaS companies",
    problem: "customer or donor data is messy, incomplete, or hard for teams to use consistently",
    deliverable: "a CRM improvement plan with users, fields, workflow, data cleanup rules, dashboard needs, and training notes"
  },
  {
    id: "video-producer",
    title: "Video Producer",
    field: "Media",
    summary: "Plans and coordinates video projects from concept through filming, editing, delivery, and audience goals.",
    fit: "You like storytelling, logistics, creative decisions, and bringing many pieces together.",
    traits: ["creative", "communicator", "structured", "visual"],
    skills: ["Production planning", "Storyboarding", "Interviewing", "Project coordination"],
    workStyle: "Creative briefs, schedules, shoots, feedback, asset coordination, and publishing plans",
    startingPoint: "Plan a one-minute explainer video with audience, script outline, shot list, and edit notes.",
    setting: "media companies, marketing teams, agencies, schools, nonprofits, social channels, and freelance studios",
    problem: "a story or message needs to become a clear video within time, budget, and production constraints",
    deliverable: "a video production packet with goal, audience, script beats, shot list, schedule, and delivery checklist"
  },
  {
    id: "procurement-specialist",
    title: "Procurement Specialist",
    field: "Operations",
    summary: "Helps organizations buy goods and services by comparing vendors, negotiating terms, and tracking purchasing rules.",
    fit: "You like research, practical decisions, negotiation, and balancing cost with reliability.",
    traits: ["analytical", "practical", "structured", "communicator"],
    skills: ["Vendor research", "Negotiation", "Cost comparison", "Contract review"],
    workStyle: "Sourcing suppliers, comparing quotes, purchase approvals, vendor communication, and delivery follow-up",
    startingPoint: "Compare three suppliers for a common item and recommend one using clear criteria.",
    setting: "hospitals, manufacturers, universities, governments, retailers, nonprofits, and corporate purchasing teams",
    problem: "a team needs the right product or service at a fair cost without creating supply, quality, or contract risk",
    deliverable: "a vendor comparison brief with requirements, options, pricing, risks, recommendation, and approval steps"
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    field: "Technology",
    summary: "Builds apps for phones and tablets by designing screens, writing code, connecting data, and testing user flows.",
    fit: "You like coding visible products people can carry and use every day.",
    traits: ["builder", "analytical", "creative", "independent"],
    skills: ["Mobile UI", "App development", "Debugging", "API integration"],
    workStyle: "Feature coding, device testing, design collaboration, store readiness, and performance fixes",
    startingPoint: "Sketch a simple app flow and build or prototype one screen with real interactions.",
    setting: "software companies, startups, agencies, game studios, internal product teams, and freelance projects",
    problem: "users need a reliable, fast, and understandable experience on small screens and changing devices",
    deliverable: "a mobile feature brief with user flow, screen sketch, data needs, edge cases, and test plan"
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician",
    field: "Skilled Trades",
    summary: "Repairs and maintains buildings, equipment, and systems so facilities stay safe, functional, and comfortable.",
    fit: "You like hands-on troubleshooting, tools, practical fixes, and varied workdays.",
    traits: ["hands-on", "practical", "builder", "resilient"],
    skills: ["Repair", "Preventive maintenance", "Safety", "Troubleshooting"],
    workStyle: "Work orders, inspections, repairs, parts tracking, emergency response, and preventive maintenance routines",
    startingPoint: "Create a preventive maintenance checklist for a home, classroom, or shared workspace.",
    setting: "apartments, hotels, schools, factories, hospitals, offices, and property management teams",
    problem: "a building system or piece of equipment needs safe repair before it causes disruption or risk",
    deliverable: "a maintenance work order with symptoms, safety check, tools, likely cause, repair steps, and prevention"
  },
  {
    id: "career-coach",
    title: "Career Coach",
    field: "Human Services",
    summary: "Helps people clarify goals, improve resumes, prepare interviews, and make practical career decisions.",
    fit: "You like listening, encouraging others, asking useful questions, and turning uncertainty into next steps.",
    traits: ["empathetic", "communicator", "structured", "curious"],
    skills: ["Coaching", "Resume review", "Interview preparation", "Goal setting"],
    workStyle: "One-on-one conversations, resource sharing, action plans, feedback, and accountability check-ins",
    startingPoint: "Help a friend turn one experience into resume bullets and a short interview story.",
    setting: "schools, workforce centers, nonprofits, universities, private coaching practices, and online platforms",
    problem: "someone feels stuck or overwhelmed and needs a clear, realistic plan for their next career move",
    deliverable: "a career action plan with goal, strengths, barriers, resume notes, interview practice, and next three steps"
  },
  {
    id: "web-developer",
    title: "Web Developer",
    field: "Technology",
    summary: "Builds websites and web features using code, design implementation, content structure, and browser testing.",
    fit: "You like visible coding projects, problem solving, and making information interactive on the web.",
    traits: ["builder", "creative", "analytical", "independent"],
    skills: ["HTML", "CSS", "JavaScript", "Responsive design"],
    workStyle: "Page building, styling, browser testing, accessibility checks, bug fixes, and deployment",
    startingPoint: "Build a one-page site for a topic you care about with headings, layout, and mobile-friendly styling.",
    setting: "agencies, startups, ecommerce teams, nonprofits, media organizations, and freelance web studios",
    problem: "an organization needs a clear, accessible, fast web experience that users can navigate easily",
    deliverable: "a web page prototype with audience, content sections, responsive layout, accessibility notes, and test checklist"
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    field: "Technology",
    summary: "Keeps databases reliable, secure, organized, backed up, and performing well for applications and teams.",
    fit: "You like systems, structure, data integrity, and preventing problems before people notice them.",
    traits: ["analytical", "structured", "practical", "independent"],
    skills: ["SQL", "Backup planning", "Performance tuning", "Data security"],
    workStyle: "Monitoring databases, managing access, tuning queries, planning backups, and responding to incidents",
    startingPoint: "Design a tiny database for books, orders, or contacts and write questions it should answer.",
    setting: "technology companies, banks, hospitals, universities, retailers, government, and enterprise IT teams",
    problem: "critical data must stay accurate, available, secure, and fast as usage grows",
    deliverable: "a database care plan with tables, access rules, backup schedule, performance concerns, and recovery steps"
  },
  {
    id: "network-administrator",
    title: "Network Administrator",
    field: "Technology",
    summary: "Maintains computer networks so people, devices, servers, and cloud services can connect reliably and securely.",
    fit: "You like infrastructure, troubleshooting, maps, systems, and keeping invisible connections working.",
    traits: ["analytical", "structured", "practical", "resilient"],
    skills: ["Networking", "Monitoring", "Security basics", "Troubleshooting"],
    workStyle: "Network monitoring, device configuration, access management, incident response, and documentation",
    startingPoint: "Draw a simple home or school network map and label devices, connections, and possible failure points.",
    setting: "schools, hospitals, companies, data centers, managed service providers, and government offices",
    problem: "people cannot work if network connections are slow, insecure, unreliable, or misconfigured",
    deliverable: "a network troubleshooting brief with map, symptoms, likely causes, tests, fix, and prevention notes"
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    field: "Technology",
    summary: "Improves how software is built, tested, deployed, monitored, and recovered through automation and infrastructure.",
    fit: "You like coding, systems, reliability, automation, and making teams ship safely.",
    traits: ["builder", "analytical", "structured", "resilient"],
    skills: ["Automation", "Cloud infrastructure", "CI/CD", "Monitoring"],
    workStyle: "Pipeline work, infrastructure changes, deployment support, incident learning, and reliability improvements",
    startingPoint: "Automate a repeated computer task and write what could go wrong if it ran unattended.",
    setting: "software companies, cloud teams, platform groups, startups, enterprise IT, and reliability engineering teams",
    problem: "software needs to move from code to users quickly without breaking systems or hiding failures",
    deliverable: "a deployment plan with build steps, tests, environment needs, rollback plan, monitoring, and risk notes"
  },
  {
    id: "ui-designer",
    title: "UI Designer",
    field: "Design",
    summary: "Designs the visual details of digital interfaces, including layout, typography, color, components, and states.",
    fit: "You notice polish, consistency, visual hierarchy, and how screens guide attention.",
    traits: ["visual", "creative", "structured", "empathetic"],
    skills: ["Visual design", "Design systems", "Typography", "Interface layout"],
    workStyle: "Screen design, component states, style guides, feedback cycles, and collaboration with product teams",
    startingPoint: "Redesign one app screen with clearer hierarchy, spacing, buttons, and error states.",
    setting: "product teams, agencies, startups, design studios, ecommerce companies, and software firms",
    problem: "a digital interface needs to look trustworthy and guide users toward the right action",
    deliverable: "a UI redesign with original issue, component choices, spacing system, color rationale, and states"
  },
  {
    id: "copywriter",
    title: "Copywriter",
    field: "Marketing",
    summary: "Writes persuasive, clear, audience-focused words for ads, websites, emails, product pages, and campaigns.",
    fit: "You enjoy words, psychology, concise messages, and testing how language changes action.",
    traits: ["creative", "communicator", "curious", "analytical"],
    skills: ["Persuasive writing", "Audience research", "Editing", "Brand voice"],
    workStyle: "Brief reviews, headline drafts, message testing, edits, stakeholder feedback, and campaign support",
    startingPoint: "Write five headline options for the same product aimed at different audiences.",
    setting: "agencies, marketing teams, ecommerce brands, nonprofits, software companies, and freelance businesses",
    problem: "an audience needs a message that is clear, motivating, credible, and aligned with the brand",
    deliverable: "a copy deck with audience, value proposition, headline options, body copy, call to action, and rationale"
  },
  {
    id: "grant-writer",
    title: "Grant Writer",
    field: "Nonprofit",
    summary: "Writes funding proposals that explain a need, program plan, budget, evidence, and expected community impact.",
    fit: "You like writing with purpose, research, details, and helping organizations fund meaningful work.",
    traits: ["communicator", "structured", "empathetic", "analytical"],
    skills: ["Proposal writing", "Research", "Budget narrative", "Impact measurement"],
    workStyle: "Finding funders, gathering program details, writing narratives, tracking deadlines, and reporting outcomes",
    startingPoint: "Draft a one-page funding request for a community project with need, plan, and impact.",
    setting: "nonprofits, schools, museums, research organizations, community groups, and public agencies",
    problem: "a useful program needs funding and must prove it has a clear plan and measurable value",
    deliverable: "a grant outline with need statement, program activities, target audience, budget notes, outcomes, and deadline"
  },
  {
    id: "fundraiser",
    title: "Fundraiser",
    field: "Nonprofit",
    summary: "Builds donor relationships, plans campaigns, communicates impact, and raises money for missions or causes.",
    fit: "You like relationships, storytelling, purpose-driven work, and connecting people to meaningful action.",
    traits: ["communicator", "empathetic", "resilient", "structured"],
    skills: ["Donor communication", "Campaign planning", "Storytelling", "Relationship building"],
    workStyle: "Donor calls, event planning, appeals, impact updates, data tracking, and stewardship",
    startingPoint: "Write a donor thank-you note and a short appeal for a cause you care about.",
    setting: "nonprofits, universities, hospitals, arts organizations, advocacy groups, and community foundations",
    problem: "a mission needs sustainable support from people who understand the impact of giving",
    deliverable: "a fundraising campaign brief with donor audience, story, ask, channels, timeline, and stewardship plan"
  },
  {
    id: "program-coordinator",
    title: "Program Coordinator",
    field: "Nonprofit",
    summary: "Organizes program activities, participants, schedules, materials, reporting, and communication so services run well.",
    fit: "You like helping people, organizing details, and turning plans into real experiences.",
    traits: ["structured", "empathetic", "communicator", "practical"],
    skills: ["Program logistics", "Participant communication", "Tracking", "Problem solving"],
    workStyle: "Scheduling, outreach, materials prep, attendance tracking, partner coordination, and progress reporting",
    startingPoint: "Plan a small workshop with audience, goals, agenda, materials, sign-up flow, and follow-up.",
    setting: "nonprofits, schools, community centers, public agencies, healthcare programs, and workforce organizations",
    problem: "a service must reach participants smoothly while staff, partners, resources, and reporting needs align",
    deliverable: "a program plan with goal, schedule, participants, materials, risks, communication, and outcome tracking"
  },
  {
    id: "community-health-worker",
    title: "Community Health Worker",
    field: "Healthcare",
    summary: "Connects people to health information, services, screenings, resources, and support within their communities.",
    fit: "You care about people, trust, practical support, and making systems easier to navigate.",
    traits: ["empathetic", "communicator", "practical", "resilient"],
    skills: ["Outreach", "Health education", "Resource navigation", "Cultural humility"],
    workStyle: "Community conversations, referrals, follow-up, education sessions, documentation, and advocacy",
    startingPoint: "Create a plain-language resource guide for one health need in your community.",
    setting: "clinics, public health departments, nonprofits, schools, community centers, and outreach programs",
    problem: "people may need care or prevention support but face barriers around trust, access, language, or information",
    deliverable: "a community support plan with audience, health need, resources, outreach script, barriers, and follow-up"
  },
  {
    id: "dental-hygienist",
    title: "Dental Hygienist",
    field: "Healthcare",
    summary: "Provides preventive oral care, cleans teeth, takes patient histories, educates patients, and supports dentists.",
    fit: "You like healthcare, hands-on precision, patient education, and preventive care.",
    traits: ["hands-on", "empathetic", "structured", "communicator"],
    skills: ["Patient care", "Oral health education", "Precision", "Clinical documentation"],
    workStyle: "Patient appointments, cleanings, screenings, education, charting, and dental-team coordination",
    startingPoint: "Learn common oral health habits and write a patient-friendly prevention checklist.",
    setting: "dental offices, public health clinics, schools, community programs, and specialty practices",
    problem: "patients need preventive care and clear guidance before small oral health problems become bigger issues",
    deliverable: "a dental hygiene visit plan with patient questions, prevention notes, education script, and documentation checklist"
  },
  {
    id: "radiologic-technologist",
    title: "Radiologic Technologist",
    field: "Healthcare",
    summary: "Uses imaging equipment to capture diagnostic images while positioning patients safely and following radiation protocols.",
    fit: "You like healthcare technology, careful procedures, patient interaction, and visual information.",
    traits: ["hands-on", "structured", "empathetic", "analytical"],
    skills: ["Imaging equipment", "Patient positioning", "Safety protocols", "Anatomy basics"],
    workStyle: "Patient preparation, image capture, equipment checks, safety steps, and communication with clinical teams",
    startingPoint: "Study one type of medical image and explain what positioning and safety questions matter.",
    setting: "hospitals, imaging centers, urgent care clinics, orthopedic offices, and specialty medical practices",
    problem: "a clinician needs a clear image while the patient needs safe, respectful, and accurate positioning",
    deliverable: "an imaging workflow brief with patient prep, safety checks, positioning, image quality needs, and handoff"
  },
  {
    id: "medical-assistant",
    title: "Medical Assistant",
    field: "Healthcare",
    summary: "Supports clinics by preparing patients, taking vitals, managing records, assisting procedures, and coordinating care tasks.",
    fit: "You like patient interaction, practical routines, healthcare teamwork, and active workdays.",
    traits: ["empathetic", "hands-on", "structured", "communicator"],
    skills: ["Vitals", "Clinical support", "Patient communication", "Medical records"],
    workStyle: "Rooming patients, recording information, assisting providers, handling forms, and keeping clinic flow moving",
    startingPoint: "Practice turning a patient visit into a clear intake checklist and plain-language instructions.",
    setting: "primary care offices, specialty clinics, urgent care centers, hospitals, and community health centers",
    problem: "a clinic needs accurate patient information and smooth preparation before a provider visit",
    deliverable: "a clinic visit workflow with intake questions, vital signs, documentation needs, patient education, and handoff"
  },
  {
    id: "pharmacy-technician",
    title: "Pharmacy Technician",
    field: "Healthcare",
    summary: "Assists pharmacists by preparing prescriptions, managing inventory, processing information, and supporting patients.",
    fit: "You like healthcare details, accuracy, routine, and helping people understand next steps.",
    traits: ["structured", "practical", "communicator", "analytical"],
    skills: ["Prescription processing", "Inventory", "Customer service", "Accuracy"],
    workStyle: "Medication preparation, label checks, patient pickup support, inventory tasks, and pharmacist coordination",
    startingPoint: "Create a medication label checklist and learn why each field matters for safety.",
    setting: "community pharmacies, hospitals, clinics, mail-order pharmacies, and long-term care facilities",
    problem: "medication information must be processed accurately and safely before a patient receives it",
    deliverable: "a pharmacy workflow checklist with prescription intake, verification points, inventory needs, and patient questions"
  },
  {
    id: "construction-manager",
    title: "Construction Manager",
    field: "Skilled Trades",
    summary: "Plans and oversees construction projects by coordinating people, schedules, budgets, safety, materials, and quality.",
    fit: "You like buildings, practical leadership, logistics, and solving site problems under constraints.",
    traits: ["practical", "structured", "communicator", "resilient"],
    skills: ["Scheduling", "Budget tracking", "Site coordination", "Safety management"],
    workStyle: "Site meetings, schedule updates, contractor coordination, inspections, cost review, and problem solving",
    startingPoint: "Plan a small renovation timeline with tasks, trades, materials, risks, and inspection points.",
    setting: "construction sites, engineering firms, developers, public works, contractors, and project offices",
    problem: "a project must be built safely, correctly, on budget, and on schedule despite constant changes",
    deliverable: "a construction project brief with scope, schedule, trades, materials, risks, safety notes, and status report"
  },
  {
    id: "carpenter",
    title: "Carpenter",
    field: "Skilled Trades",
    summary: "Builds, installs, repairs, and finishes structures or fixtures using wood, tools, drawings, and precise measurements.",
    fit: "You like hands-on building, measuring, tools, and seeing physical results from careful work.",
    traits: ["hands-on", "builder", "practical", "structured"],
    skills: ["Measuring", "Tool use", "Blueprint reading", "Finish work"],
    workStyle: "Reading plans, cutting materials, assembling structures, checking alignment, and solving site issues",
    startingPoint: "Build a simple shelf or model and document measurements, cuts, tools, and lessons learned.",
    setting: "homes, commercial buildings, construction sites, workshops, renovation projects, and set-building teams",
    problem: "a structure or fixture needs to be built accurately, safely, and cleanly from plans or client needs",
    deliverable: "a carpentry project plan with drawing, material list, measurements, tool list, safety notes, and quality check"
  },
  {
    id: "plumber",
    title: "Plumber",
    field: "Skilled Trades",
    summary: "Installs, repairs, and maintains water, drainage, gas, and fixture systems in buildings.",
    fit: "You like hands-on troubleshooting, practical systems, tools, and work that keeps buildings usable.",
    traits: ["hands-on", "practical", "structured", "resilient"],
    skills: ["Pipe systems", "Troubleshooting", "Safety", "Code awareness"],
    workStyle: "Diagnosing leaks, installing fixtures, reading plans, testing systems, and explaining repairs",
    startingPoint: "Map the water flow for a sink and list where leaks or clogs could happen.",
    setting: "homes, commercial buildings, construction sites, maintenance teams, hospitals, and service companies",
    problem: "a water, drain, or gas system must work safely and reliably inside a building",
    deliverable: "a plumbing diagnosis note with system map, symptoms, likely causes, tools, repair steps, and safety check"
  },
  {
    id: "hvac-technician",
    title: "HVAC Technician",
    field: "Skilled Trades",
    summary: "Installs, maintains, and repairs heating, ventilation, air conditioning, and refrigeration systems.",
    fit: "You like mechanical systems, troubleshooting, tools, and helping spaces stay comfortable and safe.",
    traits: ["hands-on", "analytical", "practical", "structured"],
    skills: ["Mechanical troubleshooting", "Electrical basics", "Refrigeration", "Preventive maintenance"],
    workStyle: "Service calls, system checks, diagnostics, repairs, maintenance plans, and customer explanations",
    startingPoint: "Create a seasonal HVAC maintenance checklist and explain why each item matters.",
    setting: "homes, offices, schools, hospitals, factories, service companies, and building maintenance teams",
    problem: "a comfort or air-quality system is not working efficiently, safely, or reliably",
    deliverable: "an HVAC service report with symptoms, measurements, likely cause, repair, maintenance notes, and customer explanation"
  },
  {
    id: "automotive-technician",
    title: "Automotive Technician",
    field: "Skilled Trades",
    summary: "Inspects, diagnoses, repairs, and maintains vehicles using tools, diagnostic systems, and mechanical knowledge.",
    fit: "You like cars, hands-on problem solving, diagnostics, and making machines run correctly.",
    traits: ["hands-on", "analytical", "practical", "resilient"],
    skills: ["Diagnostics", "Mechanical repair", "Electrical systems", "Customer explanation"],
    workStyle: "Inspections, diagnostic scans, repairs, parts research, road tests, and service documentation",
    startingPoint: "Trace one vehicle system, such as brakes or charging, and list symptoms of failure.",
    setting: "repair shops, dealerships, fleet maintenance teams, specialty garages, and mobile service businesses",
    problem: "a vehicle has symptoms that must be diagnosed accurately before parts and labor are spent",
    deliverable: "an auto diagnostic note with complaint, inspection, tests, likely cause, repair options, and safety concern"
  },
  {
    id: "welder",
    title: "Welder",
    field: "Skilled Trades",
    summary: "Joins metal parts using heat, tools, safety procedures, drawings, and precise technique.",
    fit: "You like hands-on craft, focus, physical skill, and making strong things from raw materials.",
    traits: ["hands-on", "builder", "structured", "practical"],
    skills: ["Welding processes", "Blueprint reading", "Safety", "Quality inspection"],
    workStyle: "Preparing materials, setting equipment, welding joints, inspecting work, and following safety rules",
    startingPoint: "Study basic weld types and create a safety checklist for a beginner welding station.",
    setting: "manufacturing shops, construction sites, shipyards, repair shops, pipelines, and fabrication businesses",
    problem: "metal parts need a strong, safe, clean joint that matches design and quality requirements",
    deliverable: "a welding project plan with material, joint type, process, safety gear, inspection criteria, and defect risks"
  },
  {
    id: "machinist",
    title: "Machinist",
    field: "Manufacturing",
    summary: "Creates precise parts by operating machines, reading drawings, measuring materials, and controlling tolerances.",
    fit: "You like precision, tools, mechanical systems, and making parts that must fit exactly.",
    traits: ["hands-on", "structured", "analytical", "practical"],
    skills: ["Measurement", "Machine operation", "Blueprint reading", "Quality control"],
    workStyle: "Setup, cutting, measurement, adjustments, documentation, and inspection against specifications",
    startingPoint: "Measure a small object and sketch it with dimensions, tolerances, and material notes.",
    setting: "machine shops, aerospace suppliers, medical device firms, manufacturers, repair facilities, and prototyping labs",
    problem: "a part must be produced within exact dimensions so a larger system works correctly",
    deliverable: "a machining work plan with drawing, material, tools, measurements, tolerances, and inspection checklist"
  },
  {
    id: "truck-driver",
    title: "Truck Driver",
    field: "Transportation",
    summary: "Transports goods safely by planning routes, inspecting vehicles, managing logs, and communicating with dispatchers.",
    fit: "You like independence, responsibility, travel, practical routines, and keeping supply chains moving.",
    traits: ["independent", "practical", "structured", "resilient"],
    skills: ["Route planning", "Vehicle inspection", "Safety", "Time management"],
    workStyle: "Pre-trip checks, driving, delivery timing, log updates, customer handoffs, and road decision making",
    startingPoint: "Plan a delivery route with distance, stops, rest needs, weather risk, and vehicle checks.",
    setting: "freight carriers, delivery companies, manufacturers, ports, warehouses, farms, and regional logistics teams",
    problem: "goods must arrive safely and on time while roads, rules, weather, and equipment change",
    deliverable: "a trip plan with route, inspection checklist, schedule, risks, communication plan, and delivery handoff"
  },
  {
    id: "logistics-coordinator",
    title: "Logistics Coordinator",
    field: "Operations",
    summary: "Coordinates shipments, schedules, carriers, documents, inventory movement, and delivery updates.",
    fit: "You like timing, organization, practical problem solving, and tracking moving pieces.",
    traits: ["structured", "practical", "communicator", "analytical"],
    skills: ["Shipment tracking", "Scheduling", "Vendor communication", "Problem solving"],
    workStyle: "Carrier updates, delivery schedules, documentation, exception handling, and customer communication",
    startingPoint: "Plan how a product moves from warehouse to customer and identify three delay risks.",
    setting: "warehouses, manufacturers, ecommerce teams, freight companies, hospitals, retailers, and import-export teams",
    problem: "a shipment needs to move through multiple handoffs without losing time, information, or accountability",
    deliverable: "a logistics plan with origin, destination, carrier, timeline, documents, risks, and update messages"
  },
  {
    id: "flight-attendant",
    title: "Flight Attendant",
    field: "Transportation",
    summary: "Supports passenger safety and comfort by preparing cabins, communicating procedures, serving travelers, and responding to issues.",
    fit: "You like travel, people, calm service, safety routines, and handling changing situations professionally.",
    traits: ["communicator", "empathetic", "resilient", "structured"],
    skills: ["Safety procedures", "Customer service", "Conflict de-escalation", "Team coordination"],
    workStyle: "Preflight checks, passenger communication, service, safety monitoring, teamwork, and irregular-operation response",
    startingPoint: "Write a calm passenger announcement for a delayed flight and a checklist for cabin readiness.",
    setting: "airlines, airports, aircraft cabins, training centers, and international or regional flight routes",
    problem: "passengers need clear safety guidance and calm support in a confined, changing travel environment",
    deliverable: "a cabin service and safety brief with announcement, passenger needs, safety checks, conflict response, and crew handoff"
  }
];

const supplementalCareerRows = [
  ["actuary", "Actuary", "Finance", ["analytical", "structured", "independent", "practical"], ["Risk modeling", "Statistics", "Financial analysis", "Communication"]],
  ["auditor", "Auditor", "Finance", ["analytical", "structured", "practical", "independent"], ["Internal controls", "Evidence review", "Financial records", "Reporting"]],
  ["tax-preparer", "Tax Preparer", "Finance", ["structured", "analytical", "communicator", "practical"], ["Tax forms", "Client intake", "Accuracy", "Deadline management"]],
  ["loan-officer", "Loan Officer", "Finance", ["communicator", "analytical", "empathetic", "practical"], ["Credit review", "Client advising", "Documentation", "Risk assessment"]],
  ["compliance-analyst", "Compliance Analyst", "Business", ["analytical", "structured", "practical", "communicator"], ["Policy review", "Risk checks", "Documentation", "Process improvement"]],
  ["risk-analyst", "Risk Analyst", "Business", ["analytical", "curious", "structured", "independent"], ["Risk scoring", "Research", "Data analysis", "Scenario planning"]],
  ["investment-analyst", "Investment Analyst", "Finance", ["analytical", "curious", "structured", "independent"], ["Market research", "Valuation", "Financial modeling", "Written analysis"]],
  ["payroll-specialist", "Payroll Specialist", "Human Resources", ["structured", "analytical", "practical", "communicator"], ["Payroll systems", "Timekeeping", "Compliance", "Employee support"]],
  ["billing-specialist", "Billing Specialist", "Business", ["structured", "practical", "analytical", "communicator"], ["Invoices", "Account reconciliation", "Payment tracking", "Customer communication"]],
  ["medical-coder", "Medical Coder", "Healthcare", ["structured", "analytical", "independent", "practical"], ["Medical terminology", "Coding systems", "Accuracy", "Records review"]],
  ["health-information-technician", "Health Information Technician", "Healthcare", ["structured", "analytical", "practical", "independent"], ["Health records", "Privacy rules", "Data quality", "Clinical documentation"]],
  ["epidemiologist", "Epidemiologist", "Healthcare", ["analytical", "curious", "structured", "communicator"], ["Public health data", "Study design", "Statistics", "Reporting"]],
  ["dietitian", "Dietitian", "Healthcare", ["empathetic", "analytical", "communicator", "practical"], ["Nutrition planning", "Patient counseling", "Assessment", "Health education"]],
  ["speech-language-pathologist", "Speech-Language Pathologist", "Healthcare", ["empathetic", "communicator", "structured", "curious"], ["Assessment", "Therapy planning", "Communication support", "Progress tracking"]],
  ["respiratory-therapist", "Respiratory Therapist", "Healthcare", ["hands-on", "empathetic", "structured", "resilient"], ["Respiratory care", "Patient monitoring", "Equipment use", "Emergency response"]],
  ["surgical-technologist", "Surgical Technologist", "Healthcare", ["hands-on", "structured", "resilient", "practical"], ["Sterile technique", "Surgical tools", "Team coordination", "Safety checks"]],
  ["emergency-medical-technician", "Emergency Medical Technician", "Healthcare", ["resilient", "hands-on", "communicator", "practical"], ["Emergency care", "Assessment", "Safety", "Team communication"]],
  ["massage-therapist", "Massage Therapist", "Healthcare", ["hands-on", "empathetic", "practical", "communicator"], ["Anatomy basics", "Client assessment", "Manual therapy", "Professional boundaries"]],
  ["fitness-trainer", "Fitness Trainer", "Human Services", ["hands-on", "communicator", "empathetic", "practical"], ["Exercise planning", "Coaching", "Safety", "Motivation"]],
  ["animal-care-technician", "Animal Care Technician", "Science", ["hands-on", "empathetic", "structured", "practical"], ["Animal handling", "Feeding routines", "Observation", "Cleaning protocols"]],
  ["zookeeper", "Zookeeper", "Science", ["hands-on", "empathetic", "structured", "curious"], ["Animal behavior", "Habitat care", "Public education", "Record keeping"]],
  ["marine-biologist", "Marine Biologist", "Science", ["curious", "analytical", "hands-on", "independent"], ["Field research", "Ecology", "Data collection", "Scientific writing"]],
  ["geologist", "Geologist", "Science", ["curious", "analytical", "hands-on", "practical"], ["Rock analysis", "Field mapping", "Data interpretation", "Report writing"]],
  ["meteorologist", "Meteorologist", "Science", ["analytical", "curious", "communicator", "structured"], ["Weather data", "Forecasting", "Models", "Public communication"]],
  ["chemist", "Chemist", "Science", ["analytical", "curious", "structured", "independent"], ["Lab techniques", "Chemical analysis", "Safety", "Experiment design"]],
  ["food-scientist", "Food Scientist", "Science", ["analytical", "curious", "practical", "structured"], ["Food safety", "Testing", "Product development", "Quality control"]],
  ["forensic-scientist", "Forensic Scientist", "Science", ["analytical", "structured", "curious", "practical"], ["Evidence handling", "Lab analysis", "Documentation", "Scientific reasoning"]],
  ["statistician", "Statistician", "Science", ["analytical", "structured", "independent", "curious"], ["Statistical modeling", "Study design", "Data analysis", "Communication"]],
  ["market-research-analyst", "Market Research Analyst", "Business", ["analytical", "curious", "communicator", "structured"], ["Survey design", "Consumer research", "Data analysis", "Presentation"]],
  ["economist", "Economist", "Business", ["analytical", "curious", "structured", "communicator"], ["Economic modeling", "Research", "Policy analysis", "Writing"]],
  ["research-assistant", "Research Assistant", "Science", ["curious", "structured", "analytical", "independent"], ["Literature review", "Data collection", "Experiment support", "Documentation"]],
  ["laboratory-manager", "Laboratory Manager", "Science", ["structured", "communicator", "analytical", "practical"], ["Lab operations", "Safety compliance", "Scheduling", "Quality systems"]],
  ["product-designer", "Product Designer", "Design", ["creative", "empathetic", "analytical", "visual"], ["User flows", "Prototyping", "Interaction design", "Product thinking"]],
  ["industrial-designer", "Industrial Designer", "Design", ["creative", "visual", "builder", "practical"], ["Sketching", "Prototyping", "Materials", "User needs"]],
  ["fashion-designer", "Fashion Designer", "Design", ["creative", "visual", "practical", "curious"], ["Trend research", "Pattern ideas", "Textiles", "Visual storytelling"]],
  ["art-director", "Art Director", "Design", ["creative", "visual", "communicator", "structured"], ["Creative direction", "Visual critique", "Brand systems", "Team leadership"]],
  ["photographer", "Photographer", "Media", ["creative", "visual", "hands-on", "independent"], ["Composition", "Lighting", "Editing", "Client communication"]],
  ["animator", "Animator", "Media", ["creative", "visual", "builder", "independent"], ["Motion", "Storyboarding", "Timing", "Digital tools"]],
  ["illustrator", "Illustrator", "Media", ["creative", "visual", "independent", "curious"], ["Drawing", "Style development", "Composition", "Client briefs"]],
  ["music-producer", "Music Producer", "Media", ["creative", "hands-on", "communicator", "curious"], ["Arrangement", "Recording", "Sound design", "Collaboration"]],
  ["sound-engineer", "Sound Engineer", "Media", ["hands-on", "analytical", "creative", "practical"], ["Audio mixing", "Recording equipment", "Signal flow", "Problem solving"]],
  ["podcast-producer", "Podcast Producer", "Media", ["creative", "communicator", "structured", "curious"], ["Interview planning", "Audio editing", "Story structure", "Publishing"]],
  ["content-strategist", "Content Strategist", "Marketing", ["creative", "analytical", "communicator", "structured"], ["Content planning", "Audience research", "SEO", "Editorial calendars"]],
  ["editor", "Editor", "Language & Communication", ["communicator", "structured", "curious", "analytical"], ["Line editing", "Story structure", "Feedback", "Clarity"]],
  ["proofreader", "Proofreader", "Language & Communication", ["structured", "independent", "analytical", "practical"], ["Grammar", "Consistency", "Attention to detail", "Style guides"]],
  ["technical-support-engineer", "Technical Support Engineer", "Technology", ["analytical", "communicator", "resilient", "practical"], ["Technical troubleshooting", "Logs", "Customer communication", "Escalation"]],
  ["systems-analyst", "Systems Analyst", "Technology", ["analytical", "structured", "communicator", "curious"], ["Systems mapping", "Requirements", "Process analysis", "Technical documentation"]],
  ["it-project-coordinator", "IT Project Coordinator", "Technology", ["structured", "communicator", "practical", "resilient"], ["Project tracking", "Technical coordination", "Status reporting", "Scheduling"]],
  ["security-engineer", "Security Engineer", "Technology", ["analytical", "builder", "structured", "resilient"], ["Security architecture", "Threat modeling", "Controls", "Automation"]],
  ["penetration-tester", "Penetration Tester", "Technology", ["curious", "analytical", "independent", "builder"], ["Ethical hacking", "Vulnerability testing", "Reporting", "Security tools"]],
  ["data-engineer", "Data Engineer", "Technology", ["builder", "analytical", "structured", "independent"], ["Data pipelines", "Databases", "ETL", "Cloud data tools"]],
  ["backend-developer", "Backend Developer", "Technology", ["builder", "analytical", "structured", "independent"], ["APIs", "Databases", "Server logic", "Testing"]],
  ["full-stack-developer", "Full-Stack Developer", "Technology", ["builder", "creative", "analytical", "independent"], ["Frontend", "Backend", "Databases", "Debugging"]],
  ["game-developer", "Game Developer", "Technology", ["builder", "creative", "analytical", "visual"], ["Game engines", "Programming", "Physics", "Iteration"]],
  ["ar-vr-developer", "AR/VR Developer", "Technology", ["creative", "builder", "visual", "analytical"], ["3D interaction", "Game engines", "Spatial design", "Prototyping"]],
  ["gis-analyst", "GIS Analyst", "Technology", ["analytical", "visual", "structured", "curious"], ["Mapping", "Spatial data", "Data analysis", "Cartography"]],
  ["cad-technician", "CAD Technician", "Engineering", ["visual", "structured", "practical", "builder"], ["CAD software", "Technical drawings", "Measurement", "Detail accuracy"]],
  ["surveyor", "Surveyor", "Engineering", ["hands-on", "analytical", "practical", "structured"], ["Measurement", "Field equipment", "Mapping", "Legal descriptions"]],
  ["building-inspector", "Building Inspector", "Skilled Trades", ["practical", "structured", "analytical", "communicator"], ["Code review", "Site inspection", "Safety", "Documentation"]],
  ["safety-manager", "Safety Manager", "Operations", ["structured", "practical", "communicator", "resilient"], ["Risk assessment", "Training", "Incident review", "Policy implementation"]],
  ["energy-auditor", "Energy Auditor", "Science", ["analytical", "practical", "hands-on", "communicator"], ["Energy analysis", "Building systems", "Efficiency recommendations", "Reporting"]],
  ["solar-installer", "Solar Installer", "Skilled Trades", ["hands-on", "builder", "practical", "structured"], ["Panel installation", "Electrical safety", "Roof work", "System testing"]],
  ["wind-turbine-technician", "Wind Turbine Technician", "Skilled Trades", ["hands-on", "resilient", "practical", "analytical"], ["Mechanical repair", "Electrical systems", "Safety", "Climbing"]],
  ["water-treatment-operator", "Water Treatment Operator", "Science", ["practical", "structured", "analytical", "hands-on"], ["Water testing", "Equipment monitoring", "Safety", "Regulatory records"]],
  ["wastewater-technician", "Wastewater Technician", "Science", ["hands-on", "practical", "structured", "resilient"], ["Sampling", "Treatment systems", "Maintenance", "Compliance"]],
  ["sustainability-coordinator", "Sustainability Coordinator", "Operations", ["communicator", "analytical", "practical", "curious"], ["Sustainability reporting", "Program coordination", "Data tracking", "Stakeholder engagement"]],
  ["park-ranger", "Park Ranger", "Public Safety", ["hands-on", "communicator", "practical", "resilient"], ["Public education", "Resource protection", "Safety", "Patrol"]],
  ["conservation-scientist", "Conservation Scientist", "Science", ["curious", "analytical", "hands-on", "communicator"], ["Land management", "Ecology", "Data collection", "Planning"]],
  ["agriculture-technician", "Agriculture Technician", "Science", ["hands-on", "practical", "curious", "structured"], ["Crop testing", "Equipment", "Field records", "Soil sampling"]],
  ["farm-manager", "Farm Manager", "Operations", ["practical", "hands-on", "structured", "resilient"], ["Crop planning", "Staff coordination", "Equipment management", "Budgeting"]],
  ["horticulturist", "Horticulturist", "Science", ["hands-on", "curious", "practical", "creative"], ["Plant care", "Soil knowledge", "Propagation", "Pest management"]],
  ["landscape-designer", "Landscape Designer", "Design", ["creative", "visual", "practical", "hands-on"], ["Plant selection", "Site planning", "Sketching", "Client communication"]],
  ["urban-farmer", "Urban Farmer", "Agriculture", ["hands-on", "practical", "community-minded", "resilient"], ["Growing systems", "Composting", "Community outreach", "Harvest planning"]],
  ["hotel-front-desk-agent", "Hotel Front Desk Agent", "Hospitality", ["communicator", "empathetic", "structured", "resilient"], ["Guest service", "Reservations", "Problem solving", "Local knowledge"]],
  ["concierge", "Concierge", "Hospitality", ["communicator", "empathetic", "creative", "practical"], ["Guest advising", "Local research", "Problem solving", "Service recovery"]],
  ["travel-agent", "Travel Agent", "Hospitality", ["communicator", "structured", "curious", "empathetic"], ["Itinerary planning", "Booking systems", "Customer advising", "Research"]],
  ["tour-guide", "Tour Guide", "Hospitality", ["communicator", "curious", "empathetic", "resilient"], ["Storytelling", "Group management", "Local history", "Safety"]],
  ["event-technician", "Event Technician", "Media", ["hands-on", "practical", "resilient", "communicator"], ["Audio visual setup", "Lighting", "Troubleshooting", "Run of show"]],
  ["catering-manager", "Catering Manager", "Hospitality", ["structured", "communicator", "practical", "resilient"], ["Event planning", "Food service", "Staff coordination", "Client communication"]],
  ["barista", "Barista", "Hospitality", ["hands-on", "communicator", "practical", "resilient"], ["Drink preparation", "Customer service", "Speed", "Cleanliness"]],
  ["baker", "Baker", "Hospitality", ["hands-on", "structured", "creative", "practical"], ["Baking techniques", "Timing", "Food safety", "Recipe consistency"]],
  ["food-service-worker", "Food Service Worker", "Hospitality", ["hands-on", "practical", "communicator", "resilient"], ["Food prep", "Sanitation", "Teamwork", "Customer service"]],
  ["retail-store-manager", "Retail Store Manager", "Business", ["communicator", "practical", "structured", "resilient"], ["Staff leadership", "Sales tracking", "Inventory", "Customer experience"]],
  ["visual-merchandiser", "Visual Merchandiser", "Design", ["visual", "creative", "practical", "analytical"], ["Store displays", "Brand presentation", "Product placement", "Sales awareness"]],
  ["inventory-analyst", "Inventory Analyst", "Operations", ["analytical", "structured", "practical", "independent"], ["Inventory data", "Forecasting", "Replenishment", "Reporting"]],
  ["merchandising-assistant", "Merchandising Assistant", "Business", ["structured", "visual", "practical", "communicator"], ["Product tracking", "Vendor support", "Assortment planning", "Reporting"]],
  ["ecommerce-specialist", "Ecommerce Specialist", "Marketing", ["analytical", "creative", "practical", "structured"], ["Product listings", "Analytics", "Online merchandising", "Conversion testing"]],
  ["customer-experience-manager", "Customer Experience Manager", "Customer Experience", ["empathetic", "communicator", "analytical", "structured"], ["Journey mapping", "Feedback analysis", "Service design", "Team coaching"]],
  ["call-center-representative", "Call Center Representative", "Customer Experience", ["communicator", "empathetic", "resilient", "structured"], ["Phone support", "Active listening", "CRM notes", "De-escalation"]],
  ["collections-specialist", "Collections Specialist", "Finance", ["communicator", "resilient", "structured", "practical"], ["Account review", "Negotiation", "Documentation", "Customer communication"]],
  ["legal-assistant", "Legal Assistant", "Legal", ["structured", "communicator", "practical", "analytical"], ["Legal documents", "Scheduling", "Case files", "Client communication"]],
  ["court-reporter", "Court Reporter", "Legal", ["structured", "independent", "analytical", "practical"], ["Transcription", "Listening accuracy", "Legal procedure", "Realtime records"]],
  ["mediator", "Mediator", "Legal", ["communicator", "empathetic", "structured", "resilient"], ["Conflict resolution", "Neutral facilitation", "Listening", "Agreement drafting"]],
  ["policy-analyst", "Policy Analyst", "Government", ["analytical", "communicator", "structured", "curious"], ["Policy research", "Writing", "Data interpretation", "Stakeholder analysis"]],
  ["legislative-aide", "Legislative Aide", "Government", ["communicator", "structured", "curious", "resilient"], ["Constituent service", "Research", "Scheduling", "Policy notes"]],
  ["public-administrator", "Public Administrator", "Government", ["structured", "communicator", "practical", "analytical"], ["Public programs", "Budget awareness", "Service delivery", "Policy implementation"]],
  ["emergency-management-specialist", "Emergency Management Specialist", "Public Safety", ["structured", "resilient", "communicator", "practical"], ["Preparedness planning", "Incident coordination", "Risk assessment", "Public communication"]],
  ["dispatcher-911", "911 Dispatcher", "Public Safety", ["resilient", "communicator", "structured", "empathetic"], ["Emergency calls", "Radio communication", "Prioritization", "Calm under pressure"]],
  ["security-guard", "Security Guard", "Public Safety", ["practical", "resilient", "communicator", "structured"], ["Observation", "Patrol", "Incident reporting", "Access control"]],
  ["correctional-officer", "Correctional Officer", "Public Safety", ["resilient", "structured", "communicator", "practical"], ["Safety procedures", "Conflict management", "Observation", "Report writing"]],
  ["probation-officer", "Probation Officer", "Public Safety", ["communicator", "structured", "empathetic", "resilient"], ["Case management", "Court reports", "Motivational interviewing", "Risk monitoring"]],
  ["victim-advocate", "Victim Advocate", "Human Services", ["empathetic", "communicator", "resilient", "structured"], ["Crisis support", "Resource navigation", "Safety planning", "Documentation"]],
  ["school-counselor", "School Counselor", "Education", ["empathetic", "communicator", "structured", "resilient"], ["Student advising", "Crisis response", "Group facilitation", "Career planning"]],
  ["academic-advisor", "Academic Advisor", "Education", ["communicator", "empathetic", "structured", "practical"], ["Degree planning", "Student support", "Policy knowledge", "Goal setting"]],
  ["admissions-counselor", "Admissions Counselor", "Education", ["communicator", "empathetic", "structured", "resilient"], ["Student recruitment", "Application review", "Presentation", "Follow-up"]],
  ["financial-aid-advisor", "Financial Aid Advisor", "Education", ["structured", "communicator", "empathetic", "analytical"], ["Aid rules", "Student advising", "Document review", "Problem solving"]],
  ["registrar-coordinator", "Registrar Coordinator", "Education", ["structured", "practical", "communicator", "analytical"], ["Student records", "Scheduling", "Policy compliance", "Data accuracy"]],
  ["curriculum-developer", "Curriculum Developer", "Education", ["creative", "structured", "communicator", "analytical"], ["Learning objectives", "Lesson design", "Assessment", "Content organization"]],
  ["instructional-designer", "Instructional Designer", "Education", ["creative", "structured", "empathetic", "analytical"], ["Learning design", "Storyboarding", "Assessment", "E-learning tools"]],
  ["corporate-trainer", "Corporate Trainer", "Education", ["communicator", "empathetic", "structured", "creative"], ["Workshop facilitation", "Coaching", "Training materials", "Feedback"]],
  ["childcare-worker", "Childcare Worker", "Education", ["empathetic", "hands-on", "communicator", "resilient"], ["Child supervision", "Activity planning", "Safety", "Family communication"]],
  ["preschool-teacher", "Preschool Teacher", "Education", ["empathetic", "creative", "structured", "communicator"], ["Early learning", "Classroom routines", "Play-based teaching", "Observation"]],
  ["special-education-teacher", "Special Education Teacher", "Education", ["empathetic", "structured", "resilient", "communicator"], ["IEP support", "Adapted instruction", "Behavior support", "Collaboration"]],
  ["esl-teacher", "ESL Teacher", "Education", ["communicator", "empathetic", "creative", "structured"], ["Language instruction", "Lesson planning", "Cultural awareness", "Assessment"]],
  ["tutor", "Tutor", "Education", ["communicator", "empathetic", "analytical", "structured"], ["Explanation", "Practice planning", "Assessment", "Encouragement"]],
  ["museum-educator", "Museum Educator", "Education", ["communicator", "creative", "curious", "empathetic"], ["Public programs", "Storytelling", "Group facilitation", "Content research"]],
  ["archivist", "Archivist", "Education", ["structured", "curious", "analytical", "independent"], ["Preservation", "Cataloging", "Research support", "Digital collections"]],
  ["records-manager", "Records Manager", "Operations", ["structured", "analytical", "practical", "independent"], ["Records policy", "Retention schedules", "Information governance", "Compliance"]],
  ["knowledge-manager", "Knowledge Manager", "Operations", ["structured", "communicator", "analytical", "curious"], ["Knowledge bases", "Process documentation", "Searchability", "Content governance"]],
  ["office-manager", "Office Manager", "Operations", ["structured", "communicator", "practical", "resilient"], ["Office operations", "Vendor coordination", "Scheduling", "Team support"]],
  ["executive-assistant", "Executive Assistant", "Operations", ["structured", "communicator", "resilient", "practical"], ["Calendar management", "Executive communication", "Travel planning", "Prioritization"]],
  ["personal-assistant", "Personal Assistant", "Operations", ["structured", "practical", "communicator", "resilient"], ["Scheduling", "Errand coordination", "Confidentiality", "Problem solving"]],
  ["virtual-assistant", "Virtual Assistant", "Operations", ["independent", "structured", "communicator", "practical"], ["Remote administration", "Email management", "Scheduling", "Online tools"]],
  ["data-coordinator", "Data Coordinator", "Operations", ["structured", "analytical", "practical", "independent"], ["Data tracking", "Quality checks", "Spreadsheets", "Reporting"]],
  ["reporting-analyst", "Reporting Analyst", "Business", ["analytical", "structured", "communicator", "independent"], ["Dashboards", "Metrics", "Data cleaning", "Business reporting"]],
  ["pricing-analyst", "Pricing Analyst", "Business", ["analytical", "structured", "curious", "practical"], ["Pricing models", "Market research", "Spreadsheet analysis", "Recommendation writing"]],
  ["revenue-operations-analyst", "Revenue Operations Analyst", "Business", ["analytical", "structured", "communicator", "practical"], ["CRM data", "Sales process", "Forecasting", "Dashboarding"]],
  ["sales-operations-specialist", "Sales Operations Specialist", "Business", ["structured", "analytical", "communicator", "practical"], ["Pipeline tracking", "Sales tools", "Process improvement", "Reporting"]],
  ["business-development-representative", "Business Development Representative", "Sales", ["communicator", "resilient", "curious", "structured"], ["Prospecting", "Outreach", "Discovery calls", "CRM notes"]],
  ["partnerships-manager", "Partnerships Manager", "Business", ["communicator", "strategic", "empathetic", "structured"], ["Relationship building", "Negotiation", "Program planning", "Follow-up"]],
  ["channel-manager", "Channel Manager", "Business", ["communicator", "analytical", "structured", "resilient"], ["Partner enablement", "Sales strategy", "Reporting", "Relationship management"]],
  ["customer-onboarding-specialist", "Customer Onboarding Specialist", "Customer Experience", ["communicator", "empathetic", "structured", "practical"], ["Onboarding plans", "Product training", "Customer goals", "Follow-up"]],
  ["implementation-specialist", "Implementation Specialist", "Customer Experience", ["structured", "communicator", "analytical", "practical"], ["Configuration", "Project coordination", "Customer training", "Troubleshooting"]],
  ["solutions-consultant", "Solutions Consultant", "Technology", ["communicator", "analytical", "practical", "curious"], ["Demos", "Requirements", "Technical discovery", "Solution design"]],
  ["sales-engineer", "Sales Engineer", "Technology", ["communicator", "analytical", "builder", "practical"], ["Technical demos", "Customer discovery", "Product knowledge", "Solution mapping"]],
  ["product-marketing-manager", "Product Marketing Manager", "Marketing", ["communicator", "creative", "analytical", "structured"], ["Positioning", "Launch planning", "Messaging", "Market research"]],
  ["brand-manager", "Brand Manager", "Marketing", ["creative", "communicator", "analytical", "structured"], ["Brand strategy", "Campaign planning", "Customer insight", "Creative briefs"]],
  ["growth-marketer", "Growth Marketer", "Marketing", ["analytical", "creative", "curious", "structured"], ["Experimentation", "Funnels", "Analytics", "Campaign testing"]],
  ["affiliate-marketing-manager", "Affiliate Marketing Manager", "Marketing", ["analytical", "communicator", "structured", "practical"], ["Partner tracking", "Campaign reporting", "Negotiation", "Performance analysis"]],
  ["influencer-marketing-coordinator", "Influencer Marketing Coordinator", "Marketing", ["communicator", "creative", "structured", "curious"], ["Creator outreach", "Campaign briefs", "Social analytics", "Relationship management"]],
  ["community-outreach-coordinator", "Community Outreach Coordinator", "Nonprofit", ["communicator", "empathetic", "structured", "resilient"], ["Outreach planning", "Partnerships", "Event support", "Resource navigation"]],
  ["volunteer-coordinator", "Volunteer Coordinator", "Nonprofit", ["communicator", "empathetic", "structured", "practical"], ["Volunteer scheduling", "Training", "Recognition", "Program logistics"]],
  ["case-manager", "Case Manager", "Human Services", ["empathetic", "structured", "communicator", "resilient"], ["Care coordination", "Resource referrals", "Documentation", "Advocacy"]],
  ["housing-specialist", "Housing Specialist", "Human Services", ["empathetic", "communicator", "practical", "resilient"], ["Housing resources", "Client intake", "Documentation", "Landlord communication"]],
  ["employment-specialist", "Employment Specialist", "Human Services", ["communicator", "empathetic", "structured", "practical"], ["Job coaching", "Employer outreach", "Resume support", "Placement tracking"]],
  ["rehabilitation-counselor", "Rehabilitation Counselor", "Human Services", ["empathetic", "communicator", "structured", "resilient"], ["Vocational planning", "Counseling", "Resource coordination", "Goal setting"]],
  ["substance-abuse-counselor", "Substance Abuse Counselor", "Human Services", ["empathetic", "resilient", "communicator", "structured"], ["Counseling", "Relapse planning", "Group facilitation", "Documentation"]],
  ["behavior-technician", "Behavior Technician", "Healthcare", ["empathetic", "structured", "hands-on", "resilient"], ["Behavior support", "Data collection", "Skill practice", "Caregiver communication"]],
  ["patient-care-technician", "Patient Care Technician", "Healthcare", ["hands-on", "empathetic", "structured", "resilient"], ["Vitals", "Patient assistance", "Safety", "Clinical teamwork"]],
  ["home-health-aide", "Home Health Aide", "Healthcare", ["empathetic", "hands-on", "practical", "resilient"], ["Daily living support", "Observation", "Safety", "Client communication"]],
  ["phlebotomist", "Phlebotomist", "Healthcare", ["hands-on", "structured", "empathetic", "practical"], ["Blood draws", "Patient identification", "Specimen handling", "Safety"]],
  ["sterile-processing-technician", "Sterile Processing Technician", "Healthcare", ["structured", "hands-on", "practical", "resilient"], ["Instrument cleaning", "Sterilization", "Inventory", "Safety protocols"]],
  ["dental-assistant", "Dental Assistant", "Healthcare", ["hands-on", "empathetic", "structured", "communicator"], ["Chairside support", "Sterilization", "Patient preparation", "Records"]],
  ["veterinary-technician", "Veterinary Technician", "Healthcare", ["hands-on", "empathetic", "structured", "resilient"], ["Animal nursing", "Lab support", "Client education", "Clinical records"]],
  ["optician", "Optician", "Healthcare", ["practical", "communicator", "structured", "visual"], ["Eyewear fitting", "Prescription reading", "Customer advising", "Measurements"]],
  ["medical-sales-representative", "Medical Sales Representative", "Sales", ["communicator", "resilient", "analytical", "practical"], ["Product knowledge", "Relationship building", "Territory planning", "Presentations"]],
  ["biotech-research-associate", "Biotech Research Associate", "Science", ["analytical", "structured", "curious", "hands-on"], ["Lab experiments", "Data recording", "Protocol work", "Scientific communication"]],
  ["clinical-research-coordinator", "Clinical Research Coordinator", "Healthcare", ["structured", "communicator", "analytical", "empathetic"], ["Study coordination", "Participant communication", "Regulatory documents", "Data collection"]],
  ["regulatory-affairs-specialist", "Regulatory Affairs Specialist", "Healthcare", ["structured", "analytical", "communicator", "practical"], ["Regulatory submissions", "Policy review", "Documentation", "Compliance tracking"]],
  ["quality-control-inspector", "Quality Control Inspector", "Manufacturing", ["structured", "analytical", "practical", "hands-on"], ["Inspection", "Measurement", "Defect reporting", "Standards"]],
  ["quality-engineer", "Quality Engineer", "Engineering", ["analytical", "structured", "practical", "builder"], ["Root cause analysis", "Process controls", "Testing", "Quality systems"]],
  ["process-engineer", "Process Engineer", "Engineering", ["analytical", "builder", "structured", "practical"], ["Process mapping", "Optimization", "Data analysis", "Manufacturing systems"]],
  ["manufacturing-engineer", "Manufacturing Engineer", "Engineering", ["builder", "analytical", "practical", "structured"], ["Production systems", "Lean methods", "Tooling", "Process improvement"]],
  ["production-supervisor", "Production Supervisor", "Manufacturing", ["communicator", "structured", "practical", "resilient"], ["Shift leadership", "Safety", "Output tracking", "Coaching"]],
  ["cnc-operator", "CNC Operator", "Manufacturing", ["hands-on", "structured", "practical", "analytical"], ["CNC machines", "Measurement", "Setup", "Quality checks"]],
  ["assembly-technician", "Assembly Technician", "Manufacturing", ["hands-on", "practical", "structured", "resilient"], ["Assembly work", "Tool use", "Quality checks", "Safety"]],
  ["electronics-technician", "Electronics Technician", "Technology", ["hands-on", "analytical", "practical", "structured"], ["Circuits", "Testing equipment", "Troubleshooting", "Soldering"]],
  ["field-service-technician", "Field Service Technician", "Technology", ["hands-on", "communicator", "practical", "resilient"], ["Equipment repair", "Customer support", "Travel readiness", "Diagnostics"]],
  ["telecommunications-technician", "Telecommunications Technician", "Technology", ["hands-on", "practical", "structured", "analytical"], ["Cabling", "Network equipment", "Signal testing", "Safety"]],
  ["fiber-optic-technician", "Fiber Optic Technician", "Technology", ["hands-on", "structured", "practical", "analytical"], ["Fiber splicing", "Testing", "Installation", "Troubleshooting"]],
  ["drone-operator", "Drone Operator", "Technology", ["hands-on", "visual", "practical", "structured"], ["Flight planning", "Safety rules", "Aerial imaging", "Equipment checks"]],
  ["uav-technician", "UAV Technician", "Technology", ["hands-on", "analytical", "builder", "practical"], ["Drone repair", "Electronics", "Testing", "Maintenance"]],
  ["3d-printing-technician", "3D Printing Technician", "Manufacturing", ["hands-on", "builder", "structured", "creative"], ["3D printers", "Materials", "Slicing software", "Quality checks"]],
  ["prototype-technician", "Prototype Technician", "Engineering", ["hands-on", "builder", "creative", "practical"], ["Fabrication", "Testing", "Iteration", "Documentation"]],
  ["materials-scientist", "Materials Scientist", "Science", ["analytical", "curious", "structured", "builder"], ["Materials testing", "Lab analysis", "Experiment design", "Technical writing"]],
  ["chemical-engineer", "Chemical Engineer", "Engineering", ["analytical", "builder", "structured", "practical"], ["Process design", "Chemistry", "Safety", "Optimization"]],
  ["transportation-planner", "Transportation Planner", "Government", ["analytical", "communicator", "structured", "practical"], ["Transit analysis", "Public engagement", "GIS", "Policy writing"]],
  ["traffic-engineer", "Traffic Engineer", "Engineering", ["analytical", "practical", "structured", "communicator"], ["Traffic modeling", "Safety analysis", "Signal timing", "Design standards"]],
  ["real-estate-appraiser", "Real Estate Appraiser", "Business", ["analytical", "practical", "structured", "independent"], ["Property valuation", "Market comparison", "Inspection", "Report writing"]],
  ["property-manager", "Property Manager", "Business", ["communicator", "practical", "structured", "resilient"], ["Tenant relations", "Maintenance coordination", "Leasing", "Budgeting"]],
  ["leasing-consultant", "Leasing Consultant", "Sales", ["communicator", "empathetic", "practical", "resilient"], ["Property tours", "Follow-up", "Sales", "Customer service"]],
  ["mortgage-processor", "Mortgage Processor", "Finance", ["structured", "analytical", "communicator", "practical"], ["Loan documents", "Verification", "Deadline tracking", "Customer updates"]],
  ["escrow-officer", "Escrow Officer", "Finance", ["structured", "communicator", "practical", "analytical"], ["Closing documents", "Funds tracking", "Compliance", "Client coordination"]],
  ["title-examiner", "Title Examiner", "Legal", ["analytical", "structured", "independent", "practical"], ["Property records", "Legal descriptions", "Document review", "Risk flags"]],
  ["insurance-underwriter", "Insurance Underwriter", "Finance", ["analytical", "structured", "practical", "independent"], ["Risk review", "Policy terms", "Decision rules", "Documentation"]],
  ["benefits-specialist", "Benefits Specialist", "Human Resources", ["structured", "communicator", "empathetic", "analytical"], ["Benefits plans", "Employee support", "Compliance", "Vendor coordination"]],
  ["compensation-analyst", "Compensation Analyst", "Human Resources", ["analytical", "structured", "communicator", "practical"], ["Pay data", "Market pricing", "Spreadsheets", "Policy review"]],
  ["employee-relations-specialist", "Employee Relations Specialist", "Human Resources", ["communicator", "empathetic", "structured", "resilient"], ["Workplace investigations", "Conflict resolution", "Policy guidance", "Documentation"]],
  ["talent-acquisition-specialist", "Talent Acquisition Specialist", "Human Resources", ["communicator", "structured", "empathetic", "resilient"], ["Sourcing", "Interview coordination", "Candidate advising", "Hiring strategy"]],
  ["learning-and-development-manager", "Learning and Development Manager", "Human Resources", ["communicator", "creative", "structured", "empathetic"], ["Training strategy", "Program design", "Facilitation", "Measurement"]],
  ["diversity-inclusion-specialist", "Diversity and Inclusion Specialist", "Human Resources", ["empathetic", "communicator", "structured", "analytical"], ["Inclusion programs", "Facilitation", "Data review", "Policy support"]],
  ["change-management-specialist", "Change Management Specialist", "Business", ["communicator", "empathetic", "structured", "resilient"], ["Stakeholder analysis", "Communication plans", "Training", "Adoption tracking"]],
  ["management-consultant", "Management Consultant", "Business", ["analytical", "communicator", "structured", "curious"], ["Problem framing", "Research", "Presentation", "Recommendation design"]],
  ["operations-research-analyst", "Operations Research Analyst", "Business", ["analytical", "structured", "curious", "independent"], ["Optimization", "Modeling", "Data analysis", "Decision support"]],
  ["scrum-master", "Scrum Master", "Technology", ["communicator", "structured", "empathetic", "resilient"], ["Agile facilitation", "Team coaching", "Impediment removal", "Planning"]],
  ["release-manager", "Release Manager", "Technology", ["structured", "communicator", "practical", "resilient"], ["Release planning", "Coordination", "Risk management", "Deployment tracking"]],
  ["site-reliability-engineer", "Site Reliability Engineer", "Technology", ["analytical", "builder", "resilient", "structured"], ["Monitoring", "Automation", "Incident response", "Reliability design"]],
  ["ai-prompt-engineer", "AI Prompt Engineer", "Technology", ["creative", "analytical", "communicator", "curious"], ["Prompt design", "Evaluation", "Workflow design", "Experimentation"]],
  ["ai-product-analyst", "AI Product Analyst", "Technology", ["analytical", "curious", "communicator", "structured"], ["AI evaluation", "Product metrics", "User research", "Risk analysis"]],
  ["machine-learning-operations-engineer", "Machine Learning Operations Engineer", "Technology", ["builder", "analytical", "structured", "resilient"], ["Model deployment", "Pipelines", "Monitoring", "Cloud systems"]],
  ["app-store-optimization-specialist", "App Store Optimization Specialist", "Marketing", ["analytical", "creative", "structured", "curious"], ["Keyword research", "Conversion testing", "App listings", "Performance reporting"]],
  ["accessibility-specialist", "Accessibility Specialist", "Technology", ["empathetic", "analytical", "structured", "communicator"], ["Accessibility audits", "WCAG basics", "Assistive technology", "Inclusive design"]],
  ["localization-specialist", "Localization Specialist", "Language & Communication", ["communicator", "structured", "curious", "empathetic"], ["Translation workflows", "Cultural review", "Terminology", "Quality checks"]],
  ["data-privacy-analyst", "Data Privacy Analyst", "Technology", ["analytical", "structured", "practical", "communicator"], ["Privacy reviews", "Data mapping", "Policy support", "Risk documentation"]],
  ["cybersecurity-compliance-specialist", "Cybersecurity Compliance Specialist", "Technology", ["structured", "analytical", "practical", "communicator"], ["Security controls", "Audit evidence", "Frameworks", "Risk tracking"]],
  ["cloud-support-associate", "Cloud Support Associate", "Technology", ["analytical", "communicator", "practical", "resilient"], ["Cloud troubleshooting", "Customer support", "Logs", "Documentation"]],
  ["help-center-content-specialist", "Help Center Content Specialist", "Customer Experience", ["communicator", "structured", "empathetic", "practical"], ["Help articles", "User research", "Editing", "Content organization"]],
  ["knowledge-base-writer", "Knowledge Base Writer", "Language & Communication", ["communicator", "structured", "curious", "analytical"], ["Documentation", "Information architecture", "Plain language", "Content maintenance"]],
  ["developer-advocate", "Developer Advocate", "Technology", ["communicator", "creative", "builder", "curious"], ["Technical demos", "Community building", "Tutorials", "Public speaking"]],
  ["api-support-specialist", "API Support Specialist", "Technology", ["analytical", "communicator", "structured", "practical"], ["API debugging", "Logs", "Documentation", "Customer support"]],
  ["robotics-technician", "Robotics Technician", "Engineering", ["hands-on", "analytical", "builder", "practical"], ["Robot maintenance", "Sensors", "Troubleshooting", "Safety"]],
  ["automation-technician", "Automation Technician", "Manufacturing", ["hands-on", "analytical", "structured", "practical"], ["Controls", "PLC basics", "Equipment testing", "Preventive maintenance"]],
  ["mechatronics-technician", "Mechatronics Technician", "Manufacturing", ["hands-on", "builder", "analytical", "structured"], ["Mechanical systems", "Electronics", "Automation", "Diagnostics"]],
  ["biomedical-equipment-technician", "Biomedical Equipment Technician", "Healthcare", ["hands-on", "analytical", "practical", "structured"], ["Medical equipment", "Calibration", "Safety checks", "Repair"]],
  ["calibration-technician", "Calibration Technician", "Manufacturing", ["structured", "hands-on", "analytical", "practical"], ["Measurement tools", "Calibration records", "Quality standards", "Equipment setup"]],
  ["nondestructive-testing-technician", "Nondestructive Testing Technician", "Manufacturing", ["hands-on", "analytical", "structured", "practical"], ["Inspection methods", "Safety", "Defect detection", "Reporting"]],
  ["industrial-maintenance-mechanic", "Industrial Maintenance Mechanic", "Manufacturing", ["hands-on", "practical", "resilient", "analytical"], ["Equipment repair", "Preventive maintenance", "Mechanical systems", "Troubleshooting"]],
  ["facilities-engineer", "Facilities Engineer", "Engineering", ["practical", "analytical", "structured", "communicator"], ["Building systems", "Maintenance planning", "Energy use", "Vendor coordination"]],
  ["plant-operator", "Plant Operator", "Manufacturing", ["structured", "practical", "hands-on", "resilient"], ["Equipment monitoring", "Safety procedures", "Control rooms", "Shift logs"]],
  ["power-plant-operator", "Power Plant Operator", "Energy", ["structured", "analytical", "practical", "resilient"], ["Power systems", "Monitoring", "Safety", "Emergency procedures"]],
  ["utilities-lineman", "Utilities Lineman", "Skilled Trades", ["hands-on", "resilient", "practical", "structured"], ["Electrical lines", "Climbing", "Safety", "Repair"]],
  ["elevator-technician", "Elevator Technician", "Skilled Trades", ["hands-on", "analytical", "practical", "structured"], ["Mechanical repair", "Electrical systems", "Safety codes", "Troubleshooting"]],
  ["appliance-repair-technician", "Appliance Repair Technician", "Skilled Trades", ["hands-on", "practical", "communicator", "analytical"], ["Diagnostics", "Parts replacement", "Customer explanation", "Safety"]],
  ["small-engine-mechanic", "Small Engine Mechanic", "Skilled Trades", ["hands-on", "practical", "analytical", "independent"], ["Engine repair", "Troubleshooting", "Tools", "Customer service"]],
  ["diesel-mechanic", "Diesel Mechanic", "Skilled Trades", ["hands-on", "analytical", "practical", "resilient"], ["Diesel engines", "Diagnostics", "Hydraulics", "Preventive maintenance"]],
  ["aircraft-mechanic", "Aircraft Mechanic", "Transportation", ["hands-on", "structured", "analytical", "resilient"], ["Aircraft systems", "Inspection", "Repair", "Safety compliance"]],
  ["avionics-technician", "Avionics Technician", "Transportation", ["analytical", "hands-on", "structured", "practical"], ["Aircraft electronics", "Testing", "Wiring", "Troubleshooting"]],
  ["railroad-conductor", "Railroad Conductor", "Transportation", ["structured", "communicator", "practical", "resilient"], ["Rail operations", "Safety rules", "Crew coordination", "Customer communication"]],
  ["train-dispatcher", "Train Dispatcher", "Transportation", ["structured", "resilient", "communicator", "analytical"], ["Dispatching", "Route coordination", "Safety decisions", "Communication"]],
  ["fleet-manager", "Fleet Manager", "Transportation", ["structured", "practical", "analytical", "communicator"], ["Vehicle maintenance", "Scheduling", "Cost tracking", "Vendor coordination"]],
  ["route-planner", "Route Planner", "Transportation", ["analytical", "structured", "practical", "communicator"], ["Route optimization", "Mapping", "Scheduling", "Delivery constraints"]],
  ["port-operations-coordinator", "Port Operations Coordinator", "Transportation", ["structured", "communicator", "practical", "resilient"], ["Cargo coordination", "Vessel schedules", "Documentation", "Safety"]],
  ["customs-broker", "Customs Broker", "Transportation", ["structured", "analytical", "communicator", "practical"], ["Customs documents", "Import rules", "Client advising", "Compliance"]],
  ["import-export-coordinator", "Import Export Coordinator", "Operations", ["structured", "communicator", "analytical", "practical"], ["Shipping documents", "International logistics", "Vendor updates", "Compliance"]],
  ["inventory-control-specialist", "Inventory Control Specialist", "Operations", ["structured", "analytical", "practical", "independent"], ["Cycle counts", "Inventory systems", "Accuracy", "Reconciliation"]],
  ["demand-planner", "Demand Planner", "Operations", ["analytical", "structured", "curious", "communicator"], ["Forecasting", "Sales trends", "Inventory planning", "Data analysis"]],
  ["materials-planner", "Materials Planner", "Manufacturing", ["structured", "analytical", "practical", "communicator"], ["Material schedules", "Supplier coordination", "Production needs", "Inventory"]],
  ["production-planner", "Production Planner", "Manufacturing", ["structured", "analytical", "practical", "communicator"], ["Production schedules", "Capacity planning", "Materials", "Coordination"]],
  ["purchasing-agent", "Purchasing Agent", "Operations", ["analytical", "communicator", "practical", "structured"], ["Supplier quotes", "Purchase orders", "Negotiation", "Cost comparison"]],
  ["contract-specialist", "Contract Specialist", "Legal", ["structured", "analytical", "communicator", "practical"], ["Contract review", "Terms tracking", "Negotiation support", "Documentation"]],
  ["grants-manager", "Grants Manager", "Nonprofit", ["structured", "communicator", "analytical", "practical"], ["Grant compliance", "Reporting", "Budget tracking", "Funder communication"]],
  ["nonprofit-program-manager", "Nonprofit Program Manager", "Nonprofit", ["communicator", "structured", "empathetic", "resilient"], ["Program design", "Team coordination", "Reporting", "Community partnerships"]],
  ["social-media-coordinator", "Social Media Coordinator", "Marketing", ["creative", "communicator", "structured", "curious"], ["Content scheduling", "Community replies", "Analytics", "Trend research"]],
  ["digital-content-producer", "Digital Content Producer", "Media", ["creative", "structured", "communicator", "curious"], ["Content planning", "Publishing", "Editing", "Audience analytics"]],
  ["newsletter-editor", "Newsletter Editor", "Media", ["communicator", "structured", "creative", "curious"], ["Editorial planning", "Copy editing", "Audience focus", "Email tools"]],
  ["communications-specialist", "Communications Specialist", "Marketing", ["communicator", "creative", "structured", "empathetic"], ["Internal messaging", "Writing", "Campaign support", "Stakeholder updates"]],
  ["public-information-officer", "Public Information Officer", "Government", ["communicator", "resilient", "structured", "empathetic"], ["Public updates", "Media relations", "Crisis communication", "Plain language"]],
  ["speechwriter", "Speechwriter", "Language & Communication", ["communicator", "creative", "structured", "curious"], ["Message writing", "Audience analysis", "Voice matching", "Research"]],
  ["radio-host", "Radio Host", "Media", ["communicator", "creative", "resilient", "curious"], ["Interviewing", "Live hosting", "Audience engagement", "Storytelling"]],
  ["broadcast-technician", "Broadcast Technician", "Media", ["hands-on", "practical", "analytical", "resilient"], ["Broadcast equipment", "Signal flow", "Troubleshooting", "Live production"]],
  ["lighting-technician", "Lighting Technician", "Media", ["hands-on", "creative", "practical", "visual"], ["Lighting setup", "Cue sheets", "Equipment safety", "Stage support"]],
  ["stage-manager", "Stage Manager", "Media", ["structured", "communicator", "resilient", "practical"], ["Rehearsal notes", "Cue calling", "Team coordination", "Show flow"]],
  ["theater-technician", "Theater Technician", "Media", ["hands-on", "creative", "practical", "resilient"], ["Set support", "Lighting", "Sound", "Safety"]],
  ["art-handler", "Art Handler", "Arts", ["hands-on", "practical", "structured", "visual"], ["Artwork handling", "Packing", "Installation", "Condition reports"]],
  ["gallery-assistant", "Gallery Assistant", "Arts", ["communicator", "visual", "structured", "practical"], ["Visitor support", "Artwork records", "Events", "Sales support"]],
  ["curator", "Curator", "Arts", ["curious", "communicator", "structured", "creative"], ["Exhibition planning", "Research", "Collections", "Interpretation"]],
  ["exhibit-designer", "Exhibit Designer", "Design", ["creative", "visual", "structured", "empathetic"], ["Spatial storytelling", "Visitor flow", "Prototyping", "Content layout"]],
  ["fundraising-coordinator", "Fundraising Coordinator", "Nonprofit", ["communicator", "structured", "empathetic", "resilient"], ["Donor outreach", "Campaign logistics", "Event support", "Gift tracking"]],
  ["donor-relations-manager", "Donor Relations Manager", "Nonprofit", ["communicator", "empathetic", "structured", "resilient"], ["Stewardship", "Donor updates", "Relationship building", "Impact stories"]],
  ["community-organizer", "Community Organizer", "Nonprofit", ["communicator", "empathetic", "resilient", "structured"], ["Outreach", "Meeting facilitation", "Campaign planning", "Coalition building"]],
  ["campaign-manager", "Campaign Manager", "Government", ["communicator", "structured", "resilient", "analytical"], ["Campaign strategy", "Volunteer coordination", "Messaging", "Field planning"]],
  ["political-organizer", "Political Organizer", "Government", ["communicator", "resilient", "empathetic", "structured"], ["Canvassing", "Volunteer training", "Voter outreach", "Event planning"]],
  ["survey-researcher", "Survey Researcher", "Science", ["analytical", "structured", "curious", "communicator"], ["Question design", "Sampling", "Data analysis", "Reporting"]],
  ["census-field-representative", "Census Field Representative", "Government", ["communicator", "structured", "resilient", "practical"], ["Field interviews", "Data collection", "Confidentiality", "Route planning"]],
  ["library-assistant", "Library Assistant", "Education", ["communicator", "structured", "empathetic", "practical"], ["Patron support", "Shelving", "Catalog lookup", "Program help"]],
  ["mail-carrier", "Mail Carrier", "Transportation", ["independent", "practical", "resilient", "structured"], ["Route delivery", "Customer service", "Safety", "Time management"]],
  ["postal-clerk", "Postal Clerk", "Customer Experience", ["communicator", "structured", "practical", "resilient"], ["Package processing", "Customer service", "Cash handling", "Postal rules"]],
  ["delivery-driver", "Delivery Driver", "Transportation", ["independent", "practical", "resilient", "structured"], ["Route navigation", "Package handling", "Customer updates", "Safety"]],
  ["courier", "Courier", "Transportation", ["independent", "practical", "resilient", "communicator"], ["Time-sensitive delivery", "Navigation", "Proof of delivery", "Customer communication"]],
  ["rideshare-driver", "Rideshare Driver", "Transportation", ["independent", "communicator", "practical", "resilient"], ["Navigation", "Customer service", "Safety", "Schedule management"]],
  ["bus-driver", "Bus Driver", "Transportation", ["practical", "resilient", "communicator", "structured"], ["Passenger safety", "Route operation", "Vehicle checks", "Schedule awareness"]],
  ["school-bus-driver", "School Bus Driver", "Transportation", ["practical", "resilient", "empathetic", "structured"], ["Student safety", "Route driving", "Vehicle inspection", "Communication"]],
  ["taxi-dispatcher", "Taxi Dispatcher", "Transportation", ["communicator", "structured", "resilient", "practical"], ["Dispatch systems", "Customer calls", "Route awareness", "Problem solving"]],
  ["parking-enforcement-officer", "Parking Enforcement Officer", "Public Safety", ["practical", "structured", "resilient", "communicator"], ["Patrol", "Citation rules", "Observation", "Conflict de-escalation"]],
  ["crossing-guard", "Crossing Guard", "Public Safety", ["practical", "empathetic", "resilient", "communicator"], ["Pedestrian safety", "Traffic awareness", "Clear signals", "Community care"]],
  ["lifeguard", "Lifeguard", "Public Safety", ["resilient", "hands-on", "practical", "communicator"], ["Water safety", "Surveillance", "Rescue skills", "First aid"]],
  ["recreation-coordinator", "Recreation Coordinator", "Human Services", ["communicator", "creative", "structured", "empathetic"], ["Activity planning", "Participant support", "Scheduling", "Safety"]],
  ["sports-coach", "Sports Coach", "Education", ["communicator", "resilient", "empathetic", "structured"], ["Practice planning", "Skill coaching", "Motivation", "Team culture"]],
  ["athletic-trainer", "Athletic Trainer", "Healthcare", ["hands-on", "empathetic", "structured", "resilient"], ["Injury prevention", "Rehab support", "Emergency care", "Athlete communication"]],
  ["referee", "Referee", "Sports", ["resilient", "structured", "communicator", "practical"], ["Rules knowledge", "Decision making", "Conflict management", "Positioning"]],
  ["personal-care-aide", "Personal Care Aide", "Healthcare", ["empathetic", "hands-on", "practical", "resilient"], ["Daily support", "Observation", "Safety", "Client communication"]],
  ["recreation-therapist", "Recreation Therapist", "Healthcare", ["empathetic", "creative", "structured", "communicator"], ["Therapeutic activities", "Assessment", "Goal planning", "Progress notes"]],
  ["genetic-counselor", "Genetic Counselor", "Healthcare", ["empathetic", "analytical", "communicator", "structured"], ["Genetics education", "Risk explanation", "Counseling", "Family history"]],
  ["sonographer", "Sonographer", "Healthcare", ["hands-on", "visual", "structured", "empathetic"], ["Ultrasound imaging", "Patient positioning", "Anatomy", "Image quality"]],
  ["nuclear-medicine-technologist", "Nuclear Medicine Technologist", "Healthcare", ["hands-on", "structured", "analytical", "empathetic"], ["Imaging procedures", "Radiation safety", "Patient care", "Equipment use"]],
  ["occupational-health-and-safety-specialist", "Occupational Health and Safety Specialist", "Operations", ["structured", "practical", "communicator", "analytical"], ["Safety audits", "Training", "Incident review", "Risk prevention"]],
  ["ergonomics-specialist", "Ergonomics Specialist", "Healthcare", ["analytical", "empathetic", "practical", "communicator"], ["Workstation assessment", "Injury prevention", "Human factors", "Recommendations"]],
  ["claims-processor", "Claims Processor", "Finance", ["structured", "analytical", "practical", "communicator"], ["Claim documents", "Data entry", "Policy checks", "Follow-up"]],
  ["warranty-analyst", "Warranty Analyst", "Manufacturing", ["analytical", "structured", "practical", "communicator"], ["Warranty claims", "Product data", "Trend analysis", "Reporting"]],
  ["fraud-analyst", "Fraud Analyst", "Finance", ["analytical", "curious", "structured", "resilient"], ["Transaction review", "Pattern detection", "Investigation", "Risk alerts"]],
  ["credit-analyst", "Credit Analyst", "Finance", ["analytical", "structured", "practical", "independent"], ["Credit reports", "Financial analysis", "Risk scoring", "Recommendation writing"]],
  ["treasury-analyst", "Treasury Analyst", "Finance", ["analytical", "structured", "practical", "independent"], ["Cash management", "Forecasting", "Banking data", "Financial reporting"]],
  ["budget-analyst", "Budget Analyst", "Finance", ["analytical", "structured", "communicator", "practical"], ["Budget review", "Forecasting", "Variance analysis", "Reporting"]],
  ["procurement-analyst", "Procurement Analyst", "Operations", ["analytical", "structured", "practical", "communicator"], ["Spend analysis", "Supplier data", "Savings tracking", "Sourcing support"]],
  ["vendor-manager", "Vendor Manager", "Operations", ["communicator", "structured", "analytical", "practical"], ["Vendor performance", "Contracts", "Relationship management", "Issue tracking"]],
  ["supplier-quality-engineer", "Supplier Quality Engineer", "Engineering", ["analytical", "structured", "communicator", "practical"], ["Supplier audits", "Quality metrics", "Corrective action", "Manufacturing standards"]],
  ["packaging-designer", "Packaging Designer", "Design", ["creative", "visual", "practical", "structured"], ["Package concepts", "Materials", "Branding", "Production constraints"]],
  ["print-production-specialist", "Print Production Specialist", "Design", ["structured", "visual", "practical", "communicator"], ["Print files", "Vendor coordination", "Color checks", "Production schedules"]],
  ["textile-designer", "Textile Designer", "Design", ["creative", "visual", "hands-on", "curious"], ["Pattern design", "Materials", "Color", "Trend research"]],
  ["jeweler", "Jeweler", "Skilled Trades", ["hands-on", "creative", "visual", "structured"], ["Metalwork", "Stone setting", "Repair", "Detail precision"]],
  ["watchmaker", "Watchmaker", "Skilled Trades", ["hands-on", "structured", "independent", "analytical"], ["Precision repair", "Tiny mechanisms", "Tool control", "Quality checks"]],
  ["locksmith", "Locksmith", "Skilled Trades", ["hands-on", "practical", "analytical", "independent"], ["Lock systems", "Key cutting", "Customer service", "Security basics"]],
  ["glazier", "Glazier", "Skilled Trades", ["hands-on", "practical", "structured", "resilient"], ["Glass installation", "Measurement", "Safety", "Blueprint reading"]],
  ["roofer", "Roofer", "Skilled Trades", ["hands-on", "resilient", "practical", "structured"], ["Roof repair", "Safety", "Materials", "Weatherproofing"]],
  ["mason", "Mason", "Skilled Trades", ["hands-on", "builder", "practical", "structured"], ["Brickwork", "Concrete", "Measurement", "Tool use"]],
  ["tile-setter", "Tile Setter", "Skilled Trades", ["hands-on", "visual", "practical", "structured"], ["Layout", "Cutting", "Surface prep", "Grouting"]],
  ["drywall-installer", "Drywall Installer", "Skilled Trades", ["hands-on", "practical", "structured", "resilient"], ["Measuring", "Hanging drywall", "Finishing", "Safety"]],
  ["painter", "Painter", "Skilled Trades", ["hands-on", "visual", "practical", "independent"], ["Surface prep", "Color matching", "Brush technique", "Customer service"]],
  ["flooring-installer", "Flooring Installer", "Skilled Trades", ["hands-on", "practical", "structured", "visual"], ["Measurement", "Material cutting", "Subfloor prep", "Installation"]],
  ["insulation-installer", "Insulation Installer", "Skilled Trades", ["hands-on", "practical", "structured", "resilient"], ["Building insulation", "Safety gear", "Air sealing", "Material handling"]],
  ["pest-control-technician", "Pest Control Technician", "Skilled Trades", ["practical", "communicator", "structured", "resilient"], ["Inspection", "Treatment plans", "Safety", "Customer education"]],
  ["pool-technician", "Pool Technician", "Skilled Trades", ["hands-on", "practical", "analytical", "independent"], ["Water testing", "Equipment repair", "Cleaning", "Chemical safety"]],
  ["groundskeeper", "Groundskeeper", "Agriculture", ["hands-on", "practical", "resilient", "structured"], ["Grounds maintenance", "Equipment", "Plant care", "Safety"]],
  ["tree-care-specialist", "Tree Care Specialist", "Agriculture", ["hands-on", "practical", "resilient", "curious"], ["Tree pruning", "Plant health", "Climbing safety", "Equipment"]],
  ["forestry-technician", "Forestry Technician", "Science", ["hands-on", "curious", "practical", "resilient"], ["Forest surveys", "Field data", "Equipment", "Resource protection"]],
  ["wildlife-technician", "Wildlife Technician", "Science", ["hands-on", "curious", "structured", "resilient"], ["Wildlife monitoring", "Field notes", "Habitat checks", "Data collection"]],
  ["fisheries-technician", "Fisheries Technician", "Science", ["hands-on", "analytical", "curious", "resilient"], ["Fish sampling", "Water quality", "Field equipment", "Data entry"]],
  ["soil-conservationist", "Soil Conservationist", "Science", ["practical", "analytical", "communicator", "curious"], ["Soil health", "Conservation plans", "Landowner advising", "Field assessment"]],
  ["irrigation-technician", "Irrigation Technician", "Agriculture", ["hands-on", "practical", "analytical", "structured"], ["Irrigation systems", "Water flow", "Repair", "Scheduling"]],
  ["greenhouse-manager", "Greenhouse Manager", "Agriculture", ["hands-on", "structured", "curious", "practical"], ["Plant production", "Climate control", "Staff coordination", "Inventory"]],
  ["florist", "Florist", "Design", ["creative", "hands-on", "visual", "communicator"], ["Flower arranging", "Customer service", "Color", "Order planning"]],
  ["pet-groomer", "Pet Groomer", "Animal Care", ["hands-on", "empathetic", "practical", "communicator"], ["Animal handling", "Grooming tools", "Safety", "Customer communication"]],
  ["dog-trainer", "Dog Trainer", "Animal Care", ["empathetic", "communicator", "hands-on", "resilient"], ["Animal behavior", "Training plans", "Client coaching", "Observation"]],
  ["animal-shelter-coordinator", "Animal Shelter Coordinator", "Animal Care", ["empathetic", "structured", "communicator", "resilient"], ["Animal intake", "Volunteer coordination", "Adoptions", "Record keeping"]],
  ["farrier", "Farrier", "Animal Care", ["hands-on", "practical", "resilient", "structured"], ["Hoof care", "Horse handling", "Tool use", "Safety"]],
  ["stable-manager", "Stable Manager", "Animal Care", ["hands-on", "structured", "practical", "empathetic"], ["Horse care", "Facility routines", "Staff coordination", "Safety"]],
  ["aquaculture-technician", "Aquaculture Technician", "Agriculture", ["hands-on", "analytical", "practical", "curious"], ["Water systems", "Animal care", "Feeding", "Data tracking"]],
  ["winemaker", "Winemaker", "Agriculture", ["curious", "analytical", "creative", "practical"], ["Fermentation", "Quality testing", "Blending", "Production planning"]],
  ["brewer", "Brewer", "Manufacturing", ["hands-on", "analytical", "creative", "structured"], ["Brewing process", "Sanitation", "Recipe development", "Quality checks"]],
  ["distiller", "Distiller", "Manufacturing", ["hands-on", "analytical", "structured", "creative"], ["Distillation", "Fermentation", "Safety", "Quality control"]],
  ["butcher", "Butcher", "Hospitality", ["hands-on", "practical", "structured", "resilient"], ["Meat cutting", "Food safety", "Customer service", "Knife skills"]],
  ["fishmonger", "Fishmonger", "Hospitality", ["hands-on", "practical", "communicator", "structured"], ["Seafood handling", "Food safety", "Customer advising", "Display setup"]],
  ["line-cook", "Line Cook", "Hospitality", ["hands-on", "resilient", "practical", "structured"], ["Prep work", "Cooking stations", "Timing", "Teamwork"]],
  ["pastry-chef", "Pastry Chef", "Hospitality", ["creative", "hands-on", "structured", "practical"], ["Pastry techniques", "Recipe precision", "Decorating", "Timing"]],
  ["sous-chef", "Sous Chef", "Hospitality", ["hands-on", "communicator", "structured", "resilient"], ["Kitchen leadership", "Prep planning", "Quality checks", "Staff coaching"]],
  ["food-truck-owner", "Food Truck Owner", "Hospitality", ["practical", "creative", "resilient", "communicator"], ["Menu planning", "Operations", "Customer service", "Cost control"]],
  ["restaurant-host", "Restaurant Host", "Hospitality", ["communicator", "empathetic", "practical", "resilient"], ["Guest greeting", "Seating plans", "Waitlist management", "Service flow"]],
  ["server", "Server", "Hospitality", ["communicator", "resilient", "empathetic", "practical"], ["Guest service", "Order accuracy", "Menu knowledge", "Timing"]],
  ["bartender", "Bartender", "Hospitality", ["communicator", "hands-on", "resilient", "creative"], ["Drink making", "Guest service", "Speed", "Safety"]],
  ["housekeeper", "Housekeeper", "Hospitality", ["hands-on", "practical", "structured", "resilient"], ["Cleaning routines", "Attention to detail", "Time management", "Guest standards"]],
  ["laundry-attendant", "Laundry Attendant", "Hospitality", ["hands-on", "structured", "practical", "resilient"], ["Laundry systems", "Sorting", "Quality checks", "Time management"]],
  ["reservation-agent", "Reservation Agent", "Customer Experience", ["communicator", "structured", "empathetic", "practical"], ["Booking systems", "Customer calls", "Problem solving", "Upselling"]],
  ["ticketing-agent", "Ticketing Agent", "Customer Experience", ["communicator", "structured", "practical", "resilient"], ["Ticket systems", "Customer service", "Payment handling", "Issue resolution"]],
  ["airport-gate-agent", "Airport Gate Agent", "Transportation", ["communicator", "resilient", "structured", "empathetic"], ["Boarding process", "Passenger support", "Schedule updates", "Conflict de-escalation"]],
  ["baggage-handler", "Baggage Handler", "Transportation", ["hands-on", "resilient", "practical", "structured"], ["Baggage loading", "Ramp safety", "Teamwork", "Time pressure"]],
  ["ramp-agent", "Ramp Agent", "Transportation", ["hands-on", "resilient", "practical", "structured"], ["Aircraft ground support", "Safety", "Equipment", "Team coordination"]],
  ["flight-dispatcher", "Flight Dispatcher", "Transportation", ["structured", "analytical", "communicator", "resilient"], ["Flight planning", "Weather review", "Safety decisions", "Crew communication"]],
  ["logistics-analyst", "Logistics Analyst", "Operations", ["analytical", "structured", "practical", "communicator"], ["Logistics data", "Route analysis", "Cost tracking", "Process improvement"]],
  ["warehouse-associate", "Warehouse Associate", "Operations", ["hands-on", "practical", "structured", "resilient"], ["Picking", "Packing", "Inventory", "Safety"]],
  ["forklift-operator", "Forklift Operator", "Operations", ["hands-on", "practical", "structured", "resilient"], ["Forklift operation", "Warehouse safety", "Loading", "Inventory movement"]],
  ["shipping-clerk", "Shipping Clerk", "Operations", ["structured", "practical", "communicator", "resilient"], ["Shipping labels", "Carrier systems", "Packing checks", "Documentation"]],
  ["receiving-clerk", "Receiving Clerk", "Operations", ["structured", "hands-on", "practical", "analytical"], ["Receiving shipments", "Inventory checks", "Documentation", "Vendor communication"]],
  ["order-picker", "Order Picker", "Operations", ["hands-on", "structured", "practical", "resilient"], ["Picking accuracy", "Warehouse systems", "Speed", "Safety"]],
  ["fulfillment-specialist", "Fulfillment Specialist", "Operations", ["hands-on", "structured", "practical", "resilient"], ["Order fulfillment", "Packing", "Quality checks", "Inventory systems"]],
  ["returns-specialist", "Returns Specialist", "Customer Experience", ["communicator", "structured", "practical", "empathetic"], ["Return processing", "Customer support", "Inspection", "Inventory updates"]],
  ["client-services-coordinator", "Client Services Coordinator", "Customer Experience", ["communicator", "structured", "empathetic", "practical"], ["Client requests", "Scheduling", "Issue tracking", "Follow-up"]],
  ["member-services-representative", "Member Services Representative", "Customer Experience", ["communicator", "empathetic", "structured", "resilient"], ["Member support", "Account updates", "Problem solving", "CRM notes"]],
  ["guest-services-manager", "Guest Services Manager", "Hospitality", ["communicator", "empathetic", "structured", "resilient"], ["Guest recovery", "Team coaching", "Service standards", "Scheduling"]],
  ["clinic-receptionist", "Clinic Receptionist", "Healthcare", ["communicator", "structured", "empathetic", "practical"], ["Patient scheduling", "Insurance basics", "Phone support", "Records"]],
  ["medical-scheduler", "Medical Scheduler", "Healthcare", ["structured", "communicator", "empathetic", "practical"], ["Appointment scheduling", "Patient communication", "Referral tracking", "Calendar systems"]],
  ["patient-access-representative", "Patient Access Representative", "Healthcare", ["communicator", "structured", "empathetic", "practical"], ["Patient registration", "Insurance verification", "Customer service", "Data accuracy"]],
  ["insurance-verification-specialist", "Insurance Verification Specialist", "Healthcare", ["structured", "analytical", "communicator", "practical"], ["Insurance eligibility", "Authorization", "Patient accounts", "Documentation"]],
  ["prior-authorization-specialist", "Prior Authorization Specialist", "Healthcare", ["structured", "communicator", "analytical", "resilient"], ["Authorization requests", "Medical records", "Insurance rules", "Follow-up"]],
  ["medical-transcriptionist", "Medical Transcriptionist", "Healthcare", ["independent", "structured", "analytical", "practical"], ["Medical terminology", "Typing accuracy", "Listening", "Documentation"]],
  ["unit-clerk", "Unit Clerk", "Healthcare", ["structured", "communicator", "practical", "resilient"], ["Unit coordination", "Records", "Phone communication", "Patient flow"]],
  ["birth-doula", "Birth Doula", "Healthcare", ["empathetic", "communicator", "resilient", "hands-on"], ["Labor support", "Client education", "Advocacy", "Calm presence"]],
  ["peer-support-specialist", "Peer Support Specialist", "Human Services", ["empathetic", "communicator", "resilient", "practical"], ["Peer mentoring", "Resource connection", "Recovery support", "Boundaries"]],
  ["youth-program-coordinator", "Youth Program Coordinator", "Human Services", ["communicator", "creative", "empathetic", "structured"], ["Youth activities", "Safety", "Mentoring", "Program planning"]],
  ["after-school-program-leader", "After School Program Leader", "Education", ["empathetic", "creative", "communicator", "resilient"], ["Activity facilitation", "Student supervision", "Behavior support", "Family communication"]],
  ["camp-counselor", "Camp Counselor", "Education", ["empathetic", "resilient", "creative", "communicator"], ["Group activities", "Safety", "Leadership", "Conflict resolution"]],
  ["outdoor-education-instructor", "Outdoor Education Instructor", "Education", ["hands-on", "communicator", "resilient", "curious"], ["Outdoor safety", "Teaching", "Group leadership", "Environmental knowledge"]],
  ["dance-instructor", "Dance Instructor", "Arts", ["creative", "hands-on", "communicator", "resilient"], ["Choreography", "Instruction", "Movement technique", "Student feedback"]],
  ["music-teacher", "Music Teacher", "Education", ["creative", "communicator", "structured", "empathetic"], ["Music instruction", "Practice planning", "Performance prep", "Feedback"]],
  ["art-teacher", "Art Teacher", "Education", ["creative", "visual", "communicator", "empathetic"], ["Art instruction", "Studio safety", "Creative prompts", "Critique"]],
  ["acting-coach", "Acting Coach", "Arts", ["creative", "communicator", "empathetic", "resilient"], ["Scene work", "Feedback", "Voice", "Character development"]],
  ["voice-coach", "Voice Coach", "Arts", ["communicator", "creative", "empathetic", "structured"], ["Vocal technique", "Warmups", "Performance coaching", "Feedback"]],
  ["makeup-artist", "Makeup Artist", "Arts", ["creative", "hands-on", "visual", "communicator"], ["Makeup application", "Color", "Sanitation", "Client consultation"]],
  ["hair-stylist", "Hair Stylist", "Skilled Trades", ["creative", "hands-on", "communicator", "visual"], ["Hair cutting", "Styling", "Color basics", "Client service"]],
  ["esthetician", "Esthetician", "Skilled Trades", ["hands-on", "empathetic", "communicator", "practical"], ["Skin care", "Sanitation", "Client consultation", "Treatment planning"]],
  ["nail-technician", "Nail Technician", "Skilled Trades", ["hands-on", "creative", "visual", "communicator"], ["Nail care", "Sanitation", "Design", "Customer service"]],
  ["tailor", "Tailor", "Skilled Trades", ["hands-on", "structured", "visual", "practical"], ["Alterations", "Measuring", "Sewing", "Garment fitting"]],
  ["costume-designer", "Costume Designer", "Arts", ["creative", "visual", "structured", "communicator"], ["Character research", "Garment planning", "Budgeting", "Collaboration"]],
  ["set-designer", "Set Designer", "Arts", ["creative", "visual", "builder", "structured"], ["Scenic design", "Drafting", "Story interpretation", "Materials"]],
  ["prop-maker", "Prop Maker", "Arts", ["hands-on", "creative", "builder", "practical"], ["Fabrication", "Painting", "Materials", "Problem solving"]],
  ["sign-maker", "Sign Maker", "Skilled Trades", ["hands-on", "visual", "practical", "creative"], ["Vinyl cutting", "Installation", "Layout", "Materials"]],
  ["screen-printer", "Screen Printer", "Manufacturing", ["hands-on", "visual", "structured", "practical"], ["Screen setup", "Ink mixing", "Production", "Quality checks"]],
  ["laser-engraving-technician", "Laser Engraving Technician", "Manufacturing", ["hands-on", "structured", "visual", "practical"], ["Laser setup", "Materials", "Design files", "Safety"]],
  ["woodworker", "Woodworker", "Skilled Trades", ["hands-on", "builder", "creative", "structured"], ["Joinery", "Tools", "Finishing", "Measurement"]],
  ["cabinetmaker", "Cabinetmaker", "Skilled Trades", ["hands-on", "builder", "structured", "visual"], ["Cabinet construction", "Blueprints", "Finishing", "Installation"]],
  ["upholsterer", "Upholsterer", "Skilled Trades", ["hands-on", "creative", "practical", "visual"], ["Fabric work", "Furniture repair", "Measuring", "Detail work"]],
  ["bicycle-mechanic", "Bicycle Mechanic", "Skilled Trades", ["hands-on", "practical", "analytical", "communicator"], ["Bike repair", "Diagnostics", "Customer service", "Tool use"]],
  ["motorcycle-mechanic", "Motorcycle Mechanic", "Skilled Trades", ["hands-on", "analytical", "practical", "resilient"], ["Motorcycle systems", "Diagnostics", "Repair", "Safety"]],
  ["boat-mechanic", "Boat Mechanic", "Skilled Trades", ["hands-on", "analytical", "practical", "resilient"], ["Marine engines", "Electrical systems", "Diagnostics", "Maintenance"]],
  ["windshield-repair-technician", "Windshield Repair Technician", "Skilled Trades", ["hands-on", "practical", "structured", "communicator"], ["Glass repair", "Customer service", "Adhesives", "Safety"]],
  ["home-inspector", "Home Inspector", "Real Estate", ["practical", "analytical", "structured", "communicator"], ["Home systems", "Inspection reports", "Safety issues", "Client explanation"]],
  ["energy-efficiency-consultant", "Energy Efficiency Consultant", "Energy", ["analytical", "communicator", "practical", "curious"], ["Energy audits", "Recommendations", "Building systems", "Savings estimates"]],
  ["weatherization-technician", "Weatherization Technician", "Energy", ["hands-on", "practical", "structured", "resilient"], ["Air sealing", "Insulation", "Home assessment", "Safety"]],
  ["building-automation-specialist", "Building Automation Specialist", "Technology", ["analytical", "hands-on", "structured", "practical"], ["Building controls", "Sensors", "Troubleshooting", "Energy systems"]],
  ["smart-home-technician", "Smart Home Technician", "Technology", ["hands-on", "communicator", "practical", "analytical"], ["Device setup", "Networking", "Customer training", "Troubleshooting"]],
  ["ev-charging-technician", "EV Charging Technician", "Energy", ["hands-on", "practical", "structured", "analytical"], ["Charger installation", "Electrical safety", "Testing", "Customer support"]]
];

function buildSupplementalCareer([id, title, field, traits, skills]) {
  const primarySkill = skills[0];

  return {
    id,
    title,
    field,
    summary: `Uses ${primarySkill.toLowerCase()} and practical judgment to solve real problems in ${field.toLowerCase()} settings.`,
    fit: `You may like this path if you enjoy ${traits.slice(0, 2).join(" and ")} work and want a role with clear real-world impact.`,
    traits,
    skills,
    workStyle: `${primarySkill}, collaboration, documentation, and steady improvement across changing priorities`,
    startingPoint: `Find one entry-level ${title} posting and list the skills, tools, credentials, and first project you could practice.`,
    setting: `${field.toLowerCase()} teams, service organizations, public agencies, private companies, and specialized workplaces`,
    problem: `a person or organization needs ${title} support to make a safer, clearer, faster, or more reliable decision`,
    deliverable: `a ${title} starter brief with user need, key tasks, tools, risks, success measure, and next step`
  };
}

additionalCareerBlueprints.push(...supplementalCareerRows.map(buildSupplementalCareer));

function buildCareerFromBlueprint(blueprint) {
  return {
    id: blueprint.id,
    title: blueprint.title,
    field: blueprint.field,
    summary: blueprint.summary,
    fit: blueprint.fit,
    traits: blueprint.traits,
    skills: blueprint.skills,
    workStyle: blueprint.workStyle,
    startingPoint: blueprint.startingPoint,
    lessons: [
      {
        title: `What ${blueprint.title}s really do`,
        objective: `Understand the daily responsibilities, settings, and decisions that define ${blueprint.title}.`,
        activity: `List three places ${blueprint.title}s work, then choose one and describe what a normal day might include.`,
        takeaway: `${blueprint.title}s create value in ${blueprint.setting} by combining skill, judgment, and communication.`
      },
      {
        title: "Core skills and tools",
        objective: `Connect this career to practical skills such as ${blueprint.skills.slice(0, 3).join(", ")}.`,
        activity: `Pick one skill from ${blueprint.skills.join(", ")} and find a beginner exercise that would let you practice it this week.`,
        takeaway: `Career confidence grows when you can name the skill, practice it, and explain how it helps solve real problems.`
      },
      {
        title: "Solving a real workplace problem",
        objective: `Practice how a ${blueprint.title} might think through ${blueprint.problem}.`,
        activity: `Write the problem, what information you need, who is affected, two possible options, and one risk to watch.`,
        takeaway: `Most careers involve structured judgment: gathering facts, weighing tradeoffs, and choosing a responsible next step.`
      },
      {
        title: "First project or proof of interest",
        objective: `Create a concrete artifact that shows you understand the basics of ${blueprint.title}.`,
        activity: `Build ${blueprint.deliverable}, then ask someone for feedback on clarity and usefulness.`,
        takeaway: `A small finished artifact helps you test interest and gives you something real to discuss with mentors, teachers, or employers.`
      }
    ]
  };
}

careers.push(...additionalCareerBlueprints.map(buildCareerFromBlueprint));
careers.sort((a, b) => a.title.localeCompare(b.title));

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
  },
  {
    text: "When a plan changes suddenly, what do you do first?",
    answers: [
      { text: "Rebuild the steps and priorities", traits: ["structured", "resilient"] },
      { text: "Check what people need from me", traits: ["empathetic", "communicator"] },
      { text: "Look for the root cause or missing data", traits: ["analytical", "curious"] },
      { text: "Try a practical workaround quickly", traits: ["practical", "hands-on"] }
    ]
  },
  {
    text: "Which school or work project would you pick?",
    answers: [
      { text: "Build a useful tool or prototype", traits: ["builder", "hands-on"] },
      { text: "Design a poster, interface, room, or story", traits: ["creative", "visual"] },
      { text: "Analyze a dataset and explain the pattern", traits: ["analytical", "structured"] },
      { text: "Interview people and turn needs into a plan", traits: ["communicator", "empathetic"] }
    ]
  },
  {
    text: "What kind of responsibility feels most motivating?",
    answers: [
      { text: "Keeping people safe or supported", traits: ["empathetic", "resilient"] },
      { text: "Making a system reliable and organized", traits: ["structured", "practical"] },
      { text: "Finding the smartest answer with evidence", traits: ["analytical", "curious"] },
      { text: "Creating something people can see or use", traits: ["creative", "builder"] }
    ]
  },
  {
    text: "How do you like to spend most of your working time?",
    answers: [
      { text: "Mostly independent focus with clear goals", traits: ["independent", "analytical"] },
      { text: "Moving around, fixing, building, or helping hands-on", traits: ["hands-on", "practical"] },
      { text: "Talking with people, guiding, or coordinating", traits: ["communicator", "empathetic"] },
      { text: "Exploring ideas, visuals, experiments, or stories", traits: ["creative", "curious"] }
    ]
  },
  {
    text: "Which detail do you notice before other people?",
    answers: [
      { text: "A risk, mistake, or inconsistency", traits: ["structured", "analytical"] },
      { text: "A confusing experience someone is having", traits: ["empathetic", "communicator"] },
      { text: "A better way to arrange or present something", traits: ["visual", "creative"] },
      { text: "A tool, machine, or process that could work better", traits: ["hands-on", "builder"] }
    ]
  },
  {
    text: "What pace sounds most sustainable for you?",
    answers: [
      { text: "Fast, active days with urgent problems", traits: ["resilient", "hands-on"] },
      { text: "Steady routines with room for accuracy", traits: ["structured", "practical"] },
      { text: "Deep research or analysis before decisions", traits: ["analytical", "independent"] },
      { text: "Project cycles with feedback and iteration", traits: ["creative", "communicator"] }
    ]
  },
  {
    text: "If someone asked for your help, what would you prefer to improve?",
    answers: [
      { text: "Their confidence, care, or next step", traits: ["empathetic", "communicator"] },
      { text: "Their workflow, checklist, or operations", traits: ["structured", "practical"] },
      { text: "Their numbers, evidence, or decision logic", traits: ["analytical", "curious"] },
      { text: "Their product, message, design, or experience", traits: ["creative", "visual"] }
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

Object.assign(careerPrerequisites, {
  "physician-assistant": {
    education: "Requires a bachelor's degree, prerequisite science courses, patient-care experience, and an accredited PA master's program.",
    timeline: "Commonly 4 years undergraduate study plus 2-3 years in PA school, with patient-care hours before applying.",
    credentials: "PA program clinical rotations, PANCE certification, state licensure, continuing medical education, and specialty experience later.",
    start: "Research PA program prerequisites and begin planning science coursework, patient-care exposure, and shadowing hours."
  },
  "physical-therapist": {
    education: "Requires a bachelor's degree followed by a Doctor of Physical Therapy program from an accredited school.",
    timeline: "Typically 4 years undergraduate study plus about 3 years for a DPT program and licensing preparation.",
    credentials: "DPT degree, clinical rotations, NPTE licensing exam, state licensure, CPR/BLS, and optional specialties later.",
    start: "Shadow a physical therapist and track prerequisite courses such as anatomy, physiology, biology, and statistics."
  },
  pharmacist: {
    education: "Requires prerequisite undergraduate coursework and a Doctor of Pharmacy degree from an accredited pharmacy program.",
    timeline: "Often 2-4 years of prerequisites plus 4 years of pharmacy school, depending on program structure.",
    credentials: "PharmD degree, licensing exams, state licensure, rotations, immunization training, and residency for some specialties.",
    start: "Learn one medication category and research PharmD prerequisites, admission tests if required, and pharmacy experience options."
  },
  "civil-engineer": {
    education: "A bachelor's degree in civil engineering or a related engineering field is usually required.",
    timeline: "Typically 4 years for the degree, with additional supervised experience and exams for professional engineer licensure.",
    credentials: "FE exam, internships, CAD or design tools, engineering projects, and PE licensure for higher-responsibility roles.",
    start: "Document a local infrastructure issue and connect it to a civil engineering topic such as structures, water, or transportation."
  },
  "graphic-designer": {
    education: "A degree in graphic design or visual communication helps, but a strong portfolio can matter as much as formal education.",
    timeline: "2-4 years through school or 6-18 months of focused portfolio building for entry-level freelance or junior roles.",
    credentials: "Design portfolio, software skills, typography/layout samples, brand projects, client briefs, and critique experience.",
    start: "Create three versions of the same poster and explain hierarchy, typography, color, and audience choices."
  },
  journalist: {
    education: "Journalism, communications, English, political science, or subject-area degrees can help, but clips and reporting skill are essential.",
    timeline: "Often 4 years for a degree path, or months to years of building published clips, internships, and reporting experience.",
    credentials: "Published work, interview samples, fact-checking discipline, audio/video skills, internships, and source-development experience.",
    start: "Report one local story with at least two sources and a fact-checking note for every major claim."
  },
  "translator-interpreter": {
    education: "Requires strong bilingual ability; degrees or certificates in translation, interpretation, linguistics, or a specialty field can help.",
    timeline: "Language fluency can take years; professional certificate preparation may take months to 2 years depending on setting.",
    credentials: "Language proficiency evidence, translation samples, interpreting certificates, medical/legal credentials for specialized roles.",
    start: "Build a glossary for one topic and translate a short document with notes about context and word-choice decisions."
  },
  "real-estate-agent": {
    education: "Usually requires state-approved pre-licensing coursework and passing a real estate licensing exam.",
    timeline: "Often a few months for coursework, exam preparation, licensing, and joining a brokerage, depending on state rules.",
    credentials: "State real estate license, sponsoring brokerage, continuing education, local market knowledge, and client-service skills.",
    start: "Look up your state's pre-licensing hours and compare three local listings to practice market analysis."
  },
  "commercial-pilot": {
    education: "A college degree may help for airline roles, but flight training, ratings, medical clearance, and logged hours are required.",
    timeline: "Often 1-2 years for initial commercial training, with many more hours needed for airline transport roles.",
    credentials: "FAA medical certificate, private pilot license, instrument rating, commercial pilot certificate, flight hours, and ATP later.",
    start: "Take a discovery flight or study the requirements for private pilot, instrument, commercial, and ATP certificates."
  },
  firefighter: {
    education: "Usually requires a high school diploma or equivalent; EMT training, fire academy, and physical testing are commonly required.",
    timeline: "Preparation can take months to 2 years depending on EMT certification, academy timing, testing, and hiring cycles.",
    credentials: "EMT or paramedic certification, fire academy completion, CPAT or physical ability test, background checks, and CPR/BLS.",
    start: "Research local department hiring requirements and begin a fitness, CPR, and EMT-readiness plan."
  },
  "police-officer": {
    education: "Usually requires a high school diploma or equivalent; some departments prefer college coursework or military/public service experience.",
    timeline: "Hiring and academy training often take months to over a year, followed by field training and probationary periods.",
    credentials: "Police academy, state certification, background checks, physical testing, psychological evaluation, and ongoing training.",
    start: "Review local academy requirements and practice neutral observation by writing fact-only incident summaries."
  },
  paralegal: {
    education: "Many roles prefer a paralegal certificate, associate degree, bachelor's degree, or legal studies coursework.",
    timeline: "Certificate programs may take months; associate or bachelor's paths take 2-4 years depending on route.",
    credentials: "Paralegal certificate, legal research/writing samples, document management skill, internships, and optional professional certifications.",
    start: "Create a case timeline from a public legal article and identify parties, facts, issues, and missing information."
  },
  "supply-chain-manager": {
    education: "A bachelor's degree in supply chain, operations, business, analytics, or logistics is common for management-track roles.",
    timeline: "Typically 4 years for a degree plus several years of operations, logistics, purchasing, or analyst experience.",
    credentials: "Internships, spreadsheet/data skills, ERP exposure, APICS/ASCM credentials later, and process-improvement projects.",
    start: "Map the supply chain for one product and identify where delays, cost, quality, or inventory problems could happen."
  },
  "sales-representative": {
    education: "Requirements vary widely; many roles value communication, product knowledge, and results more than a specific degree.",
    timeline: "Entry roles can start quickly, with months of product training and years of experience for complex or enterprise sales.",
    credentials: "Sales results, CRM experience, product demos, industry knowledge, communication samples, and sometimes technical certifications.",
    start: "Practice a discovery call script and write how your product solves a specific customer pain."
  },
  veterinarian: {
    education: "Requires prerequisite undergraduate science coursework and a Doctor of Veterinary Medicine degree.",
    timeline: "Usually 4 years undergraduate preparation plus 4 years of veterinary school, with additional training for specialties.",
    credentials: "DVM degree, NAVLE licensing exam, state licensure, clinical rotations, animal-handling experience, and specialty internships/residencies if desired.",
    start: "Volunteer with animals and track vet-school prerequisite courses, animal experience hours, and shadowing opportunities."
  },
  "biomedical-engineer": {
    education: "A bachelor's degree in biomedical engineering, mechanical engineering, electrical engineering, or bioengineering is common.",
    timeline: "Typically 4 years for entry-level roles; research or advanced device roles may require graduate study.",
    credentials: "Design projects, lab experience, CAD/testing skills, internships, regulatory awareness, and technical documentation samples.",
    start: "Study one medical device and write how user needs, safety, testing, and design constraints shape it."
  },
  "cloud-engineer": {
    education: "Degrees in computer science or IT help, but many people enter through help desk, systems, networking, labs, and cloud certifications.",
    timeline: "Often 6-18 months to build fundamentals for junior roles, or 2-4 years through a degree or IT pathway.",
    credentials: "Cloud certifications, networking/Linux knowledge, infrastructure projects, scripting, security basics, and deployment experience.",
    start: "Deploy a small project and diagram the compute, storage, network, permissions, and monitoring pieces."
  },
  "machine-learning-engineer": {
    education: "Usually requires strong programming, math, statistics, and machine-learning fundamentals; many roles prefer a CS or data-related degree.",
    timeline: "Typically 4 years for a degree path, with additional months or years building ML projects and production engineering skill.",
    credentials: "Python projects, model reports, data-cleaning work, math foundations, internships, research, and deployed ML demos.",
    start: "Train a simple model and write a short report explaining data, metric, result, limitation, and ethical concern."
  },
  "event-planner": {
    education: "Hospitality, communications, business, or event-management education can help, but experience planning real events is key.",
    timeline: "Entry roles can begin with volunteer or coordinator experience; 2-4 years of experience often leads to larger events.",
    credentials: "Event portfolio, vendor contacts, budget samples, timelines, venue experience, and optional event-planning certifications.",
    start: "Plan a small event with a budget, guest list, timeline, vendor list, risk plan, and day-of checklist."
  },
  "urban-planner": {
    education: "A bachelor's degree in planning, geography, public policy, environmental studies, or design can lead in; many planners earn a master's.",
    timeline: "Usually 4 years for entry roles, with 1-2 additional years for a planning master's or specialized public-sector roles.",
    credentials: "GIS/maps, policy writing, public engagement experience, planning internships, research samples, and AICP later for some roles.",
    start: "Create a neighborhood observation memo with safety, housing, transportation, public-space, and accessibility notes."
  }

  ,
  dentist: {
    education: "Requires undergraduate prerequisite science coursework and a Doctor of Dental Surgery or Doctor of Dental Medicine degree.",
    timeline: "Usually 4 years undergraduate preparation plus 4 years of dental school, with extra years for specialties.",
    credentials: "DDS or DMD degree, dental licensing exams, state licensure, clinical rotations, and specialty residency for advanced paths.",
    start: "Shadow a dentist, research dental-school prerequisites, and practice explaining one oral-health habit in plain language."
  },
  psychologist: {
    education: "Clinical psychologist roles usually require a doctoral degree; some psychology roles begin with bachelor's or master's-level training.",
    timeline: "Often 4 years undergraduate study plus 2-7 years of graduate training depending on counseling, research, or clinical path.",
    credentials: "Graduate degree, supervised clinical hours for therapy roles, state licensure, research experience, and ethics training.",
    start: "Compare psychologist, therapist, counselor, and psychiatrist requirements in your state or country."
  },
  "occupational-therapist": {
    education: "Requires a master's or doctoral degree in occupational therapy after prerequisite undergraduate coursework.",
    timeline: "Typically 4 years undergraduate study plus 2-3 years of OT graduate training and licensing preparation.",
    credentials: "Accredited OT degree, fieldwork, NBCOT exam in the U.S., state licensure, and specialty certifications later.",
    start: "Observe how someone completes a daily task and list barriers, adaptations, and independence goals."
  },
  "medical-laboratory-scientist": {
    education: "Usually requires a bachelor's degree in medical laboratory science, clinical laboratory science, biology, or a related lab field.",
    timeline: "Typically 4 years for a degree, including clinical rotations or laboratory practicum requirements.",
    credentials: "MLS/CLS certification such as ASCP where expected, lab safety training, clinical rotations, and quality-control experience.",
    start: "Research one certification path and learn how a common lab test moves from specimen collection to result reporting."
  },
  "data-scientist": {
    education: "Many roles expect a bachelor's or master's degree in statistics, computer science, math, economics, data science, or a domain field.",
    timeline: "Usually 4 years for entry-level degree preparation, with 6-18 additional months of portfolio building for many applicants.",
    credentials: "Python/R projects, statistics knowledge, notebooks, model reports, SQL, internships, and domain-specific analysis examples.",
    start: "Build one notebook that answers a real question and clearly explains assumptions, uncertainty, and limitations."
  },
  "robotics-engineer": {
    education: "A bachelor's degree in mechanical, electrical, robotics, computer, or mechatronics engineering is commonly expected.",
    timeline: "Typically 4 years for entry-level engineering roles, with graduate study helpful for advanced research robotics.",
    credentials: "Robot projects, CAD, programming, controls, electronics, internships, competitions, and technical documentation.",
    start: "Build or simulate a small robot behavior and document sensors, actuators, control logic, and test results."
  },
  "aerospace-engineer": {
    education: "A bachelor's degree in aerospace engineering, mechanical engineering, or a closely related field is usually required.",
    timeline: "Typically 4 years for entry-level roles, with graduate study common for specialized research or advanced design areas.",
    credentials: "Engineering projects, simulation tools, internships, lab testing, FE/PE path for some roles, and security clearance for some employers.",
    start: "Create a simple flight-design comparison and explain lift, drag, stability, materials, and testing questions."
  },
  "interior-designer": {
    education: "Interior design degrees or certificates help; some states or commercial roles require formal education and exams.",
    timeline: "Often 2-4 years of design education plus portfolio work and supervised experience for credentialed paths.",
    credentials: "Portfolio, CAD/design software, material knowledge, building-code awareness, internships, and NCIDQ for some professional roles.",
    start: "Redesign one room for a specific user and document constraints, layout, materials, lighting, and accessibility choices."
  },
  librarian: {
    education: "Many professional librarian roles require a master's degree in library and information science; assistant roles may not.",
    timeline: "Typically 4 years undergraduate study plus 1-2 years for an MLIS for many librarian positions.",
    credentials: "MLIS for many roles, research support experience, cataloging or digital systems skill, teaching/programming examples, and subject expertise.",
    start: "Create a research guide for a topic and compare public, school, academic, and special librarian requirements."
  },
  "film-editor": {
    education: "Film, media, communications, or digital production programs can help, but an editing reel and practical projects are essential.",
    timeline: "2-4 years through school or self-directed production work, with ongoing portfolio building through projects and assistant roles.",
    credentials: "Editing reel, software skill, storytelling samples, assistant editor experience, file workflow knowledge, and client/director feedback examples.",
    start: "Edit a short sequence and save versions showing how pacing, sound, and shot order changed the story."
  }
});

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

const progressKey = "pathdiscover.lessonProgress";
const legacyProgressKey = "joblingo.lessonProgress";
let activeCareerId = careers[0].id;
let lessonProgress = readProgress();

const careerGrid = document.querySelector("#career-grid");
const careerSearch = document.querySelector("#career-search");
const fieldFilter = document.querySelector("#field-filter");
const careerSelect = document.querySelector("#career-select");
const lessonList = document.querySelector("#lesson-list");
const lessonCareerTitle = document.querySelector("#lesson-career-title");
const lessonCareerSummary = document.querySelector("#lesson-career-summary");
const classroomHeroImage = document.querySelector("#classroom-hero-image");
const classroomHeroCaption = document.querySelector("#classroom-hero-caption");
const progressLabel = document.querySelector("#progress-label");
const pathProgressBar = document.querySelector("#path-progress-bar");
const matchForm = document.querySelector("#match-form");
const matchButton = document.querySelector("#match-button");
const matchResults = document.querySelector("#match-results");
const careerCount = document.querySelector("#career-count");
const miniClassCount = document.querySelector("#mini-class-count");
const exploreCount = document.querySelector("#explore-count");

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey) || localStorage.getItem(legacyProgressKey)) || {};
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
  const progressPercent = Math.round((completed / total) * 100);
  const initials = career.title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return `
    <article class="career-card">
      <div class="career-card-top">
        <div class="card-meta">
          <span class="tag field-tag">${career.field}</span>
          <span class="tag">${total} classes</span>
        </div>
      </div>
      <div class="career-title-row">
        <span class="career-icon" aria-hidden="true">${initials}</span>
        <h3>${career.title}</h3>
      </div>
      <p class="career-summary">${career.summary}</p>
      <div class="career-section" aria-label="${career.title} fit">
        <span class="mini-label">Best for</span>
        <div class="fit-chips">
          ${career.traits.slice(0, 3).map((trait) => `<span>${trait}</span>`).join("")}
        </div>
      </div>
      <div class="career-section" aria-label="${career.title} starter skills">
        <span class="mini-label">Starter skills</span>
        <div class="skill-strip">
          ${career.skills.slice(0, 3).map((skill) => `<span>${skill}</span>`).join("")}
        </div>
      </div>
      <div class="try-first">
        <span class="mini-label">Try first</span>
        <p>${career.startingPoint}</p>
      </div>
      <div class="career-card-footer">
        <div class="progress-summary">
          <span class="mini-label">Progress</span>
          <strong>${completed}/${total} classes</strong>
          <div class="card-progress" aria-label="${career.title} class progress">
            <span style="width: ${progressPercent}%"></span>
          </div>
        </div>
        <button class="button secondary" type="button" data-career-id="${career.id}">
          Start path
        </button>
      </div>
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

function getClassDeepDive(career, lesson, guide, index) {
  if (lesson.type === "prerequisites") {
    return `Before choosing ${career.title}, study the path into the work like a map. Look for the education or training people usually complete, the credentials employers trust, the timeline, and the first low-risk way to test interest. This class should leave you with a realistic picture of what preparation costs in time, attention, and support.`;
  }

  const practiceContext = index === 1
    ? "daily reality"
    : index === 2
      ? "core skill building"
      : index === 3
        ? "workplace judgment"
        : "proof of interest";

  return `This class goes deeper than a definition. In ${career.title}, the ${practiceContext} is shaped by ${career.workStyle.toLowerCase()}. As you work through it, connect the lesson objective to one real person, one real setting, and one decision you would need to make. The goal is to understand how the role feels in practice, not just memorize what the title means.`;
}

function getPracticePlan(career, lesson, guide, index) {
  const primarySkill = guide.skill || career.skills[0];

  return [
    `Read the objective and restate it in your own words as a question about ${career.title}.`,
    `Spend 10 minutes finding one real example from ${career.field.toLowerCase()} work: a job post, day-in-the-life video, article, tool, or workflow.`,
    `Complete the activity using ${primarySkill.toLowerCase()} as your focus skill, then write what felt natural and what felt confusing.`,
    `Save one sentence explaining whether this class made ${career.title} more interesting, less interesting, or still uncertain.`
  ];
}

function getLessonVocabulary(career, guide) {
  const skill = guide.skill || career.skills[0];

  return [
    `${skill}: a practical ability you can practice and show through a small example.`,
    `${career.field}: the broader work area this role belongs to, with adjacent paths you can compare.`,
    "Tradeoff: a decision where improving one thing may make another thing harder."
  ];
}

function getReadinessChecklist(career, lesson, guide) {
  return [
    `I can explain what this class teaches about ${career.title} without using jargon.`,
    `I can name one task, one tool or skill, and one person affected by this work.`,
    "I have one saved note, sketch, checklist, or example that proves I tried the activity."
  ];
}

function getRealWorldScenario(career, lesson, guide, index) {
  if (lesson.type === "prerequisites") {
    return `Imagine you are comparing two ways into ${career.title}: one formal program and one lower-cost first exposure option. Your job is to decide which path gives you the clearest evidence that the work fits before you spend serious time or money.`;
  }

  const scenarios = [
    `A beginner shadows a ${career.title} for one hour and must explain what the role actually does to a friend who has never heard of it.`,
    `A team asks for help with a small ${career.field.toLowerCase()} problem, and you need to decide which information matters before suggesting a next step.`,
    `Someone is stuck because ${lesson.activity.toLowerCase()} feels too broad, so you narrow it into a specific example they can finish today.`,
    `A mentor asks you to prove that you understand ${career.title} beyond the job title, using one artifact and one honest reflection.`
  ];

  return scenarios[Math.max(index - 1, 0) % scenarios.length];
}

function getCommonMistakes(career, lesson, guide) {
  return [
    `Only reading about ${career.title} instead of trying a small task connected to ${guide.skill.toLowerCase()}.`,
    "Choosing a path because the title sounds impressive without checking the daily work style.",
    "Skipping reflection; the point is to notice fit, not to force yourself to like every career."
  ];
}

function getMentorQuestions(career, lesson, guide) {
  return [
    `What does a strong beginner example of ${guide.skill.toLowerCase()} look like in this field?`,
    `Which part of ${career.title} surprises most people after they see the real work?`,
    "What would you tell someone to practice first if they had only one week?"
  ];
}

function getClassWrapUp(career, lesson, guide) {
  return `By the end of this class, you should have one clearer opinion about ${career.title}: what attracts you, what concerns you, and what you would test next. If you are still unsure, that is useful data too; compare this path with another role in ${career.field} and look for the work style that feels more natural.`;
}

const classImageKeys = [
  "00-prerequisites",
  "01-career-reality",
  "02-core-skills",
  "03-decision-making",
  "04-portfolio"
];

function fieldToImageSlug(field) {
  return field
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getClassImageSrc(index) {
  const key = classImageKeys[Math.min(index, classImageKeys.length - 1)];
  return `images/classes/${key}.jpg`;
}

function getFieldImageSrc(career) {
  return `images/fields/${fieldToImageSlug(career.field)}.jpg`;
}

function escapeAttr(value) {
  return String(value).replace(/"/g, "&quot;");
}

function getLessonImageAlt(career, lesson, index) {
  return `${career.title} class ${index + 1}: ${lesson.title}`;
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

  if (classroomHeroImage) {
    classroomHeroImage.src = getFieldImageSrc(career);
    classroomHeroImage.alt = `${career.field} career path: ${career.title}`;
  }

  if (classroomHeroCaption) {
    classroomHeroCaption.textContent = `${career.field} · ${lessons.length} classes`;
  }

  lessonList.innerHTML = lessons
    .map((lesson, index) => {
      const lessonId = `${career.id}-${index}`;
      const isComplete = completedLessons.includes(index);
      const guide = getLessonGuide(career, lesson, index);

      return `
        <article class="lesson-card ${isComplete ? "completed" : ""}">
          <figure class="lesson-media">
            <img
              src="${getClassImageSrc(index)}"
              alt="${escapeAttr(getLessonImageAlt(career, lesson, index))}"
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p class="eyebrow">Class ${index + 1}</p>
          <h3>${lesson.title}</h3>
          <div class="lesson-tags" aria-label="Lesson focus">
            <span class="tag">Focus: ${guide.focus}</span>
            <span class="tag">Skill: ${guide.skill}</span>
          </div>
          <p>${lesson.objective}</p>
          <dl>
            <div class="wide-note">
              <dt>Class deep dive</dt>
              <dd>${getClassDeepDive(career, lesson, guide, index)}</dd>
            </div>
            <div>
              <dt>Why it matters</dt>
              <dd>${guide.why}</dd>
            </div>
            <div>
              <dt>Try this</dt>
              <dd>${lesson.activity}</dd>
            </div>
            <div class="wide-note">
              <dt>Practice plan</dt>
              <dd>
                <ol class="lesson-steps">
                  ${getPracticePlan(career, lesson, guide, index).map((step) => `<li>${step}</li>`).join("")}
                </ol>
              </dd>
            </div>
            <div class="wide-note">
              <dt>Real-world scenario</dt>
              <dd>${getRealWorldScenario(career, lesson, guide, index)}</dd>
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
              <dt>Common mistakes</dt>
              <dd>
                <ul class="lesson-steps compact">
                  ${getCommonMistakes(career, lesson, guide).map((mistake) => `<li>${mistake}</li>`).join("")}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Vocabulary to know</dt>
              <dd>
                <ul class="lesson-steps compact">
                  ${getLessonVocabulary(career, guide).map((term) => `<li>${term}</li>`).join("")}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Ask a mentor</dt>
              <dd>
                <ul class="lesson-steps compact">
                  ${getMentorQuestions(career, lesson, guide).map((question) => `<li>${question}</li>`).join("")}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Reflect</dt>
              <dd>${guide.reflection}</dd>
            </div>
            <div>
              <dt>Proof to save</dt>
              <dd>${guide.proof}</dd>
            </div>
            <div>
              <dt>Ready to move on when</dt>
              <dd>
                <ul class="lesson-steps compact">
                  ${getReadinessChecklist(career, lesson, guide).map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Career insight</dt>
              <dd>${lesson.takeaway}</dd>
            </div>
            <div class="wide-note">
              <dt>Class wrap-up</dt>
              <dd>${getClassWrapUp(career, lesson, guide)}</dd>
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
  exploreCount.textContent = careers.length;
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
