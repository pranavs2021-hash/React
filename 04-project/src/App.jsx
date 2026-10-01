import React from 'react';
import "remixicon/fonts/remixicon.css";
import Card from './components/card';

const App = () => {

      const arr= [
  {
    id: 1,
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$85,000 - $110,000",
    location: "Mumbai, India",
    description: "Build scalable cloud and AI-powered applications."
  },

  {
    id: 2,
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$90,000 - $120,000",
    location: "Mumbai, India",
    description: "Develop modern web experiences for Google's products."
  },

  {
    id: 3,
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$105,000 - $140,000",
    location: "Bengaluru, India",
    description: "Design highly scalable backend services and APIs."
  },

  {
    id: 4,
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$80,000 - $105,000",
    location: "Hyderabad, India",
    description: "Create engaging interfaces used by millions of users."
  },

  {
    id: 5,
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    datePosted: "5 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$110,000 - $145,000",
    location: "Bengaluru, India",
    description: "Build high-quality applications for Apple's platforms."
  },

  {
    id: 6,
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    datePosted: "1 week ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$115,000 - $150,000",
    location: "Mumbai, India",
    description: "Build systems powering Netflix's global streaming platform."
  },

  {
    id: 7,
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    datePosted: "2 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$60,000 - $80,000",
    location: "Noida, India",
    description: "Develop beautiful and accessible creative software interfaces."
  },

  {
    id: 8,
    company: "IBM",
    logo: "https://logo.clearbit.com/ibm.com",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$95,000 - $130,000",
    location: "Pune, India",
    description: "Develop and maintain enterprise cloud infrastructure."
  },

  {
    id: 9,
    company: "NVIDIA",
    logo: "https://logo.clearbit.com/nvidia.com",
    datePosted: "3 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$120,000 - $160,000",
    location: "Pune, India",
    description: "Work on AI, GPU computing and machine learning systems."
  },

  {
    id: 10,
    company: "Salesforce",
    logo: "https://logo.clearbit.com/salesforce.com",
    datePosted: "1 week ago",
    post: "Software Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$65,000 - $90,000",
    location: "Mumbai, India",
    description: "Build CRM features and cloud-based business applications."
  }
]

  return (
    <div className='parent'>
    {arr.map(function(elem){
      return <Card  company={elem.company}/>})}
       
    </div>
  )
}

export default App