interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

export default function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-maroon rounded-lg flex items-center justify-center flex-shrink-0">
        <div className="w-6 h-6 text-white">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
}