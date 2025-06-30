// User types
export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  phone?: string;
  role: "OWNER" | "EMPLOYEE";
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  fullName: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Product types
export interface Product {
  id: number;
  name: string;
  code?: string;
  description?: string;
  purchasePrice: number;
  salePrice: number;
  stock: number;
  minStock: number;
  category?: string;
  barcode?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  code?: string;
  description?: string;
  purchasePrice: number;
  salePrice: number;
  stock: number;
  minStock?: number;
  category?: string;
  barcode?: string;
  imageUrl?: string;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: number;
}

// Customer types
export interface Customer {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerRequest {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

export interface UpdateCustomerRequest extends Partial<CreateCustomerRequest> {
  id: number;
}

// Sale types
export interface SaleItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Sale {
  id: number;
  saleNumber: string;
  customerId?: number;
  customerName?: string;
  items: SaleItem[];
  total: number;
  paymentMethod: "CASH" | "CARD" | "TRANSFER" | "OTHER";
  notes?: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  createdAt: string;
  updatedAt: string;
}

export interface CreateSaleRequest {
  customerId?: number;
  items: {
    productId: number;
    quantity: number;
    unitPrice: number;
  }[];
  paymentMethod: "CASH" | "CARD" | "TRANSFER" | "OTHER";
  notes?: string;
}

// Dashboard types
export interface DashboardStats {
  totalProducts: number;
  totalCustomers: number;
  totalSales: number;
  totalRevenue: number;
  lowStockProducts: number;
  todaySales: number;
  todayRevenue: number;
}

export interface SalesChartData {
  date: string;
  sales: number;
  revenue: number;
}

export interface TopProduct {
  id: number;
  name: string;
  totalSold: number;
  totalRevenue: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: any;
}
