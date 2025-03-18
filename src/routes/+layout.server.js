
import { APP_NAME } from '$env/static/private';

export async function load() {
    const dataModule = await import('$lib/content/header-footer.json', {
        assert: { type: 'json' }
    });
    const data = dataModule.default;
    
    data.year = new Date().getFullYear();
    data.appName = APP_NAME;

    return {
        data
    };
}

