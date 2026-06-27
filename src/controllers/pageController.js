const getHomePage = (req, res) => {
  const stats = [
    { value: "5,000+", label: "Lives Impacted", icon: "👥" },
    { value: "1,200+", label: "Scholarships Shared", icon: "🎓" },
    { value: "850+", label: "Jobs Secured", icon: "💼" },
    { value: "40+", label: "Partner Organizations", icon: "🌍" }
  ];

  const services = [
    {
      title: "Scholarships & Opportunities",
      description: "Find and apply for scholarships, grants, and funding opportunities that fit your goals.",
      linkText: "Find Opportunities",
      linkHref: "/opportunities",
      icon: "🎓"
    },
    {
      title: "Jobs & Career Support",
      description: "Discover job opportunities and resources to help you build your career.",
      linkText: "Browse Jobs",
      linkHref: "/opportunities",
      icon: "💼"
    },
    {
      title: "Academic Consultation",
      description: "Get expert guidance on your academic path, applications, and study plans.",
      linkText: "Book a Consultation",
      linkHref: "/services",
      icon: "📘"
    },
    {
      title: "Networking & Partnerships",
      description: "Connect with professionals and organizations to grow together.",
      linkText: "Our Partners",
      linkHref: "/network-and-partners",
      icon: "🤝"
    },
    {
      title: "LinkedIn Optimization",
      description: "Enhance your profile and personal brand to stand out and get noticed.",
      linkText: "Learn More",
      linkHref: "/services",
      icon: "in"
    }
  ];

  const stories = [
    {
      title: "From a Dream to a Scholarship",
      quote: "CAD Scholarship believed in me when I didn't believe in myself. Today, I'm studying my dream course abroad.",
      author: "Maria L.",
      linkText: "Read Her Story"
    },
    {
      title: "Got the Job I Prayed For",
      quote: "Through CAD, I found the right opportunity and the confidence to go for it. Now I'm working in my field.",
      author: "James T.",
      linkText: "Read His Story"
    },
    {
      title: "Guided, Supported, Achieved",
      quote: "The academic consultation sessions helped me stay on track and reach my goals.",
      author: "Aisha K.",
      linkText: "Read Her Story"
    }
  ];

  const opportunities = [
    {
      type: "Scholarship",
      title: "Global Excellence Scholarship 2024",
      org: "Undergraduate / Masters",
      meta: ["Deadline: May 31, 2024", "Worldwide"],
      linkText: "View Details"
    },
    {
      type: "Job",
      title: "Marketing Intern",
      org: "Growthify Digital Agency",
      meta: ["Full-time", "Remote", "Deadline: May 20, 2024"],
      linkText: "View Details"
    },
    {
      type: "Scholarship",
      title: "STEM Leadership Award",
      org: "For STEM Students",
      meta: ["Deadline: June 15, 2024", "USA"],
      linkText: "View Details"
    },
    {
      type: "Job",
      title: "Content Creator",
      org: "EduConnect",
      meta: ["Full-time", "On-site", "Deadline: May 25, 2024"],
      linkText: "View Details"
    }
  ];

  const partners = [
    "Bright Foundation",
    "Global Scholars",
    "EduWorld International",
    "FutureHub",
    "NextCareer Institute",
    "Leaders Connect",
    "Pathways Abroad"
  ];

  res.render("layouts/main", {
    title: "CAD Scholarship",
    view: "pages/home",
    stats,
    services,
    stories,
    opportunities,
    partners
  });
};

export {getHomePage}