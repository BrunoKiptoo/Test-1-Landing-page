

import React, { useState } from 'react';

function Cube() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageClick = (page) => {
    setSelectedPage(page);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`cube-container ${isModalOpen ? 'cube-container-moved' : ''} absolute inset-0 transition-transform duration-300`}
      >
        <div className="cube">
          <div
            className="side front bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 1')}
          >
            Page 1
          </div>
          <div
            className="side back bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 2')}
          >
            Page 2
          </div>
          <div
            className="side right bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 3')}
          >
            Page 3
          </div>
          <div
            className="side left bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 4')}
          >
            Page 4
          </div>
          <div
            className="side top bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 5')}
          >
            Page 5
          </div>
          <div
            className="side bottom bg-black text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Page 6')}
          >
            Page 6
          </div>
        </div>

        {selectedPage && (
          <div className={`curved-screen ${isModalOpen ? 'modal-open' : ''} fixed inset-0 flex justify-center items-center bg-black bg-opacity-50`}>
            <div className="curved-modal bg-black text-white rounded-lg p-8">
              <h1 className="text-3xl mb-4">{selectedPage}</h1>
              {/* Add your page content and design here */}
              <button className="exit-button" onClick={closeModal}>
                Exit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cube;




       
