export class SearchResponse<T> {
  data: T[];
  totalRecords: number;
  totalPages?: number;

  public constructor(data: T[], totalRecords: number, totalPages: number) {
    this.data = data;
    this.totalRecords = totalRecords;
    this.totalPages = totalPages;
  }

}
