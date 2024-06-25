import { CacheRequestConfig, NotEmptyStorageValue, StorageValue, buildStorage } from 'axios-cache-interceptor';
import FileSystemCache from 'file-system-cache';
import fs from 'fs';
import path from 'path';

let cacheInstance: ReturnType<typeof FileSystemCache> | null = null;

/**
 * Inicialização lazy da instância FileSystemCache.
 * Garante que o diretório de cache exista e cria uma única instância
 * de FileSystemCache apenas quando necessário.
 *
 * @returns {FileSystemCache} Instância de FileSystemCache
 */
const getCacheInstance = () => {
    if (!cacheInstance) {
        const cacheDir = path.join('/tmp', 'http-cache');
        fs.promises.mkdir(cacheDir, { recursive: true }).catch(console.error);
        cacheInstance = FileSystemCache({
            basePath: cacheDir,
            ns: 'http-cache'
        });
    }
    return cacheInstance;
};

type CustomFileStorage = ReturnType<typeof buildStorage> & {
    clear?: () => Promise<void>;
};

// Implementação customizada de armazenamento de cache em disco
export const customFileStorage: CustomFileStorage = buildStorage({
    async set(key: string, value: NotEmptyStorageValue, currentRequest?: CacheRequestConfig): Promise<void> {
        try {
            const cache = getCacheInstance();
            await cache.set(key, value);
        } catch (error) {
            console.error('Error setting cache:', error);
        }
    },
    async remove(key: string, currentRequest?: CacheRequestConfig): Promise<void> {
        try {
            const cache = getCacheInstance();
            await cache.remove(key);
        } catch (error) {
            console.error('Error removing cache:', error);
        }
    },
    async find(key: string, currentRequest?: CacheRequestConfig): Promise<StorageValue | undefined> {
        try {
            const cache = getCacheInstance();
            const value = await cache.get(key);
            return value !== undefined ? value : undefined;
        } catch (error) {
            console.error('Error finding cache:', error);
            return undefined;
        }
    }
})

customFileStorage.clear = async () => {
    try {
        const cache = getCacheInstance();
        await cache.clear();
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
}