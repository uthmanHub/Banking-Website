import Image from "next/image";
import hero from "./../image/hero.png";

const Home = () => {
  return (
    <>
      <section className='relative'>
        <div className='blob1'></div>
        <div className='blob2'></div>
        <div className='container py-20'>
          <div className='flex flex-col items-center z-20 md:flex-row'>
            <div className='text-center mb-12 md:text-left md:w-1/2 md:pr-10'>
              <h1 className='title mb-4'>Awesome App for your Financial.</h1>
              <p className='leading-relaxed mb-10 '>
                This should be used to tell a story and let your user know a
                little more about app and its use, how it can benefit them{" "}
              </p>
              <button className='btn'>Download app</button>
            </div>

            <div className='md:w-1/2'>
              <Image src={hero} alt='image of the hero section' priority />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
