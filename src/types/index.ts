export interface SubNode {
  id: string;
  title: string;
  description: string;
  skills: string[];
  prerequisites?: string[];
  resources: Resource[];
  estimatedTime?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Node {
  id: string;
  title: string;
  description: string;
  color: string;
  subNodes: SubNode[];
  position: { x: number; y: number };
  connections?: string[];
}

export interface Resource {
  title: string;
  type: 'Course' | 'Documentation' | 'Book' | 'Tutorial' | 'Platform';
  url: string;
  provider: string;
  free: boolean;
}

export interface Field {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  nodes: Node[];
}

export interface RoadmapData {
  [key: string]: Field;
}