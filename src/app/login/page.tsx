import styles from "../css/auth.module.css"
import Link from "next/link"

export default function page() {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">Kembali ke beranda</Link>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Buat Akun</h2>

          <form>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>👤</span>
              <input type="text" placeholder="Nama pengguna" required />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.icon}>🔒</span>
              <input type="password" placeholder="Kata sandi" required />
            </div>

            <button className={styles.btnSubmit}>Masuk</button>
          </form>

          <p className={styles.footerText}>
            Belum punya akun? <Link href="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </>
  )
}
