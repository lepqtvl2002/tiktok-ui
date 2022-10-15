import request from "~/utils/request";

export async function search(q, type = "less") {
    try {
        const response = await request.get("users/search", {
            params: {
                q,
                type,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}
