function ArticleCard() {
  // ... existing code (imports, props, etc.) ...

  // NEW: local state for toggling the tooltip
  const [showTooltip, setShowTooltip] = React.useState(false);

  const toggleShare = () => setShowTooltip((v) => !v);

  // ... existing code (layout wrappers, image, content) ...

  return (
    <article className="article-card">
      {/* ... existing article header, image, and text ... */}

      {/* EDIT: Share controls anchored bottom-right */}
      <div className="share-controls">
        {/* Tooltip */}
        {showTooltip && (
          <div className="share-tooltip" role="dialog" aria-label="Share options">
            <span className="share-label">SHARE</span>
            <div className="share-icons">
              {/* Replace src paths with your assets */}
              <a href="#" aria-label="Share on Facebook">
                <img src="/assets/icon-facebook.svg" alt="" />
              </a>
              <a href="#" aria-label="Share on Twitter">
                <img src="/assets/icon-twitter.svg" alt="" />
              </a>
              <a href="#" aria-label="Share on Pinterest">
                <img src="/assets/icon-pinterest.svg" alt="" />
              </a>
            </div>
          </div>
        )}

        {/* Share button */}
        <button
          type="button"
          className={`share-button ${showTooltip ? "active" : ""}`}
          aria-expanded={showTooltip}
          aria-controls="share-tooltip"
          onClick={toggleShare}
        >
          {/* Replace with your share SVG */}
          <img src="/assets/icon-share.svg" alt="Share" />
        </button>
      </div>

      {/* ... existing code (author block, etc.) ... */}
    </article>
  );
}