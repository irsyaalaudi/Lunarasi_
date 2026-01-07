"use client";

import { useState } from "react";
import styles from "../css/auth.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // validasi password
    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi sandi tidak sama");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    // jika register berhasil → ke login
    router.push("/login");
  };

  return (
    <>
      <div className={styles.header}>
        <Link href="/">Kembali ke beranda</Link>
        <Link href="/login" className={styles.loginBtn}>
          Masuk
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Buat Akun</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>👤</span>
              <input
                type="text"
                placeholder="Nama pengguna"
                required
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.icon}>📧</span>
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.icon}>🔒</span>
              <input
                type="password"
                placeholder="Kata sandi"
                required
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.icon}>🔒</span>
              <input
                type="password"
                placeholder="Konfirmasi sandi"
                required
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.btnSubmit}>
              Daftar
            </button>
          </form>

          <p className={styles.footerText}>
            Sudah punya akun? <Link href="/login">Masuk</Link>
          </p>
        </div>
      </div>
    </>
  );
}
