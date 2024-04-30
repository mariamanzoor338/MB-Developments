import toast from "react-hot-toast";

export const BASE_URL = "https://backend-server-hero.onrender.com";

export const fetchHeroes = async () => {
    try {
        const res = await fetch(`${BASE_URL}/hero`);
        const data = await res.json();
        return data;
    } catch (error) {
        toast.error(error.message);
    }
};

export const deleteHero = async (id, token) => {
    try {
        await fetch(`${BASE_URL}/hero?id=${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        toast.success("Successfully deleted!!!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const addHero = async (data, token) => {
    try {
        const formData = new FormData();
        formData.append("description", data.description);
        formData.append("punchline", data.punchline);
        formData.append("image", data.image);

        const res = await fetch(`${BASE_URL}/hero`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const responseData = await res.json();
        console.log(responseData);
        toast.success("Successfully Added!!!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchCareers = async () => {
    try {
        const res = await fetch(`${BASE_URL}/career`);
        const data = await res.json();
        return data;
    } catch (error) {
        toast.error(error.message);
        return;
    }
};

export const deleteCareer = async (id, token) => {
    try {
        await fetch(`${BASE_URL}/career?id=${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        toast.success("Successfully deleted!!!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const addCareer = async (data, token) => {
    try {
        await fetch(`${BASE_URL}/career`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        toast.success("Successfully Added!!!");
    } catch (error) {
        toast.error(error.message);
    }
};
