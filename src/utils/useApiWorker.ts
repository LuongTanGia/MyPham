// src/utils/useApiWorker.ts
export const useApiWorker = <T = any, P = any>(type: string) => {
  return (payload?: P): Promise<T> => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(new URL('../workers/api.worker.ts', import.meta.url), { type: 'module' })

      worker.onmessage = ({ data }) => {
        const { success, data: result, error } = data
        success ? resolve(result) : reject(error)
        worker.terminate()
      }

      worker.onerror = (err) => {
        reject(err)
        worker.terminate()
      }

      worker.postMessage({ type, payload })
    })
  }
}
