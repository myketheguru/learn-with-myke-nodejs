export interface ICourse {
    id: string,
    title: string,
    description: string,
    price: string,
    baseCurrency: string,
    categoryId: string,
    lessons: any[],
    materials: any[]
  }