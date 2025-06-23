import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { doctors } from '../assets/assets';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [cancelSuccess, setCancelSuccess] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/appointments');
        setAppointments(res.data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handlePayOnline = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPaymentConfirm(true);
  };

  const closePaymentConfirm = () => {
    setShowPaymentConfirm(false);
    setSelectedAppointment(null);
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${appointmentId}`);
      setAppointments(prev => prev.filter(app => app._id !== appointmentId));
      setCancelSuccess(true);
      setTimeout(() => setCancelSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to cancel appointment:', error);
    }
  };

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>

      {cancelSuccess && (
        <p className="text-red-600 mt-2">Appointment canceled successfully!</p>
      )}

      <div>
        {appointments.map((item, index) => {
          const doctor = doctors.find(doc => doc._id === item.doctorId);

          return (
            <div
              className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'
              key={index}
            >
              <div>
                <img
                  className='w-32 bg-indigo-50'
                  src={doctor ? doctor.image : '/default-doctor.jpg'}
                  alt={doctor ? doctor.name : 'Doctor'}
                />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>
                  {doctor ? doctor.name : `Doctor ID: ${item.doctorId}`}
                </p>
                <p className='text-zinc-700 font-medium mt-1'>Date & Time:</p>
                <p className='text-xs'>{item.date} | {item.time}</p>
                <p className='text-zinc-700 font-medium mt-1'>Booked by:</p>
                <p className='text-xs'>{item.userName} ({item.userEmail})</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button
                  onClick={() => handlePayOnline(item)}
                  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'
                >
                  Pay Online
                </button>
                <button
                  onClick={() => handleCancelAppointment(item._id)}
                  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup за потврда на плаќањето */}
      {showPaymentConfirm && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
          onClick={closePaymentConfirm}
        >
          <div
            className='bg-white p-6 rounded shadow-lg max-w-sm w-full'
            onClick={e => e.stopPropagation()} // да не се затвори ако се кликне внатре
          >
            <h2 className='text-xl font-semibold mb-4'>Payment Successful</h2>
            <p>Your payment for appointment with {selectedAppointment?.userName} is completed.</p>
            <button
              onClick={closePaymentConfirm}
              className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;


