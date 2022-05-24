function fetchImage(topic) {
    return fetch(`https://pixabay.com/api/?key=26835333-f3f2e8c3d3f3fe0d53393333d&q=${topic}`)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            
            return Promise.reject(new Error(`There is no photos on this ${topic}`));
        });
};

const api = {
    fetchImage,
};

export default api;