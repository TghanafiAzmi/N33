import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let company = "";
    let service = "";
    let budget = "";
    let timeline = "";
    let message = "";
    let fileName = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = (formData.get("name") as string) || "";
      email = (formData.get("email") as string) || "";
      company = (formData.get("company") as string) || "";
      service = (formData.get("service") as string) || "";
      budget = (formData.get("budget") as string) || "";
      timeline = (formData.get("timeline") as string) || "";
      message = (formData.get("project") as string) || "";
      const file = formData.get("attachment") as File | null;
      if (file) {
        fileName = file.name;
      }
    } else {
      const json = await request.json();
      name = json.name || "";
      email = json.email || "";
      company = json.company || "";
      service = json.service || "";
      budget = json.budget || "";
      timeline = json.timeline || "";
      message = json.message || json.project || "";
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Process enquiry email to hello@n33studio.com (Integrate with Resend / SMTP / SendGrid here)
    console.log("Project Enquiry Received for hello@n33studio.com:", {
      name,
      email,
      company,
      service,
      budget,
      timeline,
      message,
      fileName,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully to hello@n33studio.com",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form enquiry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
