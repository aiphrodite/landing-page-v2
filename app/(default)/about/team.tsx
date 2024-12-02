import Image from 'next/image'
// import TeamMember01 from '@/public/images/AbhivyaktiAhujaProfile.png'
// import TeamMember02 from '@/public/images/WillSongProfile.png'
// import TeamMember03 from '@/public/images/ThomsonYenProfile.png'

import { type TeamMember } from "./team-member-card";
import TeamMemberCard from "./team-member-card";


const teamMembers: TeamMember[] = [
  {
    name: "Abhivyakti Ahuja",
    avatar: "/images/AbhivyaktiAhujaProfile.png",
    role: "CEO & Co-founder",
    bio: "With a background in computer science and neuroscience, Abhivyakti brings a deep understanding of consumer psychology and AI simulation to revolutionize marketing. Her experience spans roles at Amazon, Accenture, and self-driving car engineering, backed by published academic work in her field.",
    social: {
      linkedin: "abhivyaktiahuja",
    },
  },
  {
    name: "Will Song",
    avatar: "/images/WillSongProfile.png",
    role: "COO & Co-founder",
    bio: "Will combines a strong foundation in computer science and entrepreneurship with hands-on experience in marketing and engineering. From TEDx to Amazon and self-driving car projects, his multidisciplinary expertise shapes product development and unites the team.",
    social: {
      linkedin: "willysong",
    },
  },
  {
    name: "Thomson Yen",
    avatar: "/images/ThomsonYenProfile.png",
    role: "CTO & Co-founder",
    bio: "A machine learning expert with a Master’s from Carnegie Mellon, Thomson has published 18 academic papers and holds a patent, showcasing his emerging leadership in the field of artificial intelligence.",
    social: {
      linkedin: "thomsonyen",
    },
  }
];

export default function Team() {
  return (
    <section 
      className="dark w-full flex flex-col items-center py-28"
      style={{ backgroundImage: 'url(/images/team-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}
    >
      <h1 className="text-4xl font-bold tracking-tight my-8 text-white">Our Founding Team</h1>
      <div className="mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  )
}