# 🏗️ Arquitectura General
## Patrón de Arquitectura: Component-Based SPA
* Single Page Application (SPA) con React
* Arquitectura por componentes modular y reutilizable
* Estado centralizado con React hooks (useState)
* Separación de responsabilidades clara entre UI, datos y lógica
# Estructura de Carpetas
src/
├── components/          # Componentes React reutilizables
├── data/               # Datos estáticos (roadmaps.ts)
├── types/              # Definiciones TypeScript
├── styles/             # Estilos CSS personalizados
└── App.tsx            # Componente principal


# 🛠️ Stack Tecnológico
## Frontend Framework
React 18.3.1 con TypeScript
Hooks para gestión de estado (useState)
JSX para renderizado declarativo
Componentes funcionales modernos
Herramientas de Desarrollo
Vite 5.4.2 - Build tool ultrarrápido
TypeScript - Tipado estático para mejor DX
ESLint - Linting y calidad de código
PostCSS + Autoprefixer - Procesamiento CSS
Estilos y UI
Tailwind CSS 3.4.1 - Framework CSS utility-first
Lucide React - Iconografía moderna y consistente
CSS personalizado para animaciones avanzadas
Diseño responsivo con breakpoints móvil-first
🎯 Componentes Principales
1. App.tsx - Controlador Principal
// Gestión de estado global y routing
const [currentView, setCurrentView] = useState<ViewState>('home');
const [selectedField, setSelectedField] = useState<Field | null>(null);


Router manual sin librerías externas
Estado de navegación centralizado
Transiciones animadas entre vistas
2. HomePage.tsx - Landing Page
// Grid responsivo de campos tecnológicos
const fields = [
  { id: 'programming', title: 'Programación', icon: Code },
  { id: 'ai', title: 'Inteligencia Artificial', icon: Brain },
  // ...
];


Grid responsivo 2x2 en desktop, 1 columna en móvil
Efectos hover con gradientes animados
Iconografía temática por campo
3. RoadmapView.tsx - Vista de Roadmap
// Renderizado de nodos con posicionamiento absoluto
<div style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}>


Posicionamiento absoluto para layout de grafo
Conexiones SVG entre nodos relacionados
Expansión dinámica de sub-nodos
4. NodeDetail.tsx - Modal de Detalles
// Modal overlay con información detallada
<div className="fixed inset-0 bg-black bg-opacity-50">


Modal overlay con backdrop blur
Scroll interno para contenido extenso
Enlaces externos con target="_blank"
📊 Gestión de Datos
Estructura de Datos TypeScript
interface SubNode {
  id: string;
  title: string;
  description: string;
  skills: string[];
  prerequisites?: string[];
  resources: Resource[];
  estimatedTime?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}


Datos Estáticos JSON
4 campos principales con roadmaps completos
+40 sub-especializaciones detalladas
+200 recursos curados con enlaces reales
Metadatos de dificultad, tiempo estimado, prerrequisitos
🎨 Sistema de Diseño
Paleta de Colores Temática
programming: 'from-blue-500 to-purple-600'
ai: 'from-green-500 to-teal-600'
cybersecurity: 'from-red-500 to-pink-600'
cloud: 'from-indigo-500 to-blue-600'


Animaciones CSS Personalizadas
@keyframes fadeIn { /* Entrada suave */ }
@keyframes slideIn { /* Deslizamiento lateral */ }
@keyframes scaleIn { /* Escalado suave */ }


Sistema de Espaciado
Grid system basado en Tailwind
Espaciado consistente con escala 8px
Breakpoints responsivos estándar
🔄 Flujo de Navegación
Estado de Navegación
type ViewState = 'home' | 'roadmap';


Breadcrumbs Dinámicos
const getBreadcrumbs = (): string[] => {
  const breadcrumbs = ['Tech Roadmaps'];
  if (selectedField) breadcrumbs.push(selectedField.title);
  return breadcrumbs;
};


🚀 Optimizaciones de Performance
Lazy Loading
Componentes bajo demanda solo cuando se necesitan
Imágenes optimizadas desde URLs externas (Pexels)
Bundle Optimization
Vite para hot reload ultrarrápido
Tree shaking automático
Code splitting por rutas
UX Optimizations
Transiciones suaves entre estados
Feedback visual inmediato en interacciones
Estados de carga implícitos con animaciones
🎯 Características Técnicas Destacadas
TypeScript Strict Mode
Tipado fuerte en toda la aplicación
Interfaces bien definidas para datos
IntelliSense completo en desarrollo
Accesibilidad
Navegación por teclado funcional
ARIA labels en elementos interactivos
Contraste de colores optimizado
Responsive Design
Mobile-first approach
Breakpoints md:, lg: para diferentes pantallas
Touch-friendly en dispositivos móviles
Esta arquitectura proporciona una base sólida, escalable y mantenible para una aplicación de roadmaps tecnológicos, con excelente experiencia de usuario y performance optimizada.

