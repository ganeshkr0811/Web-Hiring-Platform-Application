import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Job, Candidate, Assessment } from '../types';
import { sampleJobs, sampleCandidates, sampleAssessments } from '../utils/sampleData';

interface AppState {
  jobs: Job[];
  candidates: Candidate[];
  assessments: Assessment[];
}

type Action =
  | { type: 'ADD_JOB'; payload: Job }
  | { type: 'UPDATE_JOB'; payload: Job }
  | { type: 'DELETE_JOB'; payload: string }
  | { type: 'ADD_CANDIDATE'; payload: Candidate }
  | { type: 'UPDATE_CANDIDATE'; payload: Candidate }
  | { type: 'ADD_ASSESSMENT'; payload: Assessment }
  | { type: 'UPDATE_ASSESSMENT'; payload: Assessment }
  | { type: 'INITIALIZE_DATA' };

const initialState: AppState = {
  jobs: [],
  candidates: [],
  assessments: [],
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return {
        jobs: sampleJobs,
        candidates: sampleCandidates,
        assessments: sampleAssessments,
      };
    case 'ADD_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'UPDATE_JOB':
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    case 'DELETE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case 'ADD_CANDIDATE':
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
      };
    case 'UPDATE_CANDIDATE':
      return {
        ...state,
        candidates: state.candidates.map((candidate) =>
          candidate.id === action.payload.id ? action.payload : candidate
        ),
      };
    case 'ADD_ASSESSMENT':
      return {
        ...state,
        assessments: [...state.assessments, action.payload],
      };
    case 'UPDATE_ASSESSMENT':
      return {
        ...state,
        assessments: state.assessments.map((assessment) =>
          assessment.id === action.payload.id ? action.payload : assessment
        ),
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_DATA' });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}