import styles from "@/styles/Home.module.css";
import { BlogSummaryTextArea } from "@/components/BlogSummaryTextArea";

export default function Home() {
  return (
    <>
      <div className={` ${styles.center}`}>
        <BlogSummaryTextArea />
      </div>
    </>
  );
}
