export interface IClient {
  id: number;
  name: string;
  salary_price: number;
  company_price: number;
  created_at: string;
  updated_at: string;
}

export interface IClientCreate {
  name: string;
  salary_price: number;
  company_price: number;
}

export interface IClientEdit {
  id: number;
  name?: string;
  salary_price?: number;
  company_price?: number;
}

export interface IClientResponse {
  total: number;
  clients: IClient[];
}
