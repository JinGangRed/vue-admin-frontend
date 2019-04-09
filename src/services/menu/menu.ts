import request from '@/utils/request.ts';
export function menus() {
    return request({
        url: "/",
        method: 'Get',
    })
}
