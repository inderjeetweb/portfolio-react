import React from 'react';

export const WorkExp = () => {
  return (
    <div className="card">
      <div className="card-block">
        <div className="work-exp">
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          <ul className="list-disc pl-6 space-y-6">
            <li className='mb-5'>
              <div className="font-semibold">
              <h4>Junglee Games India Pvt Ltd (Apr 2020 – Present) | 5+ years</h4>
              </div>
              <div className="italic mb-2">
                Technical Lead (Full Stack Developer)
              </div>
              <ul className="list-disc pl-6 space-y-1 keypoints">
                <li>Led and developed multiple internal projects as a Full Stack Developer and Team Lead.</li>
                <li>Key projects: Porto Assets Management (Laravel), Luna API Dashboard (Nest.js), Corvus (Laravel), Raptor CMS (Laravel), and Fornax – a dashboard for monitoring company ad spend across Google Ads, YouTube, and Facebook.</li>
                <li>Responsible for architecture design, development, and team coordination.</li>
              </ul>
            </li>

            <li>
              <div className="font-semibold">
                <h4>Kliff Technologies Pvt Ltd (Nov 2016 – Apr 2020) | 3 years 6 mos</h4>
              </div>
              <div className="italic mb-2">
                Full Stack Developer
              </div>
              <ul className="list-disc pl-6 space-y-1 keypoints">
                <li>Worked as a Full Stack Developer handling client communication, requirements gathering, and project delivery.</li>
                <li>Managed teams and ensured smooth execution of multiple client projects.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
