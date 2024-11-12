export type JobStatus = 'active' | 'archived' | 'draft';
export type CandidateStatus = 'under_review' | 'interview_scheduled' | 'rejected' | 'hired';

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  createdAt: string;
  status: JobStatus;
}

export interface Candidate {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  status: CandidateStatus;
  appliedAt: string;
  skills: string[];
  experience: string;
}

export interface Question {
  id: string;
  jobId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Assessment {
  id: string;
  jobId: string;
  title: string;
  questions: Question[];
  timeLimit: number; // in minutes
}