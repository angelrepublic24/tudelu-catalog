'use client';

interface PageProps {
  title: string;
  description: string;
  benefits: string[];
}

const PageComponent = ({ title, description, benefits }: PageProps) => (
  <div className="page w-[500px] h-[700px] bg-white p-6 flex flex-col justify-center">
    <h2 className="text-2xl font-bold text-[#353535] mb-3">{title}</h2>
    <p className="text-sm text-gray-700 mb-4">{description}</p>
    <ul className="list-disc pl-5 text-sm text-gray-600">
      {benefits.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export default PageComponent;
