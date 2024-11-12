import React from 'react';
import { Clock, FileText } from 'lucide-react';
import { Assessment } from '../types';
import { useApp } from '../context/AppContext';

interface AssessmentCardProps {
  assessment: Assessment;
}

export default function AssessmentCard({ assessment }: AssessmentCardProps) {
  const { state } = useApp();
  const job = state.jobs.find((j) => j.id === assessment.jobId);

  if (!job) return null;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {assessment.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">For: {job.title}</p>
          </div>
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{assessment.timeLimit} minutes</span>
          <span className="mx-2">•</span>
          <span>{assessment.questions.length} questions</span>
        </div>
      </div>
    </div>
  );
}