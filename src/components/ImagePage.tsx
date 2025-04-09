'use client';
import Image from 'next/image';

interface DoubleImagePageProps {
  images: {
    left: string;
    right: string;
  };
}

const DoubleImagePage = ({ images }: DoubleImagePageProps) => (
  <>
    <div className="page w-[500px] h-[700px] relative">
    <Image
        src={images.left}
        alt="Left Page"
        fill
        className="object-cover"
        onError={() => console.error("Image left failed:", images.left)}
        />
    </div>
    <div className="page w-[500px] h-[700px] relative">
      <Image src={images.right} alt="Right Page" fill className="object-cover" />
    </div>
  </>
);

export default DoubleImagePage;
