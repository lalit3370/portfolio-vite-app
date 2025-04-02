// components/Skills.jsx
import React from 'react';
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiGit } from 'react-icons/di';
import { SiRedux, SiTypescript, SiNextdotjs, SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <DiReact />, name: 'React', level: '90%' },
    { icon: <DiJavascript1 />, name: 'JavaScript', level: '85%' },
    { icon: <SiTypescript />, name: 'TypeScript', level: '80%' },
    { icon: <SiRedux />, name: 'Redux', level: '85%' },
    { icon: <DiHtml5 />, name: 'HTML5', level: '95%' },
    { icon: <DiCss3 />, name: 'CSS3', level: '90%' },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: '85%' },
    { icon: <DiNodejs />, name: 'Node.js', level: '75%' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: '80%' },
    { icon: <SiFirebase />, name: 'Firebase', level: '70%' },
    { icon: <DiGit />, name: 'Git', level: '85%' },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;