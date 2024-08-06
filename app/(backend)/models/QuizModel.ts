// interface IQuizDocument extends IQuiz, Document {}

import { QuizStateTypes } from "@/context/contextTypes";
import { Schema, model, models, Document } from "mongoose";

interface IQuizDocument extends Document {
  quizSubject: QuizStateTypes;
}

const quizSchema = new Schema<IQuizDocument>({
  quizSubject: [
    {
      // id: { type: String },
      subject: { type: String },
      quiz: [
        {
          // id: { type: String },
          question: [
            {
              label: { type: String },
              rightAnswer: { type: String },
              answers: [
                {
                  id: { type: String },
                  answer: { type: String },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const QuizModel =
  models.quizSubject || model<IQuizDocument>("quizSubject", quizSchema);

export default QuizModel;
