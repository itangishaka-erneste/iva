<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>L'Éclat Salon & Spa Kigali | Luxury Hair, Braids & Wellness</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --font-heading: 'Outfit', system-ui, sans-serif;
      --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
      --bg: #090A0F;
      --surface: #131622;
      --surface-subtle: #1C2030;
      --border: #2A3048;
      --text-main: #F4F6FB;
      --text-muted: #9BA3BE;
      
      /* Instagram gradient palette */
      --insta-gradient: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
      --insta-pink: #dc2743;
      --insta-orange: #f09433;
      
      --gold: #F5A623;
      --brand-blue: #3B82F6;
      --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
    html.light {
      --bg: #F8FAFC;
      --surface: #FFFFFF;
      --surface-subtle: #F1F5F9;
      --border: #E2E8F0;
      --text-main: #0F172A;
      --text-muted: #64748B;
      --card-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text-main);
      font-family: var(--font-sans);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }
    h1, h2, h3, h4 { font-family: var(--font-heading); letter-spacing: -0.02em; }
    
    .app-view { display: none; width: 100%; min-height: 100vh; }
    .app-view.active { display: flex; flex-direction: column; }

    /* Top Navigation Header */
    .portal-header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    .brand { font-size: 22px; font-weight: 700; color: var(--text-main); text-decoration: none; font-family: var(--font-heading); }
    .brand span { 
      background: var(--insta-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 11px; text-transform: uppercase; letter-spacing: 2px; display: block; font-family: var(--font-sans); font-weight: 800;
    }
    
    .container { max-width: 1300px; margin: 0 auto; padding: 32px 24px; width: 100%; flex: 1; }

    /* Buttons & Form Inputs */
    .btn {
      padding: 10px 18px; font-size: 13px; font-weight: 600; border-radius: 10px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; border: 1px solid transparent; transition: all 0.2s;
      text-decoration: none; background: var(--surface-subtle); color: var(--text-main);
    }
    .btn-insta { background: var(--insta-gradient); color: #fff; box-shadow: 0 4px 15px rgba(220, 39, 67, 0.35); border: none; }
    .btn-insta:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-outline { border-color: var(--border); }
    .btn-outline:hover { border-color: var(--insta-orange); color: var(--insta-orange); }

    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; color: var(--text-main); }
    .form-input, select, textarea {
      width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--border);
      background: var(--surface-subtle); color: var(--text-main); font-family: var(--font-sans); font-size: 13px;
    }
    .form-input:focus { outline: 2px solid var(--insta-pink); border-color: transparent; }

    /* Hero Banner for Public User Landing */
    .hero-banner {
      background: linear-gradient(135deg, var(--surface) 0%, var(--surface-subtle) 100%);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px;
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
    }
    .hero-banner::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: var(--insta-gradient);
    }
    .hero-banner h1 { font-size: clamp(28px, 4vw, 42px); margin-bottom: 12px; }
    .hero-banner p { color: var(--text-muted); font-size: 15px; max-width: 650px; }

    /* Dashboard Navigation Tabs */
    .dashboard-tabs { display: flex; gap: 10px; border-bottom: 1px solid var(--border); margin-bottom: 24px; padding-bottom: 12px; flex-wrap: wrap; }
    .dash-tab { background: var(--surface-subtle); border: 1px solid var(--border); color: var(--text-muted); padding: 9px 18px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 13px; }
    .dash-tab.active { background: var(--insta-gradient); color: #fff; border-color: transparent; }
    .panel { display: none; }
    .panel.active { display: block; }

    .grid-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 16px; }
    .card-box { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 20px; box-shadow: var(--card-shadow); display: flex; flex-direction: column; justify-content: space-between; gap: 14px; }
    .empty-state { text-align: center; color: var(--text-muted); padding: 40px; border: 2px dashed var(--border); border-radius: 14px; }

    /* YouTube Style Feed with Instagram Gradient Accents */
    .yt-feed { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
    .yt-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: transform 0.2s; box-shadow: var(--card-shadow); }
    .yt-card:hover { transform: translateY(-3px); border-color: var(--insta-orange); }
    .yt-media-container { position: relative; width: 100%; aspect-ratio: 16/9; background: #000; }
    .yt-media-container.short-ratio { aspect-ratio: 9/16; max-height: 420px; margin: 0 auto; }
    .yt-media-container video, .yt-media-container img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .yt-details { padding: 16px; display: flex; gap: 12px; }
    .yt-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--insta-gradient); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #fff; flex-shrink: 0; font-size: 14px; }
    .yt-meta h3 { font-size: 15px; font-weight: 600; line-height: 1.4; margin-bottom: 4px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .yt-channel { font-size: 13px; color: var(--insta-pink); font-weight: 600; margin-bottom: 2px; }
    .yt-stats { font-size: 12px; color: var(--text-muted); }

    /* Workers Grid */
    .workers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
    .worker-badge { background: var(--insta-gradient); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: #fff; font-weight: 700; width: fit-content; }

    /* Custom Mouse Trail Effect */
    .trail-dot {
      position: fixed; width: 12px; height: 12px; border-radius: 50%;
      background: var(--insta-gradient); pointer-events: none; z-index: 99999;
      transform: translate(-50%, -50%); opacity: 0.8; transition: transform 0.1s ease, opacity 0.4s ease;
      box-shadow: 0 0 10px var(--insta-pink);
    }

    /* Popup Alerts & Modals */
    .popup-overlay {
      position: fixed; inset: 0; z-index: 9999; background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(6px); display: none; align-items: center; justify-content: center; padding: 20px;
    }
    .popup-card {
      background: var(--surface); border: 2px solid var(--insta-pink); border-radius: 20px;
      padding: 32px; width: 100%; max-width: 400px; text-align: center; box-shadow: 0 15px 40px rgba(220, 39, 67, 0.3);
    }
    .popup-card h3 { font-size: 22px; margin-bottom: 10px; background: var(--insta-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .popup-card p { color: var(--text-muted); font-size: 14px; margin-bottom: 24px; line-height: 1.5; }

    .modal-overlay {
      position: fixed; inset: 0; z-index: 1000; background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px); display: none; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-overlay.active { display: flex; }
    .modal-card {
      background: var(--surface); border: 1px solid var(--border); border-radius: 20px;
      width: 100%; max-width: 580px; max-height: 90vh; overflow-y: auto; padding: 32px; box-shadow: var(--card-shadow);
      position: relative;
    }
    .modal-close { position: absolute; top: 20px; right: 20px; background: transparent; border: none; font-size: 20px; color: var(--text-muted); cursor: pointer; }
  </style>
</head>
<body>

  <!-- Interactive Cursor Mouse Trail -->
  <div id="mouseTrailContainer"></div>

  <!-- Colorful Animated Popup System -->
  <div class="popup-overlay" id="popupAlertBox">
    <div class="popup-card">
      <h3 id="popupTitle">Notification</h3>
      <p id="popupMessage">Action completed successfully!</p>
      <button class="btn btn-insta" style="width: 100%; justify-content: center;" onclick="closePopupAlert()">Continue</button>
    </div>
  </div>


  <!-- ================= VIEW 1: PUBLIC USER LANDING & DISCOVERY PAGE (No Login Required) ================= -->
  <div id="userLandingView" class="app-view active">
    <header class="portal-header">
      <a href="#" class="brand">L'Éclat <span>Luxury Salon & Spa Kiyovu</span></a>
      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="btn btn-outline" onclick="toggleTheme()">🌓 Theme</button>
        <button class="btn btn-insta" onclick="openAdminLoginModal()">👑 Admin Portal</button>
      </div>
    </header>

    <div class="container">
      <!-- Welcome Hero Banner -->
      <div class="hero-banner">
        <h1>Bespoke Luxury Hair & Natural Care Sanctuary</h1>
        <p>Explore our YouTube-style salon media, watch transformation reels, meet our expert team of stylists, and book your appointment online instantly.</p>
      </div>

      <!-- User Navigation Tabs -->
      <div class="dashboard-tabs">
        <button class="dash-tab active" onclick="switchUserTab('userFeedPanel', this)">📺 Salon Feed (Videos, Shorts & Photos)</button>
        <button class="dash-tab" onclick="switchUserTab('userServicesPanel', this)">✨ Services & Online Booking</button>
        <button class="dash-tab" onclick="switchUserTab('userTeamPanel', this)">👥 Our Assigned Stylists & Workers</button>
      </div>

      <!-- YouTube & Instagram Style Media Feed Panel -->
      <div id="userFeedPanel" class="panel active">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Featured Shorts, Videos & Salon Moments</h2>
        <div id="userFeedGrid" class="yt-feed"></div>
      </div>

      <!-- Services & Booking Panel -->
      <div id="userServicesPanel" class="panel">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Book a Luxury Treatment</h2>
        <div id="userServicesGrid" class="grid-cards"></div>
      </div>

      <!-- Assigned Workers Team Panel -->
      <div id="userTeamPanel" class="panel">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Our Assigned Master Stylists & Staff</h2>
        <div id="userWorkersGrid" class="workers-grid"></div>
      </div>
    </div>
  </div>


  <!-- ================= VIEW 2: ADMINISTRATOR DASHBOARD (Protected) ================= -->
  <div id="adminView" class="app-view">
    <header class="portal-header">
      <a href="#" class="brand">L'Éclat <span>Admin Control Room</span></a>
      <div style="display: flex; gap: 12px; align-items: center;">
        <button class="btn btn-outline" onclick="toggleTheme()">🌓 Theme</button>
        <button class="btn btn-outline" onclick="exitAdminView()" style="color: #ef4444; border-color: rgba(239,68,68,0.3);">Exit Control Room</button>
      </div>
    </header>

    <div class="container">
      <div class="dashboard-tabs">
        <button class="dash-tab active" onclick="switchAdminTab('adminMediaPanel', this)">🎬 Publish Media (Shorts, Videos & Photos)</button>
        <button class="dash-tab" onclick="switchAdminTab('adminWorkersPanel', this)">👥 Manage Workers & Staff</button>
        <button class="dash-tab" onclick="switchAdminTab('adminServicesPanel', this)">✨ Manage Services Menu</button>
        <button class="dash-tab" onclick="switchAdminTab('adminBookingsPanel', this)">📅 Client Appointments</button>
      </div>

      <!-- Media Panel -->
      <div id="adminMediaPanel" class="panel active">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Publish Shorts, Long Videos & Photos</h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 24px; align-items: start;">
          <form onsubmit="adminUploadMedia(event)" style="background: var(--surface); padding: 20px; border-radius: 14px; border: 1px solid var(--border);">
            <h3 style="font-size: 16px; margin-bottom: 14px;">Upload Media Item</h3>
            <div class="form-group"><label>Title</label><input type="text" id="mediaTitle" class="form-input" required placeholder="Goddess Braids Reel"></div>
            <div class="form-group">
              <label>Media Format / Type</label>
              <select id="mediaType" class="form-input">
                <option value="longvideo">Long Video (Landscape Video)</option>
                <option value="short">Short (Vertical Reel / Short)</option>
                <option value="image">Photo / Transformation Image</option>
              </select>
            </div>
            <div class="form-group"><label>Choose File</label><input type="file" id="mediaFile" class="form-input" accept="video/*,image/*" required></div>
            <button type="submit" class="btn btn-insta" style="width: 100%; justify-content: center;">Publish to Public Feed</button>
          </form>
          <div>
            <h3 style="font-size: 16px; margin-bottom: 14px;">Published Media Items</h3>
            <div id="adminMediaList" class="grid-cards" style="margin-top:0;"></div>
          </div>
        </div>
      </div>

      <!-- Workers Panel -->
      <div id="adminWorkersPanel" class="panel">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Staff & Worker Management</h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 24px; align-items: start;">
          <form onsubmit="adminAddWorker(event)" style="background: var(--surface); padding: 20px; border-radius: 14px; border: 1px solid var(--border);">
            <h3 style="font-size: 16px; margin-bottom: 14px;">Register New Worker</h3>
            <div class="form-group"><label>Worker Full Name</label><input type="text" id="workerName" class="form-input" required placeholder="Diane Keza"></div>
            <div class="form-group"><label>Specialty / Role</label><input type="text" id="workerRole" class="form-input" required placeholder="Master Braider & Stylist"></div>
            <div class="form-group"><label>Assigned Schedule</label><input type="text" id="workerSchedule" class="form-input" required placeholder="Mon - Sat (09:00 - 18:00)"></div>
            <button type="submit" class="btn btn-insta" style="width: 100%; justify-content: center;">Assign Worker</button>
          </form>
          <div>
            <h3 style="font-size: 16px; margin-bottom: 14px;">Current Salon Team</h3>
            <div id="adminWorkersList" class="workers-grid"></div>
          </div>
        </div>
      </div>

      <!-- Services Panel -->
      <div id="adminServicesPanel" class="panel">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Salon Services Menu</h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 24px; align-items: start;">
          <form onsubmit="adminAddService(event)" style="background: var(--surface); padding: 20px; border-radius: 14px; border: 1px solid var(--border);">
            <h3 style="font-size: 16px; margin-bottom: 14px;">Add New Service</h3>
            <div class="form-group"><label>Service Title</label><input type="text" id="servTitle" class="form-input" required placeholder="Silk Press & Steam"></div>
            <div class="form-group"><label>Price (RWF)</label><input type="number" id="servPrice" class="form-input" required placeholder="35000"></div>
            <div class="form-group"><label>Duration</label><input type="text" id="servDuration" class="form-input" required placeholder="90 mins"></div>
            <button type="submit" class="btn btn-insta" style="width: 100%; justify-content: center;">Save Service</button>
          </form>
          <div>
            <h3 style="font-size: 16px; margin-bottom: 14px;">Active Offerings</h3>
            <div id="adminServicesList" class="grid-cards" style="margin-top:0;"></div>
          </div>
        </div>
      </div>

      <!-- Bookings Panel -->
      <div id="adminBookingsPanel" class="panel">
        <h2 style="font-size: 22px; margin-bottom: 16px;">Client Appointments Received</h2>
        <div id="adminBookingsList" class="grid-cards"></div>
      </div>
    </div>
  </div>


  <!-- Admin Login Modal Dialog -->
  <div class="modal-overlay" id="adminLoginModal">
    <div class="modal-card" style="max-width: 420px;">
      <button class="modal-close" onclick="closeModal('adminLoginModal')">✕</button>
      <div style="text-align: center; margin-bottom: 24px;">
        <h3 style="font-size: 24px; margin-bottom: 4px;">Admin Portal</h3>
        <p style="color: var(--text-muted); font-size: 12px;">Authorized salon staff authentication</p>
      </div>
      <form onsubmit="handleAdminLogin(event)">
        <div class="form-group">
          <label>Admin Email</label>
          <input type="email" id="adminEmailInput" class="form-input" placeholder="admin@leclat.rw" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" id="adminPassInput" class="form-input" placeholder="admin123 or 123456" required>
        </div>
        <button type="submit" class="btn btn-insta" style="width: 100%; justify-content: center; margin-top: 8px;">Access Control Room</button>
      </form>
    </div>
  </div>


  <!-- Comprehensive Booking Modal for Users -->
  <div class="modal-overlay" id="bookingModal">
    <div class="modal-card">
      <button class="modal-close" onclick="closeModal('bookingModal')">✕</button>
      <h3 style="font-size: 22px; margin-bottom: 4px;">Book Your Salon Session</h3>
      <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 20px;">Enter your details to reserve your treatment date and stylist.</p>

      <form id="bookingForm" onsubmit="handleBookingSubmit(event)">
        <div class="form-group">
          <label>Treatment Service</label>
          <input type="text" id="modalServiceName" class="form-input" readonly>
        </div>
        <div class="form-group">
          <label>Select Master Stylist / Worker</label>
          <select id="modalWorkerSelect" class="form-input" required></select>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label>Appointment Date</label>
            <input type="date" id="modalDateInput" class="form-input" required>
          </div>
          <div class="form-group">
            <label>Preferred Time</label>
            <select id="modalTimeSelect" class="form-input" required>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" id="modalNameInput" class="form-input" placeholder="e.g. Marie Uwase" required>
        </div>
        <div class="form-group">
          <label>Phone Number / WhatsApp</label>
          <input type="tel" id="modalPhoneInput" class="form-input" placeholder="+250 788 123 456" required>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" id="modalEmailInput" class="form-input" placeholder="client@example.com" required>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px;">
          <button type="button" class="btn btn-outline" onclick="closeModal('bookingModal')">Cancel</button>
          <button type="submit" class="btn btn-insta">Confirm Booking</button>
        </div>
      </form>
    </div>
  </div>


  <!-- JavaScript Application Controller -->
  <script>
    // Local Data State
    let services = JSON.parse(localStorage.getItem('leclat_services')) || [
      { id: '1', title: 'Signature Silk Press & Steam', price: '35,000 RWF', duration: '90 mins' },
      { id: '2', title: 'Artisan Knotless Goddess Braids', price: '45,000 RWF', duration: '180 mins' }
    ];

    let workers = JSON.parse(localStorage.getItem('leclat_workers')) || [
      { id: '1', name: 'Aline Uwase', role: 'Founder & Master Stylist', schedule: 'Mon - Sun (08:00 - 19:00)' },
      { id: '2', name: 'Diane Keza', role: 'Senior Braiding Artisan', schedule: 'Mon - Sat (09:00 - 18:00)' }
    ];

    let mediaFeed = JSON.parse(localStorage.getItem('leclat_media')) || [
      { id: '1', title: 'Kigali Luxury Silk Press Transformation', type: 'longvideo', url: 'https://www.w3schools.com/html/mov_bbb.mp4', date: '2 hours ago', views: '1.4K views' },
      { id: '2', title: 'Quick Braid Styling #Shorts', type: 'short', url: 'https://www.w3schools.com/html/mov_bbb.mp4', date: '1 day ago', views: '5.2K views' }
    ];

    let bookings = JSON.parse(localStorage.getItem('leclat_bookings')) || [];

    // Interactive Cursor Mouse Trail Logic
    const trailContainer = document.getElementById('mouseTrailContainer');
    const maxTrailDots = 12;
    let dots = [];

    for (let i = 0; i < maxTrailDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.opacity = (1 - i / maxTrailDots) * 0.7;
      trailContainer.appendChild(dot);
      dots.push({ x: 0, y: 0, el: dot });
    }

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateMouseTrail() {
      let currentX = mouseX;
      let currentY = mouseY;
      dots.forEach((d) => {
        d.x += (currentX - d.x) * 0.35;
        d.y += (currentY - d.y) * 0.35;
        d.el.style.left = `${d.x}px`;
        d.el.style.top = `${d.y}px`;
        currentX = d.x;
        currentY = d.y;
      });
      requestAnimationFrame(animateMouseTrail);
    }
    animateMouseTrail();

    // Custom Animated Popup System
    function showPopupAlert(title, message) {
      document.getElementById('popupTitle').innerText = title;
      document.getElementById('popupMessage').innerText = message;
      document.getElementById('popupAlertBox').style.display = 'flex';
    }
    function closePopupAlert() {
      document.getElementById('popupAlertBox').style.display = 'none';
    }

    window.onload = function() {
      const activeRole = localStorage.getItem('leclat_role');
      if (activeRole === 'admin') {
        showView('adminView');
      } else {
        showView('userLandingView');
      }
      renderAll();
    };

    function showView(viewId) {
      document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
      document.getElementById(viewId).classList.add('active');
    }

    function toggleTheme() {
      const html = document.documentElement;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
      }
    }

    // Modal Operations
    function openModal(id) { document.getElementById(id).classList.add('active'); }
    function closeModal(id) { document.getElementById(id).classList.remove('active'); }
    function openAdminLoginModal() { openModal('adminLoginModal'); }

    function handleAdminLogin(e) {
      e.preventDefault();
      const email = document.getElementById('adminEmailInput').value.trim();
      const pass = document.getElementById('adminPassInput').value.trim();

      if (email === 'admin@leclat.rw' && (pass === 'admin123' || pass === '123456')) {
        localStorage.setItem('leclat_role', 'admin');
        closeModal('adminLoginModal');
        showView('adminView');
        renderAll();
        showPopupAlert('Control Room Access', 'Signed into Administrator Dashboard.');
      } else {
        showPopupAlert('Access Denied', 'Invalid credentials! (Email: admin@leclat.rw / Password: admin123 or 123456)');
      }
    }

    function exitAdminView() {
      localStorage.removeItem('leclat_role');
      showView('userLandingView');
      showPopupAlert('Exited Admin Mode', 'Returned to public user portal.');
    }

    function switchUserTab(panelId, btnEl) {
      const parent = document.getElementById('userLandingView');
      parent.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      parent.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
      document.getElementById(panelId).classList.add('active');
      btnEl.classList.add('active');
    }

    function switchAdminTab(panelId, btnEl) {
      const parent = document.getElementById('adminView');
      parent.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      parent.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
      document.getElementById(panelId).classList.add('active');
      btnEl.classList.add('active');
    }

    // --- Admin Operations ---
    function adminAddWorker(e) {
      e.preventDefault();
      const name = document.getElementById('workerName').value;
      const role = document.getElementById('workerRole').value;
      const schedule = document.getElementById('workerSchedule').value;

      workers.push({ id: Date.now().toString(), name, role, schedule });
      localStorage.setItem('leclat_workers', JSON.stringify(workers));
      renderWorkers();
      e.target.reset();
      showPopupAlert('Worker Added', `${name} registered to salon team.`);
    }

    function deleteWorker(id) {
      workers = workers.filter(w => w.id !== id);
      localStorage.setItem('leclat_workers', JSON.stringify(workers));
      renderWorkers();
      showPopupAlert('Worker Removed', 'Staff member deleted.');
    }

    function adminUploadMedia(e) {
      e.preventDefault();
      const title = document.getElementById('mediaTitle').value;
      const type = document.getElementById('mediaType').value;
      const fileInput = document.getElementById('mediaFile');

      if (fileInput.files && fileInput.files[0]) {
        const url = URL.createObjectURL(fileInput.files[0]);
        mediaFeed.push({ id: Date.now().toString(), title, type, url, date: 'Just now', views: '1 view' });
        localStorage.setItem('leclat_media', JSON.stringify(mediaFeed));
        renderMediaFeed();
        e.target.reset();
        showPopupAlert('Media Published', `Published "${title}" to the public feed.`);
      }
    }

    function deleteMedia(id) {
      mediaFeed = mediaFeed.filter(m => m.id !== id);
      localStorage.setItem('leclat_media', JSON.stringify(mediaFeed));
      renderMediaFeed();
      showPopupAlert('Media Removed', 'Item deleted from feed.');
    }

    function adminAddService(e) {
      e.preventDefault();
      const title = document.getElementById('servTitle').value;
      const price = document.getElementById('servPrice').value + ' RWF';
      const duration = document.getElementById('servDuration').value;

      services.push({ id: Date.now().toString(), title, price, duration });
      localStorage.setItem('leclat_services', JSON.stringify(services));
      renderServices();
      e.target.reset();
      showPopupAlert('Service Saved', 'New service added to catalog.');
    }

    function deleteService(id) {
      services = services.filter(s => s.id !== id);
      localStorage.setItem('leclat_services', JSON.stringify(services));
      renderServices();
      showPopupAlert('Service Removed', 'Treatment removed.');
    }

    // Booking Handlers
    let activeBookingService = '';
    let activeBookingPrice = '';

    function openBookingModal(title, price) {
      activeBookingService = title;
      activeBookingPrice = price;
      document.getElementById('modalServiceName').value = `${title} (${price})`;
      
      const workerSel = document.getElementById('modalWorkerSelect');
      workerSel.innerHTML = workers.map(w => `<option value="${w.name}">${w.name} (${w.role})</option>`).join('');
      
      openModal('bookingModal');
    }

    function handleBookingSubmit(e) {
      e.preventDefault();
      const newBooking = {
        service: activeBookingService,
        price: activeBookingPrice,
        worker: document.getElementById('modalWorkerSelect').value,
        date: document.getElementById('modalDateInput').value,
        time: document.getElementById('modalTimeSelect').value,
        name: document.getElementById('modalNameInput').value,
        phone: document.getElementById('modalPhoneInput').value,
        email: document.getElementById('modalEmailInput').value
      };

      bookings.push(newBooking);
      localStorage.setItem('leclat_bookings', JSON.stringify(bookings));
      closeModal('bookingModal');
      renderBookings();
      showPopupAlert('Appointment Reserved! ✨', `Thank you ${newBooking.name}! Your appointment for ${newBooking.service} with ${newBooking.worker} on ${newBooking.date} at ${newBooking.time} is confirmed.`);
      document.getElementById('bookingForm').reset();
    }

    // --- Renderers ---
    function renderAll() {
      renderWorkers();
      renderMediaFeed();
      renderServices();
      renderBookings();
    }

    function renderWorkers() {
      const adminW = document.getElementById('adminWorkersList');
      const userW = document.getElementById('userWorkersGrid');

      const htmlW = workers.length === 0 ? '<p class="empty-state">No workers registered.</p>' : workers.map(w => `
        <div class="card-box">
          <div>
            <h3 style="font-size: 17px; margin-bottom: 2px;">${w.name}</h3>
            <div class="worker-badge" style="margin-bottom: 8px;">${w.role}</div>
            <p style="color: var(--text-muted); font-size: 12px;">🕒 ${w.schedule}</p>
          </div>
          ${localStorage.getItem('leclat_role') === 'admin' ? `<button class="btn btn-outline" style="padding: 6px; font-size: 11px; color: #ef4444;" onclick="deleteWorker('${w.id}')">Remove</button>` : ''}
        </div>
      `).join('');

      if (adminW) adminW.innerHTML = htmlW;
      if (userW) userW.innerHTML = htmlW;
    }

    function renderMediaFeed() {
      const adminM = document.getElementById('adminMediaList');
      const userFeed = document.getElementById('userFeedGrid');

      const adminHtml = mediaFeed.length === 0 ? '<p class="empty-state">No media items.</p>' : mediaFeed.map(m => `
        <div class="card-box">
          <div>
            <span style="font-size: 10px; text-transform: uppercase; color: var(--insta-orange); font-weight: bold;">[${m.type}]</span>
            <h3 style="font-size: 15px; margin: 4px 0 8px;">${m.title}</h3>
          </div>
          <button class="btn btn-outline" style="padding: 6px; font-size: 11px; color: #ef4444;" onclick="deleteMedia('${m.id}')">Delete</button>
        </div>
      `).join('');

      // YouTube-Style Media Feed
      const userHtml = mediaFeed.length === 0 ? '<p class="empty-state">No published videos or photos yet.</p>' : mediaFeed.map(m => `
        <div class="yt-card">
          <div class="yt-media-container ${m.type === 'short' ? 'short-ratio' : ''}">
            ${m.type === 'image' ? `<img src="${m.url}" alt="${m.title}">` : `<video controls src="${m.url}"></video>`}
          </div>
          <div class="yt-details">
            <div class="yt-avatar">E</div>
            <div class="yt-meta">
              <span class="yt-channel">L'Éclat Kigali Official</span>
              <h3>${m.title}</h3>
              <div class="yt-stats">${m.views} · ${m.date}</div>
            </div>
          </div>
        </div>
      `).join('');

      if (adminM) adminM.innerHTML = adminHtml;
      if (userFeed) userFeed.innerHTML = userHtml;
    }

    function renderServices() {
      const adminS = document.getElementById('adminServicesList');
      const userS = document.getElementById('userServicesGrid');

      const htmlS = services.length === 0 ? '<p class="empty-state">No services added.</p>' : services.map(s => `
        <div class="card-box">
          <div>
            <h3 style="font-size: 17px; margin-bottom: 4px;">${s.title}</h3>
            <div style="color: var(--insta-orange); font-weight: bold; font-family: monospace; margin-bottom: 6px;">${s.price}</div>
            <p style="color: var(--text-muted); font-size: 12px;">Duration: ${s.duration}</p>
          </div>
          ${localStorage.getItem('leclat_role') === 'admin' ? `<button class="btn btn-outline" style="padding: 6px; font-size: 11px; color: #ef4444;" onclick="deleteService('${s.id}')">Delete</button>` : `<button class="btn btn-insta" style="padding: 8px; font-size: 12px; width: 100%; justify-content: center;" onclick="openBookingModal('${s.title}', '${s.price}')">Book Appointment</button>`}
        </div>
      `).join('');

      if (adminS) adminS.innerHTML = htmlS;
      if (userS) userS.innerHTML = htmlS;
    }

    function renderBookings() {
      const adminB = document.getElementById('adminBookingsList');
      if (!adminB) return;

      const htmlB = bookings.length === 0 ? '<p class="empty-state">No appointments booked yet.</p>' : bookings.map(b => `
        <div class="card-box">
          <div>
            <h3 style="font-size: 16px; margin-bottom: 4px;">${b.service}</h3>
            <p style="color: var(--insta-orange); font-weight: bold;">${b.price}</p>
            <p style="color: var(--text-muted); font-size: 12px; margin-top: 6px;">👤 Client: <strong>${b.name}</strong> (${b.phone})</p>
            <p style="color: var(--text-muted); font-size: 12px;">✨ Stylist: <strong>${b.worker}</strong></p>
            <p style="color: var(--text-muted); font-size: 12px;">📅 Date: ${b.date} at ${b.time}</p>
          </div>
          <span style="font-size: 11px; background: rgba(220,39,67,0.15); color: var(--insta-pink); padding: 4px 8px; border-radius: 6px; width: fit-content; font-weight: bold;">Confirmed</span>
        </div>
      `).join('');

      adminB.innerHTML = htmlB;
    }
  </script>
</body>
</html>