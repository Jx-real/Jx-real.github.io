import React, { useState } from 'react';

interface Testimonial {
  content: string;
  author: string;
}

const initialTestimonials: Testimonial[] = [
  {
    content: "Implementing Zyph Client was the best decision we made. Our performance increased by 37% within three months!",
    author: "David Wilson"
  },
  {
    content: "The analytics tools provided insights we never had access to before. The user experience is unmatched.",
    author: "Alexandra Chen"
  },
  {
    content: "We connected our entire tech stack seamlessly, saving countless development hours and resources.",
    author: "Marcus Johnson"
  },
  {
    content: "As a designer, I appreciate the attention to detail. It's intuitive and beautiful.",
    author: "Sophia Martinez"
  },
  {
    content: "Game-changing performance improvements. Can't imagine going back to our old setup.",
    author: "James Cooper"
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditedContent(testimonials[index].content);
    setEditedAuthor(testimonials[index].author);
  };

  const handleSave = (index: number) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index] = {
      content: editedContent,
      author: editedAuthor
    };
    setTestimonials(updatedTestimonials);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-8 
                transform transition-all duration-500 hover:-translate-y-2
                shadow-[0_0_30px_rgba(106,0,255,0.3)] hover:shadow-[0_0_50px_rgba(106,0,255,0.5)]
                border border-purple-900/30"
            >
              {editIndex === index ? (
                <div className="space-y-4">
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full p-2 bg-black/50 border border-purple-500 rounded-lg text-white resize-none"
                    rows={4}
                  />
                  <input
                    type="text"
                    value={editedAuthor}
                    onChange={(e) => setEditedAuthor(e.target.value)}
                    className="w-full p-2 bg-black/50 border border-purple-500 rounded-lg text-white"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSave(index)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-purple-200 text-lg mb-6">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;