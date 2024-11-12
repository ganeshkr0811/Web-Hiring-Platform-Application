export const sampleJobs = [
  {
    id: '1',
    title: 'Senior React Developer',
    description: 'We are seeking an experienced React developer to join our team and help build scalable web applications.',
    requirements: [
      'Minimum 5 years of experience with React',
      'Strong understanding of state management',
      'Experience with TypeScript',
      'Knowledge of modern web technologies and best practices'
    ],
    createdAt: '2024-03-10T08:00:00.000Z',
    status: 'active'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    description: 'Looking for a full stack developer with experience in React, Node.js, and cloud technologies.',
    requirements: [
      'Experience with React and Node.js',
      'Knowledge of cloud platforms (AWS/Azure)',
      'Understanding of database design',
      'Strong problem-solving skills'
    ],
    createdAt: '2024-03-12T10:30:00.000Z',
    status: 'active'
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    description: 'Seeking a creative designer with a strong portfolio in UI/UX for web and mobile applications.',
    requirements: [
      '3+ years in UI/UX design',
      'Proficient in Figma or Adobe XD',
      'Strong understanding of user-centered design principles',
      'Experience with responsive design'
    ],
    createdAt: '2024-03-15T14:00:00.000Z',
    status: 'closed'
  }
];

export const sampleCandidates = [
  {
    id: '1',
    jobId: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 123-4567',
    resumeUrl: 'https://example.com/resume/sarah-johnson',
    status: 'interview_scheduled',
    appliedAt: '2024-03-11T09:15:00.000Z',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js'],
    experience: '7 years of experience in frontend development\nLed team of 5 developers\nImplemented major features for Fortune 500 clients'
  },
  {
    id: '2',
    jobId: '1',
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    phone: '(555) 987-6543',
    resumeUrl: 'https://example.com/resume/michael-chen',
    status: 'under_review',
    appliedAt: '2024-03-13T14:20:00.000Z',
    skills: ['React', 'JavaScript', 'AWS', 'GraphQL'],
    experience: '5 years of frontend development\nSpecialized in performance optimization\nContributed to open source projects'
  },
  {
    id: '3',
    jobId: '2',
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    phone: '(555) 567-8910',
    resumeUrl: 'https://example.com/resume/emily-davis',
    status: 'shortlisted',
    appliedAt: '2024-03-14T16:50:00.000Z',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    experience: '6 years as a full-stack developer\nExperience in REST API design and microservices\nWorked with agile teams to deliver scalable products'
  },
  {
    id: '4',
    jobId: '2',
    name: 'Raj Patel',
    email: 'raj.p@example.com',
    phone: '(555) 234-7890',
    resumeUrl: 'https://example.com/resume/raj-patel',
    status: 'interview_scheduled',
    appliedAt: '2024-03-15T08:30:00.000Z',
    skills: ['React', 'Node.js', 'AWS', 'GraphQL', 'Docker'],
    experience: '4 years in full-stack development\nSkilled in cloud deployment and scaling\nWorked with cross-functional teams to deliver on-time projects'
  },
  {
    id: '5',
    jobId: '3',
    name: 'Laura Kim',
    email: 'laura.k@example.com',
    phone: '(555) 678-1234',
    resumeUrl: 'https://example.com/resume/laura-kim',
    status: 'applied',
    appliedAt: '2024-03-16T11:15:00.000Z',
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'User Research'],
    experience: '5 years of experience in UI/UX design\nSpecializes in user-centered design\nCreated responsive designs for e-commerce and mobile applications'
  },
  {
    id: '6',
    jobId: '1',
    name: 'Carlos Rivera',
    email: 'carlos.r@example.com',
    phone: '(555) 321-8765',
    resumeUrl: 'https://example.com/resume/carlos-rivera',
    status: 'hired',
    appliedAt: '2024-03-17T10:10:00.000Z',
    skills: ['React', 'Redux', 'JavaScript', 'TypeScript'],
    experience: '8 years in frontend development\nExperienced with modern JavaScript frameworks\nLed frontend teams in agile environments'
  },
  {
    id: '7',
    jobId: '3',
    name: 'Aisha Khan',
    email: 'aisha.k@example.com',
    phone: '(555) 456-7891',
    resumeUrl: 'https://example.com/resume/aisha-khan',
    status: 'under_review',
    appliedAt: '2024-03-18T13:40:00.000Z',
    skills: ['UI/UX Design', 'Prototyping', 'Figma', 'InVision'],
    experience: '3 years in UI/UX design\nDeveloped wireframes and prototypes for mobile and web\nConducted user research and A/B testing to optimize user journeys'
  },
  {
    id: '8',
    jobId: '2',
    name: 'Ben Howard',
    email: 'ben.h@example.com',
    phone: '(555) 789-0123',
    resumeUrl: 'https://example.com/resume/ben-howard',
    status: 'rejected',
    appliedAt: '2024-03-19T14:30:00.000Z',
    skills: ['Full Stack Development', 'React', 'Node.js', 'MongoDB'],
    experience: '3 years in full-stack development\nWorked on scalable backend APIs\nImplemented UI components for React applications'
  },
  {
    id: '9',
    jobId: '1',
    name: 'Sophia Nguyen',
    email: 'sophia.n@example.com',
    phone: '(555) 654-3210',
    resumeUrl: 'https://example.com/resume/sophia-nguyen',
    status: 'applied',
    appliedAt: '2024-03-20T09:45:00.000Z',
    skills: ['React', 'Redux', 'JavaScript', 'CSS'],
    experience: '2 years in frontend development\nFocused on responsive web design\nContributed to open source projects in React'
  }
];


export const sampleAssessments = [
  {
    id: '1',
    jobId: '1',
    title: 'React Advanced Concepts',
    timeLimit: 45,
    questions: [
      {
        id: '1',
        question: 'What is the purpose of React.memo()?',
        options: [
          'To memoize component rendering',
          'To create a new component',
          'To handle form submissions',
          'To manage state'
        ],
        correctAnswer: 0
      },
      {
        id: '2',
        question: 'Which hook is used for side effects in React?',
        options: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '2',
    jobId: '2',
    title: 'Full Stack Development Skills',
    timeLimit: 60,
    questions: [
      {
        id: '1',
        question: 'Which of the following is used to build RESTful APIs in Node.js?',
        options: [
          'React',
          'Express',
          'Webpack',
          'Django'
        ],
        correctAnswer: 1
      },
      {
        id: '2',
        question: 'What is a primary advantage of using NoSQL databases over SQL databases?',
        options: [
          'Better scalability for large data',
          'Simpler syntax',
          'Increased security',
          'Automatic indexing'
        ],
        correctAnswer: 0
      }
    ]
  }
];
