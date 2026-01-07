"use client";

import { useState } from "react";
import styles from "../css/auth.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    // jika login sukses
    router.push("/"); // atau /dashboard
  };

  return (
    <>
      <div className={styles.header}>
        <Link href="/">Kembali ke beranda</Link>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Masuk</h2>

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

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.btnSubmit}>
              Masuk
            </button>
          </form>

          <p className={styles.footerText}>
            Belum punya akun? <Link href="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </>
  );
}
