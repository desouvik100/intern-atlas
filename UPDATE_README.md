# 📝 Update README with Live Link

After deploying to Railway, update your README to showcase your live app!

## Enhanced README.md

Replace the current README with this:

```markdown
# InternAtlas 🌍

> A complete internship discovery platform with secure authentication for students and employers

🚀 **Live Demo**: https://YOUR-APP.up.railway.app _(Update after Railway deployment)_

## ✨ Features

### For Students
- 🔐 Secure signup and login
- 📋 Personal dashboard
- 🔍 Browse internship opportunities
- 📱 Mobile-responsive design

### For Employers
- 🏢 Company profile management
- 📝 Post internship opportunities _(coming soon)_
- 👥 Manage applications _(coming soon)_
- ✅ Verification system

### Security & Authentication
- 🔒 bcrypt password hashing (12 rounds)
- 🍪 HttpOnly, SameSite cookies
- 🔑 SHA-256 session token hashing
- 🛡️ Role-based access control
- ⏰ 30-day session expiration
- 🚫 Ownership verification for resources

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

### Backend
- **API**: Next.js API Routes (Node.js runtime)
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: Custom bcrypt + session-based

### Deployment
- **Platform**: Railway
- **Database**: Neon PostgreSQL
- **CI/CD**: Auto-deploy on Git push

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/desouvik100/intern-atlas.git
   cd intern-atlas
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   
   Create `backend/.env`:
   ```env
   DATABASE_URL="your-postgresql-url"
   NODE_ENV="development"
   ```
   
   Create `frontend/.env.local`:
   ```env
   DATABASE_URL="your-postgresql-url"
   NODE_ENV="development"
   NEXT_PUBLIC_API_URL="http://localhost:3000"
   ```

4. **Run database migrations**
   ```bash
   cd backend
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. **Start development server**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Visit** http://localhost:3000

## 📖 Documentation

- **Setup Guide**: [`QUICKSTART.md`](QUICKSTART.md)
- **Authentication Docs**: [`AUTH_IMPLEMENTATION.md`](AUTH_IMPLEMENTATION.md)
- **Deployment Guide**: [`DEPLOY_NOW.md`](DEPLOY_NOW.md)
- **Railway Deployment**: [`DEPLOY_RAILWAY.md`](DEPLOY_RAILWAY.md)

## 🧪 Testing

### Manual Testing
1. Visit `/signup` and create a student account
2. Login with your credentials
3. Verify you're redirected to student dashboard
4. Logout and create an employer account
5. Test employer dashboard and profile page

### API Testing
See [`AUTH_IMPLEMENTATION.md`](AUTH_IMPLEMENTATION.md) for detailed API testing instructions.

## 🗂️ Project Structure

```
intern-atlas/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema
│   │   └── migrations/            # Database migrations
│   ├── src/
│   │   ├── auth.ts                # Authentication logic
│   │   ├── auth-helpers.ts        # Authorization helpers
│   │   ├── api.ts                 # API handlers
│   │   ├── internship-db.ts       # Database queries
│   │   └── types.ts               # TypeScript types
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/auth/          # Auth API routes
│   │   │   ├── signup/            # Signup page
│   │   │   ├── login/             # Login page
│   │   │   ├── student/           # Student pages
│   │   │   └── employer/          # Employer pages
│   │   └── components/            # React components
│   └── package.json
└── Documentation files...
```

## 🔒 Security Features

- ✅ Password hashing with bcrypt (12 rounds)
- ✅ Session tokens hashed with SHA-256
- ✅ HttpOnly cookies (XSS protection)
- ✅ SameSite=Lax (CSRF protection)
- ✅ Secure flag in production (HTTPS only)
- ✅ Server-side authorization checks
- ✅ Input validation (client + server)
- ✅ Generic error messages
- ✅ Role-based access control
- ✅ Resource ownership verification

## 📊 Database Schema

### Models
- **Student**: User accounts for students
- **Employer**: Company/employer accounts
- **Internship**: Internship postings
- **Application**: Student applications
- **AuthSession**: Secure session management
- **DatasetOption**: Dropdown options

### Key Features
- Unique email constraints
- Cascade deletion for sessions
- Optimized indexes for queries
- SSL-enabled connections

## 🚧 Roadmap

### Phase 1 (Completed) ✅
- [x] Student authentication
- [x] Employer authentication
- [x] Role-based dashboards
- [x] Protected API endpoints
- [x] Session management

### Phase 2 (In Progress)
- [ ] Email verification
- [ ] Password reset flow
- [ ] Employer internship posting
- [ ] Application management
- [ ] Student application tracking

### Phase 3 (Planned)
- [ ] Two-factor authentication
- [ ] OAuth integration (Google, LinkedIn)
- [ ] Advanced search and filters
- [ ] Email notifications
- [ ] Analytics dashboard

## 👨‍💻 Author

**Souvik De**
- GitHub: [@desouvik100](https://github.com/desouvik100)
- Project: [InternAtlas](https://github.com/desouvik100/intern-atlas)
- Live Demo: [Railway Deployment](https://YOUR-APP.up.railway.app)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Railway for seamless deployment
- Neon for PostgreSQL hosting
- Prisma for excellent ORM

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Souvik De
```

## 🎨 Add Screenshots (Optional)

Create a `screenshots` folder and add:
- Homepage
- Signup page
- Login page
- Student dashboard
- Employer dashboard

Then add to README:
```markdown
## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Authentication
![Signup](screenshots/signup.png)
![Login](screenshots/login.png)

### Dashboards
![Student Dashboard](screenshots/student-dashboard.png)
![Employer Dashboard](screenshots/employer-dashboard.png)
```

## 🏷️ GitHub Repository Settings

### About Section
- **Description**: "Complete internship platform with secure student and employer authentication"
- **Website**: Your Railway URL
- **Topics**: `nextjs`, `react`, `typescript`, `authentication`, `railway`, `prisma`, `postgresql`, `internships`, `bcrypt`, `tailwindcss`

### Social Preview
Create a nice banner image (1280x640px) showing:
- InternAtlas logo
- "Student & Employer Authentication"
- Tech stack icons
- Screenshot preview

---

**Update after deployment** with your actual Railway URL!
