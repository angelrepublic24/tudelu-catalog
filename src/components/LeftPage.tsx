interface Props {
    title: string;
    description: string;
    benefits: string[];
  }
  
  const LeftPage = ({ title, description, benefits }: Props) => (
    <div className="page w-full h-full bg-white p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#353535] mb-3">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  export default LeftPage;