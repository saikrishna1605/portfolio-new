"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional(), // Basic honeypot field
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    honeypot?: string[];
    server?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("honeypot") as string;

  const validatedFields = contactFormSchema.safeParse({
    name,
    email,
    message,
    honeypot,
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (validatedFields.data.honeypot) {
    // Likely a bot
    console.warn("Honeypot field filled, likely spam:", validatedFields.data);
    return {
      message: "Your message has been received!", // Still pretend success to bot
      status: "success",
    };
  }
  
  // Simulate sending email
  console.log("Contact form submitted (simulated):");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Message:", validatedFields.data.message);

  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
  // For example:
  // try {
  //   await sendEmail({
  //     to: "your-email@example.com",
  //     from: "noreply@yourdomain.com",
  //     subject: `New contact from ${validatedFields.data.name}`,
  //     html: `<p>Name: ${validatedFields.data.name}</p><p>Email: ${validatedFields.data.email}</p><p>Message: ${validatedFields.data.message}</p>`,
  //   });
  //   return { message: "Thank you! Your message has been sent successfully.", status: "success" };
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return { message: "Sorry, something went wrong. Please try again later.", status: "error", errors: { server: ["Failed to send message."] } };
  // }

  // Simulate success
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    message: "Thank you! Your message has been sent successfully. (Simulated)",
    status: "success",
  };
}
