// import React, { useState, useEffect } from 'react';

// const MembersModal = ({ closeModal }) => {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/members');
//         const data = await response.json();
//         console.log(data); // Add this line to check the received data
//         setMembers(data);
//       } catch (error) {
//         console.error('Failed to fetch members data:', error);
//       }
//     };

//     fetchMembers();
//   }, []);

//   console.log('Members:', members); // Add this line for debugging

//   return (
//     <div className="">
//       {members.length > 0 ? (
//         members.map((member) => (
//           <div key={member.id} className="member-card mb-4">
//             <img src={member.photo} alt={member.name} className="member-photo" />
//             <h2 className="text-xl font-bold">{member.name}</h2>
//             <p>Year Joined: {member.yearJoined}</p>
//             <p>Membership Type: {member.membershipType}</p>
//             <p>Status: {member.isActive ? 'Active' : 'Inactive'}</p>
//             <p>Credit Balance: {member.creditBalance}</p>
//           </div>
//         ))
//       ) : (
//         <p>No members found.</p>
//       )}
//       <button className="exit-button" onClick={closeModal}>
//         Exit
//       </button>
//     </div>
//   );
// };

// export default MembersModal;



// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Search } from 'react-feather';

// const MembersModal = ({ closeModal }) => {
//   const [members, setMembers] = useState([]);
//   const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
  
//   const filteredMembers = members.filter((member) =>
//     member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/members');
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Failed to fetch members data:', error);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const previousMember = () => {
//     setCurrentMemberIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
//   };

//   const nextMember = () => {
//     setCurrentMemberIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//     <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-lg relative">
//       <button
//         className="absolute top-2 right-2 text-gray-500"
//         onClick={closeModal}
//         aria-label="Close"
//       >
//         <svg
//           className="h-6 w-6"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//       <div className="relative">
//         <img
//           src={filteredMembers[currentMemberIndex]?.photo}
//           alt={filteredMembers[currentMemberIndex]?.name}
//           className="w-full h-60 object-cover rounded-t-lg mt-4"
//         />
//         <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1">
//           <button
//             className="text-gray-600 hover:text-gray-800"
//             onClick={previousMember}
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             className="text-gray-600 hover:text-gray-800"
//             onClick={nextMember}
//             aria-label="Next"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search members"
//             className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <button className="ml-2 p-2 bg-gray-200 rounded-md">
//             <Search size={20} className="text-gray-600" />
//           </button>
//         </div>
//         <div>
//           {filteredMembers.length > 0 ? (
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Members</h2>
//               <ul className="space-y-2">
//                 {filteredMembers.map((member, index) => (
//                   <li key={member.id} className="flex items-center space-x-4">
//                     <img
//                       src={member.photo}
//                       alt={member.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <span className="text-gray-800">{member.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <p className="text-gray-600">No members found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default MembersModal;


// import React, { useState, useEffect } from 'react';

// const MembersModal = ({ closeModal }) => {
//   const [members, setMembers] = useState([]);
//   const [selectedMember, setSelectedMember] = useState(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/members');
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Failed to fetch members data:', error);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const openMemberDetails = (member) => {
//     setSelectedMember(member);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-lg relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500"
//           onClick={closeModal}
//           aria-label="Close"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <div className="p-4">
//           {selectedMember ? (
//             <div className="member-details">
//               <img
//                 src={selectedMember.photo}
//                 alt={selectedMember.name}
//                 className="w-full h-60 object-cover rounded-t-lg mt-4"
//               />
//               <h2 className="text-xl font-bold">{selectedMember.name}</h2>
//               <p>Year Joined: {selectedMember.yearJoined}</p>
//               <p>Membership Type: {selectedMember.membershipType}</p>
//               <p>Status: {selectedMember.isActive ? 'Active' : 'Inactive'}</p>
//               <p>Credit Balance: {selectedMember.creditBalance}</p>
//             </div>
//           ) : (
//             <div className="member-list">
//               <h2 className="text-xl font-semibold mb-2">Members</h2>
//               {members.length > 0 ? (
//                 <ul className="space-y-2">
//                   {members.map((member) => (
//                     <li
//                       key={member.id}
//                       className="cursor-pointer text-gray-800 hover:text-blue-500"
//                       onClick={() => openMemberDetails(member)}
//                     >
//                       {member.name}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600">No members found.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembersModal;




// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Search } from 'react-feather';

// const MembersModal = ({ closeModal }) => {
//   const [members, setMembers] = useState([]);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredMembers = members.filter((member) =>
//     member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/members');
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Failed to fetch members data:', error);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const openMemberDetails = (member) => {
//     setSelectedMember(member);
//   };

//   const previousMember = () => {
//     setCurrentMemberIndex((prevIndex) =>
//       prevIndex === 0 ? members.length - 1 : prevIndex - 1
//     );
//   };

//   const nextMember = () => {
//     setCurrentMemberIndex((prevIndex) =>
//       prevIndex === members.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-lg relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500"
//           onClick={closeModal}
//           aria-label="Close"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <div className="relative">
//           {selectedMember ? (
//             <>
//               <img
//                 src={selectedMember.photo}
//                 alt={selectedMember.name}
//                 className="w-full h-60 object-cover rounded-t-lg mt-4"
//               />
//               <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1">
//                 <button
//                   className="text-gray-600 hover:text-gray-800"
//                   onClick={previousMember}
//                   aria-label="Previous"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   className="text-gray-600 hover:text-gray-800"
//                   onClick={nextMember}
//                   aria-label="Next"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//               <h2 className="text-xl font-bold">{selectedMember.name}</h2>
//               <p>Year Joined: {selectedMember.yearJoined}</p>
//               <p>Membership Type: {selectedMember.membershipType}</p>
//               <p>Status: {selectedMember.isActive ? 'Active' : 'Inactive'}</p>
//               <p>Credit Balance: {selectedMember.creditBalance}</p>
//             </>
//           ) : (
//             <>
//               <div className="p-4">
//                 <div className="flex items-center mb-4">
//                   <input
//                                       type="text"
//                                       value={searchQuery}
//                                       onChange={(e) => setSearchQuery(e.target.value)}
//                                       placeholder="Search members"
//                                       className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
//                                     />
//                                     <button className="ml-2 p-2 bg-gray-200 rounded-md">
//                                       <Search size={20} className="text-gray-600" />
//                                     </button>
//                                   </div>
//                                   <div>
//                                     {filteredMembers.length > 0 ? (
//                                       <div>
//                                         <h2 className="text-xl font-semibold mb-2">Members</h2>
//                                         <ul className="space-y-2">
//                                           {filteredMembers.map((member, index) => (
//                                             <li
//                                               key={member.id}
//                                               className="cursor-pointer text-gray-800 hover:text-blue-500"
//                                               onClick={() => openMemberDetails(member)}
//                                             >
//                                               {member.name}
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     ) : (
//                                       <p className="text-gray-600">No members found.</p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   };
                  
//                   export default MembersModal;
                  
                   


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'react-feather';

const MembersModal = ({ closeModal }) => {
  const [members, setMembers] = useState([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDetails, setShowDetails] = useState(false); // New state for showing/hiding member details

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Failed to fetch members data:', error);
      }
    };

    fetchMembers();
  }, []);

  const previousMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const nextMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMemberClick = (index) => {
    setCurrentMemberIndex(index);
    setShowDetails(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={closeModal}
          aria-label="Close"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative">
          <img
            src={filteredMembers[currentMemberIndex]?.photo}
            alt={filteredMembers[currentMemberIndex]?.name}
            className="w-full h-60 object-cover rounded-t-lg mt-4"
          />
          <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={previousMember}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={nextMember}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members"
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="ml-2 p-2 bg-gray-200 rounded-md">
              <Search size={20} className="text-gray-600" />
              </button>
              </div>
              <div className="max-h-60 overflow-y-auto">
              {filteredMembers.length > 0 ? (
              <div>
              <h2 className="text-xl font-semibold mb-2">Members</h2>
              <ul className="space-y-2">
              {filteredMembers.map((member, index) => (
              <li
              key={member.id}
              className="flex items-center space-x-4"
              onClick={() => handleMemberClick(index)}
              style={{ cursor: 'pointer' }}
              >
              <img
                                   src={member.photo}
                                   alt={member.name}
                                   className="w-10 h-10 rounded-full"
                                 />
              <span className="text-gray-800">{member.name}</span>
              {showDetails && currentMemberIndex === index && (
              <div className="absolute top-0 right-full w-56 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
              <img
                                         src={member.photo}
                                         alt={member.name}
                                         className="w-10 h-10 rounded-full"
                                       />
              <div>
              <p className="text-gray-800 font-semibold">
              {member.name}
              </p>
              <p className="text-gray-600">
              Year Joined: {member.yearJoined}
              </p>
              <p className="text-gray-600">
              Membership Type: {member.membershipType}
              </p>
              <p className="text-gray-600">
              Active: {member.isActive ? 'Yes' : 'No'}
              </p>
              <p className="text-gray-600">
              Credit Balance: {member.creditBalance}
              </p>
              </div>
              </div>
              </div>
              )}
              </li>
              ))}
              </ul>
              </div>
              ) : (
              <p className="text-gray-600">No members found.</p>
              )}
              </div>
              </div>
              </div>
              </div>
              );
              };
              
              export default MembersModal;



  
