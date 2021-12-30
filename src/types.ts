export interface PromisifiedTimeout {
  (ms: number): Promise<void>
}
