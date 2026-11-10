const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create a responsive login page with email and password fields.",
        date: "2026-10-31",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Dashboard UI",
        description: "Improve the dashboard layout and make it more user friendly.",
        date: "2026-11-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Navbar",
        description: "Build a responsive navigation bar for the application.",
        date: "2026-10-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Mobile Layout",
        description: "Resolve the responsiveness issues on smaller screens.",
        date: "2026-10-27",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Develop API Integration",
        description: "Integrate the frontend with the backend APIs.",
        date: "2026-10-31",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Write unit tests for the authentication module.",
        date: "2026-11-02",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Setup",
        description: "Configure the database and create required collections.",
        date: "2026-10-25",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    name: "Aman Gupta",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create Employee Profile",
        description: "Develop an employee profile page with personal details.",
        date: "2026-10-31",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Project Report",
        description: "Prepare a detailed report covering the project progress.",
        date: "2026-11-03",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Design Landing Page",
        description: "Create the landing page layout with proper styling.",
        date: "2026-10-26",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Authentication Bug",
        description: "Resolve the issue occurring during user authentication.",
        date: "2026-10-29",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Add Search Feature",
        description: "Implement search functionality for employee records.",
        date: "2026-11-04",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement Task Filters",
        description: "Add filters to sort tasks according to their status.",
        date: "2026-10-31",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Footer",
        description: "Build and style the application footer.",
        date: "2026-10-24",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize Website",
        description: "Improve website loading speed and overall performance.",
        date: "2026-11-02",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update User Settings",
        description: "Complete the user settings functionality.",
        date: "2026-10-28",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    name: "Rohit Singh",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Build Admin Panel",
        description: "Develop the admin panel to manage employees and tasks.",
        date: "2026-10-31",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Add Employee Management",
        description: "Implement functionality to add and remove employees.",
        date: "2026-11-03",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Task Cards",
        description: "Design reusable task cards to display task information.",
        date: "2026-10-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Logout Functionality",
        description: "Resolve the logout issue and clear stored user data.",
        date: "2026-10-27",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Add Notifications",
        description: "Implement notifications for newly assigned tasks.",
        date: "2026-11-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Routing",
        description: "Configure application routes for admin and employees.",
        date: "2026-10-23",
        category: "Development"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setlocalStorage =()=>{

    localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
}

export const getloacalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
      const admin=JSON.parse(localStorage.getItem('admin'))

    return{admin,employees}
}