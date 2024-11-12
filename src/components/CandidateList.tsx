import React from 'react';
import { FileText, Mail, Phone } from 'lucide-react';
import { Candidate } from '../types';

const statusColors = {
  under_review: 'bg-yellow-100 text-yellow-800',
  interview_scheduled: 'bg-blue-100 text-blue-800',
  rejected: 'bg-red-100 text-red-800',
  hired: 'bg-green-100 text-green-800',
};

interface CandidateListProps {
  candidates: Candidate[];
  onStatusChange: (candidateId: string, newStatus: Candidate['status']) => void;
}

export default function CandidateList({
  candidates,
  onStatusChange,
}: CandidateListProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <ul className="divide-y divide-gray-200">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {candidate.name}
                </h3>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-1" />
                  <span className="mr-4">{candidate.email}</span>
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{candidate.phone}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-900"
                >
                  <FileText className="h-5 w-5 mr-1" />
                  Resume
                </a>
                <select
                  value={candidate.status}
                  onChange={(e) =>
                    onStatusChange(
                      candidate.id,
                      e.target.value as Candidate['status']
                    )
                  }
                  className={`${
                    statusColors[candidate.status]
                  } px-3 py-1 rounded-full text-sm font-medium`}
                >
                  <option value="under_review">Under Review</option>
                  <option value="interview_scheduled">Interview Scheduled</option>
                  <option value="rejected">Rejected</option>
                  <option value="hired">Hired</option>
                </select>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}