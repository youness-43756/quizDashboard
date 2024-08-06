import connectDB from "@/app/(backend)/connection";
import QuizModel from "@/app/(backend)/models/QuizModel";
import { NewStateTypes } from "@/context/contextTypes";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const reqBody = await req.json();
    const { id } = reqBody;
    const result = await QuizModel.findByIdAndDelete(id);
    console.log({ result });

    
    // Return the fetched data in the response
    return NextResponse.json({ message: "Subject deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting data from database:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Failed to delete subject!" },
      { status: 500 } // Use status 500 for server errors
    );
  }
};

export { POST };
