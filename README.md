# Matermind Game

Mastermind is a puzzle game in which one player (the
codebreaker) tries to guess the code their opponent
(the codemaker) comes up with. The game is played on
a board with two kinds of pegs:

1. Big colorful pegs used by both players:
   to form the code, as well as for the guesses.
2. Small black and white pegs, used by the
   codemaker to give feedback to the codebreaker.

The codemaker chooses a pattern of four code pegs (duplicates are allowed). The chosen pattern is
placed in the four holes covered by the shield, visible to the codemaker but not to the codebreaker.
The codebreaker tries to guess the pattern, in both order and color. Each guess is made by placing a row
of code pegs on the decoding board.
Once placed, the codemaker provides feedback by placing 0‐4 key pegs in the small holes of the row
with the guess. A red key peg is placed for each code peg from the guess which is correct in both color
and position. A white key peg indicates the existence of a correct color code peg placed in the wrong
position.

## Example of the game

![Example of game](/images/example.png)

In the image above the big circles represents the guesses and the little dots represents the hints.

Looking at the little dots you can see that the first one (red dot) is telling the user
that the green guess is correct in both color and position. And the third dot (white dot)
is telling the user that there is indeed a blue color in the code but is not in
the correct position.