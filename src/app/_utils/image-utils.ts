import { environment } from '@environments/environment';
import { fileURLToPath } from 'url';

export const IMG_UTILS = {

    imageFrom(img: string): string {
        if (!img) {
            return `/assets/placeholder-avatar.jpg`;
        }
        return `${environment.apiUrl}/images/${img}`
    }
}
