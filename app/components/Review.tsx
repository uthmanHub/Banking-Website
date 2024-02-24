"use client";

import Image from "next/image";
import React, { useState } from "react";
import user1 from "./../image/user1.jpg";
import user2 from "./../image/user2.jpeg";
import user3 from "./../image/user3.jpg";
import user4 from "./../image/user4.jpg";
import user5 from "./../image/user5.jpg";

// ! fix all this importation of the user image to a single import nicely

const Review = () => {
  const [click, setClick] = useState(0);
  const [show, setShow] = useState(false);

  const reviewData = [
    {
      id: 1,
      content:
        '"I would recommend mobile banking site for anyone trying to get the word out about their business. It has saved me so much time!"',
      name: "Markin Nesus",
      job: "IOS developer",
    },
    {
      id: 2,
      content:
        '"I love mobile banking site! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."',
      name: "Uthman Sarafa",
      job: "React developer",
    },
    {
      id: 3,
      content:
        '"If you are a business owner, and you don\'t have mobile banking site in your toolkit just yet, I highly recommend that you check it out."',
      name: "Vera Duncan",
      job: "Andriod developer",
    },
    {
      id: 4,
      content:
        '"I can\'t say enough about mobile banking site. mobile banking site has really helped our business."',
      name: "Pirtle Karol",
      job: "Angular developer",
    },
    {
      id: 5,
      content:
        "\"I have been using mobile banking site for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.\"",
      name: "Mark Joe",
      job: "Mobile developer",
    },
  ];

  const userPic = [
    {
      id: 1,
      img: user1,
    },
    {
      id: 2,
      img: user2,
    },
    {
      id: 3,
      img: user3,
    },
    {
      id: 4,
      img: user4,
    },
    {
      id: 5,
      img: user5,
    },
  ];

  // ? trying to merge the user pic with the user remark in on array and try filtering only the images to display first as a roll then the comment can come below
  // const userpi = reviewData.filter((item) => {
  //   return typeof(item.id) === 'number'
  // })

  const showFunc = (id: React.SetStateAction<number>) => {
    setClick(id);
    setShow(true);
  };

  const result = reviewData.find(item => {
    return item.id === click;
  });

  return (
    <section id='testimonial'>
      <div className=' py-20'>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-color-secondary mb-4'>User Review</h4>
          <h1 className='title'>What Client Say About Our App After Use It</h1>
        </div>

        {/* review container */}
        <div className='mt-8'>
          <div className='flex items-center justify-center flex-wrap'>
            {userPic.map(({ id, img }) => {
              return (
                <div key={id}>
                  <Image
                    src={img}
                    alt='image of our user'
                    onClick={() => showFunc(id)}
                    className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${
                      id === click ? "border-2 border-color-secondary" : ""
                    }  user-pc`}
                  />
                </div>
              );
            })}
          </div>

          {/* user remark */}
          {show && (
            <div className='user-text active-text  '>
              <div className='grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]'>
                <div className=''>
                  <p className='md:text-2xl mb-6'>{result?.content}</p>
                  <h4 className='font-bold text-color-secondary mb-1 '>
                    {result?.name}
                  </h4>
                  <p>{result?.job}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
