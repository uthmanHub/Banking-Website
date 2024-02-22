import Image from "next/image";
import Link from "next/link";
import blog1 from "./../image/blog1.png";
import blog2 from "./../image/blog2.png";
import blog3 from "./../image/blog3.jpeg";
// import { Link, Element } from 'react-scroll';

const Blog = () => {
  const blogList = [
    {
      id: 1,
      image: blog1,
      date: "20 august 2023",
      time: "1 min read",
      title: "Four ways to cheer yourself up on blue Monday",
      content:
        "on the second edition of serious business, Inc, editor Jim Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: blog2,
      date: "20 august 2023",
      time: "1 min read",
      title: "Four ways to cheer yourself up on blue Monday",
      content:
        "on the second edition of serious business, Inc, editor Jim Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: blog3,
      date: "20 august 2023",
      time: "1 min read",
      title: "Four ways to cheer yourself up on blue Monday",
      content:
        "on the second edition of serious business, Inc, editor Jim Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section id='blog'>
      <div className=' py-20'>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-color-secondary mb-4'>
            Innovation And Quality Improvement
          </h4>
          <h1 className='title'>Latest Updates, Solution and Company News</h1>
        </div>

        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
          {/* blog card */}
          {blogList.map(({ id, image, date, time, title, content }) => {
            return (
              <div key={id}>
                <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden '>
                  <Image
                    src={image}
                    alt='thumbnail of the blog post'
                    className='lg:h-full w-full hover:scale-125 transition duration-200 ease-in-out '
                  />
                </div>

                <div>
                  <div className='flex items-center gap-5 py-5'>
                    <p>{date}</p>
                    <p>{time}</p>
                  </div>

                  <Link
                    href={"#blog"}
                    className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline  '
                  >
                    {title}
                  </Link>
                  <p className='leading-relaxed my-5'>
                    {content.slice(0, 90).concat("...")}
                  </p>

                  <Link
                    href={"#blog"}
                    className='inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out '
                  >
                    <span className='tracking-wider capitalize underline hover:no-underline  '>
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
