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

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Node.js 18 or higher
- PostgreSQL 14 or higher

### Database Setup

#### **Windows**

1. **Install PostgreSQL**:

   - Download the installer from: https://www.postgresql.org/download/windows/
   - Run the installer and follow the setup wizard
   - Remember the password you set for the `postgres` user
   - The default port is 5433

2. **Create the database**:

   ```cmd
   # Open Command Prompt as Administrator
   # Navigate to PostgreSQL bin directory (adjust path as needed)
   cd "C:\Program Files\PostgreSQL\17\bin"

   # Connect to PostgreSQL
   psql -U postgres

   # Enter your password when prompted
   # Create database
   CREATE DATABASE inventosum;

   # Exit psql
   \q
   ```

3. **Alternative: Use pgAdmin**:
   - Open pgAdmin (installed with PostgreSQL)
   - Connect to your server
   - Right-click on "Databases" → "Create" → "Database"
   - Name it "inventosum"

#### **macOS**

1. **Install PostgreSQL using Homebrew** (recommended):

   ```bash
   # Install Homebrew if you don't have it
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install PostgreSQL
   brew install postgresql@15

   # Start PostgreSQL service
   brew services start postgresql@15
   ```

2. **Or install using the official installer**:

   - Download from: https://www.postgresql.org/download/macosx/
   - Run the installer and follow the setup wizard

3. **Create the database**:

   ```bash
   # Connect to PostgreSQL (Homebrew installation)
   psql postgres

   # Or if using official installer
   psql -U postgres

   # Create database
   CREATE DATABASE inventosum;

   # Exit psql
   \q
   ```

#### **Linux (Ubuntu/Debian)**

1. **Install PostgreSQL**:

   ```bash
   sudo apt update
   sudo apt install postgresql postgresql-contrib

   # Start PostgreSQL service
   sudo systemctl start postgresql
   sudo systemctl enable postgresql
   ```

2. **Create the database**:

   ```bash
   # Switch to postgres user
   sudo -u postgres psql

   # Create database
   CREATE DATABASE inventosum;

   # Exit psql
   \q
   ```

### Backend Setup

#### **Windows**

1. **Install Java 17**:

   - Download OpenJDK 17 from: https://adoptium.net/
   - Run the installer
   - Add Java to PATH (usually done automatically)
   - Verify installation:

   ```cmd
   java -version
   ```

2. **Install Maven** (optional, since we use Maven wrapper):

   - Download from: https://maven.apache.org/download.cgi
   - Extract to a folder (e.g., `C:\Program Files\Apache\maven`)
   - Add to PATH: `C:\Program Files\Apache\maven\bin`

3. **Setup the backend**:

   ```cmd
   # Navigate to backend directory
   cd backend

   # Configure database connection
   # Edit src/main/resources/application.yml with your PostgreSQL credentials
   # Update the password field with your PostgreSQL password

   # Run the application
   mvnw.cmd spring-boot:run
   ```

#### **macOS**

1. **Install Java 17**:

   ```bash
   # Using Homebrew
   brew install openjdk@17

   # Add to PATH (add this to your ~/.zshrc or ~/.bash_profile)
   echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc

   # Verify installation
   java -version
   ```

2. **Setup the backend**:

   ```bash
   # Navigate to backend directory
   cd backend

   # Configure database connection
   # Edit src/main/resources/application.yml with your PostgreSQL credentials

   # Run the application
   ./mvnw spring-boot:run
   ```

#### **Linux**

1. **Install Java 17**:

   ```bash
   sudo apt update
   sudo apt install openjdk-17-jdk

   # Verify installation
   java -version
   ```

2. **Setup the backend**:

   ```bash
   # Navigate to backend directory
   cd backend

   # Configure database connection
   # Edit src/main/resources/application.yml with your PostgreSQL credentials

   # Run the application
   ./mvnw spring-boot:run
   ```

### Frontend Setup

#### **Windows**

1. **Install Node.js**:

   - Download from: https://nodejs.org/
   - Run the installer
   - Verify installation:

   ```cmd
   node --version
   npm --version
   ```

2. **Setup the frontend**:

   ```cmd
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install

   # Configure API endpoint (if needed)
   # Edit src/lib/api.ts if your backend runs on a different port

   # Run the development server
   npm run dev
   ```

#### **macOS**

1. **Install Node.js**:

   ```bash
   # Using Homebrew
   brew install node

   # Verify installation
   node --version
   npm --version
   ```

2. **Setup the frontend**:

   ```bash
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install

   # Configure API endpoint (if needed)
   # Edit src/lib/api.ts if your backend runs on a different port

   # Run the development server
   npm run dev
   ```

#### **Linux**

1. **Install Node.js**:

   ```bash
   # Using NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Verify installation
   node --version
   npm --version
   ```

2. **Setup the frontend**:

   ```bash
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install

   # Configure API endpoint (if needed)
   # Edit src/lib/api.ts if your backend runs on a different port

   # Run the development server
   npm run dev
   ```

### Testing the Communication

1. **Start both services**:

   ```bash
   # Terminal 1 - Backend
   cd backend
   ./mvnw spring-boot:run  # macOS/Linux
   mvnw.cmd spring-boot:run  # Windows

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

2. **Test API communication**:

   - Open browser developer tools (F12)
   - Go to the Network tab
   - Navigate through the frontend
   - You should see API calls to `localhost:8080/api`

3. **Check for errors**:
   - Backend logs will show in the terminal where you ran the Spring Boot command
   - Frontend errors will show in the browser console and terminal

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

## 🔧 Development Commands

### Backend Commands

```bash
cd backend

# Run the application
./mvnw spring-boot:run  # macOS/Linux
mvnw.cmd spring-boot:run  # Windows

# Clean and build
./mvnw clean compile  # macOS/Linux
mvnw.cmd clean compile  # Windows

# Run tests
./mvnw test  # macOS/Linux
mvnw.cmd test  # Windows

# Package the application
./mvnw package  # macOS/Linux
mvnw.cmd package  # Windows
```

### Frontend Commands

```bash
cd frontend

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🐛 Troubleshooting

### Common Issues

#### **Windows Specific**

1. **Maven wrapper not working**:

   ```cmd
   # If mvnw.cmd doesn't work, use Maven directly
   mvn spring-boot:run
   ```

2. **PostgreSQL connection issues**:

   - Check if PostgreSQL service is running:

   ```cmd
   # Open Services (services.msc)
   # Look for "postgresql-x64-15" service
   # Make sure it's running
   ```

3. **Port already in use**:

   ```cmd
   # Check what's using port 8080
   netstat -ano | findstr :8080

   # Kill the process (replace PID with the actual process ID)
   taskkill /PID <PID> /F
   ```

#### **macOS Specific**

1. **Permission denied for Maven wrapper**:

   ```bash
   chmod +x backend/mvnw
   ```

2. **PostgreSQL not starting**:

   ```bash
   # Check if PostgreSQL is running
   brew services list | grep postgresql

   # Start PostgreSQL if not running
   brew services start postgresql@15
   ```

3. **Java not found**:
   ```bash
   # Add Java to PATH
   echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

#### **General Issues**

1. **Backend won't start**:

   - Check if PostgreSQL is running
   - Verify database credentials in `application.yml`
   - Check if port 8080 is available

2. **Frontend can't connect to backend**:

   - Ensure backend is running on port 8080
   - Check browser console for CORS errors
   - Verify API_BASE_URL in `src/lib/api.ts`

3. **Database connection issues**:

   - Ensure PostgreSQL is running
   - Check database name, username, and password
   - Verify PostgreSQL is listening on port 5432

4. **Port conflicts**:
   - Backend: Change port in `application.yml`
   - Frontend: Change port in `package.json` scripts

### Useful Commands

#### **Windows**

```cmd
# Check if PostgreSQL is running
sc query postgresql-x64-15

# Check if ports are in use
netstat -ano | findstr :8080
netstat -ano | findstr :5432

# View backend logs
type backend\logs\application.log

# Clear frontend cache
cd frontend && rmdir /s /q .next && npm run dev
```

#### **macOS/Linux**

```bash
# Check if PostgreSQL is running
brew services list | grep postgresql  # macOS
sudo systemctl status postgresql      # Linux

# Check if ports are in use
lsof -i :8080
lsof -i :5432

# View backend logs
tail -f backend/logs/application.log

# Clear frontend cache
cd frontend && rm -rf .next && npm run dev
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
