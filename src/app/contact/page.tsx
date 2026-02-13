import MainLayout from '@/components/MainLayout'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact - E7 Pour Les Noobs',
  description: 'Contactez-nous pour vos questions sur Epic Seven',
}

export default function Contact() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>CONTACT</h1>

        <div className={styles.formWrapper}>
          <iframe
            className={styles.formIframe}
            src="https://docs.google.com/forms/d/e/1FAIpQLSeJtyzOMCOLgDwiUdcvjYsteTsnuwZNtLINkpKNZYx4cSxkzw/viewform?embedded=true"
            title="Formulaire de contact"
            loading="lazy"
          >
            Chargement…
          </iframe>
        </div>
      </div>
    </MainLayout>
  )
}
