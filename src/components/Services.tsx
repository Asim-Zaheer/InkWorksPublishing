'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Professional Formatting',
    description: 'We format your manuscript to meet industry standards for all major ebook platforms including Kindle, Apple Books, and more.',
    icon: '📝',
    color: 'from-primary-400 to-primary-600',
  },
  {
    id: 2,
    title: 'Cover Design',
    description: 'Eye-catching, professional cover designs that make your book stand out in crowded marketplaces.',
    icon: '🎨',
    color: 'from-accent-300 to-accent-400',
  },
  {
    id: 3,
    title: 'Global Distribution',
    description: 'Distribute your ebook to major platforms worldwide, reaching millions of potential readers.',
    icon: '🌍',
    color: 'from-primary-500 to-primary-700',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    description: 'Thorough proofreading and quality checks to ensure your ebook is polished and error-free.',
    icon: '✓',
    color: 'from-primary-600 to-primary-800',
  },
  {
    id: 5,
    title: 'Author Support',
    description: 'Dedicated support team to guide you through every step of the publishing process.',
    icon: '💬',
    color: 'from-accent-300 to-primary-500',
  },
  {
    id: 6,
    title: 'Marketing Tools',
    description: 'Access to promotional tools and strategies to help your book reach its target audience.',
    icon: '📊',
    color: 'from-primary-500 to-primary-700',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Icon animation
          const icon = card.querySelector('.service-icon');
          gsap.from(icon, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            scale: 0,
            rotation: 360,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
          });

          // Content animation
          const content = card.querySelector('.service-content');
          gsap.from(content, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1 + 0.3,
            ease: 'power3.out',
          });

          // Hover animation
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: 'back.out(1.7)',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
          >
            Everything You Need to Publish
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive ebook publishing services cover every step of your publishing journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}></div>

              {/* Icon */}
              <div className="service-icon mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform transition-transform duration-300`}>
                  <span className="text-4xl">{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="service-content">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Arrow icon on hover */}
              <div className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your book to life?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all hover:scale-105 shadow-xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
