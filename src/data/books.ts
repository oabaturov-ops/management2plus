export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  pdfUrl?: string;
  externalUrl?: string;
  coverUrl?: string;
}

export const books: Book[] = [
  // Добавляй книги по шаблону:
  // {
  //   id: "slug-knigi",
  //   title: "Название книги",
  //   author: "Автор",
  //   description: "Описание книги",
  //   pdfUrl: "/books/filename.pdf",
  //   externalUrl: "",
  //   coverUrl: "/books/cover.jpg"
  // },
];