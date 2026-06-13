const translations = {

  es: {
    // ── Título de página
    'page.index.title':     'MedTech Studio — Software Médico Especializado',
    'page.portfolio.title': 'Portafolio — MedTech Studio',
    'page.contact.title':   'Contacto — MedTech Studio',

    // ── Nav
    'nav.home':      'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.contact':   'Contacto',
    'nav.cta':       'Agendar una Llamada',

    // ── Hero
    'hero.eyebrow': 'Software Médico Especializado',
    'hero.title':   'Construimos Software<br>en el que los <em>Médicos Confían</em>',
    'hero.sub':     'Sistemas de control de calidad, análisis de dosis, protección radiológica y herramientas de imagen médica — desarrollados por ingenieros que entienden tanto la tecnología como la física médica.',
    'hero.btn1':    'Ver Proyectos',
    'hero.btn2':    'Agendar una Llamada',

    // ── Stats
    'stats.projects.label':     'Proyectos Entregados',
    'stats.countries.label':    'Países',
    'stats.experience.label':   'Años de Experiencia',
    'stats.satisfaction.label': 'Satisfacción del Cliente',

    // ── Expertise
    'expertise.label': 'Qué Hacemos',
    'expertise.title': 'Software Clínico de Punta a Punta',
    'expertise.sub':   'Desde sistemas de QA hasta análisis continuo de dosis, cubrimos toda la pila tecnológica del software médico especializado.',
    'exp1.title': 'Control de Calidad en Imagen Médica',
    'exp1.desc':  'Plataformas de QA que automatizan cálculos de prueba, centralizan flujos de trabajo por equipo y generan reportes firmados con un solo clic.',
    'exp2.title': 'Análisis de Dosis y DRL',
    'exp2.desc':  'Conexión directa a PACS y bases de datos locales para extracción continua de parámetros de dosis y optimización basada en los estándares DRL internacionales.',
    'exp3.title': 'Protección Radiológica',
    'exp3.desc':  'Gestión integral de equipos, dosimetría del personal ocupacionalmente expuesto y alertas automáticas de vencimiento de controles de calidad.',
    'exp4.title': 'Integración DICOM y PACS',
    'exp4.desc':  'Herramientas que se conectan directamente a su infraestructura DICOM existente para extraer, analizar y visualizar datos de estudios imagenológicos.',
    'exp5.title': 'Visión por Computadora Médica',
    'exp5.desc':  'Algoritmos asistidos de análisis de imagen para medición automática de unidades Hounsfield, con posibilidad de corrección manual por el usuario.',
    'exp6.title': 'Aplicaciones Clínicas Web',
    'exp6.desc':  'Aplicaciones web a medida para flujos de trabajo clínicos: gestión de formularios, control de acceso por rol, registros inmutables y reportes automáticos.',

    // ── Projects (index preview)
    'projects.label':   'Nuestro Trabajo',
    'projects.title':   'Proyectos Destacados',
    'projects.viewAll': 'Ver Todos los Proyectos →',

    // ── Project 1
    'p1.num':   'PROYECTO 01',
    'p1.title': 'Sistema Centralizado de QA para Radiodiagnóstico y Medicina Nuclear',
    'p1.desc':  'Plataforma que centraliza el flujo de trabajo de control de calidad de todos los equipos de la institución, considerando sus características propias, fantomas y fuentes disponibles. Calcula automáticamente los resultados de prueba y facilita el análisis de imagen mediante visión por computadora asistida — midiendo unidades Hounsfield automáticamente con posibilidad de corrección manual. Los resultados se almacenan localmente y se generan reportes firmados con un solo clic.',
    'p1.tags':  'QA Automatizado,Visión por Computadora,Unidades Hounsfield,Reportes Firmados,Medicina Nuclear',

    // ── Project 2
    'p2.num':   'PROYECTO 02',
    'p2.title': 'Análisis Continuo de Niveles de Referencia de Dosis (DRL)',
    'p2.desc':  'Herramienta que se conecta directamente al PACS o bases de datos locales de la institución y recorre la totalidad de los estudios imagenológicos para extraer parámetros de dosis de forma continua. Soporta filtrado multi-variable (fecha, sexo, edad, tipo de estudio, fuerza de compresión, grosor de mama) y calcula la dosis automáticamente cuando el equipo no la reporta en el DICOM mediante curvas de trabajo. Permite a la institución adaptarse a los estándares DRL internacionales o generar sus propios parámetros de optimización según su tipo de paciente.',
    'p2.tags':  'DRL,PACS,DICOM,Análisis de Dosis,Mamografía,Optimización',

    // ── Project 3
    'p3.num':   'PROYECTO 03',
    'p3.title': 'Sistema de Gestión de Registros y Firmas para Instituciones Radiológicas',
    'p3.desc':  'Aplicación que centraliza todos los formularios utilizados para el registro de actividades diarias en la institución. Los tecnólogos inician sesión para completar formularios, vinculando cada registro directamente a su documentación, contratos y firma digital. El oficial de protección radiológica puede filtrar por fecha y usuario para saber quién hizo qué y cuándo. Los registros confirmados son inmutables: no pueden editarse ni eliminarse por los tecnólogos.',
    'p3.tags':  'Gestión de Registros,Firma Digital,Control de Acceso,Protección Radiológica,Auditoría',

    // ── Project 4
    'p4.num':   'PROYECTO 04',
    'p4.title': 'Plataforma Integral de Gestión de Protección Radiológica',
    'p4.desc':  'Sistema que centraliza la gestión de equipos y personal ocupacionalmente expuesto a radiación. Registra equipos por área, fabricante y tipo con historial de controles de calidad y alertas automáticas por correo antes del vencimiento de un QA. Gestiona la dosimetría del personal con convención de colores por nivel de riesgo radiológico. En red local, todo el personal puede consultar su historial dosimétrico personal escaneando un código QR.',
    'p4.tags':  'Dosimetría,Protección Radiológica,QR,Alertas Automáticas,Gestión de Equipos',

    // ── Project 5
    'p5.num':   'PROYECTO 05',
    'p5.title': 'Calculadora de Dosis Efectiva para Pacientes Pediátricos',
    'p5.desc':  'Herramienta de cálculo que convierte el Producto Dosis-Longitud (DLP) a dosis efectiva en pacientes pediátricos utilizando tablas de conversión internacionales. Incorpora interpolación para pacientes cuya edad cae entre los valores exactos de la tabla, asumiendo linealidad entre puntos. Soporta la opción de modelado no lineal o cambio a regresión según el comportamiento esperado de las curvas.',
    'p5.tags':  'Dosis Efectiva,DLP,Pacientes Pediátricos,Interpolación,Tablas de Conversión',

    // ── Testimonials
    'testimonials.label': 'Opiniones de Clientes',
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    't1.quote': '"Su profundo conocimiento tanto del dominio médico como de la tecnología marcó toda la diferencia. La plataforma superó nuestras expectativas en todos los aspectos."',
    't1.name':  'Dr. [Nombre del Cliente]',
    't1.role':  'Director Médico — [Institución]',
    't2.quote': '"Entrega rápida, comunicación excelente y resultados que mejoraron genuinamente nuestro flujo de trabajo diagnóstico. No dudaríamos en volver a trabajar con ellos."',
    't2.name':  'Dr. [Nombre del Cliente]',
    't2.role':  'Jefe de Radiodiagnóstico — [Clínica]',
    't3.quote': '"El sistema de QA automatizado redujo el tiempo de nuestros controles de calidad a la mitad y eliminó los errores de cálculo manual. Un cambio real en nuestra operación."',
    't3.name':  '[Nombre del Cliente]',
    't3.role':  'Oficial de Protección Radiológica — [Centro]',

    // ── CTA
    'cta.label': 'Trabajemos Juntos',
    'cta.title': '¿Listo para Construir tu Próxima Herramienta Médica?',
    'cta.sub':   'Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas para agendar una llamada de descubrimiento.',
    'cta.btn':   'Agendar una Llamada Gratis',

    // ── Footer
    'footer.copy': '© 2025 MedTech Studio. Todos los derechos reservados.',

    // ── Portfolio page
    'port.label': 'Nuestro Trabajo',
    'port.title': 'Portafolio',
    'port.sub':   'Proyectos que hemos construido para nuestros clientes. Podemos construir algo similar para ti.',

    // ── Contact page
    'cont.label':        'Escríbenos',
    'cont.title':        'Hablemos de tu Proyecto',
    'cont.sub':          'Completa el formulario y te respondemos en menos de 24 horas para agendar una llamada.',
    'cont.info.title':   'Nos encantaría escuchar sobre tu proyecto',
    'cont.info.desc':    'Ya sea que necesites un sistema de control de calidad, una plataforma de análisis de dosis, una herramienta de protección radiológica o cualquier software clínico a medida — estamos listos para ayudar. Cuéntanos qué estás construyendo.',
    'cont.email.label':  'Correo',
    'cont.wa.label':     'WhatsApp',
    'cont.loc.label':    'Ubicación',
    'cont.loc.value':    'Medellín, Colombia — Trabajamos Remotamente en Todo el Mundo',
    'cont.f.name':       'Nombre Completo',
    'cont.f.name.ph':    'Dr. Juan García',
    'cont.f.email':      'Correo Electrónico',
    'cont.f.email.ph':   'usted@clinica.com',
    'cont.f.type':       'Tipo de Proyecto',
    'cont.f.type.ph':    'Selecciona un tipo de proyecto...',
    'cont.f.opt1':       'Sistema de Control de Calidad (QA)',
    'cont.f.opt2':       'Análisis de Dosis / DRL',
    'cont.f.opt3':       'Gestión de Protección Radiológica',
    'cont.f.opt4':       'Visor DICOM / Plataforma de Imagen',
    'cont.f.opt5':       'Aplicación Clínica a Medida',
    'cont.f.opt6':       'Otro',
    'cont.f.msg':        'Cuéntanos sobre tu proyecto',
    'cont.f.msg.ph':     'Describe lo que necesitas, tu cronograma y cualquier requerimiento técnico...',
    'cont.f.btn':        'Enviar Mensaje',
    'cont.f.sent':       'Mensaje Enviado ✓',
  },

  en: {
    // ── Page titles
    'page.index.title':     'MedTech Studio — Specialized Medical Software',
    'page.portfolio.title': 'Portfolio — MedTech Studio',
    'page.contact.title':   'Contact — MedTech Studio',

    // ── Nav
    'nav.home':      'Home',
    'nav.portfolio': 'Portfolio',
    'nav.contact':   'Contact',
    'nav.cta':       'Book a Call',

    // ── Hero
    'hero.eyebrow': 'Specialized Medical Software',
    'hero.title':   'We Build Software<br><em>Clinicians Trust</em>',
    'hero.sub':     'Quality assurance systems, dose analysis tools, radiological protection platforms, and medical imaging software — developed by engineers who understand both the technology and the medical physics.',
    'hero.btn1':    'See Our Work',
    'hero.btn2':    'Book a Call',

    // ── Stats
    'stats.projects.label':     'Projects Delivered',
    'stats.countries.label':    'Countries',
    'stats.experience.label':   'Years of Experience',
    'stats.satisfaction.label': 'Client Satisfaction',

    // ── Expertise
    'expertise.label': 'What We Do',
    'expertise.title': 'End-to-End Clinical Software',
    'expertise.sub':   'From QA systems to continuous dose analysis, we cover the full stack of specialized medical software.',
    'exp1.title': 'Medical Imaging Quality Assurance',
    'exp1.desc':  'QA platforms that automate test calculations, centralize per-equipment workflows, and generate signed reports with a single click.',
    'exp2.title': 'Dose Analysis & DRL Optimization',
    'exp2.desc':  'Direct PACS and local database integration for continuous dose parameter extraction and optimization against international DRL standards.',
    'exp3.title': 'Radiological Protection Management',
    'exp3.desc':  'Comprehensive management of equipment, occupationally-exposed personnel dosimetry, and automated QA expiration alerts.',
    'exp4.title': 'DICOM & PACS Integration',
    'exp4.desc':  'Tools that connect directly to your existing DICOM infrastructure to extract, analyze, and display imaging study data.',
    'exp5.title': 'Medical Computer Vision',
    'exp5.desc':  'Assisted image analysis algorithms for automatic Hounsfield unit measurement with manual user correction capability.',
    'exp6.title': 'Custom Clinical Web Apps',
    'exp6.desc':  'Tailor-made web applications for clinical workflows: form management, role-based access control, immutable records, and automated reporting.',

    // ── Projects
    'projects.label':   'Our Work',
    'projects.title':   'Featured Projects',
    'projects.viewAll': 'View All Projects →',

    // ── Project 1
    'p1.num':   'PROJECT 01',
    'p1.title': 'Centralized QA System for Radiodiagnostics and Nuclear Medicine',
    'p1.desc':  'A platform that centralizes the quality assurance workflow for all imaging equipment in the institution, accounting for each device\'s specific characteristics, available phantoms, and radiation sources. Automatically calculates test results and facilitates image analysis through computer-vision assistance — measuring Hounsfield units automatically with manual correction capability. All results are stored locally and signed reports can be generated with a single click.',
    'p1.tags':  'Automated QA,Computer Vision,Hounsfield Units,Signed Reports,Nuclear Medicine',

    // ── Project 2
    'p2.num':   'PROJECT 02',
    'p2.title': 'Continuous Diagnostic Reference Level (DRL) Analysis',
    'p2.desc':  'A tool that connects directly to the institution\'s PACS or local databases and traverses all imaging studies to extract dose parameters on a continuous basis. Supports multi-variable filtering (date, sex, age, study type, compression force, breast thickness) and automatically calculates dose when the equipment does not include it in the DICOM header — using equipment work curves. Enables institutions to align with international DRL standards or generate custom optimization parameters based on their patient population.',
    'p2.tags':  'DRL,PACS,DICOM,Dose Analysis,Mammography,Optimization',

    // ── Project 3
    'p3.num':   'PROJECT 03',
    'p3.title': 'Record and Signature Management System for Radiological Institutions',
    'p3.desc':  'An application that centralizes all forms used for daily activity records in the institution. Technologists log in to fill out forms, automatically linking each record to their documentation, contracts, and digital signature. The radiation protection officer can filter by date and user to see who did what and when. Confirmed records are immutable — they cannot be edited or deleted by technologists.',
    'p3.tags':  'Record Management,Digital Signature,Access Control,Radiological Protection,Audit',

    // ── Project 4
    'p4.num':   'PROJECT 04',
    'p4.title': 'Comprehensive Radiological Protection Management Platform',
    'p4.desc':  'A system that centralizes the management of radiation-generating equipment and occupationally-exposed personnel. Registers equipment by area, manufacturer, and type with full QA history and automated email alerts before QA expiration. Manages personnel dosimetry with a color-coded risk level convention. When deployed on a local network, all staff can access their personal dosimetry history by scanning a QR code.',
    'p4.tags':  'Dosimetry,Radiological Protection,QR Code,Automated Alerts,Equipment Management',

    // ── Project 5
    'p5.num':   'PROJECT 05',
    'p5.title': 'Effective Dose Calculator for Pediatric Patients',
    'p5.desc':  'A calculation tool that converts Dose-Length Product (DLP) to effective dose in pediatric patients using international conversion tables. Incorporates interpolation for patients whose age falls between the exact values in the table, assuming linearity between points. Supports non-linear modeling or switching to regression depending on the expected behavior of the dose curves.',
    'p5.tags':  'Effective Dose,DLP,Pediatric Patients,Interpolation,Conversion Tables',

    // ── Testimonials
    'testimonials.label': 'Client Feedback',
    'testimonials.title': 'What Our Clients Say',
    't1.quote': '"Their deep understanding of both the medical domain and the technology side made all the difference. The platform exceeded our expectations in every way."',
    't1.name':  'Dr. [Client Name]',
    't1.role':  'Medical Director — [Institution]',
    't2.quote': '"Fast delivery, excellent communication, and results that genuinely improved our diagnostic workflow. We would not hesitate to work with them again."',
    't2.name':  'Dr. [Client Name]',
    't2.role':  'Head of Radiodiagnostics — [Clinic]',
    't3.quote': '"The automated QA system cut our quality control time in half and eliminated manual calculation errors. A real operational change for our department."',
    't3.name':  '[Client Name]',
    't3.role':  'Radiation Protection Officer — [Center]',

    // ── CTA
    'cta.label': 'Let\'s Work Together',
    'cta.title': 'Ready to Build Your Next Medical Tool?',
    'cta.sub':   'Tell us about your project and we\'ll get back to you within 24 hours to schedule a discovery call.',
    'cta.btn':   'Book a Free Call',

    // ── Footer
    'footer.copy': '© 2025 MedTech Studio. All rights reserved.',

    // ── Portfolio page
    'port.label': 'Our Work',
    'port.title': 'Portfolio',
    'port.sub':   'Projects we\'ve built for our clients. We can build similar things for you.',

    // ── Contact page
    'cont.label':        'Get in Touch',
    'cont.title':        'Let\'s Discuss Your Project',
    'cont.sub':          'Fill out the form and we\'ll get back to you within 24 hours to schedule a call.',
    'cont.info.title':   'We\'d love to hear about your project',
    'cont.info.desc':    'Whether you need a QA system, a dose analysis platform, a radiological protection tool, or any custom clinical software — we\'re ready to help. Tell us what you\'re building.',
    'cont.email.label':  'Email',
    'cont.wa.label':     'WhatsApp',
    'cont.loc.label':    'Location',
    'cont.loc.value':    'Medellín, Colombia — Working Remotely Worldwide',
    'cont.f.name':       'Full Name',
    'cont.f.name.ph':    'Dr. John Smith',
    'cont.f.email':      'Email Address',
    'cont.f.email.ph':   'you@clinic.com',
    'cont.f.type':       'Project Type',
    'cont.f.type.ph':    'Select a project type...',
    'cont.f.opt1':       'Quality Assurance System (QA)',
    'cont.f.opt2':       'Dose Analysis / DRL',
    'cont.f.opt3':       'Radiological Protection Management',
    'cont.f.opt4':       'DICOM Viewer / Imaging Platform',
    'cont.f.opt5':       'Custom Clinical Application',
    'cont.f.opt6':       'Other',
    'cont.f.msg':        'Tell us about your project',
    'cont.f.msg.ph':     'Describe what you need, your timeline, and any technical requirements...',
    'cont.f.btn':        'Send Message',
    'cont.f.sent':       'Message Sent ✓',
  }
};

// Extend translations with short descriptions, bullets, and btn labels
(function() {
  const add = (lang, obj) => Object.assign(translations[lang], obj);

  add('es', {
    'btn.more': 'Mostrar más',
    'btn.less': 'Mostrar menos',

    'p1.short': 'Plataforma centralizada de QA para todas las modalidades de radiodiagnóstico y medicina nuclear, con análisis de imagen asistido por visión computacional.',
    'p1.bullets': 'Flujo de trabajo configurado por equipo según sus características, fantomas y fuentes disponibles|Cálculo automático de resultados por cada prueba de QA|Análisis de imagen asistido: medición automática de unidades Hounsfield|Corrección manual disponible sobre los resultados automáticos|Almacenamiento local de todas las métricas y resultados|Reportes firmados generados con un solo clic',

    'p2.short': 'Herramienta conectada directamente al PACS institucional para monitoreo continuo de dosis y optimización frente a estándares DRL internacionales.',
    'p2.bullets': 'Conexión directa al PACS o bases de datos locales de la institución|Extracción continua de parámetros de dosis en todos los estudios|Filtros por fecha, sexo, edad, tipo de estudio, compresión mamaria y grosor de mama|Cálculo automático de dosis cuando el equipo no la reporta en el DICOM|Comparación frente a estándares DRL internacionales|Generación de parámetros de optimización propios según perfil de paciente',

    'p3.short': 'Sistema de registros y firma digital para el control de actividades diarias del personal radiológico, con datos confirmados inmutables.',
    'p3.bullets': 'Formularios por actividad vinculados a la documentación y firma del tecnólogo|Firma digital automática en cada registro completado|Panel de supervisión para el oficial: filtros por fecha y usuario|Registros confirmados bloqueados: no editables ni eliminables|Historial de auditoría completo de quién hizo qué y cuándo|Control de acceso por roles: tecnólogos vs. supervisores',

    'p4.short': 'Plataforma integral para inventario de equipos radiológicos, alertas automáticas de vencimiento de QA y seguimiento dosimétrico del personal expuesto.',
    'p4.bullets': 'Inventario de equipos por área, fabricante y tipo|Historial completo de QA por equipo con fechas y resultados|Alertas automáticas por correo antes del vencimiento de cada control de calidad|Registro dosimétrico del personal con convención de colores por nivel de riesgo|Acceso al historial personal mediante código QR en red local|Gestión de documentación del personal ocupacionalmente expuesto',

    'p5.short': 'Calculadora especializada de conversión de Producto Dosis-Longitud a dosis efectiva en pacientes pediátricos, con interpolación entre tablas internacionales.',
    'p5.bullets': 'Conversión de DLP a dosis efectiva usando tablas de conversión internacionales reconocidas|Interpolación automática para edades entre los valores exactos de la tabla|Modelo lineal entre puntos de la curva por defecto|Opción de modelado no lineal o cambio a regresión según el comportamiento|Interfaz diseñada para el flujo de trabajo clínico diario',
  });

  add('en', {
    'btn.more': 'Show more',
    'btn.less': 'Show less',

    'p1.short': 'Centralized QA platform for all radiodiagnostic and nuclear medicine modalities, with computer-vision-assisted image analysis.',
    'p1.bullets': 'Per-equipment workflow configured for available phantoms and sources|Automatic test result calculation for each QA test|Computer-vision-assisted image analysis with automatic Hounsfield unit measurement|Manual correction available over automatic results|Local storage of all metrics and results|Signed reports generated with a single click',

    'p2.short': 'Tool connected directly to the institutional PACS for continuous dose monitoring and optimization against international DRL standards.',
    'p2.bullets': 'Direct connection to PACS or local institutional databases|Continuous dose parameter extraction across all imaging studies|Filters by date, sex, age, study type, compression force, and breast thickness|Automatic dose calculation when not reported in DICOM header|Comparison against international DRL standards|Custom optimization parameter generation based on patient profile',

    'p3.short': 'Digital signature record system that centralizes all daily staff activities and guarantees immutability of confirmed data.',
    'p3.bullets': 'Activity-specific forms linked to each technologist\'s documentation and signature|Automatic digital signature on every completed record|Supervisor dashboard with date and user filters|Confirmed records locked: no editing or deletion allowed|Complete audit trail of who did what and when|Role-based access control: technologists vs. supervisors',

    'p4.short': 'Comprehensive platform for radiological equipment inventory, automated QA expiration alerts, and occupationally-exposed personnel dosimetry tracking.',
    'p4.bullets': 'Equipment inventory by area, manufacturer, and type|Complete per-equipment QA history with dates and results|Automated email alerts before each QA expiration|Dosimetry records with color-coded radiological risk convention|Personal history access via QR code on local network|Document management for occupationally-exposed personnel',

    'p5.short': 'Specialized Dose-Length Product to effective dose conversion calculator for pediatric patients, with interpolation between international conversion tables.',
    'p5.bullets': 'DLP to effective dose conversion using internationally recognized tables|Automatic interpolation for ages between exact table values|Linear model between curve points by default|Non-linear modeling option or switch to regression|Interface designed for daily clinical workflow',
  });
})();