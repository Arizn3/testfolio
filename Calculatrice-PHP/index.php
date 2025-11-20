<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Calculatrice PHP" content="Calculatrice">
    <link rel="stylesheet" href="./style-calculatrice.css">
</head>

<body>
    <header>
        <div>
            <button class="boutonRetour">Menu</button>
        </div>
    </header>
    <main>
        <div class="divAffichageResultat">
            <p>Result</p>
        </div>
        <section>
            <div class="nombres">
                <button>1</button>
                <button>2</button>
                <button> <?php echo 3?> 3</button>
                <br>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <br>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <br>
                <button>0</button>
                <button>.</button>
                <button>clear</button>
            </div>
            <div class="operateurs">
                <button>+</button>
                <button>-</button>
                <br>
                <button>x</button>
                <button>/</button>
                <br>
                <button>=</button>
            </div>
        </section>
    </main>
    <footer>
    </footer>
</body>

</html>