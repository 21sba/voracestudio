export async function fetchWorks() {
    try {
        const res = await fetch('works_list.json');
        if (!res.ok) throw new Error('Network response was not ok');
        const works = await res.json();
        return works;
    } catch (err) {
        console.error('Failed to load works_list.json', err);
        return [];
    }
}

export function loadStickers() {
    return [
        'assets/images/stickers/vorace-sticker1.png',
        'assets/images/stickers/vorace-sticker2.png',
        'assets/images/stickers/vorace-sticker3.png',
    ];
}

export async function preloadImages(urls, onProgress) {
    const total = urls.length;
    let loaded = 0;
    const report = () => {
        if (typeof onProgress === 'function' && total > 0) {
            onProgress(loaded / total);
        }
    };
    report();
    const tasks = urls.map((url) => new Promise((resolve) => {
        if (!url) {
            loaded++;
            report();
            return resolve();
        }
        const img = new Image();
        const done = () => {
            loaded++;
            report();
            resolve();
        };
        img.onload = done;
        img.onerror = done;
        img.src = url;
    }));
    await Promise.allSettled(tasks);
    if (typeof onProgress === 'function') onProgress(1);
}

export function updateLoaderProgress(p) {
    try {
        if (window.Loader && typeof window.Loader.setProgress === 'function') {
            window.Loader.setProgress(p || 0);
        }
    } catch (_) { }
}
