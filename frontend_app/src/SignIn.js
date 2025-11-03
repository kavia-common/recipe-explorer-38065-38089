import React, { useEffect } from 'react';
import './signin-common.css';
import './signin-screen.css';

/**
 * PUBLIC_INTERFACE
 * SignIn component renders the Sign In screen aligned with the extracted Figma.
 * - Uses CSS variables and utility classes from signin-common.css and signin-screen.css
 * - References static images via /assets path (served from public)
 */
function SignIn() {
  // PUBLIC_INTERFACE
  useEffect(() => {
    // Autofocus email input for improved UX
    const email = document.getElementById('email');
    if (email && typeof email.focus === 'function') {
      try { email.focus(); } catch { /* no-op */ }
    }
  }, []);

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    // Minimal client-side validation
    if (!email.value.trim()) {
      email.setAttribute('aria-invalid', 'true');
      email.focus();
      return;
    }
    if (!password.value.trim()) {
      password.setAttribute('aria-invalid', 'true');
      password.focus();
      return;
    }
    // In a real app, integrate with backend using env vars:
    // REACT_APP_API_BASE, REACT_APP_BACKEND_URL etc. (not hardcoded).
    // For now, log and proceed.
    // eslint-disable-next-line no-console
    console.log('Sign In submitted', { email: email.value });
  };

  return (
    <main className="page">
      <div className="screen-container style-10" role="region" aria-label="Sign In">
        <div className="abs" style={{ left: 0, top: 0, width: 375, height: 44 }} aria-hidden="true">
          <div className="abs" style={{ left: 30, top: 12, width: 37, height: 18 }}>
            <span className="typo-67" style={{ display: 'block', width: '100%', height: '100%' }}>19:27</span>
          </div>
        </div>

        <header className="abs" style={{ left: 30, top: 94, width: 315, height: 75 }}>
          <h1 className="typo-60" style={{ margin: 0, height: 45 }}>Hello,</h1>
          <p className="typo-61" style={{ margin: 0, height: 30 }}>Welcome Back!</p>
        </header>

        <form onSubmit={handleSubmit} className="abs" style={{ left: 30, top: 226, width: 315 }} aria-label="Sign in form" noValidate>
          <div className="abs" style={{ left: 0, top: 0, width: 315, height: 81 }}>
            <label htmlFor="email" className="abs typo-66" style={{ left: 0, top: 0, width: 120, height: 21, display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="abs"
              autoComplete="username"
              placeholder="Enter Email"
              aria-required="true"
              style={{
                left: 0, top: 26, width: 315, height: 55, borderRadius: 10,
                border: '1.5px solid var(--color-d9d9d9)', padding: '0 20px',
                font: '400 14px/21px var(--typo-66-family)', color: 'var(--color-121212)'
              }}
            />
          </div>

          <div className="abs" style={{ left: 0, top: 111, width: 315, height: 81 }}>
            <label htmlFor="password" className="abs typo-66" style={{ left: 0, top: 0, width: 150, height: 21, display: 'block' }}>
              Enter Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="abs"
              autoComplete="current-password"
              placeholder="Enter Password"
              aria-required="true"
              style={{
                left: 0, top: 26, width: 315, height: 55, borderRadius: 10,
                border: '1.5px solid var(--color-d9d9d9)', padding: '0 20px',
                font: '400 14px/21px var(--typo-66-family)', color: 'var(--color-121212)'
              }}
            />
          </div>
        </form>

        <a href="#forgot" className="abs typo-62" style={{ left: 40, top: 438, width: 150, height: 17, textDecoration: 'none', color: 'var(--typo-62-color)' }}>
          Forgot Password?
        </a>

        <button
          type="submit"
          form="" /* handled by JS onClick to submit the form manually */
          className="abs style-11"
          data-action="signin"
          onClick={() => {
            const form = document.querySelector('form[aria-label="Sign in form"]');
            if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }}
          style={{
            left: 30, top: 480, width: 315, height: 60, border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            cursor: 'pointer', color: 'var(--typo-58-color)'
          }}
          aria-label="Sign In"
        >
          <span className="typo-58">Sign In</span>
        </button>

        <div className="abs" style={{ left: 90, top: 560, width: 195, height: 17 }}>
          <div className="style-28 abs" style={{ left: 0, top: 9, width: 50, height: 1 }}></div>
          <div className="abs" style={{ left: 57, top: 0, width: 81, height: 17 }}>
            <span className="typo-64" style={{ display: 'block', width: '100%', height: '100%' }}>Or Sign in With</span>
          </div>
          <div className="style-28 abs" style={{ left: 145, top: 9, width: 50, height: 1 }}></div>
        </div>

        <div className="abs" style={{ left: 131, top: 597, width: 44, height: 44 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: 'var(--color-ffffff)', boxShadow: 'var(--shadow-md)' }}></div>
          <img src="/assets/figma_image_22_221.png" width="24" height="24" alt="Google" className="abs" style={{ left: 10, top: 10 }} />
        </div>

        <div className="abs" style={{ left: 200, top: 597, width: 44, height: 44 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: 'var(--color-ffffff)', boxShadow: 'var(--shadow-md)' }}></div>
          <img src="/assets/figma_image_22_256.png" width="24" height="24" alt="Facebook" className="abs" style={{ left: 10, top: 10 }} />
        </div>

        <p className="abs typo-63" style={{ left: 99, top: 696, width: 200, height: 17, margin: 0 }}>
          Don’t have an account? <a href="#signup" className="typo-63" style={{ color: 'inherit', textDecoration: 'underline' }}>Sign up</a>
        </p>

        <div className="abs" style={{ left: 0, top: 778, width: 375, height: 34 }} aria-hidden="true">
          <div className="style-32 abs" style={{ left: 120, top: 21, width: 135, height: 5 }}></div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
