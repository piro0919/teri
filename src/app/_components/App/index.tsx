"use client";
import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import amazon from "./_static/amazon.png";
import note from "./_static/note.png";
import profile from "./_static/profile.jpg";
import twitcasting from "./_static/twitcasting.png";
import styles from "./style.module.css";

export type AppProps = {
  latestNote: {
    link: string;
    pubDate: string;
    title: string;
  };
  latestVideo: {
    id: string;
    published: string;
    title: string;
  };
};

export default function App({
  latestNote,
  latestVideo,
}: AppProps): React.JSX.Element {
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
            <p className={styles.profile}>なんにもできないアラサーです。</p>
          </div>
        </header>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div
              className={styles.link}
              onClick={() => window.open("https://x.com/pypynanon", "_blank")}
            >
              <SocialIcon
                as="div"
                borderRadius="0"
                className={styles.iconImageContainer}
                url="https://x.com/pypynanon"
              />
              <div className={styles.detailContainer}>
                <h2 className={styles.h2}>X</h2>
                <p className={styles.description}>つぶやき</p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://twitcasting.tv/c:tytou"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                className={clsx(styles.iconImageContainer, styles.twitcasting)}
              >
                <Image alt="ツイキャス" quality={100} src={twitcasting} />
              </div>
              <div className={styles.detailContainer}>
                <h2 className={styles.h2}>ツイキャス</h2>
                <p className={styles.description}>おしゃべり</p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              onClick={(e) => {
                if (e.target instanceof HTMLAnchorElement) return;

                window.open("https://www.youtube.com/@nanami_rii", "_blank");
              }}
              className={styles.link}
            >
              <SocialIcon
                as="div"
                borderRadius="0"
                className={styles.iconImageContainer}
                url="https://www.youtube.com/@nanami_rii"
              />
              <div className={styles.detailContainer}>
                <h2 className={styles.h2}>YouTube</h2>
                <p className={styles.description}>七海りぃ</p>
                <a
                  className={styles.externalLink}
                  href={`https://www.youtube.com/watch?v=${latestVideo.id.split(":")[2]}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {`${dayjs(latestVideo.published).format("YYYY.MM.DD")} ${latestVideo.title}`}
                </a>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <div
              onClick={(e) => {
                if (e.target instanceof HTMLAnchorElement) return;

                window.open("https://note.com/katy_amanda2525", "_blank");
              }}
              className={styles.link}
            >
              <div className={styles.iconImageContainer}>
                <Image alt="note" quality={100} src={note} />
              </div>
              <div className={styles.detailContainer}>
                <h2 className={styles.h2}>note</h2>
                <p className={styles.description}>考えていること</p>
                <a
                  className={styles.externalLink}
                  href={latestNote.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {`${dayjs(latestNote.pubDate).format("YYYY.MM.DD")} ${latestNote.title}`}
                </a>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href="https://www.amazon.co.jp/hz/wishlist/ls/35DAZ3JL3TEZZ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={clsx(styles.iconImageContainer, styles.amazon)}>
                <Image alt="Amazon" quality={100} src={amazon} />
              </div>
              <div className={styles.detailContainer}>
                <h2 className={styles.h2}>Amazon ほしい物リスト</h2>
                <p className={styles.description}>生活</p>
              </div>
            </a>
          </li>
        </ul>
        <footer className={styles.footer}>&copy; 2025 てり</footer>
      </div>
    </div>
  );
}
