const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllCountries() {
    try {
        const res = await fetch(BASE_URL);

        if (!res.ok) {
            throw new Error("Fetch əməliyyatı zamanı xəta baş verdi!" , res)
        };
        const data = await res.json();
        return data
    } catch (error) {
        console.error(error.message || "fetch zamanı xəta baş verdi!");
    }
};

export default getAllCountries
