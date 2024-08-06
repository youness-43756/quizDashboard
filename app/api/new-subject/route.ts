import connectDB from "@/app/(backend)/connection";
import QuizModel from "@/app/(backend)/models/QuizModel";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    await connectDB(); // Connect to the database

    const reqBody = await req.json(); // Parse the request body
    const { subject, quiz } = reqBody;

    //? Check if a quiz with the given subject already exists
    const existingQuiz = await QuizModel.findOne({
      "quizSubject.subject": subject,
    });
    if (existingQuiz) {
      //? If the subject exists, return a message indicating the subject already exists
      return NextResponse.json(
        { message: "Quiz with this subject already exists!" },
        { status: 400 } //? Bad request
      );
    }

    //? Create a new instance of the model with the request body
    const newQuiz = new QuizModel({
      quizSubject: { subject, quiz }, //? Adjust based on the fields you need to insert
    });

    //? Save the document to the database
    await newQuiz.save();

    return NextResponse.json(
      { message: `Quiz subject "${subject}" has been successfully saved.` },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving Quiz subject to database:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error saving Quiz subject to database!" },
      { status: 500 } // Consider using a 500 status code for server errors
    );
  }
};

export { POST };
