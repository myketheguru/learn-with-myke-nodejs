import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className='container mx-auto mt-20 relative'>
      <div className='mb-[33px]'>
        <h4 className='max-w-[420px] text-[50px] leading-[75px] mb-[14px]'>
          Frequently Asked Questions
        </h4>
        <p className='max-w-[342px] text-sm opacity-50 mb-6'>
          Node.js is perfect for real-time web apps like chat, gaming, and collaboration
          tools.
        </p>

        <button
          type='button'
          className='w-[272px] h-[54px] font-semibold flex items-center justify-between text-white px-4 py-[15px] rounded-[10px] bg-lm-green'>
          <p>Ask a a direct question</p>

          <Image src='/whatsapp.svg' alt='WhatsApp' width={34} height={34} />
        </button>
      </div>

      <div className='grid grid-cols-3 w-full gap-x-16 pb-10 relative'>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            What are the prerequisites for this course?
          </h5>
          <p className='opacity-50 text-sm'>
            Basic knowledge of JavaScript is recommended. Familiarity with asynchronous
            programming concepts and an understanding of how web servers work will be
            beneficial.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            Do I need prior knowledge of JavaScript to learn Node.js?
          </h5>
          <p className='opacity-50 text-sm'>
            Yes, having a basic understanding of JavaScript is essential before diving
            into Node.js. Node.js is built on JavaScript, so familiarity with its syntax
            and core concepts will help you grasp Node.js more effectively.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            What kind of projects will I be able to build with Node.js?
          </h5>
          <p className='opacity-50 text-sm'>
            With Node.js, you can build a wide range of applications, including web
            servers, RESTful APIs, real-time chat applications, command-line tools, and
            microservices.
          </p>
        </div>

        <Image
          width={1000}
          height={2}
          src='/bottom-line.svg'
          alt='Illustration'
          className='absolute bottom-0 pointer-events-none w-full'
        />
      </div>

      <div className='grid grid-cols-3 w-full gap-x-16 relative pt-10 pb-5'>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            Do you provide a certificate of completion?
          </h5>
          <p className='opacity-50 text-sm'>
            Yes, we provide a certificate of completion upon successfully finishing the
            course. The certificate is a great addition to your resume and can help you
            showcase your skills to potential employers.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            Can I get a free trial test for the lessons?
          </h5>
          <p className='opacity-50 text-sm'>
            Absolutely! Our platform includes quizzes and practical exercises at the end
            of each module to help reinforce your learning. These tests allow you to apply
            what you&apos;ve learned and track your progress throughout the course.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            What kind of job opportunities are available for Node.js developers?
          </h5>
          <p className='opacity-50 text-sm'>
            Node.js developers are in high demand for roles such as backend developer,
            full-stack developer, software engineer, and systems architect. They can work
            in various industries, including tech startups, large enterprises, and
            consulting firms.
          </p>
        </div>

        <Image
          width={1000}
          height={2}
          src='/bottom-line.svg'
          alt='Illustration'
          className='absolute bottom-0 pointer-events-none w-full'
        />
      </div>

      <div className='grid grid-cols-3 w-full gap-x-16 relative pt-10 pb-5'>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            What are the prerequisites for this course?
          </h5>
          <p className='opacity-50 text-sm'>
            Basic knowledge of JavaScript is recommended. Familiarity with asynchronous
            programming concepts and an understanding of how web servers work will be
            beneficial.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            Do I need prior knowledge of JavaScript to learn Node.js?
          </h5>
          <p className='opacity-50 text-sm'>
            Yes, having a basic understanding of JavaScript is essential before diving
            into Node.js. Node.js is built on JavaScript, so familiarity with its syntax
            and core concepts will help you grasp Node.js more effectively.
          </p>
        </div>
        <div>
          <h5 className='text-2xl font-medium mb-2'>
            What kind of projects will I be able to build with Node.js?
          </h5>
          <p className='opacity-50 text-sm'>
            With Node.js, you can build a wide range of applications, including web
            servers, RESTful APIs, real-time chat applications, command-line tools, and
            microservices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
