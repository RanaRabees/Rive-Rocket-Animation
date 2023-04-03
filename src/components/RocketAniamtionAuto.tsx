'use client';
import { useRive } from '@rive-app/react-canvas';

export default function RocketAniamtionAuto() {
  const { RiveComponent } = useRive({
    src: '/rocket-assignment.riv',
    artboard: 'Rocket In The Sky',
    autoplay: true,
  });

  return (
    <div className='overflow-hidden rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-blue-600 to-pink-600 flex justify-center'>
      <div className='h-[300px] hover:cursor-pointer w-[300px] xmd:h-[450px] xmd:w-[450px] md:h-[500px] md:w-[500px]'>
        <RiveComponent />
      </div>
    </div>
  );
}
