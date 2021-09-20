export async function fetchWithTimeout(url, options = {}) {
  const { timeout = 30000 } = options;

  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}