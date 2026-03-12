## ServiceHub – Home Services Booking Platform

ServiceHub is a modern, responsive web app for booking home services such as AC repair, plumbing, cleaning, and electrical maintenance. Users can browse services, create bookings, pay securely with Stripe, and receive confirmation emails. Admins can manage users, review all bookings, and confirm paid requests.

**Live demo**: [`https://fix-now-client.vercel.app/`](https://fix-now-client.vercel.app/)

---

### Tech stack

- **Frontend framework**: `React` (Vite)
- **Routing**: `react-router` v7
- **Styling**: `Tailwind CSS` v4 + custom CSS animations
- **State & hooks**: React hooks (`useState`, `useEffect`, custom hooks)
- **HTTP client**: `axios`
- **Auth**: `Firebase Authentication` (email/password)
- **Notifications**: `sonner` toast system
- **Payments**: `Stripe` Checkout (handled by backend)
- **API backend**: Node/Express (assumed, used via REST endpoints)

---

### How to run

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Configure environment**
   - Create a `.env` file in the project root with your Firebase config:
     ```bash
     VITE_apiKey=...
     VITE_authDomain=...
     VITE_projectId=...
     VITE_storageBucket=...
     VITE_messagingSenderId=...
     VITE_appId=...
     ```
3. **Start the dev server**
   ```bash
   npm run dev
   ```
4. Make sure your backend server (Stripe + bookings + users APIs) is running at `http://localhost:3000`.

---

### Test accounts & flows

#### 1. Admin role

- **Email**: `admin@gamil.com`  
- **Password**: `123456`

Flow:
- Log in with the admin credentials.
- Use the **Admin** tab in the navbar.
- In the **Manage users** tab:
  - See a table of all registered users.
  - Use **Make admin** to promote a user.
  - Use **Delete** to remove a user.
- In the **Confirm request** tab:
  - See **paid** bookings with status `pending`.
  - Use **Confirm booking** to change status from `pending` to `confirmed`.

> The admin views rely on backend endpoints such as `GET /users`, `PATCH /users/:email/role`, `DELETE /users/:email`, `GET /my-books/:email`, and `PATCH /booking/:id/status`.

#### 2. Normal user

You can test as a normal user with **any valid email**:

1. **Register**
   - Go to `/register`.
   - Use your own email (for example `you@example.com`) and a password.
   - On submit:
     - A Firebase auth user is created.
     - A corresponding user document is created via `POST /users`.
2. **Book a service**
   - Navigate to the **Services** page.
   - Use the search and service cards to find a service.
   - Click **Book now** → confirm the cost in the modal.
   - The app calls `POST /booking` to create a booking.
3. **Pay for a booking**
   - Go to **My Booking** (`/my-booking`).
   - Click **Pay now** to start a Stripe Checkout session (`POST /create-checkout-session`).
   - Complete payment in Stripe and return to `/my-booking`.
   - Frontend calls `PATCH /payment-success?session_id=...` to confirm payment and refresh bookings.
4. **Email confirmation**
   - The backend should send an email after successful payment (via a mailer like `nodemailer`).
   - You should receive a booking confirmation email at the address you used to register.

---

### Main features

- **Responsive navbar** with:
  - Logo, Home, Services, My Booking, and conditional Admin link (only for admin role).
  - Auth-aware actions (Login/Logout).
- **Animated hero and home sections**:
  - NewHero with scroll animations and bobbing filter chips.
  - Count-up metrics and “Why choose us” cards.
- **Services page**:
  - Searchable list of services.
  - Service cards with confirmation modal before booking.
- **My Booking page**:
  - Table of bookings with payment status.
  - **Pay now** (Stripe) and **Cancel** buttons.
  - Auto refresh and status update after successful payment.
- **Admin dashboard**:
  - Tabs for **Manage users** and **Confirm request**.
  - Users table with **Make admin / Delete** actions.
  - Table of **paid + pending** bookings with **Confirm booking** button.
- **Auth pages**:
  - Login and Register with subtle scroll-in motion and modern cards.

---

### Project structure (frontend)

High-level structure:

- `src/`
  - `main.jsx` – React entry point.
  - `routes/routes.jsx` – App routes (`/`, `/services`, `/my-booking`, `/admin`, `/login`, `/register`, `*`).
  - `layout/RootLayout.jsx` – Global layout with `Navbar`, `Footer`, and `Toaster`.
  - `firebase/` – Firebase initialization (`firebase.init.js`).
  - `Context/AuthContext/` – Auth provider and context.
  - `Hook/`
    - `useAuth.jsx` – Access auth context.
    - `useAxios.jsx` – Axios instance for API calls.
    - `useRole.jsx` – Fetch user role from `/users/:email/role`.
  - `components/`
    - `RevealOnScroll.jsx` – IntersectionObserver-based scroll animations.
    - `Loader/` – Global loading animation.
  - `pages/`
    - `Home/` – Landing page and sections (`NewHero`, `HowItWork`, `ServiceCount`, `WhyChooseUS`, `FQA`).
    - `Services/` – Services listing, cards, and booking flow.
    - `MyBooking/` – User bookings table with payment and cancel actions.
    - `Auth/` – `Login` and `Register` pages.
    - `Admin/` – Admin dashboard (manage users, confirm requests).
    - `Common/` – Shared UI like `Navbar` and `Footer`.
    - `NotFound/` – 404 page.

---

### Notes

- This repo contains only the **frontend**. The backend must implement:
  - User, booking, and role management endpoints (`/users`, `/users/:email/role`, `/booking`, `/booking/:id`, `/booking/:id/status`, `/my-books/:email`, `/payment-success`, `/create-checkout-session`).
  - Stripe integration and email sending on successful payment.

