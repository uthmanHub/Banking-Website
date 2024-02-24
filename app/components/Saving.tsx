import Image from "next/image";
import imgSaving from "./../image/saving.png";

const Saving = () => {
  return (
    <>
      <section className='relative'>
        <div className='blob1'></div>
        <div className='blob2'></div>
        <div className='container py-20 relative'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-12 md:w-1/2'>
              <Image src={imgSaving} alt='image of the saving section' priority />
            </div>

            <div className='text-center md:text-left md:w-1/2 md:ml-20'>
              <h4 className='font-bold text-color-secondary mb-4'>
                Our Savings
              </h4>
              <h1 className='title mb-4'>
                Easy to manage all your payment by our App
              </h1>
              <p className='leading-relaxed mb-10'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                mollitia, voluptas sunt laboriosam perspiciatis quas architecto
                veritatis rerum earum! Nulla?Savings
              </p>
              <button className='btn'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Saving;
