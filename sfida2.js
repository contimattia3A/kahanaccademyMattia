<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fun Facts and Information</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }

        h1, h2 {
            font-family: fantasy;
            border-bottom: 1px solid rgb(230, 230, 230);
            padding: 3px;
        }

        h1:hover, h2:hover {
            background-color: rgb(248, 255, 199);
        }

        p {
            font-family: sans-serif;
        }

        /* Animal Group Names */
        .animal-images img {
            max-width: 150px;
            margin-right: 10px;
        }

        /* Descendants of Khan */
        .emperor {
            font-family: cursive;
        }

        .reign {
            font-family: monospace;
        }

        table .emperor {
            background-color: red;
        }

        table .reign {
            background-color: gray;
        }

        /* Periodic Table */
        .metal {
            color: red;
        }

        .non-metal {
            color: blue;
        }

        .semi-metal {
            color: purple;
        }

        h2.metal {
            background-color: red;
            color: white;
        }

        h2.non-metal {
            background-color: blue;
            color: white;
        }

        h2.semi-metal {
            background-color: purple;
            color: white;
        }

        /* Classy Gallery */
        .image-small {
            width: 150px;
        }

        .image-medium {
            width: 200px;
        }

        .black-frame {
            border: 8px double rgb(38, 38, 38);
        }

        .gold-frame {
            border: 10px ridge rgb(255, 183, 0);
            margin: 7px;
        }

        .silver-frame {
            border: 10px groove rgb(204, 204, 204);
        }

        /* Clouds */
        #cloud-pic {
            width: 100px;
            float: left;
            margin: 7px;
        }

        #cloud-sidebar {
            background: rgb(255, 255, 219);
            float: right;
            width: 30%;
            margin: 7px;
        }

        /* Grouper */
        .info {
            background-color: gold;
        }

        .first-sentence {
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Animal Group Names</h1>
    <p>For many species of animals, there are names that we use to refer to a group of them - like a flock of birds. Here are a few you might not know.</p>

    <h2>A skulk of foxes</h2>
    <p>Also called a "leash."</p>
    <div class="animal-images">
        <img src="https://www.kasandbox.org/programming-images/animals/fox.png" alt="Fox">
        <img src="https://www.kasandbox.org/programming-images/animals/fox.png" alt="Fox">
    </div>

    <h2>A clowder of cats</h2>
    <p>Also called a "pounce", "glaring", "kindle", or "clutter."</p>
    <div class="animal-images">
        <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Cat">
        <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Cat">
    </div>
    <p><a href="http://en.wikipedia.org/wiki/List_of_animal_names">Learn more on Wikipedia</a></p>

    <button onclick="toggleAnimals()">Mostra/Nascondi Animali</button>

    <h1>A Classy Gallery</h1>
    <img src="https://www.kasandbox.org/programming-images/animals/cat.png" class="image-small black-frame" alt="Cat">
    <img src="https://www.kasandbox.org/programming-images/animals/fox.png" class="image-medium gold-frame" alt="Fox">
    <img src="https://www.kasandbox.org/programming-images/animals/penguins.png" class="image-small silver-frame" alt="Penguins">

    <h1>What are Clouds?</h1>
    <img id="cloud-pic" src="https://www.kasandbox.org/programming-images/landscapes/clouds-from-plane.png" alt="Clouds from plane">
    <div id="cloud-sidebar">
        <h5>Why are some clouds yellow?</h5>
        <p>Yellowish clouds may occur in the late spring through early fall months during forest fire season. The yellow color is due to the presence of pollutants in the smoke. Yellowish clouds caused by the presence of nitrogen dioxide are sometimes seen in urban areas with high air pollution levels.</p>
    </div>
    <p>In meteorology, a cloud is a visible mass of liquid droplets or frozen crystals made of water or various chemicals suspended in the atmosphere above the surface of a planetary body. These suspended particles are also known as aerosols and are studied in the cloud physics branch of meteorology.</p>
    <p>Terrestrial cloud formation is the result of air in Earth's atmosphere becoming saturated due to either or both of two processes: cooling of the air and adding water vapor. With sufficient saturation, precipitation will fall to the surface.</p>
    <p><a href="http://en.wikipedia.org/wiki/Cloud">Read more on Wikipedia</a></p>

    <script>
        function toggleAnimals() {
            const images = document.querySelectorAll('.animal-images');
            images.forEach((div) => {
                div.style.display = (div.style.display === 'none') ? 'block' : 'none';
            });
        }
    </script>

</body>
</html>
