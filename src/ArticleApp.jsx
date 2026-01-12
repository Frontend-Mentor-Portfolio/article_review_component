import { useState } from 'react'
import './App.css'

import articleImg from '../images/drawers.jpg'
import avatar from '../images/avatar-michelle.jpg'
import iconShare from '../images/icon-share.svg'
import iconFacebook from '../images/icon-facebook.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'

function ArticleApp() {
  const [shareOpen, setShareOpen] = useState(false)

  return (
    <main className="app">
      <article className="card" aria-live="polite">
        <div className="card__media">
          <img src={articleImg} alt="Decorative drawers with plant and photo frame" />
        </div>
        <div className="card__content">
          <h1 className="card__title">
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
          <p className="card__excerpt">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
            I've got some simple tips to help you make any room feel complete.
          </p>

          <div className={`card__footer ${shareOpen ? 'share-active' : ''}`}>
            <div className="author">
              <img className="author__avatar" src={avatar} alt="Michelle Appleton" />
              <div className="author__meta">
                <p className="author__name">Michelle Appleton</p>
                <p className="author__date">28 Jun 2020</p>
              </div>
            </div>

            <div className="share">
              <button
                aria-expanded={shareOpen}
                aria-label="Share article"
                className={`share-btn ${shareOpen ? 'active' : ''}`}
                onClick={() => setShareOpen((v) => !v)}
              >
                <img src={iconShare} alt="" aria-hidden="true" />
              </button>

              <div className="share-popover" role="region" aria-label="Share options">
                <span className="share-popover__label">Share</span>
                <a className="share-popover__icon" href="#" aria-label="Share on Facebook">
                  <img src={iconFacebook} alt="" />
                </a>
                <a className="share-popover__icon" href="#" aria-label="Share on Twitter">
                  <img src={iconTwitter} alt="" />
                </a>
                <a className="share-popover__icon" href="#" aria-label="Share on Pinterest">
                  <img src={iconPinterest} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export default ArticleApp
