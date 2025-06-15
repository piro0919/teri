import { XMLParser } from "fast-xml-parser";
import App from "./_components/App";

async function getLatestNote(): Promise<{
  link: string;
  pubDate: string;
  title: string;
}> {
  const response = await fetch("https://note.com/katy_amanda2525/rss", {
    next: { revalidate: 86400 },
  });
  const text = await response.text();
  const parser = new XMLParser();
  const {
    rss: {
      channel: {
        item: [{ link, pubDate, title }],
      },
    },
  } = parser.parse(text);

  return { link, pubDate, title };
}

async function getLatestVideo(): Promise<{
  id: string;
  published: string;
  title: string;
}> {
  const response = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCWzNzo5i1YdFgVvINLVlMPg",
    {
      next: { revalidate: 86400 },
    },
  );
  const text = await response.text();
  const parser = new XMLParser();
  const {
    feed: {
      entry: [{ id, published, title }],
    },
  } = parser.parse(text);

  return { id, published, title };
}

export default async function Page(): Promise<React.JSX.Element> {
  const latestNote = await getLatestNote();
  const latestVideo = await getLatestVideo();

  return <App latestNote={latestNote} latestVideo={latestVideo} />;
}
