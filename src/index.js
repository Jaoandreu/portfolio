import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className="wrapper">
        <div className="container-footer">
          <form name="contact" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <div className="reach-out">Got a problem to solve?</div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="10" required placeholder="Message"></textarea>
            </div>
            <button className="submit-btn" type="submit">Let's Solve It</button>
          </form>
          <div className="right">
          </div>
          </div>

          </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
