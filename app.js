const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    pageData: {
      siteName: 'CAD Scholarship',
      siteDescription: 'A career, scholarship, and academic support initiative built to help people move forward.',
      hero: {
        eyebrow: 'Empowering futures together',
        title: 'Opportunities today, success tomorrow.',
        description: 'CAD Scholarship connects ambitious people to scholarships, jobs, academic support, strategic partnerships, and LinkedIn optimization.',
        primaryCta: { label: 'Explore Opportunities', href: '#opportunities' },
        secondaryCta: { label: 'Learn More About Us', href: '#about' }
      },
      stats: [
        { icon: '👥', value: '5,000+', label: 'Lives Impacted' },
        { icon: '🎓', value: '1,200+', label: 'Scholarships Shared' },
        { icon: '💼', value: '850+', label: 'Jobs Secured' },
        { icon: '🌐', value: '40+', label: 'Partner Organizations' }
      ],
      servicesSection: { kicker: 'What We Do', title: 'How We Help You Succeed' },
      services: [
        { icon: '📘', title: 'Scholarships & Opportunities', description: 'Find and apply for scholarships and financial aid opportunities that fit your goals.', href: '#opportunities', linkText: 'Find Opportunities' },
        { icon: '💼', title: 'Jobs & Career Support', description: 'Discover job opportunities and resources to help you build your career.', href: '#opportunities', linkText: 'Browse Jobs' },
        { icon: '🎓', title: 'Academic Consultation', description: 'Get expert guidance on academic path, applications, and study plans.', href: '#contact', linkText: 'Book a Consultation' },
        { icon: '🤝', title: 'Networking & Partnerships', description: 'Connect with professionals and organizations to grow together.', href: '#partners', linkText: 'Our Partners' },
        { icon: 'in', title: 'LinkedIn Optimization', description: 'Improve your profile and personal brand to stand out and get noticed.', href: '#contact', linkText: 'Learn More' }
      ],
      storiesSection: { kicker: 'Real Stories, Real Impact', title: 'Stories from Our Community', viewAllLabel: 'Read All Stories', viewAllHref: '#stories' },
      stories: [
        { title: 'From a Dream to a Scholarship', excerpt: 'CAD Scholarship believed in me when I doubted myself. Now I’m studying my dream course abroad.', author: 'Maria L.', href: '#contact', ctaText: 'Read Her Story' },
        { title: 'Got the Job I Prayed For', excerpt: 'Through CAD, I found the right opportunity and the confidence to go for it. Now I’m working in my field.', author: 'James T.', href: '#contact', ctaText: 'Read His Story' },
        { title: 'Guided, Supported, Achieved', excerpt: 'The academic consultation sessions helped me stay on track and reach my goals.', author: 'Aisha K.', href: '#contact', ctaText: 'Read Her Story' }
      ],
      opportunitiesSection: { kicker: 'Featured Opportunities', title: 'Scholarships & Jobs', viewAllLabel: 'View All Opportunities', viewAllHref: '#contact' },
      opportunities: [
        { badge: 'SCHOLARSHIP', badgeClass: 'badge-scholarship', title: 'Global Excellence Scholarship 2024', organization: 'Undergraduate / Masters', meta: ['Deadline: May 31, 2024', 'Worldwide'], href: '#contact' },
        { badge: 'JOB', badgeClass: 'badge-job', title: 'Marketing Intern', organization: 'Growthify Digital Agency', meta: ['Full-time · Remote', 'Deadline: May 20, 2024'], href: '#contact' },
        { badge: 'SCHOLARSHIP', badgeClass: 'badge-scholarship', title: 'STEM Leadership Award', organization: 'For STEM Students', meta: ['Deadline: June 15, 2024', 'USA'], href: '#contact' },
        { badge: 'JOB', badgeClass: 'badge-job', title: 'Content Creator', organization: 'EduConnect', meta: ['Full-time · On-site', 'Deadline: May 25, 2024'], href: '#contact' }
      ],
      cta: {
        kicker: 'Join the network',
        title: 'Let’s build your future, together.',
        description: 'Join our community and get access to opportunities, resources, and guidance that can change your life.',
        buttonLabel: 'Join Our Community',
        buttonHref: '#contact'
      },
      partnersSection: { kicker: 'In Partnership With', title: 'Trusted Organizations' },
      partners: [
        { name: 'Bright Foundation', logo: 'BF' },
        { name: 'Global Scholars', logo: 'GS' },
        { name: 'EduWorld', logo: 'EW' },
        { name: 'FutureHub', logo: 'FH' },
        { name: 'NextCareer', logo: 'NC' },
        { name: 'Leaders Connect', logo: 'LC' },
        { name: 'Pathways Abroad', logo: 'PA' }
      ],
      contactSection: {
        kicker: 'Contact Us',
        title: 'Bring the next version of this idea to life.',
        description: 'Use the form to capture consultations, partnership interest, story submissions, or general inquiries.'
      },
      footerTagline: 'Empowering individuals through opportunities, education, and meaningful connections.'
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
