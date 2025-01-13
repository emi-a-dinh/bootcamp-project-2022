import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before
  const slug = req.nextUrl.pathname.split("/").pop()!;

  try {
    const portfolio = await Portfolio.findOne({ slug }).orFail();
    return NextResponse.json(portfolio);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  console.log("POST request received");

  await connectDB();

  const slug = req.nextUrl.pathname.split("/").pop()!;

  try {
    const { user, comment } = await req.json();
    console.log("Received data:", { user, comment });

    if (!user || !comment) {
      return NextResponse.json(
        { error: "must enter in user and comment" },
        { status: 400 }
      );
    }

    console.log(slug);

    const newslug = decodeURIComponent(slug).trim();
    console.log("slug, ", newslug);

    const port = await Portfolio.findOneAndUpdate(
      { projectName: newslug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true }
    );

    console.log("new portfolio comment: ", port);

    if (port == null) {
      return NextResponse.json({ error: "port not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, port });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
