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
  }
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
  const total = career.lessons.length;

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

function renderLessons() {
  const career = byActiveCareer();
  const completedLessons = getCompletedLessons(career.id);
  const progress = Math.round((completedLessons.length / career.lessons.length) * 100);

  lessonCareerTitle.textContent = `${career.title} class path`;
  lessonCareerSummary.textContent = `${career.summary} Start here: ${career.startingPoint}`;
  progressLabel.textContent = `${progress}%`;
  pathProgressBar.style.width = `${progress}%`;

  lessonList.innerHTML = career.lessons
    .map((lesson, index) => {
      const lessonId = `${career.id}-${index}`;
      const isComplete = completedLessons.includes(index);

      return `
        <article class="lesson-card ${isComplete ? "completed" : ""}">
          <p class="eyebrow">Class ${index + 1}</p>
          <h3>${lesson.title}</h3>
          <p>${lesson.objective}</p>
          <dl>
            <div>
              <dt>Try this</dt>
              <dd>${lesson.activity}</dd>
            </div>
            <div>
              <dt>Remember</dt>
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
