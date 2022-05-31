window.onload = () => {
    getRepos();
};

const theme = localStorage.getItem('theme') === 'dark'
    ? '&hide_border=ture&bg_color=2F343D&title_color=96CCE7&text_color=B0CBE7'
    : ''

function getRepos() {
    fetch('https://api.github.com/users/nullnyat/repos',{cache:'no-cache'})
        .then((res) => res.json())
        .then((json) => {
            const list = document.getElementById('github-repos');
            json.forEach((repo) => {
                const a = document.createElement('a');
                const img = document.createElement('img');
                img.src = `https://github-readme-stats.vercel.app/api/pin/?username=nullnyat&repo=${repo.name}${theme}`;
                img.alt = `github-repos`
                a.href = repo.html_url;
                a.append(img);
                list.appendChild(a);
            });
        });
}