function IconPdf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function ResumeDownloads({ faHref, enHref }) {
  return (
    <div className="dlSection" aria-label="دانلود رزومه">
      <div className="dlKicker">رزومه</div>

      <div className="dlRow2">
        <a className="dlBtn2" href={faHref} download onContextMenu={(e)=>e.preventDefault()}>
          <span className="dlIco"><IconPdf /></span>
          <span className="dlTxt">فارسی</span>
          <span className="dlSep" />
          <span className="dlIco2"><IconDownload /></span>
        </a>

        <a className="dlBtn2" href={enHref} download onContextMenu={(e)=>e.preventDefault()}>
          <span className="dlIco"><IconPdf /></span>
          <span className="dlTxt">English</span>
          <span className="dlSep" />
          <span className="dlIco2"><IconDownload /></span>
        </a>
      </div>
    </div>
  );
}
