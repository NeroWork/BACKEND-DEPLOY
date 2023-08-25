const log = async (level) => {
    const resp = await fetch(`https://backend-16d8.onrender.com/logger/${level}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
}