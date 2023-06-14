// import React, { useState } from 'react';

// function Cube() {
//   const [selectedPage, setSelectedPage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handlePageClick = (page) => {
//     setSelectedPage(page);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedPage(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className={`cube-container ${isModalOpen ? 'cube-container-moved' : ''} absolute inset-0 transition-transform duration-300`}>
//         <div className="cube">
//           <div
//             className="side front bg-blue-500 text-white rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Members')}
//           >
//             Members
//           </div>
//           <div
//             className="side back bg-green-500 text-white rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Swimming Pool')}
//           >
//             Swimming Pool
//           </div>
//           <div
//             className="side right bg-purple-500 text-white rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Tennis Courts')}
//           >
//             Tennis Courts
//           </div>
//           <div
//             className="side left bg-pink-500 text-white rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Fitness Center')}
//           >
//             Fitness Center
//           </div>
//           <div
//             className="side top bg-yellow-500 text-black rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Restaurant')}
//           >
//             Restaurant
//           </div>
//           <div
//             className="side bottom bg-red-500 text-white rounded-md cursor-pointer"
//             onClick={() => handlePageClick('Events')}
//           >
//             Events
//           </div>
//         </div>

//         {selectedPage && (
//           <div className={`curved-screen ${isModalOpen ? 'modal-open' : ''} fixed inset-0 flex justify-center items-center bg-black bg-opacity-50`}>
//             <div className="curved-modal bg-white text-black rounded-lg p-8">
//               <h1 className="text-3xl mb-4">{selectedPage}</h1>
//               {/* Add your page content and design here */}
//               <button className="exit-button" onClick={closeModal}>
//                 Exit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cube;

import React, { useState } from 'react';
import MembersModal from './MembersModal';

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
      <div className={`cube-container ${isModalOpen ? 'cube-container-moved' : ''} absolute inset-0 transition-transform duration-300`}>
        <div className="cube">
          <div
            className="side front bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Members')}
          >
            Members
          </div>
          {/* ...other sides of the cube */}
          <div
            className="side back bg-green-500 text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Swimming Pool')}
          >
            Swimming Pool
          </div>
          <div
            className="side right bg-purple-500 text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Tennis Courts')}
          >
            Tennis Courts
          </div>
          <div
            className="side left bg-pink-500 text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Fitness Center')}
          >
            Fitness Center
          </div>
          <div
            className="side top bg-yellow-500 text-black rounded-md cursor-pointer"
            onClick={() => handlePageClick('Restaurant')}
          >
            Restaurant
          </div>
          <div
            className="side bottom bg-red-500 text-white rounded-md cursor-pointer"
            onClick={() => handlePageClick('Events')}
          >
            Events
          </div>

        </div>

        {selectedPage === 'Members' && (
          <div className={`curved-screen ${isModalOpen ? 'modal-open' : ''} fixed inset-0 flex justify-center items-center bg-black bg-opacity-50`}>
            <div className="curved-modal">
              <h1 className="text-3xl mb-4">{selectedPage}</h1>
              <MembersModal closeModal={closeModal} />
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


