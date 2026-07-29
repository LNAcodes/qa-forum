// Answers are nested inside each Question as an array (see types.ts: answers: Answer[])
// No need to import Answer here or export answers separately
import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "1",
    title:
      "How do I request a hearing loop for my classroom when the school building lacks proper equipment?",
    body: "I have a student with a severe hearing impairment in my class. The school building has no hearing loop installed and the administration keeps telling me it is not in the budget. Who do I contact and what is the official process to request this equipment?",
    author: "Sarah M.",
    createdAt: "2026-07-10",
    answers: [
      {
        id: "1",
        body: "I went through this last year. First contact your local Schulamt and ask specifically for the Referat für inklusive Bildung. They are responsible for assistive technology requests. Make sure to get everything in writing — emails only, no phone calls.",
        author: "Thomas K.",
        createdAt: "2026-07-11",
      },
      {
        id: "2",
        body: "The Jugendamt can also support you here if the school is unresponsive. Additionally, check if the student has a Förderplan — if so, the requested equipment should already be listed there as a legal requirement.",
        author: "Amina R.",
        createdAt: "2026-07-12",
      },
    ],
  },
  {
    id: "2",
    title:
      "Which authority do I contact when a student with a visual impairment doesn't receive the promised support materials?",
    body: "A student in my class was promised Braille materials and large-print worksheets at the beginning of the school year. It is now July and nothing has arrived. The administration says it is not their responsibility. Where do I go from here?",
    author: "Jonas B.",
    createdAt: "2026-07-14",
    answers: [
      {
        id: "3",
        body: "This falls under the Schulträger, not the school itself. The school building and its resources are the Schulträger's responsibility. Contact them directly and reference the UN Convention on the Rights of Persons with Disabilities — that usually speeds things up.",
        author: "Sarah M.",
        createdAt: "2026-07-15",
      },
      {
        id: "4",
        body: "Document everything first — dates, what was promised, who said what. Then file a formal complaint with the Schulamt. If you have a parent on your side who is willing to co-sign the complaint, that carries significantly more weight.",
        author: "Thomas K.",
        createdAt: "2026-07-15",
      },
    ],
  },
  {
    id: "3",
    title:
      "What are my rights as a teacher when administration ignores my inclusion support requests?",
    body: "I have submitted three written requests for additional support hours for a student with autism spectrum disorder. The school leadership has not responded to any of them. I feel like I am failing this student. What are my options?",
    author: "Amina R.",
    createdAt: "2026-07-18",
    answers: [
      {
        id: "5",
        body: "You are not failing this student — the system is. That said, you have the right to escalate directly to the Schulaufsicht if the school leadership is unresponsive. Put your escalation in writing and CC the parents if they agree.",
        author: "Jonas B.",
        createdAt: "2026-07-19",
      },
      {
        id: "6",
        body: "Contact your union (GEW or whichever you belong to) — they have legal advisors who deal with exactly this situation. You should not have to navigate this alone, and your union can put pressure on the administration in ways that you as an individual cannot.",
        author: "Sarah M.",
        createdAt: "2026-07-20",
      },
    ],
  },
];
