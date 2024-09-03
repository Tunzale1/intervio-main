"use client";

import React from "react";
import JobDetailsEditForm from "./JobDetailsEditForm"; // Import the JobDetailsEditForm component

const JobDetails = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-24">
      {/* Left Column: Job Details */}
      <div className="col-span-2">
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600">
            We are seeking a talented and motivated Frontend Developer to join our dynamic team. The ideal candidate will have a passion for creating stunning, user-friendly web applications and a deep understanding of modern web technologies. You will work closely with our design and backend teams to deliver high-quality, scalable solutions.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Develop and maintain responsive web applications using HTML, CSS, and JavaScript.</li>
            <li>Collaborate with designers to translate UI/UX wireframes into interactive interfaces.</li>
            <li>Optimize applications for maximum speed and scalability.</li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>Conduct code reviews and provide constructive feedback.</li>
            <li>Stay up-to-date with emerging trends and technologies in frontend development.</li>
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Experience with version control systems such as Git.</li>
            <li>Knowledge of build tools like Webpack, Gulp, or Grunt.</li>
            <li>Familiarity with frontend testing frameworks (Jest, Mocha, etc.).</li>
            <li>Understanding of SEO principles and ensuring that applications adhere to them.</li>
          </ul>
        </div>

        {/* Preferred Qualifications */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Preferred Qualifications</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Bachelor’s degree in Computer Science or a related field, or equivalent experience.</li>
            <li>3+ years of experience in frontend development.</li>
            <li>Proficient in HTML, CSS, and JavaScript.</li>
            <li>Experience with modern JavaScript frameworks (React, Angular, or Vue.js).</li>
            <li>Familiarity with RESTful APIs and asynchronous request handling.</li>
            <li>Strong understanding of cross-browser compatibility issues and ways to work around them.</li>
            <li>Excellent problem-solving skills and attention to detail.</li>
          </ul>
        </div>

        {/* Salary and Benefits */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Salary and Benefits</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Competitive salary ranging from $90,000 to $120,000 per year.</li>
            <li>Comprehensive health, dental, and vision insurance.</li>
            <li>401(k) with company match.</li>
            <li>Generous paid time off and holidays.</li>
            <li>Flexible working hours and remote work options.</li>
            <li>Professional development opportunities.</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Company</h2>
          <p className="text-gray-600">
            We are seeking a talented and motivated Frontend Developer to join our dynamic team. The ideal candidate will have a passion for creating stunning, user-friendly web applications and a deep understanding of modern web technologies. You will work closely with our design and backend teams to deliver high-quality, scalable solutions.
          </p>
        </div>
      </div>

      {/* Right Column: Editable Job Details Form */}
      <div className="col-span-1">
        <JobDetailsEditForm />
      </div>
    </div>
  );
};

export default JobDetails;
