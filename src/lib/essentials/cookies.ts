import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
    'use server'

    const c = await cookies();

    c.set({
        httpOnly: true,
        path: "/",
        name,
        value: JSON.stringify(value),
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000), // Expires in 1 day
    })
}

export async function getCookie(name: string) {
    'use server'

    const c = await cookies();
    const cookieValue = c.get(name);

    if (cookieValue) {
        return JSON.parse(cookieValue.value);
    }

    return null;
}

export async function deleteCookie(name: string) {
    'use server'

    const c = await cookies();
    c.delete(name);
}