const TRAIT_IDS = [
  "builder",
  "analytical",
  "independent",
  "creative",
  "empathetic",
  "visual",
  "curious",
  "hands-on",
  "practical",
  "structured",
  "communicator",
  "resilient"
];

const DIMENSION_IDS = [
  "people",
  "data",
  "hands_on",
  "creative_work",
  "fast_pace",
  "steady_pace",
  "solo",
  "team"
];

const FIELD_TRAIT_PRIORS = {
  Technology: { builder: 0.4, analytical: 0.5, structured: 0.35, independent: 0.3, curious: 0.25 },
  "Creative Technology": { builder: 0.35, creative: 0.45, analytical: 0.35, curious: 0.3 },
  Design: { creative: 0.5, visual: 0.5, empathetic: 0.25, curious: 0.25 },
  Business: { analytical: 0.35, structured: 0.4, communicator: 0.3, practical: 0.3 },
  Finance: { analytical: 0.5, structured: 0.45, practical: 0.35, independent: 0.25 },
  Healthcare: { empathetic: 0.5, "hands-on": 0.4, resilient: 0.4, structured: 0.3 },
  "Human Services": { empathetic: 0.5, communicator: 0.45, resilient: 0.35, practical: 0.25 },
  Education: { communicator: 0.45, empathetic: 0.45, structured: 0.3, creative: 0.25 },
  "Skilled Trades": { "hands-on": 0.55, practical: 0.5, builder: 0.35, resilient: 0.3 },
  Engineering: { analytical: 0.45, builder: 0.4, structured: 0.4, practical: 0.3 },
  Science: { curious: 0.5, analytical: 0.5, structured: 0.35, "hands-on": 0.25 },
  Marketing: { creative: 0.4, communicator: 0.4, analytical: 0.3, curious: 0.25 },
  Media: { creative: 0.45, visual: 0.4, communicator: 0.35, curious: 0.25 },
  Operations: { structured: 0.45, practical: 0.4, analytical: 0.3, communicator: 0.25 },
  "Law & Public Service": { analytical: 0.4, communicator: 0.4, structured: 0.4, resilient: 0.3 },
  Hospitality: { communicator: 0.4, resilient: 0.4, "hands-on": 0.35, practical: 0.3 },
  "Public Safety": { resilient: 0.5, "hands-on": 0.4, practical: 0.4, communicator: 0.3 },
  Transportation: { practical: 0.4, structured: 0.4, resilient: 0.35, "hands-on": 0.3 },
  "Language & Communication": { communicator: 0.5, curious: 0.35, structured: 0.3, creative: 0.25 },
  "Customer Experience": { empathetic: 0.45, communicator: 0.45, practical: 0.3, resilient: 0.3 },
  "Human Resources": { communicator: 0.45, empathetic: 0.4, structured: 0.35, practical: 0.25 },
  Manufacturing: { "hands-on": 0.45, practical: 0.45, structured: 0.4, builder: 0.25 },
  Nonprofit: { empathetic: 0.45, communicator: 0.4, structured: 0.3, resilient: 0.3 },
  Agriculture: { "hands-on": 0.45, practical: 0.45, curious: 0.3, resilient: 0.3 },
  "Animal Care": { empathetic: 0.45, "hands-on": 0.45, practical: 0.35, resilient: 0.3 },
  Arts: { creative: 0.5, visual: 0.4, communicator: 0.3, "hands-on": 0.25 },
  Energy: { analytical: 0.4, "hands-on": 0.4, practical: 0.4, structured: 0.35 },
  "Real Estate": { communicator: 0.4, practical: 0.4, structured: 0.35, analytical: 0.25 }
};

const WORKSTYLE_DIMENSION_HINTS = [
  { pattern: /patient|people|donor|guest|student|client|community|care/i, dimensions: { people: 0.5 } },
  { pattern: /data|analy|research|model|metric|evidence|code|system|tech/i, dimensions: { data: 0.5 } },
  { pattern: /hands|site|tool|repair|build|install|clinical|kitchen|field/i, dimensions: { hands_on: 0.5 } },
  { pattern: /design|creative|visual|story|content|media|art/i, dimensions: { creative_work: 0.5 } },
  { pattern: /fast|urgent|shift|emergency|service call|rush/i, dimensions: { fast_pace: 0.45 } },
  { pattern: /steady|routine|accuracy|documentation|compliance|schedule/i, dimensions: { steady_pace: 0.45 } },
  { pattern: /independent|quiet|solo|deep focus|analysis/i, dimensions: { solo: 0.4 } },
  { pattern: /team|collaborat|coordinate|stakeholder|meeting|group/i, dimensions: { team: 0.4 } }
];

const quizQuestions = [
  {
    text: "When you get a big assignment, what part do you enjoy most?",
    answers: [
      { text: "Breaking it into a clear plan", traits: ["structured", "practical"], fields: ["Business", "Operations"], dimensions: { steady_pace: 2, data: 1 } },
      { text: "Imagining a creative direction", traits: ["creative", "visual"], fields: ["Design", "Media"], dimensions: { creative_work: 2, solo: 1 } },
      { text: "Finding patterns or hidden clues", traits: ["analytical", "curious"], fields: ["Science", "Technology"], dimensions: { data: 2, solo: 1 } },
      { text: "Helping the group feel confident", traits: ["empathetic", "communicator"], fields: ["Education", "Human Services"], dimensions: { people: 2, team: 1 } }
    ]
  },
  {
    text: "Which environment sounds most energizing?",
    answers: [
      { text: "A quiet space where I can build or analyze", traits: ["independent", "analytical"], fields: ["Technology", "Finance"], dimensions: { solo: 2, data: 1 } },
      { text: "A hands-on site where every day is practical", traits: ["hands-on", "builder"], fields: ["Skilled Trades", "Manufacturing"], dimensions: { hands_on: 2, fast_pace: 1 } },
      { text: "A team setting with lots of conversation", traits: ["communicator", "empathetic"], fields: ["Healthcare", "Customer Experience"], dimensions: { people: 2, team: 2 } },
      { text: "A creative room with sketches, ideas, and feedback", traits: ["creative", "visual"], fields: ["Design", "Arts"], dimensions: { creative_work: 2, team: 1 } }
    ]
  },
  {
    text: "What kind of problem do you naturally notice first?",
    answers: [
      { text: "A process that is disorganized", traits: ["structured", "practical"], fields: ["Operations", "Business"], dimensions: { steady_pace: 2, data: 1 } },
      { text: "A tool or system that could work better", traits: ["builder", "analytical"], fields: ["Technology", "Engineering"], dimensions: { data: 2, hands_on: 1 } },
      { text: "A person who needs clearer support", traits: ["empathetic", "communicator"], fields: ["Healthcare", "Human Services"], dimensions: { people: 2, team: 1 } },
      { text: "A question that needs evidence", traits: ["curious", "analytical"], fields: ["Science", "Finance"], dimensions: { data: 2, solo: 1 } }
    ]
  },
  {
    text: "Which compliment would mean the most to you?",
    answers: [
      { text: "You made this easier to understand", traits: ["communicator", "empathetic"], fields: ["Education", "Language & Communication"], dimensions: { people: 2, team: 1 } },
      { text: "You made something useful", traits: ["builder", "hands-on"], fields: ["Skilled Trades", "Technology"], dimensions: { hands_on: 2, practical: 1 } },
      { text: "You found the answer in the details", traits: ["analytical", "structured"], fields: ["Finance", "Science"], dimensions: { data: 2, steady_pace: 1 } },
      { text: "You came up with a fresh idea", traits: ["creative", "curious"], fields: ["Marketing", "Design"], dimensions: { creative_work: 2, solo: 1 } }
    ]
  },
  {
    text: "How do you prefer to learn a new skill?",
    answers: [
      { text: "Practice with tools and real examples", traits: ["hands-on", "practical"], fields: ["Skilled Trades", "Manufacturing"], dimensions: { hands_on: 2, fast_pace: 1 } },
      { text: "Watch people, ask questions, and discuss", traits: ["communicator", "empathetic"], fields: ["Healthcare", "Education"], dimensions: { people: 2, team: 2 } },
      { text: "Read, compare, and test my understanding", traits: ["analytical", "independent"], fields: ["Science", "Technology"], dimensions: { data: 2, solo: 2 } },
      { text: "Experiment until I find a style that works", traits: ["creative", "curious"], fields: ["Design", "Media"], dimensions: { creative_work: 2, solo: 1 } }
    ]
  },
  {
    text: "When a plan changes suddenly, what do you do first?",
    answers: [
      { text: "Rebuild the steps and priorities", traits: ["structured", "resilient"], fields: ["Operations", "Public Safety"], dimensions: { steady_pace: 2, team: 1 } },
      { text: "Check what people need from me", traits: ["empathetic", "communicator"], fields: ["Healthcare", "Customer Experience"], dimensions: { people: 2, team: 2 } },
      { text: "Look for the root cause or missing data", traits: ["analytical", "curious"], fields: ["Technology", "Science"], dimensions: { data: 2, solo: 1 } },
      { text: "Try a practical workaround quickly", traits: ["practical", "hands-on"], fields: ["Transportation", "Skilled Trades"], dimensions: { hands_on: 2, fast_pace: 2 } }
    ]
  },
  {
    text: "Which school or work project would you pick?",
    answers: [
      { text: "Build a useful tool or prototype", traits: ["builder", "hands-on"], fields: ["Technology", "Engineering"], dimensions: { hands_on: 2, data: 1 } },
      { text: "Design a poster, interface, room, or story", traits: ["creative", "visual"], fields: ["Design", "Arts"], dimensions: { creative_work: 2, solo: 1 } },
      { text: "Analyze a dataset and explain the pattern", traits: ["analytical", "structured"], fields: ["Finance", "Science"], dimensions: { data: 2, steady_pace: 1 } },
      { text: "Interview people and turn needs into a plan", traits: ["communicator", "empathetic"], fields: ["Human Services", "Marketing"], dimensions: { people: 2, team: 1 } }
    ]
  },
  {
    text: "What kind of responsibility feels most motivating?",
    answers: [
      { text: "Keeping people safe or supported", traits: ["empathetic", "resilient"], fields: ["Healthcare", "Public Safety"], dimensions: { people: 2, fast_pace: 1 } },
      { text: "Making a system reliable and organized", traits: ["structured", "practical"], fields: ["Operations", "Business"], dimensions: { steady_pace: 2, data: 1 } },
      { text: "Finding the smartest answer with evidence", traits: ["analytical", "curious"], fields: ["Science", "Finance"], dimensions: { data: 2, solo: 1 } },
      { text: "Creating something people can see or use", traits: ["creative", "builder"], fields: ["Design", "Media"], dimensions: { creative_work: 2, hands_on: 1 } }
    ]
  },
  {
    text: "How do you like to spend most of your working time?",
    answers: [
      { text: "Mostly independent focus with clear goals", traits: ["independent", "analytical"], fields: ["Technology", "Science"], dimensions: { solo: 2, data: 2 } },
      { text: "Moving around, fixing, building, or helping hands-on", traits: ["hands-on", "practical"], fields: ["Skilled Trades", "Agriculture"], dimensions: { hands_on: 2, fast_pace: 1 } },
      { text: "Talking with people, guiding, or coordinating", traits: ["communicator", "empathetic"], fields: ["Education", "Customer Experience"], dimensions: { people: 2, team: 2 } },
      { text: "Exploring ideas, visuals, experiments, or stories", traits: ["creative", "curious"], fields: ["Media", "Marketing"], dimensions: { creative_work: 2, solo: 1 } }
    ]
  },
  {
    text: "Which detail do you notice before other people?",
    answers: [
      { text: "A risk, mistake, or inconsistency", traits: ["structured", "analytical"], fields: ["Finance", "Law & Public Service"], dimensions: { data: 2, steady_pace: 1 } },
      { text: "A confusing experience someone is having", traits: ["empathetic", "communicator"], fields: ["Design", "Customer Experience"], dimensions: { people: 2, creative_work: 1 } },
      { text: "A better way to arrange or present something", traits: ["visual", "creative"], fields: ["Design", "Arts"], dimensions: { creative_work: 2, solo: 1 } },
      { text: "A tool, machine, or process that could work better", traits: ["hands-on", "builder"], fields: ["Engineering", "Manufacturing"], dimensions: { hands_on: 2, data: 1 } }
    ]
  },
  {
    text: "What pace sounds most sustainable for you?",
    answers: [
      { text: "Fast, active days with urgent problems", traits: ["resilient", "hands-on"], fields: ["Healthcare", "Hospitality"], dimensions: { fast_pace: 2, people: 1 } },
      { text: "Steady routines with room for accuracy", traits: ["structured", "practical"], fields: ["Finance", "Operations"], dimensions: { steady_pace: 2, data: 1 } },
      { text: "Deep research or analysis before decisions", traits: ["analytical", "independent"], fields: ["Science", "Technology"], dimensions: { solo: 2, data: 2 } },
      { text: "Project cycles with feedback and iteration", traits: ["creative", "communicator"], fields: ["Marketing", "Design"], dimensions: { creative_work: 2, team: 1 } }
    ]
  },
  {
    text: "If someone asked for your help, what would you prefer to improve?",
    answers: [
      { text: "Their confidence, care, or next step", traits: ["empathetic", "communicator"], fields: ["Human Services", "Healthcare"], dimensions: { people: 2, team: 1 } },
      { text: "Their workflow, checklist, or operations", traits: ["structured", "practical"], fields: ["Operations", "Business"], dimensions: { steady_pace: 2, data: 1 } },
      { text: "Their numbers, evidence, or decision logic", traits: ["analytical", "curious"], fields: ["Finance", "Science"], dimensions: { data: 2, solo: 1 } },
      { text: "Their product, message, design, or experience", traits: ["creative", "visual"], fields: ["Marketing", "Design"], dimensions: { creative_work: 2, people: 1 } }
    ]
  },
  {
    text: "Which work setting sounds most appealing?",
    answers: [
      { text: "Hospitals, clinics, or community care", traits: ["empathetic", "resilient"], fields: ["Healthcare"], dimensions: { people: 2, fast_pace: 1 } },
      { text: "Labs, offices, or research environments", traits: ["analytical", "curious"], fields: ["Science", "Finance"], dimensions: { data: 2, solo: 1 } },
      { text: "Studios, stages, media, or design teams", traits: ["creative", "visual"], fields: ["Media", "Arts"], dimensions: { creative_work: 2, team: 1 } },
      { text: "Job sites, shops, warehouses, or the field", traits: ["hands-on", "practical"], fields: ["Skilled Trades", "Transportation"], dimensions: { hands_on: 2, fast_pace: 1 } }
    ]
  },
  {
    text: "What type of impact do you want your work to have?",
    answers: [
      { text: "Help individuals directly in meaningful moments", traits: ["empathetic", "communicator"], fields: ["Healthcare", "Education"], dimensions: { people: 2 } },
      { text: "Improve systems, products, or technology people rely on", traits: ["builder", "analytical"], fields: ["Technology", "Engineering"], dimensions: { data: 2, hands_on: 1 } },
      { text: "Protect safety, compliance, or public trust", traits: ["structured", "resilient"], fields: ["Law & Public Service", "Public Safety"], dimensions: { steady_pace: 2, team: 1 } },
      { text: "Shape messages, brands, or experiences people notice", traits: ["creative", "communicator"], fields: ["Marketing", "Media"], dimensions: { creative_work: 2, people: 1 } }
    ]
  },
  {
    text: "When choosing a career path, what matters most?",
    answers: [
      { text: "Clear skills I can practice and prove", traits: ["practical", "hands-on"], fields: ["Skilled Trades", "Manufacturing"], dimensions: { hands_on: 2, steady_pace: 1 } },
      { text: "Intellectual challenge and evidence", traits: ["analytical", "curious"], fields: ["Science", "Finance"], dimensions: { data: 2, solo: 1 } },
      { text: "Working closely with people every day", traits: ["communicator", "empathetic"], fields: ["Human Services", "Customer Experience"], dimensions: { people: 2, team: 2 } },
      { text: "Freedom to create and refine ideas", traits: ["creative", "independent"], fields: ["Design", "Arts"], dimensions: { creative_work: 2, solo: 2 } }
    ]
  }
];

let careerProfiles = [];

function createEmptyVector(ids) {
  return Object.fromEntries(ids.map((id) => [id, 0]));
}

function addWeighted(target, source, multiplier = 1) {
  Object.entries(source).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + value * multiplier;
  });
}

function vectorMagnitude(vector, ids) {
  return Math.sqrt(ids.reduce((sum, id) => sum + (vector[id] || 0) ** 2, 0));
}

function cosineSimilarity(left, right, ids) {
  const magnitudeLeft = vectorMagnitude(left, ids);
  const magnitudeRight = vectorMagnitude(right, ids);
  if (!magnitudeLeft || !magnitudeRight) {
    return 0;
  }

  const dot = ids.reduce((sum, id) => sum + (left[id] || 0) * (right[id] || 0), 0);
  return dot / (magnitudeLeft * magnitudeRight);
}

function normalizeVector(vector, ids) {
  const magnitude = vectorMagnitude(vector, ids);
  if (!magnitude) {
    return { ...vector };
  }

  const normalized = createEmptyVector(ids);
  ids.forEach((id) => {
    normalized[id] = (vector[id] || 0) / magnitude;
  });
  return normalized;
}

function inferDimensionsFromText(text) {
  const dimensions = createEmptyVector(DIMENSION_IDS);
  WORKSTYLE_DIMENSION_HINTS.forEach(({ pattern, dimensions: hints }) => {
    if (pattern.test(text)) {
      addWeighted(dimensions, hints, 1);
    }
  });
  return dimensions;
}

function buildCareerProfile(career) {
  const traits = createEmptyVector(TRAIT_IDS);
  career.traits.forEach((trait, index) => {
    const weight = 1 - index * 0.12;
    traits[trait] = (traits[trait] || 0) + weight;
  });

  addWeighted(traits, FIELD_TRAIT_PRIORS[career.field] || {}, 0.55);

  const dimensions = inferDimensionsFromText(
    [career.workStyle, career.summary, career.fit, ...(career.skills || [])].join(" ")
  );

  career.traits.forEach((trait) => {
    if (trait === "empathetic" || trait === "communicator") {
      dimensions.people += 0.35;
      dimensions.team += 0.2;
    }
    if (trait === "analytical" || trait === "structured") {
      dimensions.data += 0.35;
    }
    if (trait === "hands-on" || trait === "builder") {
      dimensions.hands_on += 0.35;
    }
    if (trait === "creative" || trait === "visual") {
      dimensions.creative_work += 0.35;
    }
    if (trait === "independent") {
      dimensions.solo += 0.35;
    }
    if (trait === "resilient") {
      dimensions.fast_pace += 0.2;
    }
  });

  return {
    careerId: career.id,
    field: career.field,
    traits: normalizeVector(traits, TRAIT_IDS),
    dimensions: normalizeVector(dimensions, DIMENSION_IDS),
    traitKeys: [...new Set(career.traits)]
  };
}

function initCareerProfiles(careers) {
  careerProfiles = careers.map(buildCareerProfile);
}

function getSelectedAnswers(matchForm) {
  return quizQuestions.map((question, questionIndex) => {
    const selected = matchForm.querySelector(`input[name="question-${questionIndex}"]:checked`);
    return question.answers[Number(selected.value)];
  });
}

function buildUserProfile(matchForm) {
  const traitScores = createEmptyVector(TRAIT_IDS);
  const fieldScores = {};
  const dimensions = createEmptyVector(DIMENSION_IDS);

  getSelectedAnswers(matchForm).forEach((answer) => {
    answer.traits.forEach((trait, index) => {
      const weight = index === 0 ? 2.4 : 1.4;
      traitScores[trait] = (traitScores[trait] || 0) + weight;
    });

    (answer.fields || []).forEach((field, index) => {
      const weight = index === 0 ? 2.2 : 1.2;
      fieldScores[field] = (fieldScores[field] || 0) + weight;
    });

    addWeighted(dimensions, answer.dimensions || {}, 1);
  });

  return {
    traits: normalizeVector(traitScores, TRAIT_IDS),
    rawTraits: traitScores,
    fields: fieldScores,
    dimensions: normalizeVector(dimensions, DIMENSION_IDS)
  };
}

function scoreFieldAffinity(userFields, careerField) {
  const userScore = userFields[careerField] || 0;
  const maxFieldScore = Math.max(...Object.values(userFields), 0);
  if (!maxFieldScore) {
    return 0.45;
  }
  return userScore / maxFieldScore;
}

function calculateMatchScore(userProfile, careerProfile) {
  const traitSimilarity = cosineSimilarity(userProfile.traits, careerProfile.traits, TRAIT_IDS);
  const dimensionSimilarity = cosineSimilarity(userProfile.dimensions, careerProfile.dimensions, DIMENSION_IDS);
  const fieldAffinity = scoreFieldAffinity(userProfile.fields, careerProfile.field);

  const overlapBoost = careerProfile.traitKeys.reduce((boost, trait) => {
    return boost + (userProfile.rawTraits[trait] || 0) * 0.02;
  }, 0);

  const blended =
    traitSimilarity * 0.52 + dimensionSimilarity * 0.23 + fieldAffinity * 0.25 + Math.min(overlapBoost, 0.12);

  return Math.max(0, Math.min(1, blended));
}

function calculateMatches(careers, matchForm, limit = 8) {
  if (!careerProfiles.length) {
    initCareerProfiles(careers);
  }

  const userProfile = buildUserProfile(matchForm);
  const maxRawTrait = Math.max(...Object.values(userProfile.rawTraits), 1);

  const ranked = careerProfiles
    .map((profile) => {
      const career = careers.find((item) => item.id === profile.careerId);
      const similarity = calculateMatchScore(userProfile, profile);
      const matchScore = Math.round(42 + similarity * 56);

      const sharedTraits = profile.traitKeys.filter((trait) => {
        const userWeight = userProfile.rawTraits[trait] || 0;
        return userWeight >= maxRawTrait * 0.45;
      });

      return {
        ...career,
        matchScore,
        similarity,
        sharedTraits: sharedTraits.length ? sharedTraits : profile.traitKeys.slice(0, 2),
        matchedField: profile.field
      };
    })
    .sort((a, b) => {
      if (b.similarity !== a.similarity) {
        return b.similarity - a.similarity;
      }
      return a.title.localeCompare(b.title);
    });

  return ranked.slice(0, limit);
}

window.PathDiscoverMatching = {
  quizQuestions,
  initCareerProfiles,
  calculateMatches,
  buildUserProfile,
  TRAIT_IDS
};
