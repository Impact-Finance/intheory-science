import Image from 'next/image';

import meta from '@/public/meta-image.jpg';

const Meta = () => {
  return (
    <div>
      <Image
        src={meta}
        alt="meta-image"
        width={1200}
        height={627}
      />
    </div>
  );
};

export default Meta;
