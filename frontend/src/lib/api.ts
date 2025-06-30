import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = Cookies.get("auth_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          // Token expired or invalid
          Cookies.remove("auth_token");
          Cookies.remove("user");
          window.location.href = "/auth";
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async login(username: string, password: string) {
    const response = await this.client.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  }

  async register(userData: any) {
    const response = await this.client.post("/auth/register", userData);
    return response.data;
  }

  async getCurrentUser() {
    const response = await this.client.get("/auth/me");
    return response.data;
  }

  // Product endpoints
  async getProducts(params?: any) {
    const response = await this.client.get("/products", { params });
    return response.data;
  }

  async getProduct(id: number) {
    const response = await this.client.get(`/products/${id}`);
    return response.data;
  }

  async createProduct(productData: any) {
    const response = await this.client.post("/products", productData);
    return response.data;
  }

  async updateProduct(id: number, productData: any) {
    const response = await this.client.put(`/products/${id}`, productData);
    return response.data;
  }

  async deleteProduct(id: number) {
    const response = await this.client.delete(`/products/${id}`);
    return response.data;
  }

  async getLowStockProducts() {
    const response = await this.client.get("/products/low-stock");
    return response.data;
  }

  // Customer endpoints
  async getCustomers(params?: any) {
    const response = await this.client.get("/customers", { params });
    return response.data;
  }

  async getCustomer(id: number) {
    const response = await this.client.get(`/customers/${id}`);
    return response.data;
  }

  async createCustomer(customerData: any) {
    const response = await this.client.post("/customers", customerData);
    return response.data;
  }

  async updateCustomer(id: number, customerData: any) {
    const response = await this.client.put(`/customers/${id}`, customerData);
    return response.data;
  }

  async deleteCustomer(id: number) {
    const response = await this.client.delete(`/customers/${id}`);
    return response.data;
  }

  // Sale endpoints
  async getSales(params?: any) {
    const response = await this.client.get("/sales", { params });
    return response.data;
  }

  async getSale(id: number) {
    const response = await this.client.get(`/sales/${id}`);
    return response.data;
  }

  async createSale(saleData: any) {
    const response = await this.client.post("/sales", saleData);
    return response.data;
  }

  async updateSale(id: number, saleData: any) {
    const response = await this.client.put(`/sales/${id}`, saleData);
    return response.data;
  }

  async deleteSale(id: number) {
    const response = await this.client.delete(`/sales/${id}`);
    return response.data;
  }

  // Dashboard endpoints
  async getDashboardStats() {
    const response = await this.client.get("/dashboard/stats");
    return response.data;
  }

  async getSalesChartData(period: string = "7d") {
    const response = await this.client.get(
      `/dashboard/sales-chart?period=${period}`
    );
    return response.data;
  }

  async getTopProducts(limit: number = 5) {
    const response = await this.client.get(
      `/dashboard/top-products?limit=${limit}`
    );
    return response.data;
  }

  // Utility methods
  setAuthToken(token: string) {
    Cookies.set("auth_token", token, { expires: 7 }); // 7 days
  }

  removeAuthToken() {
    Cookies.remove("auth_token");
    Cookies.remove("user");
  }

  isAuthenticated(): boolean {
    return !!Cookies.get("auth_token");
  }
}

export const apiClient = new ApiClient();
export default apiClient;
