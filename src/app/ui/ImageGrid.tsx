import Image from 'next/image';

type Props = {};

const ImageGrid = (props: Props) => {
  const getRandomSize = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  return (
    <div className='relative leading-[0] columns-2'>
      {[...Array(10)].map((_, i) => {
        let width = getRandomSize(200, 400);
        let height = getRandomSize(200, 400);
        const aspectRatio = width / height;
        const src = `https://placekitten.com/${width}/${height}`;
        return (
          <Image
            key={i}
            src={src}
            width={width}
            height={height}
            className={`inline-block w-full h-auto aspect-[${aspectRatio}] mb-5 rounded-md overflow-hidden`}
            alt={`${i + 1}`}
          />
        );
      })}
      <div className='container absolute bottom-0 left-0 w-full pt-52 pb-10 text-center bg-gradient-to-t from-white '>
        <span>See Full gallery</span>
      </div>
    </div>
  );
};

export default ImageGrid;
