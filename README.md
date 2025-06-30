# 📦 InventoSum 🏪

**A SaaS for small businesses still managing inventory and sales with paper, WhatsApp, or Excel.**  
InventoSum is a simple yet powerful and accessible solution to digitize operations and boost the growth of bookstores and accessory shops.

---

## 🧠 Business Idea

### 🔍 Problem

Many small businesses in Mexico and Latin America still manage their **inventory, sales, and customer data** using inefficient methods like paper, WhatsApp, or Excel. This leads to:

- Inventory losses.
- Frequent human errors.
- No clear visibility on earnings.
- Limited potential for growth or order.

---

### 💡 Solution

InventoSum is a **micro ERP** SaaS tool with a friendly, intuitive interface designed for non-technical users, accessible from any device (web + mobile).

#### Core Features:

- 📦 **Inventory control**
- 💸 **Sales tracking**
- 👥 **Customer management**
- 🔔 **Automated notifications**
- 📊 **Basic reports**: revenue, top-selling products, low stock alerts

> **"Track your products, record your sales, and know your profits—without leaving WhatsApp."**

---

## 🎯 Initial Focus

### 🛍️ Target Niche

**Bookstores and accessory shops**, because they:

- Sell over-the-counter or through social media (often WhatsApp).
- Handle fast-moving products and recurring customers.
- Need clear insight into product availability and earnings.

---

## 🚀 MVP – Minimum Viable Product

### 1. Inventory Module

- Register products: name, code, stock, purchase & sale price.
- Future support for barcode scanning.
- Low-stock alerts.

### 2. Sales Module

- Quick sales creation by selecting products.
- Automatically adjusts stock.
- Records total amount, payment method, date.
- Reports by day, week, month.

### 3. Customer Module

- Basic customer registration: name, phone.
- Purchase history.

### 4. Dashboard

- Daily KPIs: today's sales, top-selling products, low-stock alerts.

### 5. Login & Roles

- Login via email or WhatsApp.
- Roles: owner / employee (in future versions).

---

## 🧱 Tech Stack

### 🔧 Backend (Java + Spring Boot)

- **Spring Boot** – fast and production-ready Java framework.
- **Spring Security** – authentication with JWT and role-based access control.
- **PostgreSQL** – robust relational database.
- **JPA / Hibernate** – ORM for database interaction.
- **Maven** – build and dependency management.
- **Swagger / OpenAPI** – auto-generated API documentation.

### 💻 Web Frontend

- **Next.js + TypeScript** – modern and scalable React framework.
- **TailwindCSS** – utility-first CSS framework for fast UI styling.
- **Zustand** (or Redux) – state management.
- **Axios** – HTTP client for consuming the backend API.

### 📱 Future

- Mobile version using React Native or Expo.

---


## 📁 Project Structure

```
InventoSum/
├── backend/                    # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/inventosum/
│   │   │   │   ├── config/           # Configuration classes
│   │   │   │   ├── controller/       # REST controllers
│   │   │   │   ├── dto/              # Data Transfer Objects
│   │   │   │   ├── entity/           # JPA entities
│   │   │   │   ├── repository/       # Data repositories
│   │   │   │   ├── service/          # Business logic
│   │   │   │   ├── security/         # Security configuration
│   │   │   │   └── InventoSumApplication.java
│   │   │   └── resources/
│   │   │       ├── application.yml
│   │   │       └── db/migration/     # Database migrations
│   │   └── test/                     # Test files
│   ├── pom.xml                       # Maven dependencies
│   └── .mvn/                         # Maven wrapper
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/               # Next.js 13+ app directory
│   │   ├── components/        # Reusable components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── store/            # Zustand state management
│   │   └── types/            # TypeScript type definitions
│   ├── public/               # Static assets
│   ├── package.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── tsconfig.json
├── .gitignore
└── README.md
```


## 📱 Target Audience

Small business owners who:

- Are not tech-savvy.
- Want to manage their store **without headaches**.
- Need a visual, easy-to-use system accessible from their phone.

---

## 🌱 Current Status

> 🚧 In development  
> We are actively working on the MVP modules. If you'd like to collaborate, test the system, or give feedback—you're welcome!

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to your branch: `git push origin feature/new-feature`
5. Open a Pull Request.

---

## 🧑‍💻 Author

**Jonatan Sánchez Ibarra**  
Fullstack developer passionate about creating accessible, scalable tools for real-world businesses.  
[LinkedIn](https://www.linkedin.com/in/jonatan-sanchez-ibarra-6a8585127/) · · [Github](https://github.com/Jony21SI)

---

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
