/* eslint-disable react/prop-types */
import { Header } from "./Header";
import './Editor.css'


export const Editor = ({ isExpanded, expandWindow, renderMarkdown, initialText }) => {

    const containerClass = isExpanded ? "editor-container expanded-window" : "editor-container";

    return (
        <div className={containerClass}>
            <Header title="Editor" isExpanded={isExpanded} expandWindow={expandWindow} />
            <textarea className="text-box" onChange={renderMarkdown} name="editor" id="editor" title="editor-box" placeholder="" value={initialText}>
            </textarea>
        </div>

    )

}