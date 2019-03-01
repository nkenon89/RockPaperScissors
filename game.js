    console.log("js file linked!");

    // variable that holds our play and reset buttons 

    var playButton = document.getElementById('play');
    var resetButton = document.getElementById('reset');

    // variable that specifies target div for dynamic content

    var fluxContent = document.getElementById('fluxContent');
    var fluxContent2 = document.getElementById('fluxContent2');

    // when the play button is clicked...

    playButton.addEventListener('click', function() {
        console.log("play button was clicked");
        updateScoreboard();
    
    });

    function updateScoreboard() {
        fluxContent.innerHTML = `
        <h2>Scoreboard</h2>
        <p>Your Score: ${wins}</p>
        <p>Computer Score: ${losses}</p>
        <p>Draws: ${draws}</p>
        `;
    };

    resetButton.addEventListener('click', function() {
        console.log("rest button was clicked");
        location.reload();
    })
    
    // variables for storing game data

        var wins = 0;
        var losses = 0;
        var draws = 0;

        // user input: whenever the user presses a key...

        document.onkeyup = function (event) {

            var userInput = event.key.toLowerCase();
            var compChoices = ["r", "p", "s"];
            var randomNum = (Math.floor(Math.random() * Math.floor(3)));
            var compInput = compChoices[randomNum];

            function wordify(x) {
                if (x === "r") {
                    return "Rock"
                } else if (x === "p") {
                    return "Paper";
                } else if (x === "s")
                    return "Scissors";
            };

            // functions that will print different content to the screen and update the score

            function youWon() {
                wins += 1;
                updateScoreboard();
                fluxContent2.innerHTML = `
                <div class="col-lg-4 border border-primary p-4">
                <p>The Computer Guesed: ${wordify(compInput)}</p>
                <p>You Guessed: ${wordify(userInput)}</p>
                <p>You win!</p>
                </div>
                `;
            }

            function youLost() {
                losses += 1;
                updateScoreboard();
                fluxContent2.innerHTML = `
                <div class="col-lg-4 border border-primary p-4">
                <p>The Computer Guesed: ${wordify(compInput)}</p>
                <p>You Guessed: ${wordify(userInput)}</p>
                <p>You Lose!</p>
                </div>
                `;
            }

            function itsaDraw() {
                draws += 1;
                updateScoreboard();
                fluxContent2.innerHTML = `
                <div class="col-lg-4 border border-primary p-4">
                <p>The Computer Guesed: ${wordify(compInput)}</p>
                <p>You Guessed: ${wordify(userInput)}</p>
                <p>It's a Draw!</p>
                </div>
                `;

            }

            // game logic

            if (userInput === compInput) {
                console.log(userInput)
                console.log(compInput)
                itsaDraw();
            }

            else if (userInput === "r" && compInput === "p") {
                console.log(userInput)
                console.log(compInput)
                youLost();

            }

            else if (userInput === "r" && compInput === "s") {
                console.log(userInput)
                console.log(compInput)
                youWon();

            }

            else if (userInput === "p" && compInput === "s") {
                console.log(userInput)
                console.log(compInput)
                youLost();


            }

            else if (userInput === "p" && compInput === "r") {
                console.log(userInput)
                console.log(compInput)
                youWon();

            }

            else if (userInput === "s" && compInput === "r") {
                console.log(userInput)
                console.log(compInput)
                youLost();

            }

            else if (userInput === "r" && compInput === "p") {
                console.log(userInput)
                console.log(compInput)
                youWon();

            }
        }