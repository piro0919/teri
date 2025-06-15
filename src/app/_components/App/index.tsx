import clsx from "clsx";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import amazon from "./_static/amazon.png";
import note from "./_static/note.png";
import profile from "./_static/profile.jpg";
import twitcasting from "./_static/twitcasting.png";
import styles from "./style.module.css";

export default function App(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.profileImageContainerWrapper}>
            <div className={styles.profileImageContainer}>
              <Image alt="てり" quality={100} src={profile} />
            </div>
          </div>
          <div className={styles.textsContainer}>
            <h1 className={styles.h1}>てり</h1>
            <div className={styles.profile}>
              ハイパーメディアクリエイターです。
            </div>
          </div>
        </header>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://x.com/pypynanon"
              target="_blank"
            >
              <SocialIcon
                borderRadius="0"
                className={styles.iconImageContainer}
                target="_blank"
                url="https://x.com/pypynanon"
              />
              <div>
                <h2 className={styles.h2}>X</h2>
                <p className={styles.description}>
                  たわいもないことを書いています。
                </p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://twitcasting.tv/c:tytou"
              target="_blank"
            >
              <div
                className={clsx(styles.iconImageContainer, styles.twitcasting)}
              >
                <Image alt="ツイキャス" quality={100} src={twitcasting} />
              </div>
              <div>
                <h2 className={styles.h2}>ツイキャス</h2>
                <p className={styles.description}>
                  気が向いたときに配信しています。
                </p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.youtube.com/@nanami_rii"
              target="_blank"
            >
              <SocialIcon
                borderRadius="0"
                className={styles.iconImageContainer}
                target="_blank"
                url="https://www.youtube.com/@nanami_rii"
              />
              <div>
                <h2 className={styles.h2}>YouTube</h2>
                <p className={styles.description}>
                  七海りぃ名義でシチュエーションボイスを投稿しています。
                </p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://note.com/katy_amanda2525"
              target="_blank"
            >
              <div className={styles.iconImageContainer}>
                <Image alt="note" quality={100} src={note} />
              </div>
              <div>
                <h2 className={styles.h2}>note</h2>
                <p className={styles.description}>
                  たわいもないことを書いています。
                </p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.amazon.co.jp/hz/wishlist/ls/35DAZ3JL3TEZZ"
              target="_blank"
            >
              <div className={clsx(styles.iconImageContainer, styles.amazon)}>
                <Image alt="Amazon" quality={100} src={amazon} />
              </div>
              <div>
                <h2 className={styles.h2}>Amazon ほしい物リスト</h2>
                <p className={styles.description}>送ってくれると嬉しいです。</p>
              </div>
            </a>
          </li>
        </ul>
        <footer className={styles.footer}>&copy; 2025 てり</footer>
      </div>
    </div>
  );
}
