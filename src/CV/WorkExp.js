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

              <ul className="pl-4 border-l border-gray-300 ml-2 space-y-4 progress-points">
                <li>
                  <div className="italic mb-1">Technical Lead (Full Stack Developer)</div>
                  <small className="block mb-1 text-gray-600">Feb 2024 – Present · 1 yr 7 mos | Gurugram, Haryana</small>
                  <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Led and developed multiple internal projects as a Full Stack Developer and Team Lead.</li>
                    <li>Responsible for architecture design, development, and team coordination.</li>
                  </ul>
                </li>

                <li>
                  <div className="italic mb-1">SDE III</div>
                  <small className="block mb-1 text-gray-600">Apr 2022 – Feb 2024 · 1 yr 11 mos | Gurugram, Haryana</small>
                   <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Monitored server performance, analyzed access logs, and resolved production issues proactively.</li>
                    <li>Collaborated with stakeholders to gather requirements and translate them into technical solutions.</li>
                    <li>Led and mentored team members, ensuring smooth project execution and supporting team growth.</li>
                  </ul>
                </li>

                <li>
                  <div className="italic mb-1">SDE II</div>
                  <small className="block mb-1 text-gray-600">Apr 2020 – May 2022 · 2 yrs 2 mos | Gurugram, Haryana</small>
                  <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Developed backend APIs and services using PHP and Laravel to support scalable web applications.</li>
                    <li>Designed and integrated RESTful APIs ensuring security and optimal performance.</li>
                    <li>Collaborated with frontend teams to deliver seamless end-to-end features and functionality.</li>
                  </ul>
                </li>

                <li>
                  <div className="italic mb-1">Sr. Operations Executive UI/UX</div>
                  <small className="block mb-1 text-gray-600">Apr 2020 – Apr 2020 · 1 mo | Gurgaon, Haryana</small>
                  <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Converted PSD designs into responsive, pixel-perfect HTML/CSS with cross-browser compatibility.</li>
                    <li>Designed and implemented visually appealing, user-friendly interfaces to improve overall UX.</li>
                    <li>Collaborated with stakeholders to translate requirements into intuitive UI flows and components.</li>
                  </ul>
                </li>
              </ul>
              {/* <ul className="list-disc pl-6 space-y-1 keypoints">
                <li>Led and developed multiple internal projects as a Full Stack Developer and Team Lead.</li>
                <li>Key projects: Porto Assets Management (Laravel), Luna API Dashboard (Nest.js), Corvus (Laravel), Raptor CMS (Laravel), and Fornax – a dashboard for monitoring company ad spend across Google Ads, YouTube, and Facebook.</li>
                <li>Responsible for architecture design, development, and team coordination.</li>
              </ul> */}
            </li>

            <li>
              <div className="font-semibold">
                <h4>Kliff Technologies Pvt Ltd (Nov 2016 – Apr 2020) | 3 years 6 mos</h4>
              </div>
               <ul className="pl-4 border-l border-gray-300 ml-2 space-y-4 progress-points">
                <li>
                  <div className="italic mb-1">Web Developer</div>
                   <small className="block mb-1 text-gray-600">Jan 10, 2017 – April 26, 2020 · 3 years 3 Mos | Delhi</small>
                  <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Worked as a Full Stack Developer handling client communication, requirements gathering, and project delivery.</li>
                    <li>Managed teams and ensured smooth execution of multiple client projects.</li>
                  </ul>
                </li>
                <li>
                  <div className="italic mb-1">Intern</div>
                  <small className="block mb-1 text-gray-600">Feb 2024 – Jan 9, 2017 · 3 Mos | Delhi</small>
                  <ul className="list-disc pl-6 space-y-1 keypoints">
                    <li>Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.</li>
                    <li>Collaborated with senior developers to enhance UI/UX and improve overall application usability.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
