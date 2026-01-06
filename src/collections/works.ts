import type { ImageMetadata } from "astro";

import expoEcommerceImg from "../assets/works/expo-ecommerce.png";
import expoEcommerceVid from "../assets/works/expo-ecommerce.mp4";
import vcInterviewImg from "../assets/works/vc-interview.png";
import vcInterviewVid from "../assets/works/vc-interview.mp4";
import linguoFlowImg from "../assets/works/linguo-flow.png";
import linguoFlowVid from "../assets/works/linguo-flow.mp4";
import waveAiImg from "../assets/works/wave-ai.png";
import waveAiVid from "../assets/works/wave-ai.mp4";
import aiFusionLabImg from "../assets/works/ai-fusion-lab.png";
import aiFusionLabVid from "../assets/works/ai-fusion-lab.mp4";
import tSenderImg from "../assets/works/t-sender.png";
import lotteryImg from "../assets/works/nextjs-smartcontract-lottery.png";
import crowdFundingImg from "../assets/works/crowd-funding.png";

export interface Work {
  name: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  video?: string;
  url: string;
  isShow: boolean;
}

const works: Work[] = [
  {
    name: "Expo Ecommerce",
    description:
      "Production-ready full-stack e-commerce solution with cross-platform mobile app (iOS/Android), admin dashboard, and Node.js backend. Features Stripe payments, Clerk authentication, Inngest background jobs, and Sentry monitoring.",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Expo",
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "TanStack",
      "Stripe",
      "Clerk",
      "Inngest",
      "Sentry",
    ],
    image: expoEcommerceImg,
    video: expoEcommerceVid,
    url: "https://expo-ecommerce-rose.vercel.app/",
    isShow: true,
  },
  {
    name: "VC Interview",
    description:
      "Real-time technical interview platform with video/audio calls, live chat, and collaborative code editor. Built for simulating real remote coding interviews with secure auth and event-driven jobs.",
    tags: [
      "Real-time",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
      "TanStack",
      "Stream",
      "Clerk",
    ],
    image: vcInterviewImg,
    video: vcInterviewVid,
    url: "https://vc-interview.vercel.app",
    isShow: true,
  },
  {
    name: "LinguoFlow",
    description:
      "Premium English learning platform featuring structured curriculum, spaced repetition, streak tracking, fuzzy search, admin panel, and analytics dashboard.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Better Auth",
      "Prisma",
      "Fuse.js",
    ],
    image: linguoFlowImg,
    video: linguoFlowVid,
    url: "https://linguo-flow.vercel.app/",
    isShow: true,
  },
  {
    name: "Wave AI",
    description:
      "A full-stack second brain AI agent for capturing, organizing, and connecting thoughts with intelligent assistance.",
    tags: [
      "AI",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "TanStack",
      "Better Auth",
      "Hono",
      "Neon",
      "Prisma",
      "Postgres",
    ],
    image: waveAiImg,
    video: waveAiVid,
    url: "https://wave-ai-agent-ruddy.vercel.app/",
    isShow: true,
  },
  {
    name: "AI Fusion Lab",
    description:
      "Multi-AI model chat application allowing users to interact with GPT, Gemini, DeepSeek, and more in a unified interface with auth, rate limiting, and preferences.",
    tags: [
      "AI",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "CodeRabbit",
      "Arcjet",
      "Clerk",
      "Firebase",
    ],
    image: aiFusionLabImg,
    video: aiFusionLabVid,
    url: "https://ai-fusion-lab-theta.vercel.app/",
    isShow: true,
  },
  {
    name: "TSender UI",
    description:
      "Frontend interface for a gas-optimized ERC20 airdrop smart contract, enabling efficient token distribution to multiple recipients.",
    tags: ["Web3", "ERC20", "Next.js", "Blockchain"],
    image: tSenderImg,
    url: "https://tsender-rho.vercel.app/",
    isShow: true,
  },
  {
    name: "Decentralized Lottery",
    description:
      "Decentralized lottery application leveraging blockchain technology to ensure transparency and fairness.",
    tags: ["Web3", "Solidity", "Next.js", "DApp"],
    image: lotteryImg,
    url: "https://nextjs-smartcontract-lottery-fcc-five.vercel.app/",
    isShow: false,
  },
  {
    name: "Crowd Funding DApp",
    description:
      "Decentralized crowdfunding platform that allows users to create and fund campaigns using Ethereum smart contracts.",
    tags: ["Ethereum", "Crowdfunding", "DApp", "Web3"],
    image: crowdFundingImg,
    url: "https://thirdweb-crowd-funding.vercel.app/",
    isShow: true,
  },
];

export default works;
