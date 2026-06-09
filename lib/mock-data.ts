export type KpiStat = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  caption: string;
};

export type ActivityItem = {
  label: string;
  value: string;
  detail: string;
  time: string;
};

export type Project = {
  region: string;
  city: string;
  status: string;
  progress: number;
  homesPassed: number;
  homesConnected: number;
  owner: string;
};

export type Job = {
  id: string;
  name: string;
  type: string;
  status: string;
  team: string;
  location: string;
  due: string;
  priority: string;
  progress: number;
  notes: string[];
  materials: string[];
  timeline: { phase: string; date: string; status: string }[];
  photos: string[];
};

export type Team = {
  id: string;
  name: string;
  department: string;
  leader: string;
  workers: number;
  activeJobs: number;
  efficiency: number;
  status: string;
};

export type Wayleave = {
  id: string;
  property: string;
  project: string;
  status: string;
  approver: string;
  requested: string;
};

export type MapNode = {
  id: string;
  label: string;
  type: string;
  status: string;
  x: number;
  y: number;
};

export type Building = {
  id: string;
  name: string;
  district: string;
  floors: number;
  units: number;
  connected: number;
  status: string;
};

export type HomeInstall = {
  id: string;
  customer: string;
  address: string;
  status: string;
  ont: string;
  activation: string;
  assignedTeam: string;
};

export type DocumentItem = {
  id: string;
  name: string;
  type: string;
  project: string;
  status: string;
  uploaded: string;
};

export type User = {
  id: string;
  name: string;
  role: string;
  department: string;
  status: string;
};

export type ChatMessage = {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  message: string;
  type: "message" | "alert" | "update";
  channel: string;
};

export type Channel = {
  id: string;
  name: string;
  department?: string;
  unread: number;
  messages: ChatMessage[];
};

export const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { title: "Projects", href: "/projects", icon: "MapPin" },
  { title: "Jobs", href: "/jobs", icon: "HardDrive" },
  { title: "Teams", href: "/teams", icon: "Users" },
  { title: "Wayleaves", href: "/wayleaves", icon: "FileText" },
  { title: "Map", href: "/map", icon: "Map" },
  { title: "MDU", href: "/mdu", icon: "Building" },
  { title: "Home Installs", href: "/home-installs", icon: "Home" },
  { title: "Documents", href: "/documents", icon: "File" },
  { title: "Analytics", href: "/analytics", icon: "TrendingUp" },
  { title: "Settings", href: "/settings", icon: "Settings" },
  { title: "Communications", href: "/communications", icon: "MessageCircle" },
];

export const kpis: KpiStat[] = [
  { label: "Homes Passed", value: "12,430", delta: "+6.2%", trend: "up", caption: "Since last week" },
  { label: "Homes Connected", value: "4,120", delta: "+3.8%", trend: "up", caption: "Actual connections" },
  { label: "Active Teams", value: "18", delta: "-1.1%", trend: "down", caption: "Across all departments" },
  { label: "Open Jobs", value: "64", delta: "-8.5%", trend: "down", caption: "Priority work remaining" },
  { label: "Blocked Jobs", value: "9", delta: "+12%", trend: "up", caption: "Needs attention" },
  { label: "Completed Jobs", value: "348", delta: "+22%", trend: "up", caption: "Rolling 30 days" },
];

export const activityFeed: ActivityItem[] = [
  { label: "Wayleave approved", value: "23 Tavistock Ave", detail: "Compliance team cleared property access.", time: "2m ago" },
  { label: "Job started", value: "MDU installation - 48 Elm St", detail: "Team 05 deployed crew to site.", time: "14m ago" },
  { label: "Splice complete", value: "Sector 12 backbone", detail: "Fibre splice tested and green-lit.", time: "28m ago" },
  { label: "Inspection booked", value: "Midtown cabinet", detail: "QA route inspection scheduled.", time: "1h ago" },
];

export const projects: Project[] = [
  { region: "North Shore", city: "Auckland", status: "Building", progress: 72, homesPassed: 3240, homesConnected: 1280, owner: "Civic Infrastructure" },
  { region: "East Bay", city: "Wellington", status: "Approved", progress: 55, homesPassed: 2140, homesConnected: 890, owner: "BlueLine Networks" },
  { region: "Riverfront", city: "Christchurch", status: "Planned", progress: 18, homesPassed: 640, homesConnected: 120, owner: "FibreCore" },
  { region: "Hillside", city: "Dunedin", status: "Complete", progress: 100, homesPassed: 4150, homesConnected: 2180, owner: "UrbanFiber" },
];

export const jobs: Job[] = [
  {
    id: "FF-2103",
    name: "Trenching - Redwood Heights",
    type: "Trenching",
    status: "In Progress",
    team: "Civil Construction A",
    location: "Redwood Heights, Auckland",
    due: "Today 17:00",
    priority: "High",
    progress: 54,
    notes: [
      "Pole relocation approved.",
      "Excavation crew on standby for morning shift.",
    ],
    materials: ["40mm conduit", "Marker tape", "Sand backfill"],
    timeline: [
      { phase: "Planning", date: "May 2", status: "Done" },
      { phase: "Permits", date: "May 5", status: "Done" },
      { phase: "Trenching", date: "Today", status: "In progress" },
      { phase: "Cable pull", date: "May 18", status: "Pending" },
    ],
    photos: ["/photos/trench-01.jpg", "/photos/trench-02.jpg"],
  },
  {
    id: "FF-2120",
    name: "Splicing - Crown Fibre Node",
    type: "Splicing",
    status: "Blocked",
    team: "Fibre Splicing B",
    location: "Central District, Wellington",
    due: "May 22",
    priority: "Critical",
    progress: 32,
    notes: [
      "Damaged cable found at splice point.",
      "Replacement material ordered from depot.",
    ],
    materials: ["Fusion splice kit", "24F ribbon", "Heat shrink sleeves"],
    timeline: [
      { phase: "Prep", date: "May 6", status: "Done" },
      { phase: "Fusion", date: "May 8", status: "Blocked" },
      { phase: "Testing", date: "May 9", status: "Pending" },
    ],
    photos: ["/photos/splice-01.jpg", "/photos/splice-02.jpg"],
  },
  {
    id: "FF-2145",
    name: "Home Drop - 99 Seaview",
    type: "Install",
    status: "Completed",
    team: "Home Drops C",
    location: "Seaview Terrace, Dunedin",
    due: "May 11",
    priority: "Medium",
    progress: 100,
    notes: ["ONT installed and activated.", "Service QA pass recorded."],
    materials: ["ONT 4721", "Drop cable", "External weatherproof box"],
    timeline: [
      { phase: "Site prep", date: "May 9", status: "Done" },
      { phase: "Install", date: "May 10", status: "Done" },
      { phase: "Activation", date: "May 11", status: "Done" },
    ],
    photos: ["/photos/install-01.jpg", "/photos/install-02.jpg"],
  },
  {
    id: "FF-2162",
    name: "MDU Riser - Parkside Apartments",
    type: "MDU",
    status: "Pending",
    team: "MDU Installations D",
    location: "Parkside Apartments, Christchurch",
    due: "May 26",
    priority: "Low",
    progress: 24,
    notes: ["Floor riser access booked.", "Permit approvals pending."],
    materials: ["Riser cable", "Patch panel", "Test lead"],
    timeline: [
      { phase: "Design", date: "May 3", status: "Done" },
      { phase: "Approval", date: "May 7", status: "Pending" },
      { phase: "Install", date: "May 20", status: "Pending" },
    ],
    photos: ["/photos/mdu-01.jpg", "/photos/mdu-02.jpg"],
  },
];

export const teams: Team[] = [
  { id: "T-01", name: "Civil Construction A", department: "Civil Construction", leader: "Nina Patel", workers: 7, activeJobs: 6, efficiency: 84, status: "Active" },
  { id: "T-02", name: "Fibre Splicing B", department: "Fibre Splicing", leader: "Lukas Chen", workers: 5, activeJobs: 4, efficiency: 77, status: "Blocked" },
  { id: "T-03", name: "MDU Installations D", department: "MDU Installations", leader: "Ava Singh", workers: 6, activeJobs: 3, efficiency: 91, status: "Active" },
  { id: "T-04", name: "Home Drops C", department: "Home Drops", leader: "Sophie Grant", workers: 5, activeJobs: 8, efficiency: 88, status: "Active" },
  { id: "T-05", name: "QA Inspection", department: "QA", leader: "Mason Reed", workers: 3, activeJobs: 2, efficiency: 96, status: "Active" },
];

export const wayleaves: Wayleave[] = [
  { id: "WL-331", property: "125 Seaview Ave", project: "Riverfront Expansion", status: "Approved", approver: "A. Baxter", requested: "May 5" },
  { id: "WL-334", property: "7 Anchor Cres", project: "East Bay Rollout", status: "Pending", approver: "P. Evans", requested: "May 9" },
  { id: "WL-339", property: "3 Market Lane", project: "Hillside Deployment", status: "Rejected", approver: "R. Huang", requested: "May 2" },
  { id: "WL-347", property: "18 North Shore Rd", project: "North Shore Build", status: "Requested", approver: "TBD", requested: "May 12" },
];

export const mapNodes: MapNode[] = [
  { id: "N-01", label: "Cabinet A", type: "Cabinet", status: "Building", x: 16, y: 28 },
  { id: "N-02", label: "Pole 12", type: "Pole", status: "Approved", x: 45, y: 22 },
  { id: "N-03", label: "Node 3", type: "Node", status: "Planned", x: 70, y: 54 },
  { id: "N-04", label: "Hub North", type: "Node", status: "Complete", x: 30, y: 72 },
  { id: "N-05", label: "Tower B", type: "Pole", status: "Blocked", x: 82, y: 12 },
];

export const buildings: Building[] = [
  { id: "B-91", name: "Parkside Apartments", district: "Central", floors: 12, units: 96, connected: 24, status: "Building" },
  { id: "B-85", name: "Riverside Tower", district: "East Bay", floors: 8, units: 64, connected: 64, status: "Complete" },
  { id: "B-14", name: "Harbor View", district: "North Shore", floors: 5, units: 40, connected: 16, status: "Approved" },
];

export const homeInstalls: HomeInstall[] = [
  { id: "HI-709", customer: "Jonas Walker", address: "21 Oak Street, Auckland", status: "Activated", ont: "ONT-4821-703", activation: "Live", assignedTeam: "Home Drops C" },
  { id: "HI-712", customer: "Lena Ortiz", address: "12 Elm Road, Wellington", status: "Scheduled", ont: "ONT-4821-710", activation: "Pending", assignedTeam: "Home Drops C" },
  { id: "HI-718", customer: "Mia Carter", address: "44 Beach View, Christchurch", status: "Installed", ont: "ONT-4821-718", activation: "Testing", assignedTeam: "Home Drops C" },
];

export const documents: DocumentItem[] = [
  { id: "DOC-110", name: "Wayleave Approval - 125 Seaview", type: "Wayleaves", project: "Riverfront Expansion", status: "Approved", uploaded: "May 5" },
  { id: "DOC-112", name: "As-built Diagram - North Shore", type: "As-built", project: "North Shore Build", status: "Draft", uploaded: "May 10" },
  { id: "DOC-115", name: "Installation Proof - 99 Seaview", type: "Installation", project: "Hillside Deployment", status: "Verified", uploaded: "May 11" },
  { id: "DOC-118", name: "Compliance Report - East Bay", type: "Compliance", project: "East Bay Rollout", status: "Pending", uploaded: "May 13" },
];

export const analyticsMetricCards = [
  { title: "Rollout Speed", value: "18.4 km/week", detail: "Network pace across active projects." },
  { title: "Team Efficiency", value: "87%", detail: "Average crew completion ratio." },
  { title: "Region Progress", value: "68%", detail: "Planned regions moving to build." },
  { title: "Compliance Rate", value: "92%", detail: "Approvals processed on time." },
];

export const users: User[] = [
  { id: "U-01", name: "Nina Patel", role: "Team Leader", department: "Civil Construction", status: "Active" },
  { id: "U-02", name: "Lukas Chen", role: "Team Leader", department: "Fibre Splicing", status: "Active" },
  { id: "U-03", name: "Ava Singh", role: "Manager", department: "MDU Installations", status: "Active" },
  { id: "U-04", name: "Sophie Grant", role: "Worker", department: "Home Drops", status: "Active" },
  { id: "U-05", name: "Mason Reed", role: "QA", department: "QA", status: "Active" },
];

export const departments = [
  "Civil Construction",
  "Fibre Splicing",
  "MDU Installations",
  "Home Drops",
  "QA",
];

export const roles = [
  "Admin",
  "Manager",
  "Team Leader",
  "Worker",
];

export const chartRollout = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 22 },
  { month: "Apr", value: 28 },
  { month: "May", value: 34 },
  { month: "Jun", value: 38 },
];

export const chartTeamPerformance = [
  { name: "Civil", score: 82 },
  { name: "Splicing", score: 76 },
  { name: "MDU", score: 91 },
  { name: "Home Drops", score: 88 },
  { name: "QA", score: 95 },
];

export const chartWeeklyJobs = [
  { week: "Week 18", completed: 14 },
  { week: "Week 19", completed: 18 },
  { week: "Week 20", completed: 22 },
  { week: "Week 21", completed: 27 },
  { week: "Week 22", completed: 31 },
  { week: "Week 23", completed: 35 },
];

export const chartRegionProgress = [
  { region: "North Shore", progress: 72 },
  { region: "East Bay", progress: 55 },
  { region: "Riverfront", progress: 18 },
  { region: "Hillside", progress: 100 },
];

export const workflowStatuses = ["Planned", "Approved", "Building", "Complete", "Blocked"];

export const statusStyles: Record<string, string> = {
  Planned: "bg-zinc-700 text-zinc-200",
  Approved: "bg-sky-600 text-white",
  Building: "bg-orange-500 text-white",
  Complete: "bg-emerald-500 text-zinc-950",
  Blocked: "bg-rose-500 text-white",
  "In Progress": "bg-blue-500 text-white",
  Pending: "bg-amber-500 text-zinc-950",
  Requested: "bg-slate-500 text-white",
  Rejected: "bg-rose-600 text-white",
  Activated: "bg-emerald-500 text-zinc-950",
  Scheduled: "bg-sky-600 text-white",
  Installed: "bg-violet-500 text-white",
  Verified: "bg-emerald-500 text-zinc-950",
  Draft: "bg-zinc-700 text-zinc-200",
};

export const loginCompanies = [
  { id: "C-01", name: "FibreFlow Networks" },
  { id: "C-02", name: "BlueLine Infrastructure" },
  { id: "C-03", name: "UrbanFiber Group" },
];

export const channels: Channel[] = [
  {
    id: "general",
    name: "general",
    department: "All",
    unread: 0,
    messages: [
      { id: "m1", author: "Operations Lead", avatar: "OL", timestamp: "09:15", message: "Good morning team. Let's focus on the North Shore project delivery today.", type: "message", channel: "general" },
      { id: "m2", author: "Nina Patel", avatar: "NP", timestamp: "09:22", message: "Roger that. Civil construction team is ready for deployment.", type: "message", channel: "general" },
      { id: "m3", author: "System Alert", avatar: "⚠️", timestamp: "09:45", message: "3 wayleaves approved in East Bay region. Ready for construction.", type: "update", channel: "general" },
    ],
  },
  {
    id: "civil-works",
    name: "civil-works",
    department: "Civil Construction",
    unread: 2,
    messages: [
      { id: "m4", author: "Nina Patel", avatar: "NP", timestamp: "08:30", message: "Excavation crew deployed to Redwood Heights. Starting pole relocation.", type: "message", channel: "civil-works" },
      { id: "m5", author: "Site Supervisor", avatar: "SS", timestamp: "08:52", message: "Ground conditions are optimal. No delays expected.", type: "message", channel: "civil-works" },
      { id: "m6", author: "Safety Officer", avatar: "SO", timestamp: "09:15", message: "⚠️ Utility locate request approved for 48 Elm St. Proceed with caution.", type: "alert", channel: "civil-works" },
      { id: "m7", author: "Nina Patel", avatar: "NP", timestamp: "09:20", message: "Acknowledged. Team briefed on safety protocols.", type: "message", channel: "civil-works" },
    ],
  },
  {
    id: "splicing-team",
    name: "splicing-team",
    department: "Fibre Splicing",
    unread: 1,
    messages: [
      { id: "m8", author: "Lukas Chen", avatar: "LC", timestamp: "07:45", message: "Morning splice team. Central backbone fusion scheduled for 11:00 AM.", type: "message", channel: "splicing-team" },
      { id: "m9", author: "Technician", avatar: "T1", timestamp: "08:10", message: "Fusion equipment calibrated and tested.", type: "message", channel: "splicing-team" },
      { id: "m10", author: "System Alert", avatar: "⚠️", timestamp: "09:30", message: "URGENT: Damaged cable detected at splice point 12. Replacement material ordered.", type: "alert", channel: "splicing-team" },
    ],
  },
  {
    id: "mdu-projects",
    name: "mdu-projects",
    department: "MDU Installations",
    unread: 0,
    messages: [
      { id: "m11", author: "Ava Singh", avatar: "AS", timestamp: "08:00", message: "Parkside Apartments floor riser access confirmed. Installation window: 10 AM - 4 PM.", type: "update", channel: "mdu-projects" },
      { id: "m12", author: "Building Manager", avatar: "BM", timestamp: "08:30", message: "Access provided. 3 units on floor 5 ready for inspection.", type: "message", channel: "mdu-projects" },
    ],
  },
  {
    id: "alerts",
    name: "alerts",
    department: "System",
    unread: 3,
    messages: [
      { id: "m13", author: "System", avatar: "SYS", timestamp: "09:05", message: "🔴 CRITICAL: 8 jobs blocked across all regions. Review blockers immediately.", type: "alert", channel: "alerts" },
      { id: "m14", author: "System", avatar: "SYS", timestamp: "09:22", message: "⚠️ Compliance: 2 wayleaves expiring this week. Update needed.", type: "alert", channel: "alerts" },
      { id: "m15", author: "System", avatar: "SYS", timestamp: "09:45", message: "✓ Team efficiency trending up 5% this week. Great work everyone!", type: "update", channel: "alerts" },
    ],
  },
  {
    id: "wayleaves-updates",
    name: "wayleaves-updates",
    department: "Compliance",
    unread: 1,
    messages: [
      { id: "m16", author: "Compliance Officer", avatar: "CO", timestamp: "08:15", message: "125 Seaview Ave wayleave approved. Property owner contacted.", type: "update", channel: "wayleaves-updates" },
      { id: "m17", author: "System", avatar: "SYS", timestamp: "09:00", message: "7 Anchor Cres: Awaiting owner response. Follow-up scheduled for tomorrow.", type: "message", channel: "wayleaves-updates" },
    ],
  },
];
