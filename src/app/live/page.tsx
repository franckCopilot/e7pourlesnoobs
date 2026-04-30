'use client'

import { useEffect, useState } from 'react'
import styles from './live.module.css'

export default function Live() {
  const [parent, setParent] = useState<string>('localhost')

  useEffect(() => {
    setParent(window.location.hostname)
  }, [])

  const playerSrc = `https://player.twitch.tv/?channel=shuriknfr&parent=${parent}`
  const chatSrc = `https://www.twitch.tv/embed/shuriknfr/chat?parent=${parent}`

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LIVE</h1>
      <div className={styles.embedWrapper}>
        <div className={styles.playerWrapper}>
          <iframe
            src={playerSrc}
            className={styles.playerIframe}
            allowFullScreen
            title="Stream Twitch shuriknfr"
          />
        </div>
        <div className={styles.chatWrapper}>
          <iframe
            src={chatSrc}
            className={styles.chatIframe}
            title="Chat Twitch shuriknfr"
          />
        </div>
      </div>
    </div>
  )
}
