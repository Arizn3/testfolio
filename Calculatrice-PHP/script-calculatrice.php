<?php

class Calculatrice
{
    public $valeurA = 3;
    public $valeurB = 6;
    public $operateur = '+';

    // function __construct($valeurA, $valeurB, $operateur)
    // {
    //     $this->valeurA = $valeurA;
    //     $this->valeurB = $valeurB;
    //     $this->operateur = $operateur;
    // }

    function verifieValeurs($nb)
    {
        if ($this->operateur == '') {
            $this->valeurA += $nb;
        } else {
            $this->valeurB += $nb;
        };
    }

    function verifieOperateur($operateur)
    {
        $this->operateur = $operateur;
    }

    function calcule()
    {
        $resultat = '';
        match ($this->operateur) {
            '+' => $resultat = $this->valeurA + $this->valeurB,
            '-' => $resultat = $this->valeurA - $this->valeurB,
            '*' => $resultat = $this->valeurA * $this->valeurB,
            '/' => $resultat = $this->valeurA / $this->valeurB,
            default => 'Erreur'
        };
        return $resultat;
    }
};





$maCalculatrice = new Calculatrice();

echo $maCalculatrice->valeurA . ' ';
echo $maCalculatrice->operateur . ' ';
echo $maCalculatrice->valeurB . ' ';
echo '=';

$resultat = $maCalculatrice->calcule();
echo ' ' . $resultat;
