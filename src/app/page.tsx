import RocketAniamtionAuto from '@/components/RocketAniamtionAuto';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-5 px-20 text-sm xmd:flex-row xmd:px-5 xmd:text-base md:px-20'>

        <div className='min-w-[300px] p-5 text-justify text-lime-400 hover:italic hover:text-gray-50 xmd:min-w-[200px] md:min-w-[350px]'>
          <p className='text-lg font-medium mb-5 text-orange-500 italic hover:text-xl hover:text-white'>
            About My Rive Animation
          </p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nam?
          Explicabo optio nulla nobis odit, vero ipsum quam, velit quae tenetur,
          eveniet iure. Atque delectus inventore veritatis perferendis odit. Laborum!
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nam?
          Explicabo optio nulla nobis odit, vero ipsum quam, velit quae tenetur,
          eveniet iure. Atque delectus inventore veritatis perferendis odit. Laborum!
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nam?
          Explicabo optio nulla nobis odit, vero ipsum quam, velit quae tenetur,
          eveniet iure. Atque delectus inventore veritatis perferendis odit. Laborum! F
        </div>
        <div className='flex-grow'>
          <RocketAniamtionAuto></RocketAniamtionAuto>
        </div>
      </div>
    </>
  );
}
