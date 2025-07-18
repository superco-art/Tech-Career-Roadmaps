import { RoadmapData } from '../types';

export const roadmapsData: RoadmapData = {
  programming: {
    id: 'programming',
    title: 'Programación',
    description: 'Domina el desarrollo de software y aplicaciones',
    icon: 'Code',
    color: 'blue',
    gradient: 'from-blue-500 to-purple-600',
    nodes: [
      {
        id: 'fundamentals',
        title: 'Fundamentos de Programación',
        description: 'Bases sólidas de lógica y algoritmos',
        color: 'bg-blue-100 border-blue-300',
        position: { x: 50, y: 10 },
        connections: ['web-dev', 'mobile-dev'],
        subNodes: [
          {
            id: 'logic',
            title: 'Lógica de Programación',
            description: 'Aprende a pensar como un programador',
            skills: ['Algoritmos básicos', 'Pseudocódigo', 'Diagramas de flujo', 'Estructuras de control'],
            resources: [
              { title: 'CS50: Introduction to Computer Science', type: 'Course', url: 'https://cs50.harvard.edu/x/', provider: 'Harvard', free: true },
              { title: 'Codecademy - Learn How to Code', type: 'Platform', url: 'https://www.codecademy.com/learn/learn-how-to-code', provider: 'Codecademy', free: true },
              { title: 'Khan Academy - Intro to Programming', type: 'Course', url: 'https://www.khanacademy.org/computing/intro-to-programming', provider: 'Khan Academy', free: true },
              { title: 'freeCodeCamp - Basic Algorithm Scripting', type: 'Tutorial', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', provider: 'freeCodeCamp', free: true },
              { title: 'Coursera - Algorithmic Thinking', type: 'Course', url: 'https://www.coursera.org/learn/algorithmic-thinking-1', provider: 'Rice University', free: true }
            ],
            estimatedTime: '2-3 semanas',
            difficulty: 'Beginner'
          },
          {
            id: 'data-structures',
            title: 'Estructuras de Datos',
            description: 'Organización eficiente de información',
            skills: ['Arrays', 'Listas enlazadas', 'Pilas y colas', 'Árboles', 'Grafos'],
            prerequisites: ['logic'],
            resources: [
              { title: 'Data Structures and Algorithms', type: 'Course', url: 'https://www.edx.org/course/data-structures-and-algorithms', provider: 'edX', free: true },
              { title: 'Visualgo - Data Structure Visualizations', type: 'Platform', url: 'https://visualgo.net/en', provider: 'VisuAlgo', free: true },
              { title: 'GeeksforGeeks - Data Structures', type: 'Documentation', url: 'https://www.geeksforgeeks.org/data-structures/', provider: 'GeeksforGeeks', free: true },
              { title: 'LeetCode - Data Structure Study Plan', type: 'Platform', url: 'https://leetcode.com/study-plan/data-structure/', provider: 'LeetCode', free: true },
              { title: 'Introduction to Algorithms (MIT)', type: 'Book', url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/', provider: 'MIT Press', free: false }
            ],
            estimatedTime: '4-6 semanas',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'web-dev',
        title: 'Desarrollo Web',
        description: 'Crea aplicaciones web modernas',
        color: 'bg-green-100 border-green-300',
        position: { x: 20, y: 60 },
        connections: ['databases'],
        subNodes: [
          {
            id: 'frontend',
            title: 'Frontend Development',
            description: 'Interfaces de usuario atractivas',
            skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React/Vue/Angular', 'Responsive Design'],
            prerequisites: ['logic'],
            resources: [
              { title: 'freeCodeCamp - Responsive Web Design', type: 'Platform', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', provider: 'freeCodeCamp', free: true },
              { title: 'MDN Web Docs', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Learn', provider: 'Mozilla', free: true },
              { title: 'The Odin Project', type: 'Platform', url: 'https://www.theodinproject.com/', provider: 'The Odin Project', free: true },
              { title: 'React Official Tutorial', type: 'Documentation', url: 'https://react.dev/learn', provider: 'React', free: true },
              { title: 'CSS Grid Garden', type: 'Tutorial', url: 'https://cssgridgarden.com/', provider: 'Codepip', free: true },
              { title: 'JavaScript30', type: 'Tutorial', url: 'https://javascript30.com/', provider: 'Wes Bos', free: true },
              { title: 'Frontend Mentor', type: 'Platform', url: 'https://www.frontendmentor.io/', provider: 'Frontend Mentor', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'backend',
            title: 'Backend Development',
            description: 'Lógica del servidor y APIs',
            skills: ['Node.js/Express', 'Python/Django', 'API REST', 'Autenticación', 'Testing'],
            prerequisites: ['frontend'],
            resources: [
              { title: 'Node.js Official Guides', type: 'Documentation', url: 'https://nodejs.org/en/learn/', provider: 'Node.js', free: true },
              { title: 'Django Official Tutorial', type: 'Tutorial', url: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/', provider: 'Django', free: true },
              { title: 'Express.js Guide', type: 'Documentation', url: 'https://expressjs.com/en/guide/routing.html', provider: 'Express', free: true },
              { title: 'REST API Tutorial', type: 'Tutorial', url: 'https://restfulapi.net/', provider: 'RESTful API', free: true },
              { title: 'freeCodeCamp - APIs and Microservices', type: 'Course', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', provider: 'freeCodeCamp', free: true },
              { title: 'Postman Learning Center', type: 'Documentation', url: 'https://learning.postman.com/', provider: 'Postman', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'mobile-dev',
        title: 'Desarrollo Móvil',
        description: 'Apps para dispositivos móviles',
        color: 'bg-purple-100 border-purple-300',
        position: { x: 80, y: 60 },
        subNodes: [
          {
            id: 'react-native',
            title: 'React Native',
            description: 'Apps multiplataforma con JavaScript',
            skills: ['React Native', 'Expo', 'Navigation', 'State Management', 'Native Modules'],
            prerequisites: ['frontend'],
            resources: [
              { title: 'React Native Documentation', type: 'Documentation', url: 'https://reactnative.dev/docs/getting-started', provider: 'React Native', free: true },
              { title: 'Expo Documentation', type: 'Documentation', url: 'https://docs.expo.dev/', provider: 'Expo', free: true },
              { title: 'React Native Tutorial for Beginners', type: 'Tutorial', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', provider: 'Programming with Mosh', free: true },
              { title: 'React Navigation', type: 'Documentation', url: 'https://reactnavigation.org/docs/getting-started', provider: 'React Navigation', free: true },
              { title: 'freeCodeCamp - React Native Course', type: 'Course', url: 'https://www.youtube.com/watch?v=obH0Po_RdWk', provider: 'freeCodeCamp', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'flutter',
            title: 'Flutter',
            description: 'Framework de Google para apps móviles',
            skills: ['Dart', 'Flutter Widgets', 'State Management', 'Animations', 'Platform Integration'],
            resources: [
              { title: 'Flutter Documentation', type: 'Documentation', url: 'https://docs.flutter.dev/', provider: 'Flutter', free: true },
              { title: 'Dart Language Tour', type: 'Documentation', url: 'https://dart.dev/language', provider: 'Dart', free: true },
              { title: 'Flutter Codelabs', type: 'Tutorial', url: 'https://codelabs.developers.google.com/?cat=flutter', provider: 'Google', free: true },
              { title: 'Flutter Widget of the Week', type: 'Tutorial', url: 'https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG', provider: 'Flutter', free: true },
              { title: 'freeCodeCamp - Flutter Course', type: 'Course', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', provider: 'freeCodeCamp', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'databases',
        title: 'Bases de Datos',
        description: 'Almacenamiento y gestión de datos',
        color: 'bg-orange-100 border-orange-300',
        position: { x: 50, y: 90 },
        subNodes: [
          {
            id: 'sql',
            title: 'Bases de Datos SQL',
            description: 'Sistemas de gestión relacionales',
            skills: ['SQL', 'PostgreSQL', 'MySQL', 'Modelado de datos', 'Optimización'],
            prerequisites: ['backend'],
            resources: [
              { title: 'W3Schools SQL Tutorial', type: 'Tutorial', url: 'https://www.w3schools.com/sql/', provider: 'W3Schools', free: true },
              { title: 'PostgreSQL Tutorial', type: 'Documentation', url: 'https://www.postgresql.org/docs/current/tutorial.html', provider: 'PostgreSQL', free: true },
              { title: 'SQLBolt - Interactive SQL Lessons', type: 'Platform', url: 'https://sqlbolt.com/', provider: 'SQLBolt', free: true },
              { title: 'freeCodeCamp - Relational Database Course', type: 'Course', url: 'https://www.freecodecamp.org/learn/relational-database/', provider: 'freeCodeCamp', free: true },
              { title: 'MySQL Tutorial', type: 'Documentation', url: 'https://dev.mysql.com/doc/mysql-tutorial-excerpt/8.0/en/', provider: 'MySQL', free: true },
              { title: 'HackerRank SQL Practice', type: 'Platform', url: 'https://www.hackerrank.com/domains/sql', provider: 'HackerRank', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'nosql',
            title: 'Bases de Datos NoSQL',
            description: 'Sistemas no relacionales',
            skills: ['MongoDB', 'Redis', 'Elasticsearch', 'Document Stores', 'Escalabilidad'],
            prerequisites: ['sql'],
            resources: [
              { title: 'MongoDB University', type: 'Platform', url: 'https://university.mongodb.com/', provider: 'MongoDB', free: true },
              { title: 'Redis Tutorial', type: 'Documentation', url: 'https://redis.io/docs/getting-started/', provider: 'Redis', free: true },
              { title: 'NoSQL Databases Explained', type: 'Tutorial', url: 'https://www.mongodb.com/nosql-explained', provider: 'MongoDB', free: true },
              { title: 'Elasticsearch Guide', type: 'Documentation', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html', provider: 'Elastic', free: true },
              { title: 'freeCodeCamp - MongoDB Course', type: 'Course', url: 'https://www.youtube.com/watch?v=4yqu8YF29cU', provider: 'freeCodeCamp', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  ai: {
    id: 'ai',
    title: 'Inteligencia Artificial',
    description: 'Construye sistemas inteligentes y automatizados',
    icon: 'Brain',
    color: 'green',
    gradient: 'from-green-500 to-teal-600',
    nodes: [
      {
        id: 'math-foundations',
        title: 'Fundamentos Matemáticos',
        description: 'Base matemática para IA',
        color: 'bg-green-100 border-green-300',
        position: { x: 50, y: 10 },
        connections: ['machine-learning', 'deep-learning'],
        subNodes: [
          {
            id: 'linear-algebra',
            title: 'Álgebra Lineal',
            description: 'Vectores, matrices y transformaciones',
            skills: ['Vectores', 'Matrices', 'Eigenvalores', 'Transformaciones lineales'],
            resources: [
              { title: '3Blue1Brown - Essence of Linear Algebra', type: 'Tutorial', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', provider: '3Blue1Brown', free: true },
              { title: 'MIT 18.06 Linear Algebra', type: 'Course', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', provider: 'MIT OpenCourseWare', free: true },
              { title: 'Khan Academy - Linear Algebra', type: 'Course', url: 'https://www.khanacademy.org/math/linear-algebra', provider: 'Khan Academy', free: true },
              { title: 'Linear Algebra Review and Reference', type: 'Documentation', url: 'http://cs229.stanford.edu/section/cs229-linalg.pdf', provider: 'Stanford CS229', free: true },
              { title: 'Immersive Linear Algebra', type: 'Book', url: 'http://immersivemath.com/ila/index.html', provider: 'Immersive Math', free: true }
            ],
            estimatedTime: '4-6 semanas',
            difficulty: 'Intermediate'
          },
          {
            id: 'statistics',
            title: 'Estadística y Probabilidad',
            description: 'Análisis de datos y distribuciones',
            skills: ['Estadística descriptiva', 'Probabilidad', 'Distribuciones', 'Inferencia estadística'],
            resources: [
              { title: 'Khan Academy - Statistics and Probability', type: 'Course', url: 'https://www.khanacademy.org/math/statistics-probability', provider: 'Khan Academy', free: true },
              { title: 'MIT 6.041 Probabilistic Systems Analysis', type: 'Course', url: 'https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/', provider: 'MIT OpenCourseWare', free: true },
              { title: 'Think Stats - Probability and Statistics', type: 'Book', url: 'https://greenteapress.com/thinkstats2/html/index.html', provider: 'Green Tea Press', free: true },
              { title: 'Seeing Theory - Visual Statistics', type: 'Platform', url: 'https://seeing-theory.brown.edu/', provider: 'Brown University', free: true },
              { title: 'StatQuest with Josh Starmer', type: 'Tutorial', url: 'https://www.youtube.com/c/joshstarmer', provider: 'StatQuest', free: true }
            ],
            estimatedTime: '6-8 semanas',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Algoritmos de aprendizaje automático',
        color: 'bg-blue-100 border-blue-300',
        position: { x: 25, y: 60 },
        connections: ['deep-learning'],
        subNodes: [
          {
            id: 'supervised-learning',
            title: 'Aprendizaje Supervisado',
            description: 'Algoritmos con datos etiquetados',
            skills: ['Regresión linear', 'Clasificación', 'SVM', 'Decision Trees', 'Random Forest'],
            prerequisites: ['linear-algebra', 'statistics'],
            resources: [
              { title: 'Andrew Ng - Machine Learning Course', type: 'Course', url: 'https://www.coursera.org/learn/machine-learning', provider: 'Stanford/Coursera', free: true },
              { title: 'Scikit-learn Documentation', type: 'Documentation', url: 'https://scikit-learn.org/stable/user_guide.html', provider: 'Scikit-learn', free: true },
              { title: 'freeCodeCamp - Machine Learning with Python', type: 'Course', url: 'https://www.freecodecamp.org/learn/machine-learning-with-python/', provider: 'freeCodeCamp', free: true },
              { title: 'Kaggle Learn - Intro to Machine Learning', type: 'Course', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', provider: 'Kaggle', free: true },
              { title: 'Machine Learning Yearning', type: 'Book', url: 'https://www.deeplearning.ai/machine-learning-yearning/', provider: 'Andrew Ng', free: true },
              { title: 'Google AI Education', type: 'Platform', url: 'https://ai.google/education/', provider: 'Google', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'unsupervised-learning',
            title: 'Aprendizaje No Supervisado',
            description: 'Patrones en datos sin etiquetas',
            skills: ['Clustering', 'K-means', 'PCA', 'Dimensionality Reduction', 'Anomaly Detection'],
            prerequisites: ['supervised-learning'],
            resources: [
              { title: 'Unsupervised Learning - edX', type: 'Course', url: 'https://www.edx.org/learn/machine-learning/university-of-california-berkeley-unsupervised-learning', provider: 'UC Berkeley/edX', free: true },
              { title: 'Clustering Algorithms Explained', type: 'Tutorial', url: 'https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68', provider: 'Towards Data Science', free: true },
              { title: 'PCA Explained Visually', type: 'Tutorial', url: 'http://setosa.io/ev/principal-component-analysis/', provider: 'Setosa', free: true },
              { title: 'Kaggle Learn - Feature Engineering', type: 'Course', url: 'https://www.kaggle.com/learn/feature-engineering', provider: 'Kaggle', free: true },
              { title: 'Anomaly Detection Tutorial', type: 'Tutorial', url: 'https://www.youtube.com/watch?v=LRqX_2Q_6E4', provider: 'StatQuest', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Advanced'
          }
        ]
      },
      {
        id: 'deep-learning',
        title: 'Deep Learning',
        description: 'Redes neuronales profundas',
        color: 'bg-purple-100 border-purple-300',
        position: { x: 75, y: 60 },
        subNodes: [
          {
            id: 'neural-networks',
            title: 'Redes Neuronales',
            description: 'Fundamentos de redes neuronales',
            skills: ['Perceptrón', 'Backpropagation', 'Activation Functions', 'Optimización', 'Regularización'],
            prerequisites: ['supervised-learning'],
            resources: [
              { title: 'Deep Learning Specialization', type: 'Course', url: 'https://www.coursera.org/specializations/deep-learning', provider: 'DeepLearning.AI', free: true },
              { title: 'Neural Networks and Deep Learning', type: 'Book', url: 'http://neuralnetworksanddeeplearning.com/', provider: 'Michael Nielsen', free: true },
              { title: 'TensorFlow Tutorials', type: 'Documentation', url: 'https://www.tensorflow.org/tutorials', provider: 'TensorFlow', free: true },
              { title: 'PyTorch Tutorials', type: 'Documentation', url: 'https://pytorch.org/tutorials/', provider: 'PyTorch', free: true },
              { title: '3Blue1Brown - Neural Networks', type: 'Tutorial', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', provider: '3Blue1Brown', free: true },
              { title: 'Fast.ai Practical Deep Learning', type: 'Course', url: 'https://course.fast.ai/', provider: 'Fast.ai', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Advanced'
          },
          {
            id: 'cnn',
            title: 'Redes Convolucionales (CNN)',
            description: 'Procesamiento de imágenes',
            skills: ['Convolución', 'Pooling', 'Feature Maps', 'Transfer Learning', 'Image Classification'],
            prerequisites: ['neural-networks'],
            resources: [
              { title: 'CS231n: Convolutional Neural Networks', type: 'Course', url: 'http://cs231n.stanford.edu/', provider: 'Stanford', free: true },
              { title: 'CNN Explainer', type: 'Platform', url: 'https://poloclub.github.io/cnn-explainer/', provider: 'Georgia Tech', free: true },
              { title: 'Keras Computer Vision Guide', type: 'Documentation', url: 'https://keras.io/guides/transfer_learning/', provider: 'Keras', free: true },
              { title: 'freeCodeCamp - TensorFlow 2.0 Complete Course', type: 'Course', url: 'https://www.youtube.com/watch?v=tPYj3fFJGjk', provider: 'freeCodeCamp', free: true },
              { title: 'OpenCV Python Tutorial', type: 'Tutorial', url: 'https://opencv-python-tutroals.readthedocs.io/en/latest/', provider: 'OpenCV', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Advanced'
          }
        ]
      },
      {
        id: 'nlp',
        title: 'Procesamiento de Lenguaje Natural',
        description: 'Comprensión y generación de texto',
        color: 'bg-indigo-100 border-indigo-300',
        position: { x: 50, y: 90 },
        subNodes: [
          {
            id: 'text-processing',
            title: 'Procesamiento de Texto',
            description: 'Análisis y manipulación de texto',
            skills: ['Tokenización', 'Stemming', 'Lemmatización', 'N-gramas', 'TF-IDF'],
            prerequisites: ['supervised-learning'],
            resources: [
              { title: 'NLTK Book', type: 'Book', url: 'https://www.nltk.org/book/', provider: 'NLTK', free: true },
              { title: 'spaCy Course', type: 'Course', url: 'https://course.spacy.io/', provider: 'spaCy', free: true },
              { title: 'Text Mining with R', type: 'Book', url: 'https://www.tidytextmining.com/', provider: 'Julia Silge', free: true },
              { title: 'Kaggle Learn - Natural Language Processing', type: 'Course', url: 'https://www.kaggle.com/learn/natural-language-processing', provider: 'Kaggle', free: true },
              { title: 'freeCodeCamp - NLP with Python', type: 'Course', url: 'https://www.youtube.com/watch?v=X2vAabgKiuM', provider: 'freeCodeCamp', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'transformers',
            title: 'Transformers y LLMs',
            description: 'Modelos de lenguaje modernos',
            skills: ['Attention Mechanism', 'BERT', 'GPT', 'Fine-tuning', 'Prompt Engineering'],
            prerequisites: ['text-processing', 'neural-networks'],
            resources: [
              { title: 'Hugging Face Course', type: 'Course', url: 'https://huggingface.co/course/', provider: 'Hugging Face', free: true },
              { title: 'The Illustrated Transformer', type: 'Tutorial', url: 'http://jalammar.github.io/illustrated-transformer/', provider: 'Jay Alammar', free: true },
              { title: 'Attention Is All You Need Paper', type: 'Documentation', url: 'https://arxiv.org/abs/1706.03762', provider: 'arXiv', free: true },
              { title: 'OpenAI GPT-3 Documentation', type: 'Documentation', url: 'https://platform.openai.com/docs/', provider: 'OpenAI', free: true },
              { title: 'Transformers from Scratch', type: 'Tutorial', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', provider: 'Andrej Karpathy', free: true },
              { title: 'Papers With Code - NLP', type: 'Platform', url: 'https://paperswithcode.com/area/natural-language-processing', provider: 'Papers With Code', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: 'Ciberseguridad',
    description: 'Protege sistemas y datos contra amenazas',
    icon: 'Shield',
    color: 'red',
    gradient: 'from-red-500 to-pink-600',
    nodes: [
      {
        id: 'security-fundamentals',
        title: 'Fundamentos de Seguridad',
        description: 'Principios básicos de ciberseguridad',
        color: 'bg-red-100 border-red-300',
        position: { x: 50, y: 10 },
        connections: ['network-security', 'ethical-hacking'],
        subNodes: [
          {
            id: 'security-principles',
            title: 'Principios de Seguridad',
            description: 'CIA Triad y fundamentos',
            skills: ['Confidencialidad', 'Integridad', 'Disponibilidad', 'Autenticación', 'Autorización'],
            resources: [
              { title: 'Cybrary - Security Fundamentals', type: 'Course', url: 'https://www.cybrary.it/course/cyber-security-fundamentals/', provider: 'Cybrary', free: true },
              { title: 'SANS Cyber Aces', type: 'Platform', url: 'https://cyberaces.org/', provider: 'SANS', free: true },
              { title: 'NIST Cybersecurity Framework', type: 'Documentation', url: 'https://www.nist.gov/cyberframework', provider: 'NIST', free: true },
              { title: 'Professor Messer Security+', type: 'Course', url: 'https://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-comptia-security-plus-course/', provider: 'Professor Messer', free: true },
              { title: 'Coursera - Introduction to Cyber Security', type: 'Course', url: 'https://www.coursera.org/learn/intro-cyber-security', provider: 'NYU/Coursera', free: true },
              { title: 'edX - Cybersecurity Fundamentals', type: 'Course', url: 'https://www.edx.org/learn/cybersecurity/rochester-institute-of-technology-cybersecurity-fundamentals', provider: 'RIT/edX', free: true }
            ],
            estimatedTime: '2-3 semanas',
            difficulty: 'Beginner'
          },
          {
            id: 'risk-management',
            title: 'Gestión de Riesgos',
            description: 'Identificación y mitigación de riesgos',
            skills: ['Risk Assessment', 'Threat Modeling', 'Vulnerability Management', 'Compliance'],
            prerequisites: ['security-principles'],
            resources: [
              { title: 'OWASP Risk Rating Methodology', type: 'Documentation', url: 'https://owasp.org/www-community/OWASP_Risk_Rating_Methodology', provider: 'OWASP', free: true },
              { title: 'NIST Risk Management Framework', type: 'Documentation', url: 'https://csrc.nist.gov/projects/risk-management/about-rmf', provider: 'NIST', free: true },
              { title: 'Microsoft Threat Modeling Tool', type: 'Platform', url: 'https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool', provider: 'Microsoft', free: true },
              { title: 'SANS Risk Management', type: 'Course', url: 'https://www.sans.org/white-papers/1901/', provider: 'SANS', free: true },
              { title: 'Cybrary - Risk Management', type: 'Course', url: 'https://www.cybrary.it/course/risk-management/', provider: 'Cybrary', free: true }
            ],
            estimatedTime: '3-4 semanas',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'network-security',
        title: 'Seguridad de Redes',
        description: 'Protección de infraestructura de red',
        color: 'bg-orange-100 border-orange-300',
        position: { x: 25, y: 60 },
        subNodes: [
          {
            id: 'network-protocols',
            title: 'Protocolos de Red',
            description: 'Seguridad en protocolos de comunicación',
            skills: ['TCP/IP', 'SSL/TLS', 'VPN', 'Firewall', 'IDS/IPS'],
            prerequisites: ['security-principles'],
            resources: [
              { title: 'Wireshark Network Analysis', type: 'Tutorial', url: 'https://www.wireshark.org/docs/wsug_html_chunked/', provider: 'Wireshark', free: true },
              { title: 'Cisco Networking Academy', type: 'Platform', url: 'https://www.netacad.com/courses/cybersecurity', provider: 'Cisco', free: true },
              { title: 'pfSense Documentation', type: 'Documentation', url: 'https://docs.netgate.com/pfsense/en/latest/', provider: 'Netgate', free: true },
              { title: 'Cybrary - Network Security', type: 'Course', url: 'https://www.cybrary.it/course/network-security/', provider: 'Cybrary', free: true },
              { title: 'SANS Network Security', type: 'Tutorial', url: 'https://www.sans.org/white-papers/1988/', provider: 'SANS', free: true },
              { title: 'TryHackMe - Network Security', type: 'Platform', url: 'https://tryhackme.com/room/networksecurityprotocols', provider: 'TryHackMe', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'wireless-security',
            title: 'Seguridad Inalámbrica',
            description: 'Protección de redes WiFi',
            skills: ['WPA/WPA2/WPA3', 'WiFi Security', 'Bluetooth Security', 'Mobile Security'],
            prerequisites: ['network-protocols'],
            resources: [
              { title: 'Aircrack-ng Tutorial', type: 'Tutorial', url: 'https://www.aircrack-ng.org/doku.php?id=tutorial', provider: 'Aircrack-ng', free: true },
              { title: 'WiFi Security Guide', type: 'Documentation', url: 'https://www.wi-fi.org/discover-wi-fi/security', provider: 'Wi-Fi Alliance', free: true },
              { title: 'OWASP Mobile Security', type: 'Documentation', url: 'https://owasp.org/www-project-mobile-security-testing-guide/', provider: 'OWASP', free: true },
              { title: 'Cybrary - Wireless Network Security', type: 'Course', url: 'https://www.cybrary.it/course/wireless-network-security/', provider: 'Cybrary', free: true },
              { title: 'TryHackMe - WiFi Hacking 101', type: 'Platform', url: 'https://tryhackme.com/room/wifihacking101', provider: 'TryHackMe', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'ethical-hacking',
        title: 'Hacking Ético',
        description: 'Pentesting y análisis de vulnerabilidades',
        color: 'bg-purple-100 border-purple-300',
        position: { x: 75, y: 60 },
        subNodes: [
          {
            id: 'penetration-testing',
            title: 'Penetration Testing',
            description: 'Pruebas de penetración sistemáticas',
            skills: ['Reconnaissance', 'Scanning', 'Exploitation', 'Post-exploitation', 'Reporting'],
            prerequisites: ['network-protocols'],
            resources: [
              { title: 'TryHackMe - Complete Beginner', type: 'Platform', url: 'https://tryhackme.com/path/outline/beginner', provider: 'TryHackMe', free: true },
              { title: 'HackTheBox Academy', type: 'Platform', url: 'https://academy.hackthebox.com/', provider: 'HackTheBox', free: true },
              { title: 'Kali Linux Documentation', type: 'Documentation', url: 'https://www.kali.org/docs/', provider: 'Kali Linux', free: true },
              { title: 'OWASP Testing Guide', type: 'Documentation', url: 'https://owasp.org/www-project-web-security-testing-guide/', provider: 'OWASP', free: true },
              { title: 'Metasploit Unleashed', type: 'Course', url: 'https://www.offensive-security.com/metasploit-unleashed/', provider: 'Offensive Security', free: true },
              { title: 'VulnHub', type: 'Platform', url: 'https://www.vulnhub.com/', provider: 'VulnHub', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Advanced'
          },
          {
            id: 'web-app-security',
            title: 'Seguridad Web',
            description: 'Análisis de aplicaciones web',
            skills: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF', 'Authentication Bypass'],
            prerequisites: ['penetration-testing'],
            resources: [
              { title: 'PortSwigger Web Security Academy', type: 'Platform', url: 'https://portswigger.net/web-security', provider: 'PortSwigger', free: true },
              { title: 'OWASP WebGoat', type: 'Platform', url: 'https://owasp.org/www-project-webgoat/', provider: 'OWASP', free: true },
              { title: 'DVWA (Damn Vulnerable Web App)', type: 'Platform', url: 'https://dvwa.co.uk/', provider: 'DVWA', free: true },
              { title: 'OWASP Top 10', type: 'Documentation', url: 'https://owasp.org/www-project-top-ten/', provider: 'OWASP', free: true },
              { title: 'Burp Suite Documentation', type: 'Documentation', url: 'https://portswigger.net/burp/documentation', provider: 'PortSwigger', free: true },
              { title: 'TryHackMe - Web Fundamentals', type: 'Platform', url: 'https://tryhackme.com/path/outline/web', provider: 'TryHackMe', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Advanced'
          }
        ]
      },
      {
        id: 'incident-response',
        title: 'Respuesta a Incidentes',
        description: 'Manejo de incidentes de seguridad',
        color: 'bg-yellow-100 border-yellow-300',
        position: { x: 50, y: 90 },
        subNodes: [
          {
            id: 'forensics',
            title: 'Análisis Forense',
            description: 'Investigación de incidentes',
            skills: ['Digital Forensics', 'Evidence Collection', 'Memory Analysis', 'Network Forensics'],
            prerequisites: ['security-principles'],
            resources: [
              { title: 'Autopsy Digital Forensics', type: 'Platform', url: 'https://www.autopsy.com/support/training/', provider: 'Autopsy', free: true },
              { title: 'SANS Digital Forensics', type: 'Tutorial', url: 'https://www.sans.org/white-papers/2138/', provider: 'SANS', free: true },
              { title: 'Volatility Framework', type: 'Documentation', url: 'https://volatilityfoundation.org/documentation/', provider: 'Volatility Foundation', free: true },
              { title: 'Cybrary - Computer Forensics', type: 'Course', url: 'https://www.cybrary.it/course/computer-hacking-forensic-investigator/', provider: 'Cybrary', free: true },
              { title: 'NIST Computer Forensics Guide', type: 'Documentation', url: 'https://csrc.nist.gov/publications/detail/sp/800-86/final', provider: 'NIST', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Advanced'
          },
          {
            id: 'incident-handling',
            title: 'Manejo de Incidentes',
            description: 'Procedimientos de respuesta',
            skills: ['Incident Response Plan', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned'],
            prerequisites: ['forensics'],
            resources: [
              { title: 'NIST Incident Response Guide', type: 'Documentation', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final', provider: 'NIST', free: true },
              { title: 'SANS Incident Response', type: 'Tutorial', url: 'https://www.sans.org/white-papers/1901/', provider: 'SANS', free: true },
              { title: 'Cybrary - Incident Response', type: 'Course', url: 'https://www.cybrary.it/course/incident-response-and-advanced-forensics/', provider: 'Cybrary', free: true },
              { title: 'CISA Incident Response Guide', type: 'Documentation', url: 'https://www.cisa.gov/incident-response', provider: 'CISA', free: true },
              { title: 'TryHackMe - Incident Response', type: 'Platform', url: 'https://tryhackme.com/room/incidentresponse', provider: 'TryHackMe', free: true }
            ],
            estimatedTime: '1-2 meses',
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  cloud: {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Infraestructura y servicios en la nube',
    icon: 'Cloud',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-600',
    nodes: [
      {
        id: 'cloud-fundamentals',
        title: 'Fundamentos de Cloud',
        description: 'Conceptos básicos de computación en la nube',
        color: 'bg-indigo-100 border-indigo-300',
        position: { x: 50, y: 10 },
        connections: ['aws', 'azure', 'gcp'],
        subNodes: [
          {
            id: 'cloud-concepts',
            title: 'Conceptos de Cloud',
            description: 'Servicios y modelos de despliegue',
            skills: ['IaaS', 'PaaS', 'SaaS', 'Public Cloud', 'Private Cloud', 'Hybrid Cloud'],
            resources: [
              { title: 'AWS Cloud Practitioner Essentials', type: 'Course', url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', provider: 'AWS', free: true },
              { title: 'Microsoft Azure Fundamentals', type: 'Course', url: 'https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/', provider: 'Microsoft', free: true },
              { title: 'Google Cloud Digital Leader', type: 'Course', url: 'https://cloud.google.com/training/digital-leader', provider: 'Google Cloud', free: true },
              { title: 'Cloud Computing Concepts', type: 'Course', url: 'https://www.coursera.org/learn/cloud-computing', provider: 'University of Illinois', free: true },
              { title: 'edX - Introduction to Cloud Computing', type: 'Course', url: 'https://www.edx.org/learn/cloud-computing/university-of-maryland-college-park-introduction-to-cloud-computing', provider: 'UMD/edX', free: true }
            ],
            estimatedTime: '2-3 semanas',
            difficulty: 'Beginner'
          },
          {
            id: 'virtualization',
            title: 'Virtualización',
            description: 'Tecnologías de virtualización',
            skills: ['Hypervisors', 'Containers', 'Docker', 'Kubernetes', 'VM Management'],
            prerequisites: ['cloud-concepts'],
            resources: [
              { title: 'Docker Official Tutorial', type: 'Tutorial', url: 'https://docs.docker.com/get-started/', provider: 'Docker', free: true },
              { title: 'Kubernetes Basics', type: 'Tutorial', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', provider: 'Kubernetes', free: true },
              { title: 'Play with Docker', type: 'Platform', url: 'https://labs.play-with-docker.com/', provider: 'Docker', free: true },
              { title: 'Katacoda Kubernetes', type: 'Platform', url: 'https://www.katacoda.com/courses/kubernetes', provider: 'Katacoda', free: true },
              { title: 'freeCodeCamp - Docker Course', type: 'Course', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', provider: 'freeCodeCamp', free: true },
              { title: 'VMware Learning', type: 'Platform', url: 'https://www.vmware.com/education-services/learning.html', provider: 'VMware', free: true }
            ],
            estimatedTime: '3-4 semanas',
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'aws',
        title: 'Amazon Web Services',
        description: 'Plataforma de AWS',
        color: 'bg-orange-100 border-orange-300',
        position: { x: 20, y: 60 },
        subNodes: [
          {
            id: 'aws-core',
            title: 'Servicios Core de AWS',
            description: 'Servicios fundamentales de AWS',
            skills: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Lambda'],
            prerequisites: ['cloud-concepts'],
            resources: [
              { title: 'AWS Free Tier', type: 'Platform', url: 'https://aws.amazon.com/free/', provider: 'AWS', free: true },
              { title: 'AWS Documentation', type: 'Documentation', url: 'https://docs.aws.amazon.com/', provider: 'AWS', free: true },
              { title: 'AWS Skill Builder', type: 'Platform', url: 'https://skillbuilder.aws/', provider: 'AWS', free: true },
              { title: 'freeCodeCamp - AWS Certified Cloud Practitioner', type: 'Course', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', provider: 'freeCodeCamp', free: true },
              { title: 'AWS Hands-On Tutorials', type: 'Tutorial', url: 'https://aws.amazon.com/getting-started/hands-on/', provider: 'AWS', free: true },
              { title: 'A Cloud Guru - AWS Fundamentals', type: 'Course', url: 'https://acloudguru.com/course/aws-fundamentals', provider: 'A Cloud Guru', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'aws-advanced',
            title: 'AWS Avanzado',
            description: 'Arquitecturas y servicios avanzados',
            skills: ['CloudFormation', 'ECS/EKS', 'API Gateway', 'CloudWatch', 'Security Groups'],
            prerequisites: ['aws-core'],
            resources: [
              { title: 'AWS Well-Architected Framework', type: 'Documentation', url: 'https://aws.amazon.com/architecture/well-architected/', provider: 'AWS', free: true },
              { title: 'AWS CloudFormation Templates', type: 'Documentation', url: 'https://aws.amazon.com/cloudformation/templates/', provider: 'AWS', free: true },
              { title: 'AWS EKS Workshop', type: 'Tutorial', url: 'https://www.eksworkshop.com/', provider: 'AWS', free: true },
              { title: 'AWS Solutions Architect Associate', type: 'Course', url: 'https://aws.amazon.com/training/classroom/aws-technical-essentials/', provider: 'AWS', free: true },
              { title: 'AWS Architecture Center', type: 'Documentation', url: 'https://aws.amazon.com/architecture/', provider: 'AWS', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Advanced'
          }
        ]
      },
      {
        id: 'azure',
        title: 'Microsoft Azure',
        description: 'Plataforma de Microsoft',
        color: 'bg-blue-100 border-blue-300',
        position: { x: 50, y: 60 },
        subNodes: [
          {
            id: 'azure-fundamentals',
            title: 'Azure Fundamentals',
            description: 'Servicios básicos de Azure',
            skills: ['Azure VMs', 'Azure Storage', 'Azure AD', 'Resource Groups', 'Azure Functions'],
            prerequisites: ['cloud-concepts'],
            resources: [
              { title: 'Microsoft Learn - Azure Fundamentals', type: 'Platform', url: 'https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/', provider: 'Microsoft', free: true },
              { title: 'Azure Free Account', type: 'Platform', url: 'https://azure.microsoft.com/en-us/free/', provider: 'Microsoft', free: true },
              { title: 'Azure Documentation', type: 'Documentation', url: 'https://docs.microsoft.com/en-us/azure/', provider: 'Microsoft', free: true },
              { title: 'freeCodeCamp - Azure Fundamentals', type: 'Course', url: 'https://www.youtube.com/watch?v=NKEFWyqJ5XA', provider: 'freeCodeCamp', free: true },
              { title: 'Azure Quickstart Templates', type: 'Documentation', url: 'https://azure.microsoft.com/en-us/resources/templates/', provider: 'Microsoft', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'azure-devops',
            title: 'Azure DevOps',
            description: 'CI/CD y desarrollo colaborativo',
            skills: ['Azure Pipelines', 'Azure Repos', 'Azure Boards', 'ARM Templates', 'Monitoring'],
            prerequisites: ['azure-fundamentals'],
            resources: [
              { title: 'Azure DevOps Documentation', type: 'Documentation', url: 'https://docs.microsoft.com/en-us/azure/devops/', provider: 'Microsoft', free: true },
              { title: 'Azure DevOps Labs', type: 'Tutorial', url: 'https://azuredevopslabs.com/', provider: 'Microsoft', free: true },
              { title: 'Microsoft Learn - DevOps', type: 'Platform', url: 'https://docs.microsoft.com/en-us/learn/paths/evolve-your-devops-practices/', provider: 'Microsoft', free: true },
              { title: 'Azure ARM Templates', type: 'Documentation', url: 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/', provider: 'Microsoft', free: true },
              { title: 'freeCodeCamp - Azure DevOps', type: 'Course', url: 'https://www.youtube.com/watch?v=4BibQ69MD8c', provider: 'freeCodeCamp', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Advanced'
          }
        ]
      },
      {
        id: 'gcp',
        title: 'Google Cloud Platform',
        description: 'Plataforma de Google',
        color: 'bg-green-100 border-green-300',
        position: { x: 80, y: 60 },
        subNodes: [
          {
            id: 'gcp-core',
            title: 'GCP Core Services',
            description: 'Servicios fundamentales de GCP',
            skills: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Cloud Functions', 'Kubernetes Engine'],
            prerequisites: ['cloud-concepts'],
            resources: [
              { title: 'Google Cloud Free Tier', type: 'Platform', url: 'https://cloud.google.com/free', provider: 'Google Cloud', free: true },
              { title: 'Google Cloud Documentation', type: 'Documentation', url: 'https://cloud.google.com/docs', provider: 'Google Cloud', free: true },
              { title: 'Google Cloud Skills Boost', type: 'Platform', url: 'https://www.cloudskillsboost.google/', provider: 'Google Cloud', free: true },
              { title: 'Coursera - Google Cloud Fundamentals', type: 'Course', url: 'https://www.coursera.org/learn/gcp-fundamentals', provider: 'Google Cloud', free: true },
              { title: 'Google Cloud Codelabs', type: 'Tutorial', url: 'https://codelabs.developers.google.com/cloud', provider: 'Google Cloud', free: true }
            ],
            estimatedTime: '2-3 meses',
            difficulty: 'Intermediate'
          },
          {
            id: 'gcp-data',
            title: 'GCP Data & AI',
            description: 'Servicios de datos e IA',
            skills: ['BigQuery', 'Cloud ML', 'Dataflow', 'Pub/Sub', 'Cloud AI APIs'],
            prerequisites: ['gcp-core'],
            resources: [
              { title: 'BigQuery Documentation', type: 'Documentation', url: 'https://cloud.google.com/bigquery/docs', provider: 'Google Cloud', free: true },
              { title: 'Google AI Platform', type: 'Documentation', url: 'https://cloud.google.com/ai-platform/docs', provider: 'Google Cloud', free: true },
              { title: 'Dataflow Templates', type: 'Documentation', url: 'https://cloud.google.com/dataflow/docs/templates/overview', provider: 'Google Cloud', free: true },
              { title: 'Coursera - Data Engineering on GCP', type: 'Course', url: 'https://www.coursera.org/professional-certificates/gcp-data-engineering', provider: 'Google Cloud', free: true },
              { title: 'Kaggle Learn - BigQuery', type: 'Course', url: 'https://www.kaggle.com/learn/intro-to-sql', provider: 'Kaggle', free: true }
            ],
            estimatedTime: '3-4 meses',
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  }
};