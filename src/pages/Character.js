const Character = () => {
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="image" alt="image">
                <h2>Name</h2>
            </article>
            <article className="Characters-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Specoes:</h3>
                <h3>Genre:</h3>
                <h3>Origin:</h3>  
                <h3>Las Location:</h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;