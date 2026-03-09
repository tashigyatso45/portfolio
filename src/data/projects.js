// ─── PROJECT DATA ───
// Update this file with your real projects.

import smartScholarsSubjects from "../assets/Screenshot 2026-03-08 at 9.06.24 PM.png";
import smartScholarsSignup from "../assets/Screenshot 2026-03-08 at 8.51.58 PM.png";
import smartScholarsMobile from "../assets/Screenshot 2026-03-08 at 9.22.12 PM.png";
import smartScholarsDifficulty from "../assets/Screenshot 2026-03-08 at 9.22.18 PM.png";
import smartScholarsQuiz from "../assets/Screenshot 2026-03-08 at 9.22.24 PM.png";
import smartScholarsAnswer from "../assets/Screenshot 2026-03-08 at 9.22.37 PM.png";
import gymFinderDirectory from "../assets/Screenshot 2026-03-08 at 10.20.37 PM.png";
import gymFinderSearch from "../assets/Screenshot 2026-03-08 at 10.20.52 PM.png";
import gymFinderAdd from "../assets/Screenshot 2026-03-08 at 10.21.05 PM.png";

/**
 * @typedef {Object} Project
 * @property {string} id - URL-safe unique identifier
 * @property {string} title
 * @property {string} tag - Category label (e.g. "Full-Stack App")
 * @property {string} year
 * @property {"completed"|"in-progress"|"archived"} status
 * @property {string} description - Short summary for project cards
 * @property {string} longDescription - Full overview for detail page
 * @property {string[]} tech - Tech stack
 * @property {string[]} features - Key feature bullets
 * @property {string} challenges - Key challenge and how it was solved
 * @property {string} liveUrl - Live site URL, or "#" if none
 * @property {string} githubUrl - GitHub URL, or "#" if none
 * @property {string|null} thumbnail - Imported image asset or null
 * @property {string[]} images - Gallery image assets
 * @property {string} color - Placeholder background hex color
 * @property {{ title: string, description: string }} meta - SEO metadata
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    id: "smartscholars",
    title: "SmartScholars",
    tag: "Ed-Tech App",
    year: "2025",
    status: "completed",
    description:
      "An interactive math learning app for kids with subject selection, adjustable difficulty levels, and a points and streak system to keep young learners engaged.",
    longDescription: `
      SmartScholars is an educational web app designed to make math practice fun for young learners.
      Kids can pick from Addition, Subtraction, Multiplication, or Division, then choose their
      difficulty level before jumping into a quiz session.

      The app rewards correct answers with points and tracks streaks to motivate continued practice.
      Built with a React frontend and a Python/Flask backend to handle user accounts and session data.
    `,
    tech: ["React", "Python", "Flask"],
    features: [
      "Subject selection: Addition, Subtraction, Multiplication, Division",
      "Three difficulty levels: Easy, Medium, Hard",
      "Points and streak tracking",
      "Instant answer feedback with explanations",
      "User accounts and progress tracking",
    ],
    challenges:
      "Designing an experience that feels rewarding and age-appropriate required careful attention to UI feedback — the points, streaks, and color-coded answers all contribute to keeping kids motivated.",
    liveUrl: "#",
    githubUrl: "#",
    thumbnail: smartScholarsSubjects,
    images: [
      smartScholarsSignup,
      smartScholarsSubjects,
      smartScholarsMobile,
      smartScholarsDifficulty,
      smartScholarsQuiz,
      smartScholarsAnswer,
    ],
    color: "#FFF3E0",
    meta: {
      title: "SmartScholars — Tashi Gyatso",
      description:
        "An interactive math quiz app for kids built with React and Flask, featuring difficulty levels, points, and streaks.",
    },
  },
  {
    id: "gymfinderapp",
    title: "GymFinder App",
    tag: "Full-Stack App",
    year: "2025",
    status: "completed",
    description:
      "An NYC gym directory that pulls live data from OpenStreetMap and lets users submit, rate, and browse gyms across all five boroughs.",
    longDescription: `
      GymFinder is a full-stack web app that helps people in New York City find gyms near them.
      It integrates live gym data from OpenStreetMap and lets users filter by borough — Manhattan,
      Brooklyn, Queens, and the Bronx.

      Users can also submit their own gym recommendations with ratings and descriptions,
      building a community-sourced directory alongside the live data. Built with React on the
      frontend and Python/Flask on the backend.
    `,
    tech: ["React", "Python", "Flask", "OpenStreetMap"],
    features: [
      "Live NYC gym data via OpenStreetMap API",
      "Borough filtering: Manhattan, Brooklyn, Queens, Bronx",
      "Gym search by name or address",
      "User-submitted gym reviews with star ratings",
      "Personal submissions dashboard",
    ],
    challenges:
      "Merging live OpenStreetMap data with user-submitted entries required normalizing different data formats and handling cases where the same gym might appear in both sources.",
    liveUrl: "#",
    githubUrl: "#",
    thumbnail: gymFinderDirectory,
    images: [gymFinderDirectory, gymFinderSearch, gymFinderAdd],
    color: "#E8E4DE",
    meta: {
      title: "GymFinder App — Tashi Gyatso",
      description:
        "An NYC gym directory built with React and Flask, featuring live OpenStreetMap data and user-submitted reviews.",
    },
  },
];

/**
 * Look up a project by its id.
 * @param {string} id
 * @returns {Project | undefined}
 */
export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}

export default PROJECTS;
