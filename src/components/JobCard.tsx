import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users } from 'lucide-react';
import { Job } from '../types';
import { useApp } from '../context/AppContext';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const { state } = useApp();
  const candidateCount = state.candidates.filter(
    (candidate) => candidate.jobId === job.id
  ).length;

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
            <p className="mt-2 text-gray-600 line-clamp-2">{job.description}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{candidateCount} candidates</span>
          <span className="mx-2">•</span>
          <span>Posted {new Date(job.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}