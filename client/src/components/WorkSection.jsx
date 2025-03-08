import React, { useState, useEffect } from 'react';

const WorkSection = () => {
  const [cursorStyle, setCursorStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({
        left: e.pageX + 'px',
        top: e.pageY + 'px',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute z-50 w-16 h-16 bg-[#D80074] text-white flex items-center justify-center rounded-full pointer-events-none" style={{ ...cursorStyle, transform: 'translate(-50%, -50%)', display: 'none' }} id="custom-cursor">
        View
      </div>
      <div className="text-center py-10">
        <button className="bg-[#D80074] text-white font-unbounded px-6 py-2 rounded-full">Projects</button>
        <h2 className="text-3xl font-unbounded text-[#D80074] mt-4">Our Works</h2>
      </div>
      <div className="grid grid-cols-2 gap-8 px-10">
        <div className="relative group">
          <img src="https://your-image-url.com/project1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
          <div className="mt-4 bg-gray-800 rounded-lg border-2 border-white p-4">
            <h3 className="text-xl font-unbounded text-[#D80074]">Your Project Title 1</h3>
            <p className="text-white font-unbounded">This is a detailed description of your project 1. It should highlight the key features and achievements of the project.</p>
            <ul className="text-white font-unbounded mt-2">
              <li>Benefit 1 of project 1</li>
              <li>Benefit 2 of project 1</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <img src="https://your-image-url.com/project2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
          <div className="mt-4 bg-gray-800 rounded-lg border-2 border-white p-4">
            <h3 className="text-xl font-unbounded text-[#D80074]">Your Project Title 2</h3>
            <p className="text-white font-unbounded">This is a detailed description of your project 2. It should highlight the key features and achievements of the project.</p>
            <ul className="text-white font-unbounded mt-2">
              <li>Benefit 1 of project 2</li>
              <li>Benefit 2 of project 2</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <img src="https://your-image-url.com/project3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
          <div className="mt-4 bg-gray-800 rounded-lg border-2 border-white p-4">
            <h3 className="text-xl font-unbounded text-[#D80074]">Your Project Title 3</h3>
            <p className="text-white font-unbounded">This is a detailed description of your project 3. It should highlight the key features and achievements of the project.</p>
            <ul className="text-white font-unbounded mt-2">
              <li>Benefit 1 of project 3</li>
              <li>Benefit 2 of project 3</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <img src="https://your-image-url.com/project4.jpg" alt="Project 4" className="w-full h-64 object-cover rounded-lg" />
          <div className="mt-4 bg-gray-800 rounded-lg border-2 border-white p-4">
            <h3 className="text-xl font-unbounded text-[#D80074]">Your Project Title 4</h3>
            <p className="text-white font-unbounded">This is a detailed description of your project 4. It should highlight the key features and achievements of the project.</p>
            <ul className="text-white font-unbounded mt-2">
              <li>Benefit 1 of project 4</li>
              <li>Benefit 2 of project 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection; 