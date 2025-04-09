import Image from 'next/image';

interface Props {
  image: string;
  title: string;
}

const RightPage = ({ image, title }: Props) => (
  <div className="page w-full h-full bg-white p-6 flex justify-center items-center">
    <Image
      src={image}
      alt={title}
      width={400}
      height={500}
      className="rounded-lg object-contain"
    />
  </div>
);

export default RightPage;
