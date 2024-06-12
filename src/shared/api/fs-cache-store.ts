import { CacheRequestConfig, NotEmptyStorageValue, StorageValue, buildStorage } from 'axios-cache-interceptor';
import FileSystemCache from 'file-system-cache';

// Create a `file-system-cache` instance
const cache = FileSystemCache({
    basePath: './.cache', // Path where cache files will be stored
    ns: 'http-cache' // Namespace to avoid potential conflicts
});

// Custom storage implementation
export const customFileStorage = buildStorage({
    async set(key: string, value: NotEmptyStorageValue, currentRequest?: CacheRequestConfig): Promise<void> {
        await cache.set(key, value);
    },
    async remove(key: string, currentRequest?: CacheRequestConfig): Promise<void> {
        await cache.remove(key);
    },
    async find(key: string, currentRequest?: CacheRequestConfig): Promise<StorageValue | undefined> {
        const value = await cache.get(key);
        return value !== undefined ? value : undefined;
    }
});
