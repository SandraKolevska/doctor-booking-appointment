import React, { useState } from 'react'

const Apply = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    position: '',
    message: '',
    cv: null
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm({
      ...form,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('fullName', form.fullName)
    formData.append('email', form.email)
    formData.append('position', form.position)
    formData.append('message', form.message)
    formData.append('cv', form.cv)

    try {
      const res = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        body: formData
      })

      if (res.ok) {
        console.log('Form submitted!')
        setSubmitted(true)
        setForm({
          fullName: '',
          email: '',
          position: '',
          message: '',
          cv: null
        })
      } else {
        console.error('Error submitting form')
        alert('Something went wrong!')
      }
    } catch (err) {
      console.error('Request failed:', err)
      alert('Failed to submit application')
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-10 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Apply for a Job</h1>

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold text-xl">Your application has been submitted!</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Apply Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Job Position"
            value={form.position}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
          />
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            className="w-full"
            accept=".pdf,.doc,.docx"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded hover:bg-gray-800 transition-all"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  )
}

export default Apply
