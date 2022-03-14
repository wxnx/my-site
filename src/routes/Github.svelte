<script>
    let Stats = 'https://github-readme-stats.vercel.app/api?username=wxnx&show_icons=true&theme=dark&custom_title=Github%20Stats&layout=compact&count_private=true';
    let Used_Language = 'https://github-readme-stats.vercel.app/api/top-langs/?username=wxnx&langs_count=100&layout=compact&theme=dark&custom_title=Most%20Used%20Languages&card_width=440&count_private=true';
    let Coding_Stats = 'https://github-readme-stats.vercel.app/api/wakatime?username=wxnx&theme=dark&custom_title=Weekly%20Coding%20Stats&card_width=440';
</script>

<main>
    <h2>
        Github
    </h2>
    <table>
        <tr>
            <img src={Stats} alt="">
        </tr>
        <tr>
            <img src={Used_Language} alt="">
        </tr>
        <tr>
            <img src={Coding_Stats} alt="">
        </tr>
    </table>
    
    <h3>Ongoing Projects</h3>
    <a href="https://github.com/wxnx/my-site">
        <img src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=my-site&theme=dark" alt="" />
    </a>
</main>

<style>
    main{
        text-align: center;
    }
</style>

