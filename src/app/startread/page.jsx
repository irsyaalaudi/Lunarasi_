import styles from "../css/reading.module.css"
import Link from "next/link"

export default function page() {
  return (
    <div>
      {/* HEADER */}
      <header className={styles.topbar}>
        <Link href="/" className={styles.backBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <h1>Membaca</h1>
      </header>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.iconBook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
            </div>

            <div className={styles.level}>
              <span>Tingkat Kesulitan:</span>
              <span className={styles.badge}>Level</span>
            </div>
          </div>

          <button className={styles.btnMain}>Main</button>
        </div>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur
          error voluptate recusandae asperiores labore porro repellat dolore nisi
          rem dolor vel, est nostrum architecto veritatis quidem reprehenderit
          ipsam blanditiis in? Ducimus consequatur praesentium vero deleniti
          accusamus possimus doloremque sunt.
        </p>

        <div className={styles.readingBox}></div>
      </div>
    </div>
  )
}
