/**
 * Converte um objeto em uma URLSearchParams.
 */
export function obj2SearchParams<T extends object>(obj: T) {
    const urlParams = new URLSearchParams();
    Object.entries(obj).forEach(([key, value]) => {
        urlParams.append(key, value);
    });
    return urlParams;
}

/**
 * Converte um objeto em uma chave única.
 */
export function obj2key<T extends object>(obj: T) {
    return Object.values(obj).join('-');
}