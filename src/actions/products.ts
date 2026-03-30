"use server"

import { ApiResponse, Product, Category } from "@/types"

const BASE_URL = process.env.API_BASE_URL

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 3600 }
  })
  const json: ApiResponse<Product[]> = await res.json()
  return json.data
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 }
  })
  const json: ApiResponse<Category[]> = await res.json()
  return json.data
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    next: { revalidate: 3600 }
  })
  const json: ApiResponse<Product[]> = await res.json()
  return json.data
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 }
  })
  const json: ApiResponse<Product> = await res.json()
  return json.data
}