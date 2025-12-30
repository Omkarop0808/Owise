# Owise – Smart Expense Sharing App  
Inspired by Splitwise • Built using Next.js, Convex, Clerk & Inngest

Owise is a modern, real-time expense sharing application designed to help friends manage shared costs easily. 
  
The project focuses on simplicity, automation, and a clean user experience, with secure authentication and automated email reports powered by Inngest.

<img width="518" height="423" alt="Screenshot 2025-12-30 095344" src="https://github.com/user-attachments/assets/81215add-df87-402e-a457-b83e657e3f20" />
------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1526" height="854" alt="Screenshot 2025-12-30 094641" src="https://github.com/user-attachments/assets/26b1dfc2-a680-4666-8b2e-bd93c189a5d3" />
<img width="832" height="790" alt="Screenshot 2025-12-30 095257" src="https://github.com/user-attachments/assets/0465b968-a9d7-4304-be05-d3c40bbf44c2" />





## 🚀 Features

### 🔹 1. Group Expense Tracking  
Create groups, add members, and track shared payments effortlessly with equal, percentage spliting and also exact amount involved in splitting.

### 🔹 2. Smart Bill Splitting  
Supports equal split, custom split, manual amount entry.

### 🔹 3. Real-Time Sync (Convex)  
Expense updates, settlements, and group activity sync instantly for all members and records all the settlements.

### 🔹 4. Secure User Authentication (Clerk)  
Fast login/signup with social login, JWT-based backend validation.

### 🔹 5. Dashboard Overview  
A clean summary showing:  
- Total expenses  
- Split balances  
- Who owes whom  
- Recent activity and settlements  

### 🔹 6. Automated Email Reports (Powered by Inngest)  
Users receive **Daily, Weekly, or Monthly** email summaries including:  
- Total spent  
- Group-wise breakdown  
- Amount owed/owed to you  
- Latest transactions  
Inngest handles the scheduling, background jobs, and reliability.

### 🔹 7. Clean UI with Tailwind + ShadCN  
Responsive, simple, and modern interface optimized for mobile and desktop.

---

## 🏗️ Tech Stack

### **Frontend**
- Next.js   
- React 
- Tailwind CSS  
- ShadCN UI Components  

### **Backend**
- Convex (database + serverless functions)  
- Convex queries, mutations, actions  
- Real-time updates  

### **Authentication**
- Clerk (OAuth, email login, JWT validation)

### **Automations**
- Inngest (scheduled workflows & email report generation)  
- Resend  for sending emails  

---

## 🔧 Environment Variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CONVEX_DEPLOY_KEY
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=
CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

RESEND_API_KEY=
GEMINI_API_KEY=





