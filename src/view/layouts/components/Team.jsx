import React from 'react';

const hod = {
  name: 'Mr. Harish Bakrochiya',
  position: 'Head of Logistics',
  image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
  phone: '+919998459469',
};

const employees = [
  {
    id: 1,
    name: 'Jignesh',
    position: 'Manager',
    image: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    phone: '+919558859469',
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
    <section id="team" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Meet Our Team</h2>

        {/* HOD Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md mx-auto mb-16">
          <img
            src={hod.image}
            alt={hod.name}
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-teal-500"
          />
          <h3 className="text-xl font-semibold text-gray-800">{hod.name}</h3>
          <p className="text-gray-500 mb-4">{hod.position}</p>
          <button
            onClick={() => openWhatsApp(hod.phone)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition duration-200"
          >
            Contact on WhatsApp
          </button>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={emp.image}
                alt={emp.name}
                className="w-24 h-24 mx-auto rounded-full mb-3 border-2 border-teal-300"
              />
              <h4 className="text-lg font-medium text-gray-800">{emp.name}</h4>
              <p className="text-gray-500 mb-3">{emp.position}</p>
              <button
                onClick={() => openWhatsApp(emp.phone)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
              >
                WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
