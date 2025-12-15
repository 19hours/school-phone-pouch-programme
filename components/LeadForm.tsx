'use client'

import { useEffect, useMemo, useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type LeadFormProps = { presetMessage?: string }

export default function LeadForm({ presetMessage }: LeadFormProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    school: '',
    email: '',
    message: presetMessage || ''
  })

  useEffect(() => {
    if (presetMessage) {
      setFormData(prev => ({ ...prev, message: presetMessage }))
    }
  }, [presetMessage])

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

  const isValid = useMemo(() => {
    return Boolean(formData.name && formData.role && formData.school && formData.email)
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
      const mailto = `mailto:hello@schoolphonepouch.sg?subject=School phone pouch enquiry&body=${encodeURIComponent(
        `Name: ${formData.name}\nRole: ${formData.role}\nSchool: ${formData.school}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}`
      window.location.href = mailto
      setFormState('success')
    }
  }

  return (
    <div className="bg-white shadow rounded-2xl p-8" aria-labelledby="lead-form-heading">
      <h2 id="lead-form-heading" className="text-2xl font-semibold mb-4">
        Request a Quote
      </h2>
      <form onSubmit={onSubmit} className="space-y-4 text-lg" noValidate>
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
            aria-required="true"
            aria-invalid={Boolean(error && !formData.name)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="role">
            Role *
          </label>
          <input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
            aria-required="true"
            aria-invalid={Boolean(error && !formData.role)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="school">
            School *
          </label>
          <input
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
            aria-required="true"
            aria-invalid={Boolean(error && !formData.school)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
            aria-required="true"
            aria-invalid={Boolean(error && !formData.email)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            rows={4}
          />
        </div>
        {error && (
          <p className="text-red-700 font-semibold" role="alert" aria-live="assertive">
            {error}
          </p>
        )}
        {formState === 'success' && (
          <p className="text-green-700 font-semibold" role="status" aria-live="polite">
            Thank you! We will follow up shortly.
          </p>
        )}
        {formState === 'error' && (
          <p className="text-red-700 font-semibold" role="alert" aria-live="assertive">
            We could not send your request. Please try again.
          </p>
        )}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="btn btn-primary w-full sm:w-auto"
        >
          {formState === 'submitting' ? 'Submitting...' : 'Request a Quote'}
        </button>
      </form>
    </div>
  )
}
