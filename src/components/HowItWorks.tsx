'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: 'Submit Your Manuscript',
    description: 'Upload your completed manuscript in any format. We accept Word documents, PDFs, and plain text files.',
  },
  {
    number: 2,
    title: 'We Polish & Design',
    description: 'Our team formats your book, creates a stunning cover, and ensures everything meets professional standards.',
  },
  {
    number: 3,
    title: 'Publish & Distribute',
    description: 'Your ebook goes live on major platforms worldwide. Start reaching readers and earning royalties.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
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

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate the connecting line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        scaleX: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.inOut',
      });

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        if (step) {
          // Circle animation
          const circle = step.querySelector('.step-circle');
          gsap.from(circle, {
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            scale: 0,
            rotation: 180,
            duration: 0.8,
            delay: 0.7 + index * 0.3,
            ease: 'back.out(1.7)',
          });

          // Content animation
          const content = step.querySelector('.step-content');
          gsap.from(content, {
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: 0.9 + index * 0.3,
            ease: 'power3.out',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
        >
          How It Works
        </h2>
        <p
          ref={subtitleRef}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Three simple steps to get your book published
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div
            ref={lineRef}
            className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hidden lg:block"
            style={{ transformOrigin: 'left center' }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with number */}
                <div className="step-circle mb-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl relative">
                  <span className="text-5xl font-bold text-white">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary-400 opacity-20 animate-ping"></div>
                </div>

                {/* Content */}
                <div className="step-content">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-all hover:scale-105 shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
