import { Dispatch, SetStateAction } from "react";

export type NewStateTypes = {
  StateId: string;
  item: {
    // id: string;
    subject: string;
    quiz: {
      // id: string;
      question: {
        label: string;
        rightAnswer: string;
        answers: {
          id: string;
          answer: string;
        }[];
      }[];
    }[];
  };
}[];

export type QuizStateTypes = {
  // id: string;
  subject: string;
  quiz: {
    // id: string;
    question: {
      label: string;
      rightAnswer: string;
      answers: {
        id: string;
        answer: string;
      }[];
    }[];
  }[];
}[];

export interface QuizContextType {
  quizState: NewStateTypes | undefined;
  setQuizState: Dispatch<SetStateAction<NewStateTypes | undefined>>;
  selectedSubject: string;
  setSelectedSubject: Dispatch<SetStateAction<string>>;
  load: boolean;
  setLoad: Dispatch<SetStateAction<boolean>>;
  selectItems: string[];
  setSelectItems: Dispatch<SetStateAction<string[]>>;
  deleteLoader: boolean;
  setDeleteLoader: Dispatch<SetStateAction<boolean>>;

  SaveQuizToMongoDB: (subject: any) => void;
  GetQuizState: (subject: string) => void;
  DeleteSubject: (id: string, subject: string) => void;
}
