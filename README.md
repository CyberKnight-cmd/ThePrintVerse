# ThePrintVerse - Custom Printing eCommerce Platform

**ThePrintVerse** is a modern **custom printing eCommerce platform** built with Next.js, Node.js, and MySQL. The application features a complete admin dashboard and is fully responsive, designed from scratch to serve the custom printing industry.

ThePrintVerse specializes in providing custom printing services including business cards, banners, brochures, and promotional materials. Our platform offers a seamless experience for customers to upload designs, customize products, and place orders with ease.

## Key Features

- Custom product design upload and preview
- Real-time order tracking
- Comprehensive admin dashboard
- Responsive design for all devices
- Secure payment processing
- User account management
- Product customization tools
- Order management system

## Technology Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL with Prisma ORM
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

### Environment Setup

1. Copy the example environment files:

```bash
cp .env.example .env
cp server/.env.example server/.env
```

2. Update the .env files with your actual values:
- Database connection string
- NextAuth secret (generate a secure random string)
- API URLs

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ThePrintVerseWebsite
```

2. Install dependencies:

```bash
npm install
cd server && npm install
```

3. Set up the database:

```bash
cd server
npx prisma migrate dev
```

4. Insert demo data:

```bash
cd utills
node insertDemoData.js
```

5. Start the development servers:

```bash
# Terminal 1 - Backend
cd server
node app.js

# Terminal 2 - Frontend
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ThePrintVerseWebsite/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
├── server/             # Backend API server
├── lib/                # Utility libraries
├── utils/              # Helper functions
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

## Contributing

We welcome contributions to ThePrintVerse! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.