import React from 'react';
import { Wallet } from 'lucide-react';
import { PAYMENT_METHODS } from '../constants';

const Payment: React.FC = () => {
  return (
    <section id="payment" className="py-20 px-4 md:px-8 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-light tracking-[0.1em] text-gray-900 mb-4 uppercase">
          Payment
        </h2>
        <p className="text-gray-500 font-light mb-10">
          Tuition and materials fees can be paid using any of the methods below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PAYMENT_METHODS.map((method) => {
            const content = (
              <div className="border border-gray-200 p-8 flex flex-col items-center gap-3 h-full hover:border-gray-400 transition-colors">
                <Wallet size={28} strokeWidth={1} className="text-gray-700" />
                <span className="font-medium text-gray-900">{method.name}</span>
                <span className="text-sm text-gray-500 font-light">{method.handle}</span>
                {method.note && (
                  <span className="text-xs text-gray-400 font-light">{method.note}</span>
                )}
              </div>
            );

            return method.href ? (
              <a key={method.id} href={method.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={method.id}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Payment;
