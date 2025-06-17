import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HeartPulse,
  Mail,
  Code,
  LayoutDashboard,
  Users2,
  Stethoscope,
} from 'lucide-react'

const positions = [
  {
    title: 'Frontend Developer',
    description: 'Create responsive and engaging user interfaces with React.',
    icon: <LayoutDashboard className='w-8 h-8 text-primary' />,
  },
  {
    title: 'UX/UI Designer',
    description: 'Design intuitive user experiences and visuals for healthcare platforms.',
    icon: <Users2 className='w-8 h-8 text-primary' />,
  },
  {
    title: 'Healthcare Specialist',
    description: 'Join our medical staff and contribute with your expertise.',
    icon: <Stethoscope className='w-8 h-8 text-primary' />,
  },
  {
    title: 'Medical Nurse',
    description: 'Provide compassionate care and assist doctors in day-to-day procedures.',
    icon: <HeartPulse className='w-8 h-8 text-primary' />,
  },
  {
    title: 'Receptionist',
    description: 'Manage patient appointments, calls, and provide front-desk support.',
    icon: <Mail className='w-8 h-8 text-primary' />,
  },
  {
    title: 'Lab Technician',
    description: 'Handle medical equipment and perform routine lab tests and diagnostics.',
    icon: <Code className='w-8 h-8 text-primary' />,
  },
]

const Careers = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-[80vh] px-4 py-12 text-gray-700'>
      <h1 className='text-3xl font-bold text-center mb-4'>Careers at XMEDIKA</h1>
      <p className='text-center max-w-2xl mx-auto mb-10'>
        We’re always looking for talented people to join our team. Whether you're a developer, designer, or have a passion for healthcare, we want to hear from you!
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {positions.map((pos, idx) => (
          <div key={idx} className='border p-6 rounded-xl shadow hover:shadow-md transition'>
            <div className='mb-4'>{pos.icon}</div>
            <h2 className='text-xl font-semibold mb-2'>{pos.title}</h2>
            <p className='text-sm text-gray-600 mb-4'>{pos.description}</p>
            <button
              onClick={() => navigate('/apply')}
              className='px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition rounded'
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <p className='text-center text-sm mt-10 text-gray-500'>
        For inquiries, contact us at <span className='text-primary font-medium'>careers@xmedika.com</span>.
      </p>
    </div>
  )
}

export default Careers



