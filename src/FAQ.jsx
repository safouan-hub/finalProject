

import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"


const faqs = [
    {
      question: "What types of fertilizers do you offer?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return."
    },
    {
      question: "How do I choose the right fertilizer for my crops?",
      answer: "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days."
    },
    {
      question: "How do I properly apply fertilizers for better yields?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination."
    },
    {
      question: "How should fertilizers be stored safely and effectively?",
      answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site."
    },
    {
      question: "Where can I find technical information about a specific product?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay."
    }
  ]




export default function Component() {
    const [openIndex, setOpenIndex] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
  
    const filteredFAQs = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    const toggleQuestion = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        All You Need to Know
        </h2>
        <div className="max-w-md mx-auto mb-8">
          
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                variant="ghost"
                className="w-full px-4 py-2 text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}