export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = ['All', 'AI', 'Manufacturing Software', 'Implementation', 'Pricing', 'Support', 'Security', 'Custom Development'];

export const faqs: FaqItem[] = [
  {
    id: '1',
    category: 'AI',
    question: 'How can AI be used in manufacturing?',
    answer: 'AI in manufacturing is used for predictive maintenance (predicting equipment failures before they happen), anomaly detection in quality, demand forecasting, process optimization, and automated visual inspection. The key is starting with a concrete problem — not the technology — and proving value on a small scale before expanding.',
  },
  {
    id: '2',
    category: 'AI',
    question: 'Do we need a lot of data to use AI?',
    answer: 'Not necessarily. While more data improves model accuracy, many practical AI use cases — like anomaly detection or simple predictive models — can start with the data you already collect. We help you identify what data you have, what you need, and how to start small with AI.',
  },
  {
    id: '3',
    category: 'Manufacturing Software',
    question: 'What types of software does Opsloom build?',
    answer: 'We build manufacturing-specific software: maintenance management systems (CMMS), production reporting tools, quality management systems, executive dashboards, inventory systems, workflow automation, and custom enterprise software. Everything we build is tailored to manufacturing operations.',
  },
  {
    id: '4',
    category: 'Manufacturing Software',
    question: 'Can Opsloom integrate with our existing ERP or systems?',
    answer: 'Yes. We have experience integrating with common ERPs, SCADA systems, IoT platforms, and legacy databases. Integration is a core part of what we do — we do not build isolated systems. Your data should flow seamlessly between the tools you already use.',
  },
  {
    id: '5',
    category: 'Implementation',
    question: 'How long does a typical implementation take?',
    answer: 'It depends on scope. A focused tool like a production reporting system or KPI dashboard can be live in 4–8 weeks. A comprehensive manufacturing management system typically takes 3–6 months. We use an iterative approach — you see working software early, not just at the end.',
  },
  {
    id: '6',
    category: 'Implementation',
    question: 'Do you provide training for our team?',
    answer: 'Yes. Training is built into every implementation. We provide on-site and remote training for operators, supervisors, and management. We also create documentation and video tutorials so your team can self-serve after go-live.',
  },
  {
    id: '7',
    category: 'Pricing',
    question: 'How is Opsloom\'s pricing structured?',
    answer: 'Pricing depends on the scope and complexity of the solution. We offer project-based pricing for custom builds and subscription pricing for ongoing platforms. After an initial consultation, we provide a detailed proposal with transparent pricing — no hidden fees.',
  },
  {
    id: '8',
    category: 'Pricing',
    question: 'Is there a minimum project size?',
    answer: 'We work with manufacturers of all sizes. If you have a real operational problem that software can solve, we can help — whether you run one factory floor or multiple plants. Contact us to discuss your specific needs.',
  },
  {
    id: '9',
    category: 'Support',
    question: 'What ongoing support do you provide?',
    answer: 'We provide ongoing support including bug fixes, feature updates, system monitoring, and user support. Support plans are tailored to your needs — from basic email support to dedicated account management with guaranteed response times.',
  },
  {
    id: '10',
    category: 'Support',
    question: 'Can you maintain and update the software after launch?',
    answer: 'Yes. We build long-term partnerships, not one-off projects. We maintain, update, and evolve the software we build. Many of our clients have us on retainer for continuous improvement after the initial launch.',
  },
  {
    id: '11',
    category: 'Security',
    question: 'How do you ensure data security?',
    answer: 'We follow industry best practices for data security: encrypted data transmission (TLS), encrypted data at rest, role-based access control, secure authentication, and regular security reviews. For cloud-hosted solutions, we use Supabase with enterprise-grade security infrastructure.',
  },
  {
    id: '12',
    category: 'Security',
    question: 'Can the software be hosted on our own servers?',
    answer: 'Yes. While we typically recommend cloud hosting for reliability and scalability, we can deploy solutions on-premises or in a hybrid configuration if your security or compliance requirements demand it.',
  },
  {
    id: '13',
    category: 'Custom Development',
    question: 'Do you only build for manufacturing?',
    answer: 'Yes. Manufacturing is our niche. We do not do general IT services, websites, or generic software. Everything we build is designed for manufacturing operations. This focus is what makes our solutions effective — we understand the shop floor.',
  },
  {
    id: '14',
    category: 'Custom Development',
    question: 'Can you customize off-the-shelf software?',
    answer: 'We prefer to build custom when it makes sense, but we can also customize and extend existing systems. Often the best approach is a hybrid — leveraging existing tools where they work and building custom modules where they do not.',
  },
];
