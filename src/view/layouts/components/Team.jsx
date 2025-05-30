import React from 'react';
import './Team.css';

const hod = {
  name: 'Mr. Harish Bakrochiya',
  position: 'Head of Logistics',
  image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
  phone: '+919328390067',
};

const employees = [
  {
    id: 1,
    name: 'Jignesh',
    position: 'Manager',
    image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    phone: '+918141598731',
  },
  {
    id: 2,
    name: 'Rohit',
    position: 'Employee',
    image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    phone: '+919274494465',
  },
  {
    id: 3,
    name: 'Pankaj',
    position: 'Employee',
    image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    phone: '+919879859566',
  },
  {
    id: 4,
    name: 'Safi ',
    position: 'Employee',
    image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    phone: '+919376915312',
  },
];

const Team = () => {
  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>

      {/* HOD Card */}
      <div className="hod-card">
        <img src={hod.image} alt={hod.name} className="hod-img" />
        <h3>{hod.name}</h3>
        <p>{hod.position}</p>
        <button onClick={() => openWhatsApp(hod.phone)}>Contact on WhatsApp</button>
      </div>

      {/* Employee Cards */}
      <div className="employee-grid">
        {employees.map((emp) => (
          <div key={emp.id} className="employee-card">
            <img src={emp.image} alt={emp.name} className="employee-img" />
            <h4>{emp.name}</h4>
            <p>{emp.position}</p>
            <button onClick={() => openWhatsApp(emp.phone)}>WhatsApp</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
