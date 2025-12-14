'use client'

import { useMemo, useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadForm({ presetMessage }: { presetMessage?: string }) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    school: '',
    email: '',
    message: presetMessage || ''
  })

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

  const isValid = useMemo(() => {
    return formData.name && formData.role && formData.school && formData.email
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValid) {
      setError('Please complete all required fields.')
      return
    }
    setFormState('submitting')
    setError(null)

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        if (!res.ok) throw new Error('Submission failed')
        setFormState('success')
      } catch (err) {
        console.error(err)
        setFormState('error')
        setError('There was an issue sending your request. Please try again or use WhatsApp.')
      }
    } else {
      const mailto = `mailto:hello@chu-tech.sg?subject=School phone pouch enquiry&body=${encodeURIComponent(`Name: ${formData.name}\nRole: ${formData.role}\nSchool: ${formData.school}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`
      window.location.href = mailto
      setFormState('success')
    }
  }

  return (
    <div className="bg-white shadow rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
      <form onSubmit={onSubmit} className="space-y-4 text-lg">
        <div>
          <label className="block font-semibold mb-1">Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Role *</label>
          <input name="role" value={formData.role} onChange={handleChange} className="w-full border rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">School *</label>
          <input name="school" value={formData.school} onChange={handleChange} className="w-full border rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border rounded-lg px-4 py-3" rows={4} />
        </div>
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        {formState === 'success' && <p className="text-green-700 font-semibold">Thank you! We will follow up shortly.</p>}
        {formState === 'error' && <p className="text-red-600 font-semibold">We could not send your request. Please try again.</p>}
        <button type="submit" disabled={formState === 'submitting'} className="btn btn-primary w-full sm:w-auto">
          {formState === 'submitting' ? 'Submitting...' : 'Request a Quote'}
        </button>
      </form>
    </div>
  )
}
