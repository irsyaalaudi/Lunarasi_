export const runtime = "nodejs";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { username, password } = await req.json();

  const [rows] = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  if (rows.length === 0) {
    return Response.json({ message: "User tidak ditemukan" }, { status: 401 });
  }

  const user = rows[0];
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return Response.json({ message: "Password salah" }, { status: 401 });
  }

  return Response.json({
    message: "Login berhasil",
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  });
}
