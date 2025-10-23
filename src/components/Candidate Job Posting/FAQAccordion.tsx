import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(0); // Only first item open by default

  const faqItems: FAQItem[] = [
    {
      id: 0,
      question: "What happens when I sign up?",
      answer: "When you sign up, you'll create a short profile and upload your CV. Our matching engine instantly connects you with live job opportunities that fit your skills, experience, and goals."
    },
    {
      id: 1,
      question: "Is it free to use Matchero?",
      answer: "Yes - Matchero is completely free for candidates. You can sign up, browse roles, and get matched with employers at no cost."
    },
    {
      id: 2,
      question: "What kind of jobs can I find on Matchero?",
      answer: "You'll find verified, high-quality roles from growing companies across Africa and beyond - from startups to established employers in tech, finance, and operations."
    },
    {
      id: 3,
      question: "Can I edit or delete my profile later?",
      answer: "Yes. You can update your information or delete your account at any time from your profile settings."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? -1 : id); // Close if same item, otherwise open new item
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-lg font-medium text-cyan-100 pr-4">
                {item.question}
              </span>
              <div className="flex-shrink-0">
                {openItem === item.id ? (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </div>
            </button>
            
            {openItem === item.id && (
              <div className="pb-4">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
