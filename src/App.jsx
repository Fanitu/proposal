import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Fata Normal', cost: '45 ETB', price: '120 ETB', profit: '75 ETB' },
    { name: 'Fata Special', cost: '65 ETB', price: '160 ETB', profit: '95 ETB' },
    { name: 'Normal Toast', cost: '25 ETB', price: '60 ETB', profit: '35 ETB' },
    { name: 'Special Toast', cost: '35 ETB', price: '80 ETB', profit: '45 ETB' },
    { name: 'Egg Sandwich', cost: '40 ETB', price: '90 ETB', profit: '50 ETB' },
    { name: 'Normal Ful', cost: '50 ETB', price: '110 ETB', profit: '60 ETB' },
    { name: 'Special Ful', cost: '70 ETB', price: '150 ETB', profit: '80 ETB' },
    { name: 'One Litre Drink', cost: '30 ETB', price: '70 ETB', profit: '40 ETB' },
  ];

  const features = [
    { emoji: '💰', title: 'Automated Profit Calculation', desc: 'Know exact daily profit without manual math. Revenue - COGS = Real Profit.' },
    { emoji: '📅', title: 'Date-Based Grouping', desc: 'Compare Monday vs Tuesday, Week 1 vs Week 2. Spot trends instantly.' },
    { emoji: '🔍', title: 'Per-Order Visibility', desc: 'See which specific orders generated the most profit. Identify top-selling items.' },
    { emoji: '💾', title: 'Historical Data Storage', desc: 'Review any past date instantly. No lost receipts, no corrupted files.' },
    { emoji: '⚙️', title: 'COGS Management', desc: 'Update ingredient costs anytime. Future orders adjust automatically.' },
    { emoji: '📱', title: 'Works on Any Device', desc: 'Computer, tablet, or phone—only needs internet and a browser.' },
    { emoji: '☁️', title: 'Secure Cloud Backup', desc: 'Data stored on MongoDB. Never lose your business records.' },
    { emoji: '🚀', title: 'Lightning Fast', desc: 'Hosted on Vercel. Pages load instantly, even on slow connections.' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Shop<span>Manager</span></span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('problem')}>Problem</button>
            <button onClick={() => scrollToSection('how')}>How It Works</button>
            <button onClick={() => scrollToSection('features')}>Features</button>
            <button onClick={() => scrollToSection('pricing')}>Pricing</button>
            <button onClick={() => scrollToSection('demo')}>Demo</button>
            <button className="nav-cta" onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
          
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">🇪🇹 Ethiopian Fast-Food Solution</span>
            <h1 className="hero-title">
              Know Your <span className="gradient-text">Exact Profit</span> Every Single Day
            </h1>
            <p className="hero-subtitle">
              Automated Order Tracking & Profit Analytics for Fata, Ful, and Sandwich Shops
            </p>
            <p className="hero-description">
              Stop calculating profits manually. Know exactly how much you earn on every plate—automatically. 
              No spreadsheets. No calculators. Just real numbers.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                📋 Request a Demo
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('pricing')}>
                💰 View Pricing
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Automated</span>
              </div>
              <div className="stat">
                <span className="stat-number">10min</span>
                <span className="stat-label">Setup Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Cloud Access</span>
              </div>
            </div>
          </div>
          
          <div className="hero-preview">
            <div className="dashboard-card">
              <div className="card-header">
                <span className="card-title">📊 Today's Summary</span>
                <span className="card-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-box-label">Total Orders</span>
                  <span className="stat-box-value">47</span>
                </div>
                <div className="stat-box">
                  <span className="stat-box-label">Revenue</span>
                  <span className="stat-box-value">5,640 ETB</span>
                </div>
                <div className="stat-box">
                  <span className="stat-box-label">COGS</span>
                  <span className="stat-box-value">2,115 ETB</span>
                </div>
                <div className="stat-box highlight">
                  <span className="stat-box-label">Net Profit</span>
                  <span className="stat-box-value profit">3,525 ETB</span>
                </div>
              </div>
              <div className="order-table">
                <div className="table-header">
                  <span>Item</span>
                  <span>Price</span>
                  <span>COGS</span>
                  <span>Profit</span>
                </div>
                <div className="table-row">
                  <span>Fata Normal ms5</span>
                  <span>240 ETB</span>
                  <span>90 ETB</span>
                  <span className="profit-positive">150 ETB</span>
                </div>
                <div className="table-row">
                  <span>Special Ful</span>
                  <span>150 ETB</span>
                  <span>70 ETB</span>
                  <span className="profit-positive">80 ETB</span>
                </div>
                <div className="table-row">
                  <span>Egg Sandwich</span>
                  <span>90 ETB</span>
                  <span>40 ETB</span>
                  <span className="profit-positive">50 ETB</span>
                </div>
                <div className="table-row">
                  <span>Special Fata</span>
                  <span>160 ETB</span>
                  <span>65 ETB</span>
                  <span className="profit-positive">95 ETB</span>
                </div>
              </div>
              <div className="card-footer">
                <span>🔗 Demo: basic-managment.vercel.app</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">⚠️ The Challenge</span>
            <h2>What's Costing You Money Right Now?</h2>
            <p className="section-subtitle">Most fast-food owners face these three critical problems daily.</p>
          </div>
          
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🧮</div>
              <h3>Manual Calculation Errors</h3>
              <p>Staff miscalculate totals daily. Your profit is estimated, never exact.</p>
              <div className="impact-badge">💰 Average loss: 200+ ETB/day</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h3>No Item-Level Visibility</h3>
              <p>Which makes more profit—Fata or Ful? You can't answer accurately.</p>
              <div className="impact-badge">📊 Missed menu optimization</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📄</div>
              <h3>Lost Historical Data</h3>
              <p>Paper receipts disappear. You can't compare Tuesday to Monday.</p>
              <div className="impact-badge">🔍 Zero business intelligence</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="how">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">⚡ Simple & Powerful</span>
            <h2>How The System Works</h2>
            <p className="section-subtitle">Three simple steps. Zero technical knowledge required.</p>
          </div>
          
          <div className="steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-card">
                <h3>One-Time Setup</h3>
                <p>You provide the Cost of Goods (COGS) for each menu item. We input it once.</p>
                <div className="step-example">
                  <strong>Example:</strong> Fata Normal costs 45 ETB to make → sells for 120 ETB
                </div>
              </div>
            </div>
            <div className="step-connector">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-card">
                <h3>Daily Order Entry</h3>
                <p>Staff selects items from the menu and submits orders through a clean interface.</p>
                <div className="step-example">
                  <strong>Speed:</strong> Less than 10 seconds per order
                </div>
              </div>
            </div>
            <div className="step-connector">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-card">
                <h3>Instant Reporting</h3>
                <p>Admin Panel shows all orders grouped by date with automatic profit calculation.</p>
                <div className="step-example">
                  <strong>Result:</strong> Zero math required. See profit instantly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">✨ Key Benefits</span>
            <h2>Everything You Need to Track Profit</h2>
            <p className="section-subtitle">Designed specifically for Ethiopian fast-food businesses.</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-emoji">{feature.emoji}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo / Sample Data */}
      <section id="demo" className="demo">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📋 Sample Data</span>
            <h2>Example Menu Items & Profit Margins</h2>
            <p className="section-subtitle">See how the system calculates profit for each item.</p>
          </div>
          
          <div className="table-wrapper">
            <table className="menu-table">
              <thead>
                <tr>
                  <th>Menu Item</th>
                  <th>Cost to Make</th>
                  <th>Selling Price</th>
                  <th>Profit Per Item</th>
                  <th>Margin</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.cost}</td>
                    <td>{item.price}</td>
                    <td className="profit-cell">{item.profit}</td>
                    <td>
                      <span className="margin-badge">
                        {Math.round((parseInt(item.profit) / parseInt(item.price)) * 100)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">
            *These are example values. Your actual COGS will be configured during setup.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🆚 The Difference</span>
            <h2>Why Choose Us Over Paper or Excel?</h2>
          </div>
          
          <div className="comparison-table">
            <div className="comparison-row header">
              <span>Feature</span>
              <span>📄 Paper</span>
              <span>📊 Excel</span>
              <span className="highlight-col">✅ Our System</span>
            </div>
            <div className="comparison-row">
              <span>Setup Time</span>
              <span>None</span>
              <span>Hours of formulas</span>
              <span className="highlight-col">30 minutes</span>
            </div>
            <div className="comparison-row">
              <span>Daily Effort</span>
              <span>Manual addition</span>
              <span>Manual data entry</span>
              <span className="highlight-col">Automated</span>
            </div>
            <div className="comparison-row">
              <span>Error Risk</span>
              <span>High</span>
              <span>Medium</span>
              <span className="highlight-col">Low</span>
            </div>
            <div className="comparison-row">
              <span>Historical Access</span>
              <span>Lost receipts</span>
              <span>File corruption</span>
              <span className="highlight-col">Instant cloud</span>
            </div>
            <div className="comparison-row">
              <span>Staff Training</span>
              <span>None</span>
              <span>Difficult</span>
              <span className="highlight-col">10 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💵 Simple Pricing</span>
            <h2>Choose Your Plan</h2>
            <p className="section-subtitle">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Monthly</h3>
              <div className="price">1,500 <span>ETB</span></div>
              <div className="price-period">per month</div>
              <ul className="pricing-features">
                <li>✓ Full system access</li>
                <li>✓ Automatic data backup</li>
                <li>✓ Email support</li>
                <li>✓ Free updates</li>
              </ul>
              <button className="btn-pricing" onClick={() => scrollToSection('contact')}>Get Started</button>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Annual</h3>
              <div className="price">15,000 <span>ETB</span></div>
              <div className="price-period">per year</div>
              <div className="savings">Save 3,000 ETB</div>
              <ul className="pricing-features">
                <li>✓ Everything in Monthly</li>
                <li>✓ Priority support</li>
                <li>✓ 2 months free</li>
                <li>✓ Early feature access</li>
              </ul>
              <button className="btn-pricing featured-btn" onClick={() => scrollToSection('contact')}>Get Started</button>
            </div>
            
            <div className="pricing-card">
              <h3>Lifetime</h3>
              <div className="price">20,000 <span>ETB</span></div>
              <div className="price-period">one-time payment</div>
              <ul className="pricing-features">
                <li>✓ Lifetime access</li>
                <li>✓ No recurring fees</li>
                <li>✓ Basic setup included</li>
                <li>✓ 1 year support</li>
              </ul>
              <button className="btn-pricing" onClick={() => scrollToSection('contact')}>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">⏱️ Quick Setup</span>
            <h2>Implementation Timeline</h2>
            <p className="section-subtitle">From sign-up to live in under 2 days.</p>
          </div>
          
          <div className="timeline-steps">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <h4>Setup</h4>
              <p className="timeline-duration">1 Day</p>
              <p>Input your menu items and COGS values</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <h4>Training</h4>
              <p className="timeline-duration">1 Hour</p>
              <p>Brief staff training on order entry</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <h4>Go Live</h4>
              <p className="timeline-duration">Immediate</p>
              <p>System ready for use same day</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <h4>Support</h4>
              <p className="timeline-duration">Ongoing</p>
              <p>Available via phone/Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-card">
            <h2>Ready to Know Your Exact Daily Profit?</h2>
            <p>Stop guessing. Start knowing. Join Ethiopian fast-food owners who track every birr.</p>
            
            <div className="contact-buttons">
              <button className="btn-contact-primary">
                📞 Schedule a Free Demo
              </button>
              <button className="btn-contact-secondary">
                💬 Chat on Telegram
              </button>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>fanubahta@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+251 932743247</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <span>basic-managment.vercel.app</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">🍽️ ShopManager</span>
              <p>Automated profit tracking for Ethiopian fast-food businesses.</p>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollToSection('home')}>Home</button>
              <button onClick={() => scrollToSection('features')}>Features</button>
              <button onClick={() => scrollToSection('pricing')}>Pricing</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Shop Management System. All rights reserved.</p>
            <p className="footer-tagline">🇪🇹 Know Your Profit. Grow Your Business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;