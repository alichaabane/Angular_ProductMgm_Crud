export class SearchResponse<T> {
  content: T[];
  totalRecords: number;
  totalPages?: number;

  public constructor(content: T[], totalRecords: number, totalPages: number) {
    this.content = content;
    this.totalRecords = totalRecords;
    this.totalPages = totalPages;
  }

}
