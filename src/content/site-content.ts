export const serviceNavigation = [
  {
    href: "/services/web-design-development",
    label: "Web Design and Development",
  },
  { href: "/services/custom-software", label: "Custom Software" },
  { href: "/services/e-commerce", label: "E-commerce" },
  {
    href: "/services/digital-marketing",
    label: "Digital Marketing and SEO",
  },
] as const;

export const workNavigation = [
  { href: "/work/placeholder", label: "Case Study Template" },
] as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", children: serviceNavigation },
  { href: "/work", label: "Work", children: workNavigation },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
] as const;

export const footerNavigationGroups = [
  {
    label: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/process", label: "Process" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Services",
    links: serviceNavigation,
  },
  {
    label: "Work",
    links: workNavigation,
  },
] as const;

export const globalCta = {
  title: "Have a project in mind?",
  description:
    "Tell us what you are building, what is not working, or where you want your business to go next.",
  primaryLabel: "Start a Project",
  primaryHref: "/contact",
  secondaryLabel: "View Our Work",
  secondaryHref: "/work",
} as const;

export const servicesPage = {
  title: "Digital Services Built Around Real Business Needs.",
  introduction: [
    "N33 designs and develops digital experiences that help businesses communicate clearly, operate efficiently and grow with confidence.",
    "We can support a focused project or work across strategy, design, development and ongoing improvement.",
  ],
  services: [
    {
      title: "Web Design and Development",
      description:
        "Fast, responsive and carefully designed websites built around your business, your audience and the actions you want visitors to take.",
      capabilities: [
        "Corporate websites",
        "Landing pages",
        "Campaign websites",
        "Website redesigns",
        "Responsive frontend development",
        "Content management integration",
        "Performance optimisation",
        "Website maintenance",
      ],
      linkLabel: "Explore Web Design and Development",
      href: "/services/web-design-development",
      image: "/images/abstract/dark-botanical.jpg",
    },
    {
      title: "Custom Software Development",
      description:
        "Purpose-built systems that replace slow manual processes, disconnected tools and software that no longer fits the way your business operates.",
      capabilities: [
        "Internal management systems",
        "Customer and member portals",
        "Administrative dashboards",
        "Workflow automation",
        "Reporting tools",
        "API integrations",
        "Legacy-system improvement",
        "Custom business applications",
      ],
      linkLabel: "Explore Custom Software",
      href: "/services/custom-software",
      image: "/images/abstract/network-wires.jpg",
    },
    {
      title: "E-commerce Development",
      description:
        "E-commerce experiences designed to make products easier to discover, purchase and manage across the entire customer journey.",
      capabilities: [
        "Online stores",
        "Custom checkout experiences",
        "Product and inventory integration",
        "Payment integration",
        "Customer accounts",
        "Order-management workflows",
        "Conversion-focused interfaces",
        "Store performance optimisation",
      ],
      linkLabel: "Explore E-commerce",
      href: "/services/e-commerce",
      image: "/images/abstract/cosmic-horizon.jpg",
    },
    {
      title: "Digital Marketing and SEO",
      description:
        "Focused digital strategies that help the right audience find your business, understand your offer and take action.",
      capabilities: [
        "Digital campaign planning",
        "Search engine optimisation",
        "Paid advertising support",
        "Content strategy",
        "Landing-page optimisation",
        "Analytics and reporting",
        "Conversion improvement",
        "Campaign website development",
      ],
      linkLabel: "Explore Digital Marketing",
      href: "/services/digital-marketing",
      image: "/images/abstract/signal-orbit.jpg",
    },
  ],
  closing: {
    title: "Not Sure Where to Begin?",
    description:
      "Start with the business problem. We will help you identify the right digital approach.",
    label: "Discuss Your Project",
    href: "/contact",
  },
} as const;

export const webDesignPage = {
  title: "Websites Designed to Make a Clearer Impression.",
  introduction: [
    "A strong website should explain your business quickly, guide visitors naturally and perform reliably on every screen.",
    "N33 combines strategy, interface design and frontend development to create websites that look considered and work with purpose.",
  ],
  listTitle: "What We Build",
  capabilities: [
    "Corporate and company websites",
    "Product and service websites",
    "Landing pages",
    "Campaign websites",
    "Website redesigns",
    "Responsive web applications",
    "Content-managed websites",
    "Marketing and conversion pages",
  ],
  statementTitle: "More Than a Visual Redesign",
  statement:
    "We consider structure, content hierarchy, user journeys, responsiveness, performance and maintainability from the beginning. The result is not only a better-looking website, but a more useful digital platform for your business.",
  approachTitle: "Our Approach",
  approach: [
    "Understand the business, audience and purpose.",
    "Organise the content and user journey.",
    "Design the interface and interaction system.",
    "Develop, test and optimise the experience.",
    "Launch, review and improve.",
  ],
  cta: {
    title: "Planning a New Website?",
    description:
      "Share your goals, current challenges and any references you already have.",
    label: "Start a Website Project",
    href: "/contact",
  },
} as const;

export const customSoftwarePage = {
  title: "Software Built Around the Way Your Business Works.",
  introduction: [
    "Off-the-shelf tools are useful until your processes become too specific, fragmented or difficult to manage.",
    "N33 develops custom systems that bring important workflows, information and teams into a clearer digital environment.",
  ],
  listTitle: "What We Develop",
  capabilities: [
    "Business management systems",
    "Administrative portals",
    "Customer and member portals",
    "Internal workflow tools",
    "Approval systems",
    "Reporting dashboards",
    "Document-management workflows",
    "API and third-party integrations",
    "Custom operational software",
  ],
  firstStatementTitle: "Built for Real Work",
  firstStatement:
    "We begin with the people who will use the system and the work they need to complete. Features, permissions, data and workflows are then designed around those real requirements.",
  secondStatementTitle: "A Better Fit for Your Operations",
  secondStatement:
    "Custom software can reduce repetitive work, improve visibility and connect processes that previously depended on spreadsheets, email or disconnected platforms.",
  cta: {
    title: "Have a Process That Needs a Better System?",
    description:
      "Explain how the process works today and where it is slowing your team down.",
    label: "Discuss Custom Software",
    href: "/contact",
  },
} as const;

export const ecommercePage = {
  title: "E-commerce Designed for the Full Buying Journey.",
  introduction: [
    "A successful online store needs more than a product grid and a checkout button.",
    "N33 designs e-commerce experiences that connect product discovery, purchasing, payments, customer accounts and internal operations.",
  ],
  listTitle: "E-commerce Capabilities",
  capabilities: [
    "Online-store design and development",
    "Product catalogue experiences",
    "Custom product pages",
    "Shopping cart and checkout flows",
    "Payment-gateway integration",
    "Customer accounts",
    "Order-management integration",
    "Inventory integration",
    "Promotion and campaign pages",
    "Performance and conversion optimisation",
  ],
  statementTitle: "Designed for Customers and Operations",
  statement:
    "The customer journey must feel simple, but the processes behind it must also work for the business. We consider both sides when planning the platform.",
  cta: {
    title: "Building or Improving an Online Store?",
    description:
      "Tell us about your products, customers and current e-commerce setup.",
    label: "Discuss E-commerce",
    href: "/contact",
  },
} as const;

export const digitalMarketingPage = {
  title: "Digital Marketing With a Clearer Purpose.",
  introduction: [
    "Good digital marketing begins with a specific audience, a useful message and a clear action.",
    "N33 connects campaign planning, content, landing pages, search visibility and measurement into one practical approach.",
  ],
  listTitle: "Our Capabilities",
  capabilities: [
    "Digital campaign planning",
    "Search engine optimisation",
    "Paid campaign support",
    "Content strategy",
    "Landing-page design",
    "Conversion optimisation",
    "Analytics implementation",
    "Campaign reporting",
    "Website and campaign integration",
  ],
  statementTitle: "Marketing and Technology Should Work Together",
  statement:
    "Campaign performance is affected by more than advertising. The message, website, page speed, user journey and measurement setup all contribute to the result.",
  cta: {
    title: "Need a More Connected Digital Strategy?",
    description:
      "Share what you are currently doing and what you need to improve.",
    label: "Discuss Digital Marketing",
    href: "/contact",
  },
} as const;

export const workPage = {
  title: "Selected Work.",
  introduction: [
    "A selection of websites, platforms and digital experiences created to solve specific business needs.",
    "Real project information will be added as case studies become available.",
  ],
  categories: [
    "All Work",
    "Websites",
    "Software",
    "E-commerce",
    "Digital Campaigns",
  ],
  emptyTitle: "More Work Is Being Prepared.",
  emptyDescription:
    "New case studies are being documented. Contact N33 to discuss relevant project experience directly.",
  emptyLabel: "Contact N33",
} as const;

export const caseStudyTemplate = {
  projectName: "[Project name]",
  client: "[Client name or confidential project description]",
  industry: "[Industry]",
  services: "[Services provided]",
  introduction: "[A concise description of the project and its purpose.]",
  challenge: "[The business or user problem that needed to be addressed.]",
  approach: "[How N33 structured, designed and developed the solution.]",
  solution: "[What was delivered.]",
  outcome:
    "[Only include verified outcomes provided by the client or project team.]",
  cta: {
    title: "Have a Similar Project?",
    description: "Tell us what you are trying to improve or build.",
    label: "Start a Project",
    href: "/contact",
  },
} as const;

export const processPage = {
  title: "A Clear Process, Without the Theatre.",
  introduction: [
    "Good digital work needs structure, but it should not feel complicated.",
    "N33 keeps the process focused, collaborative and visible from the first conversation to launch.",
  ],
  steps: [
    {
      title: "Think.",
      description:
        "We understand the business, users, goals, limitations and current situation before deciding what should be built.",
    },
    {
      title: "Design.",
      description:
        "We organise the information, user journey, interface and visual direction into a clear experience.",
    },
    {
      title: "Develop.",
      description:
        "We turn the approved design into a reliable, responsive and maintainable digital product.",
    },
    {
      title: "Launch.",
      description:
        "We test the complete experience, prepare the production environment and release the project carefully.",
    },
    {
      title: "Grow.",
      description:
        "After launch, we review performance, resolve issues and identify practical improvements.",
    },
  ],
  closing: {
    title: "Clear Communication at Every Stage.",
    description:
      "You should know what is being worked on, what decisions are needed and what comes next.",
    label: "Start the Conversation",
    href: "/contact",
  },
} as const;

export const aboutPage = {
  title: "Built for Businesses That Need Digital Work to Do More.",
  introduction: [
    "N33 is a digital agency that brings strategy, design and development together to create useful digital experiences.",
    "We work on websites, custom software, e-commerce platforms and digital initiatives for businesses that need thoughtful execution rather than a one-size-fits-all solution.",
  ],
  philosophyTitle: "Design Is Only Useful When It Solves Something.",
  philosophy:
    "We care about visual quality, but every design decision must support the message, user journey or task. The goal is not decoration. The goal is a clearer and more effective digital experience.",
  disciplinesTitle: "What N33 Brings Together",
  disciplines: [
    {
      title: "Strategy",
      description:
        "Clarifying the problem, audience, priorities and intended result.",
    },
    {
      title: "Design",
      description:
        "Creating structure, hierarchy and interactions that make the experience easier to understand.",
    },
    {
      title: "Development",
      description:
        "Building the approved experience into a reliable and maintainable product.",
    },
    {
      title: "Growth",
      description:
        "Reviewing performance and improving the digital experience after launch.",
    },
  ],
  collaborationTitle: "Direct Collaboration.",
  collaboration:
    "Projects work better when communication is clear. N33 keeps clients close to the important decisions without filling the process with unnecessary meetings or presentation layers.",
  fitTitle: "Built to Fit the Business.",
  fit: "We do not force every project into the same package or technology. The solution should match the actual business requirement, available resources and future plans.",
  cta: {
    title: "Looking for a Digital Partner?",
    description: "Tell us what you need to improve, replace or create.",
    label: "Contact N33",
    href: "/contact",
  },
} as const;

export const contactPage = {
  title: "Tell Us What You Are Building.",
  introduction: [
    "Share the project, problem or opportunity you are working on. You do not need to have every detail prepared before contacting us.",
    "We will review your enquiry and respond using the contact information you provide.",
  ],
  formTitle: "Project Enquiry",
  serviceOptions: [
    "Website design and development",
    "Custom software",
    "E-commerce",
    "Digital marketing and SEO",
    "UI/UX design",
    "Support and maintenance",
    "Not sure yet",
    "Other",
  ],
  budgetOptions: [
    "Not decided yet",
    "Below RM10,000",
    "RM10,000–RM30,000",
    "RM30,000–RM60,000",
    "RM60,000–RM100,000",
    "Above RM100,000",
  ],
  timelineOptions: [
    "As soon as possible",
    "Within 1–2 months",
    "Within 3–4 months",
    "Within 5–6 months",
    "More than 6 months",
    "Still planning",
  ],
  supportingMessage:
    "Share as much or as little as you currently have. We can help organise the next steps.",
  success: {
    title: "Enquiry Received.",
    description:
      "Thank you for contacting N33. We will review the details and reply using the email address you provided.",
    label: "Return to Home",
  },
  error: {
    title: "Your Enquiry Was Not Sent.",
    description:
      "Something went wrong while sending the form. Please review your information and try again.",
    label: "Try Again",
  },
  details: {
    email: "[YOUR EMAIL ADDRESS]",
    phone: "[YOUR PHONE NUMBER]",
    location: "[YOUR LOCATION]",
    availability: "Project enquiries and partnership discussions are welcome.",
  },
} as const;

export const footerContent = {
  description:
    "N33 designs and develops websites, software and digital experiences for businesses that need clearer and more useful digital products.",
  legal: ["Privacy Policy", "Terms of Use"],
  copyright: "© N33. All rights reserved.",
} as const;
