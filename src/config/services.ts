/**
 * Services the owner confirmed. Add / remove entries here; pages and cards update themselves.
 * `promise` is shown only where the owner stated it. Do not add promises that are not true.
 */
export type Service = {
  slug: string
  name: string
  tamil: string
  photo: string
  alt: string
  promise?: string
  short: string
  heading: string
  intro: string
  problems: string[]
}

export const services: Service[] = [
  {
    slug: 'mixer-grinder',
    name: 'Mixer grinder',
    tamil: 'மிக்ஸி',
    photo: '/photos/mixer.jpg',
    alt: 'Pink three-jar mixer grinder with stainless steel jars',
    short: 'Mixer grinder (mixie) servicing and repair.',
    heading: 'Mixer grinder repair in Tirupparankundram',
    intro:
      'Looking for mixer grinder (mixie) repair in Tirupparankundram? Bring your mixer to Aruna Electricals and ask about servicing.',
    problems: ['Motor not starting', 'Running slowly or making noise', 'Jar not fitting or leaking', 'Switch or speed knob not working'],
  },
  {
    slug: 'mixer-jar',
    name: 'Mixer jar',
    tamil: 'மிக்ஸி ஜார்',
    photo: '/photos/jar.jpg',
    alt: 'Stainless steel mixer grinder jars with blades',
    promise: 'Fast service',
    short: 'Fast service for mixer jars.',
    heading: 'Mixer jar service in Tirupparankundram',
    intro: 'Mixer jar giving trouble? Aruna Electricals offers fast service for mixer jars. Bring the jar in and ask.',
    problems: ['Jar leaking at the bottom', 'Blades blunt or not turning', 'Jar not locking on the mixer'],
  },
  {
    slug: 'table-top-grinder',
    name: 'Table-top wet grinder',
    tamil: 'டேபிள்டாப் கிரைண்டர்',
    photo: '/photos/grinder.jpg',
    alt: 'Table-top wet grinder with stone rollers in a steel drum',
    short: 'Servicing for table-top wet grinders.',
    heading: 'Table-top wet grinder repair in Tirupparankundram',
    intro: 'Need wet grinder servicing near Thiruparankundram? Contact Aruna Electricals to ask about your table-top grinder.',
    problems: ['Drum not turning', 'Grinder making noise', 'Motor humming but not starting'],
  },
  {
    slug: 'iron-box',
    name: 'Iron box',
    tamil: 'அயன் பாக்ஸ்',
    photo: '/photos/iron.jpg',
    alt: 'Electric iron box',
    short: 'Servicing for electric iron boxes.',
    heading: 'Iron box repair in Tirupparankundram',
    intro: 'Iron box not working? Ask Aruna Electricals about servicing your electric iron.',
    problems: ['Not heating', 'Heating too much or too little', 'Cord or plug problem'],
  },
  {
    slug: 'induction-stove',
    name: 'Induction stove',
    tamil: 'இண்டக்ஷன் ஸ்டவ்',
    photo: '/photos/induction.jpg',
    alt: 'Basic portable induction cooker with a digital control panel',
    short: 'Servicing for induction stoves.',
    heading: 'Induction stove repair in Tirupparankundram',
    intro: 'Looking for induction stove repair in Tirupparankundram? Contact Aruna Electricals to ask about servicing.',
    problems: ['Stove not switching on', 'Showing an error or beeping', 'Not heating the vessel'],
  },
  {
    slug: 'lpg-stove',
    name: 'LPG gas stove',
    tamil: 'கேஸ் ஸ்டவ்',
    photo: '/photos/lpg.jpg',
    alt: 'Two-burner glass-top LPG gas stove',
    promise: 'Service within 2 hours',
    short: 'LPG stove servicing, within 2 hours.',
    heading: 'LPG stove service in Tirupparankundram',
    intro: 'Aruna Electricals offers LPG stove service within 2 hours. Bring your stove in and ask the shop.',
    problems: ['Weak or yellow flame', 'Burner blocked', 'Knob hard to turn'],
  },
  {
    slug: 'pressure-cooker',
    name: 'Pressure cooker',
    tamil: 'பிரஷர் குக்கர்',
    photo: '/photos/cooker.jpg',
    alt: 'Aluminium pressure cooker with lid and handle',
    promise: 'Fast service',
    short: 'Fast pressure cooker service.',
    heading: 'Pressure cooker service in Tirupparankundram',
    intro: 'Pressure cooker needs attention? Aruna Electricals offers fast pressure cooker service. Bring it to the shop.',
    problems: ['Steam leaking from the lid', 'Whistle or valve problem', 'Lid not closing properly'],
  },
  {
    slug: 'rod-heater',
    name: 'Rod heater',
    tamil: 'ஹீட்டர் ராடு',
    photo: '/photos/heater.jpg',
    alt: 'Immersion rod water heater with power cord',
    short: 'Servicing for small portable rod heaters.',
    heading: 'Portable rod heater service in Tirupparankundram',
    intro: 'Small portable rod heater not working? Ask Aruna Electricals about servicing it.',
    problems: ['Not heating water', 'Cord or plug problem', 'Tripping the switch'],
  },
]
