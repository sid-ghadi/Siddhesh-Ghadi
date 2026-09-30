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
  github: 'https://github.com/ghadi-siddhesh?tab=projects',
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
  ],
  projects: [
    {
      id: 'autonomous-uav',
      rev: '01',
      scope: 'AUTONOMOUS UAV · CARBON FIBER AIRFRAME',
      title: 'Autonomous UAV Flight Platform & Telemetry',
      shortDesc: 'Designed, assembled, and flight-tested an autonomous quadcopter on a custom carbon fiber frame, transitioning from manual flight control to full autonomous navigation and mission execution.',
      fullDesc: 'End-to-end aerial robotics system engineered from structural airframe fabrication through PID loop tuning, sensor fusion integration, and mission waypoint autonomous routing. Integrated redundant telemetry links for real-time state telemetry, fail-safe RTL (Return-to-Launch) triggers, and precision hovering under environmental wind disturbances.',
      tag: 'PhoenixAI',
      tools: ['Pixhawk Autopilot', 'Mission Planner / QGroundControl', 'KiCad', 'PX4 / ArduPilot', 'Carbon Fiber Airframe', 'LiPo Power Distribution Board (PDB)', 'GPS / IMU Sensor Fusion', 'Telemetry Radio (433MHz)'],
      challenges: [
        'Motor-induced high-frequency acoustic and structural vibrations interfering with IMU accelerometer calibrations.',
        'Tuning multi-axis PID rate/attitude controller parameters for stable autonomous GPS-guided flight in gusty wind conditions.',
        'Ensuring clean, isolated power routing between high-current ESC battery lines and sensitive low-noise RF communication boards.'
      ],
      architecture: [
        'Carbon fiber X-quadcopter frame with custom dampening vibration mount for flight controller.',
        'Pixhawk 32-bit Cortex-M4 flight node running real-time Kalman filtering for sensor fusion.',
        'Dedicated power module with current/voltage monitoring and automated low-voltage RTL fail-safe routine.'
      ],
      outcomes: [
        'Achieved sub-meter GPS waypoint hover stability during outdoor flight testing.',
        'Integrated continuous bidirectional telemetry stream over 1km line-of-sight range.',
        'Eliminated structural resonance issues through custom silicone dampening isolators.'
      ]
    },
    {
      id: 'fpga-alu',
      rev: '02',
      scope: 'VHDL · XILINX SPARTAN-7 FPGA',
      title: 'FPGA-Based ALU Design (8-bit)',
      shortDesc: 'Designed and implemented an 8-bit Arithmetic Logic Unit on FPGA using VHDL, verified through rigorous testbenches, timing analysis, and board-level hardware testing.',
      fullDesc: 'Custom 8-bit Arithmetic and Logic Unit microarchitecture modeled entirely in structural and behavioral VHDL for Xilinx Spartan-7 FPGA. Handles dual 8-bit operand operations including Addition, Subtraction (2s complement), AND, OR, XOR, NOT, Bitwise Arithmetic/Logical Shifts, and Comparison operations with status flags (Zero, Carry, Overflow, Negative).',
      tag: 'GitHub',
      githubUrl: 'https://github.com/ghadi-siddhesh?tab=projects',
      tools: ['VHDL', 'Xilinx Vivado', 'Spartan-7 FPGA', 'ModelSim', 'Digital Logic Analyzer', 'RTL Simulation & Testbenches'],
      challenges: [
        'Propagation delay and critical path timing closure in carry-lookahead adder stages at target clock frequencies.',
        'Writing comprehensive self-checking testbenches covering all corner-case arithmetic overflow and signed underflow boundaries.',
        'Optimizing LUT (Look-Up Table) slice utilization and reducing combinational glitching on asynchronous control flag outputs.'
      ],
      architecture: [
        'Parameterized opcode decoder selecting 16 distinct arithmetic and bitwise logic operations.',
        'Registered pipeline input stages preventing clock skew between operands.',
        'Dedicated condition flag calculation unit producing Zero, Overflow, Negative, and Carry flags in parallel.'
      ],
      outcomes: [
        'Zero timing violations reported across post-route static timing analysis (STA).',
        '100% testbench coverage verified against bit-accurate software model.',
        'Successfully deployed and verified on physical Spartan-7 development board via onboard DIP switches and LEDs.'
      ]
    },
    {
      id: 'voting-game',
      rev: '03',
      scope: 'CUSTOM PCB · DIGITAL ICS (555 TIMER)',
      title: 'Fast Voting Game Hardware System',
      shortDesc: 'Designed and fabricated a logic-based voting system with discrete electronic components, custom PCB layout, and hardware-level signal debouncing.',
      fullDesc: 'High-speed multiplayer hardware arbitration system designed to detect and lock out subsequent player inputs within microsecond margins. Implements analog 555 precision timing circuitry, discrete bistable latching gates, audible buzzer drivers, and LED status indicators on a bespoke 2-layer PCB manufactured and hand-soldered.',
      tag: 'PCB / KiCad',
      tools: ['KiCad 7', 'NE555 Precision Timer', 'TTL / CMOS Digital ICs (74LS series)', 'SPICE Simulation (LTspice)', 'SMD / THT Soldering', 'Oscilloscope'],
      challenges: [
        'Mechanical contact bounce on tactile pushbutton switches causing erratic false triggering of arbiters.',
        'Managing ground bounce and transient current surges during simultaneous buzzer and multi-LED activation.',
        'Routing minimal trace inductance paths on a compact two-layer PCB footprint.'
      ],
      architecture: [
        'RC hardware low-pass debounce filter combined with Schmitt trigger inputs on every player node.',
        'Cross-coupled logic gates forming an ultra-fast hardware race arbiter lockout latch.',
        'Monostable 555 timer pulse-shaping stage controlling reset cycle durations and winner indicator alert.'
      ],
      outcomes: [
        'Guaranteed deterministic first-response locking with less than 50ns arbitration resolution.',
        'Complete PCB layout designed from schematic to Gerber generation in KiCad.',
        'Reliable noise-immune operation across wide DC supply rails (5V - 12V).'
      ]
    },
    {
      id: 'n8n-whatsapp',
      rev: '04',
      scope: 'AI AUTOMATION · N8N · WHATSAPP',
      title: 'WhatsApp-Powered Smart Inventory Automation',
      shortDesc: 'AI-powered WhatsApp inventory system for managing stock, prices, product records, and business data without manual spreadsheet updates.',
      fullDesc: 'End-to-end business automation workflow deployed using self-hosted n8n orchestrating WhatsApp Cloud API / Webhook endpoints and LLM conversational agents. Enables non-technical store managers to query live inventory, update stock levels, adjust price lists, and receive low-stock restocking alerts in real-time through natural WhatsApp text and voice memos.',
      tag: 'n8n / WhatsApp',
      tools: ['n8n Workflow Automation', 'WhatsApp Cloud API / Webhooks', 'OpenAI / Gemini API', 'Google Sheets / PostgreSQL API', 'Docker', 'RESTful Endpoints'],
      challenges: [
        'Parsing unstructured colloquial messaging, typos, and multilingual voice inputs into deterministic JSON schema operations.',
        'Handling concurrent webhook requests and state synchronization without duplicate inventory decrements.',
        'Maintaining high availability and reliable token refresh management with the WhatsApp Graph API.'
      ],
      architecture: [
        'Secure webhook listener with signature verification receiving WhatsApp message events.',
        'AI Function Calling agent extracting SKU IDs, quantity adjustments, and intent classification.',
        'Transactional database adapter updating inventory records and generating immediate WhatsApp confirmation receipts.'
      ],
      outcomes: [
        'Eliminated manual daily spreadsheet tallying, saving 1.5+ hours of administrative overhead per day.',
        'Sub-2-second response latency from WhatsApp user prompt to verified database record update.',
        'Automated proactive low-stock warning notifications sent directly to warehouse personnel.'
      ]
    }
  ]
};
