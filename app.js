
const page = document.getElementById("page")
const homeBtn = document.getElementById("home-btn")
const aboutBtn = document.getElementById("about-btn")
const projectsBtn = document.getElementById("proj-btn")


aboutBtn.addEventListener("click", ()=>{
    page.innerHTML = `
        <div id="aboutPara">
            <p>In Summer of 2021 I began  my jourey to become a web developer. Over
            this time I have gained many skills, and I can't wait to keep learning.</p>
            
            <p> I am now comfortable developing my own projects using HTML, CSS and Javascipt. I have
            also gotten the chance to work with the MERN stack to learn both frontend and backend development
            on a more complex level.</p>
            
            <p>In my journey to become a web developer, I've completed the requirements 
            to receive a Professional Certificate in Coding from MIT. This was a great experience 
            and I look forward to working more with these technologies going forward.</p> 
            
            <div id = "credentials">
                <a target = "_blank" href="resume.pdf">Resume</a>
                <a target = "_blank" href="https://certificates.emeritus.org/57074521-baf0-41da-b68a-65e83fabf138">Certificate</a>
            </div
            
        </div>
    
    `
    aboutBtn.classList.add("active-link")
    homeBtn.classList.remove("active-link")
    projectsBtn.classList.remove("active-link")

})


projectsBtn.addEventListener("click", ()=>{
    page.innerHTML = `
        <div id = "projects-div">
            <div class = "proj">
                <img class = "project-img" src = "images/shmowder.png">

                <div class = "project-txt">
                    <h4><a target="_blank" href="https://jackiebd.github.io/pixologic/">Pixologic</a></h4>
                        <p>A pixel style browser game
                        where you can explore a town. 
                        <br>
                        <a target="_blank" href = "https://github.com/jackieBD/pixologic">Code on Github</a>
                        </p>
                </div>
            </div>

            <div class = "proj">
            <img class = "project-img" src = "images/wizzyicon.png">

            <div class = "project-txt">
                    <h4><a target="_blank" href="https://jackiebd.github.io/wiz-battle/">Wizard Battle</a></h4>
                    <p>RPG inspired web browser game. Roll dice to defeat monsters.
                    <br>
                    <a target="_blank" href = "https://github.com/jackieBD/wiz-battle">Code on Github</a>
                    </p>
            </div>
        </div>


            <div class = "proj">
                <img class = "project-img" src = "images/mm.png">

                <div class = "project-txt">
                    <h4><a target="_blank" href="https://jackiebd.github.io/mmvsing/">Mudman vs Ingenium</a></h4>
                        <p>A browser game where 
                        you try to win a superhero battle.
                        <br>
                        <a target="_blank" href = "https://github.com/jackieBD/mmvsing">Code on Github</a>
                        </p>
                </div>
            </div>

            <div class = "proj">
                <img class = "project-img" src = "images/hanged.png">

                <div class = "project-txt">
                    <h4><a target="_blank" href="https://jackiebd.github.io/OneCardReading/">One Card Reading</a></h4>
                        <p> Recieve a message in this
                            tarot card experience.
                        <br>
                        <a target="_blank" href = "https://github.com/jackieBD/OneCardReading">Code on Github</a>
                        </p>
                </div>                       
            </div>

            <div class = "proj">
                <img class = "project-img" src = "images/boredbot.png">

                <div class = "project-txt">
                        <h4><a target="_blank" href="https://jackiebd.github.io/bored-bot/">Bored Bot</a></h4>
                        <p>A bot that gives you activities to cure boredom.
                        <br>
                        <a target="_blank" href = "https://github.com/jackieBD/bored-bot">Code on Github</a>
                        </p>

                </div>
            </div>
            
            <div class = "proj">
                <img class = "project-img" src = "images/colors.png">

                <div class = "project-txt">
                        <h4><a target="_blank" href="https://jackiebd.github.io/color-generator/">Color Generator</a></h4>
                        <p>Randomly selects as many colors as you choose.
                        <br>
                        <a target="_blank" href = "https://github.com/jackieBD/color-generator">Code on Github</a>
                        </p>
                </div>
            </div>


        </div>    
    `
    projectsBtn.classList.add("active-link")
    homeBtn.classList.remove("active-link")
    aboutBtn.classList.remove("active-link")

})

homeBtn.addEventListener("click", ()=>{
    page.innerHTML = `
        <iframe src="https://www.youtube.com/embed/9Py6iKwdFJY" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    `
    homeBtn.classList.add("active-link")
    projectsBtn.classList.remove("active-link")
    aboutBtn.classList.remove("active-link")

})
