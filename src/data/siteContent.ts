import {
  BarChart3,
  Bot,
  Code2,
  DatabaseZap,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import gitLogo from '../assets/logo git.png'
import instaLogo from '../assets/logo insta.png'
import linkedinLogo from '../assets/logo linkedin.png'
import whatsLogo from '../assets/logo whats.png'
import type { ContactOption, EntryPath, IconContent, ServiceContent } from '../types'

export const highlights: IconContent[] = [
  {
    icon: Rocket,
    title: 'Soluções inteligentes',
    text: 'Projetos pensados para resolver problemas reais sem inflar processos.',
  },
  {
    icon: Code2,
    title: 'Tecnologia eficiente',
    text: 'Aplicações modernas, performáticas e prontas para crescer com o negócio.',
  },
  {
    icon: UsersRound,
    title: 'Foco no que importa',
    text: 'Conversas claras, entregas objetivas e menos dependência técnica no dia a dia.',
  },
  {
    icon: BarChart3,
    title: 'Resultados que impulsionam',
    text: 'Automação, dados e software trabalhando para ganhar velocidade operacional.',
  },
]

export const painPoints: IconContent[] = [
  {
    icon: DatabaseZap,
    title: 'Sua operação vive em planilhas',
    text: 'Informações espalhadas dificultam acompanhamento, cobrança e tomada de decisão.',
  },
  {
    icon: Bot,
    title: 'Seu time perde tempo com tarefas repetidas',
    text: 'Atividades manuais consomem energia que poderia estar em atendimento, vendas e estratégia.',
  },
  {
    icon: Layers3,
    title: 'Seu site não mostra o valor da empresa',
    text: 'A presença digital existe, mas ainda não explica bem, não convence e não gera conversas.',
  },
  {
    icon: ShieldCheck,
    title: 'Você depende demais de improviso',
    text: 'Processos sem sistema ficam frágeis, difíceis de treinar e complicados de escalar.',
  },
]

export const services: ServiceContent[] = [
  {
    icon: Layers3,
    preview: 'web',
    title: 'Sites e sistemas web',
    text: 'Experiências digitais sob medida, de landing pages a plataformas internas.',
  },
  {
    icon: Bot,
    preview: 'automation',
    title: 'Automações e IA',
    text: 'Fluxos inteligentes para reduzir tarefas repetitivas e acelerar decisões.',
  },
  {
    icon: DatabaseZap,
    preview: 'data',
    title: 'Dados integrados',
    text: 'Dashboards, integrações e rotinas que deixam a informação pronta para uso.',
  },
  {
    icon: ShieldCheck,
    preview: 'support',
    title: 'Suporte técnico consultivo',
    text: 'Orientação próxima para manter sua operação simples, estável e segura.',
  },
]

export const entryPaths: EntryPath[] = [
  {
    title: 'Presença digital',
    label: 'Site ou landing page',
    text: 'Para explicar melhor sua oferta, captar contatos e dar uma primeira impressão mais forte.',
  },
  {
    title: 'Operação eficiente',
    label: 'Automação de processo',
    text: 'Para eliminar tarefas repetidas, integrar ferramentas e ganhar tempo operacional.',
  },
  {
    title: 'Gestão com dados',
    label: 'Dashboard ou integração',
    text: 'Para transformar informações soltas em visão clara para decidir e acompanhar resultados.',
  },
  {
    title: 'Sistema próprio',
    label: 'Plataforma interna',
    text: 'Para criar uma solução sob medida quando ferramentas prontas já não resolvem bem.',
  },
]

export const rotatingNeeds = ['site', 'sistema', 'dashboard', 'app', 'portal']
export const heroRotatingWords = ['complicação.', 'enrolação.', 'dificuldade.', 'mistério.']
export const processSteps = ['Entender', 'Simplificar', 'Construir', 'Evoluir']

export const contactOptions: ContactOption[] = [
  {
    image: whatsLogo,
    label: 'Whats',
    href: 'https://wa.me/5500000000000',
  },
  {
    image: instaLogo,
    label: 'Insta',
    href: 'https://instagram.com/monkeystecnologia',
  },
  {
    image: gitLogo,
    label: 'GitHub',
    href: 'https://github.com/monkeystecnologia',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:contato@monkeystecnologia.com',
  },
  {
    image: linkedinLogo,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/monkeystecnologia',
  },
]
