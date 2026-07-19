export type AgentCategory =
  | "Voice & video"
  | "Intelligence"
  | "Operations"
  | "Infrastructure";

export interface PantryAgent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: AgentCategory;
  frozenVersion: string;
}

export const pantryAgents: PantryAgent[] = [
  {
    id: "voice",
    name: "Voice Agent",
    tagline: "Makes and receives calls",
    description:
      "Inbound and outbound voice on your numbers — scripted flows, handoffs, and CRM logging without building telephony from scratch.",
    category: "Voice & video",
    frozenVersion: "v1.0",
  },
  {
    id: "video",
    name: "Video Agent",
    tagline: "Real-time video generation",
    description:
      "Generates video in real time for explainers, status updates, and customer-facing surfaces — grounded in your approved content.",
    category: "Voice & video",
    frozenVersion: "v1.0",
  },
  {
    id: "central-brain",
    name: "Central Brain",
    tagline: "Grounded in your data lake",
    description:
      "A shared reasoning layer over your data lake — one place for agents to retrieve, cite, and stay aligned with enterprise truth.",
    category: "Intelligence",
    frozenVersion: "v1.0",
  },
  {
    id: "prediction",
    name: "Prediction Agent",
    tagline: "Raises alerts before breakage",
    description:
      "Monitors signals across operational data and raises alerts when thresholds or patterns demand attention — not another dashboard nobody opens.",
    category: "Intelligence",
    frozenVersion: "v1.0",
  },
  {
    id: "orchestration",
    name: "Orchestration Agent",
    tagline: "Legacy to legacy",
    description:
      "Connects legacy systems to each other — routes events, maps fields, and runs workflows across software that was never meant to talk.",
    category: "Operations",
    frozenVersion: "v1.0",
  },
  {
    id: "ai-monitoring",
    name: "AI Monitoring Agent",
    tagline: "Watches your AI infra",
    description:
      "Keeps watch on models, pipelines, and agent runtimes — drift, latency, cost, and failure modes surfaced before users feel them.",
    category: "Infrastructure",
    frozenVersion: "v1.0",
  },
];

export const agentCategories: AgentCategory[] = [
  "Voice & video",
  "Intelligence",
  "Operations",
  "Infrastructure",
];
