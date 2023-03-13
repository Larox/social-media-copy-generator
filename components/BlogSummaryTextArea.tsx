import style from "@/styles/TextArea.module.scss";
import { useState, ChangeEvent } from "react";
import getCopy from "@/services/openaiService";
import { Results } from "./Result";

export const BlogSummaryTextArea = (): JSX.Element => {
  const [summaryText, setSummaryText] = useState<string>("");
  const [copyResult, setCopyResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSummaryText(event.target.value);
  };

  const handleCreateCopy = async () => {
    if (summaryText) {
      setLoading(true);
      const genCopy = await getCopy(summaryText);
      setCopyResult(genCopy);
    } else {
      alert("Summary Text is needed!");
    }
  };

  return (
    <>
      <div className="divide-y divide-blue-900/25">
        <div className={style.box}>
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-cyan-600"
          >
            Blog Post Summary
          </label>
          <textarea
            id="message"
            rows="4"
            onChange={handleChange}
            className={style.textarea}
            placeholder="Write the blog post summary here..."
          ></textarea>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleCreateCopy}
          >
            Create Copy!
          </button>
        </div>
        {loading ? (
          <Results resultCopy={copyResult} loading={loading} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
