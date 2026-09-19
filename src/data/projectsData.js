/**
 * Featured Projects Dataset
 * Updated with Gurinderpal Singh's authentic projects from his resume.
 * 
 * 1. AgriSmart AI (AI & Agriculture Platform)
 * 2. InteractED (Cross-Platform Flutter CS Visualization App)
 * 3. Akal Student Support App (Campus Platform & Python Workflows)
 * 4. Exam Seating Plan Generator (Adopted by Akal University)
 * 5. Datesheet Generator (Automated Exam Scheduling Engine)
 */

export const projects = [
  {
    id: "agrismart-ai",
    title: "AgriSmart AI",
    subtitle: "Intelligent Smart Agriculture Platform",
    tagline: "Empowering farmers with data-driven crop recommendations, disease detection, weather insights, and AI assistance.",
    description: "An AI-powered smart agriculture platform providing crop recommendations, disease detection, weather insights, and agricultural guidance to support data-driven farming decisions.",
    problem: "Farmers frequently face reduced yields and economic vulnerability due to unguided crop selection, undetected crop diseases, and unpredictable weather shifts.",
    solution: "AgriSmart AI combines machine learning models with real-time weather data and an intelligent advisory chatbot, offering predictive crop matching, automated plant health diagnosis, and localized agricultural advisories.",
    technologies: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "React",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Intelligent crop recommendations based on soil & seasonal parameters",
      "Computer vision disease detection for timely plant health diagnosis",
      "Real-time localized weather monitoring and predictive insights",
      "AI agriculture chatbot for conversational farming queries and guidance",
      "Modular backend architecture with REST APIs and database integration"
    ],
    architecture: "Frontend built with responsive React components and Tailwind CSS; backend microservices powered by FastAPI delivering ML inference and integrating real-time meteorological APIs.",
    challenges: [
      "Structuring low-latency ML inference pipelines for rapid mobile responses.",
      "Designing an intuitive, accessible dashboard suitable for outdoor sunlight use."
    ],
    whatILearned: "Deepened practical expertise in integrating asynchronous FastAPI endpoints with modern React, orchestrating ML prediction pipelines, and building user-centric agricultural software.",
    featured: true,
    accent: "emerald",
    githubUrl: "https://github.com/Gurinder009/agrismart-ai",
    liveUrl: "https://github.com/Gurinder009",
    badge: "Featured Capstone · Aug 2026"
  },
  {
    id: "interacted",
    title: "InteractED",
    subtitle: "Interactive CS Visualization App",
    tagline: "Cross-platform mobile application rendering complex CS algorithm simulations with fluid 60 FPS animations.",
    description: "A cross-platform Android & iOS educational app featuring interactive Computer Science simulations including BFS, DFS, OSI Model, Virtual Memory/TLB, and ARP Spoofing.",
    problem: "Abstract computer science concepts like virtual memory translation, network layer handoffs, and graph search algorithms are notoriously difficult to master through static textbook diagrams.",
    solution: "InteractED renders step-by-step interactive animations at 60 FPS using custom Canvas painters and AnimationControllers, allowing students to step through, inspect memory states, and visualize network packets in real time.",
    technologies: [
      "Flutter",
      "Dart",
      "Material 3",
      "AnimationController",
      "Custom Canvas Painters",
      "Android & iOS"
    ],
    features: [
      "Interactive graph algorithm simulations (step-by-step BFS and DFS)",
      "Networking visualizations: OSI Model layer transitions & ARP Spoofing flow",
      "System architecture animations: Virtual Memory & Translation Lookaside Buffer (TLB)",
      "Engineered smooth 60 FPS animations using AnimationController, Tween, and custom Canvas painters",
      "Cross-platform deployment on Android & iOS from a unified Flutter codebase"
    ],
    architecture: "Single-codebase Flutter app engineered with Material 3 styling and low-level custom Canvas painters to achieve hardware-accelerated 60 FPS rendering of state machines and graphs.",
    challenges: [
      "Maintaining consistent 60 FPS performance during complex animated tree traversals.",
      "Crafting intuitive touch controls for mobile screens across varying display ratios."
    ],
    whatILearned: "Mastered Flutter animation engines, custom render pipelines with Dart, and translating academic theoretical concepts into engaging visual software.",
    featured: true,
    accent: "violet",
    githubUrl: "https://github.com/Gurinder009/interacted-cs-visualizer",
    liveUrl: "https://github.com/Gurinder009",
    badge: "Mobile App · Nov 2025"
  },
  {
    id: "akal-student-support",
    title: "Akal Student Support App",
    subtitle: "Campus Query & Workflow Management System",
    tagline: "Real-time student support ecosystem with Firebase Firestore and Python-automated report generation.",
    description: "A real-time student support application developed to streamline student queries, university support services, automated reporting, and secure multi-role authentication.",
    problem: "University students encounter administrative delays, fragmented communication, and lack of real-time visibility when submitting queries and support requests.",
    solution: "A centralized mobile platform built with Flutter and Firebase Firestore, integrating secure multi-role authentication (Student, Department Officer, Admin) and Python-based automated report generation.",
    technologies: [
      "Flutter",
      "Firebase Firestore",
      "Firebase Auth",
      "Python",
      "Role-Based Security"
    ],
    features: [
      "Real-time student query submission, categorization, and ticket tracking",
      "Secure multi-role authentication for students, faculty, and administrative staff",
      "Python-based automated report generation and data-processing workflows",
      "Live ticket updates and synchronized status tracking powered by Cloud Firestore",
      "Comprehensive administration panel to streamline campus support operations"
    ],
    architecture: "Flutter cross-platform client with real-time Firestore listeners, backed by Python automation scripts processing query analytics and generating structured executive reports.",
    challenges: [
      "Architecting granular security rules in Firebase for multi-tier user permissions.",
      "Optimizing data ingestion pipelines for Python-based automated reporting."
    ],
    whatILearned: "Co-led end-to-end development, gaining invaluable experience in full lifecycle software engineering, collaborative Git workflows, and university stakeholder management.",
    featured: true,
    accent: "indigo",
    githubUrl: "https://github.com/Gurinder009/akal-student-support-app",
    liveUrl: "https://github.com/Gurinder009",
    badge: "Lead Project · 2026"
  },
  {
    id: "exam-seating-generator",
    title: "Exam Seating Plan Generator",
    subtitle: "Institutional Automation System",
    tagline: "Automated seating arrangement engine officially adopted by Akal University, earning an Appreciation Letter.",
    description: "An automated Python system developed to generate examination seating arrangements for Akal University, eliminating days of manual scheduling with fast, error-free room allocations.",
    problem: "Manual preparation of examination seating charts required days of tedious scheduling, often producing room capacity mismatches, student proximity concerns, and logistical errors.",
    solution: "Engineered algorithmic allocation logic in Python that factors in room capacities, subject distributions, roll numbers, and anti-cheating spacing constraints to produce instant, verified seating plans.",
    technologies: [
      "Python",
      "Constraint Algorithms",
      "Data Processing",
      "Automation",
      "Institutional Tool"
    ],
    features: [
      "Automated student and room allocation logic for fast, reliable scheduling",
      "Smart room distribution enforcing capacity constraints and anti-cheating spacing",
      "Instant generation of printable seating charts and hall notices",
      "Replaced manual multi-day scheduling with an instant automated workflow",
      "Adopted by the institution and awarded an Appreciation Letter from Akal University"
    ],
    architecture: "Python optimization engine utilizing constraint-satisfaction heuristics to process candidate registries and room configurations with high efficiency.",
    challenges: [
      "Balancing room allocations across fluctuating student counts per branch.",
      "Ensuring students of the same course branch are never placed adjacent to one another."
    ],
    whatILearned: "Solved an urgent institutional bottleneck using practical algorithmic thinking; earned official appreciation and recognition from university leadership.",
    featured: false,
    accent: "blue",
    githubUrl: "https://github.com/Gurinder009/exam-seating-plan-generator",
    liveUrl: "https://github.com/Gurinder009",
    badge: "University Adopted · May 2026"
  },
  {
    id: "datesheet-generator",
    title: "Datesheet Generator",
    subtitle: "Automated Examination Scheduling Engine",
    tagline: "Python-driven scheduling system preventing exam clashes and optimizing academic timetable distribution.",
    description: "A Python-based system to automate university examination datesheet generation, implementing intelligent scheduling logic for organizing subjects, dates, and slots efficiently.",
    problem: "Scheduling multi-department university exams manually often causes subject clashes, back-to-back exam fatigue for students, and logistical headaches for exam boards.",
    solution: "Developed an automated Python engine implementing conflict-detection algorithms to organize courses, examination dates, and time slots into balanced, clash-free timetables.",
    technologies: [
      "Python",
      "Scheduling Logic",
      "Data Structures",
      "Workflow Automation"
    ],
    features: [
      "Zero-clash timetable generation across multi-semester academic programs",
      "Intelligent scheduling logic for organizing subjects, dates, and examination slots",
      "Optimized interval spacing to ensure fair preparation windows for students",
      "Replaced manual scheduling with a significantly faster and more reliable automated workflow",
      "Exportable formatted schedules for students, invigilators, and faculty heads"
    ],
    architecture: "Python automation pipeline with conflict matrix analysis, verifying clash constraints before finalizing output timetables.",
    challenges: [
      "Resolving inter-departmental elective conflicts without extending the university exam duration.",
      "Building structured output formats that align with institutional document requirements."
    ],
    whatILearned: "Mastered algorithmic scheduling heuristics, conflict matrix parsing, and automating administrative workflows.",
    featured: false,
    accent: "cyan",
    githubUrl: "https://github.com/Gurinder009/datesheet-generator",
    liveUrl: "https://github.com/Gurinder009",
    badge: "Automation Tool · 2026"
  }
];
