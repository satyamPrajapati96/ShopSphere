# 🛍️ ShopSphere

A modern and responsive e-commerce frontend built with **React, JavaScript, HTML, and CSS**.

ShopSphere provides a clean shopping experience with product search, category filtering, sorting, wishlist management, shopping cart functionality, and persistent data using LocalStorage.

## 🚀 Features

* 🔍 Product search
* 🏷️ Category-based filtering
* ↕️ Product sorting by price and rating
* 🛒 Add to cart
* ➕ Increase/decrease product quantity
* 🗑️ Remove products from cart
* ❤️ Wishlist functionality
* 💾 Cart and wishlist persistence using LocalStorage
* 📱 Responsive design for desktop, tablet, and mobile
* ⭐ Product ratings
* 🏷️ Product badges
* 🎨 Modern and clean user interface
* ⚡ Fast development using Vite

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **HTML / JSX**
* **CSS**
* **Vite**
* **LocalStorage**
* **ESLint**

## 📂 Project Structure

```text
ShopSphere/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── index.html
└── vite.config.js
```

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/satyamPrajapati96/ShopSphere.git
```

### 2. Open the project

```bash
cd ShopSphere
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:5173
```

## 🛒 How It Works

Products are stored in a JavaScript data file and rendered dynamically using React components.

The application uses React state to manage:

* Search
* Category selection
* Sorting
* Shopping cart
* Wishlist

Cart and wishlist data are stored in the browser using **LocalStorage**, allowing the data to remain available after refreshing the page.

## 📱 Responsive Design

ShopSphere is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The layout automatically adapts using CSS media queries.

## 🔮 Future Improvements

* User authentication
* Product details page
* Backend and database integration
* Real payment gateway
* Order history
* Admin dashboard
* Product reviews
* Real product API integration

## 👨‍💻 Author

**Satyam Prajapati**

Built as a frontend development project to practice and demonstrate React, JavaScript, CSS, and responsive web development.

## 📄 License

This project is created for learning and portfolio purposes.
