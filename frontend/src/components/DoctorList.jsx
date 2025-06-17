import React, { useEffect, useState } from 'react';
import api from '../api';  // Патеката до api.js може да варира според структурата

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get('/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {doctors.map(doc => (
        <div key={doc._id}>
          {doc.name} - {doc.specialty}
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
