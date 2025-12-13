/* ===================================

   TCO Website - Language Switcher
   Albinayat Typical Contracting LLC

=================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ===================================
  // LANGUAGE TRANSLATIONS
  // ===================================
  const translations = {
    en: {
      // SEO Metadata
      page_title: 'Albinayat Typical Contracting LLC',
      meta_description: 'Albinayat Typical Contracting LLC - Your trusted partner in construction, infrastructure, and facility management across Saudi Arabia.',

      // Navigation
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_news: 'News',
      nav_offices: 'Offices',
      nav_contact: 'Contact',
      nav_training: 'Training',

      // Hero Section
      hero_title: 'Building Excellence Since 1981',
      hero_subtitle: 'Albinayat Typical Contracting LLC - Your trusted partner in construction, infrastructure, and facility management across Saudi Arabia.',
      hero_btn_services: 'Our Services',
      hero_btn_quote: 'Get a Quote',

      // Why Choose Us
      why_choose_title: 'Why Choose Us',
      why_choose_subtitle: 'Discover what makes Albinayat the preferred contracting partner',

      feature_experience_title: '42+ Years Experience',
      feature_experience_text: 'Established in 1981, delivering excellence in construction and contracting services across Saudi Arabia.',

      feature_certified_title: 'ISO Certified',
      feature_certified_text: 'Certified with ISO 9001, ISO 14001, and ISO 45001 for quality, environmental, and safety management.',

      feature_team_title: 'Expert Team',
      feature_team_text: 'Highly skilled engineers and technicians committed to delivering projects on time and within budget.',

      feature_satisfaction_title: 'Client Satisfaction',
      feature_satisfaction_text: 'Building long-term partnerships with government entities and private sector clients nationwide.',

      // Services
      services_title: 'Our Services',
      services_subtitle: 'Comprehensive contracting and construction solutions',
      service_btn_learn: 'Learn More',

      service_building_title: 'Building & Construction',
      service_building_text: 'Complete construction solutions from residential to commercial projects.',

      service_infrastructure_title: 'Infrastructure',
      service_infrastructure_text: 'Roads, bridges, and civil engineering projects across the Kingdom.',

      service_electromechanical_title: 'Electromechanical',
      service_electromechanical_text: 'MEP systems installation and maintenance services.',

      service_energy_title: 'Energy Solutions',
      service_energy_text: 'Renewable energy and power infrastructure projects.',

      service_operations_title: 'Operations & Maintenance',
      service_operations_text: 'Comprehensive facility management and maintenance services.',

      service_cleaning_title: 'Cleaning Services',
      service_cleaning_text: 'Professional cleaning and janitorial services for all facilities.',

      service_it_title: 'Information Technology',
      service_it_text: 'IT infrastructure and technology solutions.',

      service_realestate_title: 'Real Estate',
      service_realestate_text: 'Property development and real estate investment services.',

      // Services Page
      services_page_title: 'Our Services',
      services_page_subtitle: 'Comprehensive contracting and construction solutions',

      service_btn_quote: 'Request Quote',

      // Service 1: Building & Construction
      service_badge_1: 'Service 01',
      service_1_title: 'Building & Construction',
      service_1_desc: 'Complete construction services for residential, commercial, and industrial projects. Our experienced team delivers high-quality buildings that meet international standards and exceed client expectations.',
      service_1_item_1: 'Residential Buildings',
      service_1_item_2: 'Commercial Complexes',
      service_1_item_3: 'Industrial Facilities',
      service_1_item_4: 'Government Buildings',
      service_1_item_5: 'Educational Facilities',

      // Service 2: Infrastructure
      service_badge_2: 'Service 02',
      service_2_title: 'Infrastructure Development',
      service_2_desc: 'Development of roads, bridges, utilities, and public infrastructure projects. We contribute to building the foundation of modern cities and communities across Saudi Arabia.',
      service_2_item_1: 'Road Construction',
      service_2_item_2: 'Bridge Engineering',
      service_2_item_3: 'Water & Sewage Systems',
      service_2_item_4: 'Electrical Networks',
      service_2_item_5: 'Telecommunications Infrastructure',

      // Service 3: Electromechanical
      service_badge_3: 'Service 03',
      service_3_title: 'Electromechanical Systems',
      service_3_desc: 'Advanced MEP (Mechanical, Electrical, and Plumbing) systems including HVAC, electrical installations, fire fighting systems, and plumbing solutions for all types of buildings.',
      service_3_item_1: 'HVAC Systems',
      service_3_item_2: 'Electrical Installations',
      service_3_item_3: 'Plumbing Systems',
      service_3_item_4: 'Fire Fighting Systems',
      service_3_item_5: 'Building Management Systems',

      // Service 4: Energy Solutions
      service_badge_4: 'Service 04',
      service_4_title: 'Energy Solutions',
      service_4_desc: 'Renewable energy systems and sustainable power solutions for modern infrastructure. We help clients reduce energy costs and environmental impact through innovative solutions.',
      service_4_item_1: 'Solar Energy Systems',
      service_4_item_2: 'Energy Management',
      service_4_item_3: 'Power Distribution',
      service_4_item_4: 'Backup Power Systems',
      service_4_item_5: 'Energy Efficiency Consulting',

      // Service 5: Operations & Maintenance
      service_badge_5: 'Service 05',
      service_5_title: 'Operations & Maintenance',
      service_5_desc: 'Comprehensive facility management and maintenance services for all types of buildings including government facilities, commercial complexes, hospitals, schools, and residential compounds.',
      service_5_item_1: 'Preventive Maintenance',
      service_5_item_2: 'Corrective Maintenance',
      service_5_item_3: 'Facility Management',
      service_5_item_4: 'Technical Support',
      service_5_item_5: 'Asset Management',

      // Service 6: Cleaning Services
      service_badge_6: 'Service 06',
      service_6_title: 'Cleaning Services',
      service_6_desc: 'Professional cleaning and housekeeping services for commercial and residential facilities. We use environmentally friendly products and trained staff to maintain the highest standards of cleanliness.',
      service_6_item_1: 'Office Cleaning',
      service_6_item_2: 'Hospital Cleaning',
      service_6_item_3: 'Mall & Shopping Centers',
      service_6_item_4: 'Residential Compounds',
      service_6_item_5: 'Pest Control Services',

      // Service 7: Information Technology
      service_badge_7: 'Service 07',
      service_7_title: 'Information Technology',
      service_7_desc: 'IT infrastructure, network solutions, and technology integration services. We provide comprehensive IT solutions to support business operations and digital transformation.',
      service_7_item_1: 'Network Infrastructure',
      service_7_item_2: 'Data Center Solutions',
      service_7_item_3: 'Cybersecurity Services',
      service_7_item_4: 'Cloud Services',
      service_7_item_5: 'IT Consulting',

      // Service 8: Real Estate
      service_badge_8: 'Service 08',
      service_8_title: 'Real Estate',
      service_8_desc: 'Property development, investment, and real estate management services. We provide end-to-end solutions for real estate projects from planning to delivery and ongoing management.',
      service_8_item_1: 'Property Development',
      service_8_item_2: 'Real Estate Investment',
      service_8_item_3: 'Property Management',
      service_8_item_4: 'Real Estate Consulting',
      service_8_item_5: 'Valuation Services',

      // CTA Section
      services_cta_title: 'Ready to Start Your Project?',
      services_cta_subtitle: 'Contact us today for a free consultation and quote',
      services_cta_btn1: 'Contact Us',
      services_cta_btn2: 'Call Now',



      // Projects
      projects_title: 'Featured Projects',
      projects_subtitle: 'Explore our portfolio of successful construction projects',
      projects_btn_viewall: 'View All Projects',
      // Projects Page 
      projects_page_title: 'Our Projects',
      projects_page_subtitle: 'A portfolio of excellence across Saudi Arabia',

      // Filter Buttons
      projects_filter_all: 'All Projects',
      projects_filter_building: 'Buildings',
      projects_filter_infrastructure: 'Infrastructure',
      projects_filter_commercial: 'Commercial',
      projects_filter_government: 'Government',

      // Project 1
      project_1_title: 'King Abdullah Residential Complex',
      project_1_location: 'Jeddah • Residential Building',
      project_1_status: 'Completed 2023',

      // Project 2
      project_2_title: 'Makkah Ring Road Development',
      project_2_location: 'Makkah • Infrastructure',
      project_2_status: 'Completed 2023',

      // Project 3
      project_3_title: 'Al-Andalus Commercial Center',
      project_3_location: 'Jeddah • Commercial',
      project_3_status: 'Completed 2022',

      // Project 4
      project_4_title: 'Ministry of Education Headquarters',
      project_4_location: 'Riyadh • Government',
      project_4_status: 'Completed 2022',

      // Project 5
      project_5_title: 'King Fahd Medical Complex',
      project_5_location: 'Dammam • Healthcare Facility',
      project_5_status: 'Completed 2021',

      // Project 6
      project_6_title: 'Al Faisaliah Business Tower',
      project_6_location: 'Riyadh • Office Tower',
      project_6_status: 'Completed 2021',

      // Project 7
      project_7_title: 'Jeddah Coastal Bridge Project',
      project_7_location: 'Jeddah • Bridge Construction',
      project_7_status: 'Completed 2020',

      // Project 8
      project_8_title: 'Al-Noor Educational Complex',
      project_8_location: 'Madinah • Educational Facility',
      project_8_status: 'Completed 2020',

      // Project 9
      project_9_title: 'Grand Makkah Hotel',
      project_9_location: 'Makkah • Hospitality',
      project_9_status: 'Completed 2019',

      // Project Stats
      projects_stat_1: 'Completed Projects',
      projects_stat_2: 'Government Projects',
      projects_stat_3: 'Square meters built',
      projects_stat_4: 'Client satisfaction',

      // CTA Section
      projects_cta_title: 'Do you have a project in mind?',
      projects_cta_subtitle: 'Let’s discuss how we can help you achieve your vision',
      projects_cta_btn1: 'Start Your Project',
      projects_cta_btn2: 'Quick Call',




      // CTA
      cta_title: 'Have a Project in Mind?',
      cta_subtitle: "Let's discuss how we can help bring your vision to life",
      cta_btn_start: 'Start Your Project',
      cta_btn_quick_call: 'Quick Call',

      // Video
      video_title: 'Company Overview',
      video_subtitle: 'Watch our video to learn more about Albinayat',

      // FAQ
      faq_title: 'Frequently Asked Questions',
      faq_subtitle: 'Find answers to common questions about our services',
      faq_q1: 'What services does Albinayat provide?',
      faq_a1: 'We provide comprehensive construction and contracting services including building construction, infrastructure development, electromechanical systems, energy solutions, facility management, cleaning services, IT solutions, and real estate development.',

      faq_q2: 'Where are your offices located?',
      faq_a2: 'We have offices in 7 major cities across Saudi Arabia: Jeddah, Riyadh, Khamis Mushait, Dammam, Madinah, Tabuk, and Qassim. This allows us to serve clients throughout the Kingdom efficiently.',

      faq_q3: 'What certifications does Albinayat hold?',
      faq_a3: 'Albinayat is certified with ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health & Safety). We are also registered with the Saudi Contractors Authority and Ministry of Housing.',

      faq_q4: 'How can I request a quote for my project?',
      faq_a4: 'You can request a quote by contacting us through our website\'s contact form, calling our toll-free number 8002444020, or reaching out via WhatsApp at +966 530 006 684. Our team will respond promptly to discuss your project requirements.',

      faq_q5: 'What is Albinayat\'s experience in the construction industry?',
      faq_a5: 'Albinayat was established in 1981 and has over 42 years of experience in the construction and contracting industry. We have successfully completed numerous projects for government entities and private sector clients across Saudi Arabia.',


      // Offices
      offices_title: 'Our Offices',
      offices_subtitle: 'We serve clients across Saudi Arabia from 7 strategic locations',
      offices_view_all: 'View All Office Details',

      office_jeddah_name: 'Jeddah',
      office_jeddah_type: 'Head Office',
      office_riyadh_name: 'Riyadh',
      office_riyadh_type: 'Branch Office',
      office_khamis_name: 'Khamis Mushait',
      office_khamis_type: 'Branch Office',
      office_dammam_name: 'Dammam',
      office_dammam_type: 'Branch Office',
      office_madinah_name: 'Madinah',
      office_madinah_type: 'Branch Office',
      office_tabuk_name: 'Tabuk',
      office_tabuk_type: 'Branch Office',
      office_qassim_name: 'Qassim',
      office_qassim_type: 'Branch Office',
      // Offices Page
      offices_page_title: 'Our Offices',
      offices_page_subtitle: 'We serve clients across Saudi Arabia from 7 strategic locations',

      // Head Office
      offices_head_title: 'Head Office - Jeddah',
      offices_head_subtitle: 'Our headquarters and main operations center',
      offices_head_name: 'Albinayat Head Office',
      offices_head_label: 'Main Operations Center',

      // Labels
      offices_label_address: 'Address:',
      offices_label_phone: 'Phone:',
      offices_label_tollfree: '(Toll-Free)',
      offices_label_mobile: 'Mobile:',
      offices_label_email: 'Email:',
      offices_label_hours: 'Working Hours:',
      offices_working_hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',

      offices_btn_directions: 'Get Directions',
      offices_btn_contact: 'Contact Office',

      // Branch Offices
      offices_branch_title: 'Branch Offices',
      offices_branch_subtitle: 'Serving clients nationwide with local presence',

      // Riyadh
      office_riyadh_name: 'Riyadh Office',
      office_riyadh_address: 'King Fahd Road, Al Olaya District<br>Riyadh 12211',

      // Makkah
      office_makkah_name: 'Makkah Office',
      office_makkah_address: 'Ibrahim Al Khalil Street, Al Aziziyah<br>Makkah 24243',

      // Medina
      office_medina_name: 'Medina Office',
      office_medina_address: 'King Faisal Road, Al Uyun<br>Medina 42311',

      // Dammam
      office_dammam_name: 'Dammam Office',
      office_dammam_address: 'King Saud Street, Al Faisaliyah<br>Dammam 32245',

      // Khobar
      office_khobar_name: 'Khobar Office',
      office_khobar_address: 'Prince Turkey Street, Al Thuqbah<br>Khobar 34426',

      // Taif
      office_taif_name: 'Taif Office',
      office_taif_address: 'Al Khalidiyah Road, Al Salam<br>Taif 26512',

      // Coverage Section
      offices_coverage_title: 'Nationwide Coverage',
      offices_coverage_subtitle: 'Strategic presence across all major cities in Saudi Arabia',

      // Features
      offices_feature_1_num: '7 Offices',
      offices_feature_1_text: 'Strategic locations nationwide',
      offices_feature_2_title: 'Local Teams',
      offices_feature_2_text: 'Dedicated staff in each city',
      offices_feature_3_title: 'Fast Response',
      offices_feature_3_text: 'Quick deployment and support',
      offices_feature_4_title: '24/7 Support',
      offices_feature_4_text: 'Round-the-clock assistance',

      // CTA
      offices_cta_title: 'Find Your Nearest Office',
      offices_cta_subtitle: 'Contact us today to discuss your project requirements',
      offices_cta_btn1: 'Contact Us',
      offices_cta_btn2: 'Call: 8002444020',


      // Partners
      partners_title: 'Our Partners',
      partners_subtitle: 'Trusted partnerships with leading organizations',

      // News
      news_title: 'Latest News & Articles',
      news_subtitle: 'Stay updated with our recent projects and company news',
      news_btn_read: 'Read More',
      news_btn_viewall: 'View All News',
      // News Cards
      news_card1_title: 'Major Infrastructure Project Completed in Riyadh',
      news_card1_desc: 'Albinayat successfully delivers a landmark infrastructure development project in the heart of Riyadh...',

      news_card2_title: 'New ISO Certifications Achieved',
      news_card2_desc: 'Albinayat receives additional ISO certifications, reinforcing our commitment to quality and safety...',

      news_card3_title: 'Albinayat Partners with Vision 2030 Initiative',
      news_card3_desc: 'Our company continues to support Saudi Vision 2030 with innovative construction solutions...',

      // News Page
      news_page_title: 'Latest News & Articles',
      news_page_subtitle: 'Stay updated with our recent projects and company news',

      news_btn_read: 'Read More',

      // News Articles
      news_1_title: 'Albinayat Wins Major Vision 2030 Infrastructure Project',
      news_1_desc: 'We are proud to announce our selection as the main contractor for a major infrastructure development project aligned with Saudi Vision 2030 goals.',

      news_2_title: 'Albinayat Receives ISO 45001:2018 Certification',
      news_2_desc: 'We have successfully obtained ISO 45001:2018 certification for Occupational Health and Safety Management Systems, reinforcing our commitment to employee safety.',

      news_3_title: 'Completion of King Abdullah Residential Complex in Jeddah',
      news_3_desc: 'Successfully completed the construction of a 500-unit residential complex in Jeddah, featuring modern amenities and sustainable design.',

      news_4_title: 'Albinayat Receives Excellence Award from Saudi Contractors Authority',
      news_4_desc: 'Honored to receive the Excellence in Construction Award from the Saudi Contractors Authority for our outstanding performance in 2024.',

      news_5_title: 'Albinayat Launches Green Building Initiative',
      news_5_desc: 'Introducing our new green building initiative aimed at reducing environmental impact and promoting sustainable construction practices.',

      news_6_title: 'Implementation of BIM Technology Across All Projects',
      news_6_desc: 'Albinayat adopts Building Information Modeling (BIM) technology to enhance project efficiency and collaboration.',

      news_7_title: 'Strategic Partnership with Leading International Contractors',
      news_7_desc: 'Albinayat forms strategic partnerships with international construction firms to bring global expertise to Saudi projects.',

      news_8_title: 'Launch of Employee Development and Training Program',
      news_8_desc: 'New comprehensive training program designed to enhance skills and career development opportunities for our employees.',

      news_9_title: 'Albinayat Supports Local Community Development Projects',
      news_9_desc: 'Our corporate social responsibility initiatives focus on supporting education and infrastructure in local communities.',

      // Media & Press
      news_media_title: 'Media & Press',
      news_media_subtitle: 'Featured in leading publications and media outlets',
      // Careers Page
      career_page_title_tag: 'Careers | Albinayat Typical Contracting LLC',
      career_page_title: 'Build your career with a leading construction company',
      career_page_subtitle: 'Join a team committed to excellence and innovation',

      career_highlight1: 'Clear career progression paths and opportunities to advance within the company through performance and dedication.',
      career_highlight2: 'Continuous professional development programs and training to enhance your skills and knowledge.',
      career_highlight3: 'Attractive salary packages and benefits that reward your contribution and performance.',
      career_highlight4: 'Work with talented professionals from diverse backgrounds in a collaborative environment.',
      career_highlight5: 'Participate in landmark construction projects that shape Saudi Arabia\'s future.',
      career_highlight6: 'Supportive policies that help you maintain a healthy balance between work and personal life.',

      // Career Jobs
      career_jobs_title: 'Explore current job opportunities at Albinayat',
      career_jobs_subtitle: 'We are looking for talented professionals to join our growing team.',

      career_job1_title: 'Project Manager',
      career_job1_location: 'Jeddah, Saudi Arabia',
      career_job1_summary: 'We are seeking an experienced Project Manager to oversee major construction projects from inception to completion. The ideal candidate will have strong leadership skills and extensive experience in the construction industry.',
      career_job1_req1: 'Bachelor’s degree in Civil Engineering or related field.',
      career_job1_req2: '8+ years of experience in construction project management.',
      career_job1_req3: 'Strong knowledge of project planning, budgeting, and contracts.',

      career_job2_title: 'Civil Engineer',
      career_job2_location: 'Riyadh, Saudi Arabia',
      career_job2_summary: 'Looking for a Civil Engineer with 3–5 years of experience in infrastructure and building projects. Must be proficient in AutoCAD and project management software.',
      career_job2_req1: 'Bachelor’s degree in Civil Engineering.',
      career_job2_req2: '3–5 years of experience in infrastructure/building projects.',
      career_job2_req3: 'Proficiency in AutoCAD and related software.',

      career_job3_title: 'Mechanical Engineer (HVAC / MEP)',
      career_job3_location: 'Dammam, Saudi Arabia',
      career_job3_summary: 'Seeking a Mechanical Engineer specializing in HVAC systems and MEP coordination for large-scale construction projects.',
      career_job3_req1: 'Bachelor’s degree in Mechanical Engineering.',
      career_job3_req2: 'Experience in HVAC design and MEP coordination.',
      career_job3_req3: 'Knowledge of international standards and codes.',

      career_job4_title: 'Site Supervisor',
      career_job4_location: 'Multiple Locations, Saudi Arabia',
      career_job4_summary: 'Experienced Site Supervisor needed to oversee daily construction activities, manage site teams, and ensure safety compliance.',
      career_job4_req1: '5+ years of on-site supervision experience.',
      career_job4_req2: 'Strong leadership and communication skills.',
      career_job4_req3: 'Solid understanding of safety regulations.',

      career_job5_title: 'Safety Officer (HSE)',
      career_job5_location: 'Kingdom-wide, Saudi Arabia',
      career_job5_summary: 'HSE certified Safety Officer to implement and monitor safety protocols across construction sites, ensuring compliance with regulations.',
      career_job5_req1: 'Recognized HSE certification (e.g., NEBOSH).',
      career_job5_req2: 'Experience in construction safety management.',
      career_job5_req3: 'Strong reporting and incident investigation skills.',

      // Career Form
      career_form_title: 'Fill out the form below to submit your application',
      career_form_subtitle: 'Our HR team will review your application and contact you if your profile matches our requirements.',
      career_form_name_label: 'Full Name',
      career_form_email_label: 'Email Address',
      career_form_phone_label: 'Phone Number',
      career_form_city_label: 'City',
      career_form_city_select: 'Select your city',
      career_form_position_label: 'Position Applied For',
      career_form_position_select: 'Select a position',
      career_form_position_other: 'Other',
      career_form_experience_label: 'Years of Experience',
      career_form_experience_select: 'Select experience range',
      career_form_experience_0_2: '0–2 years',
      career_form_experience_3_5: '3–5 years',
      career_form_experience_6_10: '6–10 years',
      career_form_experience_10_plus: 'More than 10 years',
      career_form_message_label: 'Additional Information',
      career_form_cv_label: 'Upload CV (PDF/DOC)',
      career_form_privacy_text: 'I agree to the processing of my personal data in accordance with the Privacy Policy.',
      career_form_submit_btn: 'Submit Application',

      // Career Benefits
      career_benefits_title: 'We value our employees and provide comprehensive benefits',
      career_benefits_subtitle: 'Join a company that invests in your growth, well-being, and long-term success.',
      career_benefit1_title: 'Comprehensive Medical Coverage',
      career_benefit1_text: 'Comprehensive medical coverage for you and your family.',
      career_benefit2_title: 'Vacation & Annual Tickets',
      career_benefit2_text: 'Generous vacation days and annual air tickets.',
      career_benefit3_title: 'Performance Incentives',
      career_benefit3_text: 'Annual performance-based incentives and rewards.',
      career_benefit4_title: 'Housing Support',
      career_benefit4_text: 'Accommodation support or housing allowance.',
      career_benefit5_title: 'Transportation Allowance',
      career_benefit5_text: 'Company transport or monthly transportation allowance.',
      career_benefit6_title: 'End of Service Benefits',
      career_benefit6_text: 'End of service benefits as per Saudi labor law.',

      career_why_title: "Why Work With Albinayat?",
      career_why_subtitle: "Join a team committed to excellence and innovation",

      career_why_item1_title: "Career Growth",
      career_why_item1_text:
        "Clear career progression paths and opportunities to advance within the company through performance and dedication.",

      career_why_item2_title: "Training & Development",
      career_why_item2_text:
        "Continuous professional development programs and training to enhance your skills and knowledge.",

      career_why_item3_title: "Competitive Compensation",
      career_why_item3_text:
        "Attractive salary packages and benefits that reward your contribution and performance.",

      career_why_item4_title: "Diverse Team",
      career_why_item4_text:
        "Work with talented professionals from diverse backgrounds in a collaborative environment.",

      career_why_item5_title: "Major Projects",
      career_why_item5_text:
        "Participate in landmark construction projects that shape Saudi Arabia's future.",

      career_why_item6_title: "Work-Life Balance",
      career_why_item6_text:
        "Supportive policies that help you maintain a healthy balance between work and personal life.",

      // About Page
      about_page_title: 'About Albinayat',
      about_page_subtitle: 'Building Saudi Arabia\'s Future Since 1981',

      about_company_title: 'Our Company',
      about_company_subtitle: 'Leading the construction industry with innovation and excellence',

      about_established_title: 'Established in 1981',
      about_established_p1: 'Albinayat Typical Contracting LLC was founded in 1402 AH (1981 AD) by Sheikh Issa bin Hilal Al-Hilali in the field of general contracting, construction, and building. In 1998, the Operations, Maintenance, and Cleaning Division was established.',
      about_established_p2: 'Albinayat provides a comprehensive range of diverse services with a distinctive character, designed to meet market needs with various requirements and keep pace with our clients\' needs in different government sectors and the business sector, in line with Saudi Arabia\'s Vision 2030.',
      about_established_p3: 'Our company is distinguished by its modern, innovative, and diverse character. Our premium services are designed to the highest standards of quality and craftsmanship by skilled hands and planning by competent engineers, following the quality of work that has become synonymous with Albinayat and distinguishes us from other companies operating in the field.',
      about_btn_contact: 'Get in Touch',

      about_vision_title: 'Our Vision',
      about_vision_text: 'To provide the finest and most comprehensive professional services for facilities and buildings in the field of operations, maintenance, cleaning, and hospitality using the best and most skilled trained and professional human cadres in their field to ensure customer satisfaction and meet their aspirations.',

      about_mission_title: 'Our Mission',
      about_mission_text: 'Commitment to providing our professional services according to international quality standards that meet the desires of our clients from the government and private sectors and achieve their aspirations in our desire to build a strategic partnership.',

      about_goals_title: 'Our Goals',
      about_goals_text: 'To meet customer desires and achieve their aspirations and gain their sustainable trust, keep pace with the latest global developments, use the latest systems in providing and evaluating services, and contribute to creating a clean and safe environment through the use of environmentally friendly materials.',

      about_distinguish_title: 'What Distinguishes Us',
      about_distinguish_subtitle: 'Our commitment to excellence sets us apart',

      about_distinguish_1_title: 'Objectivity',
      about_distinguish_1_text: 'Continuous studies and research on the best practical methodologies and the needs of the labor market, striving for development and providing the best services.',

      about_distinguish_2_title: 'Transparency',
      about_distinguish_2_text: 'Informing the client of the actual prices and informing them of the materials used in the work.',

      about_distinguish_3_title: 'Quality',
      about_distinguish_3_text: 'Ensuring the quality of our services according to international standards and within the agreed practical framework.',

      about_distinguish_4_title: 'Continuous Training',
      about_distinguish_4_text: 'Subjecting all our staff to continuous training and development.',

      about_distinguish_5_title: 'Commitment',
      about_distinguish_5_text: 'Albinayat is committed to implementing agreements to the fullest and providing the best we have in our various fields.',

      about_stat_1: 'Years of Experience',
      about_stat_2: 'Completed Projects',
      about_stat_3: 'Offices Nationwide',
      about_stat_4: 'ISO Certifications',


      // Contact Form
      contact_form_title: 'Send Us a Message',
      contact_form_subtitle: "Fill out the form below and we'll get back to you as soon as possible",
      contact_label_name: 'Full Name *',
      contact_placeholder_name: 'Enter your full name',
      contact_label_email: 'Email Address *',
      contact_label_phone: 'Phone Number *',
      contact_label_city: 'City *',
      contact_placeholder_city: 'Select your city',
      contact_label_service: 'Service Interest *',
      contact_placeholder_service: 'Select a service',
      contact_label_message: 'Your Message *',
      contact_privacy_text: 'I agree to the',
      contact_privacy_link: 'Privacy Policy',
      contact_and: 'and',
      contact_terms_link: 'Terms & Conditions',
      contact_btn_send: 'Send Message',

      // Contact Page
      contact_page_title: 'Contact Us',
      contact_page_subtitle: 'Let\'s discuss your project requirements',

      // Contact Cards
      contact_card_phone_title: 'Call Us',
      contact_card_phone_label: 'Toll-Free',
      contact_card_mobile_title: 'Mobile',
      contact_card_mobile_label: '24/7 Support',
      contact_card_email_title: 'Email Us',
      contact_card_email_label: 'General Inquiries',
      contact_card_whatsapp_title: 'WhatsApp',
      contact_card_whatsapp_label: 'Chat with us',
      contact_card_whatsapp_btn: 'Start Chat',

      // Contact Form
      contact_form_title: 'Send Us a Message',
      contact_form_subtitle: 'Fill out the form below and we\'ll get back to you as soon as possible',
      contact_form_name: 'Full Name *',
      contact_form_name_placeholder: 'Enter your full name',
      contact_form_email: 'Email Address *',
      contact_form_phone: 'Phone Number *',
      contact_form_city: 'City *',
      contact_form_city_select: 'Select your city',
      contact_form_city_jeddah: 'Jeddah',
      contact_form_city_riyadh: 'Riyadh',
      contact_form_city_khamis: 'Khamis Mushait',
      contact_form_city_dammam: 'Dammam',
      contact_form_city_madinah: 'Madinah',
      contact_form_city_tabuk: 'Tabuk',
      contact_form_city_qassim: 'Qassim',
      contact_form_city_other: 'Other',

      contact_form_service: 'Service Interest *',
      contact_form_service_select: 'Select a service',
      contact_form_service_building: 'Building & Construction',
      contact_form_service_infrastructure: 'Infrastructure Development',
      contact_form_service_electro: 'Electromechanical Systems',
      contact_form_service_energy: 'Energy Solutions',
      contact_form_service_operations: 'Operations & Maintenance',
      contact_form_service_cleaning: 'Cleaning Services',
      contact_form_service_it: 'Information Technology',
      contact_form_service_realestate: 'Real Estate',
      contact_form_service_training: 'Cooperative Training',
      contact_form_service_other: 'Other',

      contact_form_message: 'Your Message *',
      contact_form_message_placeholder: 'Tell us about your project requirements...',
      contact_form_privacy_1: 'I agree to the',
      contact_form_privacy_policy: 'Privacy Policy',
      contact_form_privacy_2: 'and',
      contact_form_privacy_terms: 'Terms & Conditions',
      contact_form_submit: 'Send Message',

      // Office Info
      contact_office_title: 'Visit Our Head Office',
      contact_office_address_label: 'Address',
      contact_office_hours_label: 'Working Hours',
      contact_office_hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
      contact_office_website_label: 'Website',
      contact_office_btn: 'View All Offices',



      // Cities
      city_jeddah: 'Jeddah',
      city_riyadh: 'Riyadh',
      city_khamis: 'Khamis Mushait',
      city_dammam: 'Dammam',
      city_madinah: 'Madinah',
      city_tabuk: 'Tabuk',
      city_qassim: 'Qassim',
      city_other: 'Other',

      // Services (for dropdown)
      service_building: 'Building & Construction',
      service_infrastructure: 'Infrastructure',
      service_electromechanical: 'Electromechanical',
      service_energy: 'Energy Solutions',
      service_operations: 'Operations & Maintenance',
      service_cleaning: 'Cleaning Services',
      service_it: 'Information Technology',
      service_realestate: 'Real Estate',
      service_training: 'Cooperative Training',
      service_other: 'Other',

      // Office Info
      contact_office_title: 'Visit Our Head Office',
      contact_address_title: 'Address',
      contact_hours_title: 'Working Hours',
      contact_hours_text: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
      contact_website_title: 'Website',
      contact_view_offices: 'View All Offices',
      contact_view_map: 'View larger map',

      // Footer
      footer_about_text: 'Albinayat Typical Contracting LLC has been delivering excellence in construction and contracting services since 1981. We are committed to building Saudi Arabia\'s future.',
      footer_quick_links_title: 'Quick Links',
      footer_link_about: 'About Us',
      footer_link_services: 'Our Services',
      footer_link_projects: 'Projects',
      footer_link_news: 'News & Articles',
      footer_link_training: 'Cooperative Training',
      footer_link_careers: 'Careers',
      footer_link_vendors: 'Vendor Registration',
      footer_link_contact: 'Contact Us',

      footer_services_title: 'Our Services',
      footer_service_building: 'Building & Construction',
      footer_service_infra: 'Infrastructure',
      footer_service_electro: 'Electromechanical',
      footer_service_energy: 'Energy Solutions',
      footer_service_ops: 'Operations & Maintenance',
      footer_service_clean: 'Cleaning Services',

      footer_contact_title: 'Contact Us',
      footer_copy: '© 2025 Albinayat Typical Contracting LLC. All rights reserved.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms & Conditions',
      footer_partners_title: 'Our Partners',

      // Privacy Policy Page
      privacy_page_title: 'Privacy Policy',
      privacy_last_updated: 'Last Updated:',

      // Introduction
      privacy_intro_title: 'Introduction',
      privacy_intro_text: 'Albinayat Typical Contracting LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',

      // Information We Collect
      privacy_collect_title: 'Information We Collect',
      privacy_collect_personal_title: 'Personal Information',
      privacy_collect_personal_text: 'We may collect personal information that you voluntarily provide to us when you:',
      privacy_collect_item1: 'Contact us through our website forms',
      privacy_collect_item2: 'Subscribe to our newsletter',
      privacy_collect_item3: 'Request a quote or consultation',
      privacy_collect_item4: 'Apply for employment',
      privacy_collect_auto_title: 'Information Collected Automatically',
      privacy_collect_auto_text: 'When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.',

      // How We Use Your Information
      privacy_use_title: 'How We Use Your Information',
      privacy_use_text: 'We use the information we collect in various ways, including to:',
      privacy_use_item1: 'Provide, operate, and maintain our services',
      privacy_use_item2: 'Improve, personalize, and expand our services',
      privacy_use_item3: 'Understand and analyze how you use our website',
      privacy_use_item4: 'Communicate with you about services, updates, and promotional offers',
      privacy_use_item5: 'Process your transactions and send you related information',
      privacy_use_item6: 'Find and prevent fraud',

      // Information Sharing
      privacy_sharing_title: 'Information Sharing and Disclosure',
      privacy_sharing_text: 'We may share your information in the following situations:',
      privacy_sharing_item1_title: 'With service providers:',
      privacy_sharing_item1_text: 'We may share information with third-party vendors who perform services for us',
      privacy_sharing_item2_title: 'For legal purposes:',
      privacy_sharing_item2_text: 'We may disclose information if required by law or in response to legal requests',
      privacy_sharing_item3_title: 'With your consent:',
      privacy_sharing_item3_text: 'We may share information with your explicit consent',

      // Data Security
      privacy_security_title: 'Data Security',
      privacy_security_text: 'We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.',

      // Your Rights
      privacy_rights_title: 'Your Privacy Rights',
      privacy_rights_text: 'Depending on your location, you may have the following rights:',
      privacy_rights_item1: 'Access your personal data',
      privacy_rights_item2: 'Correct inaccurate data',
      privacy_rights_item3: 'Request deletion of your data',
      privacy_rights_item4: 'Object to processing of your data',
      privacy_rights_item5: 'Request restriction of processing',
      privacy_rights_item6: 'Data portability',

      // Cookies
      privacy_cookies_title: 'Cookies and Tracking Technologies',
      privacy_cookies_text: 'We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',

      // Updates
      privacy_updates_title: 'Updates to This Policy',
      privacy_updates_text: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',

      // Contact
      privacy_contact_title: 'Contact Us',
      privacy_contact_text: 'If you have any questions about this Privacy Policy, please contact us:',
      privacy_contact_email_label: 'Email:',
      privacy_contact_phone_label: 'Phone:',
      privacy_contact_address_label: 'Address:',


      // Terms & Conditions Page
      terms_page_title: 'Terms & Conditions',
      terms_last_updated: 'Last Updated:',

      // Introduction
      terms_intro_title: 'Agreement to Terms',
      terms_intro_text: 'These Terms and Conditions ("Terms") govern your access to and use of the Albinayat Typical Contracting LLC website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.',

      // Use of Website
      terms_use_title: 'Use of Website',
      terms_use_text: 'You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:',
      terms_use_item1: 'Use the website in any way that violates any applicable law or regulation',
      terms_use_item2: 'Engage in any conduct that restricts or inhibits anyone\'s use of the website',
      terms_use_item3: 'Use any automated system to access the website',
      terms_use_item4: 'Attempt to gain unauthorized access to any portion of the website',
      terms_use_item5: 'Interfere with or disrupt the website or servers',

      // Intellectual Property
      terms_ip_title: 'Intellectual Property Rights',
      terms_ip_text1: 'The website and its entire contents, features, and functionality are owned by Albinayat Typical Contracting LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
      terms_ip_text2: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any of the material on our website without our prior written consent.',

      // Services
      terms_services_title: 'Services and Quotations',
      terms_services_text: 'All service descriptions, specifications, and quotations provided through our website are subject to:',
      terms_services_item1: 'Verification and confirmation by our team',
      terms_services_item2: 'Availability of resources and materials',
      terms_services_item3: 'Site inspection and assessment',
      terms_services_item4: 'Execution of formal written contracts',

      // Liability
      terms_liability_title: 'Limitation of Liability',
      terms_liability_text: 'To the fullest extent permitted by applicable law, Albinayat Typical Contracting LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the website or services.',

      // Warranties
      terms_warranties_title: 'Warranties and Disclaimers',
      terms_warranties_text: 'While we strive to provide accurate and up-to-date information, the website and services are provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding:',
      terms_warranties_item1: 'The accuracy, reliability, or completeness of content',
      terms_warranties_item2: 'The uninterrupted or error-free operation of the website',
      terms_warranties_item3: 'The security of data transmission',
      terms_warranties_item4: 'The results that may be obtained from use of the website',

      // Governing Law
      terms_law_title: 'Governing Law and Jurisdiction',
      terms_law_text: 'These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Jeddah, Saudi Arabia.',

      // Changes
      terms_changes_title: 'Changes to Terms',
      terms_changes_text: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.',

      // Contact
      terms_contact_title: 'Contact Information',
      terms_contact_text: 'If you have any questions about these Terms and Conditions, please contact us:',
      terms_contact_email_label: 'Email:',
      terms_contact_phone_label: 'Phone:',
      terms_contact_address_label: 'Address:',

      // Vendor Page
      vendor_page_title: 'Vendor Registration',
      vendor_page_subtitle: 'Partner with Albinayat to build excellence together',

      // Why Partner With Us
      vendor_why_title: 'Why Partner With Albinayat?',
      vendor_why_subtitle: 'Benefits of joining our trusted network',

      vendor_why_item1_title: 'Financial Stability',
      vendor_why_item1_text: 'Guaranteed payments and financial reliability backed by decades of success.',

      vendor_why_item2_title: 'Long-term Partnership',
      vendor_why_item2_text: 'Building lasting relationships based on trust, transparency, and mutual growth.',

      vendor_why_item3_title: 'Major Projects',
      vendor_why_item3_text: 'Access to participate in landmark projects across the Kingdom.',

      vendor_why_item4_title: 'Transparent Process',
      vendor_why_item4_text: 'Clean and transparent procurement processes and fair evaluation.',

      vendor_form_title: 'Register as a Vendor',
      vendor_form_subtitle: 'Join our network of trusted suppliers and subcontractors',

      vendor_form_company_info: 'Company Information',
      vendor_form_company_name: 'Company Name *',
      vendor_form_cr_number: 'CR Number *',
      vendor_form_contact_person: 'Contact Person *',
      vendor_form_email: 'Email Address *',
      vendor_form_phone: 'Phone Number *',

      vendor_form_category: 'Business Category *',
      vendor_form_select: 'Select Category',

      vendor_form_details: 'Additional Details',
      vendor_form_description: 'Company Description / Scope of Work',
      vendor_form_profile: 'Upload Company Profile (PDF - Max 10MB)',

      vendor_form_privacy_1: 'I agree to the',
      vendor_form_privacy_policy: 'Privacy Policy',
      vendor_form_privacy_2: 'and certify that the information provided is accurate.',

      vendor_form_submit: 'Submit Registration',
    },

    ar: {
      // SEO Metadata
      page_title: 'شركة البنايات النموذجية للمقاولات',
      meta_description: 'شركة البنايات النموذجية للمقاولات - شريكك الموثوق في البناء والبنية التحتية وإدارة المرافق في جميع أنحاء المملكة العربية السعودية.',

      // Navigation
      nav_home: 'الرئيسية',
      nav_about: 'من نحن',
      nav_services: 'الخدمات',
      nav_projects: 'المشاريع',
      nav_news: 'الأخبار',
      nav_offices: 'مكاتبنا',
      nav_contact: 'اتصل بنا',
      nav_training: 'التدريب التعاوني',

      // Hero Section
      hero_title: 'نبني التميز منذ عام 1981',
      hero_subtitle: 'شركة البنايات النموذجية للمقاولات - شريكك الموثوق في البناء والبنية التحتية وإدارة المرافق في جميع أنحاء المملكة العربية السعودية.',
      hero_btn_services: 'خدماتنا',
      hero_btn_quote: 'طلب عرض سعر',

      // Why Choose Us
      why_choose_title: 'لماذا تختارنا',
      why_choose_subtitle: 'اكتشف ما يجعل البنايات الشريك المفضل في المقاولات',

      feature_experience_title: 'خبرة أكثر من 42 عامًا',
      feature_experience_text: 'تأسست في عام 1981، نقدم التميز في خدمات البناء والمقاولات في جميع أنحاء المملكة العربية السعودية.',

      feature_certified_title: 'معتمدون بشهادات الأيزو',
      feature_certified_text: 'حاصلون على شهادات ISO 9001 و ISO 14001 و ISO 45001 لإدارة الجودة والبيئة والسلامة.',

      feature_team_title: 'فريق خبراء',
      feature_team_text: 'مهندسون وفنيون ذوو مهارات عالية ملتزمون بتسليم المشاريع في الوقت المحدد وضمن الميزانية.',

      feature_satisfaction_title: 'رضا العملاء',
      feature_satisfaction_text: 'بناء شراكات طويلة الأمد مع الجهات الحكومية وعملاء القطاع الخاص على مستوى المملكة.',

      // Services
      services_title: 'خدماتنا',
      services_subtitle: 'حلول شاملة للمقاولات والبناء',
      service_btn_learn: 'اعرف المزيد',

      service_building_title: 'البناء والإنشاءات',
      service_building_text: 'حلول إنشائية كاملة من المشاريع السكنية إلى التجارية.',

      service_infrastructure_title: 'البنية التحتية',
      service_infrastructure_text: 'الطرق والجسور ومشاريع الهندسة المدنية في جميع أنحاء المملكة.',

      service_electromechanical_title: 'الأعمال الكهروميكانيكية',
      service_electromechanical_text: 'تركيب وصيانة أنظمة MEP.',

      service_energy_title: 'حلول الطاقة',
      service_energy_text: 'مشاريع الطاقة المتجددة والبنية التحتية للطاقة.',

      service_operations_title: 'التشغيل والصيانة',
      service_operations_text: 'خدمات إدارة وصيانة المرافق الشاملة.',

      service_cleaning_title: 'خدمات النظافة',
      service_cleaning_text: 'خدمات نظافة وحراسة احترافية لجميع المرافق.',

      service_it_title: 'تقنية المعلومات',
      service_it_text: 'البنية التحتية لتقنية المعلومات والحلول التقنية.',

      service_realestate_title: 'العقارات',
      service_realestate_text: 'تطوير العقارات وخدمات الاستثمار العقاري.',

      // Services Page
      services_page_title: 'خدماتنا',
      services_page_subtitle: 'حلول شاملة للمقاولات والبناء',

      service_btn_quote: 'طلب عرض سعر',

      // Service 1: Building & Construction
      service_badge_1: 'الخدمة 01',
      service_1_title: 'البناء والإنشاءات',
      service_1_desc: 'خدمات بناء كاملة للمشاريع السكنية والتجارية والصناعية. يقدم فريقنا ذو الخبرة مبانٍ عالية الجودة تلبي المعايير الدولية وتتجاوز توقعات العملاء.',
      service_1_item_1: 'المباني السكنية',
      service_1_item_2: 'المجمعات التجارية',
      service_1_item_3: 'المنشآت الصناعية',
      service_1_item_4: 'المباني الحكومية',
      service_1_item_5: 'المرافق التعليمية',

      // Service 2: Infrastructure
      service_badge_2: 'الخدمة 02',
      service_2_title: 'تطوير البنية التحتية',
      service_2_desc: 'تطوير الطرق والجسور والمرافق ومشاريع البنية التحتية العامة. نساهم في بناء أساس المدن والمجتمعات الحديثة في جميع أنحاء المملكة العربية السعودية.',
      service_2_item_1: 'إنشاء الطرق',
      service_2_item_2: 'هندسة الجسور',
      service_2_item_3: 'أنظمة المياه والصرف الصحي',
      service_2_item_4: 'الشبكات الكهربائية',
      service_2_item_5: 'البنية التحتية للاتصالات',

      // Service 3: Electromechanical
      service_badge_3: 'الخدمة 03',
      service_3_title: 'الأنظمة الكهروميكانيكية',
      service_3_desc: 'أنظمة MEP المتقدمة (الميكانيكية والكهربائية والسباكة) بما في ذلك أنظمة التكييف والتركيبات الكهربائية وأنظمة مكافحة الحريق وحلول السباكة لجميع أنواع المباني.',
      service_3_item_1: 'أنظمة التكييف',
      service_3_item_2: 'التركيبات الكهربائية',
      service_3_item_3: 'أنظمة السباكة',
      service_3_item_4: 'أنظمة مكافحة الحريق',
      service_3_item_5: 'أنظمة إدارة المباني',

      // Service 4: Energy Solutions
      service_badge_4: 'الخدمة 04',
      service_4_title: 'حلول الطاقة',
      service_4_desc: 'أنظمة الطاقة المتجددة وحلول الطاقة المستدامة للبنية التحتية الحديثة. نساعد العملاء على تقليل تكاليف الطاقة والأثر البيئي من خلال حلول مبتكرة.',
      service_4_item_1: 'أنظمة الطاقة الشمسية',
      service_4_item_2: 'إدارة الطاقة',
      service_4_item_3: 'توزيع الطاقة',
      service_4_item_4: 'أنظمة الطاقة الاحتياطية',
      service_4_item_5: 'استشارات كفاءة الطاقة',

      // Service 5: Operations & Maintenance
      service_badge_5: 'الخدمة 05',
      service_5_title: 'التشغيل والصيانة',
      service_5_desc: 'خدمات إدارة وصيانة المرافق الشاملة لجميع أنواع المباني بما في ذلك المرافق الحكومية والمجمعات التجارية والمستشفيات والمدارس والمجمعات السكنية.',
      service_5_item_1: 'الصيانة الوقائية',
      service_5_item_2: 'الصيانة التصحيحية',
      service_5_item_3: 'إدارة المرافق',
      service_5_item_4: 'الدعم الفني',
      service_5_item_5: 'إدارة الأصول',

      // Service 6: Cleaning Services
      service_badge_6: 'الخدمة 06',
      service_6_title: 'خدمات النظافة',
      service_6_desc: 'خدمات نظافة وتدبير منزلي احترافية للمرافق التجارية والسكنية. نستخدم منتجات صديقة للبيئة وموظفين مدربين للحفاظ على أعلى معايير النظافة.',
      service_6_item_1: 'نظافة المكاتب',
      service_6_item_2: 'نظافة المستشفيات',
      service_6_item_3: 'مراكز التسوق',
      service_6_item_4: 'المجمعات السكنية',
      service_6_item_5: 'خدمات مكافحة الآفات',

      // Service 7: Information Technology
      service_badge_7: 'الخدمة 07',
      service_7_title: 'تقنية المعلومات',
      service_7_desc: 'البنية التحتية لتكنولوجيا المعلومات وحلول الشبكات وخدمات تكامل التكنولوجيا. نقدم حلول تقنية معلومات شاملة لدعم العمليات التجارية والتحول الرقمي.',
      service_7_item_1: 'البنية التحتية للشبكات',
      service_7_item_2: 'حلول مراكز البيانات',
      service_7_item_3: 'خدمات الأمن السيبراني',
      service_7_item_4: 'الخدمات السحابية',
      service_7_item_5: 'استشارات تقنية المعلومات',

      // Service 8: Real Estate
      service_badge_8: 'الخدمة 08',
      service_8_title: 'العقارات',
      service_8_desc: 'خدمات تطوير العقارات والاستثمار وإدارة العقارات. نقدم حلولاً شاملة لمشاريع العقارات من التخطيط إلى التسليم والإدارة المستمرة.',
      service_8_item_1: 'تطوير العقارات',
      service_8_item_2: 'الاستثمار العقاري',
      service_8_item_3: 'إدارة العقارات',
      service_8_item_4: 'الاستشارات العقارية',
      service_8_item_5: 'خدمات التقييم',

      // CTA Section
      services_cta_title: 'هل أنت مستعد لبدء مشروعك؟',
      services_cta_subtitle: 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر',
      services_cta_btn1: 'تواصل معنا',
      services_cta_btn2: 'اتصل الآن',



      // Projects
      projects_title: 'مشاريعنا المميزة',
      projects_subtitle: 'استكشف محفظة مشاريعنا الإنشائية الناجحة',
      projects_btn_viewall: 'عرض جميع المشاريع',

      // Projects Page
      projects_page_title: 'مشاريعنا',
      projects_page_subtitle: 'محفظة التميز في جميع أنحاء المملكة العربية السعودية',

      // Filter Buttons
      projects_filter_all: 'جميع المشاريع',
      projects_filter_building: 'المباني',
      projects_filter_infrastructure: 'البنية التحتية',
      projects_filter_commercial: 'تجاري',
      projects_filter_government: 'حكومي',

      // Project 1
      project_1_title: 'مجمع الملك عبدالله السكني',
      project_1_location: 'جدة • مبنى سكني',
      project_1_status: 'مكتمل 2023',

      // Project 2
      project_2_title: 'تطوير الطريق الدائري في مكة',
      project_2_location: 'مكة المكرمة • بنية تحتية',
      project_2_status: 'مكتمل 2023',

      // Project 3
      project_3_title: 'مركز الأندلس التجاري',
      project_3_location: 'جدة • تجاري',
      project_3_status: 'مكتمل 2022',

      // Project 4
      project_4_title: 'مقر وزارة التعليم',
      project_4_location: 'الرياض • حكومي',
      project_4_status: 'مكتمل 2022',

      // Project 5
      project_5_title: 'مجمع الملك فهد الطبي',
      project_5_location: 'الدمام • منشأة صحية',
      project_5_status: 'مكتمل 2021',

      // Project 6
      project_6_title: 'برج الفيصلية للأعمال',
      project_6_location: 'الرياض • مكتب تجاري',
      project_6_status: 'مكتمل 2021',

      // Project 7
      project_7_title: 'مشروع جسر جدة الساحلي',
      project_7_location: 'جدة • إنشاء جسر',
      project_7_status: 'مكتمل 2020',

      // Project 8
      project_8_title: 'مجمع النور التعليمي',
      project_8_location: 'المدينة المنورة • منشأة تعليمية',
      project_8_status: 'مكتمل 2020',

      // Project 9
      project_9_title: 'فندق مكة الكبير',
      project_9_location: 'مكة المكرمة • ضيافة',
      project_9_status: 'مكتمل 2019',

      // Project Stats
      projects_stat_1: 'مشروع مكتمل',
      projects_stat_2: 'مشروع حكومي',
      projects_stat_3: 'متر مربع تم بناؤه',
      projects_stat_4: 'رضا العملاء',

      // CTA Section
      projects_cta_title: 'هل لديك مشروع في ذهنك؟',
      projects_cta_subtitle: 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق رؤيتك',
      projects_cta_btn1: 'ابدأ مشروعك',
      projects_cta_btn2: 'اتصال سريع',


      // CTA
      cta_title: 'لديك مشروع في ذهنك؟',
      cta_subtitle: 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق رؤيتك',
      cta_btn_start: 'ابدأ مشروعك',
      cta_btn_quick_call: 'الاتصال السريع',

      // Video
      video_title: 'نظرة عامة على الشركة',
      video_subtitle: 'شاهد الفيديو لمعرفة المزيد عن البنايات',

      // FAQ
      faq_title: 'الأسئلة الشائعة',
      faq_subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا',

      faq_q1: 'ما هي الخدمات التي تقدمها البنايات؟',
      faq_a1: 'نقدم خدمات شاملة للبناء والمقاولات تشمل بناء المباني، تطوير البنية التحتية، الأنظمة الكهروميكانيكية، حلول الطاقة، إدارة المرافق، خدمات النظافة، حلول تقنية المعلومات، والتطوير العقاري.',

      faq_q2: 'أين تقع مكاتبكم؟',
      faq_a2: 'لدينا مكاتب في 7 مدن رئيسية في جميع أنحاء المملكة العربية السعودية: جدة، الرياض، خميس مشيط، الدمام، المدينة المنورة، تبوك، والقصيم. مما يتيح لنا خدمة العملاء في جميع أنحاء المملكة بكفاءة.',

      faq_q3: 'ما هي الشهادات التي تحملها البنايات؟',
      faq_a3: 'البنايات حاصلة على شهادات ISO 9001 (إدارة الجودة)، ISO 14001 (الإدارة البيئية)، و ISO 45001 (الصحة والسلامة المهنية). كما أننا مسجلون لدى هيئة المقاولين السعودية ووزارة الإسكان.',

      faq_q4: 'كيف يمكنني طلب عرض سعر لمشروعي؟',
      faq_a4: 'يمكنك طلب عرض سعر من خلال الاتصال بنا عبر نموذج الاتصال على موقعنا، أو الاتصال على رقمنا المجاني 8002444020، أو التواصل عبر واتساب على +966 530 006 684. سيقوم فريقنا بالرد بسرعة لمناقشة متطلبات مشروعك.',

      faq_q5: 'ما هي خبرة البنايات في صناعة البناء؟',
      faq_a5: 'تأسست البنايات في عام 1981 ولديها أكثر من 42 عامًا من الخبرة في صناعة البناء والمقاولات. لقد أنجزنا بنجاح العديد من المشاريع للجهات الحكومية وعملاء القطاع الخاص في جميع أنحاء المملكة العربية السعودية.',


      // Offices
      offices_title: 'مكاتبنا',
      offices_subtitle: 'نخدم العملاء في جميع أنحاء المملكة من 7 مواقع استراتيجية',
      offices_view_all: 'عرض تفاصيل جميع المكاتب',

      office_jeddah_name: 'جدة',
      office_jeddah_type: 'المكتب الرئيسي',
      office_riyadh_name: 'الرياض',
      office_riyadh_type: 'فرع',
      office_khamis_name: 'خميس مشيط',
      office_khamis_type: 'فرع',
      office_dammam_name: 'الدمام',
      office_dammam_type: 'فرع',
      office_madinah_name: 'المدينة المنورة',
      office_madinah_type: 'فرع',
      office_tabuk_name: 'تبوك',
      office_tabuk_type: 'فرع',
      office_qassim_name: 'القصيم',
      office_qassim_type: 'فرع',

      // Offices Page
      offices_page_title: 'مكاتبنا',
      offices_page_subtitle: 'نخدم العملاء في جميع أنحاء المملكة من 7 مواقع استراتيجية',

      // Head Office
      offices_head_title: 'المكتب الرئيسي - جدة',
      offices_head_subtitle: 'مقرنا الرئيسي ومركز العمليات الرئيسي',
      offices_head_name: 'المكتب الرئيسي للبنايات',
      offices_head_label: 'مركز العمليات الرئيسي',

      // Labels
      offices_label_address: 'العنوان:',
      offices_label_phone: 'الهاتف:',
      offices_label_tollfree: '(مجاني)',
      offices_label_mobile: 'الجوال:',
      offices_label_email: 'البريد الإلكتروني:',
      offices_label_hours: 'ساعات العمل:',
      offices_working_hours: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',

      offices_btn_directions: 'الحصول على الاتجاهات',
      offices_btn_contact: 'اتصل بالمكتب',

      // Branch Offices
      offices_branch_title: 'المكاتب الفرعية',
      offices_branch_subtitle: 'خدمة العملاء على مستوى المملكة بحضور محلي',

      // Riyadh
      office_riyadh_name: 'مكتب الرياض',
      office_riyadh_address: 'طريق الملك فهد، حي العليا<br>الرياض 12211',

      // Makkah
      office_makkah_name: 'مكتب مكة المكرمة',
      office_makkah_address: 'شارع إبراهيم الخليل، العزيزية<br>مكة المكرمة 24243',

      // Medina
      office_medina_name: 'مكتب المدينة المنورة',
      office_medina_address: 'طريق الملك فيصل، العيون<br>المدينة المنورة 42311',

      // Dammam
      office_dammam_name: 'مكتب الدمام',
      office_dammam_address: 'شارع الملك سعود، الفيصلية<br>الدمام 32245',

      // Khobar
      office_khobar_name: 'مكتب الخبر',
      office_khobar_address: 'شارع الأمير تركي، الثقبة<br>الخبر 34426',

      // Taif
      office_taif_name: 'مكتب الطائف',
      office_taif_address: 'طريق الخالدية، السلام<br>الطائف 26512',

      // Coverage Section
      offices_coverage_title: 'تغطية على مستوى المملكة',
      offices_coverage_subtitle: 'تواجد استراتيجي في جميع المدن الرئيسية في المملكة العربية السعودية',

      // Features
      offices_feature_1_num: '7 مكاتب',
      offices_feature_1_text: 'مواقع استراتيجية في جميع أنحاء المملكة',
      offices_feature_2_title: 'فرق محلية',
      offices_feature_2_text: 'موظفون متخصصون في كل مدينة',
      offices_feature_3_title: 'استجابة سريعة',
      offices_feature_3_text: 'نشر ودعم سريع',
      offices_feature_4_title: 'دعم على مدار الساعة',
      offices_feature_4_text: 'مساعدة على مدار الساعة طوال أيام الأسبوع',

      // CTA
      offices_cta_title: 'ابحث عن أقرب مكتب لك',
      offices_cta_subtitle: 'اتصل بنا اليوم لمناقشة متطلبات مشروعك',
      offices_cta_btn1: 'اتصل بنا',
      offices_cta_btn2: 'اتصل: 8002444020',


      // Partners
      partners_title: 'شركاؤنا',
      partners_subtitle: 'شراكات موثوقة مع مؤسسات رائدة',

      // News
      news_title: 'آخر الأخبار والمقالات',
      news_subtitle: 'ابق على اطلاع بأحدث مشاريعنا وأخبار الشركة',
      news_btn_read: 'اقرأ المزيد',
      news_btn_viewall: 'عرض جميع الأخبار',
      // News Cards
      news_card1_title: 'إنجاز مشروع بنية تحتية كبير في الرياض',
      news_card1_desc: 'البنايات تنجز بنجاح مشروع بنية تحتية رائد في قلب الرياض...',

      news_card2_title: 'الحصول على شهادات أيزو جديدة',
      news_card2_desc: 'البنايات تحصل على شهادات أيزو إضافية، مما يعزز التزامنا بالجودة والسلامة...',

      news_card3_title: 'البنايات تتعاون مع مبادرة رؤية 2030',
      news_card3_desc: 'شركتنا تواصل دعم رؤية السعودية 2030 بحلول إنشائية مبتكرة...',


      // News Page
      news_page_title: 'آخر الأخبار والمقالات',
      news_page_subtitle: 'ابق على اطلاع بأحدث مشاريعنا وأخبار الشركة',

      news_btn_read: 'اقرأ المزيد',

      // News Articles
      news_1_title: 'البنايات تفوز بمشروع بنية تحتية رئيسي ضمن رؤية 2030',
      news_1_desc: 'يسعدنا الإعلان عن اختيارنا كمقاول رئيسي لمشروع تطوير بنية تحتية كبير يتماشى مع أهداف رؤية السعودية 2030.',

      news_2_title: 'البنايات تحصل على شهادة ISO 45001:2018',
      news_2_desc: 'حصلنا بنجاح على شهادة ISO 45001:2018 لأنظمة إدارة الصحة والسلامة المهنية، مما يعزز التزامنا بسلامة الموظفين.',

      news_3_title: 'إنجاز مجمع الملك عبدالله السكني في جدة',
      news_3_desc: 'أكملنا بنجاح بناء مجمع سكني يحتوي على 500 وحدة في جدة، يتميز بوسائل الراحة الحديثة والتصميم المستدام.',

      news_4_title: 'البنايات تحصل على جائزة التميز من هيئة المقاولين السعودية',
      news_4_desc: 'يشرفنا الحصول على جائزة التميز في البناء من هيئة المقاولين السعودية لأدائنا المتميز في عام 2024.',

      news_5_title: 'البنايات تطلق مبادرة المباني الخضراء',
      news_5_desc: 'نقدم مبادرتنا الجديدة للمباني الخضراء التي تهدف إلى تقليل الأثر البيئي وتعزيز ممارسات البناء المستدام.',

      news_6_title: 'تطبيق تقنية BIM في جميع المشاريع',
      news_6_desc: 'تتبنى البنايات تقنية نمذجة معلومات البناء (BIM) لتعزيز كفاءة المشاريع والتعاون.',

      news_7_title: 'شراكة استراتيجية مع مقاولين دوليين رائدين',
      news_7_desc: 'البنايات تشكل شراكات استراتيجية مع شركات إنشاءات دولية لجلب الخبرة العالمية للمشاريع السعودية.',

      news_8_title: 'إطلاق برنامج تطوير وتدريب الموظفين',
      news_8_desc: 'برنامج تدريب شامل جديد مصمم لتعزيز المهارات وفرص التطوير الوظيفي لموظفينا.',

      news_9_title: 'البنايات تدعم مشاريع تنمية المجتمع المحلي',
      news_9_desc: 'تركز مبادرات المسؤولية الاجتماعية للشركات لدينا على دعم التعليم والبنية التحتية في المجتمعات المحلية.',

      // Media & Press
      news_media_title: 'الإعلام والصحافة',
      news_media_subtitle: 'مميزون في المنشورات ووسائل الإعلام الرائدة',
      // صفحة الوظائف
      career_page_title_tag: 'الوظائف | شركة البنايات النموذجية للمقاولات',
      career_page_title: 'نقدّر موظفينا ونوفر لهم بيئة عمل مميزة',
      career_page_subtitle: 'انضم إلى فريق ملتزم بالتميز والابتكار',

      career_highlight1: 'مسارات وظيفية واضحة وفرص ترقٍ داخل الشركة بناءً على الأداء والالتزام.',
      career_highlight2: 'برامج تطوير مهني وتدريب مستمر لتعزيز مهاراتك ومعرفتك.',
      career_highlight3: 'رواتب ومزايا تنافسية تكافئ مساهمتك وأداءك.',
      career_highlight4: 'العمل مع فريق محترف ومتعدد الخبرات في بيئة تعاونية.',
      career_highlight5: 'المشاركة في مشاريع كبرى تساهم في بناء مستقبل المملكة.',
      career_highlight6: 'سياسات داعمة تساعدك على تحقيق توازن بين العمل والحياة.',

      // وظائف الكاريير
      career_jobs_title: 'استكشف فرص العمل المتاحة في البنايات',
      career_jobs_subtitle: 'نبحث عن كفاءات مميزة للانضمام إلى فريقنا المتنامي.',

      career_job1_title: 'مدير مشروع',
      career_job1_location: 'جدة، المملكة العربية السعودية',
      career_job1_summary: 'نبحث عن مدير مشروع ذو خبرة لقيادة المشاريع الإنشائية الكبرى من البداية حتى التسليم، مع مهارات قيادة قوية وخبرة واسعة في قطاع المقاولات.',
      career_job1_req1: 'درجة البكالوريوس في الهندسة المدنية أو مجال ذي صلة.',
      career_job1_req2: 'خبرة 8 سنوات أو أكثر في إدارة مشاريع البناء.',
      career_job1_req3: 'معرفة قوية بالتخطيط والميزانيات والعقود.',

      career_job2_title: 'مهندس مدني',
      career_job2_location: 'الرياض، المملكة العربية السعودية',
      career_job2_summary: 'مطلوب مهندس مدني ذو خبرة من 3 إلى 5 سنوات في مشاريع البنية التحتية والمباني، ولديه إلمام ببرامج الأوتوكاد وبرامج إدارة المشاريع.',
      career_job2_req1: 'درجة البكالوريوس في الهندسة المدنية.',
      career_job2_req2: 'خبرة 3–5 سنوات في مشاريع البنية التحتية أو المباني.',
      career_job2_req3: 'إجادة العمل على AutoCAD والبرامج ذات الصلة.',

      career_job3_title: 'مهندس ميكانيكا (تكييف / ميكانيكا)',
      career_job3_location: 'الدمام، المملكة العربية السعودية',
      career_job3_summary: 'مطلوب مهندس ميكانيكا متخصص في أنظمة التكييف وتنسيق أعمال الـ MEP للمشاريع الكبيرة.',
      career_job3_req1: 'درجة البكالوريوس في الهندسة الميكانيكية.',
      career_job3_req2: 'خبرة في تصميم أنظمة التكييف وتنسيق أعمال MEP.',
      career_job3_req3: 'معرفة بالمعايير والمواصفات العالمية.',

      career_job4_title: 'مشرف موقع',
      career_job4_location: 'عدة مناطق، المملكة العربية السعودية',
      career_job4_summary: 'مشرف موقع ذو خبرة للإشراف على الأعمال اليومية في الموقع وإدارة فرق العمل والتأكد من تطبيق معايير السلامة.',
      career_job4_req1: 'خبرة 5 سنوات أو أكثر في الإشراف الميداني.',
      career_job4_req2: 'مهارات قوية في القيادة والتواصل.',
      career_job4_req3: 'إلمام جيد بأنظمة ولوائح السلامة.',

      career_job5_title: 'مسؤول سلامة (HSE)',
      career_job5_location: 'جميع أنحاء المملكة',
      career_job5_summary: 'مسؤول سلامة معتمد لتطبيق ومتابعة أنظمة السلامة في المواقع وضمان الالتزام باللوائح ذات الصلة.',
      career_job5_req1: 'حصول على شهادة معتمدة في السلامة مثل NEBOSH أو ما يعادلها.',
      career_job5_req2: 'خبرة في إدارة السلامة في مشاريع البناء.',
      career_job5_req3: 'قدرة على إعداد التقارير والتحقيق في الحوادث.',

      // نموذج التقديم
      career_form_title: 'املأ النموذج التالي لإرسال طلب التوظيف',
      career_form_subtitle: 'يقوم فريق الموارد البشرية بمراجعة طلبك والتواصل معك في حال تطابق ملفك مع متطلباتنا.',
      career_form_name_label: 'الاسم الكامل',
      career_form_email_label: 'البريد الإلكتروني',
      career_form_phone_label: 'رقم الجوال',
      career_form_city_label: 'المدينة',
      career_form_city_select: 'اختر مدينتك',
      career_form_position_label: 'الوظيفة المتقدم لها',
      career_form_position_select: 'اختر الوظيفة',
      career_form_position_other: 'أخرى',
      career_form_experience_label: 'سنوات الخبرة',
      career_form_experience_select: 'اختر نطاق الخبرة',
      career_form_experience_0_2: '0–2 سنة',
      career_form_experience_3_5: '3–5 سنوات',
      career_form_experience_6_10: '6–10 سنوات',
      career_form_experience_10_plus: 'أكثر من 10 سنوات',
      career_form_message_label: 'معلومات إضافية',
      career_form_cv_label: 'إرفاق السيرة الذاتية (PDF/DOC)',
      career_form_privacy_text: 'أوافق على معالجة بياناتي الشخصية وفقاً لسياسة الخصوصية.',
      career_form_submit_btn: 'إرسال الطلب',

      // مزايا الموظفين
      career_benefits_title: 'نقدّر موظفينا ونوفر لهم مزايا شاملة',
      career_benefits_subtitle: 'انضم إلى شركة تستثمر في نموّك ورفاهيتك ونجاحك على المدى الطويل.',
      career_benefit1_title: 'تأمين طبي شامل',
      career_benefit1_text: 'تغطية طبية شاملة لك ولعائلتك.',
      career_benefit2_title: 'إجازات وتذاكر سنوية',
      career_benefit2_text: 'إجازات سنوية مجزية وتذاكر سفر سنوية.',
      career_benefit3_title: 'حوافز مرتبطة بالأداء',
      career_benefit3_text: 'حوافز ومكافآت سنوية بناءً على الأداء.',
      career_benefit4_title: 'دعم السكن',
      career_benefit4_text: 'دعم سكن أو بدل سكن شهري.',
      career_benefit5_title: 'بدل مواصلات',
      career_benefit5_text: 'مواصلات الشركة أو بدل مواصلات شهري.',
      career_benefit6_title: 'مكافأة نهاية الخدمة',
      career_benefit6_text: 'مكافأة نهاية الخدمة حسب نظام العمل السعودي.',

      career_why_title: "لماذا العمل مع البنِيات؟",
      career_why_subtitle: "انضم إلى فريق ملتزم بالتميز والابتكار",

      career_why_item1_title: "النمو المهني",
      career_why_item1_text:
        "مسارات واضحة للتطور الوظيفي وفرص للترقي داخل الشركة اعتمادًا على الأداء والالتزام.",

      career_why_item2_title: "التدريب والتطوير",
      career_why_item2_text:
        "برامج تطوير مهني مستمرة ودورات تدريبية لتعزيز مهاراتك ومعارفك.",

      career_why_item3_title: "مزايا مالية تنافسية",
      career_why_item3_text:
        "حزم رواتب ومزايا جذابة تقدّر مساهمتك وتكافئ أداءك.",

      career_why_item4_title: "فريق عمل متنوع",
      career_why_item4_text:
        "العمل مع محترفين موهوبين من خلفيات متنوعة في بيئة عمل تعاونية.",

      career_why_item5_title: "مشاريع كبرى",
      career_why_item5_text:
        "المشاركة في مشاريع إنشائية رائدة تسهم في تشكيل مستقبل المملكة.",

      career_why_item6_title: "توازن بين العمل والحياة",
      career_why_item6_text:
        "سياسات داعمة تساعدك على الحفاظ على توازن صحي بين عملك وحياتك الشخصية.",

      // About Page
      about_page_title: 'من نحن',
      about_page_subtitle: 'نبني مستقبل المملكة العربية السعودية منذ عام 1981',

      about_company_title: 'شركتنا',
      about_company_subtitle: 'نقود صناعة البناء بالابتكار والتميز',

      about_established_title: 'تأسست في عام 1981',
      about_established_p1: 'تأسست شركة البنايات النموذجية للمقاولات في عام 1402هـ (1981م) على يد الشيخ عيسى بن هلال الهلالي في مجال المقاولات العامة والإنشاءات والبناء. وفي عام 1998م تم إنشاء قسم التشغيل والصيانة والنظافة.',
      about_established_p2: 'تقدم البنايات مجموعة شاملة من الخدمات المتنوعة ذات الطابع المميز، مصممة لتلبية احتياجات السوق بمتطلباتها المختلفة ومواكبة احتياجات عملائنا في مختلف القطاعات الحكومية وقطاع الأعمال، بما يتماشى مع رؤية المملكة العربية السعودية 2030.',
      about_established_p3: 'تتميز شركتنا بطابعها الحديث والمبتكر والمتنوع. تم تصميم خدماتنا المتميزة بأعلى معايير الجودة والحرفية من قبل أيدٍ ماهرة وتخطيط من قبل مهندسين أكفاء، متبعين جودة العمل التي أصبحت مرادفة للبنايات وتميزنا عن الشركات الأخرى العاملة في هذا المجال.',
      about_btn_contact: 'تواصل معنا',

      about_vision_title: 'رؤيتنا',
      about_vision_text: 'تقديم أجود وأشمل الخدمات المهنية للمنشآت والمباني في مجال التشغيل والصيانة والنظافة والضيافة باستخدام أفضل وأمهر الكوادر البشرية المدربة والمحترفة في مجالها لضمان رضا العملاء وتلبية تطلعاتهم.',

      about_mission_title: 'رسالتنا',
      about_mission_text: 'الالتزام بتقديم خدماتنا المهنية وفق معايير الجودة العالمية التي تلبي رغبات عملائنا من القطاعين الحكومي والخاص وتحقق تطلعاتهم في رغبتنا ببناء شراكة استراتيجية.',

      about_goals_title: 'أهدافنا',
      about_goals_text: 'تلبية رغبات العملاء وتحقيق تطلعاتهم والحصول على ثقتهم المستدامة، مواكبة أحدث التطورات العالمية، استخدام أحدث الأنظمة في تقديم وتقييم الخدمات، والمساهمة في خلق بيئة نظيفة وآمنة من خلال استخدام مواد صديقة للبيئة.',

      about_distinguish_title: 'ما يميزنا',
      about_distinguish_subtitle: 'التزامنا بالتميز يميزنا عن غيرنا',

      about_distinguish_1_title: 'الموضوعية',
      about_distinguish_1_text: 'الدراسات والأبحاث المستمرة حول أفضل المنهجيات العملية واحتياجات سوق العمل، والسعي للتطوير وتقديم أفضل الخدمات.',

      about_distinguish_2_title: 'الشفافية',
      about_distinguish_2_text: 'إطلاع العميل على الأسعار الفعلية وإعلامه بالمواد المستخدمة في العمل.',

      about_distinguish_3_title: 'الجودة',
      about_distinguish_3_text: 'ضمان جودة خدماتنا وفق المعايير العالمية وضمن الإطار العملي المتفق عليه.',

      about_distinguish_4_title: 'التدريب المستمر',
      about_distinguish_4_text: 'إخضاع جميع كوادرنا للتدريب والتطوير المستمر.',

      about_distinguish_5_title: 'الالتزام',
      about_distinguish_5_text: 'البنايات ملتزمة بتنفيذ الاتفاقيات على أكمل وجه وتقديم أفضل ما لدينا في مجالاتنا المختلفة.',

      about_stat_1: 'سنوات من الخبرة',
      about_stat_2: 'مشروع مكتمل',
      about_stat_3: 'مكاتب في المملكة',
      about_stat_4: 'شهادات الأيزو',




      // Contact Form
      contact_form_title: 'أرسل لنا رسالة',
      contact_form_subtitle: 'املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن',
      contact_label_name: 'الاسم الكامل *',
      contact_placeholder_name: 'أدخل اسمك الكامل',
      contact_label_email: 'البريد الإلكتروني *',
      contact_label_phone: 'رقم الهاتف *',
      contact_label_city: 'المدينة *',
      contact_placeholder_city: 'اختر مدينتك',
      contact_label_service: 'الخدمة المطلوبة *',
      contact_placeholder_service: 'اختر الخدمة',
      contact_label_message: 'رسالتك *',
      contact_privacy_text: 'أوافق على',
      contact_privacy_link: 'سياسة الخصوصية',
      contact_and: 'و',
      contact_terms_link: 'الشروط والأحكام',
      contact_btn_send: 'إرسال الرسالة',


      // Contact Page
      contact_page_title: 'اتصل بنا',
      contact_page_subtitle: 'دعنا نناقش متطلبات مشروعك',

      // Contact Cards
      contact_card_phone_title: 'اتصل بنا',
      contact_card_phone_label: 'مجاني',
      contact_card_mobile_title: 'الجوال',
      contact_card_mobile_label: 'دعم على مدار الساعة',
      contact_card_email_title: 'راسلنا',
      contact_card_email_label: 'استفسارات عامة',
      contact_card_whatsapp_title: 'واتساب',
      contact_card_whatsapp_label: 'تحدث معنا',
      contact_card_whatsapp_btn: 'ابدأ المحادثة',

      // Contact Form
      contact_form_title: 'أرسل لنا رسالة',
      contact_form_subtitle: 'املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن',
      contact_form_name: 'الاسم الكامل *',
      contact_form_name_placeholder: 'أدخل اسمك الكامل',
      contact_form_email: 'البريد الإلكتروني *',
      contact_form_phone: 'رقم الهاتف *',
      contact_form_city: 'المدينة *',
      contact_form_city_select: 'اختر مدينتك',
      contact_form_city_jeddah: 'جدة',
      contact_form_city_riyadh: 'الرياض',
      contact_form_city_khamis: 'خميس مشيط',
      contact_form_city_dammam: 'الدمام',
      contact_form_city_madinah: 'المدينة المنورة',
      contact_form_city_tabuk: 'تبوك',
      contact_form_city_qassim: 'القصيم',
      contact_form_city_other: 'أخرى',

      contact_form_service: 'الخدمة المطلوبة *',
      contact_form_service_select: 'اختر الخدمة',
      contact_form_service_building: 'البناء والتشييد',
      contact_form_service_infrastructure: 'تطوير البنية التحتية',
      contact_form_service_electro: 'الأنظمة الكهروميكانيكية',
      contact_form_service_energy: 'حلول الطاقة',
      contact_form_service_operations: 'التشغيل والصيانة',
      contact_form_service_cleaning: 'خدمات النظافة',
      contact_form_service_it: 'تقنية المعلومات',
      contact_form_service_realestate: 'العقارات',
      contact_form_service_training: 'التدريب التعاوني',
      contact_form_service_other: 'أخرى',

      contact_form_message: 'رسالتك *',
      contact_form_message_placeholder: 'أخبرنا عن متطلبات مشروعك...',
      contact_form_privacy_1: 'أوافق على',
      contact_form_privacy_policy: 'سياسة الخصوصية',
      contact_form_privacy_2: 'و',
      contact_form_privacy_terms: 'الشروط والأحكام',
      contact_form_submit: 'إرسال الرسالة',

      // Office Info
      contact_office_title: 'قم بزيارة مكتبنا الرئيسي',
      contact_office_address_label: 'العنوان',
      contact_office_hours_label: 'ساعات العمل',
      contact_office_hours: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
      contact_office_website_label: 'الموقع الإلكتروني',
      contact_office_btn: 'عرض جميع المكاتب',


      // Cities
      city_jeddah: 'جدة',
      city_riyadh: 'الرياض',
      city_khamis: 'خميس مشيط',
      city_dammam: 'الدمام',
      city_madinah: 'المدينة المنورة',
      city_tabuk: 'تبوك',
      city_qassim: 'القصيم',
      city_other: 'أخرى',

      // Services (for dropdown)
      service_building: 'البناء والإنشاءات',
      service_infrastructure: 'البنية التحتية',
      service_electromechanical: 'الأعمال الكهروميكانيكية',
      service_energy: 'حلول الطاقة',
      service_operations: 'التشغيل والصيانة',
      service_cleaning: 'خدمات النظافة',
      service_it: 'تقنية المعلومات',
      service_realestate: 'العقارات',
      service_training: 'التدريب التعاوني',
      service_other: 'أخرى',

      // Office Info
      contact_office_title: 'زوروا مكتبنا الرئيسي',
      contact_address_title: 'العنوان',
      contact_hours_title: 'ساعات العمل',
      contact_hours_text: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
      contact_website_title: 'الموقع الإلكتروني',
      contact_view_offices: 'عرض جميع المكاتب',
      contact_view_map: 'عرض خريطة أكبر',

      // Footer
      footer_about_text: 'شركة البنايات النموذجية للمقاولات تقدم التميز في خدمات البناء والمقاولات منذ عام 1981. نحن ملتزمون ببناء مستقبل المملكة العربية السعودية.',
      footer_quick_links_title: 'روابط سريعة',
      footer_link_about: 'من نحن',
      footer_link_services: 'خدماتنا',
      footer_link_projects: 'المشاريع',
      footer_link_news: 'الأخبار والمقالات',
      footer_link_training: 'التدريب التعاوني',
      footer_link_careers: 'الوظائف',
      footer_link_vendors: 'تسجيل الموردين',
      footer_link_contact: 'اتصل بنا',

      footer_services_title: 'خدماتنا',
      footer_service_building: 'البناء والإنشاءات',
      footer_service_infra: 'البنية التحتية',
      footer_service_electro: 'الأعمال الكهروميكانيكية',
      footer_service_energy: 'حلول الطاقة',
      footer_service_ops: 'التشغيل والصيانة',
      footer_service_clean: 'خدمات النظافة',

      footer_contact_title: 'اتصل بنا',
      footer_copy: '© 2025 شركة البنايات النموذجية للمقاولات. جميع الحقوق محفوظة.',
      footer_privacy: 'سياسة الخصوصية',
      footer_terms: 'الشروط والأحكام',
      // Privacy Policy Page
      privacy_page_title: 'سياسة الخصوصية',
      privacy_last_updated: 'آخر تحديث:',

      // Introduction
      privacy_intro_title: 'المقدمة',
      privacy_intro_text: 'تلتزم شركة البنايات النموذجية للمقاولات ("نحن" أو "الشركة") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني أو استخدام خدماتنا.',

      // Information We Collect
      privacy_collect_title: 'المعلومات التي نجمعها',
      privacy_collect_personal_title: 'المعلومات الشخصية',
      privacy_collect_personal_text: 'قد نجمع معلومات شخصية تقدمها طوعًا عندما تقوم بـ:',
      privacy_collect_item1: 'التواصل معنا من خلال نماذج الموقع',
      privacy_collect_item2: 'الاشتراك في النشرة الإخبارية',
      privacy_collect_item3: 'طلب عرض أسعار أو استشارة',
      privacy_collect_item4: 'التقديم للتوظيف',
      privacy_collect_auto_title: 'المعلومات المجمعة تلقائيًا',
      privacy_collect_auto_text: 'عند زيارتك لموقعنا، قد نجمع تلقائيًا معلومات معينة عن جهازك، بما في ذلك معلومات عن متصفح الويب الخاص بك وعنوان IP والمنطقة الزمنية وبعض ملفات تعريف الارتباط المثبتة على جهازك.',

      // How We Use Your Information
      privacy_use_title: 'كيف نستخدم معلوماتك',
      privacy_use_text: 'نستخدم المعلومات التي نجمعها بطرق مختلفة، بما في ذلك:',
      privacy_use_item1: 'تقديم خدماتنا وتشغيلها وصيانتها',
      privacy_use_item2: 'تحسين خدماتنا وتخصيصها وتوسيعها',
      privacy_use_item3: 'فهم وتحليل كيفية استخدامك لموقعنا',
      privacy_use_item4: 'التواصل معك بشأن الخدمات والتحديثات والعروض الترويجية',
      privacy_use_item5: 'معالجة معاملاتك وإرسال المعلومات ذات الصلة',
      privacy_use_item6: 'اكتشاف الاحتيال ومنعه',

      // Information Sharing
      privacy_sharing_title: 'مشاركة المعلومات والإفصاح عنها',
      privacy_sharing_text: 'قد نشارك معلوماتك في الحالات التالية:',
      privacy_sharing_item1_title: 'مع مزودي الخدمات:',
      privacy_sharing_item1_text: 'قد نشارك المعلومات مع موردين خارجيين يقدمون خدمات لنا',
      privacy_sharing_item2_title: 'لأغراض قانونية:',
      privacy_sharing_item2_text: 'قد نفصح عن المعلومات إذا كان ذلك مطلوبًا بموجب القانون أو استجابة لطلبات قانونية',
      privacy_sharing_item3_title: 'بموافقتك:',
      privacy_sharing_item3_text: 'قد نشارك المعلومات بموافقتك الصريحة',

      // Data Security
      privacy_security_title: 'أمن البيانات',
      privacy_security_text: 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة مصممة لحماية أي معلومات شخصية نعالجها. ومع ذلك، يرجى ملاحظة أنه لا توجد طريقة نقل أو تخزين إلكتروني آمنة بنسبة 100٪، ولا يمكننا ضمان الأمان المطلق.',

      // Your Rights
      privacy_rights_title: 'حقوق الخصوصية الخاصة بك',
      privacy_rights_text: 'اعتمادًا على موقعك، قد يكون لديك الحقوق التالية:',
      privacy_rights_item1: 'الوصول إلى بياناتك الشخصية',
      privacy_rights_item2: 'تصحيح البيانات غير الدقيقة',
      privacy_rights_item3: 'طلب حذف بياناتك',
      privacy_rights_item4: 'الاعتراض على معالجة بياناتك',
      privacy_rights_item5: 'طلب تقييد المعالجة',
      privacy_rights_item6: 'إمكانية نقل البيانات',

      // Cookies
      privacy_cookies_title: 'ملفات تعريف الارتباط وتقنيات التتبع',
      privacy_cookies_text: 'نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على موقعنا وتخزين معلومات معينة. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو الإشارة إلى وقت إرسال ملف تعريف الارتباط.',

      // Updates
      privacy_updates_title: 'تحديثات هذه السياسة',
      privacy_updates_text: 'قد نحدث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث".',

      // Contact
      privacy_contact_title: 'اتصل بنا',
      privacy_contact_text: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:',
      privacy_contact_email_label: 'البريد الإلكتروني:',
      privacy_contact_phone_label: 'الهاتف:',
      privacy_contact_address_label: 'العنوان:',

      // Terms & Conditions Page
      terms_page_title: 'الشروط والأحكام',
      terms_last_updated: 'آخر تحديث:',

      // Introduction
      terms_intro_title: 'الموافقة على الشروط',
      terms_intro_text: 'تحكم هذه الشروط والأحكام ("الشروط") وصولك إلى موقع شركة البنايات النموذجية للمقاولات واستخدامك له وخدماتها. بالدخول إلى موقعنا أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يجوز لك الوصول إلى خدماتنا.',

      // Use of Website
      terms_use_title: 'استخدام الموقع',
      terms_use_text: 'يجوز لك استخدام موقعنا فقط للأغراض القانونية ووفقًا لهذه الشروط. أنت توافق على عدم:',
      terms_use_item1: 'استخدام الموقع بأي طريقة تنتهك أي قانون أو لائحة معمول بها',
      terms_use_item2: 'الانخراط في أي سلوك يقيد أو يمنع استخدام أي شخص للموقع',
      terms_use_item3: 'استخدام أي نظام آلي للوصول إلى الموقع',
      terms_use_item4: 'محاولة الوصول غير المصرح به إلى أي جزء من الموقع',
      terms_use_item5: 'التدخل في الموقع أو الخوادم أو تعطيلها',

      // Intellectual Property
      terms_ip_title: 'حقوق الملكية الفكرية',
      terms_ip_text1: 'الموقع ومحتوياته وميزاته ووظائفه بالكامل مملوكة لشركة البنايات النموذجية للمقاولات ومحمية بموجب قوانين حقوق النشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية وقوانين الملكية الفكرية الأخرى الدولية.',
      terms_ip_text2: 'لا يجوز لك نسخ أو توزيع أو تعديل أو إنشاء أعمال مشتقة أو عرض علني أو إعادة نشر أو تنزيل أو تخزين أو نقل أي من المواد الموجودة على موقعنا دون موافقتنا الخطية المسبقة.',

      // Services
      terms_services_title: 'الخدمات وعروض الأسعار',
      terms_services_text: 'جميع أوصاف الخدمات والمواصفات وعروض الأسعار المقدمة من خلال موقعنا تخضع لـ:',
      terms_services_item1: 'التحقق والتأكيد من قبل فريقنا',
      terms_services_item2: 'توافر الموارد والمواد',
      terms_services_item3: 'فحص وتقييم الموقع',
      terms_services_item4: 'تنفيذ عقود رسمية مكتوبة',

      // Liability
      terms_liability_title: 'تحديد المسؤولية',
      terms_liability_text: 'إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل شركة البنايات النموذجية للمقاولات المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء تم تكبدها بشكل مباشر أو غير مباشر، أو أي فقدان للبيانات أو الاستخدام أو حسن النية أو الخسائر غير الملموسة الأخرى الناتجة عن وصولك إلى الموقع أو استخدامه أو عدم قدرتك على الوصول إليه أو استخدام الخدمات.',

      // Warranties
      terms_warranties_title: 'الضمانات وإخلاء المسؤولية',
      terms_warranties_text: 'بينما نسعى جاهدين لتقديم معلومات دقيقة ومحدثة، يتم توفير الموقع والخدمات على أساس "كما هي" و"حسب التوفر". نحن لا نقدم أي ضمانات، صريحة أو ضمنية، فيما يتعلق بـ:',
      terms_warranties_item1: 'دقة أو موثوقية أو اكتمال المحتوى',
      terms_warranties_item2: 'التشغيل غير المنقطع أو الخالي من الأخطاء للموقع',
      terms_warranties_item3: 'أمن نقل البيانات',
      terms_warranties_item4: 'النتائج التي قد يتم الحصول عليها من استخدام الموقع',

      // Governing Law
      terms_law_title: 'القانون الحاكم والاختصاص القضائي',
      terms_law_text: 'تخضع هذه الشروط وتفسر وفقًا لقوانين المملكة العربية السعودية. أي نزاعات تنشأ عن أو فيما يتعلق بهذه الشروط تخضع للاختصاص القضائي الحصري لمحاكم جدة، المملكة العربية السعودية.',

      // Changes
      terms_changes_title: 'التغييرات على الشروط',
      terms_changes_text: 'نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت المراجعة جوهرية، فسنقدم إشعارًا قبل 30 يومًا على الأقل قبل سريان أي شروط جديدة. يعني استمرارك في استخدام الموقع بعد نشر الشروط المعدلة أنك تقبل التغييرات وتوافق عليها.',

      // Contact
      terms_contact_title: 'معلومات الاتصال',
      terms_contact_text: 'إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا:',
      terms_contact_email_label: 'البريد الإلكتروني:',
      terms_contact_phone_label: 'الهاتف:',
      terms_contact_address_label: 'العنوان:',



      // Vendor Page
      vendor_page_title: 'تسجيل الموردين',
      vendor_page_subtitle: 'شارك البنايات لبناء التميز معاً',

      // Why Partner With Us
      vendor_why_title: 'لماذا تشارك البنايات؟',
      vendor_why_subtitle: 'مزايا الانضمام إلى شبكتنا الموثوقة',

      vendor_why_item1_title: 'الاستقرار المالي',
      vendor_why_item1_text: 'ضمان المدفوعات والموثوقية المالية المدعومة بعقود من النجاح.',

      vendor_why_item2_title: 'شراكة طويلة الأمد',
      vendor_why_item2_text: 'بناء علاقات دائمة قائمة على الثقة والشفافية والنمو المتبادل.',

      vendor_why_item3_title: 'مشاريع كبرى',
      vendor_why_item3_text: 'فرصة المشاركة في مشاريع بارزة في جميع أنحاء المملكة.',

      vendor_why_item4_title: 'إجراءات شفافة',
      vendor_why_item4_text: 'عمليات توريد واضحة وشفافة وتقييم عادل.',

      vendor_form_title: 'سجل كمورد',
      vendor_form_subtitle: 'انضم إلى شبكة موردينا ومقاولينا المعتمدين',

      vendor_form_company_info: 'معلومات الشركة',
      vendor_form_company_name: 'اسم الشركة *',
      vendor_form_cr_number: 'رقم السجل التجاري *',
      vendor_form_contact_person: 'الشخص المسؤول *',
      vendor_form_email: 'البريد الإلكتروني *',
      vendor_form_phone: 'رقم الهاتف *',

      vendor_form_category: 'فئة العمل *',
      vendor_form_select: 'اختر الفئة',

      vendor_form_details: 'تفاصيل إضافية',
      vendor_form_description: 'وصف الشركة / نطاق العمل',
      vendor_form_profile: 'تحميل ملف تعريفي للشركة (PDF - Max 10MB)',

      vendor_form_privacy_1: 'أوافق على',
      vendor_form_privacy_policy: 'سياسة الخصوصية',
      vendor_form_privacy_2: 'وأقر بأن المعلومات المقدمة دقيقة.',

      vendor_form_submit: 'إرسال التسجيل',
    }
  };

  // ===================================
  // GET INITIAL LANGUAGE (UPDATED)
  // ===================================

  function getInitialLanguage() {
    // 1. الأولوية للرابط: هل فيه ?lang=ar ؟
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang === 'ar') return 'ar';
    if (paramLang === 'en') return 'en';

    // 2. فحص المسار (لو الموقع مرفوع في فولدر اسمه /ar/)
    const path = window.location.pathname;
    if (path === '/ar' || path.startsWith('/ar/') || path.includes('/ar')) {
      return 'ar';
    }

    // 3. آخر حاجة: الذاكرة (Local Storage) أو الإنجليزي
    return localStorage.getItem('language') || 'en';
  }

  // ===================================
  // SET LANGUAGE & UPDATE UI
  // ===================================

  function setLanguage(lang) {
    localStorage.setItem('language', lang);

    // 1) Update HTML attributes
    const isAr = lang === 'ar';
    const html = document.documentElement;
    const body = document.body;

    html.lang = lang;
    html.dir = isAr ? 'rtl' : 'ltr';
    body.dir = isAr ? 'rtl' : 'ltr';

    // 2) RTL classes
    if (isAr) {
      body.classList.add('rtl');
      html.classList.add('rtl');
    } else {
      body.classList.remove('rtl');
      html.classList.remove('rtl');
    }

    // 3) Update font family
    body.style.fontFamily = isAr ? "'Tajawal', sans-serif" : "'Roboto', sans-serif";

    // 4) Update active language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 5) Update page content & SEO
    updatePageContent(lang);

    console.log('Language switched to: ' + lang);
  }


  // ===================================
  // UPDATE PAGE CONTENT & SEO TAGS
  // ===================================

  function updatePageContent(lang) {
    const t = translations[lang];

    // --- NEW: Update SEO Title & Meta Description ---
    if (t.page_title) {
      document.title = t.page_title;
    }
    if (t.meta_description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", t.meta_description);
      }
    }

    // --- Update Text Content ---
    document.querySelectorAll('.i18n[data-key]').forEach(element => {
      const key = element.dataset.key;
      if (t[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = t[key];
        } else if (element.tagName === 'OPTION') {
          element.textContent = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });

    // Update data-translate (backward compatibility)
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.dataset.translate;
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.dataset.translatePlaceholder;
      if (t[key]) {
        element.placeholder = t[key];
      }
    });

    // Update aria-labels
    document.querySelectorAll('[data-translate-aria]').forEach(element => {
      const key = element.dataset.translateAria;
      if (t[key]) {
        element.setAttribute('aria-label', t[key]);
      }
    });
  }

  // ===================================
  // LANGUAGE SWITCHER BUTTONS (WITH URL UPDATE)
  // ===================================

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Stop default link behavior

      const lang = this.dataset.lang;

      // Change URL without reloading page
      if (lang === 'ar') {
        window.history.pushState({ path: '/ar' }, '', '/ar');
      } else {
        window.history.pushState({ path: '/' }, '', '/');
      }

      setLanguage(lang);

      // Smooth transition
      document.body.style.opacity = '0.95';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    });
  });

  // ===================================
  // HANDLE BROWSER BACK/FORWARD BUTTONS
  // ===================================
  window.addEventListener('popstate', function () {
    const lang = getInitialLanguage();
    setLanguage(lang);
  });

  // ===================================
  // INITIALIZE LANGUAGE ON PAGE LOAD
  // ===================================

  const currentLang = getInitialLanguage();
  setLanguage(currentLang);

  // ===================================
  // EXPOSE GLOBALLY
  // ===================================

  window.setLanguage = setLanguage;
  window.getCurrentLanguage = getInitialLanguage;

});