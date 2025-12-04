'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const books = [
  {
    id: 1,
    title: 'The Digital Mind',
    author: 'Sarah Johnson',
    category: 'Technology',
    color: 'from-primary-500 to-primary-700',
  },
  {
    id: 2,
    title: 'Creative Coding',
    author: 'Michael Chen',
    category: 'Programming',
    color: 'from-accent-300 to-accent-400',
  },
  {
    id: 3,
    title: 'Design Thinking',
    author: 'Emma Williams',
    category: 'Design',
    color: 'from-primary-400 to-primary-600',
  },
  {
    id: 4,
    title: 'Modern Web Dev',
    author: 'David Park',
    category: 'Development',
    color: 'from-primary-600 to-primary-800',
  },
];

export default function FeaturedBooks() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 100,
            rotation: -5,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
          });

          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
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
      id="books"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
        >
          Featured Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${book.color} p-8 flex flex-col justify-between`}
                >
                  <div>
                    <div className="text-white/80 text-sm font-semibold mb-4">
                      {book.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {book.title}
                    </h3>
                    <p className="text-white/90 text-sm">by {book.author}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-full h-1 bg-white/30 rounded"></div>
                    <div className="w-3/4 h-1 bg-white/30 rounded"></div>
                    <div className="w-1/2 h-1 bg-white/30 rounded"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* <button className="mt-4 w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                View Details
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
