'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Fiction Author',
    image: '👩‍💼',
    rating: 5,
    text: 'Ink made publishing my first novel incredibly easy. The platform is intuitive, and the results exceeded my expectations. My book is now available worldwide!',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Tech Writer',
    image: '👨‍💻',
    rating: 5,
    text: 'As a technical writer, I needed a professional publishing solution. Ink delivered perfectly - from formatting to distribution. Highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Self-Help Coach',
    image: '👩‍🏫',
    rating: 5,
    text: 'The support team at Ink is amazing! They guided me through every step of the publishing process. My ebook is now reaching thousands of readers.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Business Author',
    image: '👨‍💼',
    rating: 5,
    text: 'Publishing my business guide with Ink was seamless. The professional design and global distribution helped me establish credibility in my field.',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Romance Novelist',
    image: '👩‍🎨',
    rating: 5,
    text: 'I\'ve published three books through Ink, and each experience has been fantastic. The royalty system is transparent, and payments are always on time.',
  },
  {
    id: 6,
    name: 'David Park',
    role: 'Science Writer',
    image: '👨‍🔬',
    rating: 5,
    text: 'Ink\'s attention to detail is impressive. They formatted my scientific content perfectly, preserving all equations and diagrams. Truly professional!',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = 3; // Show 3 testimonials at a time on desktop
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Carousel animation
      gsap.from(carouselRef.current, {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, totalSlides]);

  // Animate slide transitions
  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
        >
          What Authors Say
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Join thousands of satisfied authors who trust Ink with their publishing journey
        </p>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            ref={carouselRef}
            className="flex transition-transform duration-800"
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
              >
                {testimonials
                  .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-2"
                    >
                      {/* Decorative gradient overlay */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>

                      {/* Quote icon */}
                      <div className="text-primary-200 text-6xl font-serif mb-4 opacity-50">
                        &ldquo;
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-accent-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        {testimonial.text}
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-3xl shadow-lg">
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-primary-600">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-primary-500 text-primary-500 hover:text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-primary-500 text-primary-500 hover:text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-3 bg-primary-500'
                  : 'w-3 h-3 bg-gray-300 hover:bg-primary-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Ready to share your story with the world?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105 shadow-xl">
            Start Publishing Now
          </button>
        </div>
      </div>
    </section>
  );
}
