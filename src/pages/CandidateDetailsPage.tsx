import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CandidateStatus } from '../types';

const statusColors = {
  under_review: 'bg-yellow-100 text-yellow-800',
  interview_scheduled: 'bg-blue-100 text-blue-800',
  rejected: 'bg-red-100 text-red-800',
  hired: 'bg-green-100 text-green-800',
};

export default function CandidateDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();

  const candidate = state.candidates.find((c) => c.id === id);
  const job = candidate ? state.jobs.find((j) => j.id === candidate.jobId) : null;

  if (!candidate || !job) return <div>Candidate not found</div>;

  const handleStatusChange = (newStatus: CandidateStatus) => {
    dispatch({
      type: 'UPDATE_CANDIDATE',
      payload: { ...candidate, status: newStatus },
    });
  };

  return (
    <div>
      <button
        onClick={() => navigate(`/jobs/${job.id}`)}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Job
      </button>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {candidate.name}
              </h1>
              <p className="text-gray-600">Applying for: {job.title}</p>
            </div>
            <select
              value={candidate.status}
              onChange={(e) =>
                handleStatusChange(e.target.value as CandidateStatus)
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

        <div className="px-6 py-4 space-y-4">
          <div className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-2" />
            <a
              href={`mailto:${candidate.email}`}
              className="hover:text-indigo-600"
            >
              {candidate.email}
            </a>
          </div>

          <div className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-2" />
            <a href={`tel:${candidate.phone}`} className="hover:text-indigo-600">
              {candidate.phone}
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Experience
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {candidate.experience}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Resume</h2>
            <a
              href={candidate.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
            >
              <FileText className="h-5 w-5 mr-2" />
              View Resume
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Application Details
            </h2>
            <p className="text-gray-600">
              Applied on:{' '}
              {new Date(candidate.appliedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}