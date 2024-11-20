import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { Loader2, Send, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'




function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

 

  const onSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-green-300 p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-4">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="mt-6">
              <p className="flex items-center mb-2">
                <CheckCircle className="mr-2" size={20} />
                24/7 Support
              </p>
              <p className="flex items-center mb-2">
                <CheckCircle className="mr-2" size={20} />
                Free Consultation
              </p>
              <p className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Expert Team
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Name
                </label>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    }
                  })}
                  className="peer h-14 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="peer h-32 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500 resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Message
                </label>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 text-white py-3 rounded-lg font-semibold text-lg transition-all hover:from-green-500 hover:to-green-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : isSubmitted ? (
                  <CheckCircle className="mr-2 h-5 w-5" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact