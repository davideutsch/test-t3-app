import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { RouterOutputs } from "../utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-case-100 card mt-5 border border-gray-200 shadow-xl">
      <div
        className={`collapse-arrow ${
          isExpanded ? "collapse-open" : ""
        } collapse`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="collapse-title text-xl font-bold">{note.title}</div>
        <div className="collapse-content">
          <article className="prose lg:prose-xl">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </article>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn btn-warning btn-xs px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
