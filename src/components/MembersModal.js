import React, { useState, useEffect } from 'react';

const MembersModal = ({ closeModal }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3000/members');
        const data = await response.json();
        console.log(data.members); // Add this line to check the received members data
        setMembers(data.members);
      } catch (error) {
        console.error('Failed to fetch members data:', error);
      }
    };

    fetchMembers();
  }, []);

  console.log('Members:', members); // Add this line for debugging

  return (
    <div className="bg-white text-black rounded-lg p-8">
      {members && members.map((member) => (
        <div key={member.id} className="member-card mb-4">
          <img src={member.photo} alt={member.name} className="member-photo" />
          <h2 className="text-xl font-bold">{member.name}</h2>
          <p>Year Joined: {member.yearJoined}</p>
          <p>Membership Type: {member.membershipType}</p>
          <p>Status: {member.isActive ? 'Active' : 'Inactive'}</p>
          <p>Credit Balance: {member.creditBalance}</p>
        </div>
      ))}
      <button className="exit-button" onClick={closeModal}>
        Exit
      </button>
    </div>
  );
};

export default MembersModal;
