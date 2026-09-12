import { ProfileData } from '../types';

export const portfolioData: ProfileData = {
  name: 'Siddhesh Ghadi',
  eyebrow: 'ROBOTICS + VLSI + EMBEDDED SYSTEMS',
  title: 'Robotic Engineer & Electronics Specialist',
  positioning: 'Technology builder working across autonomous robotics, FPGA/VHDL architecture, embedded hardware, and digital design.',
  summary: 'Building practical systems across electronics, PCB design, intelligent hardware, and AI-driven automation.',
  location: 'Mumbai, Maharashtra, India',
  email: 'ghadisiddhesh469@gmail.com',
  phone: '+917666785250',
  linkedin: 'https://www.linkedin.com/in/siddhesh-ghadi-a59a562b2',
  github: 'https://github.com/siddheshghadi',
  status: 'OPEN TO OPPORTUNITIES',
  coordinates: '19.0760° N, 72.8777° E',
  education: {
    institution: "University of Mumbai (Vidyavardhini's College of Engineering & Technology, VCET)",
    degree: 'Bachelor of Electronics Engineering (VLSI Design & Technology)',
    specialization: 'VLSI Design, Robotics & Embedded Systems',
    year: 'Aug 2023 – May 2027',
    location: 'Mumbai, India',
    coursework: ['Data Structures (DS)', 'Internet of Things (IoT)', 'Digital Electronics', 'VLSI Design'],
    secondary: [
      {
        year: '2022',
        institution: 'Maharashtra State Board',
        degree: 'HSC (Class XII)',
        score: '62.18%'
      },
      {
        year: '2020',
        institution: 'Maharashtra State Board',
        degree: 'SSC (Class X)',
        score: '86.60%'
      }
    ]
  },
  experiences: [
    {
      id: 'phoenix-ai',
      role: 'UAV Robotics Intern',
      company: 'Phoenix AI Tech',
      location: 'Mumbai, India',
      period: 'Dec 2025 – Present',
      type: 'Internship',
      description: 'Building an autonomous quadcopter platform on a carbon fiber frame, transitioning from manual flight control to autonomous navigation and mission execution.',
      highlights: [
        'Built autonomous quadcopter platform on carbon fiber airframe, transitioning to autonomous navigation.',
        'Implemented embedded control architecture integrating Pixhawk for flight stabilization and real-time decision-making.',
        'Designed custom PCB layouts and electronic interfaces using KiCad, ensuring reliable hardware integration.',
        'Led end-to-end system integration, telemetry monitoring, and flight testing to guarantee mission reliability.'
      ],
      tags: ['Autonomous UAVs', 'Pixhawk', 'KiCad', 'Sensor Fusion', 'Carbon Fiber Quadcopter']
    },
    {
      id: 'texas-instruments',
      role: 'Technical Team Member',
      company: 'Texas Instruments',
      location: 'Mumbai, India',
      period: 'Dec 2023 – Dec 2025',
      type: 'Technical Member',
      description: 'Conducted hands-on sessions to teach students electronics fundamentals from basic to advanced levels while building robotics platforms.',
      highlights: [
        'Conducted hands-on sessions teaching electronics fundamentals from basic to advanced levels.',
        'Explained working principles of electronic devices and guided practical hardware usage.',
        'Developed a line-following robot using sensor integration and dynamic control logic.',
        'Supported students in circuit design, hardware debugging, and real-world implementation.'
      ],
      tags: ['Robotics', 'Sensor Integration', 'Circuit Design', 'Arduino', 'Debugging']
    },
    {
      id: 'mdb-electrosoft',
      role: 'VLSI Intern',
      company: 'MDB Electrosoft Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'March 2026 – April 2026',
      type: 'Internship',
      description: 'Engaged in core digital circuit architecture, RTL coding, and FPGA implementation methodologies.',
      highlights: [
        'Learned about circuits, FPGA, and RTL coding fundamentals.',
        'Explored digital design logic, gate-level structures, and simulation workflows.',
        'Collaborated on circuit verification and hardware synthesis techniques.'
      ],
      tags: ['VLSI', 'FPGA', 'RTL Coding', 'Digital Design', 'Circuits']
    },
    {
      id: 'oracle',
      role: 'Intern – Database Foundations',
      company: 'Oracle Academy',
      location: 'Vasai, Maharashtra, India',
      period: 'June 2025 – July 2025',
      type: 'Internship',
      description: 'Learned core database fundamentals including SQL and relational database concepts.',
      highlights: [
        'Mastered foundational concepts in SQL query optimization and relational schema integrity.',
        'Analyzed data schema normalization and structured database architectures.',
        'Applied database models to connected IoT and embedded software telemetry.'
      ],
      tags: ['SQL', 'Relational Databases', 'Database Foundations', 'Data Modeling']
    },
    {
      id: 'codtech',
      role: 'VLSI Intern',
      company: 'CODTECH IT SOLUTIONS',
      location: 'Maharashtra, India',
      period: 'Dec 2024 – Jan 2025',
      type: 'Internship',
      description: 'Completed a VLSI Internship learning basic concepts of VLSI design, semiconductor devices, and digital electronics.',
      highlights: [
        'Studied semiconductor fundamentals and CMOS device behavior.',
        'Reviewed digital electronics schematics and gate-level logic implementations.',
        'Explored foundational simulation environments for integrated circuits.'
      ],
      tags: ['VLSI Design', 'Semiconductor Devices', 'Digital Electronics', 'Simulation']
    }
  ],
  skillCategories: [
    {
      badge: 'ROBT',
      category: 'Robotics & UAV',
      description: 'UAV integration, Pixhawk, sensor fusion, real-time control, telemetry.'
    },
    {
      badge: 'FPGA',
      category: 'FPGA & Digital Design',
      description: 'VHDL, RTL design, FPGA implementation (Spartan-7), verification, 8-bit ALU.'
    },
    {
      badge: 'PCB',
      category: 'PCB & Electronics',
      description: 'KiCad, circuit design, debugging, custom PCB layouts, digital ICs (555).'
    },
    {
      badge: 'EMBD',
      category: 'Embedded Systems',
      description: 'Arduino, Pixhawk, hardware-software integration, sensors, actuators.'
    },
    {
      badge: 'CODE / AI',
      category: 'Programming & AI Automation',
      description: 'C, Embedded C, Python, n8n, AI Agents, API Integration, Webhooks.'
    },
    {
      badge: 'TOOL',
      category: 'Design & Sim Tools',
      description: 'MATLAB, LTspice, Microwind, AutoCAD, 3D CAD modeling.'
    }
  ],
  certifications: [
    {
      id: 'oracle-academy',
      title: 'Oracle Database Foundation Internship',
      issuer: 'Oracle Academy',
      date: 'July 2025',
      description: 'Completed foundational relational database architecture, SQL query design, and data modeling training.'
    },
    {
      id: 'deloitte-australia',
      title: 'Technology Job Simulation',
      issuer: 'Deloitte Australia',
      date: '2025',
      description: 'Completed enterprise technology analysis, systems implementation strategy, and digital architecture simulations.'
    },
    {
      id: 'mdb-internship',
      title: '10-Day VLSI Internship',
      issuer: 'MDB Electrosoft Pvt. Ltd.',
      date: 'Jan 2026',
      description: 'Completed intensive hands-on VLSI, FPGA, and RTL digital architecture training program.'
    },
    {
      id: 'ai-tools',
      title: 'AI Tools Workshop (3 Hours)',
      issuer: 'B10X',
      date: '2025',
      description: 'Explored generative AI tools, prompt engineering, and automated productivity workflows.'
    },
    {
      id: 'siemens-mobility',
      title: 'Commercial Project Manager Job Simulation',
      issuer: 'Siemens Mobility',
      date: '2025',
      description: 'Completed practical simulation covering engineering risk mitigation and complex mobility infrastructure project governance.'
    }
  ]
};
