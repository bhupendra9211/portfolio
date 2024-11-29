import React from 'react';

const About = () => {
  return (
    <div
      id="About"
      className=" flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 mx-4 sm:mx-12 lg:mx-24"
    >
      <div className="shadow-lg p-8 rounded-lg w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Me</h1>
        <p className="text-center mb-6">
          Hello, I’m Bhupendra Sah, a dedicated software developer with hands-on experience in Ruby, Ruby on Rails, React, and
          Next.js. Passionate about creating efficient and scalable web applications, I aim to contribute to impactful and
          innovative projects.
        </p>

        <section className="mb-6">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Education & Training</h2>
          <ul className="list-disc pl-5">
            <li>B.Sc. in Computational Mathematics, Kathmandu University (2019 - 2024)</li>
            <li>+2, Model Secondary School, Janakpur (2016 - 2018)</li>
            <li>SLC, Super Sense Sec. Eng. Boarding School (2015 - 2016)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Skills & Expertise</h2>
          <p>
            Programming Languages: C, C++, HTML, CSS, MATLAB, R, Python, SQL, JavaScript <br />
            Frameworks: ReactJS, Next.js, Ruby on Rails <br />
            Tools: Jira, Git, Agile/Scrum, API Integration <br />
            Languages: Nepali, Maithili, English, Hindi
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Professional Experience</h2>
          <ul className="list-disc pl-5">
            <li>
              On-the-Job Trainee, Chulo Solutions Pvt. Ltd. (Aug 2024 - Nov 2024)
              <p>
                Contributed to developing web applications using Ruby on Rails and React. Focused on designing and implementing
                new features, debugging, and collaborating in an Agile workflow.
              </p>
            </li>
            <li>
              Intern, Chulo Solutions Pvt. Ltd. (Mar 2024 - Jul 2024)
              <p>
                Assisted in developing and maintaining web applications. Worked on implementing new features and honed skills in
                full-stack development.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Projects</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="https://github.com/bhupendra9211/Learning-Management-System" target='_blank' className="text-blue-500 underline">
                Learning Management System
              </a>
            </li>
            <li>
              <a href="https://github.com/bhupendra9211/Film-Fair" target='_blank' className="text-blue-500 underline">
                Movie Review App
              </a>
            </li>
            <li>
              <a href="https://github.com/bhupendra9211/Instapost" target='_blank' className="text-blue-500 underline">
                Insta Post
              </a>
            </li>
            <li>
              <a href="https://github.com/bhupendra9211/MyBlog" target='_blank' className="text-blue-500 underline">
                Medium Clone
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-green-600 font-semibold text-2xl mb-4">Achievements</h2>
          <ul className="list-disc pl-5">
            <li>Completed SQL(Basic) Certification from HackerRank</li>
            <li>Completed MySQL Basics course from Great Learning</li>
          </ul>
        </section>

        <div className="text-center">
          <a
            href="/BhupendraKumarSahCv.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
