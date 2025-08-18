export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "how-to-join",
    question: "How do I join VC++?",
    answer:
      "Simply attend one of our weekly meetings. No experience required - we welcome all skill levels!",
  },
  {
    id: "programming-experience",
    question: "Do I need programming experience?",
    answer:
      "Not at all! We have members ranging from complete beginners to advanced programmers. Our workshops and events are designed to help everyone learn and grow.",
  },
  {
    id: "membership-fees",
    question: "Are there membership fees?",
    answer:
      "VC++ membership is completely free! We believe in making programming education accessible to all students.",
  },
  {
    id: "what-to-bring",
    question: "What should I bring to meetings?",
    answer:
      "Just bring yourself and a laptop if you have one. We'll provide any additional materials needed for workshops or activities.",
  },
];
