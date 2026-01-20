const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any[];
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('token');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiClient(API_BASE_URL);

// Auth API
export const authAPI = {
  signup: async (data: {
    name: string;
    email: string;
    role: 'creator' | 'client';
    password?: string;
    profession?: string;
    portfolioUrl?: string;
    projectBrief?: string;
  }) => {
    const response = await api.post('/auth/signup', data);
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },

  getMe: async () => {
    return api.get('/auth/me');
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

// Artists API
export const artistsAPI = {
  getAll: async (params?: { featured?: boolean; role?: string }) => {
    const query = new URLSearchParams();
    if (params?.featured) query.append('featured', 'true');
    if (params?.role) query.append('role', params.role);
    const queryString = query.toString();
    return api.get(`/artists${queryString ? `?${queryString}` : ''}`);
  },

  getBySlug: async (slug: string) => {
    return api.get(`/artists/${slug}`);
  },

  create: async (data: {
    name: string;
    role: string;
    bio: string;
    heroImage: string;
    gallery?: string[];
    featured?: boolean;
  }) => {
    return api.post('/artists', data);
  },

  update: async (slug: string, data: any) => {
    return api.put(`/artists/${slug}`, data);
  },

  delete: async (slug: string) => {
    return api.delete(`/artists/${slug}`);
  },
};

// Contact API
export const contactAPI = {
  submit: async (data: {
    name: string;
    email: string;
    message: string;
    artistId?: string;
  }) => {
    return api.post('/contact', data);
  },
};

