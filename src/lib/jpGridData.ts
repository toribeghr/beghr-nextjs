// AUTO-GENERATED runtime data for the job-placement [city] ISR route.
// Source: scripts/data/* + inline JP_INDUSTRIES. Regenerate via outputs/emit_jp_data.js.
// Do not hand-edit.

export type JpMetro = { name: string; slug: string; state: string; stateAbbr: string; region: string; blurb: string; nearby: string[] };
export type JpStat = { value: string; label: string };
export type JpIndustry = { name: string; stats: JpStat[]; costLogic: string; talentContext: string };

export const jpMetros: JpMetro[] = [
  {
    "name": "New York",
    "slug": "new-york",
    "state": "New York",
    "stateAbbr": "NY",
    "region": "Northeast",
    "blurb": "the largest professional labor market in the country, where compensation and counteroffers move fast",
    "nearby": [
      "newark",
      "jersey-city",
      "long-island"
    ]
  },
  {
    "name": "Los Angeles",
    "slug": "los-angeles",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a sprawling, multi-industry market where commute geography shapes who will actually take the role",
    "nearby": [
      "orange-county",
      "long-beach",
      "san-diego"
    ]
  },
  {
    "name": "Chicago",
    "slug": "chicago",
    "state": "Illinois",
    "stateAbbr": "IL",
    "region": "Midwest",
    "blurb": "the Midwest hub for finance, law, and professional services with deep but competitive talent pools",
    "nearby": [
      "naperville",
      "milwaukee",
      "indianapolis"
    ]
  },
  {
    "name": "Dallas",
    "slug": "dallas",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "one of the fastest-growing corporate relocation markets in the country, with constant demand for senior talent",
    "nearby": [
      "fort-worth",
      "plano",
      "arlington"
    ]
  },
  {
    "name": "Fort Worth",
    "slug": "fort-worth",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "a fast-growing DFW market where employers compete with Dallas for the same shortlist of candidates",
    "nearby": [
      "dallas",
      "arlington",
      "plano"
    ]
  },
  {
    "name": "Houston",
    "slug": "houston",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "an energy, healthcare, and industrial powerhouse where specialized roles are notoriously hard to fill",
    "nearby": [
      "the-woodlands",
      "sugar-land",
      "austin"
    ]
  },
  {
    "name": "Austin",
    "slug": "austin",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "a tech and professional-services boomtown where candidate demand consistently outpaces supply",
    "nearby": [
      "san-antonio",
      "houston",
      "dallas"
    ]
  },
  {
    "name": "San Antonio",
    "slug": "san-antonio",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "a growing market in healthcare, finance, and defense where retention pressure is high",
    "nearby": [
      "austin",
      "houston"
    ]
  },
  {
    "name": "Phoenix",
    "slug": "phoenix",
    "state": "Arizona",
    "stateAbbr": "AZ",
    "region": "West",
    "blurb": "a major inbound relocation market where rapid headcount growth strains local hiring pipelines",
    "nearby": [
      "scottsdale",
      "tempe",
      "tucson"
    ]
  },
  {
    "name": "Philadelphia",
    "slug": "philadelphia",
    "state": "Pennsylvania",
    "stateAbbr": "PA",
    "region": "Northeast",
    "blurb": "an established legal, healthcare, and pharma market with deep but heavily recruited talent",
    "nearby": [
      "king-of-prussia",
      "wilmington",
      "trenton"
    ]
  },
  {
    "name": "San Diego",
    "slug": "san-diego",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a biotech, defense, and healthcare hub where specialized candidates field multiple offers",
    "nearby": [
      "los-angeles",
      "orange-county"
    ]
  },
  {
    "name": "San Jose",
    "slug": "san-jose",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "the heart of Silicon Valley, where compensation benchmarks and counteroffers are the highest in the nation",
    "nearby": [
      "san-francisco",
      "oakland"
    ]
  },
  {
    "name": "San Francisco",
    "slug": "san-francisco",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a premium tech and finance market where the best candidates are passive and rarely on job boards",
    "nearby": [
      "san-jose",
      "oakland"
    ]
  },
  {
    "name": "Jacksonville",
    "slug": "jacksonville",
    "state": "Florida",
    "stateAbbr": "FL",
    "region": "South",
    "blurb": "a growing finance and healthcare market with a widening gap between open roles and local supply",
    "nearby": [
      "orlando",
      "tampa"
    ]
  },
  {
    "name": "Columbus",
    "slug": "columbus",
    "state": "Ohio",
    "stateAbbr": "OH",
    "region": "Midwest",
    "blurb": "an insurance, finance, and logistics center where mid-market employers compete for the same talent",
    "nearby": [
      "cincinnati",
      "cleveland"
    ]
  },
  {
    "name": "Charlotte",
    "slug": "charlotte",
    "state": "North Carolina",
    "stateAbbr": "NC",
    "region": "South",
    "blurb": "a major banking and financial-services hub with intense competition for finance and compliance talent",
    "nearby": [
      "raleigh",
      "greensboro"
    ]
  },
  {
    "name": "Indianapolis",
    "slug": "indianapolis",
    "state": "Indiana",
    "stateAbbr": "IN",
    "region": "Midwest",
    "blurb": "a logistics, manufacturing, and life-sciences market where specialized roles sit open for months",
    "nearby": [
      "chicago",
      "cincinnati"
    ]
  },
  {
    "name": "Seattle",
    "slug": "seattle",
    "state": "Washington",
    "stateAbbr": "WA",
    "region": "West",
    "blurb": "a tech and healthcare market with some of the highest compensation expectations outside the Bay Area",
    "nearby": [
      "bellevue",
      "tacoma"
    ]
  },
  {
    "name": "Denver",
    "slug": "denver",
    "state": "Colorado",
    "stateAbbr": "CO",
    "region": "West",
    "blurb": "a fast-growing relocation magnet where employers compete with lifestyle-driven candidate expectations",
    "nearby": [
      "boulder",
      "colorado-springs"
    ]
  },
  {
    "name": "Washington",
    "slug": "washington-dc",
    "state": "District of Columbia",
    "stateAbbr": "DC",
    "region": "Northeast",
    "blurb": "a legal, government-contracting, and association market where cleared and credentialed talent is scarce",
    "nearby": [
      "arlington-va",
      "bethesda",
      "baltimore"
    ]
  },
  {
    "name": "Boston",
    "slug": "boston",
    "state": "Massachusetts",
    "stateAbbr": "MA",
    "region": "Northeast",
    "blurb": "a biotech, healthcare, and higher-education hub where elite candidates are aggressively recruited",
    "nearby": [
      "cambridge",
      "providence"
    ]
  },
  {
    "name": "Nashville",
    "slug": "nashville",
    "state": "Tennessee",
    "stateAbbr": "TN",
    "region": "South",
    "blurb": "a healthcare-services capital and fast-growing corporate market with a tightening talent pool",
    "nearby": [
      "knoxville",
      "memphis"
    ]
  },
  {
    "name": "Detroit",
    "slug": "detroit",
    "state": "Michigan",
    "stateAbbr": "MI",
    "region": "Midwest",
    "blurb": "an automotive, engineering, and manufacturing market where technical leadership is hard to source",
    "nearby": [
      "ann-arbor",
      "grand-rapids"
    ]
  },
  {
    "name": "Oklahoma City",
    "slug": "oklahoma-city",
    "state": "Oklahoma",
    "stateAbbr": "OK",
    "region": "South",
    "blurb": "an energy, aerospace, and healthcare market where employers struggle to compete for senior candidates",
    "nearby": [
      "tulsa"
    ]
  },
  {
    "name": "Portland",
    "slug": "portland",
    "state": "Oregon",
    "stateAbbr": "OR",
    "region": "West",
    "blurb": "a tech, manufacturing, and healthcare market where specialized candidates weigh lifestyle heavily",
    "nearby": [
      "seattle",
      "vancouver-wa"
    ]
  },
  {
    "name": "Las Vegas",
    "slug": "las-vegas",
    "state": "Nevada",
    "stateAbbr": "NV",
    "region": "West",
    "blurb": "a hospitality, healthcare, and finance market growing faster than its local talent pipeline",
    "nearby": [
      "henderson",
      "phoenix"
    ]
  },
  {
    "name": "Memphis",
    "slug": "memphis",
    "state": "Tennessee",
    "stateAbbr": "TN",
    "region": "South",
    "blurb": "a logistics and healthcare hub where distribution and clinical roles outnumber available candidates",
    "nearby": [
      "nashville"
    ]
  },
  {
    "name": "Louisville",
    "slug": "louisville",
    "state": "Kentucky",
    "stateAbbr": "KY",
    "region": "South",
    "blurb": "a logistics, healthcare, and manufacturing market with persistent shortages in skilled professional roles",
    "nearby": [
      "cincinnati",
      "lexington"
    ]
  },
  {
    "name": "Baltimore",
    "slug": "baltimore",
    "state": "Maryland",
    "stateAbbr": "MD",
    "region": "Northeast",
    "blurb": "a healthcare, biotech, and government-adjacent market where credentialed talent is in short supply",
    "nearby": [
      "washington-dc",
      "bethesda"
    ]
  },
  {
    "name": "Milwaukee",
    "slug": "milwaukee",
    "state": "Wisconsin",
    "stateAbbr": "WI",
    "region": "Midwest",
    "blurb": "a manufacturing, finance, and healthcare market where mid-sized employers compete with Chicago",
    "nearby": [
      "chicago",
      "madison"
    ]
  },
  {
    "name": "Albuquerque",
    "slug": "albuquerque",
    "state": "New Mexico",
    "stateAbbr": "NM",
    "region": "West",
    "blurb": "a healthcare, defense, and tech market where specialized roles draw from a thin local pool",
    "nearby": [
      "santa-fe"
    ]
  },
  {
    "name": "Tucson",
    "slug": "tucson",
    "state": "Arizona",
    "stateAbbr": "AZ",
    "region": "West",
    "blurb": "a healthcare, defense, and education market where senior roles often require relocation sourcing",
    "nearby": [
      "phoenix"
    ]
  },
  {
    "name": "Fresno",
    "slug": "fresno",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "an agriculture, healthcare, and logistics market where professional roles are hard to fill locally",
    "nearby": [
      "sacramento",
      "bakersfield"
    ]
  },
  {
    "name": "Sacramento",
    "slug": "sacramento",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a government, healthcare, and finance market where public and private employers compete for talent",
    "nearby": [
      "san-francisco",
      "fresno"
    ]
  },
  {
    "name": "Kansas City",
    "slug": "kansas-city",
    "state": "Missouri",
    "stateAbbr": "MO",
    "region": "Midwest",
    "blurb": "an engineering, finance, and logistics market where mid-market firms struggle to fill senior seats",
    "nearby": [
      "st-louis",
      "omaha"
    ]
  },
  {
    "name": "Mesa",
    "slug": "mesa",
    "state": "Arizona",
    "stateAbbr": "AZ",
    "region": "West",
    "blurb": "a fast-growing Phoenix-area market with rising demand for healthcare and technical professionals",
    "nearby": [
      "phoenix",
      "scottsdale"
    ]
  },
  {
    "name": "Atlanta",
    "slug": "atlanta",
    "state": "Georgia",
    "stateAbbr": "GA",
    "region": "South",
    "blurb": "a corporate-headquarters and logistics hub where finance, tech, and legal talent is heavily recruited",
    "nearby": [
      "marietta",
      "alpharetta"
    ]
  },
  {
    "name": "Omaha",
    "slug": "omaha",
    "state": "Nebraska",
    "stateAbbr": "NE",
    "region": "Midwest",
    "blurb": "an insurance, finance, and healthcare market where employers compete hard for a limited candidate pool",
    "nearby": [
      "kansas-city",
      "des-moines"
    ]
  },
  {
    "name": "Colorado Springs",
    "slug": "colorado-springs",
    "state": "Colorado",
    "stateAbbr": "CO",
    "region": "West",
    "blurb": "a defense, aerospace, and healthcare market where cleared and specialized talent is scarce",
    "nearby": [
      "denver"
    ]
  },
  {
    "name": "Raleigh",
    "slug": "raleigh",
    "state": "North Carolina",
    "stateAbbr": "NC",
    "region": "South",
    "blurb": "a Research Triangle tech, biotech, and healthcare market where candidate demand runs hot",
    "nearby": [
      "durham",
      "charlotte"
    ]
  },
  {
    "name": "Miami",
    "slug": "miami",
    "state": "Florida",
    "stateAbbr": "FL",
    "region": "South",
    "blurb": "a finance, healthcare, and international-trade market where bilingual and senior talent is in demand",
    "nearby": [
      "fort-lauderdale",
      "west-palm-beach"
    ]
  },
  {
    "name": "Long Beach",
    "slug": "long-beach",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a logistics, healthcare, and port-economy market drawing from the same pool as greater Los Angeles",
    "nearby": [
      "los-angeles",
      "orange-county"
    ]
  },
  {
    "name": "Virginia Beach",
    "slug": "virginia-beach",
    "state": "Virginia",
    "stateAbbr": "VA",
    "region": "Northeast",
    "blurb": "a defense, healthcare, and logistics market where security-cleared talent is hard to source",
    "nearby": [
      "norfolk",
      "richmond"
    ]
  },
  {
    "name": "Oakland",
    "slug": "oakland",
    "state": "California",
    "stateAbbr": "CA",
    "region": "West",
    "blurb": "a Bay Area market where employers face the same premium compensation pressure as San Francisco",
    "nearby": [
      "san-francisco",
      "san-jose"
    ]
  },
  {
    "name": "Minneapolis",
    "slug": "minneapolis",
    "state": "Minnesota",
    "stateAbbr": "MN",
    "region": "Midwest",
    "blurb": "a Fortune 500 headquarters market in finance, healthcare, and retail with deep but contested talent",
    "nearby": [
      "saint-paul",
      "milwaukee"
    ]
  },
  {
    "name": "Tulsa",
    "slug": "tulsa",
    "state": "Oklahoma",
    "stateAbbr": "OK",
    "region": "South",
    "blurb": "an energy, aerospace, and healthcare market where senior roles often require relocation sourcing",
    "nearby": [
      "oklahoma-city"
    ]
  },
  {
    "name": "Tampa",
    "slug": "tampa",
    "state": "Florida",
    "stateAbbr": "FL",
    "region": "South",
    "blurb": "a finance, healthcare, and tech market growing faster than its local professional talent supply",
    "nearby": [
      "st-petersburg",
      "orlando"
    ]
  },
  {
    "name": "Arlington",
    "slug": "arlington",
    "state": "Texas",
    "stateAbbr": "TX",
    "region": "South",
    "blurb": "a Dallas-Fort Worth market where employers compete with both metros for the same shortlist",
    "nearby": [
      "dallas",
      "fort-worth"
    ]
  },
  {
    "name": "New Orleans",
    "slug": "new-orleans",
    "state": "Louisiana",
    "stateAbbr": "LA",
    "region": "South",
    "blurb": "a healthcare, energy, and hospitality market where specialized professional roles are hard to fill",
    "nearby": [
      "baton-rouge"
    ]
  },
  {
    "name": "Orlando",
    "slug": "orlando",
    "state": "Florida",
    "stateAbbr": "FL",
    "region": "South",
    "blurb": "a hospitality, healthcare, and tech-simulation market with rapid growth straining hiring pipelines",
    "nearby": [
      "tampa",
      "jacksonville"
    ]
  }
];

export const jpMetroSlugs: Set<string> = new Set(jpMetros.map(m => m.slug));

export const jpIndustries: Record<string, JpIndustry> = {
  "healthcare": {
    "name": "Healthcare",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "One travel nurse covering a permanent vacancy costs $15,000-$30,000 per month more than a permanent hire. A 90-day vacancy managed with travel staff can cost your organization $45,000-$90,000 in excess spend before the search even closes.",
    "talentContext": "Strong clinical candidates are actively recruited by multiple health systems. A passive nurse who opens up to a new opportunity typically accepts an offer within 2-3 weeks. A search process that takes 90 days is not competing for those candidates - it is competing for whoever is left."
  },
  "finance": {
    "name": "Finance",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A controller or senior finance manager at $130,000 per year costs roughly $11,000 per month in salary alone. Every month that role stays open, your team absorbs the work without the headcount - and your close process, audit readiness, and financial reporting accuracy all suffer.",
    "talentContext": "Senior finance and accounting professionals are rarely on job boards. A CPA or controller who decides they are open to a move will receive multiple offers within two to three weeks. A search that relies on posting and waiting will always see only the candidates everyone else already passed on."
  },
  "technology": {
    "name": "Technology",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A senior engineer billing at $150,000-$200,000 per year represents $4,000-$7,500 per week in sprint capacity. A vacant seat for 12 weeks means roughly $48,000-$90,000 in unshipped product or absorbed overload - before you factor in the compounding effect on the rest of the team.",
    "talentContext": "Software engineers and data scientists with in-demand skills receive multiple recruiter outreaches daily. When a strong candidate decides to make a move, they typically have an offer within two weeks. Passive candidates are the best candidates - and they are not responding to job board postings."
  },
  "engineering": {
    "name": "Engineering",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant engineering seat does not just mean one person's workload goes uncovered - it means project milestones slip, client commitments get missed, and your firm's reputation takes the hit. For most engineering firms, a delayed project costs more per week than the annual salary of the role that needs to be filled.",
    "talentContext": "Licensed engineers, especially PE-stamped professionals, are scarce and passively employed. They are not posting their resume on Indeed. When one opens up to a new opportunity, they receive offers quickly. A proactive sourcing approach is the only reliable way to reach this candidate pool."
  },
  "executive": {
    "name": "Executive",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than traditional executive search"
      }
    ],
    "costLogic": "An empty C-suite seat rarely stays quiet. Organizations fill the gap with external consultants ($200-$400/hour), fractional executives, or board member time - all of which cost more than the role itself. Beyond the direct cost, strategic decisions get delayed, teams lose direction, and competitors gain ground. The longer the vacancy, the more expensive the outcome.",
    "talentContext": "Senior executives are never on job boards. A CEO or VP who is open to a new opportunity is having private conversations, not submitting applications. Our sourcing approach is built around confidential outreach - proactively identifying and approaching passive candidates who would never surface through a posting."
  },
  "trades": {
    "name": "Skilled Trades",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "Overtime to cover one unfilled trades position costs $3,000-$5,000 per week at 1.5x base pay rates. At 12 weeks, that is $36,000-$60,000 in excess labor cost - before counting missed production quotas, reduced throughput, and equipment underutilization. A 23-35 day search eliminates the bulk of that exposure.",
    "talentContext": "Licensed and certified tradespeople - electricians, HVAC techs, welders, machinists - are in short supply and high demand. When a certified tradesperson becomes available, multiple employers reach out immediately. A reactive search that waits for applications will consistently miss the most qualified candidates."
  },
  "accounting-cpa": {
    "name": "Accounting & CPA",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A senior accounting vacancy does not just sit idle. It delays month-end close, stretches audit timelines, and pushes work onto a team that is already at capacity. A controller seat open for 90 days can cost a company a late close, a strained audit, and roughly $33,000 in absorbed overhead before the search even ends.",
    "talentContext": "The best accountants and CPAs are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "sales": {
    "name": "Sales",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "An open sales seat is not a paused cost, it is lost revenue. The territory goes uncovered, the pipeline that rep should be building never gets built, and deals that needed an owner slip to next quarter. An AE seat carrying a $600K number that sits open for 90 days can quietly cost the business $150,000 in unbooked pipeline before the search even closes.",
    "talentContext": "The reps and leaders worth hiring are already employed, hitting their number, and contacted by recruiters constantly. When one of them opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "cybersecurity": {
    "name": "Cybersecurity",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "An open security role is risk you are carrying in real time. Alerts go uninvestigated, audit and compliance deadlines slip, and the work piles onto an already-stretched team that starts eyeing the exit. A security engineer seat open for 90 days can mean missed audit windows, deferred remediation, and roughly $45,000 in absorbed risk and overhead before the search ends.",
    "talentContext": "The best security professionals are employed, performing, and contacted by recruiters constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time."
  },
  "insurance": {
    "name": "Insurance",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "An open underwriting or production seat does not just sit idle. Submissions go unquoted, renewals get rushed, and revenue that should be bound walks to a competing carrier or agency. An underwriter seat open for 90 days can cost an agency lost new business, strained renewals, and roughly $27,000 in absorbed overhead before the search even ends.",
    "talentContext": "The best underwriters, producers, and claims leaders are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "hr": {
    "name": "HR",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "An open HR leadership seat slows the entire company down. Open requisitions sit unfilled, onboarding stalls, compliance and employee-relations issues go unmanaged, and the rest of the team absorbs the load. An HR director seat open for 90 days can mean stalled hiring, mounting compliance exposure, and roughly $25,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best HR and people-ops leaders are employed, performing well, and selectively recruited. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "construction-management": {
    "name": "Construction Management",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "An open project management or field seat does not just sit idle, it puts a job at risk. Schedules slip, change orders stack up, subs go unmanaged, and margin erodes on work that was already bid tight. A PM seat open for 90 days can cost a delayed schedule, blown budget, and roughly $30,000 in absorbed overhead before the search even ends.",
    "talentContext": "The best construction managers, estimators, and superintendents are employed, running jobs, and recruited constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "supply-chain": {
    "name": "Supply Chain",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A supply chain vacancy does not just sit idle. It delays shipments, inflates expedite costs, and lets supplier and inventory risk compound while no one owns the network. A leadership seat open for 90 days can cost a company stockouts, blown freight budgets, and roughly $31,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best supply chain and logistics operators are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "marketing": {
    "name": "Marketing",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A marketing vacancy does not just sit idle. It freezes campaigns, lets pipeline targets slip, and pushes strategy onto a team that is already executing at capacity. A director seat open for 90 days can cost a company a quarter of lost demand, drifting brand work, and roughly $28,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best marketing leaders and growth operators are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "banking": {
    "name": "Banking",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A banking vacancy does not just sit idle. It stalls loan production, leaves regulatory coverage thin, and pushes relationships onto colleagues already carrying full books. A lender seat open for 90 days can cost a bank lost deals, examiner findings, and roughly $34,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best lenders, analysts, and compliance officers are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "biotech": {
    "name": "Biotech",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A biotech vacancy does not just sit idle. It pushes trial milestones, delays regulatory submissions, and lets quality and compliance work pile onto a team already racing a clock. A clinical or regulatory seat open for 90 days can cost a company a slipped milestone, a delayed filing, and roughly $37,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best clinical, regulatory, and quality professionals are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "manufacturing": {
    "name": "Manufacturing",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A manufacturing vacancy does not just sit idle. It drags throughput, strains safety and quality oversight, and pushes line decisions onto supervisors already covering their own work. A plant leadership seat open for 90 days can cost a company missed output, scrap and rework, and roughly $30,000 in absorbed overhead before the search even ends.",
    "talentContext": "The best plant managers, operations directors, and quality leaders are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "dental": {
    "name": "Dental",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A dental vacancy does not just sit idle. It leaves chairs empty, pushes patients out on the schedule, and loads clinical and front-office work onto a team already covering gaps. An associate or manager seat open for 90 days can cost a practice lost production, delayed treatment plans, and roughly $25,500 in absorbed overhead before the search even ends.",
    "talentContext": "The best associate dentists, specialists, and practice managers are employed, producing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "nonprofit": {
    "name": "Nonprofit",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant leadership seat does not just pause work. It stalls grant cycles, lets donor relationships cool, and pushes program delivery onto staff who are already underpaid and overextended. A development director seat open for 90 days can mean a missed grant deadline, a lapsed major-gift ask, and roughly $25,000 in absorbed overhead before a hire is made.",
    "talentContext": "The strongest nonprofit leaders are employed, committed to a current mission, and quietly courted by larger organizations. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A job board posting almost never reaches that person."
  },
  "real-estate": {
    "name": "Real Estate",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant management seat does not sit quietly. It slows leasing, delays maintenance, and lets tenant relationships fray across the portfolio. A property manager seat open for 90 days can cost a firm rising vacancy, deferred capital projects, and roughly $27,000 in absorbed overhead before the search closes.",
    "talentContext": "The best property and asset managers are employed, hitting their numbers, and contacted constantly by competing firms. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "energy": {
    "name": "Energy",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant project or engineering seat does not just slow work. It pushes back milestones, idles crews and equipment, and risks safety and compliance gaps on active sites. A project manager seat open for 90 days can cost an operator missed deadlines, contractor penalties, and roughly $34,500 in absorbed overhead before the search ends.",
    "talentContext": "The best energy engineers and project leaders are employed, executing on active projects, and recruited constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time."
  },
  "architecture": {
    "name": "Architecture",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant architect seat does not just slow a project. It pushes deadlines, forces a firm to decline new commissions, and stretches the remaining team past capacity. A project architect seat open for 90 days can cost a firm lost billable hours, a turned-down project, and roughly $28,500 in absorbed overhead before the search closes.",
    "talentContext": "The best architects and design leaders are employed, working on projects they care about, and recruited regularly by competing firms. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "hospitality": {
    "name": "Hospitality",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant leadership seat does not just create gaps in the schedule. It lets service quality slip, loosens cost control, and pushes the team toward turnover. A general manager seat open for 90 days can cost a property soft reviews, rising labor costs, and roughly $24,000 in absorbed overhead before a hire is made.",
    "talentContext": "The best hospitality leaders are employed, running strong operations, and recruited constantly across brands. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time."
  },
  "veterinary": {
    "name": "Veterinary",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant DVM seat does not just shorten the schedule. It caps appointment volume, lengthens client wait times, and burns out the doctors covering the gap. An associate veterinarian seat open for 90 days can cost a practice turned-away clients, staff turnover, and roughly $30,000 in absorbed overhead and lost production before the search ends.",
    "talentContext": "The best veterinarians and practice leaders are employed, fully booked, and contacted by recruiters constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time."
  },
  "government": {
    "name": "Government",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "A vacant program or contracts seat does not just slow paperwork. It puts deliverables behind schedule, opens compliance and reporting gaps, and exposes an award to penalties or loss. A program manager seat open for 90 days can cost an organization a missed milestone, an audit finding, and roughly $31,500 in absorbed overhead before the search closes.",
    "talentContext": "The best government and contracts professionals are employed, managing active awards, and recruited regularly across primes and agencies. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time."
  },
  "legal": {
    "name": "Legal",
    "stats": [
      {
        "value": "23-35",
        "label": "Days to fill on average"
      },
      {
        "value": "86%",
        "label": "Fill rate on active searches"
      },
      {
        "value": "~50%",
        "label": "Less than contingency pricing"
      }
    ],
    "costLogic": "One unfilled attorney seat billing 40 hours per week at $200 per hour is $8,000 in lost billable capacity every week. At 12 weeks, that is $96,000 in absorbed cost, not counting the overload on your current team or the work that went unbilled. A 23-35 day search closes that gap. A 90-day search using traditional methods does not.",
    "talentContext": "Strong lateral attorneys are passive. They are not posting resumes or responding to LinkedIn InMails. When they decide they are open to a move, that window is typically two to four weeks before they accept an offer, usually from a firm that was already in front of them. A slow search process does not find the best candidates. It finds whoever is still available after the market has already moved."
  }
};
