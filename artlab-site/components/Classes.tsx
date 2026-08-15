import React from 'react';
import { CLASSES } from '../constants';

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-20 px-4 md:px-8 bg-white max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-[0.1em] text-gray-900 mb-4 uppercase">
          Classes
        </h2>
        <p className="text-gray-500 font-light max-w-xl mx-auto">
          Art Lab offers small-group classes for students of all ages, plus workshops for teachers
          who want to bring new techniques into their own classrooms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CLASSES.map((c) => (
          <div key={c.id} className="border border-gray-100 p-8 flex flex-col">
            <h3 className="text-lg font-medium tracking-wide text-gray-900 mb-2">{c.title}</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{c.audience}</p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">{c.schedule}</p>
            <p className="text-gray-600 font-light leading-relaxed flex-grow">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
