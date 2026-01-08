import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .footer {
          background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
          padding: 4rem 1.5rem 2rem;
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, #a855f7, transparent);
        }

        .footer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          animation: fadeInUp 0.8s ease-out;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .footer-logo {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
        }

        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #f9fafb, #c7d2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 360px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a5b4fc;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.6);
          transform: translateY(-3px);
          color: #c7d2fe;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-column-title {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #f9fafb;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
        }

        .footer-link::before {
          content: '';
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 20px;
        }

        .footer-link:hover {
          color: #e2e8f0;
          transform: translateX(5px);
        }

        .footer-bottom {
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .footer-copyright {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #64748b;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.3);
          font-size: 0.8125rem;
          color: #7dd3fc;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7dd3fc;
          animation: pulse 2s ease-in-out infinite;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .legal-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #94a3b8;
        }

        @media screen and (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media screen and (max-width: 640px) {
          .footer {
            padding: 3rem 1rem 1.5rem;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-section">
              <div className="footer-logo">🎨</div>
              <h3 className="footer-brand-name">ArtGuardian</h3>
            </div>
            <p className="footer-description">
              A Web3 marketplace for original, non-replicable artworks—secured and verified on 
              the blockchain. Empowering artists and protecting collectors through transparent 
              ownership and immutable provenance.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Explore</h4>
            <a href="#Home" className="footer-link">Home</a>
            <a href="#About" className="footer-link">About</a>
            <a href="#Why" className="footer-link">Why ArtGuardian</a>
            <a href="/products" className="footer-link">Browse Artworks</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">For Creators</h4>
            <a href="#" className="footer-link">Mint Original Pieces</a>
            <a href="#" className="footer-link">On-Chain Provenance</a>
            <a href="#" className="footer-link">Royalties on Resales</a>
            <a href="#" className="footer-link">Artist Resources</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">Documentation</a>
            <a href="#" className="footer-link">Community</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} ArtGuardian. All rights reserved.
          </div>

          <div className="footer-badge">
            <span className="badge-dot"></span>
            <span>Secured by Blockchain</span>
          </div>

          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;