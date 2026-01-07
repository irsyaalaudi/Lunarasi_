import Image from 'next/image'
import styles from "./css/auth.module.css"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <p className={styles.footerText}>
        Belum punya akun? <Link href="/login">Daftar</Link>
      </p>
      <p className={styles.footerText}>
        Belum punya akun? <Link href="/startread">membaca</Link>
      </p>
      <p className="text-6xl">
        Belum punya akun? <Link href="/prosesread">membaca1</Link>
      </p>
      <p className={styles.footerText}>
        Belum punya akun? <Link href="/cerpen">membaca</Link>
      </p>

    </div>
  )
}
