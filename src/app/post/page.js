import Image from 'next/image';
import styles from './page.module.css';

export default function Posts() {
  return (
    <main className={styles.main}>
      <div>
        <h1 data-testid="title" >Post Title</h1>
        <p data-testid="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis nisi et rutrum imperdiet. Aenean sodales tortor id felis faucibus ornare gravida quis sapien. Aenean mollis augue ut turpis sagittis porttitor. Nulla sit amet commodo diam. Donec arcu quam, iaculis non congue id, lacinia vitae tortor. Duis sapien lorem, iaculis a facilisis vel, finibus sed purus. Aliquam erat volutpat. Integer luctus mauris eu erat accumsan tristique. Aliquam efficitur odio eu dolor ullamcorper ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus dolor sem, efficitur in augue quis, pharetra aliquet ante.
        </p>
        <Image
          src="/slash-logo-black.svg"
          alt="Slash Logo"
          className={styles.vercelLogo}
          width={300}
          height={100}
          priority
          data-testid="image"
        />
        <p>
          Phasellus non felis ut justo imperdiet commodo eu vitae nisi. Proin sed posuere nisi. Curabitur nec nisl quis orci mattis molestie ac at neque. Aliquam eget dolor nec dolor mollis scelerisque. Aliquam gravida leo elit, quis interdum lacus tincidunt sagittis. Aenean bibendum a mi quis fermentum. Cras quis sem metus. Aliquam erat volutpat. Quisque ullamcorper orci pulvinar erat facilisis, at varius metus hendrerit. Morbi ut viverra lorem, id lacinia est. Quisque gravida diam vitae blandit sagittis. Etiam a ipsum porta, auctor mauris sed, hendrerit sapien. Pellentesque sollicitudin pellentesque consequat.
        </p>
      </div>
    </main>
  )
}