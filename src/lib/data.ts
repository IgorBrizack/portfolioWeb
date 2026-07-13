export const SOCIAL_LINKS = {
  github: 'https://github.com/IgorBrizack',
  linkedin: 'https://www.linkedin.com/in/igor-brizack',
  email: 'igor_brizack@hotmail.com',
}

export const RESUME_PATHS: Record<'en' | 'pt', string> = {
  en: '/resume-igor-brizack.pdf',
  pt: '/curriculo-igor-brizack.pdf',
}

export type SkillCategory =
  | 'languages'
  | 'backend'
  | 'cloud'
  | 'frontend'
  | 'databases'
  | 'observability'
  | 'architecture'

export const SKILLS: Record<SkillCategory, string[]> = {
  languages: ['Go', 'Python', 'TypeScript', 'JavaScript'],
  backend: ['FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'GraphQL'],
  cloud: ['AWS Lambda', 'SQS / SNS', 'ECS', 'EC2', 'S3', 'CloudFormation', 'Docker', 'Terraform'],
  frontend: ['React', 'Next.js', 'Angular'],
  databases: ['PostgreSQL', 'MySQL', 'Timestream'],
  observability: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'OpenTelemetry'],
  architecture: ['Microservices', 'Serverless', 'Clean Architecture', 'Distributed Systems'],
}

export const EXPERIENCE_KEYS = ['ledax', 'smartrips'] as const

export const WORK_KEYS = ['energiq', 'pipelines', 'serverless'] as const

export const TIMELINE_KEYS = ['civil_degree', 'trybe', 'ledax', 'smartrips'] as const

export const HIGHLIGHT_KEYS = [
  'system_design',
  'distributed_systems',
  'api_design',
  'clean_architecture',
  'caching',
  'performance',
  'observability',
  'cicd',
] as const
