export interface Answer {
  id: string;
  body: string;
  author: string;
  createdAt: string;
}

export interface Question {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  answers: Answer[];
}
