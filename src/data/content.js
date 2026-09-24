export const brand = {
  name: 'Pulseora',
  tagline: 'Live events, conferences & summits',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Testimonial', to: '/testimonial' },
  { label: 'Stories', to: '/stories' },
  { label: 'Faq', to: '/faq' },
]

export const supporters = [
  'Apple',
  'Google',
  'Amazon',
  'SpaceX',
  'Meta',
  'Black+Decker',
  'Zion',
  'etc.',
]

export const events = [
  {
    slug: 'inner-outer-2025',
    title: 'Inner/Outer 2025',
    date: 'Jun 18, 2025, 7:00 PM',
    location: 'Kraftwerk Berlin, Atrium',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
    description:
      'A dual-stage summit exploring the space between personal craft and public impact — talks, installations and late-night sessions.',
    tickets: [
      { name: 'General Admission', price: '₹8,999', includes: 'Mainstage access, welcome drinks, afterparty' },
      { name: 'Pro Pass', price: '₹14,999', includes: 'All stages + workshops + lounge access' },
      { name: 'VIP Circle', price: '₹24,999', includes: 'Front row, mentor circles, closing dinner' },
    ],
    schedule: [
      { time: '16:00 – 18:00', title: 'Check-In & Welcome Drinks', note: 'Registration, badge pickup, ambient installations.' },
      { time: '18:00 – 19:30', title: 'Opening Keynote', note: '“Designing for Tomorrow: Intuition, Tech & Culture”' },
      { time: '19:30 – 21:00', title: 'Inner Circles', note: 'Small-group conversations with speakers and founders.' },
      { time: '21:00 – Late', title: 'Outer Nights', note: 'Rooftop sessions with Berlin DJs and projection art.' },
    ],
  },
  {
    slug: 'future-front-2025',
    title: 'Future Front 2025',
    date: 'Jun 6, 2025, 3:10 AM',
    location: 'Arena Berlin',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
    description:
      'Where product, brand and culture collide. Three stages of forward-looking talks and hands-on labs.',
    tickets: [
      { name: 'Day Pass', price: '₹7,999', includes: 'All day stages + expo floor' },
      { name: 'Builder Pass', price: '₹13,999', includes: 'Stages + labs + networking dinner' },
      { name: 'Partner Pass', price: '₹21,999', includes: 'Everything + partner lounge' },
    ],
    schedule: [
      { time: '09:30 – 10:00', title: 'Coffee & Light Breakfast', note: 'Open lounge with design books & art zines.' },
      { time: '10:00 – 12:30', title: 'Front Stage Talks', note: 'AI x UX, emotional interfaces, craft renaissance.' },
      { time: '13:30 – 16:00', title: 'Breakout Labs', note: 'Product leadership, branding, circular design.' },
      { time: '19:00 – Late', title: 'Front Party', note: 'Live screen printing, visual projection art.' },
    ],
  },
  {
    slug: 'system-shift-2025',
    title: 'System Shift 2025',
    date: 'Jun 5, 2025, 3:45 PM',
    location: 'Funkhaus Berlin',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description:
      'A systems-level conference for teams redesigning how products, brands and organisations work.',
    tickets: [
      { name: 'Standard', price: '₹9,999', includes: 'Full conference access' },
      { name: 'Team of 4', price: '₹34,999', includes: 'Four badges + team workshop' },
      { name: 'Executive', price: '₹27,999', includes: 'Keynotes + private roundtable' },
    ],
    schedule: [
      { time: '15:00 – 16:00', title: 'Doors & Soundcheck', note: 'Badge pickup and ambient sets.' },
      { time: '16:00 – 18:00', title: 'Systems Keynotes', note: 'How leading teams ship under constraint.' },
      { time: '18:00 – 19:30', title: 'Workshops', note: 'Choose-your-track deep dives.' },
      { time: '20:00 – Late', title: 'Shift Session', note: 'Live AV performance in the main hall.' },
    ],
  },
  {
    slug: 'orbit-2025',
    title: 'ORBIT 2025',
    date: 'May 28, 2025, 8:05 PM',
    location: 'Velodrom Berlin',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    description:
      'Night-format gathering for founders, designers and artists — talks by day, orbit after dark.',
    tickets: [
      { name: 'Night Pass', price: '₹6,999', includes: 'Evening program + afterparty' },
      { name: 'Full Orbit', price: '₹12,999', includes: 'Day + night + workshops' },
      { name: 'Orbit Circle', price: '₹19,999', includes: 'All access + artist dinner' },
    ],
    schedule: [
      { time: '17:00 – 18:30', title: 'Sunset Talks', note: 'Short-form talks from the Orbit lineup.' },
      { time: '18:30 – 20:00', title: 'Dinner in Motion', note: 'Shared tables, street-food pop-up.' },
      { time: '20:00 – 01:00', title: 'ORBIT Live', note: 'DJs, live visuals, installations.' },
    ],
  },
  {
    slug: 'dawn-2025',
    title: 'DAWN 2025',
    date: 'Jun 2, 2025, 6:00 AM',
    location: 'Tempelhof Field',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
    description:
      'A sunrise festival of movement, sound and ideas — start the day differently.',
    tickets: [
      { name: 'Early Bird', price: '₹4,999', includes: 'Sunrise session + breakfast' },
      { name: 'Full Dawn', price: '₹8,999', includes: 'Morning + workshops + brunch' },
      { name: 'Host Pass', price: '₹15,999', includes: 'All access + host lounge' },
    ],
    schedule: [
      { time: '06:00 – 07:00', title: 'Sunrise Set', note: 'Open-air ambient performance.' },
      { time: '07:00 – 09:00', title: 'Talks & Movement', note: 'Ideas, breathwork and light sessions.' },
      { time: '09:00 – 11:00', title: 'Brunch Market', note: 'Local makers, food and coffee.' },
    ],
  },
]

export const speakers = [
  {
    slug: 'dr-marcus-feldman',
    name: 'Dr. Marcus Feldman',
    role: 'Systems Researcher',
    bio: 'MIT-trained researcher exploring human-centred AI and ethical product systems.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'juno-reyes',
    name: 'Juno Reyes',
    role: 'Creative Director',
    bio: 'Award-winning CD shaping culture-first brands for music and fashion houses.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'leah-mboya',
    name: 'Leah Mboya',
    role: 'Product Leader',
    bio: 'VP of Design building accessible products used by millions across Africa and Europe.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'amina-suleiman',
    name: 'Amina Suleiman',
    role: 'Founder & Speaker',
    bio: 'Founder of a climate-tech studio; speaks on circular design and future craft.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'elena-marquez',
    name: 'Elena Marquez',
    role: 'Experience Designer',
    bio: 'Designs immersive spatial experiences for museums, festivals and retail.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'daniel-varga',
    name: 'Daniel Varga',
    role: 'Engineering Manager',
    bio: 'Bridges design and engineering — previously led frontend platforms at scale.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
]

export const stories = [
  {
    slug: 'behind-the-scenes',
    title: 'Behind the Scenes: A Moment of Chaos and Magic',
    date: 'May 25, 2025',
    excerpt:
      "That's the beauty of live events. They're alive. Imperfect. Unscripted. But when the curtain rises, the energy takes over.",
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    slug: 'night-that-changed-everything',
    title: 'The Night That Changed Everything',
    date: 'May 25, 2025',
    excerpt:
      "I wasn't supposed to go to that concert. A last-minute invite, a rough week — and somehow the best decision of my year.",
    image:
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1000&q=80',
  },
  {
    slug: 'mindful-moments',
    title: 'The Power of Mindful Moments — Part 2',
    date: 'May 29, 2025',
    excerpt:
      'Not major life events, but the tiny constant buzz of everything happening all at once — and how to step out of it.',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
  },
]

export const testimonials = [
  {
    brand: 'Eventory',
    quote:
      'We used Pulseora to manage a 500+ attendee tech conference, and it handled everything from registration to real-time updates flawlessly.',
    name: 'Priya Nair',
    role: 'Head of Events',
    company: 'NorthStar Conferences',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    brand: 'EventHive',
    quote:
      'Pulseora made it incredibly easy to list and promote our local music nights. The ticketing tools helped us sell out 3 events in a row.',
    name: 'Liam Rodgers',
    role: 'Event Coordinator',
    company: 'Urban Pulse Media',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    brand: 'FestFinder',
    quote:
      'We list our food and music festivals every year, and the visibility is unmatched. Their audience is exactly who we want.',
    name: 'Barbara Bennett',
    role: 'Marketing Director',
    company: 'Coastal Eats & Beats',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
]

export const faqs = [
  {
    q: 'What are the events?',
    a: 'Pulseora hosts live conferences, summits and night-format gatherings across design, product, music and culture — from keynotes and workshops to afterparties.',
  },
  {
    q: 'How do I buy tickets?',
    a: 'Pick an event, choose your pass tier and complete checkout. You will receive a QR code by email — show it at check-in on event day.',
  },
  {
    q: 'What is the venue?',
    a: 'Venues vary by event and are listed on each event page. Our Berlin editions are hosted at Kraftwerk, Arena Berlin, Funkhaus and Tempelhof Field.',
  },
  {
    q: 'Are there age restrictions?',
    a: 'Day programs are all-ages with a guardian. Night-format parties are 18+ unless noted otherwise on the event page.',
  },
  {
    q: 'What should I bring?',
    a: 'Your ticket QR, a photo ID and comfortable shoes. Workshops also benefit from a laptop or notebook. Cameras are welcome.',
  },
]

export const timeline = [
  {
    day: 'Day 1: August 23',
    subtitle: 'Arrival & Inspiration (Evening kickoff)',
    items: [
      {
        time: '16:00–18:00',
        title: 'Check-In & Welcome Drinks',
        note: 'Location: Kraftwerk Berlin, Atrium — Registration, badge pickup, meet & greet with ambient design installations.',
      },
      {
        time: '18:00–19:00',
        title: 'Opening Keynote',
        note: '“Designing for Tomorrow: Intuition, Tech & Culture” — Speaker: Karina Layte',
      },
      {
        time: '19:00–21:00',
        title: 'Welcome Dinner & Networking',
        note: 'Rooftop dining experience with Berlin skyline views.',
      },
    ],
  },
  {
    day: 'Day 2: August 24',
    subtitle: 'Talks, Panels & Studio Sessions',
    items: [
      {
        time: '09:30–10:00',
        title: 'Morning Coffee & Light Breakfast',
        note: 'Open lounge with design books & art zines.',
      },
      {
        time: '10:00–12:00',
        title: 'Mainstage Talks',
        note: 'The Emotional Interface · AI x UX · The Craft Renaissance',
      },
      {
        time: '12:00–13:30',
        title: 'Lunch Break',
        note: 'Curated food trucks + Berlin street art pop-up.',
      },
      {
        time: '13:30–15:30',
        title: 'Breakout Panels & Fireside Chats',
        note: 'Product Design Leadership · Branding for Future Markets · Circular Design',
      },
      {
        time: '16:00–18:00',
        title: 'Design Studio Sessions (Workshops)',
        note: 'Figma Power Moves · Designing with AI Prompts · Spatial UX in AR/VR',
      },
      {
        time: '19:00–Late',
        title: 'Design x Music Party',
        note: 'Visual projection art, Berlin DJs, live screen printing stations.',
      },
    ],
  },
  {
    day: 'Day 3: August 25',
    subtitle: 'Collaboration & City Vibes',
    items: [
      {
        time: '09:30–11:00',
        title: 'Creative Morning Walks',
        note: 'Guided street design tour of Kreuzberg or Neukölln.',
      },
      {
        time: '11:00–13:00',
        title: 'Hack & Sketch Sessions',
        note: 'Themes: Mobility, Wellness, Post-Screen Interfaces.',
      },
      {
        time: '14:00–16:00',
        title: 'Portfolio Reviews & Mentorship Circles',
        note: 'Book 1-on-1 slots with industry mentors & design leads.',
      },
      {
        time: '16:30–18:30',
        title: 'Closing Panel: “What’s Next?”',
        note: 'Global voices reflecting on emerging trends & ethical design futures.',
      },
      {
        time: '18:30–21:00',
        title: 'Closing Dinner & Design Awards',
        note: 'Celebrate best ideas from sketch/hack sessions + surprise performance.',
      },
    ],
  },
]

export const heroAvatars = [
  'https://i.pravatar.cc/112?img=5',
  'https://i.pravatar.cc/112?img=11',
  'https://i.pravatar.cc/112?img=16',
  'https://i.pravatar.cc/112?img=26',
  'https://i.pravatar.cc/112?img=33',
]
