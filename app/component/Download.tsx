import Image from "next/image";
import Link from "next/link";
import Andriod from "./../image/andriod.png";
import IOS from "./../image/ios.png";

const Download = () => {
  return (
    <>
      <section id='download-app' className='bg-color-primary-light '>
        <div className=' h-[88vh] grid place-items-center '>
          <div className='text-center md:w-2/3 m-auto '>
            <h1 className='title'>Download App Now and Save Your Money </h1>
            <p className='leading-relaxed pt-5 '>
              Serving an impressive list of long-term money with experience and
              expertise in multiple industries
            </p>

            <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-10 '>
              <Link
                href={"https://play.google.com/store"}
                target='_blank'
                className='bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70 '
              >
                <Image src={Andriod} alt='image of google play store' />
              </Link>
              <Link
                href={"https://www.apple.com/store"}
                target='_blank'
                className='bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70 '
              >
                <Image src={IOS} alt='image of IOS store' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className=' py-20'>
          <div className='text-center m-auto mb-20 md:w-1/2'>
            <h4 className='font-bold text-color-secondary mb-4'>
              Have a Question
            </h4>
            <h1 className='title'>Get In Touch</h1>
          </div>

          <form action=''>
            <div className='w-ful m-auto text-center md:w-2/3'>
              <div className='text-color-primary-dark grid gap-6 md:grid-cols-2 '>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '
                  placeholder='Name'
                  required
                />
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '
                  placeholder='Email'
                  required
                />
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '
                  placeholder='Phone'
                  required
                />
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '
                  placeholder='Company'
                  required
                />
              </div>
              <textarea
                rows={4}
                className='text-color-primary-dark mt-10 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '
                placeholder='Message'
              ></textarea>
              <button className='btn mt-10'>Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Download;
