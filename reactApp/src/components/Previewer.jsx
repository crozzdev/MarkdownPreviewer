/* eslint-disable react/prop-types */
import { Header } from "./Header";
import './Previewer.css'
import { marked } from "marked";
import DOMPurify from "dompurify";

export const Previewer = ({ isExpanded, previewText, expandWindow }) => {

    const sanitizedHTML = DOMPurify.sanitize(marked(previewText, { gfm: true, breaks: true }));
    const containerClass = isExpanded ? "preview-container text-box expanded-window" : "preview-container text-box";

    return (
        <div className={containerClass}>
            <Header title="Previewer" isExpanded={isExpanded} expandWindow={expandWindow} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </div>
    )

}