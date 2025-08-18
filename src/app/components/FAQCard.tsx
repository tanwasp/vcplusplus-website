interface FAQCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="bg-maroon rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
      <p className="text-white/90">{answer}</p>
    </div>
  );
}