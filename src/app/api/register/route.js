export const runtime = "nodejs";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return Response.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    return Response.json({ message: "Register berhasil" });
  } catch (err) {
    return Response.json(
      { message: "Username atau email sudah digunakan" },
      { status: 500 }
    );
  }
}
