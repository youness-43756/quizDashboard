import connectDB from "@/app/(backend)/connection";
import QuizModel from "@/app/(backend)/models/QuizModel";
import { NewStateTypes } from "@/context/contextTypes";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    await connectDB(); // Connect to the database

    const reqBody = await req.json();
    const { selectedSubject } = reqBody;

    let quizzes;
    let newState: NewStateTypes = [];

    if (selectedSubject === "all") {
      //? Fetch all documents if 'all' is selected
      quizzes = await QuizModel.find({});
    } else {
      //? Fetch documents matching the selected subject
      quizzes = await QuizModel.find({
        "quizSubject.subject": selectedSubject,
      });
    }
    
    //? Bring only _id and quizState:
    quizzes.forEach((q: any) => {
      q.quizSubject.map((item: any) => {
        newState.push({
          StateId: q._id,
          item,
        });
      });
    });

    //? Return the fetched data in the response
    return NextResponse.json({ newState }, { status: 200 });

  } catch (error) {
    console.error("Error fetching data from database:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Failed to fetch data!" },
      { status: 500 } // Use status 500 for server errors
    );
  }
};

export { POST };
