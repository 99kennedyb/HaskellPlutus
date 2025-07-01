-- Etape 1: Définition des fonctions

double :: Int -> Int  -- Type de signature de la fonction
double x = x * 2      -- Multiplie par 2

listEt :: String      -- Une chaîne simple
listEt = "Kenedi"

increment :: Int -> Int
increment x = x + 1

doubleThenIncrement :: Int -> Int
doubleThenIncrement x = double x + 1  -- On applique double, puis on ajoute 1

greaterThan18 :: Int -> Bool
greaterThan18 x = x > 18

-- Etape 2: Fonction principale

main :: IO ()
main = do
  print $ double 70
  print listEt
  print $ increment 30
  print $ doubleThenIncrement 2
  print $ greaterThan18 20
