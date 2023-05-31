import styles from './../page.module.css'

export default function PostPage({ params }) {
  return (
    <main className={styles.main}>
      <div>
        <h1>{params.postId}</h1>
      </div>
    </main>
  )
}