import React from 'react';
import { FileText, ClipboardList } from 'lucide-react';
import { DOWNLOADS } from '../constants';

const Syllabus: React.FC = () => {
  return (
    <section id="syllabus" className="py-20 px-4 md:px-8 bg-gray-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-light tracking-[0.1em] text-gray-900 mb-4 uppercase">
          Syllabus & Materials
        </h2>
        <p className="text-gray-500 font-light mb-10">
          Download the current syllabus and materials list before your first class.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href={DOWNLOADS.syllabus}
            download
            className="border border-gray-200 bg-white p-8 flex flex-col items-center gap-3 hover:border-gray-400 transition-colors"
          >
            <FileText size={32} strokeWidth={1} className="text-gray-700" />
            <span className="font-medium text-gray-900">Syllabus</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Download PDF</span>
          </a>

          <a
            href={DOWNLOADS.materialsList}
            download
            className="border border-gray-200 bg-white p-8 flex flex-col items-center gap-3 hover:border-gray-400 transition-colors"
          >
            <ClipboardList size={32} strokeWidth={1} className="text-gray-700" />
            <span className="font-medium text-gray-900">Materials List</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
