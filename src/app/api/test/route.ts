import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongo";

export const GET = withApiAuthRequired(
  async (request: NextApiRequest, response: NextApiResponse) => {
    // const { db } = await connectToDatabase();
    try {
      // const test = await db.collection("test").find({}).toArray();
      return NextResponse.json(
        // { message: "Hello World", data: test },
        { message: "Hello World" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.error();
    }
  }
);
