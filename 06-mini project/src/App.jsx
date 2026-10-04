import React from 'react'
import Section1 from './components/section 1/section1'
import Section2 from './components/section 2/section2'
const App = () => {

 const users = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description:
      "I am a frontend developer who loves creating clean and interactive web applications.",
    status: "satisfied",
    button: "apply",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description:
      "I enjoy learning new technologies and building useful projects with React and JavaScript.",
    status: "happy",
    button: "apply",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description:
      "I am passionate about solving problems and improving my development skills every day.",
    status: "available",
    button: "apply",
  },
]; 

  return (
    <div>
      <Section1 users={users} />
      <Section2/>

    </div>
  )
}

export default App