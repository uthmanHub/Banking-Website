import Link from "next/link";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      iconName: <FaFacebook />,
      refLink: "https://www.facebook.com",
    },
    {
      id: 2,
      iconName: <FaXTwitter />,
      refLink: "https://www.twitter.com",
    },
    {
      id: 3,
      iconName: <FaLinkedin />,
      refLink: "https://www.linkedin.com",
    },
    {
      id: 4,
      iconName: <FaInstagram />,
      refLink: "https://www.instagram.com",
    },
  ];
  return (
    <section id='footer'>
      <div className='bg-color-primary-dark relative'>
        <div className='container py-10'>
          <div className='grid gap-10 md:grid-cols-3 pb-10'>
            <div className='space-y-6'>
              <h4 className='font-bold text-lg'>About App</h4>
              <p className='leading-relaxed'>
                This should be use Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore similique nemo numquam dolorum est
                sint? Explicabo nemo, doloribus sunt labore voluptates
                repudiandae, ipsam accusantium quis dolor unde dolorem, est
                eveniet.
              </p>
              <div className='flex gap-5 items-center'>
                <p>Follow us</p>
                {socialLinks.map(({ id, iconName, refLink }) => {
                  return (
                    <Link key={id} href={refLink} target='_blank'>
                      <div className='cursor-pointer hover:text-color-secondary'>
                        {iconName}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className='flex justify-between md:justify-around '>
              <div className='space-y-6'>
                <h4 className='font-bold  text-lg'>Quick Links</h4>
                <ul className='space-y-3'>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#feature"}>Feature</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#testimonial"}>Testimonial</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#pricing"}>Pricing</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#blog"}>Blog</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div className='space-y-6'>
                <h4 className='font-bold  text-lg'>Help</h4>
                <ul className='space-y-3'>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>About us</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>Patners</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>Career</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>Reviews</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>Terms & Condition</Link>
                  </li>
                  <li className='underline hover:no-underline hover:text-color-secondary '>
                    <Link href={"#"}>Help</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='space-y-6'>
              <h4 className='font-bold text-lg'>Newsletter</h4>
              <p className='leading-relaxed'>
                Explicabo nemo, doloribus sunt labore voluptates repudiandae,
                ipsam accusantium quis dolor unde dolorem, est eveniet.
              </p>
              <div>
                <form action='' className='flex items-center'>
                  <input
                    type='email'
                    className='w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none'
                    placeholder='Enter Your Email'
                    required
                  />
                  <button
                    className='bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-80'
                    type='submit'
                  >
                    <FaChevronRight size='24' />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className='flex text-center justify-center pt-10 border-t border-color-gray '>
            <p>
              {new Date().getFullYear()} &copy; UthmanCode, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
